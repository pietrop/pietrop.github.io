---
layout: page
title: tech
body: theme-base-0c
---

# Tech 
<hr>
<!-- <ul>
{%- for post in collections.tech -%}
  <li{% if page.url == post.url %} aria-current="page"{% endif %}>
   <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul> -->


{%- for post in collections.tech reversed-%}
	{% include post_element.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content %} 
{% endfor %}