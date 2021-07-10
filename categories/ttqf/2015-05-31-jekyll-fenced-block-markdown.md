---
layout: post
title:  "use fenced code blocks in jekyll"
date:   2015-05-31 17:02:00
permalink: "/jekyll-fenced-block.html"
description:  "A quick step by step how to use fenced code blocks in jekyll instead of liquid tags"
published: false
youtube:
categories:
- ttqf
tags:
- markdown
---

## Why?

First, thing first, why? I use markdown a lot, pretty much instead of using word, I write in [markdown][mark] and export mostly into `rtf`, `.docx`, or `.pdf` using [pandoc][pandoc] (blog post on this workflowto come soon), and being able to just draft something, without having to think about whether I need to use liquid tags or fended blocks, depending on whether I will then publish it onto my [jekyll site][jek] (jekyll is a static site generator).

So decided to install [a plugin from the jekyll site][plugin] to enable it, but it wasn't quiet working, enche the post here.

## Fenced code blocks and liquid tags
Let's look at how to use fenced code blocks instead of liquid tags in jekyll.
But first, what's what?

These are liquid tags and their default way for jekyll to display code with syntax hilight:

<hr>
{% raw %}
{% highlight ruby %}   
print "hello world"   
{% endhighlight %}   
{% endraw %}

these are fenced code blocks
<hr>

<p>```ruby</p>   
<p>print "hello world" </p>  
<p>```</p>   
<hr>
and both would render the code like this

```ruby
print "hello world"
```



## Quick install

### 1.gem install redcarpet

in terminal:

```bash
gem install redcarpet
```

### 2.add redcarpet plugin in your jekyll project.

Then you need to add `redcarpet2` plugin in your jekyll project. which as simple as saving [redcarpet2_markdown.rb](https://github.com/nono/Jekyll-plugins) in the `_plugins` folder(if you don't have the folder, just create one and remember te `_`).

```ruby
require 'fileutils'
require 'digest/md5'
require 'redcarpet'
require 'albino'

PYGMENTS_CACHE_DIR = File.expand_path('../../_cache', __FILE__)
FileUtils.mkdir_p(PYGMENTS_CACHE_DIR)

class Redcarpet2Markdown < Redcarpet::Render::HTML
  def block_code(code, lang)
    lang = lang || "text"
    path = File.join(PYGMENTS_CACHE_DIR, "#{lang}-#{Digest::MD5.hexdigest code}.html")
    cache(path) do
      colorized = Albino.colorize(code, lang.downcase)
      add_code_tags(colorized, lang)
    end
  end

  def add_code_tags(code, lang)
    code.sub(/<pre>/, "<pre><code class=\"#{lang}\">").
         sub(/<\/pre>/, "</code></pre>")
  end

  def cache(path)
    if File.exist?(path)
      File.read(path)
    else
      content = yield
      File.open(path, 'w') {|f| f.print(content) }
      content
    end
  end
end

class Jekyll::MarkdownConverter
  def extensions
    Hash[ *@config['redcarpet']['extensions'].map {|e| [e.to_sym, true] }.flatten ]
  end

  def markdown
    @markdown ||= Redcarpet::Markdown.new(Redcarpet2Markdown.new(extensions), extensions)
  end

  def convert(content)
    return super unless @config['markdown'] == 'redcarpet2'
    markdown.render(content)
  end
end

```

### 3.change config file
then in your config `_config.yml` file you need to add:

```ruby
markdown: redcarpet
redcarpet:
  extensions: ["no_intra_emphasis", "fenced_code_blocks", "autolink", "strikethrough", "superscript"]

```

...and your done.

## End notes
I took most of these installation steps are taken from [stack overflow][stack] however there the sudgestion was to write in the config file `markdown: redcarpet2` and it wasn't working for me, so I found that [it has been raised elsewhere][elsewhere] that you can just write `markdown: redcarpet` and it works just fine.

Also, I've noticed that with this set up you can use both liquid tags and fenced blocks.


## Updated
Github does nto support redcarpet anymore, uses kramdown by the default so I followed this to update and retain same settings described above.

"[Updating from redcarpet and Pygments to Kramdown and Rouge on Github Pages](https://idratherbewriting.com/2016/02/21/bug-with-kramdown-and-rouge-with-github-pages/)"

In a nutshell

in `_config.yml` change this

```yml
highlighter: pygments
markdown: redcarpet
redcarpet:
  extensions: ["no_intra_emphasis", "fenced_code_blocks", "tables", "with_toc_data"]
```
to this

```yml
highlighter: rouge
markdown: kramdown
kramdown:
  input: GFM
  auto_ids: true
  syntax_highlighter: rouge
```

<!-- Links -->

[jek]:https://jekyllrb.com/
[stack]:https://stackoverflow.com/questions/13464590/github-flavored-markdown-and-pygments-highlighting-in-jekyll
[mark]:https://daringfireball.net/projects/markdown/
[elsewhere]:https://github.com/clayallsopp/rubymotion-tutorial/issues/30
[plugin]:https://github.com/nono/Jekyll-plugins
[pandoc]:https://pandoc.org/
