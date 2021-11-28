document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('div.menu i');
    var mobile = document.querySelector('ul');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('open');
    })
})