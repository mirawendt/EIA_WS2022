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
    const pad1 = document.querySelector('.pad-1');
    const pad2 = document.querySelector('.pad-2');
    const pad3 = document.querySelector('.pad-3');
    const pad4 = document.querySelector('.pad-4');
    const pad5 = document.querySelector('.pad-5');
    const pad6 = document.querySelector('.pad-6');
    const pad7 = document.querySelector('.pad-7');
    const pad8 = document.querySelector('.pad-8');
    const pad9 = document.querySelector('.pad-9');
    const playBtn = document.querySelector('#playBtn');
    const remixI = document.querySelector('#remixI');
    const allSounds = [
        sound1,
        sound2,
        sound3,
        sound4,
        sound5,
        sound6,
        sound7,
        sound8,
        sound9
    ];
    let intervallId;
    let playI = document.querySelector('#playI');
    let stopI = document.querySelector('#stopI');
    let beat = [sound5, sound6, sound9];
    let playing = false;
    function playSample(sound) {
        sound.play();
    }
    pad1.addEventListener('click', function () {
        playSample(sound1);
    });
    pad2.addEventListener('click', function () {
        playSample(sound2);
    });
    pad3.addEventListener('click', function () {
        playSample(sound3);
    });
    pad4.addEventListener('click', function () {
        playSample(sound4);
    });
    pad5.addEventListener('click', function () {
        playSample(sound5);
    });
    pad6.addEventListener('click', function () {
        playSample(sound6);
    });
    pad7.addEventListener('click', function () {
        playSample(sound7);
    });
    pad8.addEventListener('click', function () {
        playSample(sound8);
    });
    pad9.addEventListener('click', function () {
        playSample(sound9);
    });
    playBtn.addEventListener('click', function () {
        if (playing === true) {
            playing = false;
            playI.classList.remove('hidden');
            stopI.classList.add('hidden');
            clearInterval(intervallId);
        }
        else {
            playing = true;
            playI.classList.add('hidden');
            stopI.classList.remove('hidden');
            let i = 0;
            intervallId = setInterval(function () {
                playSample(beat[i]);
                i++;
                if (i === 3) {
                    i = 0;
                }
            }, 500);
        }
    });
    remixI.addEventListener('click', function () {
        let remix = [];
        for (let index = 0; index < 3; index++) {
            const randomNumber = Math.round(Math.random() * 9);
            remix.push(allSounds[randomNumber.toString()]);
        }
        beat = remix;
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=my-script.js.map