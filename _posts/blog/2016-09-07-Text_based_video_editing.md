---
layout: post
title: "Changing the way we produce video: autoEdit 2- draft"
image:
date: '2016-09-07T01:30:00.000+01:00'
description: "Making faster, better videos when working with video interviews "
published: false
permalink: "/tbve.html"
image: 	"/img/tbve_vision/current.png"
img_current: "/img/tbve_vision/current.png"
img_overview_diagram: "/img/tbve_vision/overview_diagram.png"
img_place_holder_for_youtube_video: "/img/tbve_vision/youtube_place_holder.png"
img_initial_proto: "/img/tbve_vision/initial_proto.png"
img_initial_proto_timecodes: "/img/tbve_vision/initial_proto_timecodes.png"
img_mandela: "/img/tbve_vision/mandela.png"
img_oabama_romney: "/img/tbve_vision/aljazeera_obama_romney.png"
img_build_the_news: "/img/tbve_vision/interactive_debate.png"
img_foreign_language: "/img/tbve_vision/foreign_language.png"
img_mobile: "/img/tbve_vision/mobile.png"
img_quickQuote: "/img/tbve_vision/quickquote.png"
img_live: "/img/tbve_vision/live.png"

gif_getting_started: "/img/tbve_vision/1_getting_started.gif"
gif_processing_transcription: "/img/tbve_vision/2_processing_transcription.gif"
gif_transcription: "/img/tbve_vision/3_transcription.gif"
gif_edl: "/img/tbve_vision/4_EDL_in_premiere.gif"

categories:
- blog
tags:
---


## Overview 

A chance to recap on what I've been working on in the area of text based video editing.

1. Purpose
1. Outcome
1. Feedback
1. Roadmap
1. Vision

---

### 1. Purpose - TL;DR

>To make video production faster, easier and more accessible. 

![Current Iteration]({{page.img_current}})

The App makes automatic transcription from video (or audio). User selects parts they want, and export video sequence. 

![Overview diagram]({{page.img_overview_diagram}})


#### Demo

Ad a video or audio file
![Demo 1]({{page.gif_getting_started}})

Wait 5 min for transcription 
![Demo 1]({{page.gif_processing_transcription}})

Explore the transcription and export an EDL(Edit Deicion List) video sequence of your selections
![Demo 1]({{page.gif_transcription}})

Open the EDL in premiere and reconnect your sequence

![Demo 1]({{page.gif_edl}})


---

#### Interactive demo
Link to [Interactive demo](https://opennewslabs.github.io/autoEdit_2/public/demo/frontEnd/index.html){:target="_blank"} 
<!-- link to demo in github project page  -->

1. Click on `new`
2. Click on `Transcriptions`
3. Then click on the title of the transcription

Then you can click on the words to jump to corresponding part in video. Select some text. And export selections.




----

### 2.Outcome 

1. Speed 
2. Story crating 
3. Collaboration 
4. <s>Video Editing Software</s>


#### 2.1. Speed
I used an earlier version of this tool that was composed of [two scripts and made use of a google spreadsheet for paper-editing](http://pietropassarelli.com/tech/articles/2013/12/02/sbv-csv/) and it took down the post produciton time from *3 weeks to 3 hours*. 

#### 2.2. Story crafting 

<!-- paper-editing -->

A paper-edit is a script made from a selection of lines from the transcriptions of interviews.

The paper-editing workflow draws from the "inside out" writer method as described in [Mckee's Story book (p410-417)]()<!-- add link to mcke story book -->.

Writing from "The Outside In" 

>The struggling writer tends to have a way of working that goes something like this: He dreams up an idea, noodles on it for a while, then rushes straight to the keyboard



While when writing from "The inside out" 

>Successful writers tend to use the reverse process. If, hypothetically and optimistically, a screenplay can be written from first idea to last draft in six months, these writers typically spend the first four of those six months writing on stacks ofthree-by-five cards: a stack for each act-three, four, perhaps more. On these cards they create the story's step-outline.


<!--  -->

>As the term implies, a step-outline is the story told in steps.
Using one- or two-sentence statements, the writer simply and clearly describes what happens in each scene, how it builds and turns. [...]
On the back of each card the writer indicates what step in the design of the story he sees this scene fulfilling-at least for the moment. Which scenes set up the Inciting Incident? Which is the Inciting Incident? First Act Climax? Perhaps a Mid-Act Climax? Second Act? Third? Fourth? Or more? He does this for Central Plotand subplots alslike.

<!--  -->



Meanwhile they are also building on research notes in parallel as a separate part of the process where they are taking down notes and thoughts a round the caracthers lives, enviroment etc... so that they can draw on these at a later stage. 

>This process, however, doesn't mean the writer isn't filling pages. Day after day a huge stack grows on the side ofthe desk: but these are biographies, the fictional world and its history, thematic notations, images, even snippets ofvocabulary and idiom. Research and imaginings of all kinds fill a file cabinet while the story is disci- plined to the step-outline.

<!-- 410-417 -->

Paper-editing using the "the inside out" approach provides a relyable method to master the story crafting process and increases the quality of the story. 


#### 2.3. Collaboration 

The paper-editing workflow and therefore this tool sits at the intersection between the edit producer and the video editor's job. 

An edit producer can provide a paper-edit to a video editor to assemble as a video sequence and a video editor can collaborate with an edit producer on strenghtening the story structure by providing feedback on the paper-edit. 

The tool allows to export an EDL, therefore removing the tedius part of reconnecting the sequence manually for the video producer.

Current version of the tool also allows to export the corresponding timecoded text of the papercuts/paper-edit.

Because this is such a quick and seamless operation is eaiser to get feedback, and iterate on changes.

Future version of the tool will see a web based app that will allow multi user collaboration, google doc style. 

This raises the level of the conversation at the level of the story crafting of the project. Both at the dialogue level as well as at the overarching story structure level.

#### 2.4. <s>Video editing Software</s>
<!-- The tool is not trying to replace video editing software. But rather to raise the  question if we didn't have video editing softwares what would a video editing software built today with all the NLP and Computational photography readiliy available look like?

It would probably not be modelled a round a film based worflow, considering most of video production nowadays is digital. 
 -->

More tools that require less training, and are easier to use seems to be a reccuring theme when talking to jouralist in newsrroms.

The tool is not trying to replace video editing software, but rather to produce a rough cut that outlines the story structure and can be refined in a traditional video editing software with cutaways/B-roll etc..

With that premise in mind the tool allows editorial staff without knowledge of video editing softwares to produce a "rough cut" video sequenceby by selecting the text of the transcriptions. 

However depending on the use case, this rough cut might also end up being the final output. eg if you are just looking for a few sound bites or quotes for twitter or facebook.

---

### 3. Feedback 
Feedbak on initial prototype.
The porpuse of the initial prototype was simply to test the quality of the transcriptions. 

Having tested a bunch of different speech to text APIs. Wanted to make sure that the IBM Watson STT one met the minimum acceptability treshold by the editorial staff before building the tool on top of that service. 

<!-- 
The tool is build with a component based approach so switching STT API is relativly simple provided the interface remain the same. 

But none the less if the users were not going to accept it as a valuable alternative to manual transcription some more research into alternative solutions would have been needed. such as using rev.com where in 24hours they return manual transcription with higher level of accuracy.  -->

The initial prototype, given audio or video file would simply return plain text. 

![Initial prototype]({{page.img_initial_proto}})

After some user interviews it was concluded that journalists where not interested in using STT for transcriptions. They'd rather manually transcribe something from scratch then proof an inaccurate text. 

Video producers on the other hand were more then happy to use it, as the text was a mean to go to the video rather then an end product itself.

One feedback received at this stage from the video produer was to add timecodes to the text to make it easier to find corresponding video and to use it for paper-editing in google docs. 

![Initial prototype timecodes]({{page.img_initial_proto_timecodes}})

Made the change and forgot about it while started working on second iteration. 

The editorial product team then received the following feedback from one of the producers. 

>“... I just wanted to say thank you so much. It's great. It will measurably improve our workflow and general well-being. You all are brilliant.” 
>
>Joss Fong, 
Senior Editorial Producer, Vox.com


---

### 4. Roadmap 

1. Transcriber 
	1. Video/Audio → plain text
	2. Video/Audio → Text + Timecodes
2. Papercuts
	1. **Highlights + EDL export**
	2. Annotations 
	3. Search and filter 
	4. Speaker names 
	5. Projects 
3. Paper-edit 
	1. Paper-edit view
	2. Outline 
	3. Video preview

The first iteration is the one described in in the feedback section. 

The current iteration is the papercuts  version described in the purpose section.

That version will see adding features such as the possibility to annotate selections, seach and filter the transcriptions. Ability to add speaker names. And group transcriptions by projects.

The third release will allow to do the equivalent of a paper-edit but digital. 
By bringing selections from multiple transcription into a story outline.
Eventually a video preview of the story selection will also be possible in order to shorten the feedback loop.

---

### 5. Vision 

In terms of vision for where this could go. There are a bunch of different options some of whcih could be clustered togethere if one was so inclined. 

1. Live video editing  
(Recode use case)

2. Export to social media, Twitter video or FB video.
(Recode use case)

3. Multi-user collaboration 
 (Vox.com use case)

4. Mobile 
(Racked use case)

5. Searchable/editable archive 
(SB Nation and Studio team use cases)

6. On location edit, Hardware device 
(SB Nation use case)

7. Foreign language programmatic translations

8. NLP Insight

9. Slack/chat bot integration 

10. Make it easier to work with video online/ “interactive doc”

11. Phone MMS integration (eg Twilio)

---

#### 5.1. Live video editing  
<!-- (Recode use case) -->

Most STT Apis can support real time streaming returning results of the transcription straightaway. 

With the current version, it's faster to split the media into 5 minutes chunks send them concurrently and re-assemble the results once they come back, then to process the media in one go. 
Because with the chunking it means any length can be transcribed in just under 5 minutes. While without dividing it it would take a bit longer.

However with a live use case, this would mean you could have a video stream, and could see the transcription appear in the tool as it's beeing spoken, being then able to paper-edit it, and export it to social media or to a video editing software.

![Live video editing]({{page.img_live}})

I am particularly interested in measuring the before and after of the user engagment on social media with and without this tool for live events. 
Would people be more likely to re-tweet a captioned video of a quote or a still image with the text in the body of the tweet is just as good?

#### 5.2. Export to social media, Twitter video or FB video.
<!-- (Recode use case) -->

Essencially once you have your sequence or your video selection, this can be exported as a video tweet or to facebook using their API.

![quickQuote]({{page.img_quickQuote}})

Using a [captioning library]() <!-- captioning lib  link--> it would also be possible to burn the text of the transcription/subtitles directly onto the video (for the social media mute auto play "feature").

This draws on my work at the Times and Sunday time building quickQuote, you can read more on this [here](/quickQuote.html). Initially the app returned an embeddable dropdown quote to add to news articles, subsequently after refactoring the app in node, I've added the twitter export function. 

#### 5.3. Multi-user collaboration 
 <!-- (Vox.com use case) -->

Being able to get feedback on the paper-edit or collaborate with someone else on the rough cut generally makes your story better. 

With a web app version of the tool that syncs with the desktop version users will be able to collaborate on projects.

#### 5.4. Mobile 
<!-- (Racked use case) -->

One of the reasons why the current version is a desktop app is that it makes it easier to process video footage from camcorders which is notoriously large and would be impossible to upload without further transcoding. 

However with the current IOS version it is now possible to upload media from the camera roll or dropbox onto web apps. 

For journalist doign their video produciton on smartphones they could upload what they filmed on the phone onto a web app, get the transcription and edit it there and then from the phone.

![Mobile]({{page.img_mobile}})


#### 5.5. Searchable/editable archive 
<!-- (SB Nation and Studio team use cases) -->

Media management is always a topic of great debate within organizations. 

<!-- Great example I saw that address this was the one used by the Guardian Video team.  -->

But without wanting to go into implementing a full fledge media management system, processing videos for transcriptions could allow to get a summary of of any archive at a glance by analysing those transcriptions. If combined with computational photography to produce a visual log as well this could be even more valuable.




#### 5.6. On location edit, Hardware device 
<!-- (SB Nation use case) -->

Wouldn't it be great if while you are there on location you could see the transcription of what the person  you have interviewed has just said?
So that you can make sure you have everything you need or if there's anything worth clarifying. 

This would also allow to do a paper-edit there and then, if time is of the essence.

#### 5.7. Foreign language programmatic translations

At the Buenos Aires Hacks Hackers Media party hackaton I got asked if the tool could work in spanish. I then added support for the IBM Lanugages.

![Chose a language]({{page.img_foreign_language}})

To test this out I put through the tool some audio in chinese only to realise I had no idea what the charachters meant. I then started to play a round with the idea of using the translation API for translating each line of the transcription and displaying that along side. 

This would allow to make a rough cut from video in a language you might not know. 
You'd probably still need a human translator/interpreter at some point to look over it, but it could considerably speed up this type of workflow.

#### 5.8. NLP Insight

In a nutsheel, woudn't it be great if you could give it a video and it returned an interactive transcription with topic summary, speakers, sentiment analyses insight into the video etc.. so that it was easier/faster to navigate and get the gist at a glance?

Imagine if you are working on a doc, you got `x` number of interviews, and the system could perfom this level of preliminary analyses for you, How would that effect your current workflow?

See [Build The News Hackaton write up](/buildTheNews.html) for more info on this proof of concept.

#### 9. Slack/chat bot integration 

What it says on the tin

>Eg. “Transcriber bot, transcribe this video/audio”

<!--  -->

and/or 

>Eg. “Transcriber bot, return EDL of selection by this person on this project”


#### 5.10. Make it easier to work with video online/ “interactive doc”

The core idea is that once you have a timecoded transcription in some kind of data structure (eg a json) associated with the video that opens up a whole range of possibilities to make one of interactive pieces.

The current version of the tool returns 

- `json` of the transcription 
-  `webm` video  
-  `wav` audio.

There is probably many use cases that I can't think of right now, but to give an idea of the possibilities here are two interactives 
that inspired this use case for newsroom developers.

![Mandale Interactive]({{page.img_mandela}})

![Obama Romeny AJ debate]({{page.img_oabama_romney}})

See my previous blog post [beyong video as black boxes](/videoBox.html) for some context on these two pieces.

#### 5.11. Phone MMS integration (eg Twilio)

In situation where WIFI or internet connection is slow but there is enough phone signal to send an MMS with audio or video, a service like twillio could be used to received it and then send it to an API to process the transcription. 