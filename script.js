var video = document.querySelector('.video')
var juice = document.querySelector('.orange-juice')
var btn = document.getElementById('play-pause')


function ToggleVideoPlayer(){
    if(video.paused){
        btn.className = 'pause' ;
        video.play()
    }else{
        btn.className = 'play'
        video.pause()
    }
}

btn.addEventListener('click' , ()=>{
   ToggleVideoPlayer()
})

video.addEventListener('timeupdate' , ()=>{
    var juiceBar = video.currentTime/ video.duration;
    juice.style.width = juiceBar * 100 + '%'
})