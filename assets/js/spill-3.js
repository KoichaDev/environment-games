const animationSeal = () => {
    setInterval(() => {
        const imgArr = ['./assets/img/spill-3/seal-open.png', './assets/img/spill-3/seal-close.png'];

        // Getting the element for the parent class
        const img = document.querySelector('.images');

        // Creating a new img element
        const divImg = document.createElement('img');

        // Adding class name for the img element
        divImg.classList.add('img-seal')

        // Setting the attribute of the img element
        divImg.setAttribute('src', imgArr[0])

        // Appending from the parent to child element 
        img.appendChild(divImg);

        const replace = setTimeout(() => {
            // Replacing the old img to new Img
            document.querySelector('.img-seal').src = imgArr[1];
        }, 1500);

        // If setTimeout is true then we want to switch another picture
        if (replace) {
            document.querySelector('.img-seal').src = imgArr[0];
        }

        // We want to make sure it will not reproduce many pictures 
        if (img.childElementCount > 1) {
            document.querySelector('.img-seal').remove()
        }  

    }, 1000)
}

document.addEventListener('DOMContentLoaded', (e) => {
    animationSeal();
})