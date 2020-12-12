// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и
// возвращает самое длинное слово в этой строке.


const findLongestWord = function(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let index = 1; index < words.length; index++) {
       if (longestWord.length <= words[index].length) {
           longestWord = words[index];
       }
    }

    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'