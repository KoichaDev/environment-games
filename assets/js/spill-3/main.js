import { loopAddElement, sleep, isOverlapping } from './help-function.mjs';

const spillObj = {
  startSealAnimation: 300,
  trashScore: 0,
  foodScore: 0
};

let { trashScore, foodScore } = spillObj;

const score = document.getElementById('score');

if (score <= 8) {
  document.getElementById('score').style.color = 'red';
} else if (score >= 16) {
  document.getElementById('score').style.color = '#abab15';
}
if (score >= 16) {
  document.getElementById('score').style.color = 'green';
}

document.addEventListener('DOMContentLoaded', e => {
  const foodImg = [
    { img: './assets/img/spill-3/blue-fish.png', flag: true },
    { img: './assets/img/spill-3/fat-fish.png', flag: true },
    { img: './assets/img/spill-3/eple.png', flag: true },
    { img: './assets/img/spill-3/jordbær.png', flag: true },
    { img: './assets/img/spill-3/squash.png', flag: true },
    { img: './assets/img/spill-3/reke.png', flag: true },
    { img: './assets/img/spill-3/salat.png', flag: true },
    { img: './assets/img/spill-3/sharp-blue-fish.png', flag: true },
    { img: './assets/img/spill-3/yellow-fish.png', flag: true },
    { img: './assets/img/spill-3/ketchup.png', flag: true },
    { img: './assets/img/spill-3/muggen-brød.png', flag: true }
  ];

  const trashImg = [
    { img: './assets/img/spill-3/bread-box.png', flag: true },
    { img: './assets/img/spill-3/soda-box.png', flag: true },
    { img: './assets/img/spill-3/klokke.png', flag: true },
    { img: './assets/img/spill-3/q-tips.png', flag: true },
    { img: './assets/img/spill-3/tannbørste.png', flag: true },
    { img: './assets/img/spill-3/skyr.png', flag: true },
    { img: './assets/img/spill-3/brille.png', flag: true },
    { img: './assets/img/spill-3/eple-flaske.png', flag: true },
    { img: './assets/img/spill-3/kkartong.png', flag: true },
    { img: './assets/img/spill-3/kkrykke.png', flag: true },
    { img: './assets/img/spill-3/tannbørste.png', flag: true },
    { img: './assets/img/spill-3/tom-kartong.png', flag: true },
    { img: './assets/img/spill-3/ttruse.png', flag: true },
    { img: './assets/img/spill-3/ssokker.png', flag: true }
  ];

  const foodElements = foodImg.map(image => {
    const element = document.createElement('img');
    element.className = 'food-item';
    element.src = image.img;
    element.setAttribute('data-display-img', image.flag);
    return element;
  });

  const trashElements = trashImg.map(image => {
    const element = document.createElement('img');
    element.className = 'trash-item';
    element.src = image.img;
    element.setAttribute('data-display-img', image.flag);
    return element;
  });

  const mixObjImg = [...foodElements, ...trashElements];
  mixObjImg.sort(() => Math.random() - 0.5);

  (async () => {
    const itemObj = document.querySelector('.item-obj');
    for (let i = 0; i < mixObjImg.length; i++) {
      document.getElementById('total-trash-score').innerHTML = mixObjImg.length;

      // Getting the index positions of the array each 1 second at the time
      await sleep(1000);

      const getImgDataAttribute = mixObjImg[i].getAttribute('data-display-img');

      // Reversing the order of the item to "popping" on the screen
      const prependImages = () => itemObj.prepend(mixObjImg[i]);

      if (getImgDataAttribute === 'true') {
        prependImages();
      }

      // We want to add Event Listener on click based on the trash item, because we don't want it to display on the screen
      // Think of it as a "delay" by not showing on the screen
      mixObjImg[i].addEventListener('click', e => {
        trashScore = trashScore + 1;
        document.getElementById('score').innerHTML = trashScore;

        /*  // Looping through the Trash Items
        for (const trashItems of trashElements) {
          // Flagging all of the image false to not display in 1 second
          setTimeout(() => {
            // trashItems.style.pointerEvents = 'none';
            trashItems.setAttribute('data-display-img', 'false');
          }, 1500);
          // Flagging back all of the image to display again by setting it 'true'
          setTimeout(() => {
            // trashItems.style.pointerEvents = '';
            trashItems.setAttribute('data-display-img', 'true');
          }, 1600);
        }

        // Looping through the food Items
        for (const foodItems of foodElements) {
          // Here is where we delay
          setTimeout(() => {
            foodItems.style.pointerEvents = 'none';
            foodItems.setAttribute('data-display-img', 'false');
          }, 1500);

          // After the Delay, we want to set it back to not delay anymore
          setTimeout(() => {
            foodItems.setAttribute('data-display-img', 'true');
            foodItems.style.pointerEvents = '';
          }, 1600);
        } */
      });

      const images = document.querySelector('.images');
      const hiddenWall = document.querySelector('.hidden-wall');

      const sealSpeech = document.getElementById('seal-speech');
      const sealExpression = document.querySelector('.seal-expression');
      const sealSad = document.querySelector('.seal-sad');

      const itemObjects = document.querySelector('.item-obj');

      const foodItem = document.querySelectorAll('.food-item');
      const trashItem = document.querySelectorAll('.trash-item');

      for (const trashElements of trashItem) {
        trashElements.setAttribute('draggable', 'false');

        // Checking if the element is overlapping all the time
        setInterval(() => {
          if (isOverlapping(trashElements, hiddenWall)) {
            // remove the trash image objects
            const displayNone = (trashElements.style.display = 'none');
            images.firstElementChild.classList.remove('seal-open-close');

            if (displayNone) {
              // Decrement the score if the item object is vanished
              trashScore = trashScore - 1;
              document.getElementById('score').innerHTML = trashScore;
              sealSpeech.innerHTML = '<h4>👿 Æsj! 👿 </h4>';

              sealSad.src = './assets/img/spill-3/seal-trist.png';

              itemObjects.style.animationPlayState = 'paused';
            }
            // Will restart the item object animation after 1 second
            setTimeout(() => {
              itemObjects.style.animationPlayState = 'running';
              sealSpeech.innerHTML = '<h4> 😭😱Jeg er sulten! 😭😱</h4>';
              // Remove the src of the img
              sealSad.src = '';
              images.firstElementChild.classList.add('seal-open-close');
            }, 1000);
          }
        }, 100);

        trashElements.addEventListener('click', e => {
          sealSpeech.innerHTML = '<h4> 💖👼 Woohoo!! 👼💖 </h4>';

          // We want to use this variable as "flag"
          const sealSadImgSrc = (sealSad.src =
            './assets/img/spill-3/seal-trist.png');
          trashElements.classList.add('trash-item-flying-up');
          setTimeout(() => (e.target.style.display = 'none'), 300);

          images.firstElementChild.classList.remove('seal-open-close');

          sealSad.src = '';
          const sealHappy = (sealExpression.src =
            './assets/img/spill-3/seal-glad.png');

          if (sealHappy) {
            setTimeout(
              () =>
                (sealSpeech.innerHTML = '<h4> 😭😱Jeg er sulten! 😭😱</h4>'),
              1000
            );
          }

          // If the seal sad image is actiaved
          if (sealSadImgSrc) {
            // We turn off the image
            sealSad.src = '';

            // Then we timing it by removing the seal eating/closing it's mouth in 1ms
            setTimeout(() => {
              document.documentElement.style.setProperty(
                '--seal-open-mouth-img',
                'transparent'
              );
              document.documentElement.style.setProperty(
                '--seal-close-mouth-img',
                'transparent'
              );
            }, 1);

            // We turn it back on again after 1 second
            setTimeout(() => {
              document.documentElement.style.setProperty(
                '--seal-open-mouth-img',
                'url(https://github.com/KoichaDev/environment-games/blob/master/assets/img/spill-3/seal-open.png?raw=true)'
              );
              document.documentElement.style.setProperty(
                '--seal-close-mouth-img',
                'url(https://github.com/KoichaDev/environment-games/blob/master/assets/img/spill-3/seal-lukket.png?raw=true)'
              );
            }, 1000);
          }

          itemObjects.style.animationPlayState = 'paused';

          setTimeout(() => {
            sealExpression.src = '';
            itemObjects.style.animationPlayState = 'running';
            // Remove the src of the img
            sealSad.src = '';
            images.firstElementChild.classList.add('seal-open-close');
          }, 1000);
        });
      }

      // food Shit

      for (const foodElements of foodItem) {
        foodElements.setAttribute('draggable', 'false');

        // Checking if the element is overlapping all the time
        setInterval(() => {
          if (isOverlapping(foodElements, hiddenWall)) {
            // remove the trash image objects
            const displayNone = (foodElements.style.display = 'none');
            images.firstElementChild.classList.remove('seal-open-close');

            if (displayNone) {
              // Increment the score if the item object is vanished
              foodScore = foodScore + 1;
              document.getElementById('score').innerHTML = foodScore;
              sealSpeech.innerHTML = '<h4>❤️ YAYYYY!❤️ </h4>';

              sealSad.src = './assets/img/spill-3/seal-happy-love.png';

              itemObjects.style.animationPlayState = 'paused';
            }
            // Will restart the item object animation after 1 second
            setTimeout(() => {
              itemObjects.style.animationPlayState = 'running';
              sealSpeech.innerHTML = '<h4> 😭😱Jeg er sulten! 😭😱</h4>';
              // Remove the src of the img
              sealSad.src = '';
              images.firstElementChild.classList.add('seal-open-close');
            }, 1000);
          }
        }, 100);

        foodElements.addEventListener('click', e => {
          sealSpeech.innerHTML = '<h4> 💢😠 MAAATEN MIIINI!! 😠💢 </h4>';

          // Decrement the score if the item object is vanished

          foodScore = foodScore - 1;
          document.getElementById('score').innerHTML = foodScore;

          // We want to use this variable as "flag"
          const sealSadImgSrc = (sealSad.src =
            './assets/img/spill-3/seal-trist.png');
          foodElements.classList.add('trash-item-flying-up');
          setTimeout(() => {
            e.target.style.display = 'none';
          }, 300);

          images.firstElementChild.classList.remove('seal-open-close');

          sealSad.src = '';
          const sealAngry = (sealExpression.src =
            './assets/img/spill-3/seal-angry.png');

          if (sealAngry) {
            setTimeout(
              () =>
                (sealSpeech.innerHTML = '<h4> 😭😱Jeg er sulten! 😭😱</h4>'),
              1000
            );
          }

          // If the seal sad image is actiaved
          if (sealSadImgSrc) {
            // We turn off the image
            sealSad.src = '';

            // Then we timing it by removing the seal eating/closing it's mouth in 1ms
            setTimeout(() => {
              document.documentElement.style.setProperty(
                '--seal-open-mouth-img',
                'transparent'
              );
              document.documentElement.style.setProperty(
                '--seal-close-mouth-img',
                'transparent'
              );
            }, 1);

            // We turn it back on again after 1 second
            setTimeout(() => {
              document.documentElement.style.setProperty(
                '--seal-open-mouth-img',
                'url(https://github.com/KoichaDev/environment-games/blob/master/assets/img/spill-3/seal-open.png?raw=true)'
              );
              document.documentElement.style.setProperty(
                '--seal-close-mouth-img',
                'url(https://github.com/KoichaDev/environment-games/blob/master/assets/img/spill-3/seal-lukket.png?raw=true)'
              );
            }, 1000);
          }

          itemObjects.style.animationPlayState = 'paused';

          setTimeout(() => {
            sealExpression.src = '';
            itemObjects.style.animationPlayState = 'running';
            // Remove the src of the img
            sealSad.src = '';
            images.firstElementChild.classList.add('seal-open-close');
          }, 1000);
        });
      }
    }
  })();
});
