---
layout: post
title:  "Rails `# TODO`"
date:   2015-06-06 12:52:00
permalink: "/rails-TODO.html"
description:  "Generate a list of `# TODO` from code from ruby code in rails to keep on top of your workload"
youtube: 
image: 
published: false
categories: 
- ttqf
tags:
- rails
---

# Rails TODO

{{ page.description}}

Discovered this looking at From [rails TODO](https://rubyquicktips.com/post/385665023/fixme-todo-and-optimize-code-comments)

But what I thought is that it be good to take it a step further and perhaps export the list as file, in markdown, maybe on the desktop, from terminal.

to save it into a file

```bash
$ rake notes:todo >>test.md
```

Or if you want to save onto desktop, regardless of  which folder you are project is/where you are with the terminal then you can use `~/Desktop` to point  to the desktop and change the bash comand as follow

```bash
$ rake notes:todo >> ~/Desktop/test.md
```