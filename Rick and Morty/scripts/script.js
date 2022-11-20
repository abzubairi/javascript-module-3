// Accessing Main Div
const mainDiv = document.getElementById("root");

// creating new elements div and nav
const div = document.createElement("div");
const nav = document.createElement("nav");

//Giving div and Id and a Class
div.id = "container";
div.classList.add("header");

// Giving nav a class
nav.classList.add("header-logo");
// Giving nav and img
const myImage = new Image(200);
myImage.src = "images/image4.png";

nav.appendChild(myImage);
//Appending child for making the header
div.appendChild(nav);
mainDiv.appendChild(div);

// Now it's Time to create SideBar

// Creating Elements (Div)(ul)(li)(header)
const div2 = document.createElement("div");
const ul = document.createElement("ul");
const header = document.createElement("header");

//header inside text
header.innerText = "All Episodes";
//Giving these Elements an class
div2.classList.add("sidebar");
ul.id = "episodes-list";

//Adding button in the sidebar
const LoadMoreButton = document.createElement("button");
LoadMoreButton.innerText = "Load More";

// Adding Class to the Load more button
LoadMoreButton.classList.add("load-more");

//Create Episodes Array
const episodeArray = [
  "Episode-1",
  "Episode-2",
  "Episode-3",
  "Episode-4",
  "Episode-5",
  "Episode-6",
  "Episode-7",
  "Episode-8",
  "Episode-9",
  "Episode-10",
  "Episode-11",
  "Episode-12",
  "Episode-12",
];

const createLi = (e) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href = "#">${e}</a>`;
  return li;
};
const arrayElements = episodeArray.map((e) => createLi(e));

// appeding child and a button

div2.appendChild(header);
div2.appendChild(ul);
arrayElements.forEach((node) => ul.appendChild(node));
div2.appendChild(LoadMoreButton);

// Adding Functionality to the button

// first selecting li Elements

let currentEpisodes = 8;
//Adding even listener
LoadMoreButton.addEventListener("click", () => {
  for (let i = currentEpisodes; i <= currentEpisodes + 8; i++) {
    if (li[i]) {
      li[i].style.display = "flex";
    }
  }
  currentEpisodes += 2;
});

// main div append all these
mainDiv.appendChild(div2);

//Creating div,h1,p elements
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");

// h1 & p
const h1 = document.createElement("h1");
const p = document.createElement("p");

// adding event listner
h1.innerText = "";

//getting Object from Rick and morty Api

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((promise) => renderCharacters(promise.results));

function renderCharacters(array) {
  array.forEach((character) =>
    fetch(character.episode).then((response) => console.log(response))
  );
}
