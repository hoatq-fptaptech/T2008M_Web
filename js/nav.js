var cats = [
    {
        name:"Quần áo",
        url:"#"
    },
    {
        name:"Giày dép",
        url:"#"
    },
    {
        name:"Đồng hồ",
        url:"#"
    },
    {
        name:"Trang sức",
        url:"#"
    },
    {
        name:"Kim cương",
        url:"#"
    }
];
function nav() {
    var html_nav = "<div class=\"container\">\n" +
        "            <ul class=\"menu\">\n" ;
    // can nap cac category vao
    for(var i=0;i<cats.length;i++){ // can thay cats[i].name
        html_nav+= "<li><a href=\""+cats[i].url+"\">"+cats[i].name+"</a></li>\n";
    }
    html_nav+=    "                <li class=\"last-item\"><a href=\"#\">Get Genesis Now!</a></li>\n" +
        "            </ul>\n" +
        "        </div>";
    return html_nav;
}
var na = document.getElementById("nav");
na.innerHTML = nav();