---
layout: post
title: "Approaching a complex problems"
description: "Some notes on my take on how to break down a complex problem, when working on early stage products"
permalink: "/complex-problem.html"
date: "2019-01-16"
published: true
link:
image: /img/complex-problem/step-3.png
image2: /img/complex-problem/step-1.png
image3: /img/complex-problem/step-2.png
github:
gitbook: 
youtube: 
vimeo: 
tech: 
categories:
- ttqf
# - blog
tags:
- Product Management
---

This approach initially come from an R&D (research and development) approach I was thought while at UCL, then have been tried, tested, and tweaked over time on various project. Most recently on the BBC News Labs ['Crossing Divides' interactive](/BBC-crossing-divides.html) and [ Narrative Text](/BBC-narrative-text.html) projects.

It is most suited for the development of early stage products, following a lean / agile approach, where there might be a few uknowns that can slow down development and make product management a bit more uncertain.

## Step 1 - Identify Parts

Start by dividing the problem or system into parts 

<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

## Step 2 - Phases 

Divide that into phases that cut across the parts.
Phase one should be the minimum to have an end to end setup. ( Eg includes build tool and deployment) - sometime is MVP sometime is not is before that, more bare.


<div class="image-wrapper">
    <img src="{{ page.image3 }}" alt="{{ page.description }}" />
</div>


## Step 3 - Crucial Points

<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>

- Identify unknowns for R&D (research and development)
- Research each problem and issue
- ADR ( architecture Decision Record) types of notes to capture options are very useful here, for documentation and note taking, but also as a decision making tool.
- And then do R&D in isolation - define input and output / interfaces of these problems/issues to be able to tackle them in isolation 


## Step 4 - By Phases: end to end 

Once done step 3 can execute the project following the phases of step 2.

<!-- https://docs.google.com/document/d/11UP8tR7tFEXyscR6gW5Lta0cQ0GgxkOnUYQMfg7QZqs/edit?usp=sharing -->