---
layout: post
title:  "Rails - installing Devise Gem"
date:   2015-05-26 16:35:00
permalink: "/devise.html"
description:  "A quick step by step to install the devise user authentication gem in rails "
published: false
youtube: AAym7UF6Dr0
categories: 
- ttqf
tags:
- rails
---

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/{{page.youtube}}" frameborder="0" allowfullscreen></iframe>
</div>



[Rails girls devise guide](https://guides.railsgirls.com/devise/)


1. add gem 
``gem 'devise' ``

2. bundle install
``bundle install``

3. add devise
``rails g devise:install``

4. ad config for development
inf ``config/environments/development.rb`` add

````ruby
    config.action_mailer.default_url_options = { :host => 'localhost:3000' }
```

5. ad flash notifications

in ``` app/views/layouts/application.html.erb``` above ``<%= yield %>``

`````erb
   <% if notice %>
      <p class="alert alert-success"><%= notice %></p>
    <% end %>
    <% if alert %>
       <p class="alert alert-danger"><%= alert %></p>
     <% end %
````


6. add user  model 
``rails g devise user``

7. update db
``rake db:migrate``

9.update/check routes
i found that ``devise_for :users`` needs to be right under top of the page, like this:

```ruby
    Rails.application.routes.draw do
    devise_for :users

    #some other routes code
    end
`````

10.check if it works
run server (``rails s``) and visit ``https://localhost:3000/users/sign_up ``
you can check rails console (``rails c``) to see if the user has been created i.e. ``User.all``.

11. add links sign in/out/up
see rest of rails guide to add links [here](https://guides.railsgirls.com/devise/)