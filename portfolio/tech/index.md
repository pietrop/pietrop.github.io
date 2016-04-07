---
layout: page
title: Tech
body: theme-base-0c
---

<hr>
     {% for page in site.categories.tech %}

<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
      <h3 class="icon-laptop"> <a  href="{{ page.url }}"> {{ page.title }} </a>  {% include urlsLinks.html %} </h3> 
     
      <span class="post-date">
      {{ page.date | date_to_string }}
      </span>
      
<p>{{ page.description }} <p>
  
       <a  href="{{ page.url }}">
      <img class="thumb img-round img-responsive" src="{{ page.image }}"> </a>
      <small> <b>{{ page.duration }}</b></small>
      <br>
       
    
         {% if page.tools %}<small>  {{ page.tools | array_to_sentence_string }}.</small><br>{% endif  %} 
       <a  href="{{ page.url }}" class="btn btn-primary btn-xs">
            View  &raquo;
          </a></p>
</div>
  <hr>    
{% endfor %}