
document.addEventListener("DOMContentLoaded", () => {
    // creating an array to store all the songs
    const songs = [
        { id: 0, name: "Shape of you", artist: "Ed-Sheeran", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwBsCPz3EkaXMwnOl_e-SveF4Cg0wV8ZQAA&s", genre: "Pop", src:"shapeofyou.mp3"  },
        { id: 1, name: "All Of Me", artist: "Adele", img: "https://pbs.twimg.com/media/FblrrY9WAAEjGWi.jpg", genre: "Pop", src:"love-me.mp3" },
        { id: 2, name: "SomeLike Like You", artist: "Adele", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvv2bzzuncUzNiG8IB9Cztz0YsQ2XidnNyRr0Py8krhWqHSjof0ktD6N5tWpQEORQeH44&usqp=CAU", genre: "Pop", src: "sugar.mp3" },
        { id: 3, name: "Wonderwall", artist: "Oasis", img: "data:image/jpeg;base64,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", genre: "Rock", src: "WWall.mp3" },
        { id: 4, name: "Sugar", artist: "Maroon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiRkryIgpKDFcYm2KsoG5LNYH86XpkI3osk-qYz57uNLC3V8mDQeEV6YcUCkI24o82B4&usqp=CAU", genre: "Hippop", src: "sugar.mp3" },
        { id: 5, name: "Locked Away", artist: "R. City", img: "data:image/jpeg;base64,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", genre: "Hippop", src: "Lockedaway.mp3" },
        { id: 6, name: "Love Me Like You Do", artist: "Ellie", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMpshIN8XeOv6aPJt_wTs5cl62IPNGbo6w9S2uVeazEFB3LR-AQyepqgJz11vdavy28o&usqp=CAU", genre: "Pop", src:"Love-me.mp3" },
    ];

    
     

    // To toggle the theme
    const Toggle=document.getElementById("toggle");

        Toggle.addEventListener("click",()=>
        {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
        )


    // Accessing elements
    const selectgenre = document.getElementById("selectgenre");
    const songslist=document.getElementsByClassName("songslist")[0];
    const image = document.getElementById("image")
    const songname = document.getElementById("songname");
    const artistname = document.getElementById("artist");
    const prev=document.getElementById("prevBtn");
    const next=document.getElementById("nextBtn");
    const addtoplaylist=document.querySelector("#add-to-playlist"); 
    const createplaylist=document.querySelector("#createplaylist");
    // console.log(createplaylist);
    const  allplaylist=document.querySelector("#all-playlist");
    const playlistInput = createplaylist.querySelector("input[type='text']");
    const crntplaylist=document.querySelector("#current-playlist");
    const songSearchInput = document.querySelector("#searchbox .search[type='text']:first-child");
    const playlistSearchInput = document.querySelector("#searchbox input[type='text']:nth-of-type(2)");
    const songlink=document.getElementById("snglink");
    
    var currentsong = 0;
    let selectedPlaylist=null;
    renderCurrentSong(currentsong)


    const uniqueGenres = ["All"];
    songs.forEach(song => {
        if (!uniqueGenres.includes(song.genre)) {
            uniqueGenres.push(song.genre);
        }
    });

    // Initialize dropdown with genre options
    uniqueGenres.forEach((genre) => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        selectgenre.appendChild(option);
        
    });


    // showsongs function
    function showsongs()
    {
        const val=selectgenre.value;
        songs.forEach(function (e) {
            if (val === "All" || e.genre === val) {
                const div = document.createElement("div");
                div.classList.add("box");
                div.setAttribute("id",e.id);

                div.innerHTML = `${e.name} - ${e.artist}`;
                songslist.appendChild(div);
                div.addEventListener("click",function(e)
                {
                    renderCurrentSong(e.target.id);
                    currentsong=e.target.id;
                })
            }
            
            
            
        });
    }


    showsongs();
    selectgenre.addEventListener("change",function(e)
    {
        songslist.innerHTML="";
        showsongs();
    })


    // renderCurrentSong function
    function renderCurrentSong(id)
    {
        console.log(id);
        id = id%songs.length;
        const obj = songs[id];
        image.src=obj.img;
        songname.innerHTML = obj.name;
        artistname.innerHTML = obj.artist;
        songlink.src="";
        songlink.src=obj.src;
        
       
    }

    
// next song button
next.addEventListener("click",function(e){
    currentsong+=1;
    renderCurrentSong(currentsong);

}) 

// prev song button
prev.addEventListener("click",function(e){
       currentsong-=1;
       renderCurrentSong(currentsong);
})

// create playlist
const availplaylist={};
createplaylist.addEventListener("submit",(e)=>
    {
        // console.log("HIII")
        e.preventDefault()
        const playlistName = playlistInput.value;
        if (playlistName) {
            const div = document.createElement("div");
            div.classList.add("boxs");
            div.setAttribute("id",playlistName);
            console.log(div);
            div.innerHTML =`${playlistName}`;
            allplaylist.appendChild(div);
            playlistInput.value="";
            availplaylist[playlistName]=[];
        div.addEventListener("click", function () {
            selectedPlaylist = playlistName; 
            console.log(selectedPlaylist);
            display(selectedPlaylist);
        });  
    }
   
});


// Add-to-Playlist
addtoplaylist.addEventListener("click",()=>
    {
        if(selectedPlaylist)
        {
            const crntsong=songs[currentsong];
            availplaylist[selectedPlaylist].push(crntsong);
            display(selectedPlaylist);
        }
    });


    // Display function
function display(selectedPlaylist)
{
    crntplaylist.innerHTML = "";
    availplaylist[selectedPlaylist].forEach(song => {
        // add a song to playlist
        const songDiv = document.createElement("div");
        songDiv.classList.add("boxs");
        songDiv.innerHTML = `${song.name}-${song.artist}`;
        crntplaylist.appendChild(songDiv);
          
        // remove song from playlist
        const delbtn=document.createElement("button");
        delbtn.classList.add("delbtn");
        delbtn.innerHTML= '<i class="fa-solid fa-trash"></i>';
        delbtn.addEventListener("click", () => {
            removeSongFromPlaylist(song.name);
        });
        songDiv.appendChild(delbtn);

    });
}
// removeSongFromPlaylist function
function removeSongFromPlaylist(songName) {
    if (selectedPlaylist) {
        availplaylist[selectedPlaylist] = availplaylist[selectedPlaylist].filter(song => song.name !== songName);
        display(selectedPlaylist);
    }
}


// search a song 
songSearchInput.addEventListener("input", function () {
    const searchTerm = songSearchInput.value.toLowerCase();
    songslist.innerHTML = "";  // Clear the song list

    // Filter and show the matching songs
    songs.forEach(function (song) {
        if (song.name.toLowerCase().includes(searchTerm)) {
            const div = document.createElement("div");
            div.classList.add("box");
            div.setAttribute("id", song.id);

            div.innerHTML = `${song.name} - ${song.artist}`;
            songslist.appendChild(div);
            div.addEventListener("click", function (e) {
                renderCurrentSong(e.target.id);
                currentsong = e.target.id;
            });
        }
    });
});


// search playlist
playlistSearchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterPlaylists(searchTerm);
});

function filterPlaylists(searchTerm) {
    const playlists = allplaylist.querySelectorAll(".boxs");
    playlists.forEach(playlist => {
        const playlistName = playlist.textContent.toLowerCase();
        if (playlistName.includes(searchTerm)) {
            playlist.style.display = "flex";
        } else {
            playlist.style.display = "none";
        }
    });
}





   
});
