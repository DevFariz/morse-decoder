const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function binaryToMorse(letter){
    let temp = "";
    let y = 0;

    if(letter == "**********"){
        return " "
    }
    
    for(let i = 0; i < letter.length; i++){
        while(y < letter.length){
            if(letter.substr(y, 2) == '10'){
                temp += '.'
            }else if(letter.substr(y, 2) == '11'){
                temp += '-'
            }
            y += 2
        }
    }

    return temp
}

function decode(expr) {

    let letters = [];
    let x = 0, str = "";

    while(x < expr.length){
        letters.push(expr.substr(x, 10))
        x += 10
    }

    for(let i = 0; i < letters.length; i++){
        if(binaryToMorse(letters[i]) == " "){
            str += " "
        }else{
            str += MORSE_TABLE[binaryToMorse(letters[i])];
        }
    }



    return str
}

module.exports = {
    decode
}