document.addEventListener('DOMContentLoaded', function () {
    //playlists
    const playlists = [
        { name: 'Workout Mix', creator: 'Richard Dickson', songs: 15 },
        { name: 'Chill Vibes', creator: 'Dick Richardson', songs: 10 },
        { name: 'Road Trip Jams', creator: 'Mr Johnson', songs: 20 }
        // Add more playlists as needed
    ];

    // get the playlist list element
    const playlistList = document.getElementById('playlist-list');

    // loop through each playlist and create list items to display them
    playlists.forEach(function (playlist) {
        const listItem = document.createElement('li');
        const playlistButton = document.createElement("button"); // create button
        playlistButton.textContent = `${playlist.name} - Created by ${playlist.creator} (${playlist.songs} songs)`;
        playlistButton.innerHTML = `<span>${playlist.name} - Created by ${playlist.creator} (${playlist.songs} songs)</span> </div><button onclick="openModal()">Open playlist</button></div>`;
        playlistList.appendChild(playlistButton);

        listItem.addEventListener('click', function () {
            openModal(playlist);
        });
    });
});

var songs = ["Song 1", "Song 2", "Song 3", "Song 4"];

// open modal
function openModal() {
    var modal = document.getElementById("playlistModal");
    var songList = document.getElementById("songList");

    // clear previous content
    songList.innerHTML = '';

    // populat playlist
    songs.forEach(function (song) {
        var listItem = document.createElement("li");
        var playBtn = document.createElement("button");
        var copyBtn = document.createElement("button");
        playBtn.textContent = "play";
        copyBtn.textContent = "copy";
        listItem.textContent = song;
        songList.appendChild(listItem);
        songList.appendChild(playBtn);
        songList.appendChild(copyBtn);
    });

    modal.style.display = "block";
}
//close modal
function closeModal() {
    var modal = document.getElementById("playlistModal");
    modal.style.display = "none";
}

// close modal if user clicks outside 
window.onclick = function (event) {
    var modal = document.getElementById("playlistModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// form stuff for adding songs
// const form = document.getElementById('songSearch');

// Get the warning div

// // Add event listener for form submission
// form.addEventListener('submit', addItem());


// // Get form data
// const formData = new FormData(form);
// const songName = formData.get('textInput');
// // Example: Validate name field
// if (songName.trim() === '') {
//     // Show warning if name is empty
//     warningDiv.style.display = 'block';
// } else {
//     // Hide warning if name is not empty
//     warningDiv.style.display = 'none';
// }
// function for adding songs by name
function addItem() {
    const textInput = document.getElementById('textInput');
    const newItem = textInput.value.trim();
    const warningDiv = document.getElementById('warning-song');

    if (newItem !== '') {
        const currentplaylist = document.getElementById('currentplaylist');
        const newItemElement = document.createElement('li');
        newItemElement.className = 'song-single';
        newItemElement.innerHTML = `<span>${newItem}</span><div class="dropdown-menu"> <div class="dropdown-option" onclick="removeCurrentSong(this)">Delete</div></div>`;

        currentplaylist.appendChild(newItemElement);
        textInput.value = '';
    } else {
        console.log("Must Enter a Valid Song");
        warningDiv.style.display = 'block';
        setTimeout(function () {
            // code to execute after the delay
            console.log('5 seconds have passed');
            warningDiv.style.display = 'none';

        }, 5000);

    }
}

// function moveItem(sourceId, targetId, item) {
//     const sourceList = document.getElementById(sourceId);
//     const targetList = document.getElementById(targetId);
//     targetList.appendChild(item);
// }
function deleteItem(button) {
    button.parentNode.remove();
}


function removeCurrentSong(option) {
    // travers dom
    let songItem = option.parentElement.parentElement;
    // remove song from list
    songItem.remove();
}    