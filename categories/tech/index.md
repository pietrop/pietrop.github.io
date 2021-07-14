---
layout: page
title: tech
body: theme-base-0c
---

# Tech 
Products and prototypes I've worked on over the years. Mix of personal projects and things I've done while working for larger companies. Majority are open source but unfortunately some are not. They are mostly in two categories productivity tools and new story formats. 
<hr>


{%- for post in collections.tech reversed-%}
	{% include post_element_condensed.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content, github: post.github, techStack:post.tech, company: post.data.company,openSource: post.data.open_source %} 
{% endfor %} 