---
layout: post
title: "BBC AMP Stories"
description: "A lightweight system for BBC Journalist to publish AMP Stories"
permalink: "/BBC-AMP-stories.html"
date: "2018-06-17"
link: https://www.bbc.co.uk/news/ampstories/index.html
image: /img/BBC-AMP-stories/amp-stories-index.png
image2: /img/BBC-AMP-stories/g-sheet-amp.png
image3: /img/BBC-AMP-stories/g-sheet-custom-menu.png
image4: /img/BBC-AMP-stories/g-sheet-preview.png
gitbook:  
github: 
youtube: 
vimeo: 
tech: ['node', 'google app script']
company: 'BBC'
open_source: false
categories:
- tech
tags:
---

<!-- ## BBC AMP Stories -->
<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>

A lightweight system for BBC Journalist to publish [AMP Stories](https://amp.dev/about/stories/) via a spreadsheet.

<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

Within the spreadsheet we added a custom menu, via [google app scripts](https://developers.google.com/apps-script/). This allowed the users to preview and publish by triggering a remote jenkins job.

<div class="image-wrapper">
    <img src="{{ page.image3 }}" alt="{{ page.description }}" />
</div>

As well as generate a preview of the story, within a constrained iframe to check the size of the text on the screen before publishing.

<div class="image-wrapper">
    <img src="{{ page.image4 }}" alt="{{ page.description }}" />
</div>

You can read more about the process here: ["Experiments with AMP’s new ‘Stories’ format for news"](https://medium.com/bbc-news-labs/experiments-with-amps-new-stories-format-3a2a1103cee)