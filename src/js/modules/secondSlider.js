function secondSlider(){

    let slideIndex = 1,
    slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total');

    
    showSlides(slideIndex);

    if(slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    } 
    
    function showSlides(n) {
    
        if(n > slides.length){
            slideIndex = 1;
        } 
        if (n < 1){
            slideIndex = slides.length;
        }
    
        slides.forEach((item) => item.style.display = 'none');
        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';

        if(slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        } 
    }


    
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

  
    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    
    next.addEventListener('click', function(){
        plusSlides(1);
    });
    

    
    }
    module.exports = secondSlider;