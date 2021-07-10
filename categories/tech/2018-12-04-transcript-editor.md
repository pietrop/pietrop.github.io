---
layout: post
title: "BBC React Transcript Editor"
description: "An open source React component to make correcting automated transcriptions of audio and video easier and faster"
permalink: "/BBC-transcript-editor.html"
date: "2018-12-04"
link: https://bbc.github.io/react-transcript-editor/
image: /img/BBC-transcript-editor/transcript-editor-overview.png
image2: /img/BBC-transcript-editor/
gitbook:  
github: bbc/react-transcript-editor
youtube: 
vimeo: 
tech: ['node', 'react', 'draftjs','CSS', 'storybook']
categories:
- tech
tags:
---

Main features:
- Auto pauses when you start typing, and resumes when you stop 
- Douple clicking on a word takes yout corresponding point in the media
- restores word level timings after you make edits to the text
- can adjust playback rate 
- Keyboard shortcuts
- various export format (including word, and captions)

See [here for a more comprehensive list of key features](https://github.com/bbc/react-transcript-editor/blob/master/docs/features-list.md)

<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>

Check out [the demo]({{page.link}}) to try it out and the [`README` of the repo]({{page.github}}) for how you could get started using it within your app.

For a ready to use version you could try and use it within the [digital paper edit app](/BBC-dpe.html).