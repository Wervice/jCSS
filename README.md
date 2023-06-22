# jCSS
## CSS Mainipulation library for client-side JavaScript

<br>
<img src=./star_this.png height=30>
<img src=./lgpl.png height=30>
<br><br>

Using jCSS you can manipulate the style on your website easily from your JavaScript code.
jCSS also comes with some custom themes to quickly give your frontend a nice look.

jCSS is licensed under LGPL 2.1.

## Contents
- [Use CSS manipulation](#how-can-i-use-jcss)
- [Apply and swizch a theme](#how-can-i-use-a-theme)


## How can I use jCSS
You need to copy the code from the `jcss.js` file to your code.

When you're done with that step, you can uses the features of jCSS.

Here is a table of all functions and the usescases:

|Function|Usecase|
|-|-|
|**jcss_background**|Edit the background color an object|
|**jcss_color**|Edit the font color an object|
|**jcss_font**|Edit the font size, font family, font weight and font style|
|**jcss_size**|Edit the height and width of an object|
|**jcss_position**|Edit the css position value of an object|
|**jcss_border**|Edit the border color, border style, border width and border radius of an object|
|**jcss_boxshadow**|Edit the box shadow of an object|
|**jcss_read**|Read a css value of an object|

### How can I use a theme
To apply one of the themes from jCSS to your website, you need to copy the file to your code folder.

Now you can need to link to it using the `<link rel=stylesheet href=...>`-tag.

Here are the themes you can use:
|Name|Description|File Name|
|-|-|-|
|**Clean**|A very basic sans-serif black-and-white theme with rounded buttons and inputs|``clean.css``|
|**Sharp**|A sans-serif black-and-white theme with sharp buttons and inputs|``sharp.css``|
|**Thin**|A sans-serif theme with sharp buttons & inputs and thin black lines|``thin.css``|
|**Night Blue**|A dark sans-serif blue sharp theme|``nightblue.css``|

In case you want to use the theme_switching function to, so you can change the theme from your JavaScript code, you need to add `id=css-theme` to your link tag.

And these are the functions for theme switching
Now you can use the functions
```
jcss_set_theme_to_x(x)
```
To open another style sheet
and
```
jcss_set_theme_to_normal()
```
to return to the previous theme