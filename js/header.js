function header() {
    return "<div class=\"container\">\n" +
        "            <div class=\"logo\">\n" +
        "                <a class=\"link-logo\" href=\"/home.html\">\n" +
        "                    Ngoc Trinh Framework\n" +
        "                </a>\n" +
        "            </div>\n" +
        "            <div class=\"top-links\">\n" +
        "                <ul>\n" +
        "                    <li><a href=\"#\">Sample</a></li>\n" +
        "                    <li><a href=\"#\">Layouts</a></li>\n" +
        "                    <li><a href=\"#\">Templates</a></li>\n" +
        "                    <li><a href=\"#\">Contact</a></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>";
}
var hd = document.getElementById("header");
hd.innerHTML = header();