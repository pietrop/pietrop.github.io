---
layout: post
title: "BBC Narrative Text"
description: "Making narrative text in social videos accessible to screen readers"
permalink: "/BBC-narrative-text.html"
date: "2019-01-20"
link: https://biffud.com/projects/accessible-narrative-text
image: /img/BBC-narrative-text/overview.png
image2: /img/BBC-narrative-text/narrative-text.png
gitbook:  
github: 
youtube: 
vimeo: 
tech: ['TTML', 'XLS', 'XML', 'node', 'CSS']
categories:
- tech
tags:
---


<!-- ##  -->
Taking the lead as technical product manager to coordinate the work of external contractors from [BIF]({{page.link}}) for a    high profile BBC accessibility project. 

"Narrative text" is when videos, mostly for social media, are narrated through the use of on screen text graphics, without the use use of voice over narration or a presenter.

<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

This is often burnt into the video, making the videos largely inaccessible for users with visual impariment. 

The project set out to explore a way to use [TTML](https://www.w3.org/TR/2018/REC-ttml2-20181108/) to make the text accessible to a screen reader.

<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>

This required considering an end to end approach, exporting the graphics from a Final Cut X XML, converting them to a TTML, and adding the necessary functionalities to the BBC media player to support accessibility for screen reader.

<!-- https://docs.google.com/presentation/d/1oP7B4losMEMCCbPaLJj4_7GIUpH3LeoXHSnsdsU0kcg/edit?usp=sharing -->