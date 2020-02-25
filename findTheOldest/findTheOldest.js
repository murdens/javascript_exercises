let findTheOldest = function(array) {
    return array.reduce((x, y) =>{
        const old = calcAge(x.yearOfBirth, x.yearOfDeath)
        const latest = calcAge(y.yearOfBirth, y.yearOfDeath)
        return old < latest ? y : x

    })
}
const calcAge = function(b, d){
    if (!d) {
        d = new Date().getFullYear;
    }
    return d - b;
} 
    
   
 
    

module.exports = findTheOldest
