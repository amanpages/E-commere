const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for(let i = 0; i < triggerOpen.length; i++){
    let curretId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${curretId}`)

    const openData = function(){
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function(){
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click',openData);
    overlay.addEventListener('click',openData);
}

//mobile codes

const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active');
    }
}))

// Section 
const sorter = document.querySelector('.sort-list');
if(sorter){
    const sortLi = sorter.querySelectorAll('li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function(){
        sorter.querySelector('ul').classList.toggle('show')
    });

    sortLi.forEach((item) => item.addEventListener('click', function() {
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show')
    }))
}

// tabbed one 

const trigger = document.querySelectorAll('.tabbed-trigger');
let content = document.querySelectorAll('.tabbed > div');

trigger.forEach((btn) => {
    btn.addEventListener('click', function () {
        let dataTarget = this.dataset.id;
        let body = document.querySelector(`#${dataTarget}`);

        trigger.forEach((b) => b.classList.remove('active'));
        content.forEach((c) => c.classList.remove('active'));

        this.classList.add('active');
        body.classList.add('active');
    });
});



// Slider 

const swiper = new Swiper('.sliderbox', {

    loop: true,
    effect: 'fade',
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 });

// featured products
const initSlider =() =>{
    const imageList =document.querySelector(".slider-wrapper .img-list");
    const slideButtons =document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";

    }

    imageList.addEventListener("scroll", () =>{
        handleSlideButtons();
    })


}
window.addEventListener("load",initSlider);

  