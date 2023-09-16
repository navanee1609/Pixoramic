// SIDEBAR

let menuItems=document.querySelectorAll('.menu-item');

// remove active class for all menu items


let changeActiveItem=()=>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none'
        }else{
            document.querySelector('.notifications-popup').style.display='block'
            document.querySelector('#notifications .notification-count').style.display='none'
        }
    })
});


// MESSAGES  &   HIGHLIGHTING MESSAGE

let messageNotification=document.querySelector('#message-notifications')
let messages=document.querySelector('.messages')

messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow='none'
    }, 2000);
})

// INDIVIDUALO MESSAGE SEARCH


let message=document.querySelectorAll('.message')
let messageSearch=document.querySelector('#message-search')


messageSearch.addEventListener('keyup',()=>{
    let val=messageSearch.value.toLowerCase();
    message.forEach(user=>{
        let name=user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display='flex'
        }else{
            user.style.display='none'
        }
    })

    
});

// THEME CUSTOMIZATION


let theme =document.querySelector('#theme')
let themeModal=document.querySelector('.customize-theme')



theme.addEventListener('click',()=>{
    themeModal.style.display='grid'
})

themeModal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none'
    }
})


// FONTS

let fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root')


// remove active class 
let removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}


fontSizes.forEach(size=>{
    

  size.addEventListener('click',()=>{
    let fontSize
    removeSizeSelector();
    size.classList.toggle('active')
    
if(size.classList.contains('font-size-1')){
    fontSize='10px';
    root.style.setProperty('----sticky-top-left','5.4rem');
    root.style.setProperty('----sticky-top-right','5.4rem')
}else if(size.classList.contains('font-size-2')){
    fontSize='13px';
    root.style.setProperty('----sticky-top-left','5.4rem');
    root.style.setProperty('----sticky-top-right','-7rem')
}else if(size.classList.contains('font-size-3')){
    fontSize='16px';
    root.style.setProperty('----sticky-top-left','-2.rem');
    root.style.setProperty('----sticky-top-right','-17rem')
}else if(size.classList.contains('font-size-4')){
    fontSize='19px';
    root.style.setProperty('----sticky-top-left','-5rem');
    root.style.setProperty('----sticky-top-right','-25rem')
}else if(size.classList.contains('font-size-5')){
    fontSize='22px';
    root.style.setProperty('----sticky-top-left','-12rem');
    root.style.setProperty('----sticky-top-right','-35rem')
}

// changong the font size of the root html element

document.querySelector('html').style.fontSize=fontSize
  })
    

})


// COLORS   

let colorPalatte=document.querySelectorAll('.choose-color span')

let changeActiveColorClass=()=>{
    colorPalatte.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

colorPalatte.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        changeActiveColorClass()


        if(color.classList.contains('color-1')){
            primaryHue=252
        }else if(color.classList.contains('color-2')){
            primaryHue=52
        }else if(color.classList.contains('color-3')){
            primaryHue=352
        }else if(color.classList.contains('color-4')){
            primaryHue=152
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active')

        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})


let bg1=document.querySelector('.bg-1')
let bg2=document.querySelector('.bg-2')
let bg3=document.querySelector('.bg-3')

// Theme background values

let lightColorLightness
let darkColorLightness
let whiteColorLightness

// changing background color

let changeBg=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
}

bg1.addEventListener('click',()=>{
    // add active class

    bg1.classList.add('active');
    // remove from other
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // removing from local storage
    window.location.reload()
})

bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%'
    // adding active class

    bg2.classList.add('active');
    // removing from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg()
})
bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%'
    // adding active class

    bg3.classList.add('active');
    // removing from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg()
})

