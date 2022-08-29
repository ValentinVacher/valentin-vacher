let modernizr = document.createElement("script");
modernizr.src = "./components/firewatch-parallax-in-css/src/modernizr.min.js";
modernizr.type = "text/javascript";

document.head.appendChild(modernizr);

let normalize = document.createElement("link");
normalize.rel = "stylesheet";
normalize.href =
    "./components/firewatch-parallax-in-css/style/normalize.min.css";

document.head.appendChild(normalize);

let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./components/firewatch-parallax-in-css/style/style.css";

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
    asset.src =
        "./components/firewatch-parallax-in-css/asset/layer_" + j + ".png";

    layer.appendChild(asset);

    parallax.appendChild(layer);
}

layer = document.createElement("div");
layer.className = "parallax__cover";

parallax.appendChild(layer);

document.body.appendChild(parallax);

let jquery = document.createElement("script");
jquery.src = "./components/firewatch-parallax-in-css/src/jquery.min.js";

document.body.appendChild(jquery);