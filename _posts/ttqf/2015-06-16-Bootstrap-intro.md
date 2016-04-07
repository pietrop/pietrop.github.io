---
layout: post
title:  "Bootstrap - Intro"
date:   2015-06-16 22:55:00
permalink: "/bootstrap-intro.html"
description:  "Up and running with bootstrap"
youtube:
image: /img/bootstrap-intro/bootstrap-intro-samplePage2.png
bootstrap1: /img/bootstrap-intro/bootstrap-intro-samplePage1.png
bootstrap1-hilight: /img/bootstrap-intro/bootstrap-intro-hilight.png
bootstrap2: /img/bootstrap-intro/bootstrap-intro-samplePage2.png
published: false
categories:
- articles
tags:
- bootstrap
---

Perhaps you want to do a website, you might have heard of [mobile first]() and make a [website responsive]() so that when you view your site on your phone it displays resized in a suitable way rather then like this.

![]()

So here's just a quick up and running with Bootstrap post.

I'm assuming no prior knowledge, so here's a quick overview of what you need to know to get up and running.

### HTML

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Heading 1 </h1>
<p>and a paragraph.</p>

</body>
</html>
```

and this would render as

<hr style="background-color: black; height: 10px;">
<h1>Heading 1 </h1>
<p>and a paragraph.</p>
<hr style="background-color: black; height: 10px;">

For more see [w3schools](http://www.w3schools.com/html/)

### What's CSS?

Cascading Style Sheets, lets you select elements of the HTML page, such as the heading `h1` and apply a style to it.
It's the basis for separation of form and content.

The code blow changes the heading to be blue and aligns it to the centre.

```css
<style>
h1 {
    color: blue;
    text-align: center;
}
</style>
```

which combined with the previous code would render as:
<hr style=" background-color: black; height: 10px;">
<h1 style="color:blue;text-align: center;">Heading 1 </h1>
<p>and a paragraph.</p>
<hr style=" background-color: black; height: 10px;">

For more see [w3schools](http://www.w3schools.com/css/)

There are three ways to use CSS, inline, using `<style>` tag in the html page or referencing a separate file.
see more about this at [w3schools](http://www.w3schools.com/css/css_howto.asp).


### A non-responsive Page resized

![A non responsive pageresized]()

### A Responsive Page Resized

![A responsive page resized]()


### What is bootstrap?
[Twitter Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) is a an opensource framework to make web pages responsives.
It works by adding a reference  `<link>` to css and javascript `<script>` tag to link to the bootstrap code library.
[Bootstrap Basic Template Code](http://getbootstrap.com/getting-started/###template).


Bootstrap is built on a 12 columns system, which you can use to position your elements on the page.

![Bootstrap 12 columns]()

[See bootstrap documentation for more on this](http://getbootstrap.com/css/###grid-example-basic).


### Making a webpage responsive with Bootstrap
So how to go about? Let's see it in practice with an example


![Work out rows and columns by hilighting ]({{page.bootstrap1}})

We can break down this page into a series of rows and columns.
Where the <span style="color:blue;"><b>container</b></span> contains everything. While the  <span style="color:orange;"><b>row</b></span> separates elements that are at the same level.
And the <span style="color:green;"><b>columns</b></span> are elements that can be defined to be side by side.

![Work out rows and columns by hilighting 2]({{page.bootstrap1-hilight}})


<!-- bootstrap code  to get a title on top, and a paragraph next to an image -->

```html
<div class="container-fluid">
	<div class="row">
	<h1>Article Title</h1>
	</div><!--  end row -->
	<div class="row">
  		<div class="col-xs-12 col-sm-6 col-md-8 col-lg-10">
  		 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dolor nec eros blandit lobortis. Nulla elementum tortor nec nisi suscipit tempor. Nullam bibendum ipsum sed vestibulum faucibus. </p>
  		</div><!-- end col  -->
  		<div class="col-xs-12 col-sm-6 col-md-8 col-lg-10">
  			<img src="http://placehold.it/350x150"> <!-- replace with kitten picture -->
  		</div><!-- end col  -->
	</div> <!-- end row -->
</div> <!-- end container -->
```

The important part here is that when defining the column `<div class="col-xs-12 col-sm-6 col-md-8 col-lg-10">` this specifies how many column spaces of the 12 column grid structure the column would take for the different screen sizes. [see documentation for more details]().
<!-- In this case it takes up the whole of the page for very small screens at `xs` as it's given 12 columns of size. and half the size at `sm` with 6 columns and so on for the rest of the screen sizes -->


<!-- Add w3 school link  -->

<!-- http://bootsnipp.com -->

### How to add bootstrap


### Bootstrap watch
<!-- bootstrap templates -->


### Bootstrap documentation
<!-- top tip use dash to geen ofline documentation at your finger tips -->


### Try it out

To check your understanding you could try and ad a second row with text image.

![]({{page.bootstrap2}})
