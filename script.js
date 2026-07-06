/* ==========================================

   KRONIKI RUDY TARNOWSKIEJ

   SCRIPT.JS - CZĘŚĆ 1

========================================== */

/* =========================

   SLIDESHOW

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

let current = 0;

let slide = null;

function startSlideshow(){

    slide = document.getElementById("slideshow");

    if(!slide) return;

    setInterval(()=>{

        slide.style.opacity = 0;

        setTimeout(()=>{

            current++;

            if(current >= images.length){

                current = 0;

            }

            slide.src = images[current];

            slide.style.opacity = 1;

        },600);

    },3000);

}

/* =========================

   TEKST (TYPING EFFECT)

========================= */

const text = "KRONIKI RUDY TARNOWSKIEJ";

let i = 0;

function typeText(){

    const typing = document.getElementById("typing");

    if(!typing) return;

    if(i < text.length){

        typing.innerHTML += text[i];

        i++;

        setTimeout(typeText,80);

    }

}

/* =========================

   MUZYKA (YOUTUBE)

========================= */

const videoID = "8GYL6c_GTE0";

function startMusic(){

    const player = document.getElementById("ytplayer");

    if(!player) return;

    player.src =

    `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;

}
/* =========================

   EFEKT ISKIER

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

    window.addEventListener("resize", resize);

    const particles = [];

    for(let i = 0; i < 120; i++){

        particles.push({

            x: Math.random()*canvas.width,

            y: Math.random()*canvas.height,

            vx: (Math.random()-0.5)*0.4,

            vy: -(Math.random()*0.8+0.2),

            size: Math.random()*3+1,

            alpha: Math.random()*0.5+0.5

        });

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p=>{

            p.x += p.vx;

            p.y += p.vy;

            if(p.y < -10){

                p.y = canvas.height+10;

                p.x = Math.random()*canvas.width;

            }

            if(p.x < -20) p.x = canvas.width;

            if(p.x > canvas.width+20) p.x = 0;

            ctx.beginPath();

            ctx.fillStyle=`rgba(255,215,80,${p.alpha})`;

            ctx.shadowColor="gold";

            ctx.shadowBlur=12;

            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

            ctx.fill();

        });

        requestAnimationFrame(animate);

    }

    animate();

}

/* =========================

   WEJŚCIE

========================= */

function enterVillage(){

    startMusic();

    const overlay = document.getElementById("overlay");

    overlay.style.opacity = "0";

    setTimeout(()=>{

        overlay.style.display = "none";

    },800);

}

/* =========================

   START STRONY

========================= */

window.addEventListener("load",()=>{

    typeText();

    startSlideshow();

    startParticles();

    const button=document.getElementById("enterButton");

    if(button){

        button.addEventListener("click",enterVillage);

    }

});


