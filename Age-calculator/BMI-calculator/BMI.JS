let height=document.getElementById("height");
let weight=document.getElementById("weight");
let btn=document.getElementById("bttn");
let result=document.getElementById("result");

btn.addEventListener("click",
    function(){
        let h=Number(height.value)/100;
        let w=Number(weight.value);
        
        let bmi=w/(h*h);

        if(bmi<18.5){
            result.textContent=`BMI:${bmi.toFixed(2)}-underweight`;
        }else if(bmi<25){
            result.textContent=`BMI:${bmi.toFixed(2)}-Normal`;

            

        }
        else if(bmi<30){
            result.textContent=`BMI:${bmi.toFixed(2)}-overweight`;
        }else{
            result.textContent=`BMI:${bmi.toFixed(2)}-obses`;
        }

    }
    
        
    
)