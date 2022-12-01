const sound1: HTMLAudioElement = new Audio ('./DrumPad/A.mp3'); 
const sound2:HTMLAudioElement = new Audio ('./DrumPad/C.mp3'); 
const sound3:HTMLAudioElement = new Audio ('./DrumPad/F.mp3'); 
const sound4:HTMLAudioElement = new Audio ('./Drumpad/G.mp3'); 
const sound5:HTMLAudioElement = new Audio ('./DrumPad/hihat.mp3'); 
const sound6:HTMLAudioElement = new Audio ('./DrumPad/kick.mp3'); 
const sound7:HTMLAudioElement = new Audio ('./DrumPad/laugh-1.mp3');
const sound8:HTMLAudioElement = new Audio ('./DrumPad/laugh-2.mp3'); 
const sound9:HTMLAudioElement = new Audio ('./DrumPad/snare.mp3'); 


function playSample(sound) {
   sound.play()
}

document.querySelector(".pad-1").addEventListener("click", function () {
    playSample(sound1)
})
document.querySelector(".pad-2").addEventListener("click", function () {
    playSample(sound2)
})
document.querySelector(".pad-3").addEventListener("click", function () {
    playSample(sound3)
})
document.querySelector(".pad-4").addEventListener("click", function () {
    playSample(sound4)
})
document.querySelector(".pad-5").addEventListener("click", function () {
    playSample(sound5)
})
document.querySelector(".pad-6").addEventListener("click", function () {
    playSample(sound6)
})
document.querySelector(".pad-7").addEventListener("click", function () {
    playSample(sound7)
})
document.querySelector(".pad-8").addEventListener("click", function () {
    playSample(sound8)
})
document.querySelector(".pad-9").addEventListener("click", function () {
    playSample(sound9)
})

