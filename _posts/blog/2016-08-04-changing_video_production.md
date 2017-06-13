---
layout: post
title: "This is going to change the way we produce video "
image:
date: '2016-08-04T01:30:00.000+01:00'
description: "Make faster, better videos when working with video interviews "
published: false
permalink: "/changingVideoProduction.html"
project_page: http://www.autoedit.io
demo: http://demo.autoedit.io
gentle: http://gentle-demo.lowerquality.com <!-- get proper demo link from project page -->
gif_overview: "/img/changingVideoProduction/3_transcription.gif"
gif_upload : "/img/changingVideoProduction/1_getting_started.gif"
gif_export: "/img/changingVideoProduction/4_export.gif"
gif_edl_reconnect: "/img/changingVideoProduction/5_EDL_in_premiere.gif"
video_overview: "https://dl.dropboxusercontent.com/u/449999/Lotus_demo.mov"

categories:
- blog
tags:
---

# This is going to change the way we produce video  - Draft

![giff of interactive transcript]({{page.gif_upload}})

![Watch the demo]({{page.gif_overview}}) 

![giff of interactive transcript]({{page.gif_export}})

![giff of interactive transcript]({{page.gif_edl_reconnect}})

The actual app is a Mac Os X app but you can try a browser based d[Interactive demo here]({{page.demo}}) or [get the latest release from the project pagr]({{page.project_page}}).


## What just happened?

This is only the first version of the tool. 
Final version of the tool will will essentially be a [digital paper-editing tool](http://pietropassarelli.com/wip_london_july2016.html). 

<!-- The user uploads a video, the system transcribes it using IBM Watson Speech to Text API. The user can then read in sync with the video preview, make selections and export those selections as a video sequence.
 -->

In this version you can give it a video, receive a transcription, explore the text with video preview, make text selection, and export that into a video sequence in the editing software of choice ( eg premiere, final cut pro 7, avid and any other professional editing software that supports EDL import).


In future iterations the user will also be able to annotate and categorise the selections, search filter the transcriptions by tags and speakers to group and narrow down results. 

Once the user is done analysing the transcription they can create a story scrpt (paper-edit) from text selections from multiple transcriptions. They can preview the corresponding video preview, and export it to adobe premiere, or any other video editing software that supports EDL (adiv, final cut pro 7 etc..).

#### What is an EDL?
`Edl` stands for edit decision list, it’s a data interchange format, similar to `xml`, but human readable. It consists of a list of instructions that describe your video sequence, and is used by the editing software to reconnect the media. 

Here is an example      

```
TITLE: Jesselyn Radack
FCM: NON-DROP FRAME

001   time  AA/V  C  00:03:11:11 00:03:22:24 00:00:00:00 00:00:11:13
* FROM CLIP NAME: JR cam B transcription.mp4
FINAL CUT PRO REEL: time REPLACED BY: time

002   time  AA/V  C  00:04:40:24 00:04:46:23 00:00:11:13 00:00:17:11
* FROM CLIP NAME: JR cam B transcription.mp4
FINAL CUT PRO REEL: time REPLACED BY: time
```

<!-- See this tutorial for more info on the EDL format -->


## Roadmap and future releases

### Milestone 1 - STT 

Transcriber app with screenshot, made to test quality of speech to text with journalists and video producers. 

<!--

![Transcriber without timecodes]()

Video producer's feedback on adding timecode to output for them to be usable. Made change in [second release]()

![Transcriber with timecodes]()

This was a throaway project with the sole purpuse of learning whether the STT API met the acceptability treshold. 

So there's currently a few bugs such as a file size limit at 100mb. 
-->

### Milestone 2 - One transcription 

#### Release 1 Interactive transcript 
User can upload a video and is returned an interactive transcrioption. Video and text are in sync. When clicking on text video jumps to corresponding part. and when video is playing text changes color.  

This also features a basic word search feature.


Completed in current release of autoEdit2.

#### Release 2 - Highlights + EDL export

User can hilights parts of the text of a transcription, export that as an EDL. Use the EDL to create video sequence in premiere.

Completed in current release of autoEdit2.

#### Release 3 - Annotations (highlights with tags and comments)
User hilights are saved as annotation. These can be categorised with different colors and names, description and individual comments.

#### Release 4 - User can search text, highlights/annotations and filter (also by speaker)
User can search the text of a transcription filtering the results by hilights/annotations tags or speaker names. 

#### Release 5 - User can add speaker names to transcription manually  
User can add speaker names to transcription manually  


### Milestone 3 - Paper-editing

#### Release 6 - Adding projects to group transcript 
User can now create a proeject to keep transcriptions organised 

#### Release 7 - Adding paper-edit to projects + paperedit view 
(no paper-edit video preview and no outline but EDL export)

A user can creat a paper-edit inside a proejct. 
This allows to drag text from transcriptions into a new "paperedit" section. These selections can be re-ordered, and exported as EDL.

#### Release 8 - paper-edit outline 
<!-- (? or if easier, done in previous release) -->
Same as above but the selections can be organised in an outline that provides headings for the various sections.

#### Release 9 - Adding paper-edit view preview 
Same as above but the user can also watch a preview of the selections / paper-edit before exporign. 

---

## The stack 
it uses Backbone for the front end, sailsjs for the backend, and NWJS for packaging it as a desktop application for os x. 
IBM Speech to text API is used for the transcriptions. 

In the future there's also plans to add support for the [gentle open source STT API]({{page.gentle}}) to make a out of the box  working version that does not require setup, and can work offline

### Components
There are also a number of components that I am going to release separately once they are stable enough. As these can be usefull when working in similar problem domains. 

- webm converter
- ogg converter
- video to audio wav (with audio specs for IBM Watson)
- IBM Watson stt to transcription json 
(working torwards  spec for transcription json would be good)
- metadata reader (uses ffprobe and node ffmpeg-fluent) reads metadata needed for the EDL.
- EDL composer
- Timecode converter
- [srt parser/composer]()

<!-- link to srt parser composer, github + npm -->
(not part of the app but developed during the inital R&D)

[more info on this here]()
<!-- link to documentation components page -->

## Why a desktop app?
To be able to work with files from camcorders, that can at times exceed 50 gigs, a web app was not going to be able to handle the file upload. 
But with NWJS when selecting a file it returns the file path, and because you have access to the file system you can then leave the original where it is, and convert it into audio to send to the speech to text API and HTML5 video for preview. 
Because the output is an EDL, the original is then reconnected to the video sequence.

---

## What is the impact on video production?

### You free up soooo much time 
Because the tool optimises the post-production stage of making a rough cut, or what they sometimes refer to as a "radio edit".

What would normally take 3 weeks you can now do in 3 hours. 

### You can concentrate on the crafting of your story 

>The Ladder of Abstraction. S.I. Hayakawa, in his book Language in Thought and Action, described what he called the ladder of abstraction. 
*The ladder of abstraction is an image and concept used to illustrate how language and reasoning evolves from concrete to abstract.*

Once you have reasoned fromt the concrete to the abstract concepts manipulating those at a high level helps organise them and structure your story. So that when it comes to "fill in the dialogue" everything falls into place. 

This follows Mckee's idea of wriitng from the inside out as opposed to the outside in.

WWriting from the outside in

>The struggling writer tends to have a way of working that goes something like this: He dreams up an idea, noodles on it for a while, then rushes straight to the keyboard


Writing from the outside in

>Successful writers tend to use the reverse process. If, hypothetically and optimistically, a screenplay can be written from first idea to last draft in six months, these writers typically spend the first four of those six months writing on stacks ofthree-by-five cards: a stack for each act-three, four, perhaps more. On these cards they create the story's step-outline.


<!--  -->

>As the term implies, a step-outline is the story told in steps.
Using one- or two-sentence statements, the writer simply and clearly describes what happens in each scene, how it builds and turns. [...]
On the back of each card the writer indicates what step in the design of the story he sees this scene fulfilling-at least for the moment. Which scenes set up the Inciting Incident? Which is the Inciting Incident? First Act Climax? Perhaps a Mid-Act Climax? Second Act? Third? Fourth? Or more? He does this for Central Plotand subplots alslike.

<!--  -->

>This process, however, doesn't mean the writer isn't filling pages. Day after day a huge stack grows on the side ofthe desk: but these are biographies, the fictional world and its history, thematic notations, images, even snippets ofvocabulary and idiom. Research and imaginings of all kinds fill a file cabinet while the story is disci- plined to the step-outline.

<!-- 410-417 -->


<!-- or paraphrase using slide https://docs.google.com/presentation/d/1cJjvrGrGxrqaZhk5IKYOcld82PulGE9iF_LjQVL-zes/edit#slide=id.g14a8a1e7a5_0_187 -->


Paper-editing is writing from the outside in, altho confined to the actuality of the transcriptions.

If like me you believe that story telling is a craft, with principles that can be mastered, discussed and broken, you wouldn’t be surprise when I say that this process(and therefore this software) will allow you to tell better story. 

### Making video editing more accessible
It enables "non-technical" staff to work on the part they are good, at the crafting of story without the overheads of learning how to use a video editing software.

<!-- Learning how to use a video editing software as a steep learning curve.  -->

Video editing software are not designed to help with the story crafting but more just to aid the cutting of video and/or audio as segments. With no semantic insight into the content. 

<!-- 
However editorial staff has great insight into the crafting of the story they are going to tell, and this tool allows them to take that further into the editing of the video by creating a rough cut without having to open an editing software. -->

The tool also positions itself right in between the collaboration point between an edit/video producer and a video editor, and can smooth the communication/collaboration process.

### Collaboration
It enables collaboration. By raising the level of the conversation on the story crafting of the project. and really get into the high level of the overall structure, and/or the nitty gritty of the "dialaogue" and/or stay at 

### Better feedback
You can get more meaningful actionable feedback. If you are working for an exec or an external client, getting feedback at that stage on the story structure,both by showing the paper-edit text and a video sequence side by side,  generally means you won’t be asked to change any of that at the end of the project. 

As opposed to show a sequence closer to the final cut stage with b-rolls/cut aways, that you spent time putting in place but might have to bin because the underlying story structure has changed.

---

## Future plans 

### Social Media
Integration with social media share(similar to quick quote, eg you select a line and can tweet the captioned video out)

![Social media export img]()

<!-- TODO: get social media export img from presentation -->

### Live video
Support for live video stream to do realtime video editing and export to social media.

![Live video]()

<!-- TODO: get img from presentation -->


### Multi user collaboration
Web app that syncs with desktop app and allows for multi user collaboration.

![Multi user collarboation]()

<!-- TODO: get img from presentation -->

### Mobile version
Web app that is mobile responsive and allows to upload from phone, and begin the edit there and then once it has finished transcribing. With possibility to export the edited video back onto the phone or direct publish to social media.

![Mobile version]()
<!-- TODO: get img from presentation -->

### Archive 
"Indexing" of a video "archive". Processing a large ammount of files(eg several video interviews) in bulk, and create a navigable summary of what are the interviews/videso about.  Taking it a step further this could also add info on visual logs of the video using computational photography APIs to recognise what is in the video,and categorise that, especially usefull b-rolls and actuality. 

![Archive indexing img]()

### Phone integration
Twilio, generate transcription from mms.
<!-- some more in google docs post -->


---

## Why open source?
<!-- Video editing softwares are notoriously expensive and close sourced, getting in this space with an open source version would allow developers to explore and challenge the traditional layout and ways of doing things from the traditional non lineaer editing systems. -->

<!-- I very  much believe in "what goes a round comes a round". -->

<!-- This project was developed as .... get open source blurb from autoEdit front page -->

Some of the best features of this software came out of conversation with people working on the same problem domain in the spirit of _"what goes a round comes a round"_.

<!-- to check out the to get involved check out TODO: link  -->

---

## What's happening next?
First release is out, and it is being used by the journalists and video producers across vox media. Conducting user testing, refactoring, and working through the roadmap.

Check out the [project page]({{page.project_page}}) it's "free as in free speech and free beer".

<!-- link to GNU quote wikipedia -->

<!-- 
link to project page (with client side interactive demo), github repo
[]() 
-->

