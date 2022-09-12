let navStyle = document.createElement("link");
navStyle.rel = "stylesheet";
navStyle.href = "./components/nav/style.css";

document.head.appendChild(navStyle);

const header = document.getElementById("header")
let nav = document.createElement("nav");
let logo = document.createElement("a");
logo.href = "./index.html";
logo.className = "logo";

let logoImg = document.createElement("img");
logoImg.src = "./asset/images/logo.png";
logoImg.alt = "logo";

logo.appendChild(logoImg);
nav.appendChild(logo);

let cv = document.createElement('a');
cv.href = "/asset/resource/CV_développeur_Informatique.pdf";
cv.target = "_blank"
cv.className = "cv";
cv.innerText = "CV EN PDF";

nav.appendChild(cv);

let contact = document.createElement("a");
contact.href = "#";
contact.className = "contact";
contact.innerText = "CONTACT";

nav.appendChild(contact);

let bomberman = document.createElement("a");
bomberman.href = "./pages/bomberman.html";
bomberman.className = "bomberman";
bomberman.innerText = "BOMBERMAN";

nav.appendChild(bomberman);

let gridGitHub = document.createElement("dive");
gridGitHub.className = "grid-github";

let gitHubLink = document.createElement("a");
gitHubLink.href = "https://github.com/ValentinVacher";

let gitHub = document.createElement("i");
gitHub.className = "fa-brands fa-github";
gitHubLink.target = "_blank"

gitHubLink.appendChild(gitHub);
gridGitHub.appendChild(gitHubLink);
nav.appendChild(gridGitHub)

header.appendChild(nav);
