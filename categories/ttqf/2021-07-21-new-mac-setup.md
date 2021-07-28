---
layout: post
title: "New Mac Setup "
description: "Setting up a new mac is hopefully a once in a blue moon activity. However when it does happen is hard to remember what's the minimum you need to get started. So here's my latest list."
# permalink: "/test.html"
date: "2021-07-21"
link: 
image: /img/new-mac-setup/wesson-wang-y0_vFxOHayg-unsplash.jpeg
image2: /img/
# github: pietrop/
# youtube: 
published: true
# open_source: true
# tech: ['node']
# company: ''
categories:
- ttqf
tags:
---

<!-- <dl>
  <dt><strong>Lower cost</strong></dt>
  <dd>The new version of this product costs significantly less than the previous one!</dd>
  <dt><strong>Easier to use</strong></dt>
  <dd>We've changed the product so that it's much easier to use!</dd>
  <dt><strong>Safe for kids</strong></dt>
  <dd>You can leave your kids alone in a room with this product and they
      won't get hurt (not a guarantee).</dd>
</dl> -->

<!-- <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> -->


## Mac apps


- [1Password](https://1password.com/) (`$$`)
- [appcleaner](https://freemacsoft.net/appcleaner/) 
- [spectacle app](https://www.spectacleapp.com/)
- [LICEcap](https://www.cockos.com/licecap/)<!-- - [Kap](https://getkap.co/) -->
- Change text edit, to be plain text only, [see instructions, How to Use TextEdit Plain Text Mode by Default in Mac OS X](https://www.alphr.com/textedit-plain-text-mode/) _optional_
-  [Alpaca speech (TTS)](https://github.com/pietrop/alpaca_speech/releases)
   -  Download 'Alex' TTS voice from Mac preferences
-  Set custom screenshot auto save folder. 
   -  `⌘`+ `shift`+ `5` --> `options` --> `save to`. 
   -  [more info](https://support.apple.com/en-gb/guide/mac-help/mh26782/mac#:~:text=Press%20Shift%2DCommand%2D3.&text=Press%20Shift%2DCommand%2D4%2C,the%20mouse%20or%20trackpad%20button.)
-  [dropbox](http://dropbox.com/) (`$$`)

## Browsers
- [Brave](https://brave.com/)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Chrome extensions
-  [Picture-in-Picture Extension (by Google)](https://chrome.google.com/webstore/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg?hl=en)
- [Wayback Machine](https://chrome.google.com/webstore/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak?hl=en-US)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en)
- [Google Translate](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en)
- [1Password – Password Manager](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [`get-youtube-text`](https://github.com/pietrop/get-youtube-text)

## Messaging

- [slack](https://slack.com/downloads/mac)
  - [slack.com/signin/find](https://slack.com/signin/find)
- [signal](https://signal.org/download/macos/)
- [skype](https://www.skype.com/en/get-skype/)
- [Zoom](https://zoom.us/download)
- [keybase](https://keybase.io/) - _optional_

## Dev
- [Visual studio code](https://code.visualstudio.com/)
- [Visual Studio Code on macOS](https://code.visualstudio.com/docs/setup/mac)
- [adding prettier linting to your project](https://gist.github.com/pietrop/c3ae649b5881bde4931593a06e28a52e)
 - [insomnia](https://insomnia.rest/)


<details>
    <summary>See your current branch in the terminal prompt</summary>
  
Git config to see current branch in terminal

Add this to your `.bash-profile`:
```bash
# See your git current branch in the bash prompt
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
 
export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```


</details>


## Dev - Chrome extensions
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
- xcode command-line utility (for github) 
  - in terminal `xcode-select --install`
- [Homebrew ](https://brew.sh) 
  - in terminal `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
  - [`node`](https://nodejs.org/en/)
  - [`npm login`](https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line#logging-in-with-your-default-registry-set-to-your-companys-npm-enterprise-registry) in your terminal
- [Git](https://git-scm.com/download/mac)
  - In terminal `brew install git`



## Visual code extensions
- [Pretty Formatter](https://marketplace.visualstudio.com/items?itemName=mblode.pretty-formatter)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Word Count](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount)

## Other media Mac apps

- [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) 
- [Adobe Bridge](https://www.adobe.com/products/bridge.html) 
- [electron-video-downloader](https://github.com/pietrop/electron-video-downloader/releases) - [info](https://pietropassarelli.com/categories/tech/2017-06-08-electron-video-downloader/)
