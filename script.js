// written by chapel1337
// https://github.com/chapel1337
/* 
    DISCLAIMER: I DID NOT MAKE THIS FOR MALICIOUS INTENT, 
    I WAS JUST BORED AND WANTED TO MAKE SOMETHING FUNNY AND HARMLESS. 
    PLEASE DO NOT USE THIS WITH MALICIOUS INTENT. 
*/

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
            functions.newAudio("audios/audio1.mp3");
            functions.newAudio("audios/audio2.mp3");

            await functions.wait(0.1);
        }
    }

    async function clearAll() {
        document.getElementById("cookie").style = ("background-color: darkcyan; height: 0px; width: 0px;");
        document.getElementById("cookie_h1").style = ("color: darkcyan; font-size: 0px;");
        document.getElementById("cookie_p1").style = ("color: darkcyan; font-size: 0px;");
        document.getElementById("cookie_p2").style = ("color: darkcyan; font-size: 0px;");
        document.getElementById("cookie_button1").style = ("background-color: darkcyan; height: 0px; width: 0px; color: darkcyan; font-size: 0px;");
        document.getElementById("cookie_button2").style = ("background-color: darkcyan; height: 0px; width: 0px; color: darkcyan; font-size: 0px;");
    }

    async function spamTabs() {
        for (i = 25; i > 0; i++) {
            window.open("tab/tab.html")

            await functions.wait(0.5);
        }
    }

    async function spamWindows() {
        for (i = 10; i > 0; i++) {
            // messy code
            let newWindow = window.open("https://thiscatdoesnotexist.com/", "_blank", "height = 512, width = 512, left = 25, top = 50, toolbar = no, resizable = no, menubar = no, scrollbars = no");
            newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            
            <head>
                <meta charset = "UTF-8">
                <meta name = "viewport" content = "width = device-width">
            
                <link rel = "stylesheet" href = "tab.css">
            </head>
            
            <body>
            
                <iframe src = "https://thiscatdoesnotexist.com/" height = "512" width = "512"></iframe>
            
            </body>
            </html>
            `)

            await functions.wait(0.5);
        }
    }

    clearAll();
    spamAudio();
    spamTabs();
    spamWindows();

}

console.log("done");