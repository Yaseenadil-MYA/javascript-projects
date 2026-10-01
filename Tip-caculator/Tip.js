
let bill=document.getElementById("bill");
let tip=document.getElementById("tip");
let btn=document.getElementById("btn");
let result=document.getElementById("result");


btn.addEventListener("click",
    function(){
        if(bill.value===""||tip.value===""){
            result.textContent="pleace enter bill amount and tip percentage";
            return;
        };
       
        const billAmount=Number(bill.value);
        const tippercent=Number(tip.value);
        const tipAmount=(billAmount*tippercent)/100;
        const total=billAmount+tipAmount;

        //  result.textContent=`Tip:${tipAmount.toFixed(2)}AFG|Totle:${billAmount.toFixed(2)}AFG`


        result.textContent=`Tip: ${tipAmount}AFG| Total:${total} AFG`;
    }
)