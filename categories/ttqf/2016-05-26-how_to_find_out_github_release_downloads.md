---
layout: post
title:  "How to know your projects github releases downloads"
date:   2016-05-26 13:55:00
permalink:
description:
youtube:
image:
published: true
categories:
- ttqf
tags:
- github
---

Here’s a quick "how to" to see how many people have downloaded your project release on github.

This can only be done through the github API,but if your API hasn’t exceeded the request limit you can do it without authenticating. (chances are that if you are at work they might have already exceeded the limit, so you may want to do this from a different wifi).

I am going to use a project I worked on a while back [`https://pietropassarelli.com/alpaca_speech`](https://pietropassarelli.com/alpaca_speech) that I use everyday but I am curious to see how many people use the packaged up in the release section of github.


We are going to be making get requests with [postman](https://www.getpostman.com/), but you could use curl or whatever you prefer.

## Identify release id.

First things first get the release id

```
https://api.github.com/repos/pietrop/alpaca_speech/releases
```

This will give you a json like so

```json
[
  {
    "url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/2605107",
    "assets_url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/2605107/assets",
    "upload_url": "https://uploads.github.com/repos/pietrop/alpaca_speech/releases/2605107/assets{?name,label}",
    "html_url": "https://github.com/pietrop/alpaca_speech/releases/tag/v1.0",
    "id": 2605107,
    "tag_name": "v1.0",
    "target_commitish": "master",
    "name": "AlpacaSpeech",
    "draft": false,
    "author": {
      "login": "pietrop",
      "id": 4661975,
      "avatar_url": "https://avatars.githubusercontent.com/u/4661975?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pietrop",
      "html_url": "https://github.com/pietrop",
      "followers_url": "https://api.github.com/users/pietrop/followers",
      "following_url": "https://api.github.com/users/pietrop/following{/other_user}",
      "gists_url": "https://api.github.com/users/pietrop/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pietrop/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pietrop/subscriptions",
      "organizations_url": "https://api.github.com/users/pietrop/orgs",
      "repos_url": "https://api.github.com/users/pietrop/repos",
      "events_url": "https://api.github.com/users/pietrop/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pietrop/received_events",
      "type": "User",
      "site_admin": false
    },
    "prerelease": true,
    "created_at": "2016-01-04T22:14:20Z",
    "published_at": "2016-02-12T19:22:54Z",
    "assets": [
      {
        "url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/assets/1306014",
        "id": 1306014,
        "name": "alpacaSpeech.app.zip",
        "label": null,
        "uploader": {
          "login": "pietrop",
          "id": 4661975,
          "avatar_url": "https://avatars.githubusercontent.com/u/4661975?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/pietrop",
          "html_url": "https://github.com/pietrop",
          "followers_url": "https://api.github.com/users/pietrop/followers",
          "following_url": "https://api.github.com/users/pietrop/following{/other_user}",
          "gists_url": "https://api.github.com/users/pietrop/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/pietrop/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/pietrop/subscriptions",
          "organizations_url": "https://api.github.com/users/pietrop/orgs",
          "repos_url": "https://api.github.com/users/pietrop/repos",
          "events_url": "https://api.github.com/users/pietrop/events{/privacy}",
          "received_events_url": "https://api.github.com/users/pietrop/received_events",
          "type": "User",
          "site_admin": false
        },
        "content_type": "application/zip",
        "state": "uploaded",
        "size": 36909597,
        "download_count": 8,
        "created_at": "2016-02-12T19:17:43Z",
        "updated_at": "2016-02-12T19:18:22Z",
        "browser_download_url": "https://github.com/pietrop/alpaca_speech/releases/download/v1.0/alpacaSpeech.app.zip"
      }
    ],
    "tarball_url": "https://api.github.com/repos/pietrop/alpaca_speech/tarball/v1.0",
    "zipball_url": "https://api.github.com/repos/pietrop/alpaca_speech/zipball/v1.0",
    "body": "Working version of Alpaca speech.\r\nText to speech, using OS X default voices. \r\n\r\n### Keyboards shortcuts\r\n\r\n#### Reading shortcuts\r\n\r\n`cmd` +`e`   `Read/Stop`\r\n`cmd` +`ArrowUp`   `Increase voice speed`\r\n`cmd` +`ArrowDown`   `decrease voice speed`\r\n\r\n#### Change languages\r\n\r\n`cmd` +`1`   `English - Alex`\r\n`cmd` +`2`   `Italian - Luca`\r\n`cmd` +`3`   `Spanish - Jorge`\r\n`cmd` +`4`   `French - Thomas`\r\n\r\n\r\n\r\n#### OS X System Shortcuts\r\nadded minimise mac keyboard shortcut `cmd` + `m` and quit `cmd` + `q`.\r\nAs well as possibility to read voices available on system and populate the list with that."
  }
]
```

In this case it’s easy coz I only have one release.  But if I had more then one we could look for the version number in the tag name v1.0 and from there get the corresponding id.

 ```json
"id": 2605107,
"tag_name": "v1.0",
```

## Search release by id
we can then add that to our query


```
https://api.github.com/repos/pietrop/alpaca_speech/releases/2605107
```

which returns

```json
{
  "url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/2605107",
  "assets_url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/2605107/assets",
  "upload_url": "https://uploads.github.com/repos/pietrop/alpaca_speech/releases/2605107/assets{?name,label}",
  "html_url": "https://github.com/pietrop/alpaca_speech/releases/tag/v1.0",
  "id": 2605107,
  "tag_name": "v1.0",
  "target_commitish": "master",
  "name": "AlpacaSpeech",
  "draft": false,
  "author": {
    "login": "pietrop",
    "id": 4661975,
    "avatar_url": "https://avatars.githubusercontent.com/u/4661975?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pietrop",
    "html_url": "https://github.com/pietrop",
    "followers_url": "https://api.github.com/users/pietrop/followers",
    "following_url": "https://api.github.com/users/pietrop/following{/other_user}",
    "gists_url": "https://api.github.com/users/pietrop/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pietrop/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pietrop/subscriptions",
    "organizations_url": "https://api.github.com/users/pietrop/orgs",
    "repos_url": "https://api.github.com/users/pietrop/repos",
    "events_url": "https://api.github.com/users/pietrop/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pietrop/received_events",
    "type": "User",
    "site_admin": false
  },
  "prerelease": true,
  "created_at": "2016-01-04T22:14:20Z",
  "published_at": "2016-02-12T19:22:54Z",
  "assets": [
    {
      "url": "https://api.github.com/repos/pietrop/alpaca_speech/releases/assets/1306014",
      "id": 1306014,
      "name": "alpacaSpeech.app.zip",
      "label": null,
      "uploader": {
        "login": "pietrop",
        "id": 4661975,
        "avatar_url": "https://avatars.githubusercontent.com/u/4661975?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pietrop",
        "html_url": "https://github.com/pietrop",
        "followers_url": "https://api.github.com/users/pietrop/followers",
        "following_url": "https://api.github.com/users/pietrop/following{/other_user}",
        "gists_url": "https://api.github.com/users/pietrop/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pietrop/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pietrop/subscriptions",
        "organizations_url": "https://api.github.com/users/pietrop/orgs",
        "repos_url": "https://api.github.com/users/pietrop/repos",
        "events_url": "https://api.github.com/users/pietrop/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pietrop/received_events",
        "type": "User",
        "site_admin": false
      },
      "content_type": "application/zip",
      "state": "uploaded",
      "size": 36909597,
      "download_count": 8,
      "created_at": "2016-02-12T19:17:43Z",
      "updated_at": "2016-02-12T19:18:22Z",
      "browser_download_url": "https://github.com/pietrop/alpaca_speech/releases/download/v1.0/alpacaSpeech.app.zip"
    }
  ],
  "tarball_url": "https://api.github.com/repos/pietrop/alpaca_speech/tarball/v1.0",
  "zipball_url": "https://api.github.com/repos/pietrop/alpaca_speech/zipball/v1.0",
  "body": "Working version of Alpaca speech.\r\nText to speech, using OS X default voices. \r\n\r\n### Keyboards shortcuts\r\n\r\n#### Reading shortcuts\r\n\r\n`cmd` +`e`   `Read/Stop`\r\n`cmd` +`ArrowUp`   `Increase voice speed`\r\n`cmd` +`ArrowDown`   `decrease voice speed`\r\n\r\n#### Change languages\r\n\r\n`cmd` +`1`   `English - Alex`\r\n`cmd` +`2`   `Italian - Luca`\r\n`cmd` +`3`   `Spanish - Jorge`\r\n`cmd` +`4`   `French - Thomas`\r\n\r\n\r\n\r\n#### OS X System Shortcuts\r\nadded minimise mac keyboard shortcut `cmd` + `m` and quit `cmd` + `q`.\r\nAs well as possibility to read voices available on system and populate the list with that."
}
```

## Find download count
and what we are looking for is  `download_count`

in this case

```json
"download_count": 8,
```

Done.

Here are some more links from the [github api](https://developer.github.com/v3/) [documentation](https://developer.github.com/v3/repos/releases/#get-a-single-release)


---


You can also just use this page, [count github releases](https://pietropassarelli.com/count-github-releases/) (also on [Github](https://github.com/pietrop/count-github-releases)), I made that pulls the data from the github API based on what we learned above.