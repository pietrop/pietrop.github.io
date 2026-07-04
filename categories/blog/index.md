---
layout: page
title: Blog
description: "Some thoughts, ideas, workshops, talks, and presentations from Pietro Passarelli."
body: theme-base-0c
---
# Blog 
<p class="intro">
Some thoughts, ideas, workshops, talks, and presentations.
</p>

<label class="ttqf-toggle">
	<input type="checkbox" id="ttqf-toggle">
	Show Tips Tricks & Quick Fix
</label>

<hr>

{%- for post in collections.blog reversed-%}
<div{% if post.data.categories contains 'ttqf' %} class="ttqf-post" hidden{% endif %}>
	{% include post_element_condensed.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content %} 
<hr>
</div>
{% endfor %}

<script>
	document.getElementById('ttqf-toggle').addEventListener('change', function (e) {
		document.querySelectorAll('.ttqf-post').forEach(function (el) {
			el.hidden = !e.target.checked;
		});
	});
</script>