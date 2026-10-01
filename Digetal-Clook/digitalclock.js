let clock=document.getElementById('clock');

setInterval(()=>{
    let data =new Date();
    clock.innerHTML= data.toLocaleTimeString();
});