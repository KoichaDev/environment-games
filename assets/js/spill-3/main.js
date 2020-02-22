import { loopAddElement, sleep, isOverlapping } from './help-function.mjs';

document.addEventListener('DOMContentLoaded', e => {
  const foodImg = [
    './assets/img/spill-3/blue-fish.png',
    './assets/img/spill-3/fat-fish.png',
    './assets/img/spill-3/eple.png',
    './assets/img/spill-3/jordbær.png',
    './assets/img/spill-3/squash.png',
    './assets/img/spill-3/reke.png',
    './assets/img/spill-3/salat.png',
    './assets/img/spill-3/sharp-blue-fish.png',
    './assets/img/spill-3/yellow-fish.png',
    './assets/img/spill-3/ketchup.png',
    './assets/img/spill-3/muggen-brød.png'
  ];

  const trashImg = [
    './assets/img/spill-3/bread-box.png',
    './assets/img/spill-3/soda-box.png',
    './assets/img/spill-3/klokke.png',
    './assets/img/spill-3/q-tips.png',
    './assets/img/spill-3/tannbørste.png',
    './assets/img/spill-3/skyr.png',
    './assets/img/spill-3/brille.png',
    './assets/img/spill-3/eple-flaske.png',
    './assets/img/spill-3/kartong.png',
    './assets/img/spill-3/krykke.png',
    './assets/img/spill-3/tannbørste.png',
    './assets/img/spill-3/tom-kartong.png',
    './assets/img/spill-3/truse.png',
    './assets/img/spill-3/sokker.png'
  ];

  const foodElements = foodImg.map(image => {
    const element = document.createElement('img');
    element.className = 'food-item';
    element.src = image;
    return element;
  });

  const trashElements = trashImg.map(image => {
    const element = document.createElement('img');
    element.className = 'trash-item';
    element.src = image;
    return element;
  });

  const mixObjImg = [...foodElements, ...trashElements];
  mixObjImg.sort(() => Math.random() - 0.5);

  (async () => {
    const itemObj = document.querySelector('.item-obj');
    for (let i = 0; i < mixObjImg.length; i++) {
      await sleep(1000);
      console.log(mixObjImg[i]);

      // Reversing the order of the item to "popping" on the screen
      itemObj.prepend(mixObjImg[i]);

      const images = document.querySelector('.images');
      const hiddenWall = document.querySelector('.hidden-wall');
      const sealHappySad = document.querySelector('.seal-happy-sad');

      const sealHappy = document.querySelector('.seal-happy');
      const sealSad = document.querySelector('.seal-sad');

      const itemObjects = document.querySelector('.item-obj');

      const foodItem = document.querySelectorAll('.food-item');
      const trashItem = document.querySelectorAll('.trash-item');

      for (const trashElements of trashItem) {
        // Checking if the element is overlapping all the time
        setInterval(() => {
          if (isOverlapping(trashElements, hiddenWall)) {
            // remove the trash image objects
            const displayNone = (trashElements.style.display = 'none');
            images.firstElementChild.classList.remove('seal-open-close');

            if (displayNone) {
              sealSad.src = './assets/img/spill-3/seal-trist.png';

              itemObjects.style.animationPlayState = 'paused';
            }
            // Will restart the item object animation after 1 second
            setTimeout(() => {
              itemObjects.style.animationPlayState = 'running';
              // Remove the src of the img
              sealSad.src = '';
              images.firstElementChild.classList.add('seal-open-close');
            }, 1000);
          }
        }, 100);

        trashElements.addEventListener('click', e => {
          trashElements.classList.add('trash-item-flying-up');
          setTimeout(() => (e.target.style.display = 'none'), 300);

          images.firstElementChild.classList.remove('seal-open-close');

          sealHappy.src = './assets/img/spill-3/seal-glad.png';

          itemObjects.style.animationPlayState = 'paused';

          setTimeout(() => {
            sealHappy.src = '';
            itemObjects.style.animationPlayState = 'running';
            // Remove the src of the img
            sealSad.src = '';
            images.firstElementChild.classList.add('seal-open-close');
          }, 1000);
        });
      }

      for (const foodElements of foodItem) {
        // Checking if the element is overlapping all the time
        setInterval(() => {
          if (isOverlapping(foodElements, hiddenWall)) {
            // remove the trash image objects
            foodElements.style.display = 'none';
            images.firstElementChild.classList.add('seal-open-close');
          }
        }, 100);

        foodElements.addEventListener('click', e => {
          // Add heart that will move animation up
        });
      }
    }
  })();
});
