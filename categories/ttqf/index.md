---
layout: page
title: Ttqf
body: theme-base-0c
---

# Tips Tricks & Quick Fix  
<hr>

<ul>
{%- for post in collections.ttqf  reversed -%}
  <li{% if page.url == post.url %} aria-current="page"{% endif %}>
   <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul>

<!-- post in site.categories.ttqf -->
<!-- <dl class="dl-horizontal">
	{% for tag in site.tags %}
		<dt><h2>{{tag[0] | capitalize }} </h2></dt>
			{% for post in tag[1] %}
				<dd>{% include post_element_ttqf.html title=post.title url=post.url date=post.date description=post.description  content=post.content %} </dd>
			{% endfor %}
		<hr>
	{% endfor %}
</dl> -->

{% comment %}
{%- for post in collections.ttqf reversed-%}
	{% include post_element.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content %} 
{% endfor %}
{% endcomment %}