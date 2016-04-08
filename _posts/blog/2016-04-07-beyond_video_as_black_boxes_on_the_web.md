---
layout: post
title: "Beyond 'video as black boxes'"
image:
date: '2013-04-08T01:30:00.000+01:00'
description: "Various interesting uses of video on the web, both in form of tools and editorial projects."
published: true
permalink: "/videoBox.html"
categories:
- blog
- articles
tags:
---

This is a modified version of the second chapter, literature review, of the final project dissertation I did for UCL Msc in CS (2015).

The project consisted of identifying a problem statment, and developing a software application as part of a placement at The Times & Sunday Times in London.

The resulting application was [quickQuote, a tool to easily identify and share video quotes, you can read more about it here](http://pietropassarelli.com/quickQuote.html).

The porpuse of this blog post is to keep an up to date list of projects that are doing interesting things to do with video on the web. I am mostly interested in projects were we go behinnd video as black box on the web, and get a programmatic access into the video. Often times this is done with the use of time-coded transcriptions.

## Background

### Newsroom challenges
To best understand the challenges in developing software in a news environment, I referred to the leaked New York Times Innovation report.
 <!-- ref -->

<!-- expand -->
The biggest issue highlighted in the report was that flagship projects such as snow fall <!-- ref -->
were time consuming and a lot of effort went into the making of a one of piece with a relatively short life span.

>We are focused on building tools to create [snow falls](http://www.nytimes.com/projects/2012/snow-fall/#/?part=tunnel-creek) every day, and getting them as close to reporters as possible. I'd rather have a snow-fall builder then a snowfall.
>- Kevin Delaney, editor of Quartz [p36 NY Times Innovation report on NiemLab]( http://www.niemanlab.org/2014/05/the-leaked-new-york-times-innovation-report-is-one-of-the-key-documents-of-this-media-age/)

The NY Times competitors such as BuzzFeed, were instead able to separate form from content. The best example is a [dialect quiz by the NY Times](http://www.nytimes.com/interactive/2013/12/20/sunday-review/dialect-quiz-map.html?_r=0), that was widely popular, and BuzzFeed, inspired by the format made a ["Quizz builder"](http://www.buzzfeed.com/ariellecalderon/buzzfeed-quiz-guide#.tt6LgemGe)
and after the first release, published 20 variations with minimal effort.  

This consideration of building a system rather then a one of editorial piece is the initial inspiration behind most of the projects I've been working on, which you can read more about here: [autoEdit](http://pietropassarelli.com/autoEdit.html), [Interactive databate #buildTheNews](http://pietropassarelli.com/buildTheNews.html), [OneStory at BBC #newsHack](http://pietropassarelli.com/oneStory.html), [quickQuote - Times & Sunday Times](http://pietropassarelli.com/quickQuote.html).

### V.A.R.K.
The other consideration that guides most of the projects I work on comes from [VARK](http://vark-learn.com/the-vark-questionnaire/), idea of the variety of learning styles.

Simply put, different people learn in different ways. Five main learning styles are identified, visual, auditory, reading and writing, kinaesthetic and multi-modal. The core concept is that each individual as one (or more) preferred learning style. But also, more crucially, that the same information can be delivered in different ways to meet the different learning styles.
Applying this consideration to the publishing of news article, forces  us to re-consider the publishing of text based articles and the use of multimedia to engage a wider audience taking into account the variety of learning styles.

As a practicl example, in the making of [quickQuote](http://pietropassarelli.com/quickQuote.html) this consideration guided a lot of the assumptions to test through the investigation of the problem. And in fact in the final web application the process of adding the corresponding video segment to a text quote, is taking into account the variety of learning styles. As the viewer is being delivered information both through auditory and reading and writing.


## Projects

I am now going to consider similar solutions and different approaches to working with video transcriptions on the web.
These are going to be divided into tools, and editorial.
Tools are those projects that allow the user to make something, such as provided a video and returning transcriptions. While editorial are those projects that are more about the content and the delivery of information. I will start with the editorial project as we will see, in this context  they often are a starting point for developing tools.

### Editorial

##### Aljazeera Debate Obama - Romney

[![Aljazeera Obama-Romney Debate - Mark Boas](/img/img_chp2_context/aljazeera_obama_romney.png)](http://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html)

In [the Aljazeera Obama - Romney debate](http://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html) the word accurate hypertranscript was done manually.

What I like about this project is that it gives a way into the video, allowing to search the text, and provide some basic infographic, through a pie chart, on the search terms, you can see how many time the respective candidates have mentioned a certain word.

You can see the code [open source on github](https://github.com/maboa/uselect) <!-- ref to github project -->

I looked into the code from this open source project by [Mark Boas](https://twitter.com/maboa)  both at [The Times Build the news hackaton](pietropassarelli.com/buildTheNews.html) and at [BBC news hackaton](pietropassarelli.com/oneStory.html).

Some of the differences from my implementation are due to the technology that was available at the time it was implemented.
It uses [JPlayer](http://jplayer.org/), it's not responsive, and does not use [bootstrap](getbootstrap.com).
It uses [popcorn js](http://popcornjs.org) to make the hypertranscript connection with the video.
While I decided to make the most of the [HTML5 Video tag](http://www.html5rocks.com/en/tutorials/video/basics/) for that feature.

It's also interesting about this project that the developer put an ["Easter egg"](https://en.wikipedia.org/wiki/Easter_egg_(media)#Software) that would let the user play only the sentences with a certain word in it, adding the query in the URL `?k=economy&t=1000`.
Where "economy" could be any keyword, and `t` is for the time interval we wish to assign to each sentence.


[`http://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html?k=economy&t=100`](http://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html?k=economy&t=1000)



However this was not made available as a function  in the actual GUI of the application.

This feature is similar to the `video grep` project discussed below.


##### Aljazeera Obama state of the union archive
This project generalises the previous one at an archive level.
But again as far as I am aware no automation was used to deal with the transcriptions or the different video input.

![Aljazeera Obama state of the Union - Mark Boas](/img/img_chp2_context/Aljazeera_Obama_state_of_union.png)

This is where I got the idea for [a system that could take a video in perform some kind of analyses](http://pietropassarelli.com/buildTheNews.html).

Also interesting about this project, is that there is a section providing a summary for each video.

##### Palestinian remix

![Hyperaudio](/img/img_chp2_context/palestineremixer.png)
[Palestinian remix](http://interactive.aljazeera.com/aje/PalestineRemix)
It's an archive of documentary film about palestine, that allows the viewer/user to create their own text based edit. See [demo](http://interactive.aljazeera.com/aje/PalestineRemix/remix_main.html#!/1)

However the "final cut" cannot be exported as video file, but can be shared online.


##### Mandela speech
The Times & Sunday Times newsroom develoepr [Ændrew Rininsland](https://twitter.com/aendrew) made piece about Mandela (paywall).
The Hypertranscript was done using using [hyper audio converter](http://hyperaud.io/converter/) ([code on gihub](https://github.com/hyperaudio/ha-converter)) component of hyperaudio,
But the transcription was done manually using  VLC and Notepad and subsequently a software to make subtitles, adding the text with in and out points, to then get an srt to convert in hypertranscript maker. Which as you can imagine was a time consuming process.


![Mandela Hypertransript - Ændrew](/img/img_chp2_context/mandela.png)

The piece used audio only. what I like about it, is that the text changes color as the audio is playing, as you can see in the screenshot.

Built with a Google docs-based back-end using [doctop](https://github.com/times/doctop) and [getbootstrap.com](Bootstrap) front-end.

However the project relying on google doc as a backend, through [doctop](https://github.com/times/doctop) or [tabletop](https://github.com/jsoma/tabletop) are at risk of being effected by google changes in the API.

Perhaps better solution to make the most of the convenience of using google docs as a CMS for the journalist would be to keep google docs in sync with a database that updates the application. this way if the connection between the database and google docs where to drop due to changes in the API the front end of the application would not be effected.

#### Tools

##### F5 Transcription

[F5](https://www.audiotranskription.de/english/f4.htm) is a transcription tool, made by German academics. It allows the user to transcribe a video manually, with a convenient interface the application provides timecode stamps on new line input.

![F5 Transcriptions](/img/img_chp2_context/F5_transcription.png)



##### F4 Analyses
in subsequent versions of F5 they released F4 analyse, which allows to takes those same transcriptions and add human tagging to it for qualitative analyses.

Very interesting is the idea of providing insight into text of transcription coding it's content with tags, and adding summary, this however is done manually by the user, while during the investigation I was interested in automating this part.


##### oTranscribe
Made by newsroom developer at WSJ [Elliot Bentley](https://twitter.com/elliot_bentley) it's very popular with journalists.
<!-- ref http://otranscribe.com -->

It facilitates manual transcriptions of video and audio, with intuitive interface and a few keyboards short-cuts.

![oTranscribe - WSJ](/img/img_chp2_context/oTranscribe.png)


No automation of the transcription process thou.

supports adding time stamps similarly to F5, and it lets the user export as markdown, plain text or json. As well as to save to Google drive.

##### YouTube captioning       
YouTube has a captioning service and clickable transcriptions.
However their transcription is mostly aimed at subtitles and even in the transcription view, it's not word accurate, it's line accurate, perhaps because it uses the subtitle file generated during the captioning to model the hyper-transcript.

![YouTube Captioning Transcriptions](/img/img_chp2_context/youtube_captioning_transcriptions.png)


![YouTube editor to edit captions](/img/img_chp2_context/youtube_captions.png)

The advantage of YouTube automated captioning is that it is constantly improving and becoming more and more accurate. The screenshots above might in fact be out of date already and is worth looking it up for yourself to see if anything interesting as changed from the time of writing.

YouTube also provides a [data API](https://developers.google.com/youtube/v3/docs/captions/download)to retrieve captions.
however it was not clear how you would go about retrieve automatically generated captions through the API, as these need for the language to be set before the caption is generated.

But most importantly the disadvantage is that, in version two google announced it was going to discontinue access to the captioning service through the API.

However despite this still being available through version 3 of the API.

Google/YouTube might have no commitment on their part in maintaining this service as part of the API long term, as they have recently launched launched [Cloud Speech API](https://cloud.google.com/speech/?utm_source=google&utm_medium=cpc&utm_campaign=2015-q2-cloud-na-solutions-bkws-freetrial-en&gclid=Cj0KEQjwrZ24BRC098fr-OqnuMkBEiQAKQ9lgJaRlwhGeDmdGPm8XAJSXwEal7jlBEy6DH1Tyt2g3VUaAm6S8P8HAQ).


Automatically generated transcriptions are a big component of these type of project. Therefore is sensible to define an interface for the speech to text API component in order to be able to change speech to text provider in the future should the service being discontinued, or found a better solution.

##### Spoken data

![spokendata](/img/img_chp2_context/spokendata.png)

<!-- Despite having used YouTube captioning for great part of the prototyping of projects mentioned at the beginning of the post, to get the `srt` file of the transcription as in input to the application before integrating the speech to text api component. when it come to implement such component Spoken data turned out to be a better fit. -->

Spoken data is mostly tailored at small teams of professional transcribers, but also individuals requiring transcriptions.
<!-- ref -->

With it being a smaller company they were more responsive in making changes.
For instance I needed to be able to delete a video uploaded to their system through the API,(to avoid issues of duplicates in their dashboard if the user uploads, deleted and uploads again the same video in my application) and they were very quick at implementing that feature.

They also provided other functionalities such as a view to edit the transcription, with a defined URL that can be accessed with the `uid` of the video. This could be useful to give the users of my app a way to edit automated transcriptions without having to implement it from scratch.

```
http://spokendata.com/transcription/5937
```

For more on their [API see here](https://spokendata.com/api-for-developers), which also provides speaker diarization.

Spoken data also offer the option to pay a human through their system to go over the transcriptions and make them 100% accurate. Which is a great option if you want to outsource your transcriptions completly but retain some control over the process.

Checkout the [demo account](https://spokendata.com/demo/start).


##### Trint

If you are looking for a semi automated workflow when working with transcription, where a first draft is generated for you automatically and you can then review and polish it up, [Trint](https://trint.com/) has probably the best, easiest user experience.

![Trint](/img/img_chp2_context/trint.png)

However Trint is not open source and it is a commercial project. But they do give you some free time to begin with if you want to check it out.

Interesting is the possibility, borrowed from the autoEdit export to EDL component, to export selections as EDL.

##### Hypertrasncript converter
[Mark Boas](https://twitter.com/maboa) has automated the process of parsing srt files into an hypertranscript with an [hypertranscript converter](https://github.com/maboa/hyperaudioconverter ) written in JavaScript, this library was developed to support hyperaudio pad project .

It's all  client facing javascript

![hyperaudio converter - Mark Boas](/img/img_chp2_context/hyperaudio_converter.png)

From the line accurate time code of the srt file it works out a word accurate hypertranscript, with each word in a span tag with a relative time attribute.

The parses was initially from the [popcorn library `popcorn.parserSRT.js`](https://github.com/mozilla/popcorn-js/blob/master/parsers/parserSRT/popcorn.parserSRT.js)

<!-- an analyses of this algorithm, can be found in the appendix, as this was converted from js to ruby to move this conversion logic in the back end of the application. -->

##### Video grep

A project by [Sam Lavine](https://twitter.com/sam_lavigne) ([blog](http://lav.io/)), as name suggests [video grep](http://lav.io/2014/06/videogrep-automatic-supercuts-with-python/) ([code on github](https://github.com/antiboredom/videogrep) ) it's a command line utility to search audio or video file and return a file with cut segment.

There is also a [audio grep](https://github.com/antiboredom/audiogrep) version.

It seems to be composed of a Python library that given a video media ([code on github](https://github.com/antiboredom/videogrep) [lib doc](https://pypi.python.org/pypi/videogrep/0.4.4))
<!-- ref video grep example  -->
you can search and [return all the sentences where the word "time" is mentioned from a film](https://www.youtube.com/watch?v=PQMzOUeprlk )  or this example where using same tool it extracted [all the parts in the speech where Jay Carney, the former Press Secretary says “what I can tell”](https://www.youtube.com/watch?v=D7pymdCU5NQ).  this does use our subtitle file associated with the video as a starting point and then Video Using FFMPEG.

>videogrep requires the subtitle track and the video file to have the exact same name, up to the extension

However in the project page there is also a link to a OSX mac app version (using electron and node [http://saaaam.s3.amazonaws.com/VideoGrep.app.zip](http://saaaam.s3.amazonaws.com/VideoGrep.app.zip)) of video grep which provides a GUI to the command line utility, as well as the possibility to add a video and have a transcriptions been automatically generated.

The transcription is generated using [pocketsphinx](https://github.com/cmusphinx/pocketsphinx) running locally offline on your system.

![Video Grep - mac app using electron](/img/img_chp2_context/video_grep_results.png)

There is however no level of granularity control on selection, or hypertranscript.

This project reminds of the [Casseteboy video artist](https://www.youtube.com/user/cassetteboy), that does video editing mash ups, generally of politician's speeches.

However Casseteboy [in this interview](http://www.digitalspy.co.uk/showbiz/interviews/a615489/the-story-of-cassetteboy-the-kings-of-the-youtube-funny-cut-up-video.html#~p7N8kh0aGa3qbS) mentions he uses a manual and time consuming workflow to search and identify the relevant video segments for his edit.

>**Making these videos takes a lot longer than many people might assume, doesn't it...**
>It is a long time. The original Apprentice video, we were working on it on and off for a couple of months. This new one we've done is well over a month. If you think about just watching the material, say a boardroom scene lasts half an hour, it will actually take an hour, an hour and half to get through it the first time around. You just keep stopping it, taking samples of bits that might be useful, filing them and then categorising them. So you can only do a few episodes per day.

##### BBC Snipets  
It allows BBC employees to search for programs in the BBC Archive(going back only to the last 5 years), searching across the text of the subtitles. It uses a form of hyper-transcript  to keep audio and video in sync, and allows to cut video segment from BBC archive.

![BBC Snipets ](/img/img_chp2_context/BBC_snippets.jpg)

The hypertranscript is sentence accurate rather then word accurate.

Constrained to BBC archive, and because uses already made subtitles, no real system to deal with un-subtitled vide os and transcriptions generation.

No form of analyses on transcription, auto tagging, summarization provided.
most importantly the cutting of the video segment is done at the level of the video time-line. and not of the text.


##### moments  - prototype

[Moments](https://github.com/times/moments) is a web application proof of concept that allows a user to add an inline drop-down video snippet to a text article. It uses a CMS for the journalist and has a published view for the viewer. It does not use transcriptions.
From this project I initially got the idea for an inline text dropdown of a video element for quickQuote.

![Moments](/img/img_chp2_context/moments_CMS.png)


It was prototyped by the [(London) Times Digital Team](https://github.com/times) and is the winner of the 2014 Editors Lab at GENSummit2014. However as mentioned this is a proof of concept and not a fully working application.



##### hyperaudio

![Hyperaudio](/img/img_chp2_context/hyperaudio.png)

[Hyperaudio](http://hyperaud.io/) is an [open source project](https://github.com/hyperaudio) that generalises the idea of the palestinian remix, to any youtube video.

It uses hypertranscript to make remixes of videos based on their transcriptions/subtitles.

[Hyperaudio demo video](https://youtu.be/p2Lb7u5d8mY)

Similarly you cannot upload a new video, unless is available on youtube or the internet archive, and you cannot export a edited video file.

You can however upload a srt file to convert it into an hypertranscript.
and you can transcribe a video to create an hypertrnascript using their system.

##### prEdit

![prEdit](/img/img_chp2_context/prEdit.png)

[preDit](http://assistedediting.intelligentassistance.com/prEdit/) similar solution to hypertranscript but is desktop based for OSX only.

It provides integration with editing software, and preview of the text assembly.

Interface is not very intuitive, setup is very fiddley, and requires already having transcriptions as a starting point.

The presence of tagging, and categorization system is an interesting feature but poorly implemented.

[Interesting article on the idea behind it](http://www.philiphodgetts.com/2012/01/text-is-the-new-timecode/).

<!-- RELATED WORK-->
