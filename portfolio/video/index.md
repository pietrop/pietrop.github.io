---
layout: page
title: Video
body: theme-base-0f
---


<hr>
     {% for page in site.categories.video %}
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
      <h3 class="icon-film"> <a  href="{{ page.url }}"> {{ page.title }} </a>{% include urlsLinks.html %}</h3>
      <span class="post-date">
      {{ page.date | date_to_string }}
      </span>

<p>{{ page.description }} <p>

<!-- {% if page.tools %}<small> <small> Tools: {{ page.tools | array_to_sentence_string }}.</small></small><br>{% endif  %}

<br> -->
<a  href="{{ page.url }}">
<img class="thumb img-round img-responsive" src="{{ page.image }}"> </a>
      
<br>
      



<a href="{{ page.url }}" class="btn btn-primary btn-xs">
View  &raquo; </a></p>
</div>
   <hr>   
{% endfor %}

