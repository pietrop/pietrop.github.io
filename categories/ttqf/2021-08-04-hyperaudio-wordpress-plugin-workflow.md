---
layout: post
title: "How to add hypertranscript to your word press blog using Hyperaud.io - draft"
description: "Some notes on the steps to get setup and use the hyperaudio wordpress plugin on your wordpress blog/site."
permalink: "/hyperaudio-wordpress-plugin-workflow.html"
date: "2021-08-04"
link: 
image: /img/hyperaudio-wordpress-plugin-workflow/hypeaudio-example.png #wordpress-hyperaudio.png
image2: /img/
# github: pietrop/
# youtube: 
published: true
open_source: true
# tech: ['word press']
# company: ''
categories:
- ttqf
tags:
---






## Setup

Install the wordpress-hyperaudio plugin.

#### get the plugin

If you have git clone this repository locally [wordpress-hyperaudio](https://github.com/hyperaudio/wordpress-hyperaudio).

If you don't have git, go to [wordpress-hyperaudio](https://github.com/hyperaudio/wordpress-hyperaudio), click on the green code icon, and chose "download zip".

#### Add the plugin to Wordpress 

To add it to wordpress as a plugin you can see [these instructions](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/). But instead of searching for the plugin in the directory, you would probably choose "upload plugin" and upload the content of [wordpress-hyperaudio](https://github.com/hyperaudio/wordpress-hyperaudio).


## Usage
Ok, I think now you should be all set. Here's some steps to create a new hyperaud.io in your Wordpress site/blog.

1. Record your audio/video.
2. Use [autoEdit.io](https://www.autoedit.io/) to generate a transcription. (See [user manual for more info](https://autoedit.gitbook.io/autoedit-3-user-manual))
3. Export an srt file from  [autoEdit.io](https://www.autoedit.io/). ([see autoEdit export section of the user manual for more info](https://autoedit.gitbook.io/autoedit-3-user-manual/transcriptions/export))
5. Create an hypertranscript (html)
	4. Open the srt file in text edit.
	5. Go to [hyperaudio converter](https://hyperaud.io/converter/)
	6. Paste the content of the srt file int he left column 
	7. Click "transform"
	8. Copy the hypertranscript that has been generate int he right column.
6. Add the hypertranscript to the wordpress hyperaudio plugin on your site. Watch this walk through [How to use the Hyperaudio Wordpress Plugin – Part 1](https://youtu.be/3Qpq8kj4PxM)



## Links

- [hyperaudio-lite](https://github.com/hyperaudio/hyperaudio-lite)
- [wordpress-hyperaudio](https://github.com/hyperaudio/wordpress-hyperaudio)
- [How to use the Hyperaudio Wordpress Plugin – Part 1](https://youtu.be/3Qpq8kj4PxM_)
- [hyperaudio converter](https://hyperaud.io/converter/)