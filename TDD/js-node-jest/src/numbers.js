export default function arabicToRoman(arabic) {
  let romanResult = '';
  let rest = arabic;
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i <= decimal.length; i++) {
    // looping over every element of our arrays
    while (rest % decimal[i] < rest) {
      // keep trying the same number until it won't fit anymore
      romanResult += roman[i];
      // add the matching roman number to our result string
      rest -= decimal[i];
      // remove the decimal value of the roman number from our number
    }
  }
  return romanResult;
}
