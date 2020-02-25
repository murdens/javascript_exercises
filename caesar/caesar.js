const caesar = function(str, amount) {
    var result = '';
    for (var i=0; i<str.length; i ++){
      var letter = str[i]
      
      if (letter.match(/[a-z]/i)) {
          var code = str.charCodeAt(i);
            if ((code <= 90) && ((code + amount)<65)){
            var code2 = 90-(-amount-(code-65)-1)
            letter = String.fromCharCode(code2);
            }else if 
            ((code >= 97) && ((code + amount)<97)) {
            var code2 = 122-(-amount-(code-97)-1)
            letter = String.fromCharCode(code2);
            }else if 
            ((code >= 65) && (code <= 90)){
			letter = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }else if 
            ((code >= 97) && (code <= 122)){
            letter = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
      }
      result += letter 
    }
    return result
};

module.exports = caesar
