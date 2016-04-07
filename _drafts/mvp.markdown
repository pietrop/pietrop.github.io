---
layout: post
title:  "The Making of an MVP: Simple Invoice Web App"
date:   2013-09-01 14:09:10
categories: Articles
---
<section id="table-of-contents" class="toc">
  <header>
    <h3>Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

<hr>
MVP, minimum variable product. more then just mockups, more then just a slack front end, it needs to have the core essential features(only) and it needs to work.

# MVC inside out

## REST and CRUD
REST - HTTP verbs match CRUD in controller, and we therefore thing of your model as resources, that can be created, read, updated and deleted.

This is all very well but, what does this mean in practice?

Let's think of implementing sessions for users to sing and out for example, how would we frame that as resources that can be CRUD?

We could use devise for that [...]


### Modelling users


[diagram view of different possibilities, with table and ID field, and foreign key field]





### Final modelling option



A user has_many invoices. Invoice belongs_to user

Invoices has_many notes, services,



A client has_many invoices.



a user has_one bank account

a invoice has_one bank account through: :user





### The MVC Overview

CRUD,





### MVC in practice for Invoice resources

Using that example, prezi type of


<hr>
# The find_or_create_by ActiveRecord method





<hr>
# Devise, easy and secure authentication





<hr>
# Bootstrap, install on Rails


# Bootstrap, layout with Divs and rows






## Bootstrap and CSS templates - Cosmo


<http://bootswatch.com/cosmo/>

<http://bootswatch.com>



# CSS Tweaks 


### Background image [alex + seva css tip + explanation code]



# CSS media print 


setting print friendly setting, a mvp shortcut to create a MVP.






# deploy to Heroku

  { %raw }
    $ git push heroku master
  { %endraw }


[Read more about deploying rails on heroku](<https://devcenter.heroku.com/articles/getting-started-with-rails4>)


if you need to reset heroku db

  { %raw }
   $ heroku pg:reset DATABASE --confirm YOUR_APP_NAME
   $ heroku run rake db:setup
   $ heroku restart
   $heroku open
  { %endraw }


To update CSS, HTML or other assets changes onto heroku

{ %raw }
  $ rake assets:precompile
  $ git add .
  $ git commit -am "description goes here"
  $ git push heroku master 
  $ heroku open
{ %endraw }


<hr>

# add Devise e-mail verification 

http://blog.blazingcloud.net/2011/01/08/devise-authentication-in-rails-3/


### add confirmable

add confirmable to user model


{% highlight ruby %}

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # 
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable, :token_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable
  has_many :invoices #, dependant: :destroy
  #  has_many :notes , :through :invoices
 #  has_many :services, :through :invoices

 has_one :bank

 has_many :clients, through: :invoices

 #  has_many :clients, :through :invoices
  
  validates :name, presence: true
  validates :last_name, presence: true
  validates :address, presence: true
  validates :email, presence: true
 

  validates :phone, presence: true, numericality: true
end

{% endhighlight %}


### migration to add confirmation_token  

{% raw %}
$ rails migration [how to set migration from terminal?]
{% endraw %}


{% highlight ruby %}

class AddConfirmableToDevise < ActiveRecord::Migration
  # Note: You can't use change, as User.update_all with fail in the down migration
  def self.up
    add_column :users, :confirmation_token, :string
    add_column :users, :confirmed_at, :datetime
    add_column :users, :confirmation_sent_at, :datetime
    # add_column :users, :unconfirmed_email, :string # Only if using reconfirmable
    add_index :users, :confirmation_token, :unique => true
    # User.reset_column_information # Need for some types of updates, but not for update_all.
    # To avoid a short time window between running the migration and updating all existing
    # users as confirmed, do the following
    User.update_all(:confirmed_at => Time.now)
    # All existing user accounts should be able to log in after this.
  end

  def self.down
    remove_column :users, :confirmation_token, :confirmed_at, :confirmation_sent_at
    # remove_column :users, :unconfirmed_email # Only if using reconfirmable
  end
end


{% endhighlight %}


Run migration.

  {% raw %}
    $ rake db:migrate
  {% endraw %}

reset database


  {% raw %}
    $ rake db:reset
  {% endraw %}

# config 

## in dev enviroment 

https://devcenter.heroku.com/articles/config-vars#local-setup

https://devcenter.heroku.com/articles/procfile#developing-locally-with-foreman

  {% raw %}
    config/enviroments/development.rb 
  {% endraw %}

add [check if code is it or if it's more?]


{% highlight ruby %}

config.action_mailer.raise_delivery_errors = true 
config.action_mailer.default_url_options = { :host => 'localhost:3000' }

ActionMailer::Base.smtp_settings = {
:address => 'smtp.gmail.com',
:port => 587,
:enable_starttls_auto => true, 
:domain => 'gmail.com',
:authentication => :plain,
:user_name => ENV["GMAIL_USERNAME"],
:password => ENV["GMAIL_PASSWORD"]
}

{% endhighlight %}

Use development log to find token URL and verify it works.



"A message with a confirmation link has been sent to your email address. Please open the link to activate your account."


### adding ENV Veriable
To make it more secure and hide your password and e-mail when sharing code on github or putting it up on heroku.



before 

{% highlight ruby %}

  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.default_url_options = {:host => 'simpleinvoice.herokuapp.com'}

ActionMailer::Base.smtp_settings = {
:address => 'smtp.gmail.com',
:port => 587,
:enable_starttls_auto => true, 
:domain => 'gmail.com',
:authentication => :plain,
:user_name => your-email@gmail.com,
:password => your-password
}

{% endhighlight %}


after

{% highlight ruby %}

  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.default_url_options = {:host => 'simpleinvoice.herokuapp.com'}

ActionMailer::Base.smtp_settings = {
:address => 'smtp.gmail.com',
:port => 587,
:enable_starttls_auto => true, 
:domain => 'gmail.com',
:authentication => :plain,
:user_name => ENV["GMAIL_USERNAME"],
:password => ENV["GMAIL_PASSWORD"]
}

{% endhighlight %}


you can read more about [Rails ENV](<http://railsapps.github.io/rails-environment-variables.html>) here.


#### set environment variable locally , UNIX / Os x

TO set environment variable locally, in terminal to try it out:

    {% raw %}
      $ export GMAIL_USERNAME="your-email@gmail.com"
      $ echo $GMAIL_USERNAME
      your-email@gmail.com
    {% endraw %}

Uow would you do same for password ENV? yeah, you guessed it, same.

    {% raw %}
      $ export GMAIL_PASSWORD="your-password"
      $ echo $GMAIL_PASSWORD
      your-password
    {% endraw %}


if you made a mistake you can delete/revert back using unset

  {% raw %}
    $ unset GMAIL_USERNAME
    $ echo $GMAIL_USERNAME
  {% endraw %}


However if you are done playing a round and want to actually save the ENV so that they'll be aviable on your next session, you can save them in bashrc
 
 in terminal
  {% raw %}
$ vim ~/.bashrc
  {% endraw %}

ad adding the two lines in ~/.bashrc

  {% raw %}
     $ export GMAIL_USERNAME="your-email@gmail.com"
     $ export GMAIL_PASSWORD="your-password"
  {% endraw %}

Read more about [changing ENV](<http://cli.learncodethehardway.org/book/ex22.html>) or [exploring ENV](<http://cli.learncodethehardway.org/book/ex21.html>)


#### set environment variable on Heroku. 


Read more about how to [set ENV on heroku](<https://devcenter.heroku.com/articles/config-vars>) on deployment


if you need to reset the database:
  {% raw %}
    $ rake db:migrate:reset 
  {% endraw %}

  {% raw %}
    $  rake db:reset
  {% endraw %}


{% raw %}

$ heroku config:add GMAIL_USERNAME=myname@gmail.com
$ heroku config:add GMAIL_PASSWORD=yourpassword

  {% endraw %}

# making a pre populated e-mail link

in erb 

{% highlight ruby %}

  <%= mail_to @client.email, @client.email, :bcc => @user.email,
         :subject => "Invoice", :body => "Dear #{@client.contact_name}, \n I'm writing regarding the last invoice (Invoice number #{@client.invoices.order("number desc").last.number} ) of the #{@client.invoices.order("number desc").last.date.strftime("%d-%h-%y" )}, \n for the period between the #{@client.invoices.order("number desc").last.services.order("date").first.date.strftime("%d-%h-%y" )} and the #{@client.invoices.order("number desc").last.services.order("date").first.date.strftime("%d-%h-%y" )}. \n \n I was wondering if you could look into weather it is overdue. \n \n  Best \n \n  #{@user.name}" %>

{% endhighlight %}


in html

{% highlight html %}

<a href="mailto:your-email@gmail.com?Subject=Tips%20and%20Tricks&body=Hi Pietro, %0D%0A Was reading your Blog {{ site.title }}, and I've got a question..." class="author-social" target="_blank"><i class="icon-mail"></i> e-mail</a>

{% endhighlight %}

<a href="mailto:your-email@gmail.com?Subject=Tips%20and%20Tricks&body=Hi Pietro, %0D%0A Was reading your Blog {{ site.title }}, and I've got a question..." class="author-social" target="_blank"><i class="icon-mail"></i> e-mail</a>



to add a space use  %20
to add a new line use   %0D%0A


## calculate highest rate 

Active record, 

in model 
made :client has_many :services,  through: :invoices

and invoice belong to client 

to then being able to write this:

{% highlight ruby %}
  <p>
    Highest Rate: <strong> £ <%= @client.services.order('rate DESC').first.rate %></strong>, <%= @client.services.order('rate DESC').first.unit_type %> 
  </p>
{% endhighlight %}

- it orders the services for the client, by rate and sorts our the ret in Descending order(highest number first) 
- by then picking the .first element of that order/list 
- I can ask for the rate of that element.


I also did the same for the lowest rate by using ASC instead of DESC.
Ascending(lowest number first)


possible Variation: if instead I wanted the first 5, instead of .first I would have .limit(5)


# Other


step2 (for form,selection)

in line editing with JQuery.








