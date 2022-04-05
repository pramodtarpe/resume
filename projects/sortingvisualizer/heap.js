async function heapify(n,i){
    let child = i;
    let LCI = (2*i)+1;
    let RCI = (2*i)+2;
    if(LCI < n && (parseInt(bars[LCI].style.height) > parseInt(bars[child].style.height))){
        child = LCI;
    }
    if(RCI < n && (parseInt(bars[RCI].style.height) > parseInt(bars[child].style.height))){
        child = RCI;
    }
    if(child != i){
        bars[child].style.backgroundColor = "orange";
        bars[i].style.backgroundColor = "orange";
        await swap(bars[child],bars[i]);
        await delay();
        bars[child].style.backgroundColor = "red";
        bars[i].style.backgroundColor = "red";
        await heapify(n,child);
    }
    return  new Promise(resolve => {setTimeout(() => {
        resolve();
    }, speed);})
}

async function heapSort(){
    let lastchild = Math.floor(bars.length/2) -1;
    document.getElementById('bar-value').textContent = "Building Max - Heap";
    for(let i=(lastchild);i>=0;i--){
        console.log(i)
        await heapify(bars.length,i);
    }
    document.getElementById('bar-value').textContent = "Swapping blue bars";
    for(let i=bars.length-1;i>=1;i--){
        bars[i].style.backgroundColor = "blue";
        bars[0].style.backgroundColor = "blue";
        await swap(bars[0],bars[i]);
        bars[i].style.backgroundColor = "green";
        await delay();
        await heapify(i,0);
    }
    bars[0].style.backgroundColor = "green";
    document.getElementById('bar-value').textContent = "Array has been Sorted";
}

document.getElementById("btn-sort-heap").addEventListener("click",heapSort);