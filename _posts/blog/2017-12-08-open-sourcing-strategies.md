---
layout: post
title: "Some thoughts on open sourcing strategies"
description: "After a conversation at the Open News Unconference (London October 2017) during the week of MozFest, I thought I would have been good to dot down some ideas on things I’ve found to work, as a strategy for open sourcing and more generally work in the open to engage a community around your project."
permalink: "/open-sourcing-strategies.html"
date: "2017-12-08"
published: true
link:
image: 
github:
gitbook: 
youtube: 
vimeo: 
tech: 
categories:
- blog
tags:
---




What follows are some things to think about when thinking about how to open source a project. 

For each one I am also going to be highlighting the advantages that comes with it. 

For more comprehensive resources see

-  Github: [open source guides](https://opensource.guide/)

- Open News: [The Field Guide to Open Source in the Newsroom](http://fieldguide.opennews.org/en/latest/) 

## 1 - Code in the open 

Have your repository public from day one. Rather than leaving it to the end, 

As opposed to a big push to open source and tidying and cleaning up to do afterward. 

This is easier if you follow best practice to put keys and sensitive info the right places (eg using environment variables or using a `.gitgnore` file) when you set up.

The main advantage for this is that it makes it easier to ask for help as you go along, as you can point directly to the line in the code, and have the whole context around it.  

[More concrete steps on tools to avoid leaking sensitive informations here](http://fieldguide.opennews.org/en/latest/Chapter03-Existing-Projects/#is-your-project-sanitary ).

## 2 - Open source components 

If you use a component based design approach, or simply for example in node, separate your code in small functions. 

The main advantages are those of a component-based design architecture, eg that it makes your code more reusable, easier to test. 

But from an open sourcing perspective, it also means that there might be more people in the community who might be interested in that specific piece of the puzzle but not in the whole system or application you are building. And they might be interested in contributing to the development of that piece.  This not only allows you to have more contribution to the building blocks. But also people using it in different context might strengthen those components for edge cases you might not have thought about. 

For instance in [autoEdit](http://www.autoedit.io/), there is an[ EDL composer module](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/edl_composer),  it was only after sharing the code with the folks at [Hyperaud.io](https://hyperaud.io/) and testing it implemented in one of their projects, that was able to identify an edge case I had not thought about and improve the module to be more robust. 

In autoEdit, it assumed the video file footage came from a camcorders and had cards informations associated with it in the metadata, while in hyperaud.io use cases it may not, and would not have these type of informations. This was breaking the EDL composer. And gave me a chance to look into making it work for those situations. 

## 3 - "case study" article

Another thing that is worth considering is to write a blog post/article type of document, where you give a more high-level overview of the system/project and if applicable, the philosophy behind it. 

If you are working on something that cannot be open sourced, because it might be too closely tied to system specific of proprietary code, the "case study" type of article is also a good alternative to share some knowledge on the high level thinking, challenges and insights. 

If you didn’t follow my very first advice, “code in the open”,  for whatever valid reason, the high level article overview article can also be a quicker way to engage people and create anticipation while working towards open sourcing the project.

Here is [an example from autoEdit written for Source](https://source.opennews.org/articles/video-editing-made-better-introducing-autoedit/). But this can also be a markdown type of file in your repository. 

One of the biggest advantages of this is to foster collaboration. 

For example the NPR source piece ["How NPR Transcribes and Fact-Checks the Debates, Live"](https://source.opennews.org/articles/how-npr-transcribes-and-fact-checks-debates-live/) by Tyler Fisher was instrumental in fostering collaboration with the Vox Product team when they decided to make a similar system. Rather than re-inventing the wheel it was possible to build on the shoulder of their approach, and study it closely. 

Because there was a conversation going between NPR and Vox re-best approach to improve this system. There was also [motivation in documenting the new system in a gitbook](https://pietropassarelli.gitbooks.io/opened-captions-for-annotated-articles/content/). As part of the ongoing conversation. 

To go full circle, Kavya Sukumar at Vox also wrote ["Building an Annotation Tool on a Dime"](https://source.opennews.org/articles/building-annotation-tool-dime/) another source piece to detail the high level thinking behind the new and improved system.

Vox was able to get up to speed more quickly, and NPR was then able to adopt and improve their system.

Last but not least, there was also a financial saving involved in the new optimization, NPR was initially paying a stenographer to live transcribe with a hefty hourly rate, while with the improved system there was no transcription cost involved in the transcribing, as the captions were coming straight from the Tv channel. 

The Financial Times has also recently started to use this system thanks to the gitbook documentation and open source code available. 

The key here is that more players are engaged with a specific problem you are trying to solve, the more support you can get to find an optimal solution. 

## 4 - Document as you go along 

Similarly to the idea of "code in the open" documentation is also best done if you take notes as you go along. I normally have a `notes` folder where I keep  markdown files in the GitHub repo.

This is a place to keep notes to self, options considered, limits of certain technology etc ...

For example when at the POV hackathon, I kept at [`notes.md`](https://github.com/pietrop/BattleSounds/blob/master/notes.md) where I was keeping track of key pieces of technology components  used to make it easier to share stack choices, challenges, techniques and issues.

As a more recent example when working on an open source transcription text editor for Fact2, I kept[ a `notes` folder](https://github.com/pietrop/fact2_transcription_editor/tree/master/notes ).  To describe key parts of the working of the system for developers users. 

To the produce actual documentation for the project it becomes then easier and faster to organise and "refactor" this using a gitbook. 

## 5 - README

Your readme should have clear instructions on how to get setup and especially if it is a module/components, example usage. 

For example I made this module for parsing and composing srt, subtitle files. See [on npm](https://www.npmjs.com/package/srt_parser_composer) where it has been downloaded 476 times or on [github](https://github.com/pietrop/srtParserComposer).

For each function there was an example usage, which can easily be copied and pasted to get up to speed. And a clear statement of the input expected and example of the output it would return. To make it as clear as possible. 

For projects, If you find the the setup description is very involved. Maybe your build process/script should do a bit more to make it a one line command as much as possible.

If you see [the quickQuote README](https://github.com/times/quickQuote#welcome-to-quickquote-documentation) the initial setup is very involved. Despite having tried to contain the server deployment instructions in [a bunch of deployment scripts](https://github.com/times/quickQuote#deployment-instructions). 

In[ autoEdit’s README](https://github.com/OpenNewsLabs/autoEdit_2#development) I worked on this made the setup happen as much as possible as part of a script. So that launching the app would be as easy as `npm install` followed by `npm start`. 

## 6 - R&D doc 

This is something I initially learned at Vox Media from[ Ryan Mark](https://twitter.com/ryanmark). He suggests making a working document to sketch out production as a list. The list covers things you need to do or learn in order to get the project to completion, possibly in order. 

I then elaborated on this and devised my own format. I generally:

* Divide the program it  in parts with titles.

* Describe what each is going to do. 

* What components you need and what they need to do

* What components you currently have and their limits 

* What you don't know and need to find out for each, for instance sometimes the integration might not work as expected or there are dependencies that are to port or deal with. 

For example this is a blog post I wrote in response to someone asking what could be a good way to [align partially scripted speeches](http://pietropassarelli.com/aligning-partially-scripted-speeches.html). It contains the initial research and exploration I do before diving into testing out the option to implement a possible solution. 

Another example is from the BBC News Labs hackathon BBC where I’ve worked on a [slack bot for transcription service](http://pietropassarelli.com/BBCnewslabs_slack_transcription_bot.html). And used a [google doc to keep an R&D doc](https://docs.google.com/document/d/1n6B1vyQysIEeDfoDUqnVNzb7RVy_MNuyvrVekLQ0YZ4/edit#heading=h.q3di39fnr6em) to guide the development on a fast turnaround. This was also a great communication tool when working with [Laurian Gridinoc](https://twitter.com/gridinoc) to keep track of progress, define scope and tackle unexpected twists. 

Last example from a more mature project, with autoEdit, an [R&D Doc for the second phase of development looked like this](https://docs.google.com/document/d/12mUuXAtE65vhy5Sm0tmKRdgXGMn_Ob4RZEs9T5uDPkM/edit?usp=sharing).

Where you can see the program it’s divided into the parts, each part into components, and for those components there are details, on what already exist, what is unknown, challenges and limits of current hypothesis of implementation. Where useful there are also mockup sketches and screenshots or json representation of data. But these are generally extras for when the conversation gets more specific. 

The biggest advantage of keeping an R&D doc is not only that it makes it easier to keep your ideas organised, guide your research and development effort.  But also if you get stack, you have less work to get others up to speed to get some help. 

Also useful if working in a team to divide tasks and make sure everybody is in sync. 

## 7 - Screenshots, gifts and (maybe) diagrams

When you are done make it really easier for the users to understand what the project does. 

Use screenshots, gifts, Maybe even diagrams. And If needed make a user manual. 

I would also argue that for this purpose giffs or screenshots driven narrative is more effective than video tutorials. As it is more immediate, and easier to skim.

Some designers argue that the programme should be self explanatory enough that a user manual is not needed.  I think that is an honorable objective to strive to, altho very dependent on the complexity of the type of software and user base you are designing. For instance I cannot imagine learning to use a video editing software to its full potential without reading through expert books about it. As well as there might be user segments for which things  are intuitive and others that will find it harder to get up to speed. 

But on a more concrete point it also is good for people evaluating if they want to use  your software to evaluate it and get a sense of its working without having to go through the installation process.

For example with [Fact2 Transcription text editor’s README a screenshot](https://github.com/pietrop/fact2_transcription_editor#transcriptions-text-editor) gives you a very clear idea of what the project looks like without you having to download and compile the code, hoping that it works, to see for yourself.

While [autoEdit’s README is a good example of use of diagram](https://github.com/OpenNewsLabs/autoEdit_2) to give an overview of the system, as well as  [the autoEdit user manual](https://pietropassarelli.gitbooks.io/autoedit2-user-manual/content/) as an example of using giffs to make things easier to understand, [such as the paper-editing feature](https://pietropassarelli.gitbooks.io/autoedit2-user-manual/content/paperediting.html). 

For a more minimalistic example see how for the quickQuote project page, [the user manual](https://times.github.io/quickQuote/userManual.html) is just a series of steps and screenshots.

## 8 - Demo

It is also good to make a dummy demo. To deploy alongside the project. This is good both for people evaluating the software and for yourself if you need to give a presentation under time pressure or resource constraints and can fall back to it.

However if you are going to go down this road it is good to think about how to achieve this at the beginning of the project especially if using build tools, to automate that step.

But I would recommend doing this only if it can come with not too much extra code. One way to achieve this for a client side web app is to hard code the database, with some examples and make it self-contained client side. The purpose of the demo is more to express the interaction then provide any useful functionality.

Make it very clear that the demo is a demo and not expected to be a working app. 

For example with [autoEdit’s demo](http://www.autoedit.io/demo/) I tried to make it really clear it is for demonstration purpose only. By adding text to clarify and avoid users confusing it for a web version of the app.

In autoEdit I [made this part of the build tool process](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json#L25) to make it easier to update the demo when adding new features.

With [captions maker’s demo ](http://pietropassarelli.com/captions-maker/)despite the big organce text screaming this is a dummy demo I still had people completely missing it and telling me that they were frustrated they couldn’t use the app. 

## 9 - Video presentations 

Open source projects like the [testing framework jest do have link to talks](https://facebook.github.io/jest/#watch) but you don't have to be as big as that to do the same.

The main advantage, is that you put forward another medium to engage people in your project.

The easiest is to organise to give a short presentation (think 3 to 10 minutes) at a relevant meetup or event. For example some hacks/hackers chapters have lighting pitches.  

You can then link to it from the github repo to give a better sense of the project in a nutshell. 

* Film a video presentation at a meetup or event.

* Ideally, less than 5 and no more than 10 is best.

* At a minimum do a screencast recording.

If you are recording a screencast QuickTime is unreliable and makes huge raw files. It might stop if it runs out of space.  If you use these, do run through, and make sure mic settings are on. Screenflow is ok but in my experience it can take forever to export. In any case you might want to have mirrored screen.

This is also particularly useful for hackathons projects where sometimes it's more proof of concepts

As an example [BBC News Labs hackathon slack bot presentation](http://pietropassarelli.com/BBCnewslabs_slack_transcription_bot.html), less then 3 minutes.

see [London Times team presentation at BBC News Labs hackathon](http://pietropassarelli.com/oneStory.html).

Or the[ first version of autoEdit, as presented at Hacks/Hackers London](http://pietropassarelli.com/autoEdit.html) in under 2 minutes.

Example [Annotated article system presentation at SRCCON](https://pietropassarelli.gitbooks.io/opened-captions-for-annotated-articles/content/video-of-presentation.html) workshop with David Eads. 

altho a bit longer than recommended, it is integrated in the gitbook documentation to provide alternate format to consume /explore the material.

Sometimes the organisers of an event will be recording, presentations and that can be a great resource to to link to your project, such as the [textAV event documentation with video of the project’s presentations](https://pietropassarelli.gitbooks.io/textav). 

One of the advantages of this, is that sometimes the code for the project might not keep up with the test of time, especially for hackathons proof of concepts, and dependencies might be breaking etc and a video presentation could be a great way to get the gist of it. 

## 10 - Collaborate 

If you don't want to be "stuck" maintaining it, talk/connect with people ahead of time to engage them on your idea, size needs and requirements etc… 

## licence 

Last but not least, pick a licence. [For more details on this see here](http://fieldguide.opennews.org/en/latest/Chapter02-Starting-New-Project/).

