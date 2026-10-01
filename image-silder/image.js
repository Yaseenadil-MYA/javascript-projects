const imges=[
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",

]

const sliderImage=document.querySelector("#silderImage");
const nexBtn=document.querySelector("#nextBut");
const prevBtn=document.querySelector("#prevBtn");


let curentIndex=0;


nexBtn.addEventListener("click",
    ()=>{
        if(curentIndex>=imges.length-1){

            curentIndex=0;
        }else{
            curentIndex++;
        }
        

        sliderImage.src=imges[curentIndex];
    }
)

prevBtn.addEventListener("click",
    ()=>{
        if(curentIndex<=0){
            curentIndex=imges.length-1
        }else{
            curentIndex--;
        }
        
        sliderImage.src=imges[curentIndex];
    }
)