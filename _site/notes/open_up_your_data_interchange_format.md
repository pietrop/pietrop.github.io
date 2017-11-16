Draft

Blog post - stop being precious about what your product makes! And Give the users acess to it.


I've had this idea for a while that when you write some software is similar to when you make a movie. You make an implicit "contract" with the viewers. In the case of a movie, they implicitly agree to suspend their disbelief and in return, you, the author implicitly agree to reveal some kind of truth thought the telling of a story to them that you think might had not been apparent otherwise.


In a software system, the users generally trusts you with some data so that you, the programmer, through the software you write,  can do something with it 

There’s this concept in computer science of "data interchange format". 

it’s the idea that you can have come kind of data structure (such as a json or an xml) that represents some data. 

This can be used to pass data in between things, functions, methods, and even applications.
 
An important separation between form and contant [XML anthrop web 2.0 youtube]


example of json 

example of xml. 


Rather then complain about frustrating times I had with applicaitons that are not doing this right, *coughs - final cut X*, here’s an of I am trying my best to address this.


in the making of TBVE app, 
[what the app does: give it a video, transcription is generated using STT API, user can edit text of transcriptions to edit video]

Given the user’s initial content, a video, the app needs an internal representaiton of the  transcription in some data interchange format(eg a json in this case). it also needs to convert the video in HTML5 webm video for showing a preview on the fly. and an audio file to send it to the STT api for conversion. 

I could have chosen to hide these form the users, you see the video, but you cannot export it, and even more so with the json, you have no access to it. But what if I allow the user to export these instead? and watch what happes? and what/if any interesting use cases come out of that? 

Granted that only advanced user would be able to do things with the json. But the webm and the audio file, could be of some use to anyome (a smaller video to share with people collaborating on the project? an audio to listen on your phone on the way to work? etc..)


these are side product to my app, the main export button is an EDL. and is part of a workflow for using the app for video editing. 

But I don’t have anything to lose by allowing people to get they data in and out of the app at any stage. 

next step to achieve this, would be allow them to import a project/transcription by adding the json/webm video/and audio as a mid flow input entry point.
