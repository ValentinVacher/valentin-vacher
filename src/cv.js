const cv = document.getElementById("cv");

const position = cv.getBoundingClientRect();

document.addEventListener("click", e => {
    console.log(e)
    console.log(position)
    if( e.clientX > position.x && 
        e.clientY > position.y && 
        e.clientX < position.width + position.x && 
        e.clientY < position.height + position.y){
            console.log("test");
        }
})