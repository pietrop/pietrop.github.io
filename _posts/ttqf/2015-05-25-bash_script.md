---
layout: post
title:  "Create multiple folders and subfolders from bash script"
date:   2015-05-25 14:09:10
permalink: "/bash_script.html"
description:  "How to create multiple folders in one go with a bash script"
image: /img/bash_script/subfolders.png
image2: /img/bash_script/subfoldersWithImages.png
categories: 
- ttqf
tags:
- bash_script
---


Let's say I want to create a bunch of folders with subfolders, to structure some workspace, but don't want to have to create them all individually, or even to duplicate and rename a template.

As an example, I want to create a folder structure for a number of courses, `GC01,GC02,GC03,GC04,GC05,GC06,GC16,GC18,GC99`  and I want all of them to have the following subfolders inside `readings,notes,past_exam_papers,slides`.

## A bash script in terminal
We can write a bash script that will do just that, first things first,let's try it from terminal:

{% highlight bash %}
$ mkdir -p {GC01,GC02,GC03,GC04,GC05,GC06,GC16,GC18,GC99}/{readings,notes,past_exam_papers,slides}
{% endhighlight %}

Note, that the `touch` comand with the `{` does not allow for spaces in between the words and the `,` comma.

`/` delineates a `folder/subfolder` relation in the comand.

`-p` allows for the folder/subfolder.

This gives me 9 folders, starting with `C01,GC02,GC03,GC04,GC05,GC06,GC16,GC18,GC99`, where each of thse contain 5 subfolders, named `readings,notes,past_exam_papers,slides`.



<div class="image-wrapper">
<a href="{{ page.image}}" data-lightbox="folders " title="folders/subfolders ">
<img class="thumb img-round img-responsive" src="{{ page.image}}" alt="photo" />
</a>
</div>
<br>

## Folders and subfolders vs appending names

if I've had `_` instead of `/` then it would have looked like 

{% highlight bash %}
$ mkdir -p {GC01,GC02,GC03,GC04,GC05,GC06,GC16,GC18,GC99}_{readings,notes,past_exam_papers,slides}
{% endhighlight %}

and there would have been no subfolders, but instead it would have appended the names, with all possible combinations, ie `GC01_readings`,`GC02_readings` etc.. all at the same folder level.

This can be usefull if you append `{1..10}` to the file, that could give them some kind of numbering, and same thing can be done with letters `{A..Z}`. 

perhaps more usefull if you want/need to create a whole bunch of files.

{% highlight bash %}
$ touch {image,pic,still,photo}_{1..100}.txt
{% endhighlight %}

this would give you the following files`image_1.txt, image_2.txt, image_3.txt, image_4.txt etc..`


even more usefull, you could create a folder with that contains a bunch of folders, numbered within a range, all containing another folder, that contains a text file.

{% highlight bash %}
$ mkdir -p images/{100..110}/192x128 | touch images/{100..110}/192x128/index.md
{% endhighlight %}


in this case the main a folder  is `images` and it contains a bunch of folders, numbered within a range from `100..110`, all containing another folder `192x128` , then we use pipe `|` and the `touch` comand to create a file, navigate back through path of directories we just created `images/{100..110}/192x128/`, and create a `index.md` in there.

And where `.md` is a plain text [markdown file](http://en.wikipedia.org/wiki/Markdown).

<div class="image-wrapper">
<a href="{{ page.image2}}" data-lightbox="folders " title="folders/subfolders/file ">
<img class="thumb img-round img-responsive" src="{{ page.image2}}" alt="photo" />
</a>
</div>
<br>

But enough with this digression, back to our bash script.

## Bash Script

We can now write it into a ascript using `vim` in terminal, or any other editor, as long as you give `.sh` extension to the file.

{% highlight bash %}
vim folderSubfoldersScript.sh
{% endhighlight %}


{% highlight bash %}
#!/bin/bash
# A bash script to create folders with subfolders all in one go.

mkdir -p {GC01,GC02,GC03,GC04,GC05,GC06,GC16,GC18,GC99}/{readings,notes,past_exam_papers,slides}

{% endhighlight %}

where `#!/bin/bash` is saying where to find the bash shell to execute the sccript.

to run it you simply write in terminal

{% highlight bash %}
bash folderSubfoldersScript.sh
{% endhighlight %}


## Executable bash script 

if you want to make it into an executable file so that you don't need to write `bash` in front of `folderSubfoldersScript.sh`. Then you just need to use `chmod` to change the file's permissions.

{% highlight bash %}
chmod +x folderSubfoldersScript.sh
{% endhighlight %}

where `+x` makes the file executable.

Now that it's an executable file, to run it from terminal you just write

{% highlight bash %}
./folderSubfoldersScript.sh
{% endhighlight %}

using `./` to run the file.
 
## Sources and Resources

from [Lynda.com up and running with bash script](http://www.lynda.com/Bash-tutorials/Up-Running-Bash-Scripting/142989-2.html)