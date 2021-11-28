document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('div.menu img');
    var mobile = document.querySelector('ul');
    nut.addEventListener('click',function(){
        mobile.classList.toggle('open');
    })
})