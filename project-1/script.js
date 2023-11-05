const loadText=document.querySelector(".loading-text");
const bg=document.querySelector(".bg");


let int=setInterval(bluring,30);
let load =0;
let s=-1;

function bluring(){
    load++;
    if(load>99){
        clearInterval(int);
        //console.log(load);
    }
   
    
    loadText.innerHTML=`${load}%`//load augmante mais s diminue de 0.99 à 0;
    s=scale(load,0,100,1,0);//mais s diminue de 0.99 à 0;
    loadText.style.opacity=s;
    console.log(load, s);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
    console.log(load, " blur : "+scale(load,0,100,30,0));//s diminue de 30px à 0;
    /*Applies a blur effect to the image. A larger value will create more blur.
    If no value is specified, 0 is used. 
    */
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }