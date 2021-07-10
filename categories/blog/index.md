---
layout: page
title: Blog
body: theme-base-0c
---
# Blog 
<hr>

{%- for post in collections.blog reversed-%}
	{% include post_element.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content %} 
{% endfor %}