document.addEventListener("click" , ()=>{
    setTimeout(() => {
        let audio = new Audio("audio.m4a");
        audio.volume = 0.1;
        audio.play();
        
    }, 2000);  
})

setTimeout(() => {
    let audio = new Audio("audio.m4a");
    audio.volume = 0.1;
    audio.play();
    
}, 2000);  