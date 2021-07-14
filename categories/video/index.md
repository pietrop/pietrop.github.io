---
layout: page
title: Video
body: theme-base-0f
---

# Videos
<p class="intro">
Documentary projects for broadcast Tv as well as for the web. And some personal projects I've worked on over the years.
</p>
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