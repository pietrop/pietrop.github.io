---
published: true
layout: post
title: "Podcast Transcription authoring tool"
description: "An authoring tool to create transcriptions of podcasts, leveraging automated speech to text services."
permalink: "/wsj-podcast-transcription-authoring-tool.html"
date: "2020-10-10"
link: 
image: /img/podcast-transcription-tool/1-poddcast-list-of-rss.png
image2: /img/podcast-transcription-tool/2-poddcast-list-of-episodes.png
image3: /img/podcast-transcription-tool/3-poddcast-transcript-editor.png
tech: ['node', 'React','Javascript', 'bootstrap','react-bootstrap',  'firebase','STT','Google Cloud Functions']
company: 'WSJ'
open_source: false
categories:
- tech
tags:
---

- Serverless architecture using Firebase. 
- It fetches new episodes via the RSS feed daily using a CRON job in a firebase cloud function. 
- It uses [react transcript editor](/BBC-transcript-editor.html) component to provide a UI to correct the automated transcription from STT services, while preserving word level time-codes.


<div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div>



<div class="image-wrapper">
    <img src="{{ image3 }}" alt="{{ description }}" />
</div>

BBC React transcript editor has got performance issues for transcript over one hour, but the average podcast for this use case is between 7 to 10 minutes, and max 20 minutes. So it's fine in this instance. But could replace with more recent [`slate-transcript-editor`](https://github.com/pietrop/slate-transcript-editor) if requirements change.
