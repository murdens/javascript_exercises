const palindromes = function(str) {
    strChanged= str.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
        strChanged.split('').reverse().join('') == strChanged
    );
};

module.exports = palindromes
