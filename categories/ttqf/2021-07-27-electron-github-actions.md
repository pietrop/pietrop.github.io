---
layout: post
title: "Electron + Github Actions"
description: "Building and deploying Electron, for Mac, Windows and Linux, to github releases using github actions"
# permalink: "/test.html"
date: "2021-07-27"
link: 
image: /img/electron-github-actions/ankush-minda-TLBplYQvqn0-unsplash.jpeg
image2: /img/
github: pietrop/
youtube: 
published: true
open_source: true
tech: ['yaml', 'git','github']
# company: ''
categories:
- ttqf
tags:
---

<small><i>cover photo credit [unsplash](https://unsplash.com/photos/TLBplYQvqn0) </i></small>

<!-- 
<div class="image-wrapper">
    <img src="{{ image2 }}" alt="{{ description }}" />
</div> -->


<!-- 0000-mm-dd-title.md -->

Create folder and file `.github/workflows/build.yml`


<details>
  <summary>see full <code>build.yml</code></summary>


```yaml
name: Build Electron Releases 
on:
  push:
    branches:
      - master # TODO: you can tweak this to run only a specific branch of your choosing
jobs:
  # Mac version M1 arm64 + older
  build_on_mac:
    runs-on: macOS-latest
    steps:
    - uses: actions/checkout@master
      with:
        ref: master # TODO: you can tweak this to run only a specific branch of your choosing
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: Install dependencies
      run: npm install
    - name: Build Electron
      env:
        ELECTRON: true
        PUBLISH_FOR_PULL_REQUEST: false
        ELECTRON_CACHE: $HOME/.cache/electron
        ELECTRON_BUILDER_CACHE: $HOME/.cache/electron-builder
        USE_HARD_LINKS: false
        YARN_GPG: no
        GITHUB_TOKEN: ${{ secrets.github_token }}
      run: npm run build:m:publish:always # your npm script in package.json to run electron builder for mac
    - name: see directory
      run: ls ./dist
  # Linux version
  build_on_linux:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
      with:
        ref: master # TODO: you can tweak this to run only a specific branch of your choosing
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: Install dependencies
      run: npm install
    - name: Build Electron
      env:
        ELECTRON: true
        PUBLISH_FOR_PULL_REQUEST: false
        ELECTRON_CACHE: $HOME/.cache/electron
        ELECTRON_BUILDER_CACHE: $HOME/.cache/electron-builder
        USE_HARD_LINKS: false
        YARN_GPG: no
        GITHUB_TOKEN: ${{ secrets.github_token }}
      run: npm run build:l:publish:always # your npm script in package.json to run electron builder for linux
    - name: see directory
      run: ls ./dist
  # Windows version
  build_on_win:
    runs-on: windows-2016
    steps:
    - uses: actions/checkout@master
      with:
        ref:  master # TODO: you can tweak this to run only a specific branch of your choosing  
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: Install dependencies
      run: npm install
    - name: Build Electron on Windows
      env:
        ELECTRON: true
        PUBLISH_FOR_PULL_REQUEST: false
        ELECTRON_CACHE: $HOME/.cache/electron
        ELECTRON_BUILDER_CACHE: $HOME/.cache/electron-builder
        USE_HARD_LINKS: false
        YARN_GPG: no
        GITHUB_TOKEN: ${{ secrets.github_token }}
      run: npm run build:w:publish:always # your npm script in package.json to run electron builder for windows
    - name: see directory
      run: ls .\dist\squirrel-windows
```

</details>

We run 3 jobs, on
-  Mac (latest M1 vm)
-  Windows(2016) and
-   Linux (Ubuntu)

In each we 
- clone the repo
- add nodeJs
- install dependencies 
- Use `electron-builder` to build, upload and publish to github releases


You should also make sure your `package.json` has the right info for all 3 OS.

<details>
  <summary>see example <code>package.json</code></summary>

```json
{
  "name": "digital-paper-edit-electron",
  "productName": "autoEdit 3", // TODO: set for your app
  "version": "1.6.2-alpha.22", // TODO: set for your app
  "description": "Digital Paper Edit app",// TODO: set for your app
  "main": "src/electron-main.js", // TODO: set for your app
  "scripts": {
    ...
    "build:l:publish:always": "electron-builder -l --publish always",
    "build:m:publish:always": "electron-builder -m  --x64 --arm64 --publish always",
    "build:w:publish:always": "electron-builder -w --x64 --ia32 --publish always",
  },
  "license": "MIT", // TODO: set for your app
  "author": "Pietro Passarelli CC0 2019", // TODO: set for your app
  "contributors": [
    ""
  ],
  "bugs": {
    "url": "https://github.com/pietrop/digital-paper-edit-electron/issues" // TODO: set for your app
  },
  "homepage": "https://github.com/pietrop/digital-paper-edit-electron", // TODO: set for your app
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pietrop/digital-paper-edit-electron.git" // TODO: set for your app
  },
  "build": {
    "publish": {
      "provider": "github",
      "releaseType": "prerelease",
      "vPrefixedTagName": false,
      "owner": "pietrop", // TODO: set for your app
      "repo": "digital-paper-edit-electron" // TODO: set for your app
    },
    "appId": "org.dpe.dpe-electron", // TODO: set for your app
    "artifactName": "${productName}-${version}-${arch}.${ext}",
    "asar": false,
    "directories": {
      "buildResources": "assets"
    },
    "files": [ // TODO: This might not be needed depending on your config
      "**/*",
      "build/**",
      "!config/",
      "!assets/",
      "!spec/",
      "!project_page/",
      "!vendor/",
      "!docs/",
      "!dist/",
      "!icons/",
      "node_modules/**/*"
    ],
    "copyright": "Pietro Passarelli CC0 2020", // TODO: set for your app
    "mac": {
      "category": "public.app-category.productivity",// TODO: set category for your app
      "target": [
        {
          "target": "dmg",
          "arch": [
            "x64",
            "arm64"
          ]
        }
      ]
    },
    "dmg": { // TODO: This might not be needed depending on your config
      "background": "assets/background.png", // TODO: it assumes you have a background image for your dmg
      "icon": "assets/icon.icns", // TODO: it assumes you have an icon image for your dmg
      "iconSize": 128,
      "contents": [
        {
          "x": 448,
          "y": 340,
          "type": "link",
          "path": "/Applications"
        },
        {
          "x": 192,
          "y": 340,
          "type": "file"
        }
      ]
    },
    "win": {
      "artifactName": "${productName}-${version}-${arch}.${ext}",
      "target": [
        {
          "target": "portable",
          "arch": [
            "x64",
            "arm64",
            "ia32"
          ]
        }
      ],
      "icon": "build/icon.ico",
    },
    "deb": {
      "synopsis": "Digital Paper Edit Desktop App"  // TODO: set synopsis for your app
    },
    "linux": {
      "category": "",
      "packageCategory": "GNOME;GTK;VideoEditing;PaperEditing;Transcriptions",  // TODO: set packageCategory for your app
      "description": "Digital Paper Edit Desktop App", // TODO: description for your app
      "target": [
        "AppImage"
      ],
      "maintainer": "Pietro Passarelli",
    }
  },
  "devDependencies": {
    ...
    "electron": "^12.0.0",
    "electron-builder": "^22.11.7",
    ...
  }
}

```


</details>


[If you need to package ffmpeg with your app see this separate post](/ffmpeg-electron.html)

## Resources
- [github actions ENVs](https://docs.github.com/en/actions/reference/environment-variables)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/enterprise-server@3.0/actions/reference/workflow-syntax-for-github-actions)

## Alternatives 
- [azu/electron.yml](https://gist.github.com/azu/673426500458f63f019c8f5e013f282a)$$
- [Electron Builder Action](https://github.com/marketplace/actions/electron-builder-action)