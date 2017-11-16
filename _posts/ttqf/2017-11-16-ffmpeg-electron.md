---
layout: post
title: "FFMPEG And Electron"
date: 2017-11-16 14:15:00
permalink: "/ffmpeg-electron.html"
description: "How to use ffmpeg with the fluent-ffmpeg node library in electron."
youtube: 
image: 
categories: 
- ttqf
- blog
tags:
- ffmpeg
---


I was recently asked about how to use [ffmpeg](https://www.ffmpeg.org/) with the[ fluent-ffmpeg node library](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) in [electron](https://electron.atom.io/), and I had some notes[ in the autoEdit documentation](https://pietropassarelli.gitbooks.io/autoedit-2-documentation/content/ffmpeg-and-ffprobe-in-electron.html) but since they were at some sort of at draft stage I decided to expand more on this here, to make a more clear and comprehensive explanation. 

I am going to use the code from the implementation of[ autoEdit.io](http://autoEdit.io) as well as an earlier "transcriber prototype" as a concrete example. 

For those not familiar with it autoEdit is a text based video editing app for mac os x,[ check out the website](http://autoEdit.io) , [README](https://github.com/OpenNewsLabs/autoEdit_2) and[ user manual ](https://pietropassarelli.gitbooks.io/autoedit2-user-manual/content/)for more details.

## What’s what? 

First things first let’s introduce the components will need to make sure you are familiar with it.

### [`Ffmpeg`](https://www.ffmpeg.org/)

> A complete, cross-platform solution to record, convert and stream audio and video.

Very powerful go to option for open source manipulation of audio and video files.

### [`ffprobe`](https://ffmpeg.org/ffprobe.html) 

> ffprobe gathers information from multimedia streams and prints it in human- and machine-readable fashion.

It basically reads metadata information from audio and video files. 

### [Electron](https://electron.atom.io/) 

> Build cross platform desktop apps with JavaScript, HTML, and CSS.

It basically allows you to package your app wit a custom version of the V8 engine which powers chrome to make it self contained, and if you wish, with the right adjustments, cross platform compatible. 

### [`fluent-ffmpeg` node](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

It’s a library that wraps around the ffmpeg binary and provides an easier interface to run ffmpeg commands while in node. [It also supports running commands for ffprobe](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#ffmpeg-and-ffprobe). 

### `ffmpeg-static`

>ffmpeg static binaries for Mac OSX and Linux and Windows

In this context[ I used a modified version](https://github.com/pietrop/ffmpeg-static), I’ll describe/explain in more details later. [From the original repository.](https://github.com/eugeneware/ffmpeg-static)

### `ffprobe-static`

>Static binaries for ffprobe

Equivalent for ffprobe as described above for ffmpeg. And as above In this context[ I used a modified version](https://github.com/pietrop/ffprobe-static), I’ll describe/explain in more details later. [From the original repository.](https://github.com/joshwnj/ffprobe-static)

### [`electron-builder`](https://github.com/electron-userland/electron-builder)

> A complete solution to package and build a ready for distribution Electron app with "auto update" support out of the box [https://electron.build](https://electron.build)

Is what we’ll use for packing our code base into an electron app that can be built and distributed to users. For example, for mac os x it can create a dmg or zip file to distrubute the app. 

As a side note, if you are using github,[ github releases](https://help.github.com/articles/creating-releases/) are a great way to host the packaged app distribution. See [autoEdit](http://www.autoedit.io/) example where if you click on "Download Os X app" it [takes you to the releases page.](https://github.com/OpenNewsLabs/autoEdit_2/releases) 

### Node modules
Last but not least see [here more details on using export/require for node modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/) if you are not familiar with it or need a refresher.

## Electron and FFMPEG

When using fluent-ffmpeg, ffmpeg (and ffprobe) normally the library assumes that the binary is installed and[/or the path available as an environment variable, as described here](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#ffmpeg-and-ffprobe).

However, in context like electron, you don’t want to go and interfere with the user's systems configurations too much. For example what if they have another installation of ffmpeg that is slightly different and doesn’t have the dependencies you might need for the one in your app?

So we don’t want to either assume ffmpeg/ffprobe that is installed nor install it on their system as it could lead to conflicts and confusion. Nor do we want to make it as a requirement for the users to have that specific version we might need installed, as ffmpeg/ffprobe can be complicated to install and troubleshoot. 

[Luckily is possible to set the path to ffmpeg and ffprobe binary](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#setting-binary-paths-manually).  And that is our preferred choice for packaging ffmpeg inside electron. 

## A Simple example: [Transcriber prototype](http://pietropassarelli.com/Transcriber-prototype.html ) 

[This was a prototype](http://pietropassarelli.com/Transcriber-prototype.html ) to test whether users would accept automatically transcribed text, before building the first version of autoEdit 2 on top of IBM Watson STT service.

It’s very simple, you give it an audio or video file and it returns a plain text automated transcription.

Disclaimer: It was a throwaway project to test that hypothesis [see issues in repo for reasons why it’s not distribution ready](https://github.com/voxmedia/Transcriber/issues). However, these have been addressed and improved in [autoEdit 2](http://autoedit.io).

This project also uses [nwjs](https://nwjs.io/) (formerly "node web-kit") while autoEdit was later refactored to use electron. But for the purpose of adding support for ffmpeg, this is irrelevant for now.

Back to our point, in this use case, when working with STT a common problem is converting audio or video to the audio file format that meets the specs of the STT API. In this working prototype, I had a module to do just that [`video_to_audio.js`](https://github.com/voxmedia/Transcriber/blob/master/video_to_audio_processing/video_to_audio.js).

```js
/*
* convert video file to audio
* use node fluent ffmpeg (to be able to specify path to ffmpeg binary)
* and to avoid security issues associated with calling child process making system calls to ffmpeg.
* IBM API Audio settings from sam's github gist https://gist.github.com/antiboredom/9bed969c8b2f89ea4b6c#file-transcribe-js-L18
*
*/

var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
// Setting ffmpeg path to ffmpeg binary for os x so that ffmpeg can be packaged with the app.
ffmpeg.setFfmpegPath("./bin/ffmpeg")
//because of the nature of ffmpeg, this can take both audio or video files as input
function convertToWav(file,output, cb) {
  var  audioBitRateFor100mbSize='2';
  var aud_file =  output;
  var comand = ffmpeg(file)
                .noVideo()
                .audioCodec('pcm_s16le')
                .audioChannels(1)
                .audioFrequency(16000)
                .audioBitrate(audioBitRateFor100mbSize, true)
                // .videoBitrate(audioBitRateFor100mbSize, true)
                .output(aud_file)
                .on('progress', function(progress) {
                  //  progress // {"frames":null,"currentFps":null,"currentKbps":256,"targetSize":204871,"timemark":"01:49:15.90"}
                  console.log('Processing: ' + progress.timemark + ' done ' + progress.targetSize+' kilobytes');
                })
                .on('end',
                //listener must be a function, so to return the callback wrapping it inside a function
                  function(){
                    cb(aud_file)
                  }
                  || function() {
                       console.log('Finished processing');
                    }
                ).run();
}

module.exports = convertToWav;

```

As you can see [at line 12](https://github.com/voxmedia/Transcriber/blob/master/video_to_audio_processing/video_to_audio.js#L12) we are setting the path to the ffmpeg binary. 

```js
ffmpeg.setFfmpegPath("./bin/ffmpeg")
```

Where [`bin/ffmpeg` corresponding to the path](https://github.com/voxmedia/Transcriber/tree/master/bin) where the ffmpeg binary for Mac OS X is located in the repository. When packaging/building the app for distribution this binary will be included with it.

### Advantages and disadvantages 

On the plus side this is a pretty straightforward implementation but some of its limitations are that it does not account for cross-platform distribution eg if you are making if for Mac Linux and PC, or even different type of architecture, such as 64 or 32 bits if you were to support both newer and older computers. To do so you’d need a way to recognize the os and architecture and use the right binary. 

Let’s consider a more involved example that gives more flexibility.

## Cross platform setup example: [autoEdit 2](http://autoedit.io)

In [autoEdit](http://autoedit.io) the audio/video conversion to obtain an audio that meets the STT API specs is a bit more involved and handled with a series of components. 

Without getting too deep into the low-level implementation, there's an [`interactive_transcription_generator`](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/interactive_transcription_generator) module that uses other components to create a transcription, read metadata, and create a video preview.  It delegates the communication with the STT APIs to the [`transcriber`](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/interactive_transcription_generator/transcriber) component. Which uses other modules to split the media into 5 minutes chunks to speed up the transcription time. Such as the [`trimmer`, module which trims a video or audio file.](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/transcriber/trimmer.js#L45) as part of this process. 

With this overview in mind let's look at how the `ffmpeg` + `electron` integration was done in this app.

### `Config.js` file 

In autoEdit, there is a [`config.js` file at the root of the project](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/config.js  ). This module can be required anywhere in the application to access shared resources. 


This config module contains [the path to both ffmpeg and ffprobe binaries](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/config.js#L12). 

At a minimum, this is what this module should do, require binary path from `ffmpeg-static` and make it available at the root of the project in the config module

```js
var ffmpegPath = require('ffmpeg-static').path;

module.exports = {
    ...
    ffmpegPath: ffmpegPath
    ...
};
```

### Packaging the ffmpeg/ffprobe binaries

As you might have noticed [the config module contains the path to ffmpeg](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/config.js#L6) and [to ffprobe](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/config.js#L7). And to do so it’s relying on an external module. [`ffmpeg-static`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json#L121) and [`ffprobe-static`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json#L122). 

`static-ffmpeg` module contains pre-built binaries for ffmpeg for the various operating system.

This gives you the advantage that you could be developing this app on Mac, Linux, and windows, without ffmpeg on your machine and could still be developing contributing to each OS version (with a few tweaks to the build process depending on the OS). 


<!-- move this -->

The other advantage is that if you wish you can change the ffmpeg binary that you want to ship with your electron app with a version that might have a specific set of dependencies.

<!-- end move this -->

In the case of autoEdit, it is a mac only app, but I tried to keep option to make windows and Linux version open as much as possible where it didn’t require a lot of extra effort to avoid it from becoming too much of an undertaking should I decide to do that in the future. 

The key reason why I ended up [forking the original](https://help.github.com/articles/fork-a-repo/) and creating my own version for simplicity is that as we’ll see in later section,  when packaging the app, [`electron-builder`](https://github.com/electron-userland/electron-builder) can recognise the operating system and architecture of the machine you are on,which is useful for including /excluding the binaries for that distribution. 

 But when `electron-builder` recognizes a Mac computer it recognizes it as the string `mac`. While `static-ffmpeg` uses the [`os`](https://nodejs.org/api/os.html) module [`os.platform()`](https://github.com/pietrop/ffmpeg-static/blob/master/index.js#L4) which recognises a Mac computer as the string `darwin`. ([`os` module also explained in more simple terms here](https://www.w3schools.com/nodejs/ref_os.asp))

This means that if we want to use `electron-builder` and `ffmpeg-static` to have consistent file path to the ffmpeg binary we are packing inside electron both for providing a file path to use with `fluent-ffmpeg` in our code base, as well as for including the right binary for the right os distribution and excluding the rest we need the os name for mac os x to be consistent. 

So In my version of `static-ffmpeg` I [changed the folder to the mac binary to be called `mac` instead of `darwin`](https://github.com/pietrop/ffmpeg-static/tree/master/bin/mac/x64). And [added a bit of logic so that when `os` module recognizes it as darwin it gets assigned as `mac`](https://github.com/pietrop/ffmpeg-static/blob/master/index.js#L6).

```javascript
var os = require('os')

var platform = os.platform()
//patch for compatibilit with electron-builder, for smart built process.
if(platform == "darwin"){
    platform = "mac";
}else if(platform == "win32"){
    platform = "win";
}
```

And as you can see [ the same thing was done for windows to change from `win32` to `win` for the same reason.](https://github.com/pietrop/ffmpeg-static/blob/master/index.js#L8)

To best understand the `ffmpeg-static`module is [useful to look the part where the path to the binary is constructed](https://github.com/pietrop/ffmpeg-static/blob/master/index.js#L23) using the [`path`](https://nodejs.org/api/path.html) module and [`platform` variable to construct the file path](https://github.com/pietrop/ffmpeg-static/blob/master/index.js#L26).

```js
var ffmpegPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win' ? 'ffmpeg.exe' : 'ffmpeg'
)
```

I did something equivalent for my version of [`ffprobe-static`](https://github.com/pietrop/ffprobe-static).

However [what’s missing is the logic for the support for Linux binary in the index.js file](https://github.com/pietrop/ffmpeg-static/blob/master/index.js) even tho [the binaries for Linux are in the repository](https://github.com/pietrop/ffmpeg-static/tree/master/bin/linux). Pull request welcome, should you have a use case where support for Linux is needed and want to contribute to this.  

### Requiring the path

As an example, we have seen a whirlwind overview of the autoEdit architecture for the transcription and video conversion part at the beginning of this section. As you might remember there’s a module that [sets the ffmepg path, `trimmer.js`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/transcriber/trimmer.js#L45).


```js
ffmpeg.setFfmpegPath(config.ffmpegBin);
```

While the module that requires the ffmpeg path is the [`interactive_transcription_generator`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/index.js#L84) which requires it from the config module.


```js
var ffmpegPath  = require("../../config.js").ffmpegPath;
```

And then passes it [as a config parameter to the transcriber module](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/index.js#L125) which then gets passed down the chain all the way to our `trimmer` module we saw in the previous section.

### Packaging/build electron app

The problem with this setup is that we don’t want to have the binary for windows and Linux in the mac distribution as that would take up a lot of space. And we ideally want to keep our electron app as lightweight as possible. 

In order to do that we have to add some logic to our build script to only package the binary for the os that we are building for. 

Using [`electron-builder`](https://github.com/electron-userland/electron-builder) there is a files notation that can be used to specify these rules in [`package.json`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json).

Where the `${os}` and `${arch}` variable give you operating system(Mac, Linux, pc) and architecture (32 or 64 bits). 

In [`package.json`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json) you can set the files to include/exclude as follows. 

```json 
...
    "files": [
      "**/*",
      "!config/",
      "!spec/",
      "!project_page/",
      "!vendor/",
      "!docs/",
      "!dist/",
      "!assets/",
      "node_modules/ffmpeg-static/bin/${os}/${arch}/ffmpeg",
      "node_modules/ffmpeg-static/index.js",
      "node_modules/ffmpeg-static/package.json",
      "node_modules/ffprobe-static/bin/${os}/${arch}/ffmpeg",
      "node_modules/ffprobe-static/index.js",
      "node_modules/ffprobe-static/package.json"
    ],
    "copyright": "2017 Pietro Passarelli",
    "mac": {
      "category": "public.app-category.productivity",
      "files": [
        "!node_modules/ffmpeg-static/bin/win${/*}",
        "!node_modules/ffmpeg-static/bin/linux${/*}",
        "!node_modules/ffprobe-static/bin/win${/*}",
        "!node_modules/ffprobe-static/bin/linux${/*}"
      ]
    },
...
```

More details on this in [`electron-builder` documentation](https://www.electron.build/configuration/configuration).

## End

That's it, hope this gives you an idea of how to go about adding ffmpeg in your electron app.   

If you have any thoughts, questions, ideas, alternatives, get in touch via email or twitter [@pietropassarell](http://twitter.com/pietropassarell).   

