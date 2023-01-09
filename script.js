var i = 0,
image = document.getElementById("img"),
imgs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg"];

function next() {
    if (i == 4) {
    i = 0;
    } else {
    i++;
    }
    image.src = imgs[i];
}

function previous() {
    if (i == 0) {
    i = 4;
    } else {
    i--;
}
image.src = imgs[i];
}

var playInterval;
playInterval = setInterval(next, 3000);

let div1 = document.querySelector('.jeans-sec');
let div2 = document.querySelector('.tshirts-sec');
let div4 = document.querySelector('.shoes-sec');
function jeanes(){
    div1.style.display='block';
div2.style.display = 'none';
div4.style.display = 'none';
}

function tshirts(){
    div1.style.display='none';
    div2.style.display = 'block';
div4.style.display = 'none';
}

function shoes(){
    div1.style.display='none';
    div2.style.display = 'none';
div4.style.display = 'block';
}
let count = 0 ;
function add(){
    let num = document.querySelector('.bag span');
    num.innerHTML= ++count;
}

let inp = document.querySelectorAll('input');
let p = document.querySelectorAll('.form p');
for(let i=0 ; i<inp.length ; i++){
    inp[i].addEventListener("input", (e)=>{
        if(inp[i].value==""){
            p[i].style.display='block';
        }
        else {p[i].style.display='none'}
    })
}
console.log(inp);
console.log(p);