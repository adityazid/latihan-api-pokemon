// function fetchData() {
//     const xhttp = new XMLHttpRequest();
//     const url = "http://pokeapi.co/api/v2/pokemon?offset=30&limit=30";
//     const htttpMethod = "GET";

//     xhttp.onload = function() {
//         const response = JSON.parse(this.responseText);
//         const results = response.results;
        
//         let data = "";
//         for (i = 0; i < results.length; i++) {
//             data = data + `<p>${results[i].name}</p>`;
            
//         }
//         document.getElementById("pokemon").innerHTML = data;
//     };           
//     xhttp.open(htttpMethod, url);
//     xhttp.send();
// }

const btn = document.getElementById("get-pokemon");

btn.addEventListener("click", function() {
    displayPokemon();
});

async function fetchData() {
    const response = await fetch("http://pokeapi.co/api/v2/pokemon?offset=30&limit=30", {
        method: "GET",
    });
    const json = await response.json();

    console.log(json);
    return json;
}

async function displayPokemon() {
    const data = await fetchData();

    let number = document.getElementById("number");
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let div = document.getElementById("pokemon");

    div.style.background = "#FFFF00";
    div.style.display = "inline-block";

    number.innerHTML = `${data.id}:`;

    name.innerHTML = data.name;

    document.getElementById("img").src = data.sprites.front_shiny;

    type.innerHTML = `type: ${data.types[0].type.name}`;
}