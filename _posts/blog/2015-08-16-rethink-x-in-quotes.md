---
layout: post
title: 'It’s time to rethink how we do ‘x in quotes’ pieces on the web'
description: ''
permalink: '/rethinking-x-in-quotes.html'
date: '2015-08-16'
published: true
link: https://medium.com/digital-times/it-s-time-to-rethink-how-we-do-x-in-quotes-pieces-on-the-web-1328f1ccf039
image: /img/rethinking-x-in-quotes/1_reXGhOgRQkVJ__YCys2AaA.png
image1: /img/rethinking-x-in-quotes/1_rRm4kBZ6OUQbRIqFH6slGA.png
image2: /img/rethinking-x-in-quotes/1_DMDEyqChkVBH8tU1lu3Cig.png
image3: /img/rethinking-x-in-quotes/1_04S4THYCANjcpetGEEVXbA.png
image4: /img/rethinking-x-in-quotes/1_0tO_gFdZ6kWUXg-nEn3tfw.png
image5: /img/rethinking-x-in-quotes/1_GMK13UAqv8zf-kAwsbaT_g.png
image6: /img/rethinking-x-in-quotes/1_reXGhOgRQkVJ__YCys2AaA.png
github: https://github.com/pietrop/quickQuote
# gitbook: https://pietropassarelli.gitbooks.io/textav/
# youtube: https://www.youtube.com/channel/UC6cU2oc6p-II1H4ZdYbx5Tg
youtube:
vimeo:
tech:
categories:
  - blog
tags:
---

_originally [posted on medium](https://medium.com/digital-times/it-s-time-to-rethink-how-we-do-x-in-quotes-pieces-on-the-web-1328f1ccf039)_

---

Last week’s Republican presidential candidate debate on Fox News didn’t disappoint as a spectacle: a huge audience, thousands of tweets and some very entertaining quotes (mainly thanks to a certain Mr Trump) that were covered by most major news outlets in the days afterwards.

However, the way in which these news organisations reported candidate’s quotes was far from impressive and each similar to the next.
Most news outlet merely copied the quotes verbatim and them paired them with photos of the candidates. Occasionally video was used but it was often a longer highlights clip and contained only one or two of the quotes featured in the piece.

## Example of news coverage of the debate

(For brevity I’ve cut the articles midway, to see the full article click on the links.)

### NY Times

<div class="image-wrapper">
    <img src="{{ page.image1 }}" alt="{{ page.description }}" />
</div>

NY Times — [How The Republican Candidates Fared in the First Debate](https://www.nytimes.com/2015/08/08/us/politics/fox-news-moderators-bring-a-sharpened-edge-to-gop-debate-stage.html)

### BuzzFeed

<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

BuzzFeed — [Here’s Every 2016 GOP Candidate’s Response To The Same-Sex Marriage Ruling — And There’s A Divide](https://www.buzzfeednews.com/article/kyleblaine/heres-every-2016-gop-candidates-response-to-the-same-sex-mar#.wegNJyaA4)

### The Guardian

<div class="image-wrapper">
    <img src="{{ page.image3 }}" alt="{{ page.description }}" />
</div>

The Guardian — [Donal Trump quotes: the best and the worst of the GOP debate](https://www.theguardian.com/us-news/2015/aug/07/donald-trump-in-the-gop-debate-his-best-lines-and-the-most-cringeworthy)

### BBC

<div class="image-wrapper">
    <img src="{{ page.image4 }}" alt="{{ page.description }}" />
</div>

BBC — [Republican 2016 debate: who were the winners and losers?](https://www.bbc.co.uk/news/world-us-canada-33815103)

As I went through these articles and came across a text quote, I kept thinking, ‘why can’t I just click on it and see the corresponding part of the video and get the full experience of _how_ they said it?’

In today’s HTML 5 web, there really should be a better way for presenting these quotes pieces (which after all aren’t rare — see press conferences, book launches, the week in quotes). The quote, in and of itself, often does not tell the full story. So many other elements of nonverbal communication — tone, body language, emotion — are absent in a plain text quote and yet vital to understand the meaning of what is being said.

However, it’s not surprising why newsrooms don’t approach quotes pieces in this way. The time it would take to edit individual videos for each of the quotes is considerable and, in a fast paced newsroom looking to publish quickly after the event, simply not possible.

Think about the steps it would take: once you’ve got your hands on the video, you’d have to find the quote, which often entails scrubbing to the video in search for that one good sound bite. Transcriptions are generally out of the question as either there’s no time to wait for them or no budget, and if they don’t have timecodes they still don’t help you speed up the process.
Then once you have found your quote, you’d need to find someone with an editing software and get that cut, which between ingesting of the video, editing, transcoding, exporting (for HTML5), could take up to an hour.

But what if that process was much easier?

I am working on a web app that will allow you to:

- upload a video
- get an automatically generated transcription
- search and explore the text alongside the video
- select a quote
- export a quote with its corresponding video clip

<div class="image-wrapper">
    <img src="{{ page.image5 }}" alt="{{ page.description }}" />
</div>

<div class="image-wrapper">
    <img src="{{ page.image6 }}" alt="{{ page.description }}" />
</div>

Click on the quote and the corresponding video segment drops down
It’s still work in process but I’m hoping to do some tests in upcoming candidate debates. You can see see and export a [demo of the code on JSFiddle](https://jsfiddle.net/pietrops/yazkqg2s).

<!-- <script async src="//jsfiddle.net/pietrops/yazkqg2s/embed/"></script> -->

<script async src="//jsfiddle.net/pietrops/yazkqg2s/5/embed/result/"></script>

\_
