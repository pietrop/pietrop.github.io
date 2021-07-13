---
published: true
layout: post
title: "WSJ Transcription service"
description: "An in house transcription service for WSJ reporters"
permalink: "/wsj-transcription-service.html"
date: "2020-12-10"
link: 
# image: /img/wsj-transcription-service/project-list.png
# image2: /img/wsj-transcription-service/project.png
image: /img/wsj-transcription-service/slate-transcript-editor.png
tech: ['node', 'React','Javascript', 'firebase','firestore','firebase hosting','firebase analytics','STT','Google Cloud Functions', 'custom authentication using Okta', 'ffmpeg','ffmpegwasm','google cloud tasks', 'Google Cloud STT','slate-transcript-editor' ]
company: 'WSJ'
open_source: false
categories:
- tech
tags:
---

Based on refactoring parts from [BBC Digital Paper Edit - autoEdit3 open source project](/BBC-dpe.html). Extracted only the part relevant for transcriptions. 

- Client side ffmpeg using WebAssembly [ffmpegwasm](https://ffmpegwasm.github.io/)
- Serverless STT using [google cloud tasks](https://cloud.google.com/tasks)
- Refactored to use in house design system (instead of bootstrap of material UI)
- Uses open source [slate transcript editor](https://github.com/pietrop/slate-transcript-editor) react component as a way to allow correcting the text and preserving time-codes.
- etc... 
  

<!-- <div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div>



<div class="image-wrapper">
    <img src="{{ image3 }}" alt="{{ description }}" />
</div> -->
