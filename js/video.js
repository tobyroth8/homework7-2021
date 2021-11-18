var video = document.querySelector("#player1");

window.addEventListener("load", function() {
    console.log("Good job opening the window")

});




document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML = video.volume*100 + "%";
});






document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});
document.querySelector("#slower").addEventListener("click", function(){
    video.playbackRate *= 0.95;
    console.log("Slow Down by: ", video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function(){
    video.playbackRate *=1.05;
    console.log("Speed up by: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
    video.currentTime += 15; 
    console.log("Skip Ahead: ", video.currentTime)
    video.addEventListener('ended', function(){
        video.currentTime = 0;
        video.play();
    });
});








document.querySelector("#mute").addEventListener("click", function(){
    if (video.muted == false) {
        video.muted = true;
        console.log("video muted")
        document.getElementById("mute").innerHTML = "Unmute"
    }
    
    
    else {
        video.muted = false;
        console.log("video unmuted")
        document.getElementById("mute").innerHTML = "Mute"

    }
    
});









document.querySelector("#slider").addEventListener("change", function(){
    video.volume = this.value/100;
    console.log(video.volume);
    document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

document.querySelector('#vintage').addEventListener("click", function(){
    video.classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function(){
    video.classList.remove("oldSchool");
});









