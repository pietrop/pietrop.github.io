---
layout: post
title: "Trello To Markdown"
description: "A way to convert a trello board into a gitbook"
permalink: "/trello-to-markdown.html"
date: "2018-08-09"
link:
image: /img/trello-to-markdown/overview.png
image2: /img/trello-to-markdown/trello.png  
image3: /img/trello-to-markdown/gitbook.png
gitbook:  
github: https://github.com/pietrop/trello-to-markdown
youtube: 
vimeo: 
tech: ['node', 'trello', 'markdown']
categories:
- tech
tags:
---

`trello-to-markdown` is a a node module, on [github]({{page.github}}) and [npm](https://www.npmjs.com/package/trello-to-markdown), to export a trello board, and convert it into a set of folders, and markdown files, corresponding to lists and cards on the board.


<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

Once the trello board is converted into markdown files in a folder structure, via this module, it can be converted into a gitbook to make it easier to browse and search as reference documentation.


<div class="image-wrapper">
    <img src="{{ page.image3 }}" alt="{{ page.description }}" />
</div>

Because gitbook can synch automatically with a github repository on change, then if this is used within a github repo, it can update a gitbook version of the content.


Exampel usage, to convert textAV components trello board into a gitbook
- Trello: [TextAV Audio and Video Components (ongoing)](https://trello.com/b/58mo9Tpa/textav-audio-and-video-components-ongoing)
- Github:[textAV-components](https://github.com/pietrop/textAV-components)
- gitbook: [textav-components](https://textav.gitbook.io/textav-components)
