# jCSS
## CSS Manipulation using JavaScript made easy
jCSS makes CSS manipulation easy, by creating multiple functions for background, font, size and more.
jCSS is published under LGPL 2.1.
## How to use it?
To use jCSS you only have to copy the code of jCSS to your website as ``.js`` file or copy the code into a `<script></script>`-tag and paste it into your html code.
Now you can use the functions in different JavaScript scripts on your website. Theses functions are available now:

|Function|Function|
|-|-|
|jcss_background|Edit the background color an object|
|jcss_color|Edit the font color an object|
|jcss_font|Edit the font size, font family, font weight and font style|
|jcss_size|Edit the height and width of an object|
|jcss_position|Edit the css position value of an object|
|jcss_border|Edit the border color, border style, border width and border radius of an object|
|jcss_boxshadow|Edit the box shadow of an object|
|jcss_read|Read a css value of an object|

A function is build like this:
```
function jcss_...(id, value1, value2, value3, value4, ...) {
    ...
}
```
Most functions only have one value

### Theme Switch
You can use jCSS to switch between themes, too. In your HTML-Code, you need to give your CSS-Link the `id=""`-attribute with the value "css-theme".

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