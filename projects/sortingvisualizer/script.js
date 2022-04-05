var delay = function(){
    return new Promise((resolve) => {setTimeout(() => {resolve()},speed)})
}
var size = 10;
var speed = 300;
var arrcontainer = document.getElementById('bar-container');

var bars = document.getElementsByClassName('bar');
//Generate Array
function generateArray(){
    var arr = new Array(size);
    bars = document.getElementsByClassName('bar');
    arrcontainer.innerHTML = '';
    for(let i=0;i<size;i++){
        arr[i] = Math.floor(Math.random() * 450);
        if(arr[i] <= 10){
            arr[i] = 10 + i;
        }
    }
    for(let i of arr){
        let element = document.createElement('div');
        element.classList.add("bar");
        element.style.height = i + "px";
        element.addEventListener("mouseenter",function(){document.getElementById('bar-value').textContent = parseInt(this.style.height)});
        element.addEventListener("mouseleave",function(){document.getElementById('bar-value').textContent = '--'});
        arrcontainer.appendChild(element);
    }
}

//Swap bar 
function swap(bar1,bar2){
    return new Promise((resolve)=> {
        setTimeout(() => {
            let h1 = parseInt(bar1.style.height);
            let h2 = parseInt(bar2.style.height);
            bar1.style.height = h2 + 'px';
            bar2.style.height = h1 + 'px';
            resolve();
        }, speed);
    })
}


generateArray(size);
var btn = document.getElementById('btn-generate');
btn.addEventListener("click",generateArray,size);
//slider for size of array
var slider = document.getElementById("myRange");
slider.oninput = function() {
    size = parseInt(slider.value);
    generateArray();
}
//slider for speed of sorting
var speedSlider = document.getElementById("mySpeed");
speedSlider.oninput = function() {
    speed = -1 * parseInt(speedSlider.value);
}

//New swap func in test
function swapBars(b1,b2){
    return new Promise((resolve) => {
        const d1 = b1.getBoundingClientRect().left;
        const d2 = b2.getBoundingClientRect().left;
        const d = Math.abs(d2-d1);
        if(d2 < d1){
            const temp = b1;
            b1 = b2;
            b2 = temp;
        }
        b1.style.transform = "translateX(" + d + "px)";
        b1.style.transition = "transform " + speed + "ms linear 0s";
        b2.style.transform = "translateX(" + -d + "px)";
        b2.style.transition = "transform " + speed + "ms linear 0s";
        setTimeout(()=>{
            b1.style.transform = "translateX(0px)";
            b1.style.transition = "transform 0s linear 0s";
            b2.style.transform = "translateX(0px)";
            b2.style.transition = "transform 0s linear 0s";
            let h1 = parseInt(b1.getBoundingClientRect().height);
            let h2 = parseInt(b2.getBoundingClientRect().height);
            b1.style.height = h2 + 'px';
            b2.style.height = h1 + 'px';
            resolve();
        },speed);
    })
}