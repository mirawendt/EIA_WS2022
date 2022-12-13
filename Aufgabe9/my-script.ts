
namespace Aufgabe9 {
    const sound1: HTMLAudioElement = new Audio('./DrumPad/A.mp3');
    const sound2: HTMLAudioElement = new Audio('./DrumPad/C.mp3');
    const sound3: HTMLAudioElement = new Audio('./DrumPad/F.mp3');
    const sound4: HTMLAudioElement = new Audio('./Drumpad/G.mp3');
    const sound5: HTMLAudioElement = new Audio('./DrumPad/hihat.mp3');
    const sound6: HTMLAudioElement = new Audio('./DrumPad/kick.mp3');
    const sound7: HTMLAudioElement = new Audio('./DrumPad/laugh-1.mp3');
    const sound8: HTMLAudioElement = new Audio('./DrumPad/laugh-2.mp3');
    const sound9: HTMLAudioElement = new Audio('./DrumPad/snare.mp3');

    const pad1: HTMLElement = document.querySelector('.pad-1');
    const pad2: HTMLElement = document.querySelector('.pad-2');
    const pad3: HTMLElement = document.querySelector('.pad-3');
    const pad4: HTMLElement = document.querySelector('.pad-4');
    const pad5: HTMLElement = document.querySelector('.pad-5');
    const pad6: HTMLElement = document.querySelector('.pad-6');
    const pad7: HTMLElement = document.querySelector('.pad-7');
    const pad8: HTMLElement = document.querySelector('.pad-8');
    const pad9: HTMLElement = document.querySelector('.pad-9');

    const playBtn: HTMLElement = document.querySelector('#playBtn');
    const remixI: HTMLElement = document.querySelector('#remixI');
    
    const allSounds: HTMLElement[] = 
    [
        sound1,
        sound2,
        sound3,
        sound4,
        sound5,
        sound6,
        sound7,
        sound8,
        sound9
    ]
    let intervallId: number;

    let playI: HTMLElement = document.querySelector('#playI');
    let stopI: HTMLElement = document.querySelector('#stopI');

    let beat: HTMLAudioElement [] = [sound5, sound6, sound9];
    let playing: boolean = false;

    


    





 












}
