let count=0;

let Number=document.querySelector("#Number");
let startbtn=document.querySelector("#start-btn")
let stopbtn=document.querySelector("#stop-btn")
let Restbtn=document.getElementById("Rest-btn")


startbtn.addEventListener("click",
    function (){
        count=count+1;
        Number.textContent=count;
        uptad();

    }
)


stopbtn.addEventListener("click",
    function(){
        count=count-1;
        Number.textContent=count;
        uptad();
    }
)
Restbtn.addEventListener("click",
    function(){
        count=0
        Number.textContent=count;
        uptad();
    }
)


function uptad() {

    if(count>0){
    Number.style.color="green";
    document.body.style.backgroundColor="red";
}else if(count<0){
    Number.style.color="red"
    document.body.style.backgroundColor="green"
} else{
    Number.style.color="black"
    document.body.style.backgroundColor="white"

}

}
