// Required palette
const generateButton = document.querySelectorAll('.generateButton');
const characters = '0123456789ABCDEF';
const cohesive = document.querySelector('.Cohesive')
const baseHue = () => Math.floor(Math.random() * 360);

// ?functions
const getRandomNumber = ()=>{
    return Math.floor(Math.random()*characters.length)
}

const getRandomColor = (color)=>{
    color = '#';
    for(i = 0;i < 6; i++ ){
        color+=characters[getRandomNumber()]
    }
    return color
}

const generatePalette = () =>{
    const palette = document.querySelector('#palette');
    palette.innerHTML = '';

    for(let j = 0 ; j < 5 ; j++){
        const myColors = getRandomColor();
        const divs = document.createElement('div');
        divs.classList.add('color-block')
        divs.style.backgroundColor = myColors;
        palette.appendChild(divs);

        // text
        const hexCode = document.createElement('p');
        hexCode.textContent = getRandomColor();
        hexCode.classList.add('hex-code')
        divs.appendChild(hexCode)
    }
}

const generateCohesivepallete = () => {
    const palette = document.querySelector('#palette');
    palette.innerHTML = '';

    for(let k = 0 ; k < 5 ; k++){
        const hue = (baseHue() + k * 60) % 360; // Create analogous colors
        const cohesive = `hsl(${hue}, 70%, 50%)`;
        const divs = document.createElement('div');
        divs.classList.add('color-block')
        divs.style.backgroundColor = cohesive;
        palette.appendChild(divs);

        // text
        const hexCode = document.createElement('p');
        hexCode.textContent = getRandomColor();
        hexCode.classList.add('hex-code')
        divs.appendChild(hexCode)
    }
}


// Eventlisteners
cohesive.addEventListener('click',()=>{
    generateCohesivepallete()
})


document.addEventListener('DOMContentLoaded',()=>{
    generatePalette()
})

generateButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        generatePalette()
    })
})


































