let shareProfile = document.getElementById("share-button");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let remove = document.getElementById("cross-button");
let photo = document.getElementById("photo"); 
let cross = document.getElementById("cross");
let wrapper = document.getElementById("wrapper");


// let openModal = function (){
//     modal.classList.add("active");
// };

shareProfile.addEventListener("click",function(){
    let modal = document.getElementById("modal");
    modal.style.cssText= "scale: 1; z-index:20;";
    overlay.style.cssText= "opacity: 1; pointer-events:initial;";


});

remove.addEventListener("click",function(){
    let modal = document.getElementById("modal");
    modal.style.cssText= "scale: 0;";
    overlay.style.cssText= "opacity: 0;";

});

overlay.addEventListener("click",function(){
    modal.style.cssText= "scale: 0;";
    overlay.style.cssText= "opacity: 0;";
    photo.style.cssText="border-radius:50%; scale:1; transition:scale 0.3s linear";

});

photo.addEventListener("click",function(){
    photo.style.cssText= "border-radius: 0; scale:2.5; z-index:1; position:absolute; top:28%; transition:scale 0.1s linear; backdrop-filter:blur(500px)";
    cross.style.cssText= "opacity:1";
    
});

cross.addEventListener("click",function(){
    photo.style.cssText="border-radius:50%; scale:1; transition:scale 0.1s linear";
    cross.style.cssText= "opacity:0";

});

// document.addEventListener("click",function(){
//     photo.style.cssText="border-radius:50%; scale:1; ";
// })



