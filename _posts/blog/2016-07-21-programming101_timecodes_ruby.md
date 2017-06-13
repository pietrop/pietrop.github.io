---
layout: post
title: "Programming 101 with Ruby"
image: 
date: '2016-07-21T01:30:00.000+01:00'
description: "The basics of programming with ruby while making a timecodes converter"
published: false
permalink: "/programming101rubyTimecodes.html"
categories:
- blog
tags:
---


<!-- # Programming 101 with Ruby -->


While at a conference a film-maker friend asked me to teach him to code, and we only had about 20min. What follows is a practical an overview of programming inspired by that first attempt. 

We will make a simple script to work with timecodes, and convert from `hh:mm:ss:ms` format to seconds. as an excuse to learn some key programming concepts, ideas and the thinking behind a certain kind of problem solving used by developers. We'll use the ruby programming language. But we are trying to stay at a higher level and not get to boged down by the syntax.

## What you need
First thing first let’s get you setup. 

### Terminal
The terminal is a text interface that allows you to navigate and send commands to your computer. 

Developers use it because typing is faster then moving the mouse a round. 

Open the terminal 
<!—- Navigate to application folder 
click on 

Or just make giff
-—> 


if you are old enough to remember back in the days when DOS was popular is the same kind of idea.

![DOS Screenshot]()


### Sublime Text 
You can use any text editor, but sublime text is a solid choice to get started. 
Download it and install it from here. 



open your terminal. 

### some CLI commands
Some commands to familiarise yourself with 

`pwd` prints the path to the current working directory.
<!—- giff / screenshot-—> 

`cd #{some folder}` changes the current directory 

<!—- giff / screenshot -—> 

`mkdir` create a directory 

`ls -l` lists files and folders in directory. 

` touch fileName.rb` creates a file. 

`rm fileName.rb` remove file name

`rm -rf` removes everything..thread lightly 

## The script file 

ok now

` touch timecode.rb`

open the fils in sublime text. 


### running the script

inside `timecode.rb` write

```
print "Welcome to the timecodes converter"
```

in terminal cd to that folder 

<!—- giff / screenshot CDing to folder on desktop -—> 

run the script 

`ruby timecode.rb`

### command line arguments and string interpolation

```
print "Welcome to the timecodes converter"
timecode = gets.chomp
print "This is the timecode you put #{timecode}." 
```

`timecode = gets.chomp` where timecode is a variable. and `gets` is a command to get user input from terminal promt.
if we used it without `chomp` we’d get the whole line, with the carriage return.
Carriage return is a symbol that signifies the line has ended. `\n`

For example if with type `00:30:40:05` we’d get  `00:30:40:05\n` with the carriage return/line break. but if we use `.chomp` it gets rid of it for us. 

`print` we already seen, prints message to console.

this `"` denotes a string and `#{}` is string interpolation. Meaning we can put a variable into a string and make it become a part of it.  such as `#{timecode}" `

Alright, now save and from terminal run

`ruby timecode.rb 00:04:05:06`

you should get as a result 

```
This is the timecode you put 00:04:05:06.
```


Ok, so now we can get an input and return some "output" to the screen/terminal. Meaning we can manipulate informations. Altho in a simple way. 

### Comments and variable names

you can add comments in your code to make it more readable. using the `#` at the beginning of the line.
making note for yourself and others to help with legibility and clarify things.

Also try to give good descriptive variable names. better a long name that does what it says on the tin then a short one that could be anything. 

eg a programs that use the variable name `x` through out is not very self explanatoty




### A tiny bit about types

There’s a lot that could be said about types, but we’d keep it to the point and brief for the porpouse of this, think of it as a first pass to get started with a working basis so that you can then look more into.

- strings `""`
- integer eg `12` 


is technically a string `"12"`. What does that mean?
`"12"+1` gives you an error
and `"12"*1`  gives you `"12121212121212121212"`

You can convert between string and integer with 
`.to_i` such as `"12".to_i` which gives you `12`

similarly you can also convert integer to string with the `.to_s` method.
eg  `12.to_s` which gives you `"12"`.

### Arrays
We’ve seen variables in action, let’s take a side step and introduce Arrays. as a way to store informations. 

```
fruits = ["banas", "apples", "organges"]
```
is an array that contains fruit. In CS you start counting from Zero.

if I want to get the apples I’d have to go  `fruits[1]` and that would return `apples` where `1` is called an index.


if I want to add something to the array I can do it like so 

```
fruits.push("mango")
```

the `fruits` array will now look like so `["banas", "apples", "organges","mango"]`

Stop for a sec, re-read from `Arrays` and think about this how would you get the mango value?


Turning strings into arrays. 

if you had a string containing`"banas apples rganges mango"` and you wanted to turn this into an array. 
There’s an handy method called `.split()` that can divide it, allowing you to specify where to make the split.

```
"banas apples rganges mango".split(" ")
```

in this case because there is a blank space between them we’d split on the space `.split(" ")` if they were comma separate we could split .split(",") on that.

```
"banas,apples,rganges,mango".split(" ")
```


They  would both return  `["banas", "apples", "organges","mango"]`


There’s also a `.join("")` that converts an array into a string,and you can specify how to separate the values.

With me so far?

Ok back to our problem


### Converting timecode to seconds.

#### Identifying a possible solution in pseudocode 

How can we convert timecoes in such format `hh:mm:ss:ms` to seconds?
It often helps to think about the solution, the list of commands, the algorithm without thinking about the specific implementation of the language. At a high level. How would you solve this proble. often thinking about the mental steps you’d do, to do it "manually".
Writing this down is referred to pseudo code.

If we could isolate the hours, minutes, seconds and milliseconds into their own variables we could convert them to seconds individually and then adding it all up would give us the converted value. 

To turn this into code we have to break it down even further.

1. Isolate the hours, minutes, seconds and milliseconds.
2. take the hours and multiple that by 60*60.
3. take the minute and multiple that  by 60 
4. convert the ms 
<!—- wrong, see how to convert ms -—> 
5. add them all up together 
6. print out the result 

Now that we have an hypothesis for our script we can go about figuring out the specific of the syntax.


So far our program looks like this in the `timecode.rb` file
```
print "Welcome to the timecodes converter"
timecode = gets.chomp
print "This is the timecode you put #{timecode}." 
```

#### 1.  Isolate the hours, minutes, seconds and milliseconds.

```
timecode_array = timecode.split(":")
```

timecode_array is now equal to 

["00","30","40","05"]

how can we assign the hours to a variable hours?

```
hours = timecode_array[0]
```

What about for minutes? seconds and milliseconds?


solution 


```
hours = timecode_array[0].to_i
minutes = timecode_array[1].to_i
seconds = timecode_array[2].to_i
ms = timecode_array[3].to_i
```

`.to_i` because when we split we obtain a string, and we want to work with that variable as an integer to be able to convert it.


#### 2. take the hours and multiple that by 60*60.
To convert the hours to seconds. 

There’s 60 seconds in one minute. and 60 minute in one hour. So there’s also 60*60 seconds in one hour =  3,600

```
hours_in_seconds = hours * 60 *60 
```

How would you convert that to minutes?

3. take the minute and multiple that  by 60 

```
minutes_in_seconds = minutes  *60 
```

seconds does not need converting

4. convert the ms 
<!—- ms needs looking into it 

ms_in_seconds = 
—>


5. add them all up together 

```ruby
result = hours_in_seconds  + minutes_in_seconds+seconds + ms_in_seconds 
```

6. print out the result 

Remember about string interpolation?

```
print "your timecode in seconds is #{result}"
```


### Methods. Working with reusable code.


```
# a method that takes in a timecode in this format `hh:mm:ss:ms` and returns the value converted in seconds 

def convert_to_second(timecode)

	# split 
	timecode_array = timecode.split(":")
	hours = timecode_array[0].to_i
	minutes = timecode_array[1].to_i
	seconds = timecode_array[2].to_i
	ms = timecode_array[3].to_i

	# convert each 
	hours_in_seconds = hours * 60 *60 
	minutes_in_seconds = minutes  *60 	
	<!—- ms_in_seconds = —>

	# add up the conversion
	result = hours_in_seconds  + minutes_in_seconds+ seconds + ms_in_seconds 
	
	#return the result
	return result	

end
```

which you can then use like so 


<!-- change code above usind method  -->
```
var seconds = convert_to_second("00:40:50:06")
print seconds 
```



## Recap

we looked at

- Psuedocode
- Ruby
- Types 
	- string
	- integer
	- converting between the two
- Arrays
	- index 
	- `push()` elements into array
	- `split()` dividing string into array.
	- `.join()`

- Turning psuedocde into code 

- Methods to keep code organised


## Sources and resources
- Terminal CLI the hard way 
- Linux / Unix intro CLI (from UCL)
