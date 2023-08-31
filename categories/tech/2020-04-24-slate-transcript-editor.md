---
published: true
layout: post
title: "Slate Transcript Editor"
description: "A React component to correct automated transcriptions from STT services. From lessons learned while making BBC React Transcript Editor."
permalink: "/react-slate-transcript-editor.html"
date: "2020-04-24"
github: pietrop/slate-transcript-editor
link: https://pietropassarelli.net/slate-transcript-editor
image: /img/react-slate-transcript-editor/slate-transcript-editor.png
image2: /img/react-slate-transcript-editor/slate-transcript-editor-export.png
image3: /img/react-slate-transcript-editor/slate-transcript-editor-storybook.png
tech: ['node', 'React','Javascript', 'storybook']
# company: ''
open_source: true
categories:
- tech
tags:
---


A complete re-write from the ground up of React [BBC Transcript Editor](/BBC-transcript-editor.html). [BBC Transcript Editor](/BBC-transcript-editor.html) is based on [DraftJs](https://draftjs.org) while `slate-transcript-editor` is based on [slateJs](https://www.slatejs.org). See here for more details on [draftJs vs SlateJs](https://github.com/pietrop/slate-transcript-editor/blob/master/docs/notes/draftjs-vs-slatejs.md) in the timed text domain.

- [Features list](https://github.com/pietrop/slate-transcript-editor/blob/master/docs/guides/features-list.md)
- [Timed Text Editor Domain Problem](https://github.com/pietrop/slate-transcript-editor/blob/master/docs/guides/the-timed-text-editor-domain-problem.md)
- [DPE transcript format](https://github.com/pietrop/slate-transcript-editor/blob/master/docs/guides/dpe-transcript-format.md)
- Core dependency for alignment as a separate npm node module: [`stt-align-node`](https://github.com/pietrop/stt-align-node)


<div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div>



<div class="image-wrapper">
    <img src="{{ image3 }}" alt="{{ description }}" />
</div>
