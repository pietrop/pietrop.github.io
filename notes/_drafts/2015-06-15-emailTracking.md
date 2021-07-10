---
layout: post
title: Identify email Tracking
date: '2015-04-15T13:21:00.001Z'
author: Pietro Passarelli
description: How to tell if an e-mail you received is being tracked by the sender.
image: img/emailTracking/rawEmailExample.png
image2: img/emailTracking/rawSource.png
tags:
- email
modified_time:
thumbnail: 
category: 
- articles
---




There are servises like side-kick that let's user track whether the e-mail they send gets read, and 


<div class="image-wrapper">
    <img src="{{site.url}}/{{ page.image }}" alt="{{ include.description }}" />
</div>


<!-- Scramble this example -->

{% highlight html %}
Return-Path: <pietro.passarelli@gmail.com>
Received: from [10.111.95.117] (nat-161-186.internal.eduroam.ucl.ac.uk. [144.82.161.186])
        by mx.google.com with ESMTPSA id m4sm6216814wjb.25.2015.04.15.07.26.44
        for <calamma@gmail.com>
        (version=TLSv1 cipher=ECDHE-RSA-RC4-SHA bits=128/128);
        Wed, 15 Apr 2015 07:26:44 -0700 (PDT)
Sender: Pietro Passarelli <calamma@gmail.com>
From: Pietro Passarelli <pietro.passarelli@gmail.com>
Content-Type: multipart/alternative; boundary="Apple-Mail=_BB36EEB7-B49C-423D-8B82-909861FA3C70"
Subject: sideckick
Message-Id: <5CAC331A-9385-4B48-82FC-1C46F8E40676@gmail.com>
Date: Wed, 15 Apr 2015 15:26:43 +0100
To: Pietro Passarelli <calamma@gmail.com>
Mime-Version: 1.0 (Mac OS X Mail 8.2 \(2070.6\))
X-Mailer: Apple Mail (2.2070.6)


--Apple-Mail=_BB36EEB7-B49C-423D-8B82-909861FA3C70
Content-Transfer-Encoding: 7bit
Content-Type: text/plain;
	charset=us-ascii

sideckick
--Apple-Mail=_BB36EEB7-B49C-423D-8B82-909861FA3C70
Content-Transfer-Encoding: 7bit
Content-Type: text/html;
	charset=us-ascii

<html><head></head><body>sideckick
<img src="https://t.signauxdeux.com/e1t/o/5/f18dQhb0S1Ll8dDMPbW2n0x6l2B9gXrW7sKj5C56dQtgf3ZlND602?si=5367527633846272&pi=B8BAF4AC-C385-4675-ACC2-C41C56C660BE" width="1" height="1" style="display:none!important"></body></html>
--Apple-Mail=_BB36EEB7-B49C-423D-8B82-909861FA3C70--

{% endhighlight %}


The relevant code is this: 

{% highlight html %}
<img src="https://t.signauxdeux.com/e1t/o/5/f18dQhb0S1Ll8dDMPbW2n0x6l2B9gXrW7sKj5C56dQtgf3ZlND602?si=5367527633846272&pi=B8BAF4AC-C385-4675-ACC2-C41C56C660BE" width="1" height="1" style="display:none!important">
{% endhighlight %}

Where an image is beeing linked to an external address, but the CSS style has been set to `style="display:none!important"`, so that it does not display on the page.


in OS X mail, you can see if an e-mail you received contains this code, by goign to `view`->`message`->`raw source` and this will show you the HTML.

<div class="image-wrapper">
    <img src="{{site.url}}/{{ page.image2 }}" alt="{{ include.description }}" />
</div>

or `alt` + `cmd` +`u` shortcut.

