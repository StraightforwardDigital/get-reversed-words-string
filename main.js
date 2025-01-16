function reverseWords(str) {
  //split the words out of the string using split(' ')
  //reverse the words using map(word => word.split('')reverse().join(''))
  //Joing the now reversed words back into one string using join(' ')
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}