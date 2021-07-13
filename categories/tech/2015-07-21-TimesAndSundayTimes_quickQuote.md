---
layout: post
title: 'quickQuote - Times & Sunday Times'
description: 'A tool for journalists to easily find and add video quotes to news articles'
duration:
permalink: '/quickQuote.html'
date: '2015-07-21'
image: /img/TimesAndSundayTimesQuickQuote/home.png
img_hypertranscript: /img/TimesAndSundayTimesQuickQuote/hypertranscript.png
img_edit: /img/TimesAndSundayTimesQuickQuote/edit_quote.png
img_export: /img/TimesAndSundayTimesQuickQuote/export_code.png
img_export_dropdown: /img/TimesAndSundayTimesQuickQuote/export_dropdown_w3.png
img_export_preview: /img/TimesAndSundayTimesQuickQuote/export_quote_w3.png
img_preview: /img/TimesAndSundayTimesQuickQuote/preview.png
img_preview_dropdown: /img/TimesAndSundayTimesQuickQuote/preview_dropdown.png
img_search: /img/TimesAndSundayTimesQuickQuote/search.png
img_select: /img/TimesAndSundayTimesQuickQuote/select.png

img_periodismo: /img/TimesAndSundayTimesQuickQuote/ClasesdePeriodismo_quickQuote.png
img_journalism_co_uk: /img/TimesAndSundayTimesQuickQuote/journalism_co_uk_quickQuote.png
img_NiemanLab: /img/TimesAndSundayTimesQuickQuote/NiemanLab-quickQuote.png

vimeo:
youtube: 7apk4Hx7g3s
link: http://pietropassarelli.com/quickQuote/
github: pietrop/quickQuote
tech: ['Video JS', 'JQuery', 'Ruby', 'Rails', 'Spoken Data API', 'Bootstrap', 'HTML5', 'CSS', 'Git', 'Javascript']
company: 'Times & Sunday Times'
open_source: true
categories:
  - tech
tags:
---

This project was done while working as newsroom developer at the [Times & Sunday Times](https://twitter.com/TimesDevelops) as part of a summer placement for the final project of the UCL Msc in Computer Science.

<div class="image-wrapper">
  <a href="{{ page.image }}" data-lightbox="aName" title="aName">
    <img src="{{ page.image }}" alt="photo" />
  </a>
</div>

On The [Times Digital blog](https://medium.com/digital-times/it-s-time-to-rethink-how-we-do-x-in-quotes-pieces-on-the-web-1328f1ccf039) I wrote about the thinking behind the project.

In a nutshell if we take the coverage of the Republican presidential candidate debate on Fox News most news outlet merely copied the quotes verbatim and them paired them with photos of the candidates.

## A video screencast example

Here's a screencast of a demo of an alternative "interactive video quote" a journalist could embed in a news article.

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/axH_dKOpqaA" frameborder="0" allowfullscreen></iframe>
</div>

## An interactive example

And here is the quote you see in the video above embedded in this page.
Followed by the HTML, CSS and JS code.

<div class='video-quote' id='videoQuoteText-id-n'>
  <span class='glyphicon glyphicon-play-circle'></span>
  <blockquote>
     <small>►  Watch Video </small><br><br>
    A five billion dollar web site, I have so many websites, I have them all over the place. I hire people they do a web site, it costs me three dollars.
    <br><cite id='authorVideoQuote'>Donald Trump</cite>
  </blockquote></div>
  <div  id='video-wrap-n' class='video-wrap video-wrap--closed'>
    <video class=' video-js vjs-default-skin' id='video-quote' controls preload='auto' width='100%' height='auto' poster='' data-setup='{}'>
      <source src='http://pietropassarelli.com/quickQuote/media/snippet_54.mp4' id='snippetURLVideo' type='video/mp4' />
    </video>
</div>
<style>
/*styling of the video quote*/
     .video-quote  blockquote {
         background: #FAFAFC;
         border-left: 10px solid #E8E8F2;
         margin: 1.5em 10px;
         padding: 0.5em 10px;
         quotes: "\201C""\201D""\2018""\2019";
          cursor:pointer;
     }
     .video-quote  blockquote:before {
         color: #3D5266;
         content: '“';
         font-family: Times!important;
         font-size: 4em;
         line-height: 0.1em;
         margin-right: 0.25em;
         vertical-align: -0.4em;
     }
     .video-quote blockquote p {
         display: inline;
     }
     cite#authorVideoQuote {
        font-style: italic;
     }
     /*classes to show hide video element*/
     .video-wrap {
         overflow: hidden;
         height: auto;
         -webkit-transition: height 0.3s ease;
     }

     .video-wrap--closed {
         height: 0;
     }

</style>
<script>
/*script for dropdown on video*/
  document.getElementById('videoQuoteText-id-n').onclick = function() {
      if (document.getElementById('video-wrap-n').classList.contains('video-wrap--closed')) {
          document.getElementById('video-wrap-n').classList.remove('video-wrap--closed');
         document.getElementById('video-quote').play();
      } else {
          document.getElementById('video-wrap-n').classList.add('video-wrap--closed');
            document.getElementById('video-quote').pause();
      }
  };

</script>
<br>

<br>

## An in context example

See this demo [before](https://times.github.io/quickQuote/demo/static_quotes.html) and [after](https://times.github.io/quickQuote/demo/interactive_quotes.html) for an example of how it could change the way users experience quotes in an article.

## The embed code for a video quote

<br>
HTML

{% highlight html  %}

<div class='video-quote' id='videoQuoteText-id-n'>
  <span class='glyphicon glyphicon-play-circle'></span>
  <blockquote>
     <small>►  Watch Video </small><br><br>
    A five billion dollar web site, I have so many websites, I have them all over the place. I hire people they do a web site, it costs me three dollars.
    <br><cite id='authorVideoQuote'>Donald Trump</cite>
  </blockquote></div>
  <div  id='video-wrap-n' class='video-wrap video-wrap--closed'>
    <video class=' video-js vjs-default-skin' id='video-quote' controls preload='auto' width='100%' height='auto' poster='' data-setup='{}'>
      <source src='https://nuk-tnl-edtl-videoanalyser-dev.s3.amazonaws.com/videos/quotes/54/snippet_54.mp4' id='snippetURLVideo' type='video/mp4' />
    </video>
</div>
{% endhighlight %}

<br>

CSS

<br>
{% highlight css  %}
      .video-quote  blockquote {
          background: #FAFAFC;
          border-left: 10px solid #E8E8F2;
          margin: 1.5em 10px;
          padding: 0.5em 10px;
          quotes: "\201C""\201D""\2018""\2019";
           cursor:pointer;
      }
      .video-quote  blockquote:before {
          color: #3D5266;
          content: '“';
          font-family: Times!important;
          font-size: 4em;
          line-height: 0.1em;
          margin-right: 0.25em;
          vertical-align: -0.4em;
      }
      .video-quote blockquote p {
          display: inline;
      }
      cite#authorVideoQuote {
         font-style: italic;
      }
      .video-wrap {
          overflow: hidden;
          height: auto;
          -webkit-transition: height 0.3s ease;
      }

      .video-wrap--closed {
          height: 0;
      }

{% endhighlight %}

JS

{% highlight js %}

document.getElementById('videoQuoteText-id-n').onclick = function() {
if (document.getElementById('video-wrap-n').classList.contains('video-wrap--closed')) {
document.getElementById('video-wrap-n').classList.remove('video-wrap--closed');
document.getElementById('video-quote').play();
} else {
document.getElementById('video-wrap-n').classList.add('video-wrap--closed');
document.getElementById('video-quote').pause();
}
};
{% endhighlight %}

<hr>

In the following video you can see how a user can, once a video as been uploaded an processed by the speech to text API, search through the text, select a quote, edit it, preview and export it.

<br>
<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/7apk4Hx7g3s" frameborder="0" allowfullscreen></iframe>
</div>

## Project Links

The code for an interactive video quote is not particularly complex.

But what is interesting in the quickQuote project is how we programmatically generate this embed code once a journalist has made a quote selection.

For more details on this check out the [project page]({{page.link}}), [the github repository](https://github.com/times/quickQuote), [user manual](https://times.github.io/quickQuote/userManual.html) and [documentation](https://www.rubydoc.info/github/times/quickQuote/master).

Or checkout the [the report I wrote for UCL](https://leanpub.com/quickquote), which details investigation into the problem domain, similar open source projects, as well as application design and architecture.

## The main features in Screenshots

Two way sync between video and corresponding transcription

<div class="image-wrapper">
	<a href="{{ page.img_hypertranscript }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_hypertranscript }}" alt="photo" />
	</a>
</div>

Search transcription for keywords

<div class="image-wrapper">
	<a href="{{ page.img_search }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_search }}" alt="photo" />
	</a>
</div>

Select text grabs in and out point of corresponding video

<div class="image-wrapper">
	<a href="{{ page.img_select }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_select }}" alt="photo" />
	</a>
</div>

Edit automatically generated transcription from speech to text API _if it's not 100% accurate_

<div class="image-wrapper">
	<a href="{{ page.img_edit }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_edit }}" alt="photo" />
	</a>
</div>

See a preview of the video quote

<div class="image-wrapper">
	<a href="{{ page.img_preview }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_preview }}" alt="photo" />
	</a>
</div>

With dropdown

<div class="image-wrapper">
	<a href="{{ page.img_preview_dropdown }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_preview_dropdown }}" alt="photo" />
	</a>
</div>

Export HTML, CSS, JS code to embed in news article.

<div class="image-wrapper">
	<a href="{{ page.img_export }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_export }}" alt="photo" />
	</a>
</div>

And here is [a preview of the embed code using JS Fiddle](https://jsfiddle.net/pietrops/yazkqg2s/)

<div class="image-wrapper">
	<a href="{{ page.img_export_preview }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_export_preview }}" alt="photo" />
	</a>
</div>

<div class="image-wrapper">
	<a href="{{ page.img_export_dropdown }}" data-lightbox="aName" title="aName">
		<img src="{{ page.img_export_dropdown }}" alt="photo" />
	</a>
</div>

# On Social Media

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">This. Changes. Everything. “<a href="https://twitter.com/NiemanLab">@NiemanLab</a>: new tool fromTimes of London lets you detect and capture quotes from a video <a href="https://t.co/v7ZGPcXCkl">https://t.co/v7ZGPcXCkl</a>”</p>&mdash; Paul Adams (@padams29) <a href="https://twitter.com/padams29/status/643133038327521281">September 13, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Sometimes a new digital news tool comes along &amp; reminds us how far we are from doing it right <a href="https://t.co/xqiioyAVET">https://t.co/xqiioyAVET</a> <a href="https://t.co/T2vyi8G0W6">pic.twitter.com/T2vyi8G0W6</a></p>&mdash; Greg Emerson (@emersongreg) <a href="https://twitter.com/emersongreg/status/643388636063469568">September 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">A new tool from The Times of London lets you easily detect and capture quotes from a video <a href="https://t.co/r6pGJzKycx">https://t.co/r6pGJzKycx</a></p>&mdash; Nieman Lab (@NiemanLab) <a href="https://twitter.com/NiemanLab/status/643132545593311232">September 13, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<hr>

# Press Mentions

<div class="image-wrapper">
    <img src="{{ page.img_NiemanLab }}" alt="{{ page.img_NiemanLab }}" />
</div>

<hr>

<div class="image-wrapper">
    <img src="{{ page.img_journalism_co_uk }}" alt="{{ page.img_journalism_co_uk }}" />
</div>

<hr>

<div class="image-wrapper">
    <img src="{{ page.img_periodismo }}" alt="{{ page.img_periodismo }}" />
</div>
