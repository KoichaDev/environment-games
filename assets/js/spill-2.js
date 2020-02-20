
document.addEventListener('DOMContentLoaded', () => {
    const mat = document.querySelectorAll('.mat');
    const ikkeMat = document.querySelectorAll('.ikke-mat');

    for(const matAvfall of mat) {
        // Adding the attribute of the items can't be draggable
        matAvfall.setAttribute('draggable', 'false');

        matAvfall.addEventListener('click', (e) => {
            e.preventDefault();

            // Added success sound if they click on the correct item
            const audio = new Audio('./assets/mp3/success-sound.mp3');
            audio.play();
            
            e.target.style.display = 'none';

            // This will return true if there is no more display is none
            if(Array.prototype.every.call(mat, ({ style }) => style.display === "none")) {
                alert('Woohooo! Du er så flink!')
            }
        })
    }

    for(const ikkeMatAvfall of ikkeMat) {
        // Adding the attribute of the items can't be draggable
        ikkeMatAvfall.setAttribute('draggable', 'false');

        ikkeMatAvfall.addEventListener('click', (e) => {
            e.preventDefault();

            // Added error sound if they click on a wrong item
            const audio = new Audio('./assets/mp3/error-sound.mp3');
            audio.play();

            // Creating an empty array
            const imgArr = [];
            
            // Pushing the URL path of the wrong image
            imgArr.push(e.target.src);
            
            // Overwriting the old image src to the x-mark image
            e.target.src = './assets/img/spill2/x-mark.png';
            
            // We want to loop through the array of the original URL path of the image
            for(const srcPath of imgArr) {
                const path = new URL(srcPath)
               console.log(imgArr)
                
               console.log(e.target)
                // After the image has displayed x-mark, we want to get the original src Path of the image 
                // from the array we did push at the beginning
                setTimeout(() => e.target.src = `${path.pathname}`, 1250);
            }
        });
    }

});


