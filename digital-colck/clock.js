// let clock=document.getElementById("clock");



// setInterval(()=>{
//       let data =new Date();
//     clock.innerHTML= data.toLocaleTimeString();
// })


// let clock=document.getElementById("clock");

// setInterval(()=>{
//     let data=new Date();
//     clock.innerHTML=data.toLocaleTimeString()
    

// })
const clock = document.getElementById("clock");
const dateLabel = document.getElementById("date");

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const dateString = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    clock.textContent = timeString;
    dateLabel.textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);