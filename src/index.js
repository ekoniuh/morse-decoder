const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  return expr
    .match(/.{10}/g)
    .map((letter) =>
      letter.charAt(0) == '*'
        ? ' '
        : MORSE_TABLE[
            letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')
          ]
    )
    .join('');
}

module.exports = {
  decode,
};

// function decode(expr) {
//   let resultCode = '';
//   const morseNumbers = {
//     '00': '',
//     10: '-',
//     11: '.',
//   };
//   while (expr.length) {
//     let exprArr = expr.slice(0, 10);
//     expr = expr.slice(10);
//     if (expr.includes('*')) {
//       resultCode += ' ';
//     } else {
//         let res = '';
//         for()
//     }
//   }
//   return resultCode;
// }
