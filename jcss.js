window.onload = function () {
    if (document.getElementById("css-theme") != null) {
        cssthemesrc = document.getElementById("css-theme").src 
    }
}

function jcss_manipulate(id, selection, value) {
    eval("document.getElementById(\"" + id + "\").style." + selection + " = '" + value + "'")
}

function jcss_background(id, value) {
    jcss_manipulate(id, "background", value)
}
function jcss_color(id, value) {
    jcss_manipulate(id, "color", value)
}
function jcss_font(id, fontfamiliy, fontsize, fontweight, fontstyle) {
    jcss_manipulate(id, "fontFamiliy", fontfamiliy)
    jcss_manipulate(id, "fontSize", fontsize)
    jcss_manipulate(id, "fontWeight", fontweight)
    jcss_manipulate(id, "fontStyle", fontstyle)
}
function jcss_size(id, width, height) {
    jcss_manipulate(id, "width", width)
    jcss_manipulate(id, "height", height)
}
function jcss_position(id, value) {
    jcss_manipulate(id, "position", value)
}
function jcss_border(id, borderstyle, borderwidth, bordercolor, borderradius) {
    jcss_manipulate(id, "borderStyle", borderstyle)
    jcss_manipulate(id, "borderWidth", borderwidth)
    jcss_manipulate(id, "borderColor", bordercolor)
    jcss_manipulate(id, "borderRadius", borderradius)
}
function jcss_boxshadow(id, x, y, size, color) {
    jcss_manipulate(id, "boxShadow", x+" "+y+" "+size+" "+color)
}
function jcss_read(id, selection) {
    return eval("document.getElementById('" + id + "').style." + selection)
}

// Switch Theme
function (jcss_set_theme_to_normal) {
    document.getElementById("css-theme").src = cssthemesrc
}
function jcss_set_theme_to_x(x) {
    document.getElementById("css-theme").src = x
}