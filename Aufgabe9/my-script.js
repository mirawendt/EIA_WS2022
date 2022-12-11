var Aufgabe9;
(function (Aufgabe9) {
    const sound1 = new Audio('./DrumPad/A.mp3');
    const sound2 = new Audio('./DrumPad/C.mp3');
    const sound3 = new Audio('./DrumPad/F.mp3');
    const sound4 = new Audio('./Drumpad/G.mp3');
    const sound5 = new Audio('./DrumPad/hihat.mp3');
    const sound6 = new Audio('./DrumPad/kick.mp3');
    const sound7 = new Audio('./DrumPad/laugh-1.mp3');
    const sound8 = new Audio('./DrumPad/laugh-2.mp3');
    const sound9 = new Audio('./DrumPad/snare.mp3');
    let intervall;
    var playing = false;
    var beat = [("./DrumPad/kick.mp3"), ("./DrumPad/hihat.mp3"), ("./DrumPad/snare.mp3")];
    var alleToene = [
        "./DrumPad/A.mp3",
        "./DrumPad/C.mp3",
        "./DrumPad/F.mp3",
        "./Drumpad/G.mp3",
        "./DrumPad/hihat.mp3",
        "./DrumPad/kick.mp3",
        "./DrumPad/laugh-1.mp3",
        "./DrumPad/laugh-2.mp3",
        "./DrumPad/snare.mp3",
    ];
    var zaehler = 0;
    var intervallId;
    function remix() {
        playing = true;
        var zaehler = 0;
        var toeneTotal = 3;
        let i = 0;
        while (i < toeneTotal) {
            var item = alleToene[Math.floor(Math.random() * alleToene.length)];
            alleToene.push(item);
            i = i + 1;
        }
    }
    function playThis(soundQuelle) {
        const sound = new Audio(soundQuelle);
        sound.play();
    }
    function playBeat() {
        intervall = setInterval(function () {
            playThis(beat[zaehler]);
            console.log("test");
            zaehler++;
            if (zaehler === 3) {
                zaehler = 0;
            }
        }, 500);
    }
    function playSample(sound) {
        sound.play();
    }
    document.querySelector(".pad-1").addEventListener("click", function () {
        playSample(sound1);
    });
    document.querySelector(".pad-2").addEventListener("click", function () {
        playSample(sound2);
    });
    document.querySelector(".pad-3").addEventListener("click", function () {
        playSample(sound3);
    });
    document.querySelector(".pad-4").addEventListener("click", function () {
        playSample(sound4);
    });
    document.querySelector(".pad-5").addEventListener("click", function () {
        playSample(sound5);
    });
    document.querySelector(".pad-6").addEventListener("click", function () {
        playSample(sound6);
    });
    document.querySelector(".pad-7").addEventListener("click", function () {
        playSample(sound7);
    });
    document.querySelector(".pad-8").addEventListener("click", function () {
        playSample(sound8);
    });
    document.querySelector(".pad-9").addEventListener("click", function () {
        playSample(sound9);
    });
    document.querySelector(".fa-play").addEventListener("click", function () {
        playBeat();
        document.querySelector('.fa-stop').classList.remove('hidden');
        document.querySelector('.fa-play').classList.add('hidden');
    });
    document.querySelector(".fa-stop").addEventListener("click", function () {
        document.querySelector('.fa-play').classList.remove('hidden');
        document.querySelector('.fa-stop').classList.add('hidden');
        clearInterval(intervall);
    });
    document.querySelector(".fa-microphone").addEventListener("click", function () { remix(); });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=my-script.js.map