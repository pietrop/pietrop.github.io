---
layout: post
title: "How I run the textAV event - draft"
description: "How to engage a micro community of practitioners around a problem domain. And go beyond the 'hackathon format' for comunity events"
permalink: "/how-i-run-textav.html"
date: "2018-02-08"
published: true
link: https://sites.google.com/view/textav/home
image: /img/how-i-run-textav/textav.jpg
image2: /img/how-i-run-textav/maxresdefault.jpg
image3: /img/how-i-run-textav/chris-dialogger-v1.jpg
github:
gitbook: https://pietropassarelli.gitbooks.io/textav/
youtube: https://www.youtube.com/channel/UC6cU2oc6p-II1H4ZdYbx5Tg
vimeo: 
tech: 
categories:
- blog
tags:
---


Initially I had sketched this out as a session for SRCCON or MozzFest, but thought I’d use this as an excuse to talk about how I have been organising the textAV event to gather, strengthen and grow a community of practitioners around a problem domain. 

I hope this can serve as inspiration to others as an alternative to the "traditional hackathon", and inspire to organise more throught through and effective comunity oriented events.

It mostly uses examples from the first textAV in 2017, rather then the second in 2018.

This was the proposed session description 

>You worked on a cool project, you spoke with other folks who might be interested in the same, and notice a lot of re-inventing the wheel because of fragmented pockets of knowledge here and there. Now how would you go about creating a micro community that connect people with similar interests? To facilitate knowledge share, collaboration, problem solving and breeding ground for new ideas.  
>
>Drawing on participants experience will try to identify key challenges as well as strategies to overcome those. I will share my experience with connecting the textAV (textAV.tech) community to kickstart the conversation.
>
>By the end of the session will have 10 takeaways of actionable things you can try out right away. 

<div class="image-wrapper">
    <img src="{{ page.image}}" alt="{{ page.description }}" />
</div>


The problem domain is that of working with audio, video, transcriptions and captions to speed up the production process. 

While at Vox as part of the Open-News Knight Mozilla fellowship, I had worked on [autoEdit.io](http://www.autoedit.io/), a text based video editing system that uses automated STT services to enable a [digital paper-editing workflow](https://pietropassarelli.gitbooks.io/how-to-tell-compelling-stories-out-of-video-inter/), and noticed when going to conference that more people than expected were working in similar problem domain, altho sometimes with slightly different use cases.

I notice that there was a fair bit of re-inventing the wheel. However coming from a documentary background, and having worked as a production researcher, my first step was always to do some background research on the domain, who else has worked on this? And what can I learn from them to make my own decisions.

I also noticed that projects that were aware of the rest ecosystem where able to make a considerable leap forward in pushing the boundaries of what is possible in the domain.

So the challenge was, could there be a way to facilitate a knowledge share to foster this type of cross contamination?

## Example of “cross contamination”

Best example is the use of [hyperaud.io](https://hyperaud.io/) by [Chris Baume at BBC R&D](https://www.bbc.co.uk/rd/people/c-baume). 

 hyperaud.io, to my knowledge, is one of the first prototypes in the space of using transcriptions as a way into the video, creating a so called “hypertranscript” where words are given timecode, and clicking on the words takes you to the corresponding point in the video file. 

At the time designed with the web in mind, possibly inspired by [Mozilla popcorn maker](https://blog.mozilla.org/blog/2012/11/11/popcorn-maker/) and [ideas about remixing content](https://www.everythingisaremix.info/about/), it took youtube urls and srt captions as an input and had a remixable HTML video player as output that could be embedded in other web pages. 
[You can try it here](https://hyperaud.io/pad/).


<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>


<!-- (https://i.ytimg.com/vi/XGUoDSpJ_fs/maxresdefault.jpg)  -->

Chris BBC Dialogger prototype was aimed at radio production, and in its first prototype modified hyperaud.io for the “remixing” component.





After user testing, for that use case, turned out that users where not very keen on doing a lot of drag and drop, so the subsequent version moved away from hyperaud.io and implemented a different interface to make text selections. 

<!-- ![BBC dialogger latest screenshot]() -->


<div class="image-wrapper">
    <img src="{{ page.image3 }}" alt="{{ page.description }}" />
</div>

[Link to video demo](https://www.dropbox.com/s/dd2eal7j8d5cwq9/Discourse%20demo%20%28Aug%202016%29.mov?dl=0)

Because of the use case focus on radio production, dialoguer also implemented the possibility to export selections as EDLs and audio or video files.

## Curating an event
When I worked at the BBC Academy, I learned from an experienced event producer that you can curate your events as if they were programs that are going to be broadcasted. This concept stayed with me.


Another thing is the idea of community, having an anthropology background, I was always troubled by the way this word is used. What do we mean by it? Is it just a synonim to say a group of people? 
Because in anthropological terms a community is a group with a shared set of values, practices, and understanding. 
<!--  find anthroplogy community definition -->

First and foremost Community == people 
And people are individuals, what better then follow up with each and everyone individually, to make sure their voice is heard?

Time consuming as it is, it yelds results.

<!-- And as they teach in negotiation 101 classes, you can influence a large group most effectively if you have one on one chats with people involved in the decision making process. -->

## If your event was a blog post
Before coming up with the idea for the event, I started with a blog post, [“beyond video as black boxes”](http://pietropassarelli.com/videoBox.html)  where I reviewed and commented on projects that were in this problem domain of working with audio, video, transcriptions and captions.

The post was reviewing projects, but was also trying to cluster them into categories and paint a way forward for what else could be possible in this domain.

So this was then a great excuse to send it around to other folks and ask their thoughts on it. As a first step in engaging people with this community.

## The Event format
textAV is articulated into two parts, first a Knowledge share and then a hands on unconference to explore problem domain topics.

For the knowledge share, participants present interesting and relevant projects they have been working on.

For the hands-on unconference participants work on problem domain topics they are interested.

In the context of computer science, a problem domain is the context that defines a particular problem. 

<!-- TODO: re-phrase what is a problem domain topics  as described here http://pietropassarelli.com/10-lessons-video-tools.html
Eg in CS a problem domain is  -->

## Making the most of trello 
I use a public trello board to organise and curate the content of the event “in the open”.

See 2017 [textAV event topics 2017](https://trello.com/b/tyIWiHOE/text-av-event-topics-2017) and And 2018 [textAV event topics 2018](https://trello.com/b/flpaLJyC/textav-event-topics-2018) trello boards as examples.

<!--expand on how trello board is organised -->

There is a List of Projects as “Text / Audio / Video Projects”
And list of “Problem domain topics” 

There is also [a card with a template for adding a new project](https://trello.com/c/LVUWWyfS) and [one for the problem domain](https://trello.com/c/CDvIBBvM)

<!-- example from card template for projects  -->


## The “onboarding” process
This is my outline, for the process of “onboarding” perspective participants

- Make a list of people you'd like to sign up 
- People sign up 
- Follow up with invite to catch up 1-1
- When 1-1 follow up 
    - Pitch event, as knowledge share + hands-on unconference, as descrined in previous section
    - Add them and Talk them through the public Trello board for event, described in previous section. 
    - See if there is anything they’d like to add to it, eg a cool project they worked on they’d like to present. I always try to suggest to think of an angle of 
        - “lessons learned”,
        -  “hilights”, 
        - “take aways” 
        - and/or if you have a problem you faced during development and you’d like the make the most of the expertise that will be in the room to get a second opinion.
        - Also if there is any interest problem domain topics they thought about that can either be added as a new one or clustered with existing once.
    - Sometimes people are just curious and don’t have a project to show, or have not been thinking about problems domains to explore, in that case, I reassure that it’s totally fine, and that there are others that are approaching the event in the same way etc.. 
    As we want the community to have a low barrier of entry and be welcoming for newcomers entering the field.
    - I then add them to slack, we use the hyperaud.io slack. 
    Rather then creating yet one more slack for the event, I decided to use a community one that already existed.

## The Schedule
Looking at the trello board, it then becomes easier to figure out the schedule. 

I’ve try to keep the knowledge share presentation short, and do 5 min, 10, 15 and 20 min slots. And use the presentations more as an excuse spark to conversations and get participants to get to know one another rather then a comprehensive overview of projects.

[See example from 2017](https://sites.google.com/view/textav/schedule)

##  Code of conduct
Why do you need a code of conduct?

It sets the tone. And the expectations what is appropriate behaviour within your community and on the day of the event.  As well as establish a line of communication should there be a need for anyone to raise concerns. 

[See textAV code of conduct here](https://sites.google.com/view/textav/code-of-conduct)

To write textAV code of conduct I was largely inspired by others, it’s easier to write one if you are modifying an existing one rather then starting from scratch.

We all stand on the shoulders of giants across many open source communities. We’d like to thank the communities and projects that established code of conducts and diversity statements as our inspiration:

<!-- - [textAV](https://sites.google.com/view/textav/conduct-london-18) -->
- [SRCCON](https://srccon.org/conduct/)
- [Django](https://www.djangoproject.com/conduct/reporting/)
- [Python](https://www.python.org/community/diversity/)
- [Ubuntu](https://www.ubuntu.com/community/code-of-conduct)
- [Contributor Covenant](https://www.contributor-covenant.org/)
- [Geek Feminism](https://geekfeminism.org/about/code-of-conduct/)
- [Citizen Code of Conduct](http://citizencodeofconduct.org/)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/CONTRIBUTING.md)
- [Open code of Conduct](https://todogroup.org/opencodeofconduct/)
- ["Why You Want a Code of Conduct & How We Made One"](http://incisive.nu/2014/codes-of-conduct/)
- [Facebook Open Source Code of Conduct](https://code.fb.com/codeofconduct/)

## The event website
if you want to go lightweight, an eventbrite page with a good description will do the trick. 

But If you can have an event website to have your schedule, and code of conduct you can also use it to gather a short bio and photo from participants. This can be useful to circulate amongst perspective participants so that they can get a better sense of who is going to be in the room, and create some anticipation and curiosity beforehand. [See example from textAV 2017](https://sites.google.com/view/textav/confirmed-participants)

I think this also takes some of the pressure off on the day, and indirectly works as an ice breakers.

I used the [(new) google sites](https://sites.google.com/new), and it was very fast to put up and update.

## The "unconference"

### Documenting the event and collaborative note taking
I’ve found, and this is something that came from some of the participants last year, that having a shared google doc, and reminding people of the URL (make a sharable short url) can be a great way to share some of the responsibility around documenting the event (think short bulletpoints). 

We also decided to film the presentations for record keeping. 

Because the presenter’s screen and the video was being mixed on the day and clip cropped after every presentation, it was very quick to upload them all on the last day of the event.

The video presentations combined with the collaborative notes into a gitbook make for a pretty good account of the event and go to resource for people who were not present.

[You can see videos of 2017 presentations and collaborative notes here](https://pietropassarelli.gitbooks.io/textav)

### Outcome of the event
You can read [one of the participants account](https://source.opennews.org/articles/text-audio-and-meaning/) to get a sense of what it was like to be there on the day. 

At it’s core increased knowledge share, connection, network and community. 

- It documented the state of the ecosystem as described in previous section as a go to resource.
- As well as to prompt open source collaboration.
    - Chris Baume BBC R&D, [BBC Dialoguer](https://pietropassarelli.gitbooks.io/textav/projects/bbc-dialogger.html) was open sourced leading up to the event to engage with the community. 
    - AtJson annotation library by Blaine Cook at Conde Naste, was open sourced after the event with a soft launch, following his textAV presentation around [annotation models](https://pietropassarelli.gitbooks.io/textav/problem-domains/d83d-dd2a-2705-2b07-fe0f-annotations-models.html).
<!-- Some tangible prototypes.  -->
    - Alex Norton's [overtyper prototype](https://github.com/alexnorton/overtyper) came out of a group work discussion with other textAV participants around the domain of [Transcript correction](https://pietropassarelli.gitbooks.io/textav/unconference-projects/transcript-correction.html)
    - I worked with a team to do a design sprint around identifying [a captioning workflow](https://pietropassarelli.gitbooks.io/textav/unconference-projects/captioning-workflow-system.html) and subsequently made a working proof of concept prototype. [captions](/captioning-app.html)


