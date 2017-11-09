---
layout: post
title: "Aligning partially scripted speeches, R&D Notes"
description: "Initially started as an email response to someone asking about this, then decided to convert into a blog post, so these are my R&D Notes on how I would go about doing it with the technology available today."
permalink: "/aligning-partially-scripted-speeches.html"
date: "2017-11-09"
published: true
link:
image: 
github:
gitbook: 
youtube: 
vimeo: 
tech: 
categories:
- blog
tags:
---

# Use case

When working with the Vox Product Team last year, as part of the Knight-Mozilla fellowship with Open News, while making [autoEdit.io](http://pietropassarelli.com/autoEdit2.html) I had a chance to talk with many video producers across all brands.

Vox.com video producers, when making explainers videos often rely on scripted voice over narration. Which means that they write their voice over (almost like an essay) and then add images, scenes, and interview sounds bits to it in the video editing software of choice (or sometimes they’d paper-edit this in google docs). 

When using autoEdit.io, a fast text based video editing mac os x app, that leverages STT systems to edit video interviews, they pointed out that they would have rather have the possibility to align the scripted voiceover narration (which is about 80% of the spoken words in the piece on average) and have speech to text recognition only on the remaining "off script" parts. Eg interviews with contributors etc.. Rather than have to correct inaccurate speech to text on the voice over script parts for which they already had accurate text. 

This use case stood out and was left unresolved due to the complexity of the problem and the lack of available tooling for an efficient solution. 

However it’s a use case that will resonate with much of radio/tv/video production where you are looking to do aligning partially scripted speeches. In fact recently was asked about this via email, my response was long I decided to convert it into this blog post to see what are other people thoughts on this. 

# Forced aligners: Aeneas Vs Gentle

I played around with both Aeneas and Gentle, which are two of the more popular open source forced aligner systems out there. If you know others, please do let me know. I guess they have their pros and cons depending on what you are trying to do. But for now I am currently biased towards Aeneas. 

Altho Aeneas is not able to recognise text that is not been provided to the system, while Gentle can do that to a certain extent. 

The key difference is the underlying implementation. 

You provide text to align and audio to both. 

## Gentle

**Gentle**, could also work without the text input, and work as a speech to text service, which is how I've integrate it in [auotEdit.io](http://pietropassarelli.com/autoEdit2.html), a text based video editing app I worked on last year.

Here the details of the setup/integration between the two, unfortunately is packaged as a server so [needs to be open as a separate app](  https://pietropassarelli.gitbooks.io/autoedit2-user-manual/content/setup-stt-apis/setup-stt-apis-gentle.html), altho some people had some luck running it with docker. 

However as force aligner, gentle, first does STT, using Kaldi, and a model created by the community around this tool, and then tries to match the generated text with the text you have provided.

This is time consuming because you have to wait for the STT recognition. Which is roughly same length of the media, but on the bright side, it means it can recognise text that you did not provide. 

However, out of the box or with some more digging in the Gentle python code, you could use it to figure out which sections are "off script" and which once re not. With that distinction in place, you could then run the "off script" parts against a better quality STT system to get even better results. 



### Gentle/Kaldi system language model 

As a side note, Gentle STT model is not as great as it could be with more training etc... but of the reasons why I integrated it with autoEdit.io as an open source option is that under the hood it uses Kaldi for the language model and STT. Which is the same system used by BBC R&D for the BBC in house STT. Which has been fed media from the BBC Archive and I’ve been told give pretty good results because of the extra training.

So with a better language model Gentle could be much better as well. 

## Aeneas 

**Aeneas **on the other hand, is very fast, because the underlying implementation is different. And is also very very well documented. It was only after a read through the documentation I really understood some of the more interesting use cases, such as possibility for word level alignment, and how to improve performance by switching to a higher quality TTS.

Aeneas given the text and audio input, converts the text to audio. doing TTS and then compares the two waveforms. Which is how it figures out the timecodes etc.. Apparently this is a process that is more accurate at line level then at word level. 

If you knew which sections are "off script", with Aeneas is also possible to pass in a start and end time-code of the section you want to align. And only align a certain section. Because under the hood it uses ffmpeg. 

(btw there's also an easier bundled up way to install aeneas and it's dependencies for mac and windows https://github.com/sillsdev/aeneas-installer/releases  which is not of much use if you are running it on a linux server)

# Possible Implementation 

A possible implementation could be in **3 parts** + some optimisation tricks

- Part 1, identify what parts are "of script", 

- Part 2 align the scripted parted with original text, 

- Part 3 do a STT for "off script parts".

For part one, you can use a Gentle type of approach, and identify the sections that are "off script" and those that are not. 

With that info you can then do part two with Aeneas only on the "on script" sections, and part 3 run the "off script" sections through STT, a high quality commercial one, IBM Watson STT, Google Cloud Speech, Microsoft Bing, Speech Matics etc.. or just use the Gentle results if they are good enough for your use case

Obviously I strongly suggest converting the original media you are trying to align to audio at the beginning of the process, because it then becomes a lot faster to do all these splitting etc..

[The transcriber module in autoEdit](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/interactive_transcription_generator/transcriber ) and some of its components could be of interest for some of these operations if you are working in node.



## Optimization 1 - Speed

To speed up part one and part 3 [as you can see in the autoEdit code](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/transcriber/index.js#L130) if you chunk the audio you want to align into 5 or 1 min chunks when sending it to STT to get the transcription you can considerably speed up the process. This is how I got autoEdit to always transcribe any length o media in a 5 minute turnaround time, coz they can transcribed concurrently. If speed is not an issue tho, you could always optimised for this later.

[This optimization was originally an idea from Sam Lavigne](https://gist.github.com/antiboredom/9bed969c8b2f89ea4b6c)

## Optimization 2 - words 

If you are worried about chunking in the middle of a word, you can use ffmpeg, to detect silence, and try trim in between words as much as possible. But I'd leave that for later optimization. I think the [FT Lab transcription service had played around with that idea]  ](https://github.com/ftlabs/transcription-service) see [textAV presentation here](https://pietropassarelli.gitbooks.io/textav/remote-presentations/transcription-service-at-the-ft.html)

## Get in touch

Thoughts? Ideas? Alternatives? You have tried this? Get in touch via email, or on twitter @pietropassarell or in the Hyperaud.io slack if you are a member.

