---
layout: post
title: "How to make newsroom tools that people will actually use?"
image:
date: '2016-04-21T01:30:00.000+01:00'
description: "How to quickly and efectivly build tools in the newsroom?"
published: false
permalink: "/newsroom_tools.html"
categories:
- blog
tags:
---

How to approach the problem of building tools for journalist in the newsroom? How do you gather user requirements and ensure it is an effective solution for your users problem before investing time and resources into developing it? We’ll consider techniques such as the so called "Mum Test", ways of modeling the problem domain, a Lean way to make hypothesis and iterate, and and component based design R&D prototyping approach as successful ways to build solid foundations and be able to quickly pivot should you need to do so.

First things first let's explore some of these techniques, and then we'll consider how they can be integrated into a smooth workflow.

## "The Mum Test"

<!-- What it is -->

<!-- example? -->

<!--biggest take aways  -->

<!-- Where to read more about it -->

## Modelling the problem domain

>
11.2 Why Object-oriented?
>
We have already given some justification for using an object-oriented approach to development. In this sub-section we attempt to give a more definitive answer to the question ‘Why object-oriented?’.
>
Preceding object-orientation there have been other well-known analysis and design models, such as Structured Analysis and Design, functional decomposition and logic-based programming. These are still used but in the last decade it has been object-oriented development that has become the mainstream approach for most software development. Why?
>
There are a number of reasons, including the use of abstraction, the benefits of encapsulation and the power of inheritance. Experience has shown that these are all effective ways of creating robust, reliable programs that are cleanly designed. Further, the emphasis on classes and exchangeable components allows a shift away from developing programs from scratch to developing programs by combining together existing components—reuse.
>
However, if we delve deeper there are some more important reasons for choosing classes and objects: reasons that the Java programmer needs to understand in order to get the best from the language.
>
11.2.2 Problem Domains
>
The key lesson of this for software developers is that solutions to specific problems tend to be fragile and short-lived. As soon as the problem requirements change (and they frequently do), the solution, your program, requires modification. If your program is not designed to be easily changed, then large parts or even all of it will have to be thrown away.
>
A problem domain is the context in which a particular problem exists. For example, the problem domain in which a specific route plan exists is that of maps, route planning, travelling and strategies for moving around. Critically, the problem domain is relatively stable, changing only slowly, while specific problems to be solved are transient and change regularly.
>
If you are able to capture the problem domain as the core of the design of your program, then the program code is likely to be more stable, more reusable and more easily adaptable to specific problems as they come and go. If you only capture a specific problem as the core of your design then your program code is only good for solving one problem and will, at best, require significant modification to solve a different problem.
>
Structured analysis and design, which leads to structured programming (see Section 3.5, page 77), is based on a design process of top-down decomposition. This specifies that the development process is one of continual top-down refinement of a problem until no further subdivision is needed. Unfortunately, this leads to programs that are designed around a specific solution (like the route plan you get by asking someone for directions) that end up with a very rigid structure, invariably with centralized control. When the time comes to modify the program to meet new or just slightly altered requirements, it turns out to be immensely difficult as the changes require wide-ranging modifications to the code.
>
In particular, we get the situation where the abstractions in the program, such as finding a route from A to B, end up depending on the details, things like specific street names. When the details change, the abstractions have to change as well. This is a fundamentally unstable situation.
>
In contrast, object-oriented analysis and design is based on a process of first identifying the abstractions needed by a program and modelling them as classes. This leads to a middle-out process where in the downwards direction the details of individual classes are implemented as code and in the upwards direction the overall structure of a program is developed using associations between classes and inheritance. A key part of the process is identifying the problem domain abstractions and getting them into place first. Then the details can be filled in. Interestingly, this typically generates programs that have decentralized control with objects taking responsibility for a particular feature.
>
Good object-oriented development leads to a design where the details depend upon the abstractions, the opposite to what is typically obtained with structured design. The abstractions are stable and so the core of your design changes slowly. The details needed for a specific problem can then be added or removed in a far less destructive and more easily managed way. In implementation terms this leads to a core framework of classes and interfaces representing the abstractions which are specialized by inheritance and association to provide concrete classes targeted at a specific problem. The concrete classes are only specializations of the abstractions and can easily be changed without affecting the abstractions. This leads us back to the arguments presented in Section 7.11, page 264, about class relationships, components and reusability—the Java programming model and object-oriented design are intimately related.
>
 >(Winder 355-356)
>
Winder, Russel. Developing Java Software, 3rd Edition. John Wiley & Sons UK, 122006. VitalBook file.

<!-- What it is -->

<!-- 11.2.2 	Problem Domains (Winder 355)
Winder, Russel. Developing Java Software, 3rd Edition. John Wiley & Sons UK, 122006. VitalBook file.
 -->

<!-- example? -->

<!--biggest take aways  -->

<!-- Where to read more about it -->

## Lean approach to "Costumer Development"

<!-- What it is -->

<!-- example? -->

<!--biggest take aways  -->

<!-- Where to read more about it -->


## component based design (R&D rapid prototyping approach)

<!-- What it is -->

<!-- example?-->
When at build the news hackaton, to prototype the system that given a video would give you an insight, we
identified the components, assess how good/reliable each component was on its own, and  then starting with the first one, see how compatible the output of one was with the input of the other, and what kind of adjustment needed to be made to integrate them.

Ie youtube captioning returns an srt file with timecodes.
a speaker diarization returns an xml with timecodes and speakers.

Now the specs are not exactly the same, srt vs xml. but because they have time-codes in common you can already see that you could write some code to integrate the speakers information with the speech to text transcription.


<!--biggest take aways  -->
"Black Box" thinking is at the core of computer science. In plain english it means you could use a system without having to worry about its internal implementations, as long as you know what it takes for input and what returns for output.

Component based design is more about organizing your system in a way that is made of components that can be decoupled, giving a more flexible architecture.
<!--  TODO: find about component based design and read up in Graham's book  -->


<!-- Where to read more about it -->


<!-- ## An example

When working on quickQuote at the Times & Sunday Times. -->

<!--  

- Identify a problem domain
- make an hypothesis : "Working with video, transcriptions can give you a way into the video that will allow you to do interesting things with it" link to beiond black boxes on the web
- Learn about your problem domain in a specefic context
"When was the last time you worked with video ? what was that like? talk me through it?" [mum test]
made an interactive piece, took a long time.
"Interesting, did you film the video yourself? what took a long time?"
shot the video, needed to find a quote, had to scrub through the video to find it, and then send a reference to the timecodes of the segment he wanted to the video team to edit it and send it back. That took a long time.

Great! we are onto something. a clearly articulated problem. a bottleneck in the workflow.

- Make an hypothesis to solve it.
- validate your hypothesis
- prototype

-->
