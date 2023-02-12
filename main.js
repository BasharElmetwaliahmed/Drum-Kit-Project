window.addEventListener('keydown',(e)=>{
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"`);
        let key=document.querySelector(`div[data-key="${e.keyCode}"`);

    if(!audio) return;
    audio.currentTime=0  //reset audio to zero
    audio.play();
    
    key.classList.add('play')
})
const removeTranisitionHandler=(e)=>{
    if(e.propertyName!='transform') return;
    e.target.classList.remove("play");
}
const keys=document.querySelectorAll(".key");
keys.forEach(key=>{
   addEventListener('transitionend',removeTranisitionHandler)
})

