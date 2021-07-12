---
layout: page
title: tech
body: theme-base-0c
---

# Tech 
<hr>


{%- for post in collections.tech reversed-%}
	{% include post_element_condensed.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content, github: post.github, techStack:post.tech %} 
{% endfor %} 