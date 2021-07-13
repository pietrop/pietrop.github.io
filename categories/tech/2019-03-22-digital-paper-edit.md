---
layout: post
title: "Digital Paper Edit"
description: "An open source application to make it faster, easier and more accessible to edit audio and video interviews using automatically generated transcriptions form STT service."
company: 'BBC'
permalink: "/BBC-dpe.html"
date: "2019-03-22"
link: https://bbcnewslabs.co.uk/projects/digital-paper-edit/
image: /img/BBC-dpe/overview.png
image2: /img/BBC-dpe/balsamiq-sketche.png
gitbook:  
github: https://github.com/bbc/digital-paper-edit-client
youtube: 
vimeo: 
tech: ['node', 'react','bootstrap','react-bootstrap', 'electron', 'ffmpeg', 'ffprobe','edl','adl','xml','express']
open_source: true
categories:
- tech
tags:
---

<div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div>

In a complete refactor from the ground up it takes the concept (and some of the modules) of [autoEdit2](/autoEdit2.html), and the [idea of a modular architecture](https://textav.gitbook.io/textav-event-2018/projects/autoedit-panel-for-adobe-cep-pietro) a bit further by allowing users to 
- add custom labels and highlights
- search and filter by speakers and labels
- as well as adding more options for export (eg `.adl` for SADiE audio editor and `.fcpxml` for FCPX, along side `.edl`)
- Uses [BBC video context](https://github.com/bbc/VideoContext) component to display a preview of the programme script
- further flashes out the elemnents available to create a programme script from interview transcripts
- uses [`@bbc/react-transcript-editor`](/BBC-transcript-editor.html) component to allow users to correct transcripts generated via STT (speech to text).


You can either try out the cross platform electron application by following [these instructions](https://github.com/bbc/digital-paper-edit-electron/blob/master/docs/guides/user-instructions.md) or [play around with the dummy demo](https://bbc.github.io/digital-paper-edit-client) to explore the interface.

<!-- <div class="image-wrapper">
    <img src="{{ image }}" alt="{{ description }}" />
</div> -->


<!-- Link to initial slide deck for the initial pitch ["What if creating an audio or video program was as simple as editing a word document?"](https://docs.google.com/presentation/d/1M6w8xNA5U4KtxQYrZ1gmPhBqwQbwMOnYavp3RV0HM4Q/edit?usp=sharing) -->


In it's current version, my forks of BBC Digital Paper Edit are now the version of [autoEdit3](https://autoEdit.io) I currently maintain. 