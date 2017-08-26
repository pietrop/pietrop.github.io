---
layout: post
title: "Reflections on 2016 Knight-Mozilla Fellow"
description: "A sort of 'year in review' or the Knight-Mozilla fellowhip I did with the Vox Product team."
permalink: "/fellowship2016.html"
date: "2017-03-31"
published: false
link:
image: 
github:
gitbook: 
youtube: 
tech: 
categories:
- blog
tags:
---

This is a bit of a brain dump of things I've been up to during the fellowship with descriptions and links, inspired by the Open News exit questionaire. 
 
## Vox Media Video production research - report 
**Link**: no link available 

**Brief description**:

I started the fellowship with a series of one on one interviews to research what video production looks like at Vox. 
The focus was to learn about day to day activities of different job roles, as well as identify pain points more broadly. 
I then drafted the outcome into a google doc and a slide deck that was circulated internally.  
Each issue had recommendations for how to tackle the problems associated with it. 
 
This was great to learn about the organisation, and make direct connections with people. 

It was also a lot of fun to do, and is something I’d consider doing again if starting in "a similar role" on my next job. 

I think it prompted some conversations within the company and I got some feedback on it, but I feel like I lacked some more specific or direct feedback on the issue raised and on the proposed solutions. 

**Current status**: completed


## Caption burner
Link: https://github.com/voxmedia/captions_burner

Brief description:
From a conversation with one of the video producers who had just moved to Vox from AJ+ I prototyped a way to allow non editorial-staff to add captions to video.

However captions, and the styling of captions, choosing the font, adding speaker names, etc.. is something that is very editorially curated. And one hand that added too many unsolvable requirements to the proposed solution from a technical point of view, and on the other hand they(the video producers could not let go of a little editorial control over it to automate the process) and so they decided to go back to do it manually. 

With a closer look a their requirements (speed up the styling of captions in after affects) I did find a script online to ingest srt files into premiere and they started using that. 

However this tool turned out to be useful at the POV hackaton. 

Current status: usable/completed, except for the gif option which was more of an experiment. 



## Cue sheet application
Link: https://voxmedia.github.io/Volume_folder_report_generator/

Brief description:
In the initial research I found out that, reporting which music track was used in published video pieces and for how long was a huge problem from a legal stand point. Leaving brands across vox media liable for lawsuits while they were struggling to keep up with keeping an up to date list.

I prototyped an app that would crawl a folder on a hard drive and generate a report of what projects files where missing audio and video files. That was the first step towards a more robust solution. 

The conversation then died of, as it seemed like it would have been too time consuming to setup a proper solution for it.

I then found out by chance that has not been used for intended cue sheet making purpose but for search media server as normal mac os x finder app gives restricted access to it with no search.

Current status: usable, on hold/completed.


IDA - social media photo narratives
Link: https://github.com/voxmedia/ida demo https://voxmedia.github.io/ida/

Brief description:
A proof concept built at Vax (Vox’s hackaton) as part of a Vox team.
It tried to answer the question "What would internet stories look like if newspapers and magazines never existed?"
Best explained in the slide deck linked on the readme of the project. 
The idea is that if you had an # tag for twitter it could give you a visual flow of images shared across a timeline, with a representation of retweets to get a sense of the flow over time.  As well as to explore user generated content, where images are manipulated or modified with comments and then re-posted.

Current status: complted, was never picked up to be taken to the next step.

Transcriber
Link: https://voxmedia.github.io/Transcriber/

Brief description:
This is the precursor of autoEdit. I was testing the hypothesis on whether the video producers and journalist across the Vox Media brands would accept the quality of IBM Watson speech to text or not. So it purposely gave a plain text area with no timecodes to get a better sense of what they’d do with the output.

Journalists where saying that if it had 3 words wrong they’d rather do it again from scratch instead of proofreading existing text.
Video producers where ok with the inaccuracies in the text, as it was seen as just means to an end to get to the video. They did ask for timecodes. 

Following the feedback I then released an updated version with timecodes.

Current status: completed, not actively maintained.

WIP workshop 
Link: http://pietropassarelli.com/wip_london_july2016.html

Brief description:
On Saturday July 9th 2016 I run a hands on workshop titled “How to craft compelling stories out of video interviews?”. This was in collaboration with Niels Ladefoged who has been curating the Whistle Blower Interview Project in collaboration with the centre for investigative journalism in London.

Following editions of the workshop last year were also at SRCCON, in NYC, Buenos Aires Hacks/Hackers Media Party, and in Florence.

Current status: completed

Offline  STT - CMU sphinx
Link: https://github.com/OpenNewsLabs/offline_speech_to_text

Brief description:
Extracted from video grep project the speech to text component built with CMUSphinx, and packaged it into a node module. Unfortunately CMU Sphinx would require further training to make this more accurate and worthwhile suing for speech to text.

Current status: completed


srt downloader from live youtube video
Link: https://github.com/OpenNewsLabs/srt_from_youtube_live

Brief description:
A ruby script to scrape youtube srt captions during live event and recombined them into one file.
This came out from a use case talking with one of the video producers at vox and learning about how they work/transcribe live videos.
in the same problem domain of opened captions, before I found out about Dan Schultz work.

Current status: completed but more of a proof of concept

Gentle STT Node (work with gentle local server)
Link: https://github.com/OpenNewsLabs/gentle_stt_node

Brief description:
Martin and Niels mentioned that autoEdit is great but unusable for them coz they are not confortable sending their recordings to the cloud, as the cloud is just someone else computer. So at hacks hacker media party BA we did some pair programming with Martin to enable autoEdit to work with gentle offline STT who works locally on your machine. I had so much fun working with Martin on this. When we got stuck we got some help from Dan Z which was great.

Current status: completed, however this requires the Gentle STT server to be running locally, and I am instead considering extracting that as a standalone module for more flexibility.

srtParser composer
Link: https://github.com/pietrop/srtParserComposer
https://www.npmjs.com/package/srt_parser_composer 

Brief description:
When prototyping autoEdit at the the very beginning I was using as a starting point an srt file.
This meant I could take more time to figure out which STT option to use, and since at the time realtime once where not available, there was less of a bottle neck in waiting for the results. This created the need for a comprehensive parser /composer for srts. The idea is to convert an srt into a json representation. 
Having studied and discussed various schools of thoughts a round hyperaudio representation of transcriptions with Mark Boas and Laurian, I also looked at the popcorn js module for parsing srt to make a json representation with word accurate timing, and integrated that feature in the parser.
Also this is my first module pushed to npm and was super exciting to see it used by many people. (it has been downloaded 163 times).

A variation of this was also useful to prepare the transcriptions for the WIP workshop. to convert srts into docs that could be printed. 

Current status: complete, could do with a refactoring.

blogpost on learning to code
Link:
http://pietropassarelli.com/learnToCode101.html

Brief description:
I wasn’t sure if I should "write in the open" and publish the draft even tho I am still working on it, but one of the students I met at NYU who was working on a simliar video editing project, commented

>I got inspired from your blog post and have started this CS50 course, its quite good so far!

Current status: published draft. I could use with some help cleaning up the draft.

autoEdit 2
Link:
https://github.com/OpenNewsLabs/autoEdit_2
http://www.autoEdit.io 
autoEdit press mentions
http://www.niemanlab.org/2016/10/try-out-this-open-source-tool-for-editing-video-and-audio-transcripts/
https://www.journalism.co.uk/news/tool-for-journalists-autoedit-to-edit-videos-quicker-using-transcriptions/s2/a684359/
https://www.rjionline.org/stories/fl171-ibm-watson-speech-to-text



Brief description:
Mac OS X desktop app, autoEdit, creates automatic transcription from a video or audio file. The user can then make text selections and export those selections as a video sequence, in the editing software of their choice.

Worked with the Storytelling studio project manager, one of their designer for a part of the project, and did code reviews with Ryan Mark. Ryan Mark also did a 3 days refactoring of the code base to help clean up the open source project, which was awesome.

Across Vox Media, there was a soft launch because they couldn’t agree on who would be supporting the tool if they’d launch company wide. This lead to a job offer which was then withdrawn due to an hiring freeze. So I don’t know what their plans are for the tool internally. Towards the end of the fellowship the Editor In Chief of Polygon was about to roll it out to all of his team.

I’ve also had feedback of people using it in various companies, including the FT, AOL, CUNY, etc..it’s hard to keep track, but I am always pleasantly surprised.

In terms of how the collaboration played out with the product team/storytelling studio initially, Lauren in particularly, was quiet skeptical and vocally opposed to this idea, and insisted that not a lot of work was being done a round transcription (which actually turned out not to be true after user research) and where more interested in a social media slideshow maker. I felt like there was a lot of internal politics there in getting what they thought was a "quick win" and I think the biggest take away from this experience is that, was only because I was there as a fellow and that meant that ultimately it was down to me to decided what I wanted to work on, that I could pick what was best for them (as absurd as that sound).
I also felt like they then lost interest in the project until I had some enthusiastic feedback from the user, after which they then became the biggest advocate within the company.

Current status: v2 is complete, a few outstanding bugs, as raised by Vox Media QA team, but overall usable.


Source - autoEdit piece 
Link: https://source.opennews.org/articles/video-editing-made-better-introducing-autoedit/

Brief description:
Source piece, it was awesome to work with Lindsay on this, coz I had a much longer piece for the Vox product blog but they made me take a lot of things out, reducing the depth and breath of what I wanted to cover.
While Lindsay and Erin, really figured out a way to make it flow without dumbing it down.

Current status: completed 


Vox Product blog autoEdit Piece
Link:
https://product.voxmedia.com/2016/11/22/13669486/faster-video-editing

Brief description:
Vox product blog on autoEdit. 

Current status: completed

https://product.voxmedia.com/2016/11/22/13669486/faster-video-editing


POV hackaton battle sound
Link: https://github.com/pietrop/BattleSounds
demo http://pietropassarelli.com/BattleSounds/
see slides link in readme

Brief description:
Interactive documentary on hip hop culture. It’s re-imagining what the extras that used to be found on DVD could look like now on the web. 
Basically as you can see in the demo, for a clip it shows you the source media used to make the edit and allows you bring it up and view the full length of the original it belongs to. 

I used a google spreadsheet as backend so that the rest of the team could keep curating the editorial side of things while I refined the front-end interaction with the designer.

I always suspected that if you have the right tools making interactive could be fast, easy, and fun, this proved my point as we finished the Hackaton 2 hours before deadline, because I used autoEdit to make the interactive transcriptions.

Current status: 

https://github.com/pietrop/BattleSounds 
http://pietropassarelli.com/BattleSounds/


Opened captions->Google doc //Vox inauguration speech system // C-span opened captiosn server
Link:
https://github.com/OpenNewsLabs/c-span_opened_captions_server 
https://github.com/voxmedia/c-span_opened_captions_server
https://storytelling.voxmedia.com/2017/1/20/14329600/annotation-feature-vox

Brief description:
Inspired by the NPR system write up on source, and conversation with David Eads, Juan and Tyler when I visited NPR in DC about their implementation choices. 

The aim was is to make a system that takes in captions coming from tv, (through openedcaptions.com, also on github by Dan Schultz)  and adds them to a google doc in real time (or close enough) until you stop it.

What I loved about this project, was that I quickly prototyped a solution with the help of Dan Z on the open news labs github, and then showed it to Ryan Mark, this way it was already open source it, with the "let’s code in the open approach" (which is my favourite) and he ended up forking it to improve on it for Vox, and kept his version open source.

This also meant I could gather up folks from NPR, Vox and Dan Schultz onto the hyperaudio slack channel run by Mark Boas, to continue the conversation and share notes on best way to figure this out. 

I was very impressed that Ryan Mark shared the link of its version with the group the day before the inauguration, as normally newsrooms wait for after the fact to share or open source code even if it’s to do with the plumbing. 

Also I am quiet proud that my version has no cost associated with it, while NPR solution relies on a 100$ an hour third party transcription service.

I am also discussing with Dan Schultz helping him with making more documentation on the opened captions project..

I think that it’s awesome this project managed to connect with a something made by a previous fellow in 2012, that he had purposefully
 kept up and running (it’s hosted at the MIT video lab) in case anyone had started using it.

Current status: completed, more work being done by Dan Schultz on documentation etc..


WIP Archive
Link:
temporary url http://pietropassarelli.com/WIP_archive
https://github.com/pietrop/WIP_archive

Brief description:
Making a website for Niels Whistle Blower Interview Archive project.
Interviews that he as done in collaboration with the Centre For Investigative Journalism in London. 

Uses video urls from a vimeo pro account uses a modified version of autoEdit demo as front end. Another great example of how we great tools it’s easy and fast to make good interactive.

Current status: Ongoing, some help I could use on this, is figuring out which organisations would be interested in taking this on, and or collaborating on it. It is meant mostly as an horal history, educational resource for journalist and students. The current site serves as a proof of concept, Niels has 25 interviews and plans to get to 50, and it be good to find a way to cover those costs.


Buenos Aires meeting video editor’s 
Link: NA

Brief description:
Meet with local editors interested in autoEdit, gave a demo and learned about their experiences.
This also prompted me to add the language feature at the BA hackaton to add support for Spanish.

Current status: NA

Buenos Aires meeting with Infobae newsroom 
Link: NA

Brief description:
Met with CTO of Infobae, who was interested in collaborating on open source projects etc.. very interesting chat

Current status: I need to follow up on this

Data journalism unconference in NYC

Link: https://www.globaleditorsnetwork.org/programmes/data-journalism-awards/ddjunconf/ 

Brief description:
Loads of very interesting conversations, somewhat surprisingly especially a round video,  from these conversation came out the idea of a video specific event for developers. 

Current status: NA

Talk with NYU student
Link: NA

Brief description:
Invited by Ben Moskowitz to talk to his students at NYU about autoEdit and other projects as part of a project based class he gives on hacking political rhetoric. One of the students in particular was working on something very similar to autoEdit, but with youtube videos.

Current status: completed	

CUNYU prof Wonbo meet 
Link: NA

Brief description:
Met prof at CUNY who had troubles installing autoEdit. He was very enthusiastic about the tool, and made an intro to the VP of technology at ABC.

Current status: NA

meeting with VP technology at ABC / Disney VP

Link: NA

Brief description:
Interesting they were using Watson for live video as well. Seemed like they wanted to collaborate but not quiet clear on what terms. And it seemed like they not super familiar with open source.

Current status: Following up

IBM Watson conference in SF 
Link: https://www.ibm.com/watson/developer-conference/

Brief description:
Super cool, really usefull, got to talk to the product manager of the Speech to text service and learn more about their roadmap etc..
Also made a contact with marketing team, but they have not been great at keeping in touch eg to discuss getting involved in video event.

Current status: completed.

Gentle refactoring - google doc 
Link:
google doc: https://docs.google.com/document/d/1UlKkjAVK3WDWtnp3C2x_r6bYgEvon5ZEQj-eDJnyB7E/edit#heading=h.9y4kjz7zs65s
github: https://github.com/OpenNewsLabs/gentle

Brief description:

Current status: 

Started convo on transcription video event
Link:
google doc

Brief description:

Current status: 


---



## Which projects are you proudest of/most excited by? Why?

autoEdit (www.autoEdit.io)

Been wanting to do this for a while, the very first version of autoEdit was very hard to use, and only had one active user (http://pietropassarelli.com/autoEdit.html). However in my view the biggest problem wasn’t the tech knowhow required to smooth the user experience, but rather having close proximity to the users to adopt a more lean hypothesis driven approach. 

Before starting the fellowship I already had figured out most of the problem domain from a best practice point of view (eg how to paper-edit). However there was a huge gap between best practices approaches and how people go about do their video editing of interviews. This required spending some time learning about how people do go about editing video interviews, the crucial part was to understand how the best practice workflow could be modelled into software in a way that would be accepted by the users. At Vox I had the opportunity to experiment on that process in an iterative way. 

I am very proud of this project because having a number of active users is the proof that it was a success. 


## Which projects didn't go in the direction you thought (good or bad)? What happened instead?

Caption burner

Volume report generator 

needed more tech support to quickly try things out. 

More time to experiment on video-> audio-> text //story editor publishing system. 


## What did you document?
Link us to blog posts, photos, how-tos that have been published AND include all the documentation ideas in your head you haven't yet published.

http://pietropassarelli.com/wip_london_july2016.html 

source piece coming out soon

autoEdit documentation tutorials section, cover problem domain

http://www.autoedit.io/jsdoc_docs/ 

