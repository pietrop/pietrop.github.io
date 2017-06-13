---
layout: post
title: "Some title"
image: /img
date: '2016-07-18T01:30:00.000+01:00'
description:
published: false
permalink:
categories:
- blog
tags:
---

# Towards defining an hyper-transcript specification?
<!-- Interactive transcript  -->


API json 

not to bothered by the names of the attributes at this point, but rather by what info to have in it.

comparison of existing transcriptions

- srt to json
with file size for one hour

- IBM
with file size for one hour

- Gentle
with file size for one hour

- Spoken data XML -> to Json
with file size for one hour

- Google?

- Hyperaudio/trint

- my spec defined in autoEdit sails notes

- Others to keep in mind
BBC Video compositor JSON


## basic - array

most basic is an array of words with the time in seconds or milliseconds?

[{in: 00, out: 00, text: "some text"}, …]


## Lines?
if you wanted to account for lines, you could have a nested array of words. to group words together into lines.

[
[{in: 00, out: 00, text: "some text"}, …]
[..]
…
]


## Object?

In previous suggestion if we want to get all the text at once, we have to loop through the
whole of the data structure. This is not time consuming if done programmatically.
But there’s an argument for having an object with a transcription attribute in plain text

{transcription: "some text…",
words:[
…
]
}

however this might increase the size of the file for long transcriptions (? as seen in previous examples)



## Tag agnostic
?
