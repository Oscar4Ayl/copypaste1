const SERVER = "https://oscar4ayl.alwaysdata.net";

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");
const status = document.getElementById("status");


// SEND
sendButton.onclick = async function () {

    try {

        const texte = await navigator.clipboard.readText();

        const response = await fetch(SERVER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
				app: "paperclip",
                request: "send",
                content: texte
            })
        });

        if (response.ok)
            status.textContent = "OK";
        else
            status.textContent = "ERREUR";

    } catch (error) {

        status.textContent = "ERREUR";

    }
};


// GET
getButton.onclick = async function () {

    try {

        const response = await fetch(SERVER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
				app: "paperclip",
                request: "get"
            })
        });

        const texte = await response.text();

        await navigator.clipboard.writeText(texte);

        status.textContent = "OK";

    } catch (error) {

        status.textContent = "ERREUR";

    }
};