const navItemsList = document.querySelectorAll("li");
// console.log(navItemsList);


window.onscroll = () => myFunction();

function myFunction() {
    if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
        document.querySelector("nav").className = "nav-color";
        navItemsList.forEach((item) => item.querySelector("a").style.color = "black");
        navItemsList[1].querySelector("a").style.color = "salmon";
        console.log(document.body.scrollTop);
    }
    else {
        document.querySelector("nav").className = "";
        navItemsList.forEach((item) => item.querySelector("a").style.color = "white");
        navItemsList[0].querySelector("a").style.color = "salmon";
    }
    if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450){
        document.querySelector("nav").className = "nav-color";
        navItemsList.forEach((item) => item.querySelector("a").style.color = "black");
        navItemsList[2].querySelector("a").style.color = "salmon";
    }
    if(document.body.scrollTop > 2260 || document.documentElement.scrollTop > 2260){
        document.querySelector("nav").className = "nav-color";
        navItemsList.forEach((item) => item.querySelector("a").style.color = "black");
        navItemsList[3].querySelector("a").style.color = "salmon";
    }
    if(document.body.scrollTop > 3130 || document.documentElement.scrollTop > 3130){
        document.querySelector("nav").className = "nav-color";
        navItemsList.forEach((item) => item.querySelector("a").style.color = "black");
        navItemsList[4].querySelector("a").style.color = "salmon";
    }
}
