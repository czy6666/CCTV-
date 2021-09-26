function $(id) {
    return document.getElementById(id);
}

var navicon4 = document.getElementById("nav_icon4");
var icon4sec = document.getElementById("icon4_sec");

navicon4.onclick = function() {
    icon4sec.style.display = "block";
    icon4sec.focus();
}

function icon4rreat() {
    icon4sec.style.display = "block";
}

function icon4hide() {
    icon4sec.style.display = "none";
}

var searchleft = document.getElementById("search_left");
var searchsec = document.getElementById("search_sec");

searchleft.onclick = function() {
    searchsec.style.display = "block";
}

ajax();
window.onload = function() {
    if (y >= 800) {
        floatNav.style.display = "block";
    }
    xiongmao();
    document.onclick = function(e) {
        $("search_box").style.display = "none";
        $("user").style.display = "none";
    }
    var searchbox = document.getElementById("search_box");
    $("nav_icon1").onclick = function(e) {
        if (searchbox.style.display == "block") {
            $("search_box").style.display = "none";
        } else {
            $("search_box").style.display = "block";
        }
        var e = e || window.e;
        stopFunc(e);
        searchsec.style.display = "none";
    }
    $("search_box").onclick = function(e) {

        var e = e || window.e;
        stopFunc(e);
    }




    var user = document.getElementById("user");
    $("nav_icon3").onclick = function(e) {
        if (user.style.display == "block") {
            $("user").style.display = "none";
        } else {
            $("user").style.display = "block";
        }
        var e = e || window.e;
        stopFunc(e);
    }
    $("user").onclick = function(e) {
        var e = e || window.e;
        stopFunc(e);
    }


}

function stopFunc(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}


var imageitem = document.getElementsByClassName("image_item");
var titleitem = document.getElementsByClassName("title_item");
var k = 0;
var titleA = document.getElementsByClassName("titleA");
var imagetitle = document.getElementsByClassName("image_title")[0];

imagetitle.onmouseover = function() {
    clearInterval(timer);
}
imagetitle.onmouseleave = function() {
    autoChange();
}
for (var i = 0; i < titleitem.length; i++) {
    titleitem[i].num = i;
    titleitem[i].onmouseover = function() {
        clearInterval(timer);
        autoChange();
        index = this.num;
        imageitem[index].style.opacity = "1";
        titleA[index].classList.add("titleHover");
        for (var e = 0; e < imageitem.length; e++) {
            if (e != index) {
                imageitem[e].num = e;
                imageitem[e].style.opacity = "0";
                titleA[e].classList.remove("titleHover");
            }
        }
        changeA();

    };

}
autoChange();


titleitem[0].classList.add("title_itemHover");

function changeA() {
    if (index > imageitem.length - 1) {
        index = 0;
        imageitem[0].style.opacity = "1";
        titleA[0].classList.add("titleHover");
    }
    for (var e = 0; e < imageitem.length; e++) {
        if (e != index) {
            imageitem[e].num = e;
            imageitem[e].style.opacity = "0";
            titleA[e].classList.remove("titleHover");
        }
    }
    for (var i = 0; i < titleitem.length; i++) {
        titleitem[i].classList.remove("title_itemHover")
    }
    titleitem[index].classList.add("title_itemHover");

}
var timer;
var index = 0;

function autoChange() {
    timer = setInterval(function() {
        index++;
        if (index >= 10) { index %= imageitem.length; }
        imageitem[index].style.opacity = "1";
        titleA[index].classList.add("titleHover");
        for (var e = 0; e < imageitem.length; e++) {
            if (e != index) {
                imageitem[e].num = e;
                imageitem[e].style.opacity = "0";
                titleA[e].classList.remove("titleHover");
            }
        }

        changeA();
    }, 4000);
}

/*********************************************************/
var animate = document.getElementsByClassName("animate")[0];
var xiongmao_img = document.getElementsByClassName("xiongmao_img")[0];
// xiongmao_img.onmouseover = function() {
//         xm = "46px";
//     }
function xiongmao() {
    setInterval(() => {
        Number.parseInt(xiongmao_img.style.top) - 8 + "px";
        // if (xiongmao_img.style.top == "24px") {
        //     clearInterval();
        // }
        xiongmao_img.style.top = Number.parseInt(xiongmao_img.style.top) - 8 + "px";
        if (xiongmao_img.style.top == "16px") {
            xiongmao_img.style.top = "160px";
        }
    }, 1500);

}



/********************************************************* */

var imgL1 = document.getElementsByClassName("imgL1");
var imgR1 = document.getElementsByClassName("imgR1");
var imgL = document.getElementsByClassName("imgL");
var imgR = document.getElementsByClassName("imgR");
imgL1[0].onmouseover = function() {
    imgL[0].style.left = "0";
}
imgL[0].onmouseleave = function() {
    imgL[0].style.left = "-780px";
}
imgL1[1].onmouseover = function() {
    imgL[1].style.left = "0";
}
imgL[1].onmouseleave = function() {
    imgL[1].style.left = "-780px";
}
imgR1[0].onmouseover = function() {
    imgR[0].style.right = "0";
}
imgR[0].onmouseleave = function() {
    imgR[0].style.right = "-780px";
}
imgR1[1].onmouseover = function() {
    imgR[1].style.right = "0";
}
imgR[1].onmouseleave = function() {
    imgR[1].style.right = "-780px";
}


var vedioimage = document.getElementsByClassName("vedio_image");
var lazy = document.getElementsByClassName("lazy");
var title3 = document.getElementsByClassName("title3");
var videoclass = document.getElementsByClassName("video_class");

function videoblock(q) {
    lazy[q].style.opacity = "0";
    videoclass[q].style.opacity = "1";
    title3[q].style.opacity = "0"
}

function videonone(q) {
    lazy[q].style.opacity = "1";
    videoclass[q].style.opacity = "0";
    title3[q].style.opacity = "1"
}



var accpic = document.getElementsByClassName("acc_pic");
var accti = document.getElementsByClassName("acc_ti");
var acccont = document.getElementsByClassName("acc_cont");
var acctitle = document.getElementsByClassName("acc_title");
for (var l = 1; l < accpic.length; l++) {
    accti[l].style.display = "block";
    acccont[l].style.display = "none";
}

function picHover(n) {
    accti[n].style.display = "none";
    acccont[n].style.display = "block";
    for (var h = n + 1; h < accpic.length; h++) {
        accpic[h].style.left = 480 + (h - 1) * 90 + "px";
    }
    for (var k = 0; k < n + 1; k++) {
        accpic[k].style.left = k * 90 + "px";
    }
    for (var m = 0; m < accpic.length; m++) {
        if (m != n) {
            accti[m].style.display = "block";
            acccont[m].style.display = "none";
        }
    }
}
/******************************************************************/

function ajax() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.responseType = 'json';
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url = "https://service-dxtrccme-1302998929.gz.apigw.tencentcs.com/release/accordin";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.response;
            for (var i = 0; i < accpic.length; i++) {
                acctitle[i].innerHTML = data.data[i].title;
                document.getElementsByClassName("acc_img")[i].src = data.data[i].imgsrc;
                document.getElementsByClassName("textTitle")[i].innerHTML = data.data[i].textTitle;
                document.getElementsByClassName("acc_text")[i].innerHTML = data.data[i].text;
            }
        }
    }


    /**
     * /
     */
    var xmlhttp1;
    if (window.XMLHttpRequest) {
        xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.responseType = 'json';
    } else {
        xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url1 = "https://service-dxtrccme-1302998929.gz.apigw.tencentcs.com/release/charts";

    xmlhttp1.open("GET", url1, true);
    xmlhttp1.send();

    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {

            var data1 = xmlhttp1.response;
            for (var i = 0; i < 10; i++) {
                document.getElementsByClassName("titleA")[i].innerHTML = data1.data[i].title;
                document.getElementsByClassName("lbt")[i].src = data1.data[i].imgsrc;
            }
        }
    }
}

/************************************************************* */
var curblock = document.getElementsByClassName("curblock")[0];
var curnone = document.getElementsByClassName("curnone");
var kd_img = document.getElementsByClassName("kd_img");
var kd_text = document.getElementsByClassName("kd_text");
var kd_li = document.getElementsByClassName("kd_li");



function curHover(n) {
    curblock.classList.remove("curblock");
    kd_img[n].style.display = "block";
    kd_text[n].classList.add("kd_textHover");
    for (var m = 0; m < 5; m++) {
        if (m != n) {
            kd_img[m].style.display = "none"
            kd_text[m].classList.remove("kd_textHover");
        }
    }
}

/**************************************************************/
var film_right_title = document.getElementsByClassName("film_right_title");
var film_box = document.getElementsByClassName("film_box")[0];
var pk = 0;

function toRed(n) {
    pk++;
    if (pk == 1 && n == 0) {
        return;
    }
    film_right_title[n].classList.add("toRed");
    film_item[n].classList.add("ac_cur2");
    film_item[n].classList.remove("ac_cur1");
    for (var m = 0; m < 4; m++) {
        if (pk == 1) {
            film_item[0].classList.add("ac_cur1");
        } else if (m != n) {
            film_item[m].classList.add("ac_cur1");
            film_item[m].classList.remove("ac_cur2");
        }
    }
    for (var b = 0; b < 4; b++) {
        if (b != n) {
            film_right_title[b].classList.remove("toRed");
        }
    }

}


function toR0(n) {
    var cur = false;
    film_item[0].onmouseover = function() {
        cur = true;
    }
    if (cur == false) {
        toRed(0);
    }
}

/***************************************************************** */

var film_hover = document.getElementsByClassName("film_hover");
var film_item = document.getElementsByClassName("film_item");
var li1 = document.getElementsByClassName("li1");

function filmhover(n) {
    film_hover[n].style.display = "block";
    li1[n].setAttribute("style", "z-index:2");
}

function filmnone(n) {
    film_hover[n].style.display = "none";
    li1[n].setAttribute("style", "z-index:1");
}

/***************************************************************** */
var car_sec = document.getElementsByClassName("car_sec");

function secHover(n) {

    car_sec[n].style.display = "block";
}

function secNone(n) {

    car_sec[n].style.display = "none";
}






var page1 = document.getElementsByClassName("page1");

var arr_left = document.getElementsByClassName("arr_left")[0];
var arr_right = document.getElementsByClassName("arr_right")[0];
var car_li = document.getElementsByClassName("car_li");
var i = 0;
var w;
var e;
var r;
var c;
var p; //第几个页数



function toPageL(a, b, c, p) { //4 7 3
    i--;
    if (i % 3 == -1) {
        w = 2;
        page1[p].innerHTML = w + 1;
        car_li[w + c].setAttribute("style", "z-index:2");
        var d = w + c;
        for (var z = a; z < b; z++) {
            if (z != d)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == 2) {
        w = 2;
        page1[p].innerHTML = w + 1;
        car_li[w + c].setAttribute("style", "z-index:2");
        var d = w + c;
        for (var z = a; z < b; z++) {
            if (z != d)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == -2) {
        e = 1;
        page1[p].innerHTML = e + 1;
        car_li[e + c].setAttribute("style", "z-index:2");
        var f = e + c;
        for (var z = a; z < b; z++) {
            if (z != f)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == 1) {
        e = 1;
        page1[p].innerHTML = e + 1;
        car_li[e + c].setAttribute("style", "z-index:2");
        var f = e + c;
        for (var z = a; z < b; z++) {
            if (z != f)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == 0) {
        r = 0;
        page1[p].innerHTML = r + 1;
        car_li[r + c].setAttribute("style", "z-index:2");
        var g = r + c;
        for (var z = a; z < b; z++) {
            if (z != g)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }

}

function toPageR(a, b, c, p) {
    i++;
    if (i % 3 == 1) {
        w = 1;
        page1[p].innerHTML = w + 1;
        car_li[w + c].setAttribute("style", "z-index:2");
        var d = w + c;
        for (var z = a; z < b; z++) {
            if (z != d)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == -2) {
        w = 1;
        page1[p].innerHTML = w + 1;
        car_li[w + c].setAttribute("style", "z-index:2");
        var d = w + c;
        for (var z = a; z < b; z++) {
            if (z != d)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == 2) {
        e = 2;
        page1[p].innerHTML = e + 1;
        car_li[e + c].setAttribute("style", "z-index:2");
        var f = e + c;
        for (var z = a; z < b; z++) {
            if (z != f)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == -1) {
        e = 2;
        page1[p].innerHTML = e + 1;
        car_li[e + c].setAttribute("style", "z-index:2");
        var f = e + c;
        for (var z = a; z < b; z++) {
            if (z != f)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }
    if (i % 3 == 0) {
        r = 0;
        page1[p].innerHTML = r + 1;
        car_li[r + c].setAttribute("style", "z-index:2");
        var g = r + c;
        for (var z = a; z < b; z++) {
            if (z != g)
                car_li[z].setAttribute("style", "z-index:1");
        }
    }

}


var cctvN = document.getElementsByClassName("cctvN");
var tdhover = document.getElementsByClassName("tdhover");

function cctvHover(l) {
    cctvN[l].style.display = "block";
    tdhover[l].classList.add("redtd");
    for (var m = 0; m < 17; m++) {
        if (m != l) {
            cctvN[m].style.display = "none";
            tdhover[m].classList.remove("redtd");
        }
    }
}


var daquan_img = document.getElementsByClassName("daquan_img");
var daquan_img_hover = document.getElementsByClassName("daquan_img_hover");

function hover_img(n) {
    daquan_img_hover[n].style.left = "0";
}

function hover_imgL(n) {
    daquan_img_hover[n].style.left = "-1222px";
}

function hover_imgR(n) {
    daquan_img_hover[n].style.left = "1222px";
}

var down_hover = document.getElementsByClassName("down_hover")[0];
var active_hover = document.getElementsByClassName("active_hover")[0];
var phone_hover = document.getElementsByClassName("phone_hover")[0];

function navHover1() {
    down_hover.style.display = "block";
}

function navNone1() {
    down_hover.style.display = "none";
}

function navHover2() {
    active_hover.style.display = "block";
}

function navNone2() {
    active_hover.style.display = "none";
}

function navHover3() {
    phone_hover.style.display = "block";
}

function navNone3() {
    phone_hover.style.display = "none";
}

var y = document.documentElement.scrollTop || document.body.scrollTop;
window.onscroll = function() {
    var y = document.documentElement.scrollTop || document.body.scrollTop;
    if (y < 800) {
        floatNav.style.display = "none";
        for (var m = 0; m < 12; m++) {
            flli[m].classList.remove("redLi");
        }
    }
    if (y >= 800 && y < 1900) {
        floatNav.style.display = "block";
        flli[0].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 0) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y >= 1900 && y < 2200) {
        flli[1].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 1) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 3300 && y >= 2200) {
        flli[3].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 3) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 3900 && y >= 3250) {
        flli[4].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 4) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 4600 && y >= 3900) {
        flli[5].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 5) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 5400 && y >= 4550) {
        flli[6].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 6) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 7000 && y >= 5300) {
        flli[8].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 8) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 7500 && y >= 7000) {
        flli[9].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 9) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 8900 && y >= 7500) {
        flli[10].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            if (m != 10) {
                flli[m].classList.remove("redLi");
            }
        }
    }
    if (y < 12000 && y >= 8700) {
        flli[12].classList.add("redLi");
        for (var m = 0; m < 12; m++) {
            flli[m].classList.remove("redLi");
        }
    } else {
        flli[12].classList.remove("redLi");
    }
}

var flli = document.getElementsByClassName("flli");

function flli1(n) {
    flli[n].classList.add("redLi");
    flli[n].classList.remove("ss");
    for (var m = 0; m < 14; m++) {
        if (m != n) {
            flli[m].classList.remove("redLi");
            flli[m].classList.add("ss");
        }
    }
}

function sss() {
    flli[3].classList.remove("redLi");
}

var floatNav = document.getElementsByClassName("floatNav")[0];