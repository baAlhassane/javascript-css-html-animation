const result=document.getElementById("result");
const filter=document.getElementById("filter");
const listEtems=[];

async function getData(){
    const res= await fetch("https://randomuser.me/api?results=50");
    const {results} =await res.json();
// console.log(results);

result.innerHTML="";


results.forEach(user => {
    const li=document.createElement("li");

    listEtems.push(li);
     li.innerHTML=`<img src= "${user.picture.large}" alt="${user.name.fisrt}" > <div class="user-info">
     <h4>${user.name.first} ${user.name.last} </h4>

     <p>${user.location.city}, ${user.location.country} </p>
     </div> `

     result.appendChild(li);

});

}

getData();


filter.addEventListener("input",(e)=> filterData(e.target.value))

function  filterData(search){
    // listEtems.forEach(item=> console.log("--"+item.innerText+"--"));
    listEtems.forEach(item=> {
        if(item.innerText.toLowerCase().includes(search)){
            console.log(item.innerText);
            item.classList.remove("hide");
        }
        else{
            item.classList.add("hide");
        }
    });
}