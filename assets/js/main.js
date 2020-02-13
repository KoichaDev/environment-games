import { dragStart, dragEnter, dragOver, dragLeave, drop, dragEnd } from './drag-n-drop-functions.mjs';

const draggable = document.querySelectorAll('.draggable');
const droppable = document.querySelectorAll('.droppable')

document.addEventListener('DOMContentLoaded', () => {
    for (const dragItems of draggable) {
        dragItems.addEventListener('dragstart', dragStart);
        dragItems.addEventListener('dragend', dragEnd);
    }

    for (const dropItem of droppable) {
        dropItem.addEventListener('dragenter', dragEnter);
        dropItem.addEventListener('dragover', dragOver);
        dropItem.addEventListener('dragleave', dragLeave);
        dropItem.addEventListener('drop', drop);
    }
})

