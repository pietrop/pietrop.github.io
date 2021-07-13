---
layout: post
title: "Interactive databate #buildTheNews"
description: "at Times and Sunday Times #buildTheNews hackaton"
duration: 
permalink: "/buildTheNews.html" 
image: 	/img/BuildTheNews/interactive_debate.png
dashboard: /img/BuildTheNews/dashboard.png
hackaton2: /img/BuildTheNews/hackaton2.png
hackaton: /img/BuildTheNews/hackaton.png
presentation: /img/BuildTheNews/presentation.png
presentation2: /img/BuildTheNews/presentation2.png
journalismuk: /img/BuildTheNews/journalismuk.png
sharing: /img/BuildTheNews/sharing.png
youtube: nn6VvKA4sjI
link: https://www.journalism.co.uk/news/5-digital-storytelling-ideas-from-build-the-news/s2/a564659/
vimeo: 
github: 
tech: ['Ruby on Rails','popcorn.js',  'Bootstrap','HTML','CSS', 'Heroku', 'Git', 'GitHub']
company: 'Times & Sunday Times'
open_source: false
categories: 
- tech
tags:
---

<div class="image-wrapper">
<a href="{{ page.hackaton2}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton, photo credit @MattieTK">
<img class="thumb img-round img-responsive" src="{{ page.hackaton2}}" alt="photo" />
</a>
</div>
<br>
For the Times Build the news hackathon we decided to do system that given a video would generate transcription, identify the different speakers, provide summary of main topics and keywords as well as emotional charge of the speaker.

We decided to use the upcoming elections debate  as a use case, but this could be generalised to other interview based video content.

<div class="image-wrapper">
<a href="{{ page.image}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton">
<img class="thumb img-round img-responsive" src="{{ page.image}}" alt="photo" />
</a>
</div>

And provide a analytics dashboard for the journalist to view a heat map of:

- most viewed 
- most commented
- most shared
- emotions

of the viewers engagement with the piece.

<div class="image-wrapper">
<a href="{{ page.dashboard}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton">
<img class="thumb img-round img-responsive" src="{{ page.dashboard}}" alt="photo" />
</a>
</div>
<br>
 This we felt is also very important. For instance,   if you are a journalist writing on that debate looking at this data could give you clues about what your readers are already thinking about it, and make it easier to engage in a conversation them in your next article. As well as other possible use cases where analytics  of this kind would be useful.


<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/{{page.youtube}}" frameborder="0" allowfullscreen></iframe>
</div>

<iframe src="https://docs.google.com/presentation/d/1DLjz__UifA39VrqUQM3-RP7s8ZDBMZWWhuR4qX80Deg/embed?start=false&loop=false&delayms=5000" frameborder="0" width="480" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


## The Concept
In terms of the analyses of the video based interview the ambition was that of using existing technology a round natural language processing, and sentiment analysis technology to give an insight into the [subtext](https://en.wikipedia.org/wiki/Subtext) of an interview.

on the morning of the hackathon I was reading through [the New York Times innovation report](https://www.niemanlab.org/2014/05/the-leaked-new-york-times-innovation-report-is-one-of-the-key-documents-of-this-media-age/) for some inspiration, when it mentioned that very often interactive project for the news are done as a one off, and that a more sustainable approach would be to create structures where form and content could be separated to make it reusable.

## Technology used
We drew on a number of open source technology, APIs and libraries 

We used ruby on rails and bootstrap as underlying framework, as well as  HTML, CSS, and javascript for the front end.
But considered the tight turnaround we didn’t have time to integrate the various API with our system, so we decided to treat it like an R&D project (Research and Development) where you find all the components and make sure they integrate before actually building the product. So we processed all the various system calls one at a time passing the output a round between the various components , and then hardcoded an interactive high fidelity mockup.  And all that was left then was to bring it all together into a full fledge application.


These are some of the technologies we used:

- Speech to Text  ([Youtube Captioning](https://developers.google.com/youtube/v3/docs/captions))
- [Speaker diarization  (Lium - same library used by BBC)](https://www-lium.univ-lemans.fr/diarization/doku.php) 
- Sentiment Analysis Topic & Keywords  ([Monkey Learn](https://www.monkeylearn.com) ) 
- Summarization  ([Text Summarization API](https://autosummarizer.com) )
- [Srt → HTML (library)](https://github.com/maboa/hyperaudioconverter)  
- [Social media Share (library)](https://github.com/maboa/uselect) 
- [Interactive transcriptions](https://github.com/maboa/uselect) , using [popcorn library](https://popcornjs.org) . from opensource [Aljazeera US Election Debate Hyperaudio](https://www.aljazeera.com/indepth/interactive/2012/10/2012101792225913980.html?k=economy&t=1000) . 

<br>

<div class="image-wrapper">
<a href="{{ page.sharing}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton">
<img class="thumb img-round img-responsive" src="{{ page.sharing}}" alt="photo" />
</a>
</div>
<br>


<div class="image-wrapper">
<a href="{{ page.presentation}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton, photo credit @MattieTK">
<img class="thumb img-round img-responsive" src="{{ page.presentation}}" alt="photo" />
</a>
</div>
<br>

<div class="image-wrapper">
<a href="{{ page.presentation2}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton, photo credit @MattieTK">
<img class="thumb img-round img-responsive" src="{{ page.presentation2}}" alt="photo" />
</a>
</div>
<br>

<div class="image-wrapper">
<a href="{{ page.hackaton}}" data-lightbox="buildTheNews" title="#BuildTheNews Hackaton, photo credit @MattieTK">
<img class="thumb img-round img-responsive" src="{{ page.hackaton}}" alt="photo" />
</a>
</div>
<br>

<small>photo credit [@MattieTK](https://twitter.com/mattietk)</small>


<div class="image-wrapper">
<a href="{{ page.link}}"  title="Article on journalism.co.uk">
<img class="thumb img-round img-responsive" src="{{ page.journalismuk}}" alt="photo" />
</a>
</div>
<br>


<!-- 
- gist of the project 1 paragraph
ie: provided a video it would generate all these things in automatic using external APIs(see google doc for newspaper article)
- inspiration from NY times innovation report, snow builder.
- tech used
- opensource project used (aljazeera hyperaudio hypertranscript, srt to hypertranscript, etc.. see team google doc )
 -->

