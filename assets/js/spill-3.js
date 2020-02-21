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

  const seal = document.querySelector('.img-seal');
  const foodItem = document.querySelectorAll('.food-item');
  const trashItem = document.querySelectorAll('.trash-item');

  for (const trashElements of trashItem) {
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
