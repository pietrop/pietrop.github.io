---
layout: post
title: "A framework for Front End System Design interviews - draft"
description: "Walk through of a framework I've used in Front End System Design interviews."
permalink: "/front-end-system-design.html"
date: "2021-06-16"
link: 
image: /img/front-end-system-design/js-min-cover.jpeg
image2: /img/front-end-system-design/front-end-system-design-youtube-sketch.png
github: pietrop/
youtube: 
published: true
open_source: true
# tech: ['node']
# company: ''
categories:
- blog
tags:
---

_Cover photo credit [unsplash](https://unsplash.com/photos/cvBBO4PzWPg)_

## Overview 

A (tentative) framework that you can follow when doing your front end system design interview.

If you are not familiar with Front end system design interviews, you can think of it as being similar to a [case interview](https://en.wikipedia.org/wiki/Case_interview).

In practice front end system design interviews are at risk of being fairly unstructured, as the interviewer is relying on you to drive the presentation. So this is a framework that you can follow when doing front end system design interview. To cover most of the ground the interviewer might be interested in. 

Most of these sections come from examples of front end system design interviews on blogs and YouTube. 

For each you'll find a summary of what to cover, and example of the corresponding artifacts you'll need to produce (eg bullet point list, wire frames, diagram, json data structure etc..)

Note that to avoid breaking the flow I've added a "More details" expandable section that provides further explanations as well as links to go deeper in certain topics for each section.


<details>
    <summary>More details</summary>

Here is worth mentioning that front end system design interviews are relatively new compare to the full stack ones. Depending on who your interviewers are (eg they are front end, backend and/or full stack), the scope of the role and how the team is organized ( eg are you really just on the front end or are you expected to stretch into the backend a bit?) your front end system design interview might be a bit of a hybrid where some aspects of a system design interview might come up. But not to worry, at the end will review some high level concepts from (full stack) system design that you should be familiar with.

Another thing I noticed is that they can be micro or macro. Eg it could be starting from a whole system, or it could start already zeroed in on a "widget" type component and then potentially exploring how that's wired up to the rest of the system. You should prepare for both approaches.


</details>

## Tooling

If you are doing this type of interview in a remote/online settings, these are some of the tooling that is often used. In some places you can choose and bring your own. Others might have a preferred one.

- [Free Online Whiteboard For Team Collaboration | InVision](https://www.invisionapp.com/freehand)
- [Google Drawings - create diagrams and charts, for free.](https://docs.google.com/drawings/)
- [Flowchart Maker & Online Diagram Software](http://draw.io/)

<details>
    <summary>More details</summary>

Another option is to use google doc, and add google drawing in for the various parts that require sketches and/ or diagram, as well as [google doc extension to format code and add syntax highlight to code](https://workspace.google.com/marketplace/app/code_blocks/100740430168). This is closer to what I'd when making a planning doc for a real project, but it's unlikely you'll use google doc in an interview settings. 
</details>

## Overview of the sections

1. 🗒️ Requirements gathering 
2. 📓 Define Scope + MVP
3. 🕶️ Data entities 
4. ♟️ API end points
5. 🏠 Client side components architecture       
	5.1 🏡 Components Architecture - Wireframes      
	5.2 🌴 Components Tree - diagram
6. 🚀 Optimization & performance
7. 🚑 Accessibility 
8. 🥗 Testing Strategy
9. 🕵️ Security
10. 🏢 Full Stack System design consideration

Ok, let's dive into it 

---

## 1. 🗒️ Requirements gathering

- What is the goal? 
- What is the problem statement?
  - Are there assumptions that stand out we are instantly making about the problem statement? 
  - We should verify those with the interviewer 
- Number of users? 
- Expected traffic?
- Multi device support 
  - eg mobile vs separate iOS/Android native app? 
  - Do we follow a mobile first design approach?
  - Do we even need the "desktop version"?
  - If mobile responsive, would the "desktop version" have feature parity with "mobile version"?
- Do we need to consider AMP?  (Eg via NextJs or parallel)
- And SEOs?
- Internationalization?
- Offline support?
- Browser targets? (eg latest device for latest OS? and/or IE?)

**Artefact**
- notes, eg (virtual) post it
- bullet points


<details>
    <summary>More details</summary>

- Are there [Non-functional requirements](https://en.wikipedia.org/wiki/Non-functional_requirement) we need to consider?

</details>



## 2. 📓 Define Scope + MVP

- identify part of the system to focus on
- eg core
    - Features
    - APIs
    - Interactions
    - Interfaces
- Edge cases?
- list of TODO(s)
    - ...
- list of NOT-TODO(s)
    - Eg AMP?
    - SEOs?
    - Offline support?

**Artefact**

- notes, eg (virtual) post it
- Two lists, one for TODO and one for NOT-TODO
- bullet points



<details>
    <summary>More details</summary>


### **Scope**
> After understanding the problem, we need to decide what the scope is going to be. Well, we cannot design a perfect system because there will be limited time i.e only 45 mins to 1 hour. So we need to pick those parts in which we are more confident. Don’t do the parts that you are not good at.

>- The scope cannot be a perfect service, but the core parts should appeal to an interviewer within 45 minutes.
>- List up the **TODO** and **NOT-TODO**( Check with the Interviewer ). The NOT-TODO should be also listed down, to show that we are aware of the not-todo but due to time constraints, we will not be able to do that.

> What’s the volume of the service and how many team members.

from [Front-end system design guide](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81)

### **MVP( Minimum Viable Product)**
> What is the MVP( Minimum Viable Product) — List of Core features like Core APIs, Core interactions, and Core interfaces.

> What is the core spec (based on the MVP)— What are the problems we need to handle, What are the edge cases, and What the tricky part is.

> What is the MVP — List of Core features like Core APIs, Core interactions, and Core interfaces.

from [Front-end system design guide](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81)

### **Framework for Breaking down a complex problem**    
I wrote a separate mini framework for [Approaching a complex problems](/complex-problem.html). This might be overkill for most exercise, but is a good way I found for breaking down a complex problem by dividing it into parts, phases and identifying crucial points. And could be useful as a fallback if narrowing down the scope doesn't come easy straight off the bat.


</details>

## 3. 🕶️ Data entities

- Representation of client side data. Eg Data Models / schemas / json.
- Sometimes this might include client side functions used to manipulate the data 
- You might revisit in point **5 🏠 Client side components architecture**
- Do you need "foreign keys" and or ways to express relationship between data or is it all in one json object? and if so are there payload size considerations etc..

**Artefact**

- Json objects representation for various entities

```jsx
{ 
	"id": "1234-45-5", // user UID
	"name": "Jim",
	...
}
```

## 4. ♟️ API end points
- Functions to get set data from backend interfaces
- It could also be described as series of REST API end points, but if described as functions it has the advantage that it abstracts from the client server communication implementation. Eg you could use socket, graphQL etc..) 
- You should check with your interviewer if they prefer function interfaces or rest API end point, but don't jump ahead, see **Network communication** considerations first. 

**Artefact**

- functions names and parameters (interface)

eg

```jsx
getPost(apiKey,userId, postId)
```

and/or REST end points 
```
/user/:userId/posts/:postI
```

<details>
    <summary>More details</summary>

- [YouTube - Developing Food Ordering App in 1 hour | Machine Coding Frontend Interview](https://youtu.be/HvSsGjxy7so)
 
</details>


### Network communication
This section might include a conversation around network communication 

Also are you connecting to the backend via a **REST API**, web socket etc.. or are you using GraphQL etc...

1. For data updates in real-time web applications, there are three ways:
    - Long/short **Polling** (client pull) — For stocks application       
    - **Long-Polling**       
    The client sends request to the server to check if anything has change
    but the server, if nothing has changed, holds on to the request until there's something new and then it responds.
    This might time out, and then the client sends another request.
    - **WebSockets**      
        (server push)—For chat application
    - **Server-Sent Events**
        server push (**SSE**) —For stocks application
2. Backend for FrontEnd(**BFF**) — API aggregatingThe BFF will do the following:
   - As the name suggests is a pattern where each front end (eg mobile, web, etc..), has its own dedicated backend that preps the data for it.
   - Call the relevant micro services APIs and obtain the needed data
   - Format the data based on the frontend representation
   - Send the formatted data to the frontend
3. **GraphQL** — It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need




4. **Caching / HTTP2** — caching get APIs

<details>
    <summary>More details</summary>

Brush up on REST
- [What is a REST API?](https://www.educative.io/courses/web-application-software-architecture-101/qADAzX6yorR)
- [Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer) (see [Architectural constraints](https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints) section)

Server side network communications options
- [Long polling](https://javascript.info/long-polling)
- [What is HTTP Long Polling?](https://www.pubnub.com/blog/http-long-polling/)
- [WebSocket](https://javascript.info/websocket)
- [Server Sent Events](https://javascript.info/server-sent-events)
  
**BFF**
- [Backends for Frontends pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends)
- [Pattern: Backends For Frontends](https://samnewman.io/patterns/architectural/bff/)
  
**GraphQL**
- [GraphQL](https://graphql.org/)
- [React + Apollo Client + GraphQL Yoga](https://www.theavocoder.com/graphql)

**Caching / HTTP2**
- [Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2)
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)
- [HTTP/2](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2)
- [HTTP/2 For Web Developers](https://blog.cloudflare.com/http-2-for-web-developers/)
- [Getting Ready For HTTP2: A Guide For Web Designers And Developers](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/)
- [HTTP2 for front-end web developers](https://mattwilcox.net/web-development/http2-for-front-end-web-developers)
- [Evolution of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)

</details>


## 5. 🏠 Client side components architecture

Most likely we can assume you'll be using React for your front end system design architecture. 

React is considered to be a library and not a framework, as is equivalent to the View in MVC.      

<!-- https://twitter.com/lizkenyon07/status/1400158134950301698?s=20 -->

Is also common to use a pattern where you just use React, and have some of the parent components be responsible for fetching the data from the backend.    

Possibly with react router, if it's a the SPA (single page application) that requires multiple view.     

None the less, being able to mention other front end architecture patterns might be a good to know. eg MVC, MVVM, MVP.   

As well as other libraries and frameworks you might be familiar with, such as backboneJs, Vue, Angular, Ember, Rails, Django etc... if appropriate. In the context of trade off vs current choice.     
Or NextJS.     

As well as potentially [Redux](https://redux.js.org/) and/or the concept of immutable state. or [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) in react hooks.    

**Artifacts**
- Mostly considerations and things you might mention and potentially use in the next two sections **5.1** and **5.2**.
- Potentially use to add to the overall diagram.

<!-- For more see -->

<details>
    <summary>More details</summary>

- [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- [MVP - Model view presenter](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter)

#### MVC

- [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Rails guides - MVC and you](https://guides.rubyonrails.org/getting_started.html#mvc-and-you)

<!-- A reference diagram of the parts of Rails MVC
![Rails prezi overview ](/img/front-end-system-design/rails_prezi_overview.png)

If you have Prezi you can download the full presentation [Prezi Rails Diagram presentation](/img/front-end-system-design/Rails%20Overview.pez) -->

#### Redux

- [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/)
- [React Redux tutorials for beginners- 1](https://nabendu82.medium.com/react-redux-tutorials-for-beginners-1-8be4abc76048)
- [Free code camp - redux](https://www.freecodecamp.org/learn/front-end-libraries/#redux)
- [Redux FAQ: General](https://redux.js.org/faq/general#:~:text=Redux%20is%20most%20useful%20when%20in%20cases%20when%3A&text=The%20app%20state%20is%20updated,is%20being%20updated%20over%20time)

#### Immutable data structures
The concept of Immutable Data Structures to keep track of state.
- [Immutable Data Structures](https://css-tricks.com/learning-react-redux/#immutable-data-structures)
- [Immutability in JavaScript](https://www.sitepoint.com/immutability-javascript/)
- [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

On the practice ofusing ES6 spread operator to keep the state immutable 
>you cannot reliably use the Object Spread Operator (...) for deep cloning objects.

- [Immutable Update Patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)
- [Tiny Programming Principles: Immutability](https://www.tiny.cloud/blog/mutable-vs-immutable-javascript/)
- [Why the concept of immutability is so awfully important for a beginner front-end developer?](https://itnext.io/why-concept-of-immutability-is-so-damn-important-for-a-beginner-front-end-developer-8da85b565c8e)

#### When to use Redux?
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [When should I add Redux to a React app?](https://stackoverflow.com/questions/36631761/when-should-i-add-redux-to-a-react-app)
- [React hooks `useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)
<!-- Might also include   -->

</details>

### 5.1 🏡 Components Architecture - Wireframes

- Component architecture
- layout (sketch/wireframe - user flow/interaction)
- Visually identify components on the page
- Presentational and Container Component
- Mention whether you'd need a design system (eg collaborating on a cross functional team etc.. ie [storybook](https://storybook.js.org/))

**Artefacts**

- Wireframe sketches
    - If an isolated component, eg a widget than just zoom in on it
    - otherwise pages/views, eg design YoutTube, Instagram, Twitter etc..
<!-- - eg sketch for a commenting functionality in a:

![Framework%20d779c8afb4ce49f38ace585f6f375207/article-blog-wireframe.png](Framework%20d779c8afb4ce49f38ace585f6f375207/article-blog-wireframe.png) -->

Eg this could be a starting point sketch for front end system design for the YouTube player, to then decide what to focus on, eg the list of recommended video on the side, or the thumbnail that appear when you scrub on the player, or the commenting section etc..
![Example of sketch for YouTube ]({{image2}})

<details>
    <summary>More details</summary>

- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) (for how to break down the UI into a component hierarchy)
- [Container/Component Architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) (possibly an out of date pattern?)
- Think about the user flow

</details>

### 5.2 🌴 Components Tree - diagram

- Further Component tree
  - Component hierarchy. How the component relate to one an other, and or pass data to one another. 
  - Eg presentational components 
- Highlighting the data flow
- And the fetch entry points (in the diagram)
- Possible UI patterns, eg
    - Optimistic UI
    - List virtualization
    - Recursive lists (eg hackernews or reddit comment section)
- UI State
  - Two way data binding vs unidirectional 
  - Passive or reactive programming model


**Artefacts**

- diagram
<!-- - eg

    ![Framework%20d779c8afb4ce49f38ace585f6f375207/Screen_Shot_2021-06-13_at_2.52.31_PM.png](Framework%20d779c8afb4ce49f38ace585f6f375207/Screen_Shot_2021-06-13_at_2.52.31_PM.png) -->

<details>
    <summary>More details</summary>

This could also include UI Patterns, such as: 
  - **Optimistic UI**
    >Optimistic UI aims to show the final state of the UI before an operation is actually finished. This will appear snappier and more fluid to the user. One of the most prominent examples are chat-based apps, like Messages, Whatsapp and Facebook Messenger. When you send a message, it is immediately shown in the chat, even though it is not yet sent through the network. It may take some time to send it, especially if you have a slow internet connection, so you’re shielding the user from “the waiting experience”.
    - [Optimistic UI](https://medium.com/distant-horizons/using-optimistic-ui-to-delight-your-users-ac819a81d59a#:~:text=Optimistic%20UI%20aims%20to%20show,Messages%2C%20Whatsapp%20and%20Facebook%20Messenger)
  - **Virtual list**
    - [Virtual List](https://dev.to/nishanbajracharya/what-i-learned-from-building-my-own-virtualized-list-library-for-react-45ik)
    - [Rendering large lists with React Virtualized](https://dev.to/bnevilleoneill/rendering-large-lists-with-react-virtualized-2p8b)
    - [Virtualizing The Virtual DOM — Pushing React Further](https://medium.com/outsystems-engineering/virtualizing-the-virtual-dom-pushing-react-further-d76a16e5f209)
  - **List recursion**
    - [list recursion](https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children) 
    - [Build nested commenting system using Laravel and VueJs - Part 1](https://scotch.io/@jagadeshanh/build-nested-commenting-system-using-laravel-and-vuejs-part-1)
    - [Managing Hierarchical Data in MySQL](http://mikehillyer.com/articles/managing-hierarchical-data-in-mysql/)

</details>

### Fetching end points for the data.
Consider how to ensure fast access to the backend data, by defining fetching end points for the data. Where do we fetch it, and how do we pass it.

You can use a component tree diagram to show this.    

<details>
    <summary>More details</summary>

- from [YouTube [Front End System Design] - Facebook News Feed](https://youtu.be/5vyKhm2NTfw?t=1105)
</details>

## 6. 🚀 Optimization & performance
Divided into web performance, smoothness and speed.

- Page performance
- Images
- SVG
- Lazy loading and code/bundle splitting
- Skeleton loading
- Bundle size reduction
- Fast initial load time
- RAIL model
- Load
- Network
- Metrics
- Service workers
- SSR - Server Side Rendering
- React server side rendering & hydration
- DOM rendering
- Smoothness (jank-free)
- Compute

**Artefacts**

- probably mostly just notes and adjustments to the diagram



<details>
    <summary>More details</summary>

_There's a lot to be said about performance, and it would probably deserve it's own separate post, probably even severals. But for now here are some things worth taking into consideration and expanding on._

### Page performance

>1.preload / prefetch resources - When to prefetch and preload resources.
>2.Code splitting
>   a. Skeleton loading  
>3.Caching / CDN      
>4.Service worker/offline     
>5.Lazy-load     
>6.Auto pager      
>7.Infinite scroll      
>8.SSR/initial data feed      
>9.Within viewport update(API .etc)
>
>- from [Website Performance Optimization: The Definitive Guide](https://towardsdev.com/website-performance-optimization-267b28b877df)
  
[see also separete post on web performance optimization checklist](/web-performance-optimization-checklist.html)

#### About Images

1. Compress 
2. Lazy Load / placeholder 
3. Progressive images 
4. Use SVG for icons 
5. Caching / http2

#### About SVG
The pros/cons of SVG, creating the edge cases/poor cross-browser support, sometimes more trouble than it's worth.

- [Responsive Images Done Right: A Guide To `<picture>` And `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
  

#### Lazy loading and code/bundle splitting
- Lazy loading 
- bundle splitting
- Code splitting

#### Skeleton loading
![YouTube Sekeleton loading](/img/front-end-system-design/youtube-skeleton.png)

- [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)
- [Stop Using A Loading Spinner, There’s Something Better](https://uxdesign.cc/stop-using-a-loading-spinner-theres-something-better-d186194f771e)
- [How To use Skeleton Screens in React and React Native](https://www.digitalocean.com/community/tutorials/react-skeleton-screens-react-and-react-native)
- [Skeleton](https://material-ui.com/components/skeleton/)


#### Bundle size reduction
- Bundle size reduction
- Tree shaking
- Dynamic imports

#### Fast initial load time
- App shell architecture
- SSR
- Caching
- Rehydrate application state from prev. cached state
- [Fast load times](https://web.dev/fast/)

#### RAIL model
- [Measure performance with the RAIL model](https://web.dev/rail/)
- [RAIL](https://developer.mozilla.org/en-US/docs/Glossary/RAIL)
- [Recommended Web Performance Timings: How long is too long?](https://developer.mozilla.org/en-US/docs/Web/Performance/How_long_is_too_long)


>RAIL model from Google
>RAIL is a user-centric performance model that provides a structure for thinking about performance.
>RAIL is an acronym for “Response, Animation, Idle and Load.” The model categorises user interactions under these four domains. Users have different expectations whenever they tap, click on or scroll over your various page elements. Therefore, the RAIL model measures each user interaction with different context-specific goals in mind.

>1)**Response:** process events in under 50ms (100ms) 
>- To ensure a visible response within 100 ms, process user input events within 50 ms. This applies to most inputs, such as clicking buttons, toggling form controls, or starting animations. This does not apply to touch drags or scrolls.
>- Though it may sound counterintuitive, it’s not always the right call to respond to user input immediately. You can use this 100 ms window to do other expensive work, but be careful not to block the user. If possible, do work in the background.
>- For actions that take longer than 50 ms to complete, always provide feedback.
>2) **Animation**: produce a frame in 10 ms (frame within 10ms) 
>- Produce each frame in an animation in 10 ms or less. Technically, the maximum budget for each frame is 16 ms (1000 ms / 60 frames per second ≈ 16 ms), but browsers need about 6 ms to render each frame, hence the guideline of 10 ms per frame.
>- Aim for visual smoothness. Users notice when frame rates vary.
>3) **Idle**: maximize idle time (use idle time, 50ms) 
>- Maximize idle time to increase the odds that the page responds to user input within 50 ms.
>4) **Load**: deliver content and become interactive in under 5 seconds
>- When pages load slowly, user attention wanders, and users perceive the task as broken. Sites that load quickly have longer average sessions, lower bounce rates, and higher ad viewability.

from [Front-end system design guide - RAIL model from Google](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81#ed88)

#### Load

>1. DOMContentLoaded **-** gives you a feel for how long it took for the HTML to load so that the page can start rendering content.
>2. Load - when all the resources are loaded ( resources are parsed and get acknowledged off before DOMContentLoaded)
>3. **First contentful Paint(FCP)** event relates to the moment when the first element from the DOM appears in the users’ browser.
>4. **First Meaningful Paint** (deprecated)- the time it takes for a page’s primary content to appear on the screen.
>5. **Speed Index** - shows how quickly the contents of a page are visibly populated.
>6. **First CPU Idle** (ready to interact, deprecated)- marks the first time at which the page’s main thread is quiet enough to handle input.
>7. **Time To (fully) Interactive(TTI)** the amount of time it takes for the page to be fully interactive.
>8. **First Input Delay (FID)** measures the time from when a user first interacts with a page to the time when the browser is actually able to respond to that interaction.
>9. Total Blocking Time - measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.
>10. Largest Contentful Paint (2.5s)- measures when the largest content element in the viewport becomes visible. It can be used to determine when the main content of the page has finished rendering on the screen.

from [Front-end system design guide - RAIL model from Google](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81#ed88)

#### Network
- Lazy vs eager loading
- Service Worker
- Caching API requests

#### Metrics
1. DOMContentLoaded
2. Load 
3. First Contentful Paint 
4. First Meaning Paint (deprecated) 
5. Speed Index 
6. First CPU Idle (ready to interact, deprecated) 
7. Time To (fully) Interactive: 
8. First Input delay 
9. Total Blocking Time(from FCP to TTI) 
10. Largest Contentful Paint (2.5s)

- [metrics](https://web.dev/metrics/)

#### Service workers
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Service workers at TPAC](https://jakearchibald.com/2019/service-workers-tpac/)
  
#### SSR - Server Side Rendering
- [What is Server-Side Rendering? (Server-side Rendering with JavaScript Frameworks)](https://youtu.be/GQzn7XRdzxY)
- [NextJs Pages](https://nextjs.org/docs/basic-features/pages)
- [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37)

#### React Server Components
- [Introducing Zero-Bundle-Size React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)

https://twitter.com/pietropassarell/status/1341842274217566210?s=20

- [React Server Components (with Next.js Demo)](https://youtu.be/DuSa5E-GgwU)

#### React server side rendering & hydration

```js
import ReactDOMServer from 'react-dom/server';
ReactDOMServer.renderToString(element)
```

>If you call `ReactDOM.hydrate()` on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

- [`hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate)
- [`ReactDOMServe`](https://reactjs.org/docs/react-dom-server.html)
- [How to Enable Server-Side Rendering for a React App](https://www.digitalocean.com/community/tutorials/react-server-side-rendering)
- [How to implement server-side rendering in your React app in three simple steps](https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/)


### DOM rendering

- Critical rendering path
  - [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572#.znpo4up4m)
  - [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path)
- [(PWA)Progressive web app](https://web.dev/progressive-web-apps/)
- Reduce browser reflows and when to promote an element to the GPU
- Differences between the browser layout, compositing and painting
- Memory leaks
- Caching
- Network Waterfall
- Script attributes
    Script attributes- Async,defer, preconnect, prefetch, preload
  - [Deep dive into the murky waters of script loading](https://www.html5rocks.com/en/tutorials/speed/script-loading/)
  - [JavaScript modules](https://v8.dev/features/modules)
  - [YouTube - async vs defer attributes in Javascript | Ola Interview Question](https://youtu.be/IrHmpdORLu8)
  - [Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)
- gzip
  - [Two Quick Ways To Reduce React App’s Size In Production](https://rajaraodv.medium.com/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a)
  - re-gizp it seems like it might improve performance, but reduce compatibility?
see this comment
    > Cloudfront, the CDN based on S3 by Amazon compresses for you. By looking at our analytics, 5% of users do not accept gzip as a valid encoding right now in prod for our websites.
    > - from [github - facebook/create-react-app - issue `#1908` "Compress when building"](https://github.com/facebook/create-react-app/issues/1908#issuecomment-295497575)


Courses 
- [Udacity - Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
- [JavaScript Performance](https://frontendmasters.com/courses/web-performance/)

Case studies 
- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91)

Tools
- [Measure](https://web.dev/measure/)

#### resources

- [Frontend Optimization - 9 Tips to Improve Web Performance](https://www.keycdn.com/blog/frontend-optimization)
- [Why does speed matter?](https://web.dev/why-speed-matters/)  
- [developers.google.com - loading performance](https://developers.google.com/web/fundamentals/performance/get-started)
- [Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering)
- [The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)
- [PageSpeed Rules and Recommendations](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations#avoid_css_imports)
- [Fast load times](https://web.dev/fast/)
- [Web Vitals](https://web.dev/learn-web-vitals/)
- [Metrics](https://web.dev/metrics/)
- [Leverage Browser Caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
- [Front-end system design guide > Smoothness: The basic goal is to make it jank-free.](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81)


### Smoothness (jank-free)

>1. Instant go back (Page Stack/Global state/API caching)
>2. Instant go forward (Skeleton / Loading indicator / Above-the-fold)
>3. Instant interaction response (Accessibility — A11y, Passive listener, support Design guidelines)
>4. Make it native-like Animation/Transitions/Gestures
>5. Make it native-like UI components.
>
> - from [Front-end system design guide](https://bootcamp.uxdesign.cc/front-end-system-design-guide-9a11381f5e81)

Might also be worth having some reference to the inconsistencies of your rendering environment when talking about this - eg How rAF might not be 60fps although a basic example might assume it. [WebGL - Animation](https://webglfundamentals.org/webgl/lessons/webgl-animation.html)


### Compute
#### WebGL
- [WebGL: 2D and 3D graphics for the web](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [OpenGL ES for the Web](https://www.khronos.org/webgl/)
- [WebGL](https://en.wikipedia.org/wiki/WebGL)
#### WebAssembly
- [webassembly](https://webassembly.org/)
- [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)

#### (Web & Service) Workers
- [https://web.dev/workers-overview/](https://web.dev/workers-overview/)

>There is a big difference in what they are intended for:
>
>Web Workers
>Web Workers provide a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa.)
>[Source - Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
>
>Service Worker
>Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.
>[Source - Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
>
>So Web Workers are handy to run expensive scripts without causing the user interface to freeze, while Service Workers are useful to modify the response from network requests (for example, when building an offline app).
>
> - from [What can service workers do that web workers cannot?](https://stackoverflow.com/questions/38632723/what-can-service-workers-do-that-web-workers-cannot)

- Service worker, based on web worker. 
- related to caching, 
- act as a proxy between your page and the requested server
- setup online behaviour 
- eg used in firebase cloud messaging on web, to delivery message to client. sitting in background constantly listening then updating the UI.

from [What’s the difference between a Web Worker and a Service Worker?](https://youtu.be/Yq32eUYg6Lc?t=123)

#### SharedArrayBuffer
- [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/)

</details>

## 7.  🚑 Accessibility

- Accessibility tree
  - HTML elements in top to bottom of the page, regardless of CSS positioning(?)
- Use native HTML elements
  - semantic HTML vs "Div Soup"
- Use `a` for
  - internal navigation 
  - outwards link
  - Use custom style to make it look like a btn if needed by the design
- Use `button`(s) for 
  - feature that require clicks within the page, 
    - eg widgets like collapse, accordion, [tab widget](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html) etc..
  - eg use custom style to make it look like a link if needed by the design
- keyboard navigation
  - Keep and show focus
  - Tab navigation 
  - `tabindex="0"` 
- When to use `nav`?
- Link to go back to the top of page
- `alt` attribute for non descriptive images
  - leave blank `alt=""` for decorative images
- aria attributes
  - aria attribute to elements with description
  - aria attribute to exclude elements not relevant to screen reader (eg decorative images)
- Media accessibility (eg audio, video - captions, transcripts etc..)
- ...

**Artefacts**

- Probably mostly just notes and adjustments to the diagram

  
<details>
    <summary>More details</summary>

### Learning resources
- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [web.dev - Accessible to all](https://web.dev/accessible/)
- [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Accessibility](https://developers.google.com/web/fundamentals/accessibility)
- [A11ycasts with Rob Dodson](https://youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
- [WebAIM - Introduction to Web Accessibility](https://webaim.org/intro/)
- [Styling buttons, the right way](https://fvsch.com/styling-buttons)
- [Applied Accessibility](https://www.freecodecamp.org/learn/responsive-web-design/#applied-accessibility)

### Other   
- [Building websites for Safari Reader Mode and other reading apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)
- [I Used The Web For A Day Using A Screen Reader](https://www.smashingmagazine.com/2018/12/voiceover-screen-reader-web-apps/)
- [I Used The Web For A Day With Just A Keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)
- [A More Accessible Web](https://open.nytimes.com/a-more-accessible-web-fa87592da6d2)

### Semantic HTML
- [Semantic HTML: The Unbearable Rightness of Being](https://ux.shopify.com/semantic-html-the-unbearable-rightness-of-being-9b3c493e1791?gi=9f4671eb1680#.m5d0oty4r)
- [A Look Into Proper HTML5 Semantics](https://www.hongkiat.com/blog/html-5-semantics/)
- [Let’s Talk about Semantics](http://html5doctor.com/lets-talk-about-semantics/)
- [The practical value of semantic HTML](https://brucelawson.co.uk/2018/the-practical-value-of-semantic-html/)
- [Understanding semantics](https://tink.uk/understanding-semantics/) 
- [Use semantic HTML for easy keyboard wins](https://web.dev/use-semantic-html/)
- [WTF, forms?](http://wtfforms.com/) - (styling form elements)


![HTML5 semantic diagram](/img/front-end-system-design/h5d-sectioning-flowchart.png)

### Media accessibility 
- [Media accessibility](https://web.dev/media-accessibility/)

### Check list(s)
- [a11yproject](https://www.a11yproject.com/checklist/)
- [webaim checklist](https://webaim.org/standards/wcag/checklist)
- [WCAG Checklists](https://www.wuhcag.com/wcag-checklist/)
- [voxmedia accessibility #engineers](http://accessibility.voxmedia.com/#engineers)

### React Accessibility
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [How to Design Keyboard Accessibility for Complex React Experiences](https://www.freecodecamp.org/news/designing-keyboard-accessibility-for-complex-react-experiences/)
</details>


## 8. 🥗  Testing Strategy
Frame it more in terms of a testing strategy. And pick and chose what's most appropriate for the project based on constraints. Eg some tests are more time consuming then others (eg End to End) and others are more insightful to quickly identify a bug 🐛 (eg Integration tests)

Testing strategy that strikes the Right balance between adding confidence in the code base as well as ability to make changes without introducing bugs. Especially when working within a team.

Eg Snapshot test/screenshot testing can be potentially a premature optimization - definitely valuable for stable projects, but could endure progress on work in progress MVP.

Type of tests at a high level

1. **Linting**, also kind of a test to enforce best practices during development, at commit etc.. ([ESLint](https://eslint.org/))
2. **Typechecking**, eg [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for React
3. **Unit test** - a single function or service ([Jest](https://jestjs.io/))
4. **Component test** - a single component - functionality ([jest](https://jestjs.io/)/[Enzyme](https://github.com/enzymejs/enzyme))
5. **Snapshot Test** - a single component - visual regression testing, eg changes against previous versions (Jest, [percy.io](https://percy.io/), [backstopJS](https://garris.github.io/BackstopJS/))
6. **End to End Test** - Interaction between multiple components, usually from point of view of a user ([Cypress](https://www.cypress.io/))
7. **Performance test** - How the app performs in difference environment
8. **Coverage tests** - How much of your application of the app is covered by tests
9. **Browser Testing** -  Test how the app/page renders across browsers, devices and operating systems, manual or automated. Can return screenshots.([Browser Stack](https://www.browserstack.com/))
10. **Testing calls to API end points** - Test modules and/or components that perform HTTP requests in isolation, by mocking the server end points to validate the request ([Nock](https://github.com/nock/nock))

Also

- **QA** - Manual or automated, same dev team or dedicated team.
- **BDD** Tests - Behavior driven development ([cucumber](https://cucumber.io/))
- Tests can also be connected to deployment, eg to be run automatically in the background with PR reviews etc..
  
<details>
    <summary>More details</summary>

   See separate post on [testing strategy](/testing-strategy.html)
</details>


## 9.🕵️ Security

- CORS
- ClickJacking
- SQL Injection
- `a target= _blank rel= noopener noreferrer`
- CSP - Content security policy
- HTTPS
- ...


<details>
    <summary>More details</summary>
    
### CORS 
- [YouTube - CORS, Preflight Request, OPTIONS Method | Access Control Allow Origin Error Explained](https://youtu.be/tcLW5d0KAYE)
- [HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)

>At first, cross-origin requests were forbidden. But as a result of long discussions, cross-origin requests were allowed, but with any new capabilities requiring an explicit allowance by the server, expressed in special headers.
>
> from - [Fetch: Cross-Origin Requests](https://javascript.info/fetch-crossorigin)

- [Same-Origin Policy](https://dev.to/lydiahallie/cs-visualized-cors-5b8h#sameorigin)

### CSRF attack

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
  
### Cross site scripting XSS
- [Defeating Cross-site Scripting with Content Security Policy](https://www.pluralsight.com/courses/defeating-cross-site-scripting-content-security-policy)
- [Don’t try to sanitize input. Escape output.](https://benhoyt.com/writings/dont-sanitize-do-escape/)
- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

### Clickjacking
- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)

### CSP - Content security policies
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)

### HTTPS
- [Why HTTPS matters](https://web.dev/why-https-matters/)
- [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

## `a target="_blank" rel=noopener`

```diff
- <a href="http://example.com">
+ <a href="http://example.com" target="_blank" rel="noopener"> 
   Example site
</a>
```

- [The performance benefits of `rel=noopener`](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
- [About `rel=noopener`](https://mathiasbynens.github.io/rel-noopener/)


### Other
- [web.dev - Safe and secure](https://web.dev/secure/)
- [Security and Identity](https://developers.google.com/web/fundamentals/security)


### Escape text
- [Foolproof HTML escaping in Javascript](http://shebang.mintern.net/foolproof-html-escaping-in-javascript/)
- [Web Service Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html)
### courses
- [The Full Stack Developer](https://www.apress.com/gp/book/9781484241516) - (book, chapter on security, as an overview)
- [CS75.tv Building Dynamic Websites](http://cs75.tv/2012/summer/), lecture 8 on security


</details>

## 10. 🏢 Full Stack System design consideration

Full stack system design, should in theory be out of scope for the front end system design interview. But is not uncommon that the interviewer might have full stack experience, and might test the limit of your architecture and backend knowledge. So it doesn't hurt to have a high level understanding of some of these concepts.

- Caching
- load balancing
- Database choice
- Database schema
- Replication
- Sharding
- ...

**Artefacts**

- extending the above with:
    - diagram
    - Schema
    - notes
    - etc...


<details>
    <summary>More details</summary>


- [YouTube - Systems Design Interview Concepts (for software engineers / full-stack web)](https://youtu.be/REB_eGHK_P4)

### Load balancing

Distribute traffic to many web services. Helps with throughput, latency, scalability.

Eg put load balancer in front of servers. 

Various techniques for load balancing

1. NGINX, route requests to IP addresses
2. DNS load balancing, given a domain name it can resolve to various IP address
    1. No need dedicated machine, 
    2. but less customizable 

You can setup rules for load balancing 

1. round robin 
2. Hashing on the ip address
3. figuring out which machine has the least load and assigning traffic to it
4. figuring out which machines are offline, and remove traffic from it
5. etc..

The database is generally more critical to high traffic then the server tho


- [eductive.io - Load Balancing](https://www.educative.io/courses/grokking-the-system-design-interview/3jEwl04BL7Q)
- [System Design Interview Questions – Concepts You Should Know](https://www.freecodecamp.org/news/systems-design-for-interviews/) - long read
- 
### Caching
You can insert an in memory caching layer, eg NYT returning articles. 

Eg you can set it to 24 hours cache
- memcache
- redis
- cassandra

CDN to cache static assets files
- images
- videos
- javascrit
- html
- css

CDN is a global network of servers. Located geographically closer to your users.

it decrease loads on your server.

CDN techniques 

1. Pull technique. First request "slow" but then cached to CND for subsequent requests.
2. Push technique. Faster first request, but higher upfront cost. And might get to CND end points that don't end up being used.

if users uploading images, then distributed file system, eg like S3

- [eductive.io - Caching](https://www.educative.io/courses/grokking-the-system-design-interview/3j6NnJrpp5p)  
- [Introduction to architecting systems for scale](https://lethain.com/introduction-to-architecting-systems-for-scale/)
- [Cache](https://en.wikipedia.org/wiki/Cache_(computing))


  
### Database choice
- SQL vs NoSQL
- Most often chose SQL but know the difference
  - eg relational databse (tables) vs collections and documents ("json")

#### NoSQL

Non relational. Collections and documents.

Key value pairs models. Can scale automatically across machines.

Common

- MongoDB
- DynamoDB, AWS
- Firebase/Firestore, GCP

Also can use hybrid approach. 

Eg for an active chat server. you can use NoSQL or in memory table. 

And relational DB like MySQL for a user table.


### Database schema
- For SQL the tables, primary keys, indexes etc.. joins


define 
- tables
- primary keys
- indices

Replication, slave master replication. One database you write to and others copies for read only.

### Scaling

- Web server
- image/assets server
- database server,

Web server —> Load balancer

image/assets server —> CDN 

Database server —→

- caching
- indexes
- replication

scaling Database writes 

#### Sharding
Database sharing as a way of handling scaling

Database **sharding**, splitting up the database in multiple master database for the purpose of write.

- **vertical** sharing, splitting multiple individual tables across different machines.
- **Horizontal** sharing, splitting a single table (eg tweets) across multiple machines. Various ways to do it. Most common, user id mod by number of machines you want to allocate user id to. Eg 5 master machines for that table. this routes the user id to a specific machine.


#### Replication
Database replication as way to handle traffic


### API Design

Client & server. 

How do they communicate with each other? What are functions and methods they use?

Data transfer mechanism?
- JSON
- protocol buffer

How to handle security

offline usage

how to make it fast


### Resources

- [YouTube - A friendly introduction to System Design](https://youtu.be/quLrc3PbuIw)
- [CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan](https://youtu.be/-W9F__D3oY4)
- [Amazon System Design Preparation (SIP)](https://youtu.be/gNQ9-kgyHfo)
- [System Design Mock Interview: Design Facebook Messenger](https://youtu.be/uzeJb7ZjoQ4)
- [The Full Stack Developer](https://www.apress.com/gp/book/9781484241516) - Designing Systems Chapter 4
- [Crack the System Design interview: tips from a Twitter software engineer](https://www.freecodecamp.org/news/how-to-system-design-dda63ed27e26/)
- [system design primer](https://github.com/donnemartin/system-design-primer)
- [YouTube - Design Reddit: System Design Mock Interview](https://youtu.be/KYExYE_9nIY)
- [Designing Instagram](https://www.educative.io/courses/grokking-the-system-design-interview/m2yDVZnQ8lG)
- [Designing a URL Shortening service like TinyURL](https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR)
- [Scalable Web Architecture and Distributed Systems](https://www.aosabook.org/en/distsys.html)
 
</details>

## Cheat sheet framework list

This list below is a summary of the above and it is something you can use on the day. 

One option is to list these points in a "virtual" post it note at the beginning of the interview. And walk your interviewer through how you are planning to approach the problem. However use with caution as if you are not super strong on some of these points you might not want to draw unnecessary attention to it, use your own judgement on how much of the framework you'd want to make explicit.

You should also make it clear that you are open to ver off into different direction at any points if they have questions or things they'd like to focus on. There's generally not enough time to cover everything and is not uncommon that you might be asked to jump around to see if you can overall cover more ground.

But personally, for the purpose of the interview, I would say you should aim to prep to be strong from point 1 to 5 and be able to confidently break down the problem statement and run the interviewer through those different parts. 

For prepping from 6 to 10, a good strategy is to aim to go over those sections and cover any gaps you might have in your knowledge.

Last but not least, there's a lot to cover, but remember to try and relate it to your own experience as much as possible, as well as what might be expected of the role. Use it as a chance to fill in potential gaps you might have, as well as to organize knowledge and concepts. During the interview if relevant you can mention short anecdotes from previous projects you have worked on and or case studies you might have read ([eg Netflix getting rid of (client side) react](https://jakearchibald.com/2017/netflix-and-react)) if it's helpful to make a point about implementation and trade off between certain choices.


```
1. Requirements gathering 
2. Define Scope + MVP
3. Data entities 
4. API end points
5. Client side components architecture 
	5.1 Components Architecture - Wireframes
	5.2 Components Tree - diagram
6. Optimization & performance
7. Accessibility 
8. Testing Strategy
9. Security
10. Full Stack System design consideration
```

---

Special thanks to [Kavya](https://twitter.com/kavyaSukumar) and [Josh](https://twitter.com/joshrayman) for reviewing and providing feedback on my initial draft. 

<!-- Was this helpful? did you use it to prep for an interview? did I miss something? let me know on twitter [@pietropassarell](https://twitter.com/pietropassarell) -->


