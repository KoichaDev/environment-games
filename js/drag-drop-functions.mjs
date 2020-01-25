// Drag and drop help functions

const dragStart = (e) => {
    event.dataTransfer.setData('text', e.target.id);
}

const dragEnter = (e) => {
    if(!e.target.classList.contains('dropped')) {
        e.target.classList.add('droppable-hover');
    }
}

const dragOver = (e) => {
    if(!e.target.classList.contains('dropped')) { 
        e.preventDefault();
    }
}

const dragLeave = (e) => {
    if(!e.target.classList.contains('dropped')) { 
        e.target.classList.remove('droppable-hover');
    }

}

const drop = (e) => {
    e.preventDefault();
    e.target.classList.remove('droppable-hover');

    const draggAbleElementData = e.dataTransfer.getData('text');
    const droppAbleElementData = e.target.getAttribute('data-draggable-id');

    if(draggAbleElementData === droppAbleElementData) {
        e.target.classList.add('dropped');
        
        const draggAbleElement = document.getElementById(draggAbleElementData);
        
        e.target.style.backgroundColor = draggAbleElement.style.color;

        draggAbleElement.classList.add('dragged');
        draggAbleElement.setAttribute('draggable', 'false');

        e.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"><i>`);
        
    }
}


export  { dragStart, dragEnter, dragOver, dragLeave, drop};