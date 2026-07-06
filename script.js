
/* =========================
   ZDJĘCIA (15 TŁÓW)
========================= */

const images = [
    "img/zdjecie1.jpg",
    "img/zdjecie2.jpg",
    "img/zdjecie3.jpg",
    "img/zdjecie4.jpg",
    "img/zdjecie5.jpg",
    "img/zdjecie6.jpg",
    "img/zdjecie7.jpg",
    "img/zdjecie8.jpg",
    "img/zdjecie9.jpg",
    "img/zdjecie10.jpg",
    "img/zdjecie11.jpg",
    "img/zdjecie12.jpg",
    "img/zdjecie13.jpg",
    "img/zdjecie14.jpg",
    "img/zdjecie15.jpg"
];

let index = 0;

const bg = document.getElementById("background");

function changeBackground() {
    bg.style.opacity = 0;

    setTimeout(() => {
        bg.style.backgroundImage = `url('${images[index]}')`;
        bg.style.opacity = 1;

        index = (index + 1) % images.length;
    }, 800);
}

/* start slideshow */
changeBackground();
setInterval(changeBackground, 3000);


/* =========================
   TYPING EFFECT (TYTUŁ)
========================= */

const text = "KRONIKI RUDY TARNOWSKIEJ";
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(typeText, 80);
    }
}

/* =========================
   MUZYKA YOUTUBE
========================= */

const videoID = "8GYL6c_GTE0";

function startMusic() {
    document.getElementById("ytplayer").src =
        `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;

    document.getElementById("overlay").style.display = "none";
}

/* =========================
   PRZYCISK START
========================= */

document.getElementById("enterButton").addEventListener("click", startMusic);


/* =========================
   START PO ZAŁADOWANIU
========================= */

window.onload = () => {
    typeText();
};
