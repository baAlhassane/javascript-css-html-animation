const textarea=document.getElementById("textarea");
const tags=document.getElementById("tags");

tags.innerHTML="";
// tags.innerHTML="";
textarea.focus();

textarea.addEventListener("keyup",(e)=>{ 
processInput(e.target.value);

if(e.key==="Enter"){
    setTimeout(()=>{
        e.target.value="";
    },10);
    randomSelect();
}
})


function processInput(inputText){
    tags.innerHTML="";
    const words=inputText.split(",").
    filter(w=> w.trim()!=="")
    .map(w=>w.trim());

    words.forEach(w => {
        let span=document.createElement("span");
        span.classList.add("tag");
        span.innerText=w;
        console.log(span);
        tags.appendChild(span);
    });

    
}

function randomSelect(){
    const times=30;
    let i=0;
    const interval=setInterval(()=>{
           const randomTag=pickRandomTag();
           hightlightTag(randomTag);
           setTimeout(() => {
            unHightlightTag(randomTag)
           }, 100);

    },100)

    setTimeout(()=>{
     clearInterval(interval);
     setTimeout(()=>{
const randomTag=pickRandomTag();
hightlightTag(randomTag);
     },100);

    },times*100)

}


function pickRandomTag(){
    const tags=document.querySelectorAll(".tag");

    return tags[Math.floor(Math.random()*tags.length)];

}


function hightlightTag(tag){
    tag.classList.add("highlight");
}
function unHightlightTag(tag){
    tag.classList.remove("highlight");
}



