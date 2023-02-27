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
  const arr = [];
  for (let i = 0; i + 10 <= expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }

  let results = '';

  for (item of arr) {
    if (item === '**********') {
      results += ' ';
      continue;
    }
    let acc = '';
    for (let i = 0; i < item.length; i += 2) {
      if (item.slice(i, i + 2) === '10') {
        acc += '.';
      } else if (item.slice(i, i + 2) === '11') {
        acc += '-';
      }
    }
    results += MORSE_TABLE[acc];
  }
  return results;
}

module.exports = {
  decode,
};
