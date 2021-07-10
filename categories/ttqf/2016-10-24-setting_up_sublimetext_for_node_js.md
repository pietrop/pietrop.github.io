---
layout: post
title:  "Sublime text 2 setup for Node/javascript"
date:   2015-05-17 14:15:00
permalink: "/sublime-text.html"
description:  "How to best setup sublime text to work with Node/Javascript"
youtube: 
published: false
image: 
categories: 
- ttqf
tags:
- Node
---


## Sublime text 2 setup for javascript 
<!-- //add to TTQF + add gifs for each of these -->
<!-- + link to this in learn node/leanr to code blog post
 -->

I am using sublime text 2 because 3 is still in beta.


### [JSFormat](https://github.com/jdc0589/JsFormat)

Auto formats javascript code 

`ctrl`+`alt`+`f`.

### JSHint 
https://github.com/victorporof/Sublime-JSHint 
can configure it so that on save and on load, flags things to change in js code visually

cmd + shift + j  gives the list of issues with line numbers 
cmd + esc hides annotation


### Build tool
add Node build to sublime text 2
new build option under tools

```json
{
    "cmd": ["/usr/local/bin/node","$file"]
}
```

### Javascript next - better syntax hilight for js 

https://githubcom/Benvie/JavaScriptNext.tmLanguage 

### [DocBlockr](https://packagecontrol.io/packages/DocBlockr)

>Adding comments to your code can be a real pain sometimes. I don’t know many people who claim to enjoy it, but it’s absolutely essential. DocBlockr helps ease some of that pain by making commenting simple. After installing DocBlockr, all you need to do is start a line out with /* or /** and it does the rest for you. If you start with /** above a function, it will even generate comments for you based on the JSDoc format. DocBlockr is one of those things that if you’ve never used anything similar before, you’ll wonder how you ever lived without it.

DocBlockr also supports many other languages, including: CoffeeScript, TypeScript, PHP, ActionScript, Haxe, Java, Apex, Groovy, Objective C, C, C++, and Rust.



add comments type `/**` above a functio hit enter and will ad param and return place holders 



### auto completion 

https://sublimecodeintel.github.io/SublimeCodeIntel/\

    For Mac OS X:
      * Jump to definition = ``Control+Click``
      * Jump to definition = ``Control+Command+Alt+Up``
      * Go back = ``Control+Command+Alt+Left``
      * Manual CodeIntel = ``Control+Shift+space``
