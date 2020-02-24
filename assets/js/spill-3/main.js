import { loopAddElement, sleep, isOverlapping } from './help-function.mjs';

const obj = {
  startSealAnimation: 300,
  flag: false
};

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
      await sleep(1000);

      // Reversing the order of the item to "popping" on the screen

      const imgDataAttribute = mixObjImg[i].getAttribute('data-display-img');
      const prependImages = () => itemObj.prepend(mixObjImg[i]);

      if (imgDataAttribute === 'true') {
        prependImages();
      }

      const images = document.querySelector('.images');
      const hiddenWall = document.querySelector('.hidden-wall');
      const sealHappySad = document.querySelector('.seal-happy-sad');

      const sealHappy = document.querySelector('.seal-happy');
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

          for (const itemsElements of itemObj.childNodes) {
            // console.log((itemsElements.style.pointerEvents = 'none'));
            setTimeout(() => {
              //itemsElements.style.pointerEvents = 'none';
            }, 1000);
          }

          setTimeout(() => {
            sealHappy.src = '';
            itemObjects.style.animationPlayState = 'running';
            // Remove the src of the img
            sealSad.src = '';
            images.firstElementChild.classList.add('seal-open-close');
          }, 1000);
        });
      }

      // food Shit

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
