const doc = document.querySelector("#root");
const searchBox = document.createElement("input");
doc.appendChild(searchBox);

const searchButton = document.createElement("button");
searchButton.innerHTML = "Search RickMorty";
doc.appendChild(searchButton);

searchButton.addEventListener("click", getRickMorty);
function getRickMorty() {
  const url = "https://rickandmortyapi.com/api/character/2";
  await fetch(url)
  
    .then((response) => {
      response.json();
      console.log(response);
    })
    .catch((error) => {
      // handle the error
    });
}
