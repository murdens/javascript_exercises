const repeatString = function(word, x) {
    if (x<0){
        return 'ERROR';
    } else {
        return word.repeat(x)
    }


}

module.exports = repeatString
