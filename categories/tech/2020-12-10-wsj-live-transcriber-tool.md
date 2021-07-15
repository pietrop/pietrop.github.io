---
published: true
layout: post
title: "Live transcriber tool - POC"
description: "A technical exploration and proof of concept for a live transcriber tool"
permalink: "/wsj-live-transcriber-tool.html"
date: "2020-12-10"
link: 
image: /img/wsj-live-transcriber-tool/live-transcriber.png
tech: ['node', 'React','Javascript', 'bootstrap','react-bootstrap', 'firebase','STT','Google Cloud Functions']
company: 'WSJ'
open_source: false
categories:
- tech
tags:
---

Investigated the technical feasibility of providing a reporting tool to handle live transcriptions. Main use case was that of reporters listening to earning calls, they could be using as an aid to note taking on quick turnaround reporting.

- Record the audio client side using browser APIs
- send the audio stream to server side Speech To Text Service
- provide interim results as they become available from the STT
