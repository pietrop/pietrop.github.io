---
layout: post
title: "Captioning app [Working Title]"
description: "Turbo charge the captioning workflow using automated transcription, punctuation, alignement and segmentation."
permalink: "/captioning-app.html"
date: "2017-07-24"
link: https://pietropassarelli.com/captions-maker
image: https://pbs.twimg.com/media/DF7ytQ7VoAA1ry2.jpg:large
github: 
tech: ['ffmpeg','ffprobe','node','Watson STT','Bootstrap','HTML5','CSS',  'Git', 'Javascript', 'aeneas']
categories:
- tech
tags:
---

<!-- TODO move from  -->

<!-- _draft: more coming soon_ -->

![captioning app screenshot](https://pbs.twimg.com/media/DF7ytQ7VoAA1ry2.jpg:large)


During the [textAV](https://pietropassarelli.com/textAV.html) event with a small team we did the [requirements gathering ](https://pietropassarelli.gitbooks.io/textav/content/unconference-projects/captioning-workflow-system.html) based on [Joseph Polizzotto's presentation](https://pietropassarelli.gitbooks.io/textav/content/remote-presentations/captioning-workflow.html) and [oTranscribe](https://github.com/oTranscribe/oTranscribe).

In the following weekend I built an app that considerably speeds up and simplify the captioning workflow. 

- It auto transcribes
- It adds punctuation automatically
- User can then correct the text
- It auto segments and aligns to create caption file.


## Demo 

See [demo here](https://pietropassarelli.com/captions-maker) for demonstration purposes (click **load** and then **align**). 

It auto transcribes using speech to text service to give you a first draft, it auto adds the punctuations, you can review and correct, and when you click **align** it segments and auto  aligns(very fast) to create a caption file (srt but could support more format) similar to youtube captioning editor. 

Gives you a preview of the caption file, with clicable timecodes that take you to that point in the video.


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/JPolizzotto">@JPolizzotto</a> <a href="https://twitter.com/GidsG">@GidsG</a> auto transcribe, auto punctuation, auto srt lines alignment... <a href="https://twitter.com/hashtag/textAV?src=hash">#textAV</a>.tech <a href="https://t.co/mbW799QYnr">pic.twitter.com/mbW799QYnr</a></p>&mdash; Pietro (@pietropassarell) <a href="https://twitter.com/pietropassarell/status/889321437504385024">July 24, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>