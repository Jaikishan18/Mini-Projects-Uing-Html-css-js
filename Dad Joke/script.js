const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method : "GET",
    header:{
        "X-Api-Key":apiKey,
    },

}
const pEl = document.getElementById('joke')

 async function getJoke(){
const response = await fetch(apiURL,options)
const data = await response.json()
pEl.innerText = data[0].joke
}

const btnEl = document.getElementById('btn')

btnEl.addEventListener("click",getJoke)