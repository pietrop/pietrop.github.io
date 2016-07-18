
# Notes on how to use jekyll

## Tags and Categories

### Categories & Portfolio stuff
3 **`Category`**  in `_post` folder `video`, `tech`, `photo`.
**`Category`** `- articles` are the once that land on the `home page`.

#### Tags
`TTQF` section shows all the posts grouped by **`tags`** /topics.

I'll need to add an `image:` in the heading field of the post, so that it gets displayed in the thumbnail field of the preview. ie homepage.
perhaps thses could be in separate img folder.

## Responsive image

use `<div class="image-wrapper">`

```html
<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>
```

![Responsive immage](http://erictoulson.com/2014/01/21/responsive-images-with-jekyll/)

inclusing `image.css` in `public/css/`

<!-- Not sure you need all this code to make all the images responsive, do some test and see if you can get away with less -->

```css
/*image with image wrapper*/

.image-wrapper{
  max-width:90%;
  height:auto;
  position: relative;
  display:block;
  margin:0 auto;
}

.image-wrapper img{
  max-width:100% !important;
  height:auto;
  display:block;
}

/*below */
.img-responsive img{
  max-width:100% !important;
  height:auto;
  display:block;
}

.img-responsive{
  max-width:90%;
  height:auto;
  position: relative;
  display:block;
  margin:0 auto;
}

.btn-custom {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
}
```

## Responsive image with lightbox

````html
<div class="image-wrapper">
	<a href="{{ page.image }}" data-lightbox="aName" title="aName">
		<img src="{{ page.image }}" alt="photo" />
	</a>
</div>
````


you'll need to include [`lightbox.css`][] in your `public/css/` folder.

## Loop through images

if you give images a sequential name, you can use ruby and liquid tag to loop through them rather then having to write the URL one by one

````html
{% for i in (1..15) %}
<div class="image-wrapper">
<a href="{{site.url}}/img/aus/aus{{ i }}.jpeg" data-lightbox="Auschwitz" title="Auschwitz">

<img src="{{site.url}}/img/aus/aus{{ i }}.jpeg" alt="photo" />

</a>

</div>

{% endfor %}
````




## Video responsive

use `<div class="videoWrapper">`

### Vimeo
```html
<div class="videoWrapper">
<iframe src="//player.vimeo.com/video/{{page.vimeo}}?title=0&amp;byline=0&amp;portrait=0" width="560" height="315" frameborder="0" ></iframe>
</div>
```

### Youtube

<div class="videoWrapper">
<iframe width="560" height="315" src="//www.youtube.com/embed/{{page.youtube}}" frameborder="0" allowfullscreen></iframe>
</div>

## link

Using `[text](www.url.com){:target="_blank"}` equivalent to open in new tab.

```
[Speaker diarization  (Lium - same library used by BBC)](http://www-lium.univ-lemans.fr/diarization/doku.php){:target="_blank"}
```

## Choice of icons

[elusive icons](http://elusiveicons.com/icons/)

## Order by tag how to
[order by tag](http://www.minddust.com/post/tags-and-categories-on-github-pages/)


## Draft
using `published: false` in yalm header you can treat some posts as drafts.

<!-- ## Can also setup a draft true  field
[how to here](https://gist.github.com/carlo/2870636)
`draft: true` in head of post and something like this in html of index or where posts are displayed

```ruby
{% for post in site.posts %}
  {% unless post.draft %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endunless %}
{% endfor %}
```
 -->



---

**Hyde 1.x has been deprecated for the upcoming Hyde 2.0, [available here](https://github.com/poole/hyde).**


## [Hyde](http://andhyde.com)

An elegant open source, mobile first theme for [Jekyll](https://github.com/mojombo/jekyll). It includes lightweight styles and placeholder content to get you up and running with a simple blog in no time.

![Hyde screenshot](https://f.cloud.github.com/assets/98681/1818325/da6489d8-6ff5-11e3-9b4f-c56b92013e9a.png)


## Usage

### 1. Install Jekyll

Hyde is built for use with Jekyll, so naturally you'll need to install that. On Macs, it's rather straightforward:

```bash
$ gem install jekyll
```

**Windows users:** Windows users have a bit more work to do, but luckily [@juthilo](https://github.com/juthilo) has your back with his [Run Jekyll on Windows](https://github.com/juthilo/run-jekyll-on-windows) guide.

You may also need to install Pygments, the Python syntax highlighter for code snippets that plays nicely with Jekyll. Read more about this [in the Jekyll docs](http://jekyllrb.com/docs/templates/#code_snippet_highlighting).

### 2a. Quick start

To help anyone with any level of familiarity with Jekyll quickly get started, Hyde includes everything you need for a basic Jekyll site. To that end, just download Hyde and start up Jekyll.

### 2b. Roll your own Jekyll site

Folks wishing to use Jekyll's templates and styles can do so with a little bit of manual labor. Download Hyde and then copy what you need (likely `_layouts/`, `*.html` files, `atom.xml` for RSS, and `public/` for CSS, JS, etc.).

### 3. Running locally

To see your Jekyll site with Hyde applied, start a Jekyll server. In Terminal, from `/hyde` (or whatever your Jekyll site's root directory is named):

```bash
$ jekyll serve
```

Open <http://localhost:4000> in your browser, and voilà. You're done.


## Options

Hyde includes a few options, typically applied via classes on the `<body>` element.

### Themes

As of v1.1, Hyde ships with optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). In Hyde, a theme simply changes the sidebar's background color and the color of links within blog posts. Here's the red theme in action:

![Hyde in red](https://f.cloud.github.com/assets/98681/1818326/da64f56c-6ff5-11e3-9643-7d0c18157dec.png)

There are eight themes available at this time.

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, add any one of the available theme classes to the `<body>` element like so:

```html
<body class="theme-base-08">
  ...
</body>
```

To create your own theme, look to the Themes section of [Hyde's CSS](https://github.com/mdo/hyde/blob/master/public/css/hyde.css). Copy any existing theme (they're only a few lines of CSS), rename it, and change the provided colors.

### Reverse layout

![Hyde with reverse layout](https://f.cloud.github.com/assets/98681/1818324/da6473f8-6ff5-11e3-9315-692e639fb5c7.png)

Hyde's page orientation can be reversed with a single class.

```html
<body class="layout-reverse">
  ...
</body>
```


## Author

**Mark Otto**
<https://github.com/mdo>
<https://twitter.com/mdo>


## License

Open sourced under the [MIT license](LICENSE.md).

<3



<!-- https://stackoverflow.com/questions/35167549/jekyll-dependency-error-when-upgrading-from-2-x-to-3-x

bundle install

bundle exec jekyll serve -->
