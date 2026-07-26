const SERVER = "https://oscar4ayl.alwaysdata.net";

const sendButton = document.getElementById("send");
const getButton = document.getElementById("get");
const result = document.getElementById("result");


// SEND : envoie le contenu du presse-papier local au serveur
sendButton.onclick = async function () {

    try {

        const texte = await navigator.clipboard.readText();

        const response = await fetch(SERVER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                request: "send",
                content: texte
            })
        });

        const retour = await response.text();

        result.textContent = retour;

    } catch (error) {

        result.textContent = "Erreur SEND : " + error;

    }
};


// GET : récupère le contenu du serveur
getButton.onclick = async function () {

    try {

        const response = await fetch(SERVER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                request: "get"
            })
        });

		
        await navigator.clipboard.writeText(texte);
        const texte = await response.text();

        result.textContent = texte;

    } catch (error) {

        result.textContent = "Erreur serveur : " + error;

    }
};