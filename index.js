const mySlide = document.querySelectorAll('.carousel-slides'),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slideFun(counter);

let timer = setInterval(autoslide, 5000);
function autoslide() {
    counter += 1;
    slideFun(counter);
}
function plusSlides(n){
    counter += n;
    slideFun(counter);
    resetTimer();
}
function currentSlide(n){
    counter = n;
    slideFun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 5000);
}
function slideFun(n){
    let i;
    for(i = 0; i < mySlide.length; i++){
        mySlide[i].style.display = "none";
    }
    for(i = 0; i < dot.length; i++){
        dot[i].classList.remove('active');
    }
    if(n > mySlide.length){
        counter = 1;
    }
    if(n < 1){
        counter = mySlide.length;
    }
    mySlide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}