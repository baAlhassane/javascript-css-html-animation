const sliderContainer=document.querySelector(".slider-container");
const slideRight=document.querySelector(".right-slide");
const slideLeft=document.querySelector(".left-slide");
const upButton=document.querySelector(".up-button");
const downButton=document.querySelector(".down-button");
const slidesLength=slideRight.querySelectorAll("div").length;

// console.log(slidesLenght);

let activesSlideIndex=0;
slideLeft.style.top=`-${(slidesLength-1)*100}vh`;
/*
slide-left a 4 div dont chaque div a 100% de la taille
de leur conteneur ie left-slide. Left-slide a ausssi 100% 
de son conteneur en height et 35% en width ie slide-container.

Donc tous les div fils de left-slide ont meme height que leur super container.
or left-slide est en position absolute. 
Donc le placer en top des valeur négative de n*100vh 
faire ramener en top l'un de ces fils en top.
Car tous ces fils sont proportionnel à 100.  
*/ 

upButton.addEventListener("click",()=>changeSlide("up"));
downButton.addEventListener("click",()=>changeSlide("down"));

const changeSlide=(direction)=>{
    const slideHeight=sliderContainer.clientHeight;
    if(direction=="up"){
        activesSlideIndex++;
        if(activesSlideIndex> slidesLength-1){
            activesSlideIndex=0;
        }
    }

    else if(direction=="down"){
           activesSlideIndex--;
           if(activesSlideIndex<0){
            activesSlideIndex=slidesLength-1;
           }
    }

    slideRight.style.transform=`translateY(-${slideHeight*activesSlideIndex}px)`;

    slideLeft.style.transform=`translateY(${slideHeight*activesSlideIndex}px)`;
    


}

const x=sliderContainer.clientHeight;
console.log(x);