function pigLatin() {
    const vowels = 'aeiou';
    const consonant = 'bcdfghjklmnpqrstvwxyz'
    const special = ".,/)(*&^%$#@!~+_-=}{;:><?|''"
    var sentences = document.getElementById('sentence').value.split(' ');
    var output = ''
    for (i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        if (vowels.includes(sentence.charAt(0).toLowerCase())) {
            if (special.includes(sentence.charAt(sentence.length-1))) {
                var let = sentence.charAt(sentence.length-1);
                sentence = sentence.substring(0, sentence.length - 1);
                sentence = sentence + 'ay' + let;
            } else {
                sentence = sentence + 'ay';
            }
        } else if (consonant.includes(sentence.charAt(0).toLowerCase())) {
            if (special.includes(sentence.charAt(sentence.length-1))) {
                var let = sentence.charAt(sentence.length-1);
                sentence = sentence.substring(0, sentence.length - 1);
                sentence = sentence + sentence.charAt(0).toLowerCase() + 'ay' + let;
                sentence = sentence.substr(1);
                sentence = sentence.charAt(0).toUpperCase() + sentence.substr(1);
        } else {
                sentence = sentence + sentence.charAt(0).toLowerCase() + 'ay';
                sentence = sentence.substr(1);
                sentence = sentence.charAt(0).toUpperCase() + sentence.substr(1);
              }
        }
        output = output + sentence + ' ';   
    }
    console.log(output);
    document.getElementById("output").innerHTML = "Your sentence in Pig Latin is: <span class='bold'>" + output + "</span>"; 
}