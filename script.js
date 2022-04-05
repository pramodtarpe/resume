var skills = document.querySelectorAll('.skill-percent');
var animationDone = new Array(skills.length);
var navTags = document.querySelectorAll('nav a');
for(let i=0;i<animationDone.length;i++){
    animationDone[i] = false;
}
for(let i=0;i<navTags.length;i++){
    navTags[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase() + "-id";
        // console.log(targetSection);
        var targetSection = document.getElementById(targetSectionId);
        var targetCoords = targetSection.getBoundingClientRect();
        // scroll till target reached
        var dest = targetCoords.top;
        var interval1 = setInterval(function(){
            if(dest <= 50){
                clearInterval(interval1);
                return;
            }            
            dest -= 50;
            // console.log(dest);
            window.scrollBy(0,50);
        },20);
    });
}
function resetBar(bar){
    bar.style.width = "0%";
}
for(let bar of skills){
    resetBar(bar);
}
function fillBar(bar){
    let currWidth = 0;
    let target = bar.getAttribute('data-percent');
    var interval2 = setInterval(function(){
        if(currWidth >= target){
            clearInterval(interval2);
            return;
        }
        currWidth++;
        bar.style.width = currWidth + '%';
    },15)
}
function checkScroll(){
    for(let i=0;i<skills.length;i++){
        let coordinate = skills[i].getBoundingClientRect();
        if(!animationDone[i] && coordinate.top <= window.innerHeight){
            animationDone[i] = true;
            fillBar(skills[i]);
        }
        else  if(coordinate.top > window.innerHeight){
            animationDone[i] = false;
            resetBar(skills[i]);
        }
    }
}
window.addEventListener("scroll",checkScroll);