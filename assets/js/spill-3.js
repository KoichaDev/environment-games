const sealAnimation = () => {

    const img = ['./assets/img/spill-3/seal-open.png', './assets/img/spill-3/seal-close.png'];

    
    setInterval(() => {
        for(let i = 0; i < img.length; i++) {
             const divImg = document.createElement('img');

             // Add the attribute of the img element
             divImg.setAttribute('src', img[0]);

             // Getting the parent Class
             const sealClass = document.querySelector('.seal');

             // Appending from the parent class to the child class
             sealClass.parentNode.append(sealClass, divImg);

             

        }
    }, 300);
  
}

document.addEventListener('DOMContentLoaded', () => {
    

    sealAnimation()

});