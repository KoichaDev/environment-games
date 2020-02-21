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

  const foodElements = foodImg.map(image => {
    const element = document.createElement("img");
    element.className = "food-item";
    element.src = image;
    return element;
  });

  const trashElements = trashImg.map(image => {
    const element = document.createElement("img");
    element.className = "trash-item";
    element.src = image;
    return element;
  });

  const mixObjImg = [...foodElements, ...trashElements];
  mixObjImg.sort(() => Math.random() - 0.5);

  // Object Items that is animated moving on the right
  mixObjImg.map(img => {
    const itemObj = document.querySelector(".item-obj");
    itemObj.appendChild(img);
  });

  /* // setInterval for the seal animation
  setInterval(() => {
    const img = document.querySelector(".images");
    const divImg = document.createElement("img");
    divImg.classList.add("img-seal");
    divImg.setAttribute("src", sealImage[0]);
    img.appendChild(divImg);

    const replace = setTimeout(() => {
      document.querySelector(".img-seal").src = sealImage[1];
    }, 1500);

    if (replace) {
      document.querySelector(".img-seal").src = sealImage[0];
    }

    // We want to make sure it will not reproduce many pictures
    if (img.childElementCount > 1) {
      document.querySelector(".img-seal").remove();
    }
  }, 900);
 */
  const seal = document.querySelector(".img-seal");
  const foodItem = document.querySelectorAll(".food-item");
  const trashItem = document.querySelectorAll(".trash-item");
  console.log(seal);
});
