window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("group-logo").style.height = "50px";
        document.getElementsByClassName("header-dynamic")[0].style.fontSize = "15px";
        var headerItems = document.getElementsByClassName("header-items");
        for (var i = 0; i < headerItems.length; i++) {
            headerItems[i].style.padding = "10px";
        }
    } else {
        document.getElementById("group-logo").style.height = "75px";
        document.getElementsByClassName("header-dynamic")[0].style.fontSize = "22px";
        var headerItems = document.getElementsByClassName("header-items");
        for (var i = 0; i < headerItems.length; i++) {
            headerItems[i].style.padding = "20px";
        }
    }
}
