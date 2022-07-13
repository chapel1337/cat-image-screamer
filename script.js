async function start() {

    let functions = {
        newAudio(audio) {
            audio = new Audio(audio);
            audio.play();
        },

        // credits to mau for wait function
        wait(time) {
            return new Promise(function(reset) {
                setInterval(function() {
                    reset(time)
                }, time * 1000);
            })
        },
    }

    async function spamAudio() {
        for (i = Infinity; i > 0; i++) {
            functions.newAudio("audio.mp3");

            await functions.wait(0.1);
        }
    }

    async function spamCatPictures() {
        for (i = Infinity; i > 0; i++) {
            // random cat picture function here

            await functions.wait(0.5);
        }
    }

    document.getElementById("cookie").style = ("background-color: darkcyan; height: 0px; width: 0px;");
    document.getElementById("cookie_h1").style = ("color: darkcyan; font-size: 0px;");
    document.getElementById("cookie_p1").style = ("color: darkcyan; font-size: 0px;");
    document.getElementById("cookie_p2").style = ("color: darkcyan; font-size: 0px;");
    document.getElementById("cookie_button1").style = ("background-color: darkcyan; height: 0px; width: 0px; color: darkcyan; font-size: 0px;");
    document.getElementById("cookie_button2").style = ("background-color: darkcyan; height: 0px; width: 0px; color: darkcyan; font-size: 0px;");

    spamAudio();
    spamCatPictures();

}

console.log("done");