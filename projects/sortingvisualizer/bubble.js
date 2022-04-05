async function bubbleSort(){
    document.getElementById('bar-value').textContent = "Bubble Sort in progress";
    for(let i=0;i<bars.length;i++){
        for(let j=0;j<bars.length-1-i;j++){
            bars[j].style.backgroundColor = "orange";
            bars[j+1].style.backgroundColor = "orange";
            await delay();
            let val1 = parseInt(bars[j].style.height);
            let val2 = parseInt(bars[j+1].style.height);

            if(val1 > val2){
                await delay();
                swapBars(bars[j],bars[j+1]);
            }
            await delay();
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";
        }
        bars[bars.length-i-1].style.backgroundColor = "green";
    }
    document.getElementById('bar-value').textContent = "Array has been Sorted";
}

document.getElementById('btn-sort-bubble').addEventListener("click",bubbleSort);