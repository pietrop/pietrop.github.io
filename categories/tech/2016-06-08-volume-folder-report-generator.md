---
layout: post
title: "Volume folder report generator"
description: "Os X nwjs app, tha runs a ruby script to generate a report for missing media files on a video server"
permalink: "/volume-folder-report-generator.html"
date: "2016-06-08"
link: https://pietropassarelli.net/Volume_folder_report_generator/
image: /img/volume-folder-report-generator/report.png
image2: /img/volume-folder-report-generator/start_screen.png
github: pietrop/Volume_folder_report_generator
youtube: 
published: true
open_source: true
tech: ['node','NWJS','Ruby']
company: 'Vox'
categories:
- tech
tags:
---


<!-- 0000-mm-dd-title.md -->

Video teams across Vox Media saved projects on a server inside a volume folder organized as follows. See Volume_example for a more comprehensive example folder structure.

```
└── Volume
       ├── SAMPLE_Project_1_folder
       |   ├── ASSETS
       │   ├── EXPORTS
       │   ├── MEDIA
       │   └── PROJECTS
       └── SAMPLE_Project_1_folder
             ├── ASSETS
             ├── EXPORTS
             ├── MEDIA
             └── PROJECTS
```


This Os X NWSJ app runs a ruby script to generate a report for missing media files on the video server.

<div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div>
