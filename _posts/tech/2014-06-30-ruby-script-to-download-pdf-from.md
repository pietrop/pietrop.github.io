---
layout: portfolioelementTech
title: issu.com pdf downloader
date: '2014-06-29T19:28:00.001+01:00'
author: Pietro Passarelli
permalink: "/issuu.html"
modified_time: '2014-06-29T19:34:37.387+01:00'
thumbnail: http://1.bp.blogspot.com/-Bu2Bw7_tHjs/U683ZFxKIfI/AAAAAAAAFdM/e_3_4rqBQSc/s72-c/Screen+Shot+2014-06-28+at+22.25.43.png
blogger_id: tag:blogger.com,1999:blog-3556210610913027832.post-8186486077367353300
blogger_orig_url: http://ttqf.blogspot.com/2014/06/ruby-script-to-download-pdf-from.html
description: a ruby script to download pdfs from issu.com, when the download option has been disabled.
image: http://1.bp.blogspot.com/-Bu2Bw7_tHjs/U683ZFxKIfI/AAAAAAAAFdM/e_3_4rqBQSc/s1600/Screen+Shot+2014-06-28+at+22.25.43.png
github: pietrop/issuu.com-downloader
tags:
- ruby
category:
- articles
- tech
---


**Problem**: I wanted to read the [Sheffield DocFest "Decision Makers Guide 2014"](http://issuu.com/swroblewska/docs/j64913_sheff_doc_fest_inner_whole_s) but can't stand having to read of `issu.com`, just wanted a nice downloadable pdf, but the pdf download option that is generally under the share button was disabled.


**Solution**: I decide to see if I could extract the images that make up the flash object of the site and combine them into a pdf.
First thing first identifying the element id. clicking on white part of the page and inspecting the page in chrome, I found the `id=readerreader`





<div class="image-wrapper">
    <img src="http://1.bp.blogspot.com/-Bu2Bw7_tHjs/U683ZFxKIfI/AAAAAAAAFdM/e_3_4rqBQSc/s1600/Screen+Shot+2014-06-28+at+22.25.43.png" alt="{{ include.description }}" />
</div>

and under the object `type="application/x-shockwave-flash"` I found the `documentId=140601160255-3a4c0f75ec731801ef369f5000f03104`

Looking on stack overflow I worked out the following URL: `http://image.issuu.com/140601160255-3a4c0f75ec731801ef369f5000f03104/jpg/page_5.jpg` , where `140601160255-3a4c0f75ec731801ef369f5000f03104` is the id of the article, gives you each page as a jpg file that builds up the online magazine on `issue.com` named with an incremental count.


And what follows is the code I wrote in ruby and run from terminal

{% highlight powershell %}
$ruby issuu_downloader.rb
{% endhighlight %}

I used the `Mechanize Gem` to download the images, and the `prawn gem` to combine them into a pdf.


{% highlight ruby %}
require 'mechanize'
require 'prawn'

########1.Looping through the page to download them
for i in 1..104
  print "downloading\tpage n #{i}\n"
agent = Mechanize.new
link = "http://image.issuu.com/140601160255-3a4c0f75ec731801ef369f5000f03104/jpg/page_#{i.to_s}.jpg"
agent.get(link).save "page_#{i.to_s}.jpg"
print "downloaded\tpage n #{i}\n"
end

print "images from 1 to 104 downloaded as jpg\n"

########2. Combine all the images into a pdf

Prawn::Document.generate("DocFest_Decision Makers Guide 2014.pdf", :page_layout => :portrait) do |pdf|
   # pdf.text("Hello Prawn!")

(1..104).each do |i|
    pdf.image "page_#{i.to_s}.jpg", :at => [0,750], :width => 530
pdf.start_new_page
end#end of loop
end#end of prawn

{% endhighlight %}

Let's just break it down in pseudo code for a second, as we can see it articulates into two parts

1. Loop through page numbers substituting them in the URL, and save locally.
(after all without this script this is what I would have done manually)

2. combine all the downloaded images into a pdf
(again I would have probably done this with preview or automator on os x "manually"


## 1. Downloading the Images

Let's look at the first part first, downloading the images.

{% highlight ruby %}
require 'mechanize'

########Looping through the page to download them
for i in 1..104
  print "downloading\tpage n #{i}\n"
agent = Mechanize.new
link = "http://image.issuu.com/140601160255-3a4c0f75ec731801ef369f5000f03104/jpg/page_#{i.to_s}.jpg"
agent.get(link).save "page_#{i.to_s}.jpg"
print "downloaded\tpage n #{i}\n"
end

{% endhighlight %}

print "images from 1 to 104 downloaded as jpg\n"

I knew the pages where 104, so I fought a loop would have been a good fit.

{% highlight ruby %}
for i in 1..104
   #change the URL with string interpolation #{i} to change the page number
end 
{% endhighlight %}

I then added the mechanise gem at the top with

{% highlight ruby %}
require 'mechanise'
{% endhighlight %}

within the loop I created a new mechanise object and assigned it to a variable agent

{% highlight ruby %}
agent = Mechanize.new
{% endhighlight %}

and also within the loop assigned the link to a variable link, where i is the number in the loop, and I've added a .to_s method to convert it to string to avoid any problem in the parsing of the URL.

{% highlight ruby %}
link = "http://image.issuu.com/140601160255-3a4c0f75ec731801ef369f5000f03104/jpg/page_#{i.to_s}.jpg"
{% endhighlight  %}

with these two key elements in place, I went about using the mechanise method get on the link, and then saving it, giving it the page name, using the string interpolation of the loop number for the page name.

{% highlight ruby %}
"page_#{i.to_s}.jpg"
agent.get(link).save "page_#{i.to_s}.jpg"
{% endhighlight  %}

I then added a couple of comments to print out what was going on to get some feedback in terminal while the program was running, and here it is this first part of the problem solved.

{% highlight ruby %}
require 'mechanize'

########Looping through the page to download them
for i in 1..104
  print "downloading\tpage n #{i}\n"
agent = Mechanize.new
link = "http://image.issuu.com/140601160255-3a4c0f75ec731801ef369f5000f03104/jpg/page_#{i.to_s}.jpg"
agent.get(link).save "page_#{i.to_s}.jpg"
print "downloaded\tpage n #{i}\n"
end

print "images from 1 to 104 downloaded as jpg\n"
{% endhighlight  %}

## 2. Combining images into one pdf

Then for the second part of the problem, combining the images into a pdf I decided to use the gem prawn.
require 'prawn'
and the idea here is that first you generate a pdf, setting, page layout as portrait,

{% highlight ruby %}
Prawn::Document.generate("DocFest_Decision Makers Guide 2014.pdf", :page_layout => :portrait) do |pdf|
{% endhighlight %}

then I looped through the page number range, adding the jpeg files I saved in the first half of the problem to the pdf object I am creating.

{% highlight ruby %}
(1..104).each do |i|
    pdf.image "page_#{i.to_s}.jpg", :at => [0,750], :width => 530
{% endhighlight %}

after each page is created I used the method `start_new_page` on the pdf object.
`pdf.start_new_page`
And here it is the second half of the solution all together.

{% highlight ruby %}
require 'prawn'

########to combine all the images into a pdf

Prawn::Document.generate("DocFest_Decision Makers Guide 2014.pdf", :page_layout => :portrait) do |pdf|

(1..104).each do |i|
    pdf.image "page_#{i.to_s}.jpg", :at => [0,750], :width => 530
pdf.start_new_page
end#end of loop
end#end of prawn
{% endhighlight %}

### Generalising the solution

Last but not least I decided to change the code so that if I want to use it for another magazine on issue.com I can get the prompt from the terminal to add magazine name, page count, and document-id and therefore generalised the solution to the initial problem.
The resulting code is as follow (also on [github](https://github.com/pietrop/issuu.com-downloader)):

{% highlight ruby %}
require 'mechanize'
require 'prawn'
prompt = "> "

puts "What is the name of the magazine you'd like to download from issuu.com? ps: this will be the name of your pdf file\n"
print prompt
magazine_name = gets.chomp


puts "How many pages does it have?\n ie 104\n"
print prompt
page_number = gets.chomp

puts "document Id? \n to get the 'document-id' inspect page in chrome,\n search for document-id and paste here,\n ie 140601160255-3a4c0f75ec731801ef369f5000f03104\n"
print prompt
document_id = gets.chomp

for i in 1..page_number.to_i
  print "downloading\tpage n #{i}\n"
  agent = Mechanize.new
  link = "http://image.issuu.com/#{document_id.to_s}/jpg/page_#{i.to_s}.jpg"
  agent.get(link).save "page_#{i.to_s}.jpg"
  print "downloaded\tpage n #{i}\n"
end

print "images from 1 to #{page_number.to_s} downloaded as jpg\n"

########to combine all images into a pdf

Prawn::Document.generate("#{magazine_name}.pdf", :page_layout => :portrait) do |pdf|

  for i in 1..page_number.to_i
      pdf.image "page_#{i.to_s}.jpg", :at => [0,750], :width => 530
      pdf.start_new_page
  end#end of loop
end

print "images from 1 to #{page_number.to_s} combined into pdf \n"

########to delete all images, once pdf as been created, to clean up a bit
for i in 1..page_number.to_i
  File.delete("page_#{i.to_s}.jpg")
end#end of prawn

print "images from 1 to #{page_number.to_s} deleted \n"
# print "your pdf #{magazine_name}.pdf is in: \n #{Dir.pwd}"

{% endhighlight %}