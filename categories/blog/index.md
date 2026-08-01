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

<fieldset class="post-filter">
	<legend class="visually-hidden">Show</legend>
	<label><input type="radio" name="post-filter" value="blog" checked> Blog</label>
	<label><input type="radio" name="post-filter" value="ttqf"> Tips Tricks &amp; Quick Fix</label>
</fieldset>

<hr>

{%- for post in collections.blog reversed-%}
{%- if post.data.categories contains 'ttqf' -%}{%- assign kind = 'ttqf' -%}{%- else -%}{%- assign kind = 'blog' -%}{%- endif -%}
<div class="js-post" data-kind="{{ kind }}"{% if kind == 'ttqf' %} hidden{% endif %}>
	{% include post_element_condensed.html, post:post, image:post.data.image, postTitle:post.data.title, url:post.url date:post.date, postDescription:post.data.description', content: post.data.content %} 
<hr>
</div>
{% endfor %}

<script>
	// Either/or filter: one kind is shown at a time so it's clear what you're looking at.
	// Blog is checked in the markup and ttqf posts ship hidden, so the default view is
	// correct with JavaScript disabled.
	document.querySelectorAll('input[name="post-filter"]').forEach(function (radio) {
		radio.addEventListener('change', function (e) {
			var kind = e.target.value;
			document.querySelectorAll('.js-post').forEach(function (el) {
				el.hidden = el.dataset.kind !== kind;
			});
		});
	});
</script>