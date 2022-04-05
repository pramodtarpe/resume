async function merge(start,mid,end){
    document.getElementById('bar-value').textContent = "Merge Sort in progress";
    for(let i=start;i<=end;i++){
        bars[i].style.backgroundColor = "orange";
    }
    var temp = [];
    let i = start;
    let j = mid + 1;
    while((i<=mid) && (j<=end)){
        let val1 = parseInt(bars[i].style.height);
        let val2 = parseInt(bars[j].style.height);
        if(val1 < val2){
            temp.push(val1);
            i++;
        }
        else{
            temp.push(val2);
            j++;
        }
    }
    while(i<=mid){
        temp.push(parseInt(bars[i++].style.height));
    }
    while(j<=end){
        temp.push(parseInt(bars[j++].style.height));
    }
    for(let i=0;i<(temp.length);i++){
        bars[i+start].style.height = temp[i] + 'px';
    }
    return  new Promise(resolve => {setTimeout(() => {
        resolve();
    }, 500);})
}
async function mergeSort(start=0,end=bars.length-1){
    if(start >= end){
        return;
    }
    let mid = Math.floor((start + end) / 2);
    await mergeSort(start,mid);
    await mergeSort(mid+1,end);
    await merge(start,mid,end);
    for(let i=start;i<=end;i++){
        bars[i].style.backgroundColor = "green";
    }
    return  new Promise(resolve => {setTimeout(() => {
        resolve();
    }, speed);})
}
async function mergeSortHelper(){
    await mergeSort(0,bars.length-1);
    document.getElementById('bar-value').textContent = "Array has been Sorted";
}
document.getElementById("btn-sort-merge").addEventListener("click",mergeSortHelper);