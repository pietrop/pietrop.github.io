---
layout: post
title:  "Bootstrap - rails"
date:   2015-06-06 12:52:00
permalink: "/bootstrap-rails.html"
description:  "setting up bootstrap in ruby on rails"
youtube: 
image: https://dl.dropboxusercontent.com/u/449999/GC02_AudavaWebApp_Wiki/bootstrap101.jpg
published: false
categories: 
- articles
tags:
- rails
---


<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>


[Bootstrap grid system](http://getbootstrap.com/css/#grid)

[BootsWatch Bootstrap Template](http://bootswatch.com)

to add bootstrap to rails, add the css and javascript bootstrap files front the `dist`folder into the stylesheet, and javascript folder in rails. 

these tags in the rails view layout page, means that rails read in those folders for you, and makes the links to css and javascript for you.

```erb
<%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
<%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
```

In Boostrap include the code inside the body in `<div class="container">` , in rails this can go in the `application.html.erb` either side of the `<%= yield %>` inside the body, link this:

```erb
<body>
	<div class = "container">
		<%= yield %>
	</div>
</body>
```

Then in your view page, the giest is that inside the container, you need a row that contains one column or more,
and **you structure your code in terms of rows containing columns**, to align things.

when there is more then one column, a column is given a number out of 12 to assign proportions between them.
`xs, sm, md, lg` [specify the device size](http://getbootstrap.com/css/#grid-options). 

`col-xs-12 col-sm-6 col-md-6 col-lg-6`



````html
<div class="row">
    <div class="col-md-12">
    	<h1>Hello World</h1>
    </div>
</div>
<div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    	<h2>A second heading</h2>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed auctor sapien, a vulputate metus. </p>
    </div> <!-- end col -->
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    	<img src="/http://placehold.it/350x250">
    </div> <!-- end col -->
</div> <!-- end row -->
````
<hr>
In HTML



<div class="row">
<div class="col-md-12">
<h1>Hello World</h1>
</div>
</div>
<div class="row">
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
<h2>A second heading</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed auctor sapien, a vulputate metus.</p>
</div> 
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
<img src="http://placehold.it/350x250">
</div> 
</div>

