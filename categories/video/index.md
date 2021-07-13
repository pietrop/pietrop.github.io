---
layout: page
title: Video
body: theme-base-0f
---

# Video 
<hr>
<!-- <ul>
{%- for post in collections.video -%}
  <li{% if page.url == post.url %} aria-current="page"{% endif %}>
   <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul> -->



{%- for post in collections.video reversed-%}
	{% include post_element_condensed.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content, duration: post.data.duration, company: post.data.company %} 
{% endfor %}