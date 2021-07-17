---
layout: post
title: "🚀 Web Performance optimization checklist"
description: "A checklist to improve web performance of your site, base on a workshop I attended at MozFest a while back"
permalink: "/web-performance-optimization-checklist.html"
date: "2021-07-16"
link: 
image: /img/web-performance-optimization-checklist/mitchell-luo-FWoq_ldWlNQ-unsplash.jpeg
image2: /img/
# github: pietrop/
# youtube: 
published: true
open_source: false
# tech: ['node']
# company: ''
categories:
- ttqf
tags:
---


_Cover photo credit [unsplash](https://unsplash.com/photos/FWoq_ldWlNQ )_

## Performance checklist
- Compress optimise images [`ImageOptim`](https://imageoptim.com/mac)
- Image sprite `(?)` | Tool: [`SpriteCow`](http://www.spritecow.com/)
- avoid CSS `@import` to avoid blocking request
- Move `<script>` tags to the end of the page.
- use `defer` for analytics library
- Mark your javascript as `deferred` or `async` (?)
- Use a CDN (eg Amazon Cloud front)
- Truncate `animate.css` to only include the animations we use
- Further compress Js. Use webpack gzip
- Check your assets
- Remove Bootstrap Js & JQuery if not needed
- Any unused npm packages we can ditch? (and or tree shaking)
- compress splats
- Minify CSS
- Concatenate your CSS
- Minify Javascript
- Concatenate your Javascript
- Consider Removing polyfills for older browsers to reduce size. If not necessary.

---

Notes from a MozFest session on web performance

## **Web performance optimization**

### **1 image formats**

Eg SVG for icons and logosJPEG for photosPNG for everything else.

#### **1 a. icon fonts**

don’t use it.[iconmoon.io](http://iconmoon.io/) eg get zip file from font awesome

### **2 compress images /optimise images**

SVG: SVGOMGSVG/JPEG/PNG: Compressorosx: ImageOptimlinux: trimagewindows: fileOptimizer

### **3 Use image sprites**

Sprites combine images into a single file.CSS code lets you use the images.

Tool: [SpriteCow](http://www.spritecow.com/)

### **4 Minify CSS & Javascript**

Minifies for CSS and Javascript shorten variable names remove white spaces.Tool: [CSS Minifier](https://cssminifier.com/) / [Javascript Minifier](https://javascript-minifier.com/)

### **5 Concatenate your CSS & Javascript**

concat minified CSS and JS improves HTTP request response time, it’s fewer files.

### **6 avoid CSS @import**

Rather use `<link>` tag which allows you to download in parallel.rather then as a blocking request

### **7 Move all your `<script>` tags to the end of the page.**

right before </body> tag. because these are sequentially downloaded

### **8 Mark your javascript as deferred**
```html
<script src="script.js" defer></script>
```
if you only have one script tag. as it ignores the order

async, keeps the order in which they appear

means don’t stop importing the js code, it continue rendering the page

### **9 Use a CDN**

eg cloud fare content distribution network

### **10 Check your assets**

you might not need all the js you are using eg Jquery, might not be needed.

Website: [you might not need jquery](http://youmightnotneedjquery.com/) 


---

## check list 

```
- [ ] Compress optimise images`ImageOptim`
- [ ] Image sprite `(?)` | Tool: `SpriteCow`
- [ ] avoid CSS `@import` to avoid blocking request
- [ ] Move `<script>` tags to the end of the page.
- [ ] use `defer` for analytics library
- [ ] Mark your javascript as deferred or async (?)
- [ ] Use a CDN (eg Amazon Cloud front)
- [ ] truncate animate.css to only include the animations we use
- [ ] Further compress Js. Use webpack gzip
- [ ] Check your assets
- [ ] Remove Bootstrap Js & JQuery if not needed
- [ ] Any unused npm packages we can ditch? (and or tree shaking)
- [ ] compress splats
- [ ] Minify CSS
- [ ] Concatenate your CSS
- [ ] Minify Javascript
- [ ] Concatenate your Javascript
- [ ] Consider Removing polyfills for older browsers to reduce size. If not necessary.
```