function add (x,y) {
	return x += y

}

function subtract (x,y) {
	return x -= y
	
}

function sum (array) {
	sumOfArray = array.reduce((sum, num) => sum + num, 0);
	return (
		sumOfArray
	)
}

function multiply (array) {
	multiplyArray = array.reduce((sum, num) => sum * num);
	return(
		multiplyArray
	)
}

function power(x,y) {
	return x **= y
	
}

function factorial(n) {
	var ans=1; 
              
            for (var i = 2; i <= n; i++)  
                ans = ans * i;  
            return ans; 
 } 


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}