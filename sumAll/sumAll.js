const sumAll = function(min, max) {
    if(min <0 || max <0){ 
        return 'ERROR'

    } else if (typeof min != 'number' || typeof max != 'number'){
        return 'ERROR'  

    } else if (min > max){

        const temp= min;
        min = max;
        max = temp;
    }

    let total=0;

    for (let i = min; i<=max; i++){
        total += i;
    }
    return total;
    
}


module.exports = sumAll
