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
    var beat = [("./DrumPad/kick.mp3"), ("./DrumPad/hihat.mp3"), ("./DrumPad/snare.mp3")];
    var zaehler = 0;
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
    let myArray = [(sound5), (sound6), (sound9)];
    document.querySelector(".fa-microphone").addEventListener("click", function () {
        for (var i = 0; i < 4; i++) {
            let number = Math.random();
            (console.log(myArray));
            myArray.push(myArray[number]);
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//Zum Verständnis (für mich)
//let myArray []
//const myArray= []
//const number = math.random...
//for (i=0, i<4,i++){
//    const number= Mathrandom...
//    myArray.push (number);
//    (code ausführen)
//}
//myArray (3,2,1)
//variable setInterval geben, setIntervall namen geben, mit clearIntervall setIntervall ansprechen
//classList.add ()
//fügt der ClassList eine neue Klasse hinzu
//classList.remove ()
//entfernt eine Klasse aus der classList, ohne die übrigen Klassen zu beeinflussen.
//mit hidden arbeiten
//classList.toggle ()
//toggelt eine Klasse in die classList bzw. hinaus. Beim ersten Aufruf wird die Klasse eingeschaltet, beim zweiten Aufruf wird die Klasse entfernt.
//classList.length
//gibt die Zahl der Klassen in der classList an
//# sourceMappingURL=my-script.js.map