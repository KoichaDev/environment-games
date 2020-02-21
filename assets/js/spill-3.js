const shuffleArr = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

document.addEventListener("DOMContentLoaded", e => {
  const sealImage = [
    "./assets/img/spill-3/seal-open.png",
    "./assets/img/spill-3/seal-close.png"
  ];
  const foodImg = [
    "./assets/img/spill-3/blue-fish.png",
    "./assets/img/spill-3/fat-fish.png"
  ];

  const trashImg = [
    "./assets/img/spill-3/bread-box.png",
    "./assets/img/spill-3/soda-box.png"
  ];

  // Creating empty arrays for the food and tash object
  const emptyFoodArr = [];
  const emptyTrashArr = [];

  setInterval(() => {
    // Getting the element for the parent class
    const img = document.querySelector(".images");

    // Creating img element for the seal
    const divImg = document.createElement("img");

    // Adding class name for the img element for the seal
    divImg.classList.add("img-seal");

    // Setting the attribute of the img element
    divImg.setAttribute("src", sealImage[0]);

    // Appending from the parent to child element
    img.appendChild(divImg);

    const replace = setTimeout(() => {
      // Replacing the old img to new Img
      document.querySelector(".img-seal").src = sealImage[1];
    }, 1500);

    // If setTimeout is true then we want to switch another picture
    if (replace) {
      document.querySelector(".img-seal").src = sealImage[0];
    }

    // We want to make sure it will not reproduce many pictures
    if (img.childElementCount > 1) {
      document.querySelector(".img-seal").remove();
    }
  }, 900);

  foodImg.map(foodObj => {
    const itemObj = document.querySelector(".item-obj");
    // Creating img element for the item object
    const foodEl = document.createElement("img");

    // Adding class name for the img element for the item object
    foodEl.classList.add("food-item");

    // Adding the attribute and src path for the image
    foodEl.setAttribute("src", foodObj);

    // Pushing the foodObj from the empty Array
    emptyFoodArr.push(foodObj);
  });

  trashImg.map(trashObj => {
    const itemObj = document.querySelector(".item-obj");
    // Creating img element for the item object
    const trashEl = document.createElement("img");

    // Adding class name for the img element for the item object
    trashEl.classList.add("trash-item");

    // Adding the attribute and src path for the image
    trashEl.setAttribute("src", trashObj);

    // Pushing the trashObj from the empty Array
    emptyTrashArr.push(trashObj);
  });

  // Merging both from the empty array to the new one
  const mixObjImg = [...emptyFoodArr, ...emptyTrashArr];
  // We want to shuffling the array 
  shuffleArr(mixObjImg)

  mixObjImg.map(mixObj => {
    const itemObj = document.querySelector(".item-obj");
    // Creating img element for the item object
    const mixItemObj = document.createElement("img");

    
    mixItemObj.setAttribute("src", mixObj);
    
    // Appending from the parent to child element
    itemObj.appendChild(mixItemObj);
  });
});
