function nav() {
    return "<div class=\"container\">\n" +
        "            <ul class=\"menu\">\n" +
        "                <li><a href=\"#\">Category #1</a></li>\n" +
        "                <li><a href=\"#\">Category #2</a></li>\n" +
        "                <li><a href=\"#\">Category #3</a></li>\n" +
        "                <li><a href=\"#\">Category #4</a></li>\n" +
        "                <li class=\"last-item\"><a href=\"#\">Get Genesis Now!</a></li>\n" +
        "            </ul>\n" +
        "        </div>"
}
var na = document.getElementById("nav");
na.innerHTML = nav();