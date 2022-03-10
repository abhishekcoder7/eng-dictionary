var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "bsun3.png";
    }
    else {
        icon.src = "lsun3.png";
    }
}
const resDiv = document.querySelector(".res");
const welement = document.querySelector(".w");
const phonetics = document.querySelector(".phonetics");
const audio = document.querySelector("audio");
const wordmeaning = document.querySelector(".wdefin");

const Url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
const handle = async (x) => {
    if (x.keyCode == 13) {
        const word = x.target.value;
        const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await result.json();
        resDiv.style.display = "block";
        if (!result.ok) {
            alert("No such word exist.");
            return;
        }
        welement.innerText = data[0].word;
        phonetics.innerText = data[0].phonetics[0].text;
        audio.src = data[0].phonetics[0].audio;
        wordmeaning.innerText = data[0].meanings[0].definitions[0].definition;
        const synonyms = data[0].meanings[0].definitions[0].synonyms;
        let synonymsData = "";
        for (let i = 0; i < synonyms.length; i++) {
            synonymsData += `<p class="pills">${synonyms[i]}<p>`;
        }
        document.querySelector(".Synon").innerHTML = synonymsData;
        return;
    }

}
