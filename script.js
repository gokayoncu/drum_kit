let btnA = document.getElementById(`a`);
let btnS = document.getElementById(`s`);
let btnD = document.getElementById(`d`);
let btnF = document.getElementById(`f`);
let btnG = document.getElementById(`g`);
let btnH = document.getElementById(`h`);
let btnJ = document.getElementById(`j`);
let btnK = document.getElementById(`k`);
let btnL = document.getElementById(`l`);
let png1 = document.getElementById(`png1`);
let png2 = document.getElementById(`png2`);
let div = document.querySelector(".empty");




let boom= new Audio("document/boom.wav");
let clap= new Audio("document/clap.wav");
let hihat= new Audio("document/hihat.wav");
let kick= new Audio("document/kick.wav");
let openhat= new Audio("document/openhat.wav");
let ride= new Audio("document/ride.wav");
let snare= new Audio("document/snare.wav");
let tink= new Audio("document/tink.wav");
let tom= new Audio("document/tom.wav");


div.addEventListener( "click", function (event) { 
    const newId = event.target.id;
    switch (newId) {
        case "a":
            playAudio(boom);
        case "s":
            playAudio(clap);
            break;
        case "d":
            playAudio(hihat);
            break;
        case "f":
            playAudio(kick);
            break;
        case "g":
            playAudio(openhat);
            break;
        case "h":
            playAudio(ride);
            break;
        case "j":
            playAudio(snare);
            break;
        case "k":
            playAudio(tink);
            break;
        case "l":
            playAudio(tom);
            break;
        default:
            break;
    }
});



document.addEventListener("keydown", function ( e ) {
    
    switch (e.keyCode) {
        case 65:
            playAudio(boom);
            btnA.classList.add("playing")
            png1.classList.add(`bagetClip`)
            png2.classList.add(`baget2Clip`)    
        break;
        case 83:
            playAudio(clap);
            btnS.classList.add("playing")
            png2.classList.add(`baget2Clip`)
        break;
        case 68:
            playAudio(hihat);
            btnD.classList.add("playing")
            png2.classList.add(`baget2Clip`)
        break;
        case 70:
            playAudio(kick);
            btnF.classList.add("playing")
            png1.classList.add(`bagetClip`)
            png2.classList.add(`baget2Clip`)
        break;
        case 71:
            playAudio(openhat);
            btnG.classList.add("playing")
            png2.classList.add(`baget2Clip`)
        break;
        case 72:
            playAudio(ride);
            btnH.classList.add("playing")
            png1.classList.add(`bagetClip`)
        break;
        case 74:
            playAudio(snare);
            btnJ.classList.add("playing")
            png2.classList.add(`baget2Clip`)
        break;
        case 75:
            playAudio(tink);
            btnK.classList.add("playing")
            png1.classList.add(`bagetClip`)
        break;
        case 76:
            playAudio(tom);
            btnL.classList.add("playing")
            png2.classList.add(`baget2Clip`)
        break;
    
        default:
            break;
    }
})
document.addEventListener("keyup", function ( e ) {
    
    switch (e.keyCode) {
        case 65:
            btnA.classList.remove("playing")
            png1.classList.remove(`bagetClip`)
            png2.classList.remove(`baget2Clip`)
        break;
        case 83:
            btnS.classList.remove("playing")
            png2.classList.remove(`baget2Clip`)
        break;
        case 68:
            btnD.classList.remove("playing")
            png2.classList.remove(`baget2Clip`)
        break;
        case 70:
            btnF.classList.remove("playing")
            png1.classList.remove(`bagetClip`)
            png2.classList.remove(`baget2Clip`)
        break;
        case 71:
            btnG.classList.remove("playing")
            png2.classList.remove(`baget2Clip`)
        break;
        case 72:
            btnH.classList.remove("playing")
            png1.classList.remove(`bagetClip`)
        break;
        case 74:
            btnJ.classList.remove("playing")
            png2.classList.remove(`baget2Clip`)
        break;
        case 75:
            btnK.classList.remove("playing")
            png1.classList.remove(`bagetClip`)
        break;
        case 76:
            btnL.classList.remove("playing")
            png2.classList.remove(`baget2Clip`)
        break;
    
        default:
            break;
    }
})


function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}
