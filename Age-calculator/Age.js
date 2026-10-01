let bod=document.getElementById("bob");
let btn=document.getElementById("btn");
let result=document.getElementById("result");

btn.addEventListener("click",
    function(){
        if(dob.value===""){
            result.textContent="please select your date of birth";
            return;
        }
        const birthDate=new Date(dob.value);
        const today=new Date();
        
        let age =today.getFullYear()-
        birthDate.getFullYear();

        const month=today.getMonth()-birthDate.getMonth();


        if(
            month<0||(month===0&&today.getDate()<birthDate.getDate())
        ){
            age--;
        }else
        result.textContent=`your Age is ${age} Years`
    }
);