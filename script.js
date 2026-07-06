/* ======================================
   KRONIKI RUDY TARNOWSKIEJ
====================================== */


/* =========================
   ZDJĘCIA
========================= */

const images = [
    "IMG_0076-compressed.jpeg",
    "IMG_1774-compressed.jpeg",
    "IMG_2565-compressed.jpeg",
    "IMG_2779-compressed.jpeg",
    "IMG_3011-compressed.jpeg",
    "IMG_3263-compressed.jpeg",
    "IMG_3297-compressed.jpeg",
    "IMG_3493-compressed.jpeg",
    "IMG_3497-compressed.jpeg",
    "IMG_5082-compressed.jpeg",
    "IMG_5095-compressed.jpeg",
    "IMG_8285-compressed.jpeg",
    "IMG_9551-compressed.jpeg"
];

let currentImage = 0;


/* =========================
   SLIDESHOW
========================= */

function startSlideshow(){

    const slide = document.getElementById("slideshow");

    if(!slide) return;

    setInterval(()=>{

        slide.style.opacity = 0;

        setTimeout(()=>{

            currentImage++;

            if(currentImage >= images.length){
                currentImage = 0;
            }

            slide.src = images[currentImage];

            slide.style.opacity = 1;

        },500);

    },3000);

}


/* =========================
   EFEKT PISANIA
========================= */

const titleText = "KRONIKI RUDY TARNOWSKIEJ";

let letter = 0;

function typeText(){

    const typing = document.getElementById("typing");

    if(!typing) return;

    if(letter < titleText.length){

        typing.innerHTML += titleText.charAt(letter);

        letter++;

        setTimeout(typeText,80);

    }

}


/* =========================
   MUZYKA
========================= */

const videoID = "8GYL6c_GTE0";

function startMusic(){

    const player = document.getElementById("ytplayer");

    if(player){

        player.src =
        `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;

    }

}


/* =========================
   WEJŚCIE
========================= */

function enterVillage(){

    startMusic();

    const overlay = document.getElementById("overlay");

    overlay.style.transition = ".8s";

    overlay.style.opacity = "0";

    setTimeout(()=>{

        overlay.style.display="none";

    },800);

}


/* =========================
   ISKRY
========================= */

function startParticles(){

    const canvas = document.getElementById("particles");

    if(!canvas) return;

    const ctx = canvas.getContext("2d");

    function resize(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize",resize);

    const particles=[];

    for(let i=0;i<80;i++){

        particles.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            r:Math.random()*2+1,

            vx:(Math.random()-0.5)*0.4,

            vy:-Math.random()*0.6-0.2

        });

    }

    function draw(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p=>{

            p.x+=p.vx;
            p.y+=p.vy;

            if(p.y<0){

                p.y=canvas.height;
                p.x=Math.random()*canvas.width;

            }

            ctx.beginPath();

            ctx.fillStyle="rgba(255,215,0,.8)";

            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

            ctx.fill();

        });

        requestAnimationFrame(draw);

    }

    draw();

}


/* =========================
   START
========================= */

window.addEventListener("load",()=>{

    typeText();

    startSlideshow();

    startParticles();

    const button = document.getElementById("enterButton");

    if(button){

        button.addEventListener("click",enterVillage);

    }

});
