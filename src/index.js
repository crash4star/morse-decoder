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
    let resultArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        resultArr.push(expr.substring(i, i + 10));
    };

    return resultArr.map(item => (item.split('**********').join(' ')))
        .map(item => (+item + ''))
        .map(item => (item.split('11').join('-')))
        .map(item => (item.split('10').join('.')))
        .map(item => (item = MORSE_TABLE[item]))
        .map(item => item === undefined ? ' ' : item)
        .join('');
}

module.exports = {
    decode
}