---
layout: post
title: "Simple Invoice"
description: "A simple invoicing application for freelancers"
permalink: /simpleInvoice.html
image: /img/simpleinvoice/1-simple_invoice-welcome-page.jpeg
image2: /img/simpleinvoice/2-simple_invoice-invoices-View.jpeg
image3: /img/simpleinvoice/3-simple_invoice-invoiceclient-view.jpeg
image4: /img/simpleinvoice/4-simple_invoice-invoice-View.jpeg
image5: /img/simpleinvoice/5-simpleinvoice_export-PDF.jpeg
imagemakers1: /img/simpleinvoice/makers/makerspres2.jpeg
imagemakers2: /img/simpleinvoice/makers/makerspres1.jpeg
github: pietrop/simpleinvoice 
tech: ['Ruby on Rails', 'Bootstrap','HTML','CSS', 'Heroku', 'Git', 'GitHub','Heroku']
appurl: https://simpleinvoice.herokuapp.com
link: https://simpleinvoice.herokuapp.com
open_source: true
categories: 
- tech
tags: []
---

As the name sudgests It's a simple invoicing application to keep track of due payments, and create pdfs to e-mail to clients with ease.

I used [ruby on rails](<https://edgeguides.rubyonrails.org>), [bootstrap](<https://getbootstrap.com>), and the theme [cosmo from bootswatch](<https://bootswatch.com/cosmo/>).


<div class="image-wrapper">
<a href="{{ page.image}}" data-lightbox="simpleinvoice" title="simple invoice">
<img class="thumb img-round img-responsive" src="{{ page.image}}" alt="photo" />
</a>
</div>

<br>
You can view all of the invoices, and see at a glance, outstanding payments, and overdue once.

The overdue field is calculated adding 30 days on the invoice date, and when Time.now is 30 days over the invoice date it is marked as overdue automatically.

<div class="image-wrapper">
<a href="{{ page.image2}}" data-lightbox="simpleinvoice" title="simple invoice">
<img class="thumb img-round img-responsive" src="{{ page.image2}}" alt="photo" />
</a>
</div>


You can also view the invoices by clients.

<div class="image-wrapper">
<a href="{{ page.image3}}" data-lightbox="simpleinvoice" title="simple invoice">
<img class="thumb img-round img-responsive" src="{{ page.image3}}" alt="photo" />
</a>
</div>


a new invoice, pulls the default details for the client, user, and bank account so that you only have to add the services and your good to go.

When creating the invoice to associate it with a client, it uses Active record, find or create method, this either associate it with existing client or creates a new instance.


I tryed to make the layout of the invocie looks as closely as possible to an actual "word template invoice", which is what most people use.


<div class="image-wrapper">
<a href="{{ page.image4}}" data-lightbox="simpleinvoice" title="simple invoice">
<img class="thumb img-round img-responsive" src="{{ page.image4}}" alt="photo" />
</a>
</div>

and this is what the `pdf` export done using [CSS print friendly settings](https://www.smashingmagazine.com/2011/11/24/how-to-set-up-a-print-style-sheet/) looked like, again tryed to keep as much consistency as possible with the screen version.

<div class="image-wrapper">
<a href="{{ page.image5}}" data-lightbox="simpleinvoice" title="simple invoice">
<img class="thumb img-round img-responsive" src="{{ page.image5}}" alt="photo" />
</a>
</div>


<hr>

Some stills form my Presentation at Markers Academy:

<div id="fb-root" align="left"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-post" data-href="https://www.facebook.com/photo.php?fbid=10151826917536438&amp;set=a.10150307723301438.387722.512286437&amp;type=1" data-width="550"><div class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/photo.php?fbid=10151826917536438&amp;set=a.10150307723301438.387722.512286437&amp;type=1">Post</a> by <a href="https://www.facebook.com/pietro.passarelli">Pietro Passarelli</a>.</div></div>

<br>

Having no coding expirience prior to the bootcam, overall it took about 2 weeks to put the app togethere, out of which I think is fair to say a round one and half to come to terms with rails and the remaining time to put togethere the app.

<div  align="left">
<blockquote class="twitter-tweet"><p>Cohort graduation project #2 by <a href="https://twitter.com/pietropassarell">@pietropassarell</a> <a href="https://twitter.com/search?q=%23makersacademy&amp;src=hash">#makersacademy</a> <a href="https://t.co/bs54G7DU57">pic.twitter.com/bs54G7DU57</a></p>&mdash; mindfulcoder (@MindfulCoder) <a href="https://twitter.com/MindfulCoder/statuses/373465381916381184">August 30, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>


<div id="fb-root" align="left"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-post" data-href="https://www.facebook.com/photo.php?fbid=10151826917036438&amp;set=a.10150307723301438.387722.512286437&amp;type=1" data-width="550"><div class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/photo.php?fbid=10151826917036438&amp;set=a.10150307723301438.387722.512286437&amp;type=1">Post</a> by <a href="https://www.facebook.com/pietro.passarelli">Pietro Passarelli</a>.</div></div>






