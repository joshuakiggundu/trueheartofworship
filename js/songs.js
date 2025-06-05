document.addEventListener("DOMContentLoaded", function() {
    var songs = [
        {
            mp3: 'media/Dream-Music-Relax.mp3',
            oga: 'media/Dream-Music-Relax.ogg',
            title: 'Energy',
            artist: 'Maggie',
            rating: '5',
            buy: 'Buy',
            price: '123',
            duration: '3:30',
            cover: '../images/logo.png'
        },
        {
            mp3: 'media/Dream-Music-Relax.mp3',
            oga: 'media/Dream-Music-Relax.ogg',
            title: 'Pursue',
            artist: 'Young & Free',
            rating: '5',
            buy: 'Buy',
            price: '123',
            duration: '7:03',
            cover: '../images/logo.png'
        },
        {
            mp3: 'media/Dream-Music-Relax.mp3',
            oga: 'media/Dream-Music-Relax.ogg',
            title: 'This Is Living (Acoustic)',
            artist: 'Young & Free',
            rating: '5',
            buy: 'Buy',
            price: '123',
            duration: '4:24',
            cover: '../images/logo.png'
        },
        {
            mp3: 'media/Dream-Music-Relax.mp3',
            oga: 'media/Dream-Music-Relax.ogg',
            title: 'Sinking Deep',
            artist: 'Young & Free',
            rating: '5',
            buy: 'Buy',
            price: '123',
            duration: '4:07',
            cover: '../images/logo.png'
        }
    ];

    function displaySong(song) {
        var heroSection = document.querySelector('.hero_section');
        heroSection.style.backgroundImage = `url(${song.cover})`;
        heroSection.querySelector('.hero_title').innerText = song.title;
        var audioPlayer = document.querySelector('#audio_player');
        audioPlayer.src = song.mp3;
        audioPlayer.play();
    }

    function searchSongs(query) {
        return songs.filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
    }

    var searchInput = document.querySelector('.search_field');
    searchInput.addEventListener('input', function() {
        var query = searchInput.value;
        var results = searchSongs(query);
        var resultsContainer = document.querySelector('.search_results_content');
        resultsContainer.innerHTML = '';
        results.forEach(song => {
            var resultItem = document.createElement('div');
            resultItem.classList.add('search_result_item');
            resultItem.innerText = song.title;
            resultItem.addEventListener('click', function() {
                displaySong(song);
            });
            resultsContainer.appendChild(resultItem);
        });
    });

    // Display the first song on page load
    displaySong(songs[0]);
});
