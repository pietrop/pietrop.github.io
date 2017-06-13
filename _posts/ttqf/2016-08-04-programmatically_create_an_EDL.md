---
layout: post
title:  "programmatic EDL"
date:   2015-05-17 14:15:00
permalink: "/regex.html"
description:  "What do you need to know about EDL to be able to work with it programmatically?"
youtube: 
published: false
image: 
categories: 
- ttqf
tags:
- EDL
---


## What is an EDL?

>In the days of linear tape editing, EDLs were used to save and restore the timecode information for each edit performed on a computer-controlled editing system. Because timecode editing systems were expensive, many editors would perform offline edits with window dubs (low-quality copies of original footage with timecode visually superimposed, or burned, directly onto the image) and then create an EDL by hand for delivery to a computer-controlled editing system for the online edit.[ ... ] If you need to move a project to or from a different system or editing workstation, you can export your project to an interchange file format such as EDL or Final Cut Pro XML Interchange Format.

From [Apple documentation](https://documentation.apple.com/en/finalcutpro/usermanual/index.html#chapter=96%26section=1%26tasks=true) 


## Example 

```edl
TITLE: Jesselyn Radack
FCM: NON-DROP FRAME

001   time  AA/V  C  00:03:11:11 00:03:22:24 00:00:00:00 00:00:11:13
* FROM CLIP NAME: JR cam B transcription.mp4
FINAL CUT PRO REEL: time REPLACED BY: time

002   time  AA/V  C  00:04:40:24 00:04:46:23 00:00:11:13 00:00:17:11
* FROM CLIP NAME: JR cam B transcription.mp4
FINAL CUT PRO REEL: time REPLACED BY: time
```


<!--Explanation of EDL parts   -->

So we have a head, wich is title and Drop frame informations for NTSC sequences, then a body which is composed of lines that describe each video segment. Which in EDL terminaology are called events. 


<!-- >The first line of an EDL contains the title of the sequence. In NTSC sequences, the second line displays whether the sequence timecode is drop frame or non-drop frame.
 -->

### an event

>In an EDL, each clip in your sequence is represented by a line of text called an event, which has a unique event number. A clip in an EDL is defined by a source reel name and two pairs of timecode In and Out points. The first pair of timecode numbers describes the source tape (or clip) In and Out points. The second pair describes the timecode location where that clip should be placed onto a master tape (or Timeline).




```edl
Edit# Reel Name  Channel Trans     Source IN        Source OUT          Record IN         Record OUT

001   time        AA/V    C       0:03:11:11        00:03:22:24         00:00:00:00       00:00:11:13
```

### Track Type
>Each edit uses one or more tracks in the sequence. In the case of tape-to-tape editing, this field determines which tracks are turned on on the record deck during this event.

>V: Video
A: Audio (Some EDL formats label this 1 or 2.)
A2: Audio 2
AA: Both channels of audio

### Edit (or Transition) Type

An EDL can represent several kinds of video edits, or transitions. A cut requires a single source, while all other types of edits require two sources, and thus two lines in an EDL.

- `C`: Cut. This is the simplest kind of edit.
- `D`: Dissolve. This transition begins with one source and dissolves to a second source.
- `W`: A wipe. This is followed by a wipe code that indicates the type of standard wipe.
- `K`: A key edit. Clips on Video track 2 can be used as the foreground (fill) layer in a standard video key.
- `A` dissolve from a Final Cut Pro sequence is shown below in EDL format.



```edl
* FROM CLIP NAME: JR cam B transcription.mp4
```

The reel name is shorten to 7 char if it exceeds that limit, and the original reel name is kept track in this field. 

>A reel name describes which source tape (or reel) the clip comes from. Final Cut Pro assumes that clips without reel names come from non-tape sources, such as color bars, black, or other generators. Final Cut Pro automatically designates these auxiliary sources with the reel name AX.



```edl
FINAL CUT PRO REEL: time REPLACED BY: time
```

For a basic EDL composer this could be represented as the following object

```javascript
var edlSqDemo = {
    "title": "Demo Title of project",
    "offset": "00:00:28:08",//optional
    "events":  [
      { "id":1,
        "startTime": 10, // in deconds 
        "endTime": 20,
        "reelName":"SomeReelName", //optional
        "clipName":"Something.mov"
      },
      { "id":2,
        "startTime": 45,
        "endTime": 55,
        "reelName":"SomeOtherReelName", //optional 
        "clipName":"SomethingElse.mov"
      }
    ]
}
```

`offset` if not present, then the composer it defaults to zero. This is essentially for footage filmed from camcorders,where the footage has a timecode set by the camera such as "free run", "rec run", "time of the day" etc.. and therfore different to the one you'd get by start counting form beginning of the video file.

We need to add this otherwise we'd get a missmatch when reconnecting.

<!-- add tooltip explaoining each -->

This assumes that `C` and `AA/V` don't change. but this could be added to out EDL object, and added to the mix at a later stage should a use case arise.


More on EDL specs in [Apple documentation](https://documentation.apple.com/en/finalcutpro/usermanual/index.html#chapter=96%26section=1%26tasks=true) and [here](http://edlmax.com/MAXGUIDE.HTML)



## Optional `ReelName`
If the video/audio file does not come directly from a comcorder the reel name might not be present, in that case it should be replaced with `AX`.

```edl
001  AX       V     C        01:00:00:00 01:00:05:00 00:00:00:00 00:00:05:00
* FROM CLIP NAME: Title 01
``` 

- no `reel` name 
- `AX`
- only V channel 
- normal cut `C`
- need to decide on duration to make in and out of source. in will always be `00:00:00:00` 
