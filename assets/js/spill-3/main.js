import { isOverlapping } from './help-function.mjs';

document.addEventListener('DOMContentLoaded', e => {
  const sealImage = [
    './assets/img/spill-3/seal-open.png',
    './assets/img/spill-3/seal-close.png'
  ];
  const foodImg = [
    './assets/img/spill-3/blue-fish.png',
    './assets/img/spill-3/fat-fish.png'
  ];

  const trashImg = [
    './assets/img/spill-3/bread-box.png',
    './assets/img/spill-3/soda-box.png'
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

  // Object Items that is animated moving on the right
  mixObjImg.map(img => {
    const itemObj = document.querySelector('.item-obj');
    itemObj.appendChild(img);
  });

  const images = document.querySelector('.images');
  const hiddenWall = document.querySelector('.hidden-wall');
  const sealEatClose = document.querySelector('.seal-open-close');
  const sealSad = document.querySelector('.seal-sad');
  const itemObjects = document.querySelector('.item-obj');

  const foodItem = document.querySelectorAll('.food-item');
  const trashItem = document.querySelectorAll('.trash-item');

  for (const trashElements of trashItem) {
    const blankImage = Array.prototype.every.call(
      trashElements,
      ({ style }) => style.display === 'none'
    );
    // Checking if the element is overlapping all the time
    setInterval(() => {
      if (isOverlapping(trashElements, hiddenWall)) {
        // remove the trash image objects
        const displayNone = (trashElements.style.display = 'none');
        images.firstElementChild.classList.remove('seal-open-close');

        if (displayNone) {
          sealSad.src = '/assets/img/spill-3/seal-trist.png';

          itemObjects.style.animationPlayState = 'paused';
        }
        setTimeout(
          () => (itemObjects.style.animationPlayState = 'running'),
          1000
        );
      }

      if (blankImage) {
        // This will return true if there is no more display is none
      }
    }, 100);

    trashElements.addEventListener('click', e => {
      e.target.style.display = 'none';
    });
  }

  for (const foodElements of foodItem) {
    foodElements.addEventListener('click', e => {
      // Add heart that will move animation up
    });
  }
});
