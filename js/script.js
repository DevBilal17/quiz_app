let menuBtn = document.querySelector('header .left button');

menuBtn.addEventListener('click',function(){
    var img = this.querySelector('img');
    
    if(img.getAttribute('src').includes('menus')){
        img.setAttribute('src','/assets/icons/close.png')
    }
    else if(img.getAttribute('src').includes('close')){
        img.setAttribute('src','/assets/icons/menus.png')
    }
     
})