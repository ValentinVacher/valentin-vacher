let navStyle = document.createElement("link");
navStyle.rel = "stylesheet";
navStyle.href = "./components/nav/style.css";

document.head.appendChild(navStyle);

const header = document.getElementById("header")
let nav = document.createElement("nav");
let logo = document.createElement("a");
logo.href = "index.html";
logo.className = "logo";

let logoImg = document.createElement("img");
logoImg.src = "./asset/images/logo.png";
logoImg.alt = "logo";

logo.appendChild(logoImg);
nav.appendChild(logo);

let cv = document.createElement('a');
cv.href = "./asset/resource/Valentin_Vacher_CV.pdf";
cv.target = "_blank"
cv.className = "cv";
cv.innerText = "CV EN PDF";

nav.appendChild(cv);

let contact = document.createElement("a");
contact.href = "portfolio.html";
contact.className = "portfolio";
contact.innerText = "PORTFOLIO";

nav.appendChild(contact);

let bomberman = document.createElement("a");
bomberman.href = "bomberman.html";
bomberman.className = "bomberman";
bomberman.innerText = "BOMBERMAN";
bomberman.target = "_blank";

nav.appendChild(bomberman);

let gridGitHub = document.createElement("dive");
gridGitHub.className = "grid-github";

let gitHubLink = document.createElement("a");
gitHubLink.href = "https://github.com/ValentinVacher";
gitHubLink.target = "_blank"

let gitHub = document.createElement("i");
gitHub.className = "fa-brands fa-github";

gitHubLink.appendChild(gitHub);
gridGitHub.appendChild(gitHubLink);
nav.appendChild(gridGitHub)

header.appendChild(nav);
