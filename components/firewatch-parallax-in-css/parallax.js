let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./components/firewatch-parallax-in-css/style.css";

document.head.appendChild(style);

let parallax = document.createElement("div");
parallax.className = "parallax";

let layer;
let asset;
let j;

for (let i = 0; i < 7; i++) {
    layer = document.createElement("div");

    j = i.toString();

    layer.className = "parallax__layer parallax__layer__" + j;

    asset = document.createElement("img");
    asset.src = "../asset/images/layer_" + j + ".png";

    layer.appendChild(asset);

    parallax.appendChild(layer);
}

layer = document.createElement("div");
layer.className = "parallax__cover";

parallax.appendChild(layer);

document.body.appendChild(parallax);

const content = document.getElementById("content");
layer.appendChild(content);