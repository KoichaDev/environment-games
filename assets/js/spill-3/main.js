import { loopAddElement, sleep, isOverlapping } from './help-function.mjs';

document.addEventListener('DOMContentLoaded', e => {
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
  /* mixObjImg.forEach(img => {
    const itemObj = document.querySelector('.item-obj');

    //await sleep(3000);
    itemObj.appendChild(img);
  }); */

  (async () => {
    const itemObj = document.querySelector('.item-obj');
    for (let i = 0; i < mixObjImg.length; i++) {
      await sleep(1000);

      itemObj.appendChild(mixObjImg[i]);
    }
  })();

  //Tutor();

  const images = document.querySelector('.images');
  const hiddenWall = document.querySelector('.hidden-wall');
  const sealHappySad = document.querySelector('.seal-happy-sad');

  const sealHappy = document.querySelector('.seal-happy');
  const sealSad = document.querySelector('.seal-sad');

  const itemObjects = document.querySelector('.item-obj');

  const foodItem = document.querySelectorAll('.food-item');
  const trashItem = document.querySelectorAll('.trash-item');

  /* for (let i = 0; i < itemObjects.childNodes.length; i++) {
    const childElement = itemObjects.childNodes[i];
    console.log(childElement);
  } */
  // itemObjects.childNodes.for);

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
});
