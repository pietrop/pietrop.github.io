---
layout: post
title:  "Php - installing Laravel MVC Framework"
date:   2015-05-31 16:38:00
permalink: "/laravel-installation.html"
description:  "A quick step by step to install Laravel php MVC framework"
youtube: 
image: 
categories: 
- articles
tags:
- php
---

Following a long the [Lynda.com Essential Training Laravel 4][Lynda.com Essential Training Laravel 4] I found that the given instruction to install laravel did not work for me.

I found some that did in this [blog post](http://jacurtis.com/easily-install-mcrypt-php-mavericks-yosemite/), I think it was mostly due to the fact that on lynda.com they refer you to another course on installing the [php stack][php stack], and if you don't have `php 5.6` previous versions require `mycript` laravel dependencie to be installed separatly, and that turned out to be rather tedius.

So here is a short step by stem that worked for me on OS X Yosemite.

## 1.Install Composer

[Install composer](https://getcomposer.org/download/) to then install php laravel.

 using `curl` in terminal

```php
 curl -sS https://getcomposer.org/installer | php
```

To user composer globally,  you'll need to move it to it's own folder in user local bin.

```bash
sudo mv composer.phar /usr/local/bin/composer
```

`phar` stands for php archive, and we are creating the `composer` folder as part of this comand. You'll be prompted for password.

## 2.install php 5.6

```bash
curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6
```

this installs new php 5.6, which comes with `mycript` which you will need for `laravel`.

add this to `.bash_profile` to tell the system where you installed the new PHP.

```bash
vim .bash_profile
```

and then write the followin in `.bash_profile` which tells your system which php to use:

```bash
#PHP location
export PATH=/usr/local/php5/bin:$PATH
```

restart terminal.



## 3.test laravel

to setup a new laravel project

```bash
composer create-project laravel/laravel=4.2.0 /Users/urUserName/Desktop/laravelTest --prefer-dist
```

where `/Users/yourUserName/Desktop/laravelTest` is the path where you want your project folder to be.

and finally to launch laravel, `cd` into that folder and run from terminal:

```bash
php artisan serve
```

<!-- links -->

[php stack]:http://www.lynda.com/MySQL-tutorials/PHP-MySQL-Essential-Training/119003-2.html
[Lynda.com Essential Training Laravel 4]:https://www.google.it/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCIQFjAA&url=http%3A%2F%2Fwww.lynda.com%2FLaravel-tutorials%2FLaravel-4-Essential-Training%2F181242-2.html&ei=OzVrVdKHKIizswGCwYKIAQ&usg=AFQjCNGFzx8u1HwwxAGHDAg3NxBFAnrW_w&bvm=bv.94455598,d.bGg 

