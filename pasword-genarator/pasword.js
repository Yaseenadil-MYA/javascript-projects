let pasinpt=document.getElementById("pasinpt");
let btn=document.getElementById("btn");

const chrctor='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfhjklzxcvbnm1234567890!@$%^&*()_+{}|:,.?'
  


btn.addEventListener("click",
    function(){
        
        let pasword="";

        let paslentht=8
    
        for(let i=0; i<paslentht; i++){
            const randomindex=Math.floor(Math.random()*chrctor.length)
            
            pasword+=chrctor[randomindex];
             pasinpt.value=pasword
        }
       
    }
)




// let inpt=document.getElementById("pasinpt");
// let btn=document.getElementById("btn");
// let chractor='ASQWERTYUJKILOPZXCCVBNM1234567890-=';


// btn.addEventListener("click",
//     function(){
//         let  pasword="";
//         // let paslenght=10

//         for(let i=0; i<10; i++){
//             const randomindex=Math.floor(Math.random()*chractor.length);
//             pasword+=chractor[randomindex];
//             inpt.value=pasword;

//         }
//     }
// )