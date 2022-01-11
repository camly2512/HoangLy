document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('div.menu_burger i');
    var mobile = document.querySelector('ul.menu_chia1');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('open');
    })
})
document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('div.menu_burger i');
    var mobile = document.querySelector('ul.menu_chia2');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('open');
    })
})
document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('div.menu_burger i');
    var mobile = document.querySelector('div.tabs');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('open');
    })
})