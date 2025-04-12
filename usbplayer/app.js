//* Nombres de las canciones que se encuentran en el buscador de la API *// y define la logica de la bisqueda

const songs = [
    {
        title: "Myke Towers & NTG - LA PRIMERA VEZ",
        artist: "Myke Towers & NTG",
        url: "music/song1.mp3"
    },

    {
        title: "W Sound, Blessd, Ovy On The Drums - Soltera (W Sound 01)",
        artist: "Bleessd",
        url: "music/song2.mp3"
    },

    {
        title: "Ryan Castro, Maisak - FDSR",
        artist: "Ryan Castro, Maisak",
        url: "music/song3.mp3"
    },

    {
        title: "La Forma En Que Me Miras - Super Yei x Myke Towers x Sammy x Lenny Tavarez x Rafa Pabon x Jone Quest",
        artist: "uper Yei x Myke Towers x Sammy x Lenny Tavarez x Rafa Pabon x Jone Quest",
        url: "music/song4.mp3"
    },

    {
        title: "The Weeknd - Starboy ft. Daft Punk (Official Video)",
        artist: "The Weeknd",
        url: "music/song3.mp3"
    },

    {
        title: "Rihanna - Diamonds",
        artist: "Rihanna",
        url: "music/song3.mp3"
    }
];

//* Función que se llama cuando das clic en el botón "Busqueda" y Filtra las canciones que son buscadas

function searchSong() {
    const searchValue = document.getElementById("search-field").value.toLowerCase();
    const resultsContainer = document.getElementById("song-container");

    resultsContainer.innerHTML = "";

    const results = songs.filter(song =>
        song.artist.toLowerCase().includes(searchValue)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p class='text-white'>No se encontraron canciones.</p>";
        return;
    }

    // Botón para pausar todas las canciones
    const pauseBtn = document.createElement("button");
    pauseBtn.className = "btn btn-warning mb-4";
    pauseBtn.textContent = "Pausar todas";
    pauseBtn.onclick = () => {
        const audios = document.querySelectorAll(".audio-player");
        audios.forEach(a => a.pause());
    };
    resultsContainer.appendChild(pauseBtn);

    // Mostrar las canciones encontradas
    results.forEach(song => {
        const card = document.createElement("div");
        card.className = "card mb-3 p-3 bg-dark text-white";

        card.innerHTML = `
            <h5>${song.title} - ${song.artist}</h5>
            <audio controls src="${song.url}" class="audio-player w-50 mt-2"></audio>
        `;

        resultsContainer.appendChild(card);
    });
}

