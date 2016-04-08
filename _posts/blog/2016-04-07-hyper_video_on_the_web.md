---
layout: post
title: "Hyper Video On the Web"
image:
date: '2013-04-08T01:30:00.000+01:00'
description: "Various forms of hyper video on the web, both in form of tools and interactive docs"
published: true
categories:
- blog
- articles
tags:
---


img {
  width: 100%!important;
}

# Chapter 2 Context
<!-- Litterature review 8-10 pages 3200 - 4000 words -->

<!-- This chapter should cover background information, related work, research done, and tools or software selected for use in the project.

You should not include well known 	things (e.g., HTML or Java) or try
to give tutorials on how to use a tool or code library (use references to
books and websites for that information). Everything you include should
be directly relevant to your work and the relationship made clear. This
chapter is likely to be fairly substantial, perhaps 8-10 pages. -->


## Background information

<!-- ### Sources 640-800  -->
<!--
- The sources of information you are drawing on (papers, books, web-sites, etc.) should all be cited or referenced clearly. In addition, state how each source relates to your work and avoid the temptation to pad out the chapter by including sources that you didn’t make use of during the project.
 -->

<!-- Tutotials?
look at examples dissertation to find out what they used...
Design patterns in ruby book? -->

### Newsroom challenges
To best understand the challenges in developing software in a news environment, I referred to the leaked New York Times Innovation report.
 <!-- ref -->

<!-- expand -->
The biggest issue highlighted in the report was that flagship projects such as snow fall <!-- ref -->
were time consuming and a lot of effort went into the making of a one of piece with a relatively short life span.

>"We are focused on building tools to create snow falls every day, and getting them as close to reporters as possible. I'd rather have a snow-fall builder then a snowfall."   
>- Kevin Delaney, editor of Quartz

<!-- ref p36 NYTimes report or if can't find it there then NiemLab http://www.niemanlab.org/2014/05/the-leaked-new-york-times-innovation-report-is-one-of-the-key-documents-of-this-media-age/ -->

The NY Times competitors such as BuzzFeed, were instead able to separate form from content. The best example is a dialect quiz by the NY Times, that was widely popular, and BuzzFeed, inspired by the format made a "Quizz builder"
<!-- ref -->
and after the first release, published 20 variations with minimal effort.  
<!-- with page reference -->


This consideration of building a system rather then a one of editorial piece was the initial inspiration behind the making of the Interactive Debate Prototype at the Times Build The News Hackaton
 <!-- ref -->
discussed in more details in the investigation section.
<!-- quote / reference -->

### V.A.R.K.
The other consideration the guided the project came from VARK, idea of the variety of learning styles.
 <!-- ref vark -->
Simply put, different people learn in different ways. Five main learning styles are identified, visual, auditory, reading and writing, kinaesthetic and multi-modal. The core concept is that each individual as one (or more) preferred learning style. But also, more crucially, that the same information can be delivered in different ways to meet the different learning styles.
Applying this consideration to the publishing of news article, forces  us to re-consider the publishing of text based articles and the use of multimedia to engage a wider audience taking into account the variety of learning styles.

This consideration guided a lot of the assumptions through the investigation. And effectively in the final web application adding the corresponding video segment to a text quote, is
<!-- , although perhaps in a small way, -->
taking into account the variety of learning styles.


<!-- ### About idea of hyper-transcripts?
instead of timecode, video accurate  -->

<!-- search NY Times about Video? -->

<!--
- A description of the research carried out to learn out about the nature of the problem(s) being investigated and potential solutions.
The form of the research will vary widely depending on the kind of project.

For example, it might involve searching through research publications and online resources, or might involve an exploration of design possibilities for a user interface or program structure.
 -->


<!-- ## Background research 640-800  -->


## Related work and similar solutions
<!-- SIMILAR SOLUTIONS -->
### Similar solutions <!-- 640-800 -->
<!--
- If relevant, a survey of similar solutions, programs or applications to
yours, and how yours is differentiated.
-->
I am now going to consider similar solutions and different approaches to working with video transcriptions on the web.
These are going to be divided into tools, and editorial.
Tools are those projects that allow the user to make something, such as provided a video and returning transcriptions. While editorial are those projects that are more about the content and the delivery of information. I will start with the editorial project as we will see, in this context  they often are a starting point for developing tools.

#### Editorial

##### Aljazeera Debate Obama - Romney

![Aljazeera Obama-Romney Debate - Mark Boas](/img/img_chp2_context/aljazeera_obama_romney.png)

In this project the word accurate hypertranscript was done manually.

What I like about this project is that it gives a way into the video, allowing to search the text, and provide some basic infographic, through a pie chart, on the search terms, you can see how many time the respective candidates have mentioned a certain word.

opensource on github <!-- ref to github project -->

the code from this opensource project was research both at Build the news hackaton and at BBC Times news hackaton, both discussed in subsequent chapter of investigation.

different from my implementation, does not use video js, uses wjplayer(?)
it's not responsive, does nto uses bootstrap.
uses popcorn js to make the hypertranscripe connection with the video.
unlike my implementation that makes the most of HTML5 Video tag.

It's also interesting about this project that the developer put an "Easter egg" that would let the user play only the sentences with a certain word in it, adding the query in the URL `?k=economy&t=1000`.
Where "economy" could be any keyword, and `t` is for the time interval we wish to assign to each sentence.


```
http://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html?k=economy&t=1000
```

However this was not made available as a function  in the actual GUI of the application.  <!-- and was then surprised that it didn't go viral,  despite not having excluded exclusively in the application for the user to do. -->
<!-- ref to video when mentioned -->

This feature is similar to the `video grep` project discussed below.


##### Aljazeera Obama state of the union archive
This project generalises the previous one at an archive level.
But again as far as I am aware no automation was used to deal with the transcriptions or the different video input.

![Aljazeera Obama state of the Union - Mark Boas](/img/img_chp2_context/Aljazeera_Obama_state_of_union.png)

This is where I got the idea for a system that could take a video in perform some kind of analyses.

Also interesting about this project, is that there is a section providing a summary for each video.


<!-- ### Palestinian films
ref http://interactive.aljazeera.com/aje/PalestineRemix/ -->


##### Mandela speech
The Times & Sunday Times made a <!-- ref Ændrew --> a piece on Mandela speech, using as developed by hyper audio pad <!-- boas ref -->  on the back of Aljazeera hyper-debates.
However the Hypertranscript, was done using Hypertranscriptmaker <!-- ref --> but the transcription was done manually using  VLC and Notepad and subsequently a software to make subtitles, adding the text with in and out points, to then get an srt to convert in hypertranscript maker.
on the video,  

![Mandela Hypertransript - Ændrew](/img/img_chp2_context/mandela.png)

the piece used audio only. what I like about it, is that the text changes colour as the audio is playing.
<!-- ref -->

Built with a Google docs-based back-end and Bootstrap front-end.
<!-- ref doc Tabletop github project -->

However the project relying on google doc as a backend, through the Tabletop project <!-- ref --> was then effected by google changes in the API can break the project.
Perhaps better solution to make the most of the convenience of using google docs as a CMS for the journalist would be to keep google docs in sync with a database that updates the application. this way if the connection between the database and google docs where to drop due to changes in the API the front end of the application would not be effected.

#### Tools

##### F5 Transcription

F5 is a transcription tool, made by German academics. It allows the user to transcribe a video manually, with a convenient interface the application provides timecode stamps on new line input.

![F5 Transcriptions](/img/img_chp2_context/F5_transcription.png)


##### F4 Analyses
in subsequent versions of F5 they released F4 analyse, which allows to takes those same transcriptions and add human tagging to it for qualitative analyses.

Very interesting is the idea of providing insight into text of transcription coding it's content with tags, and adding summary, this however is done manually by the user, while during the investigation I was interested in automating this part.


##### oTranscribe
Made by newsroom developer at WSJ
 <!-- ref -->
it's very popular with journalists.
<!-- ref http://otranscribe.com -->

it facilitates transcriptions of video and audio, with intuitive interface and a few keyboards short-cuts.

![oTranscribe - WSJ](/img/img_chp2_context/oTranscribe.png)


No automation of the transcription process thou.

##### YouTube captioning       
YouTube has a captioning service and clickable transcriptions.
However their transcription is mostly aimed at subtitles and even in the transcription view, it's not word accurate, it's line accurate, perhaps because it uses the subtitle file generated during the captioning to model the hyper-transcript.

![YouTube Captioning Transcriptions](/img/img_chp2_context/youtube_captioning_transcriptions.png)


![YouTube editor to edit captions](/img/img_chp2_context/youtube_captions.png)
<!-- Other hypertranscript video block in sample project. -->

The advantage of YouTube automated captioning is that it is constantly improving and becoming more and more accurate.

YouTube also provides an API <!-- ref --> to retrieve captions.
however it was not clear how you would go about retrieve automatically generated captions through the API, as these need for the language to be set before the caption is generated.

But most importantly the disadvantage is that, in version two google announced it was going to discontinue access to the captioning service through the API.
<!-- ref -->
However despite this still being available through version 3 of the API.
<!-- ref -->
Automatically generated transcriptions are a big compoment of this project. therefore the chocie to define an interface for the speech to text API in order to be able to change speech tot ext provider in the future should the service being discontinued, or found a better solution.
and the choice not to rely on google/YouTube for this as no commitment on their part in maintaining this service as part of the API long term.

<!-- ref how yotube captiojnig works -->

##### Spoken data
Despite YouTube captioning was used for great part of the prototyping to get the `srt` file of the transcription as in input to the application before integrating the speech to text api component. when it come to implement such component Spoken data turned out to be a better fit.

Spoken data is mostly tailored at small teams of professional transcribers, but also individuals requiring transcriptions.
<!-- ref -->

With it being a smaller company they were more responsive in making changes.
For instance I needed to be able to delete a video uploaded to their system through the API,(to avoid issues of duplicates in their dashboard if the user uploads, deleted and uploads again the same video in my application) and they were very quick at implementing that feature.


They also provided other functionalities such as a view to edit the transcription, with a defined URL that can be accessed with the `uid` of the video. This could be useful to give the users of my app a way to edit automated transcriptions without having to implement it from scratch.

```html
http://spokendata.com/transcription/5937
```

##### Hypertrasncript converter
Eventually Mark Boas
<!-- ref to github project -->
automated the process of parsing srt files into an hypertranscript with an hypertranscript converter written in JavaScript, this library was developed to support hyperaudio pad project .
<!-- ref -->
but it's all js, and client facing.
made for hyperaudio pad
<!-- ref -->
(for hypertranscript component )

<!-- https://github.com/maboa/hyperaudioconverter -->

![hyperaudio converter - Mark Boas](/img/img_chp2_context/hyperaudio_converter.png)

from the line accurate time code of the srt file it works out a word accurate hypertranscript, with each word in a span tag with a relative time attribute.

an analyses of this algorithm, can be found in the appendix, as this was converted from js to ruby to move this conversion logic in the back end of the application.

##### Video grep
also audio grep version, as name suggests it's a command line utility to search audio or video file and return a file with cut segment.

Python  library that given a video media
<!-- ref https://github.com/antiboredom/videogrep -->
<!-- ref video grep example https://www.youtube.com/watch?v=PQMzOUeprlk  -->
you can search and return all the sentences where the word "time" is mentioned from a film  or this example where using same  tool they extracted all the parts in the speech where he says “what I can tell”.  this does use our subtitle file associated with the video as a starting point and then Video Using FFMPEG.


a mac app version (using electron) of video grep as recently being released providing a GUI to the command line utility.

![Video Grep - mac app using electron](/img/img_chp2_context/video_grep_results.png)

no level of granularity control on seleciton, or hypertranscript.

This project reminds of Casseteboy video artist, that does video editing mash ups, generally of politician's speeches.
<!-- (https://www.youtube.com/user/cassetteboy) -->
However in this interview he mentions he uses a manual and time consuming workflow to search and identify the relevant video segments for his edit.
<!-- http://www.digitalspy.co.uk/showbiz/interviews/a615489/the-story-of-cassetteboy-the-kings-of-the-youtube-funny-cut-up-video.html#~p7N8kh0aGa3qbS  -->

<!-- get quote from ( jump to question "Making these videos takes a lot longer than many people might assume doesn't it…”)
 -->

##### BBC Snipets  
It allows BBC employees to search for programs in the BBC Archive(going back only to the last 5 years thou), searching across the text of the subtitles. It uses a form of hyper-transcript  to keep audio and video in sync,  allows to cut video segment from BBC archive archive.

<!-- DMI failure, touchy subject -->

![BBC Snipets ](/img/img_chp2_context/BBC_snippets.jpg)

hyper transcript seems to be more sentence accurate rather then word accurate.

constrained to BBC archive, and because uses already made subtitles, no real system to deal with un-subtitled vide os and transcriptions generation.

No form of analyses on transcription, auto tagging, summarization provided.
most importantly the cutting of the video segment is done at the level of the video time-line. and not of the text.


##### moments  - prototype
<!--  - Ændrew ref -->
System to add a dropdown video snippet, to a text article.
idea of CMS for journalist and published view for viewer.
No transcription. But where I got the idea of the dropdown.
proof of concept, interactive demo winner at hackaton.
<!-- find ref of which hackaton -->

![Moments](/img/img_chp2_context/moments_CMS.png)

##### Hyper audio Pad
Mark Boas, project from which hyperaudio convert is side project/library.

uses hypertranscript to make remixes of videos based on their transcriptions/subtitles.

##### prEdit
<!-- http://assistedediting.intelligentassistance.com/prEdit/ -->
similar solution to hypertranscript but is desktop based, and provides integration with editing software.

Interface is not very intuitive.

<!--
http://www.philiphodgetts.com/2012/01/text-is-the-new-timecode/ -->

<!-- RELATED WORK-->
### Related work

<!-- #### Own previous projects -->
With a background in documentary production, I have a long standing interest for working with transcriptions effectivly, so here are some of my previous projects that influenced the current one.

#### autoEdit - P for Entreprenurship module
autoEdit - "Digital paper editing”
To make a script from a selection of lines from the transcriptions of interviews.
You can then export as an EDL. This can be opened with the editing software of your choice to reconnect the corresponding video into a sequence, and finish working on your rough-cut assembly. <!-- ref http://pietropassarelli.com/autoEdit.html -->

Had a component for parsing srt/sbv file.
but initially thought about how to do hypertranscript, and made line accurate rather then word accurate.

![autoEdit](/img/img_chp2_context/autoEdit.png)

also does not support uploading video, and cutting video segment, but upload srt files into it, and export EDL file.
<!-- find autoEdit description somewhere else
 -->

#### Build the news proof of concept
further discussed in investigation section

Interactive debate - Analysing speech in Video
A system that given a video would generate transcription, identify the different speakers, provide summary of main topics and keywords as well as emotional charge of the speaker. Using the UK elections debate as a use case.
Winner of the Times “Build The News Hackaton” <!-- ref http://pietropassarelli.com/buildTheNews.html  -->

<!-- see picture in investigation section. -->

#### Difference
Video quote extractor, is different from previously mentioned projects in that:

- automates transcriptions
- easy interface to make selection of quote, and cut the video automatically.
- provide embed code for embed
- gives more control to the user in selecting a quote through text selection.
- makes the most of HTML5 video tag using vjs, doesn't need to use popcorn js, flash or wjs player <!-- check name -->
- is an MVC web application with distinction between back-end, and front end, and database to preserve state.



<!-- RESEARCH DONE -->

## Research done
<!-- chanfe bullet points into headings. -->

- Speech to Text Solutions
	- YouTube captioning
	- SpokenData
	- Dragon Naturally speaking
	- CMU Sphinx (offline)
- Hypertranscripts
	- analyse algorithm of hypertranscript converter, and refactoring in ruby <!-- ref to hypertranscript converter opensource + add log not in appendix with analyses of hypertranscript algorith, reason for refacroign => backend, save to db(something else about data structures? input and output?) -->
	- video js, cliccable, searchable transcriptions components<!-- (couldn't find except for mark's one) -->
- knowledge domain of the applicaiton.

## and tools or software selected for use in the project

### Intro to software <!-- 640-800  -->
<!--
- Introduce the software, programming languages, library code, frame-works and other tools that you have used. Discuss the available choices and make clear which you made use of and why.
 -->

<!-- see GC02 on rails -->
<!--
#### MVC  framework
 to handle the back end, use of MV. -->

<!--

4.3. Model View Controller (MVC)
The Rails framework uses the MVC design pattern. The MVC separates the application into three parts (Model View Controller) thus organising the code to hold similar functions within work packages. The view is used to represent output to the user and can be changed from the controller. The controller defines the way the user interface reacts to user input. The model defines and manages the data, logic and rules for the database. Additionally, the model notifies the views when any data is updated that they depend upon.
The MVC design pattern itself relies of a number of other design patterns such as observer, composite, strategy, factory method, and decorator. Looking at these design patterns in more detail will give insight into how the code for this project is structured and the benefits this provides for the application in its current state as well as for future development.

 -->

####  About Ruby on Rails
<!-- see GC02 soft eng report abotu design patterns in rails MVC -->

Ruby on rails is a mvc framework. It was chosen because of the speed ti gives when prototyping.

<!-- GC02 soft eng report
	Ruby on rails design patterns from GC02
Team28_SoftEngReport.pdf

>"This application features design patterns, many of which are inherent in the Rails framework. It is important to note that a framework is different from a design pattern5 (page 40). The Rails framework uses abstract classes to define and maintain relationships between objects and also uses command patterns to generate these objects10 (page 121). The framework’s predefined design parameters allow rapid prototyping and allow focus on the bigger picture6. Rails is said to favour “convention over configuration”2, which means that the focus is on utilising design patterns and established best practices."


>##### Package Design
>"Designing software applications for the web requires using design patterns and combine frameworks such as using both rails and bootstrap together.
“Larger object­oriented applications will end up consisting of layers of frameworks that cooperate with each other. Most of the design and code in the application will come from or be influenced by the frameworks it uses.”16(page 40)
The focus was on working with the Rails MVC framework as much as possible, using gem/libraries to add pluggable components of features needed for the application such as Devise, Paperclip and the audio recording methods that were organised into packages. This gave encapsulation and reusability, and also makes the app more maintainable going forward.""

-->

<!--
 4.4. Observer
The observer pattern involves decoupling objects by using general references so that changes can be made to one object without having to inform all of the other objects that it interacts with17 (page 15). Changes can be made to a number of classes at once, in this way. More specifically, the MVC decouples the views from the models and uses a subscribe/notify pattern to flag up and update any changes18 (page 14).
Team 28 ­ GC02 Software Engineering Report
￼9
￼4.5. Composite
The composite pattern is used to group objects so that they can be treated like a single object18 (page 15). This provides a tree structure in which objects at the top of the tree are composed of their branches.
In the context of this application, view objects are composite and consist of many components such as a navigation bar, buttons, text, images etc. Updating one of these components does not require any action from the others and so the view is more efficient and the application runs faster.
4.6. Strategy
An aspect of the strategy pattern is that it extracts an algorithm and encapsulates it within a class18 allowing the algorithm to be replaced either statically or dynamically when the algorithm has complex data structures or lots of variants.
A view uses an instance of a controller subclass to implement a particular response strategy18 (page 16). For this app, a user requests an action and the view requests an appropriate response from the controller, without knowing anything about the inner workings of the controller’s methods.
4.7. Factory Method
The factory method creates an instance of several derived classes. The factory method involves creating objects without specifying the exact class that they come from.
This is used in the MVC to call a view for a controller without specifying which particular view that is. The correct view is then called, depending on the request. The details are handled within a controller method (page 16).
4.8. The Command Pattern
A command pattern is an instruction or list of instructions to do something specific, like a grocery list. The instructions can be completed immediately, or later, or when something specific happens19. Rails uses the command pattern to execute it’s migrations from the Rails command line. It is also used to generate classes such as views and controllers.
4.9. Adapter
An adapter is a pattern that matches a class with (a number of) interfaces. In the case of this app, two databases were used ­ SQLite for development and PostgreSQL for production. Rails uses Active Record as the object relational mapper18 (page 173). Active Record must work with both SQLite and PostgreSQL and so the adapter interface stands in the middle. Once this configuration was set up in the code and the server was configured, the app could be seamlessly tested both locally and online.
Team 28 ­ GC02 Software Engineering Report
10
4.10. Singleton
The singleton pattern refers to a class of which only a single object instantiation exists. For the case of this app this is used a number of times:
● ActiveSupport maintains a list of rules, which encapsulate the entity­relationship model for the database. This requires only one instantiation and is therefore an example of a singleton18.
● Ruby’s build utility, rake, also uses a singleton. As it runs, it reads in information about which directories to create and which files to copy. All of this information needs to be available to all of the moving parts of rake and so rake stores it all in a single object (the Rake::Application object) that is available as a singleton to the entire rake program19.
4.11. RESTful URL
REST refers to Representational State Transfer. A RESTful URL should have a clear state of navigation that gives the user information about the page that they are on as well as the navigation route to that page. This application uses RESTful URLs to handle URL requests.
4.12. Interchangeable Data Formats
The web application and the mobile application must eventually communicate with each other and share the same database. This requires the sharing of a common database schema and an agreed JSON specification for communication of objects via the web protocol. This is not implemented but has been factored into software design for future development. -->


#### Ruby on Rails vs php Laravel

Both ruby on rails and laravel php are well supported with jet brains IDE, which I decided to use to increase productivity.

After an initial study of the Laravel PHP framework. to minimise  the learning curve of new language/framework for the server side back end and to concentrate on the investigation and the implementation of the solution, I decided to opt for rails.
Because I had previous eexperience in rails, it was a good chance to consolidate  number of components (srt parser) that could be modified from previous project, and other libraries like Timecode one

#### front end client side interactivity

##### Jquery vs angular vs react
Studied angular and react, but on one end a bit of an over kill for this project on the other learning curve too steep.
so opted to use Jqeury, to ensure cross browser compatibility. and try and keep code well organised within the rails framework.
learned js first to better understand Jquery to


##### Mobile first responsive Bootstrap
despite no requirement of application working on mobile or tablet, kept option open, using bootstrap.
<!-- ref -->
and bootswatch for theme. This makes it easy to change between bootswatch themes with minimal effort, but also if in the future there's the need to create a bespoke theme, the bootswatch classes and id provide an interface to modify the style without having to interfere with the HTML too much.
<!--  -->

<!--

GCO2 Report
>"4.2. Responsive Design
As mentioned in previous sections, Bootstrap’s mobile first responsive framework was used for the design to scale views to a smaller screen size. This means that the resizability of the screen is introduced at early stages, rather than having to work it in at a later stage or to implement two separate websites one for desktop and one for mobile.""

 -->


##### Hypertranscript - Video
<!-- examined opensource project using popcorn js and wjs player(?)
on back of BBC Hackaton decided to use videojs and Jquery to achive same result in cleaner way making most of HTML5 Video tag and video js library

video js turns video into a js object, can call play, pause, current time on it. -->
The hyperaudioconverter, and Boas aljazeera interactive debate projects
<!-- ref -->
where studyied closely to understand how the interactivity of the hypertranscript and the two ways sync with the video worked.

at the BBC hackaton, discussed inthe investigation section, there was a change to prototype an alternative to that system using video js and jquery instead of popcorn js and jplayer <!-- ref -->.
<!-- (?) check name -->

Boas's applications are mostly front end, with minimal back end processing.
Because of the nature of my application, once the srt  of the transcription is parse it gets saved in the database.
I decided it made more sense to parse the srt in the back end, in the model, in of rails MVC. making it also easier to test.  and to keep to design pattern of MVC where views are thinner then model.

and to store the transcript in the database in a way that would make it easier to retrieve as an hypertranscript. this is discussed in later sections.

in the appendix you can see an analyses of the js hypertranscript by boas and my re-factoring implementation in ruby.


Using the hypertranscript converter JavaScript library/ open source project <!-- ref -->,  and deciding to convert that into MVC  Ruby language  as a method in the model  to abstract as a component and being able to test it more efficiently( as this way could be refracted as a  Ruby gem to be used in subsequent projects). discussed into greather details in chapter 3.

also re-writing Hyper-transcript js  in ruby, means it could be abstracted and packaged as gem component to create hypertranscripts from srt.


##### Video JS
Video js allows us to make the most of the HTML5 video tag, instantiating it as a JavaScript object.
<!-- ref -->
in particular for this project it was useful to be able to play, pause, retrieve and set current time.
These functions where at the core of the hypertranscript interactivity, realised with jquery.
Each word had it's on span tag with timecode atribute associated in seconds which made this possible.

<!--
#### Other libraries
have a look through code, and gem file -->


#### APIs
<!-- Choices of APIs YouTube vs spoken data.
better support on spoken data, ie tailor it to british english etc.. -->

##### Made ruby SDK for spoken data
Discussed in previous section the choice of using spoken data rather then YouTube captioning API. to facilitate a more modular component I made a ruby SDK
<!-- ref + see appendix with code -->
to create an interface to the text to speech API that would make it possible to be able to change text to speech component, without undergoing major refactoring of the rest of the applicaiton.


##### Google auth
Google auth was used to handle user authentication and integrate with The Times existent system.

### Deployment
The applicaiton was deployed on the Times amazon cluster using deis, Heroku style deployment was chosen amongst the option to chose a wide known convenion, for when the project will be opensourced.
A bash script was written to automate the deployment script to automate deployment. process  
<!-- ref -->

## Tools

Ruby mine IDE, Git, and github, deployment heroku style.
Balsamiq Mockup 3 was used for drawing/presenting proof of concept prototypes to the users and stakeholders.
considered using vm, such as vagrant
 <!-- ref -->
 but to reduce overhead of learning curved decided not to, and opted to keep logs of how to setup various dependencies.
