var sum = 0;
function demo(){
    var array =[[1,2,3],[4,5,6]]
    var flatarr = array.flat()
    for(var i=0;i<flatarr.length;i++){
        console.log(flatarr[i]);
        sum += flatarr[i];
    }
    console.log(sum);
}

demo()