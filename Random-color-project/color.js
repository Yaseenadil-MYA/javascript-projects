const btn=document.getElementById("btn");
const colorCode=document.getElementById("colorCode");
const letters="0123456789ABCDEF";


btn.addEventListener("click",
    function(){
        let color="#"
        for(let i=0; i<6;i++){
            let rando=Math.floor(Math.random()*16);
            color+=letters[rando]
        }
        document.body.style.backgroundColor=color;
        colorCode.textContent=color;
    }
)