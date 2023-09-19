const ahmad = document.getElementById("second");

const arrayImages = [
    {
        image: "./media/image/dany 3.jpg"
        // h3: "Trending brush techniques 2023",
        // p: "By Nycholas"
    },
    {
        image: "./media/image/bed 2.jpg"
        // h3:"Comford Furnitures",
        // p: "By Jabow"
    },
    {
        image: "./media/image/IMG_20230523_141550.jpg"
        // h3: "Comford Furnitures",
        // p: "By Jabow"
    }
];
let counter = 0
ahmad.style.backgroundImage = "url('"+arrayImages[counter].image+"')";

function changeImage() {
    if (counter > arrayImages.length){
        counter = 0
    }else{
        counter++
    }
    ahmad.style.backgroundImage = "url('"+arrayImages[counter].image+"')"
}
const arrow = document.getElementById("artists");

let arrayPhotos = [
    {
        image: "./media/image/bed 2.jpg"
    },
    {
        image: "./media/image/dany 3.jpg"
    },
    {
        image: "./media/image/faifai.jpg"
    },
    {
        image: "./media/image/frame.jpg"
    },
    {
        image: "./media/image/jux.png"
    },
    {
        image: "./media/image/lamp.jpg"
    },
    {
        image: "./media/image/pilo.jpg"
    },
    {
        image: "./media/image/vase.png"
    },
    {
        image: "./media/image/IMG_20230523_141550.jpg"  
    }
];

let timer = 0
arrow.style.backgroundImage = "url('"+arrayPhotos[timer].image+"')";

function next() {
    if(timer > arrayPhotos.length){
        timer = 0
    }else{
        timer++
    }
    arrow.style.backgroundImage = "url('"+arrayPhotos[timer].image+"')";
}
