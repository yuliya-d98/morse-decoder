const MORSE_TABLE = {
    ' ': ' ',
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

    let array = [];
    for (let i = 0; i < expr.length/10; i++) {
        array.push(expr.substr(i*10, 10));
    };

    array.forEach(function (value, index) {
        if (value == '**********') {
            array[index] = ' ';
        } else {
            changeNumbersToSymbols = {
                '00' : '',
                '10' : '.',
                '11' : '-',
            }
            let valueArray = [];
            for (let i = 0; i < 5; i++) {
                valueArray.push(changeNumbersToSymbols[value[2*i] + value [2*i + 1]]);
            }
            array[index] = valueArray.join('');
        }
    });

    return array.map(a => MORSE_TABLE[a]).join('');
}

module.exports = {
    decode
}
