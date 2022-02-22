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
    '**********': ' ',
};

/* function decode(expr) {
    // write your solution here
    let arrMorseTable = Object.entries(MORSE_TABLE);
    let arrExpr = expr.split('');
    let arrDecodeToMorse = [];
    for (let i = 0; i < arrExpr.length; i++) {
        for (let j = 0; j < arrMorseTable.length; j++){
            if (arrExpr[i] == arrMorseTable[j][1] ) {
                arrDecodeToMorse.push(arrMorseTable[j][0]);
            }      
        }
    }
    let str = '';
    let arrResult = []; 
    for (let i = 0; i < arrDecodeToMorse.length; i++) {
        str = arrDecodeToMorse[i];
       str = str.replace(/-/g, '11');
       str = str.replace(/\./g, '10');
       if (str.length < 10) {
          str = '0'.repeat(10 - str.length) + str;
       } 
     
        arrResult.push(str);
    }
    return arrResult.join('');
} */

function decode (expr) {
   let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
      }

   let arr2 = [];
   let str = '';
   for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    str = str.replace(/11/g, '-');
    str = str.replace(/10/g, '.'); 
    str = str.replace(/0/g, ''); 
    arr2.push(str);
}

let arrFromMorse = [];
let arrMorseTable = Object.entries(MORSE_TABLE);

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arrMorseTable.length; j++){
        if (arr2[i] == arrMorseTable[j][0] ) {
            arrFromMorse.push(arrMorseTable[j][1]);
        }      
    }
}
return arrFromMorse.join('');  
}

/* console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010")); */
module.exports = {
    decode
}