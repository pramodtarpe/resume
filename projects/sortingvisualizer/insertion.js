async function insertionSort(){
    document.getElementById('bar-value').textContent = "Insertion Sort in progress";
    for(let i=1;i<bars.length;i++){
        bars[i].style.backgroundColor = "blue";
        let ii = i;
        let jj = ii-1;
        await delay();
        while(jj>=0 && (parseInt(bars[ii].style.height) < parseInt(bars[jj].style.height))){
            await delay();
            await swapBars(bars[ii],bars[jj]);
            bars[ii].style.backgroundColor = "green";
            bars[jj].style.backgroundColor = "blue";
            jj--;
            ii--;
        }
        for(let c=0;c<=i;c++){
            bars[c].style.backgroundColor = "green";
        }
    }
}

document.getElementById("btn-sort-insertion").addEventListener("click",insertionSort);