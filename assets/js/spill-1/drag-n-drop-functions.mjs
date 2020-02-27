// Dragging will start when an object item is moving around
let dragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    setTimeout(() => e.target.style.display = 'none', 0);
}

// Dragging function that will end 
const dragEnd = (e) => {
    setTimeout(() => e.target.style.display = 'block', 0);
}

// When dragging over an item object to the box disposal
const dragOver = (e) => {
    e.preventDefault();
}

// When dragging the object items that is going to enter the boxes 
const dragEnter = (e) => {
    e.target.style.opacity = '0.5';
}

// When the dragging of the object is leaving from the box waste

const dragLeave = (e) => {
    e.target.style.opacity = '1';
}

// When the object item is going to drop to the box waste
const drop = (e) => {
    e.preventDefault();

    e.target.style.opacity = '1';

    // Getting the id from item object when we are dragging around
    const draggAbleElementData = e.dataTransfer.getData('text');
    // Getting the data-attribute from the waste box
    const droppAbleElementData = e.target.getAttribute('data-draggable-id');
    
    // We want to get the ID of element from the items when we are dragging around
    const draggableItems = document.getElementById(draggAbleElementData);
    
    // Alternative, you can use this code below, but the only cons is not working for accessibilities
    //draggableItems.hidden = 'true'

    // Checking the condition logic 
    if (droppAbleElementData === 'papir-boks') {
        switch (draggableItems.id) {
            case 'kartong': 
                draggableItems.classList.add('invisible');
            break;
            case 'tom-kartong': 
                draggableItems.classList.add('invisible');
            break;
            default:
                draggableItems.classList.add('visible')
            break;
        }
    } else if (droppAbleElementData === 'mat-boks') {
        switch (draggableItems.id) {
            case 'banan':
                draggableItems.classList.add('invisible');
            break;
            case 'eple':
                draggableItems.classList.add('invisible');
            break;
            default:
                draggableItems.classList.add('visible')
            break;
        }
    } else if (droppAbleElementData === 'glass-boks') {
        switch (draggableItems.id) {
            case 'krykke-glass':
                draggableItems.classList.add('invisible');
                break;
            case 'eple-flaske':
                draggableItems.classList.add('invisible');
                break;
            default:
                draggableItems.classList.add('visible')
            break;
        }
    } else if (droppAbleElementData === 'restavfall-boks') {
        switch (draggableItems.id) {
            case 'truse':
                draggableItems.classList.add('invisible');
                break;
            case 'plastikk-skyr':
                draggableItems.classList.add('invisible');
                break;
            case 'plast':
                draggableItems.classList.add('invisible');
            break;
            case 'sokker':
                draggableItems.classList.add('invisible');
            break;
            default:
                draggableItems.classList.add('visible')
            break;
        }
    }
}




export { dragStart, dragEnter, dragLeave, dragOver, drop, dragEnd };