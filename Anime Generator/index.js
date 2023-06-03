const btnEl = document.getElementById("btn")
const contentEl = document.querySelector(".content-container")
const animeImgEl = document.querySelector(".anime-img")
const contentcontainerEl = document.querySelector(".content-container")
const animeNameEl = document.querySelector(".anime-name")
btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading"
        const url = `https://api.catboys.com/img`
        const response = await fetch(url)
        const data = await response.json()
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"




        contentcontainerEl.style.display = "block"
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;


    } catch (error) {
        console.log(error)
    }
})
