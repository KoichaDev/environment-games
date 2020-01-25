import { dragStart, dragEnter, dragOver, dragLeave, drop } from './drag-drop-functions.mjs';


// We used the querySelectorAll to make sure all of the classes will be draggable or droppable
const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(dragEl => {
    // Make sure on the HTML attribute that is "draggable" element is set as 'true'
    dragEl.addEventListener('dragstart', dragStart);
});

droppableElements.forEach(dropEl => {
    dropEl.addEventListener('dragenter', dragEnter);
    dropEl.addEventListener('dragover', dragOver);
    dropEl.addEventListener('dragleave', dragLeave);
    dropEl.addEventListener('drop', drop);
});



