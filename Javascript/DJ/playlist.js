
const initpage = () => {
    displayTimeSlots('Producer1');
    console.log("initalize runs");
};

window.addEventListener('load', initpage);


function addItem() {
    const textInput = document.getElementById('textInput');
    const newItem = textInput.value.trim();
    if (newItem !== '') {
        const currentplaylist = document.getElementById('currentplaylist');
        const newItemElement = document.createElement('li');
        newItemElement.className = 'song-single';
        newItemElement.innerHTML = `<span>${newItem}</span><div class="dropdown-menu"> <div class="dropdown-option" onclick="removeCurrentSong(this)">Delete</div></div>`;
        // newItemElement.onclick = function() {
        //     moveItem('leftList', 'rightList', this);
        // };
        currentplaylist.appendChild(newItemElement);
        textInput.value = '';
    }else{
        console.log("Must Enter a Valid Song")
    }
}

function moveItem(sourceId, targetId, item) {
    const sourceList = document.getElementById(sourceId);
    const targetList = document.getElementById(targetId);
    targetList.appendChild(item);
}
function deleteItem(button) {
    button.parentNode.remove();
}


function removeCurrentSong(option) {
    // Traverse up the DOM to find the song item (parent li element)
    let songItem = option.parentElement.parentElement;
    // Remove the song item from the list
    songItem.remove();
}    