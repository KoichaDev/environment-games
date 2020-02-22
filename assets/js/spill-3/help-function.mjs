const loopAddElement = (arr, elementName, className) => {
  arr.map(image => {
    const element = document.createElement(elementName);
    element.className = className;
    element.src = image;
    return element;
  });
};

const isOverlapping = (e1, e2) => {
  if (e1.length && e1.length > 1) {
    e1 = e1[0];
  }
  if (e2.length && e2.length > 1) {
    e2 = e2[0];
  }
  var rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false;
  var rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false;

  //  window.console ? console.log(rect1, rect2) : null;
  var overlap = null;
  if (rect1 && rect2) {
    overlap = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
    return overlap;
  } else {
    //window.console ? console.warn('Please pass native Element object') : null;
    return overlap;
  }
};

export { loopAddElement, isOverlapping };
