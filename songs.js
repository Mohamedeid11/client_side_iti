let songs = [
    { src: 'media/sample-3s.mp3', title: 'Song 1' },
    { src: 'media/sample-6s.mp3', title: 'Song 2' },
    { src: 'media/test-mp3.mp3', title: 'Song 3' },
    { src: 'media/sample-15s.mp3', title: 'Song 4' },
    ];

let currentSong = 0;
let audio = document.getElementById("audio");

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function next() {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    audio.src = songs[currentSong].src;
    audio.play();
}

function repeat() {
    audio.loop = true;
    audio.play();
}

function shuffle() {
    var randomIndex = Math.floor(Math.random() * songs.length);
    currentSong = randomIndex;
    audio.src = songs[currentSong].src;
    audio.play();
}

audio.addEventListener('ended', function(){
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    audio.src = songs[currentSong].src;
    audio.play();
});

audio.addEventListener('error', function(){
    alert("Error loading media.");
});

audio.addEventListener('timeupdate', function(){
    var duration = document.getElementById("duration");
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    duration.innerHTML = m + ":" + s;
});

audio.addEventListener('loadedmetadata', function(){
    var duration = document.getElementById("duration");
    var s = parseInt(audio.duration % 60);
    var m = parseInt((audio.duration / 60) % 60);
    duration.innerHTML = m + ":" + s;
});


function playfirst(){
    audio.src = songs[1].src;
    audio.play();
}

function playSecond(){
    audio.src = songs[2].src;
    audio.play();

}

function playThired(){
    audio.src = songs[3].src;
    audio.play();

}

function playLast(){
    audio.src = songs[4].src;
    audio.play();

}