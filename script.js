
/* =========================
   ZDJĘCIA (15 TŁÓW)
========================= */

const images = [
    "IMG_0076-compressed.jpeg",
    "IMG_1774-compressed.jpeg",
    "IMG_2565-compressed.jpeg",
    "IMG_2669-compressed.jpeg",
    "IMG_2779-compressed.jpeg",
    "IMG_3011-compressed.jpeg",
    "IMG_3263-compressed.jpeg",
    "IMG_3297-compressed.jpeg",
    "IMG_3493-compressed.jpeg",
    "IMG_3497-compressed.jpeg",
    "IMG_5082-compressed.jpeg",
    "IMG_5095-compressed.jpeg",
    "IMG_8285-compressed.jpeg",
    "IMG_9551-compressed.jpeg",
  
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
        "https://www.youtube.com/embed/8GYL6c_GTE0?autoplay=1&loop=1&playlist=8GYL6c_GTE0";

    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 600);
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
