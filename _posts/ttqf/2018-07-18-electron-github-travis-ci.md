---
layout: post
title: "Electron github travis CI & linux"
date: 2018-07-18 14:15:00
permalink: "/electron-github-travis-ci.html"
description: "How to setup github for your electron project to have a linux Continuos integration build"
youtube: 
image: 
categories: 
- ttqf
- blog
tags:
- electon
---


Thanks to [@probonopd PR](https://github.com/OpenNewsLabs/autoEdit_2/pull/45) autoEdit 2 can compile the application on [Travis CI](https://travis-ci.org/) upon each git push, and upload an AppImage to the GitHub Releases page.

This is an attempt to capture some notes on the steps of setting up travis CI integration. 


## What is an AppImage 

AppImages can be downloaded and run without installation or the need for root rights.

### Making it executable
You can make the appImage executable as follows:

`chmod a+x` exampleName.AppImage

Or [see also how to make an AppImage executable for easier users instructions using GUI](https://discourse.appimage.org/t/how-to-make-an-appimage-executable/80)


### Executing it
You can execute an appImage as follows:

`./exampleName.AppImage`



### AppImage advantages

Providing an [AppImage](http://appimage.org/) would have, among others, these advantages:
- Applications packaged as an AppImage can run on many distributions (including Ubuntu, Fedora, openSUSE, CentOS, elementaryOS, Linux Mint, and others)
- One app = one file = super simple for users: just download one AppImage file, [make it executable](http://discourse.appimage.org/t/how-to-make-an-appimage-executable/80), and run
- No unpacking or installation necessary
- No root needed
- No system libraries changed
- Works out of the box, no installation of runtimes needed
- Optional desktop integration with `appimaged`
- Optional binary delta updates, e.g., for continuous builds (only download the binary diff) using AppImageUpdate
- Can optionally GPG2-sign your AppImages (inside the file)
- Works on Live ISOs
- Can use the same AppImages when dual-booting multiple distributions
- Can be listed in the [AppImageHub](https://appimage.github.io/apps) central directory of available AppImages
- Can double as a self-extracting compressed archive with the `--appimage-extract` parameter

[Here is an overview](https://appimage.github.io/apps) of projects that are already distributing upstream-provided, official AppImages.

If you have questions, AppImage developers are on #AppImage on irc.freenode.net.


## github + Travis CI

###  Travis CI Integration
1 - enable Travis CI for your repository as [described here](https://travis-ci.org/getting_started) 

2 - Set up `GITHUB_TOKEN` in Travis CI for this to work. as [described here](https://github.com/probonopd/uploadtool#usage)

(Direct link to [Github token here](https://github.com/settings/tokens))

#### Add a `.travis.yml` file to your repository

See [exampe in README of `probonopd/uploadtool`](https://github.com/probonopd/uploadtool#usage) as well as example below from [autoEdit `.travis.yml`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/.travis.yml) or from [subtitlesComposer-app `.travis.yml`](https://github.com/pietrop/subtitlesComposer-app/blob/master/.travis.yml).


#### `package.json` 

To add linux see example 
- [autoEdit `package.json`](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/package.json)
- [subtitlesComposer-app `package.json`](https://github.com/pietrop/subtitlesComposer-app/blob/master/package.json)

<!-- CircleCI for Mac and Windows deployment -->