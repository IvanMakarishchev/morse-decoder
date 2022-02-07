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

function decode(expr) {
    let decodedString = '';
    //--- Split morse code by 10 digits ---//
    let symbolsArray = expr.split(/(?<=^(?:.{10})+)/);

    //--- Decoding each symbol---//
    symbolsArray.forEach(el => {
        if (el === '**********'){
            decodedString+=' ';
        } else {
            let decodedSymbol = '';

            //--- Convert each number pair to .- ===//
            el.split(/(?<=^(?:.{2})+)/).forEach(el => {
                if (el === '10') { decodedSymbol+='.' }
                else if (el === '11') { decodedSymbol+='-' }
            });
            decodedString+=MORSE_TABLE[decodedSymbol];
        };
    });
    return decodedString;
}

module.exports = {
    decode
}