const bac = document.getElementById("bac");
const licence = document.getElementById("licence")
const autoformation = document.getElementById("autoformation");

parallax.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const toBacToTopViewport = bac.getBoundingClientRect().top;
    const toLicenceToTopViewport = licence.getBoundingClientRect().top;
    const topAutoformationToViewport = autoformation.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + toBacToTopViewport).toFixed() - clientHeight * 0.8 && scrollTop < (scrollTop + toBacToTopViewport).toFixed() - clientHeight * 0.3){
        bac.className = 'right-active visible';
    }
    else if((scrollTop > (scrollTop + toBacToTopViewport).toFixed() - clientHeight * 0.2) || (scrollTop < (scrollTop + toBacToTopViewport).toFixed() - clientHeight * 0.9 && bac.className === 'right-active visible')){
        bac.className = 'reverse-right-active';
    }

    if(scrollTop > (scrollTop + toLicenceToTopViewport).toFixed() - clientHeight * 0.8 && scrollTop < (scrollTop + toLicenceToTopViewport).toFixed() - clientHeight * 0.3){
        licence.className = 'left-active visible';
    }
    else if(scrollTop > (scrollTop + toLicenceToTopViewport).toFixed() - clientHeight * 0.2 || (scrollTop < (scrollTop + toLicenceToTopViewport).toFixed() - clientHeight * 0.9 && licence.className === 'left-active visible')){
        licence.className = 'reverse-left-active';
    }

    if(scrollTop > (scrollTop + topAutoformationToViewport).toFixed() - clientHeight * 0.8 && scrollTop < (scrollTop + topAutoformationToViewport).toFixed() - clientHeight * 0.3){
        autoformation.className = 'right-active visible';
    }
    else if(scrollTop > (scrollTop + topAutoformationToViewport).toFixed() - clientHeight * 0.2 || (scrollTop < (scrollTop + topAutoformationToViewport).toFixed() - clientHeight * 0.9 && autoformation.className === 'right-active visible')){
        autoformation.className = 'reverse-right-active';
    }
})