const btn = document.querySelector(".btn");

const closeIcon = document.querySelector(".close-icon");

const trailerContainer = document.querySelector(".trailer-contaier");

const video = document.querySelector("video");


btn.addEventListener("click",()=>{
    trailerContainer.classList.remove("active");
})


closeIcon.addEventListener("click",()=>{
    trailerContainer.classList.add("remove");
    video.pause();
    video.currentTime=0;
})