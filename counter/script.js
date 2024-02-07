// let counter = document.querySelector("#counter");

// let increament = function(){
//     let value = parseInt(counter.innerText);
//     value+=1;
//     counter.innerText = value;
// }


// let decreament = function(){
//     let value = parseInt(counter.innerText);
//     value-=1;
//     counter.innerText = value;
// }


// for Increament 

let plus = document.querySelector("#plus");

plus.addEventListener("click",function(){
    let counter = document.querySelector("#counter");
    let value = parseInt(counter.innerText);
    value+=1;
    counter.innerText = value;

});


// for Decreament 

let minus = document.querySelector("#minus");

minus.addEventListener("click",function(){
    let counter = document.querySelector("#counter");
    let value = parseInt(counter.innerText);
    value-=1;
    counter.innerText = value;
});

