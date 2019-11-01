/*
    Codewars link:
    https://www.codewars.com/kata/530e15517bc88ac656000716

    Rot13
*/

function isAlpha(char) {
  return char >= 65 && char <= 90 || char >= 97 && char <= 122;
}
function isRotFirstHalf(char) {
  return char >= 65 && char <= 77 || char >= 97 && char <= 109;
}

const rot13 = (message) => {
  let str = "";
  [...message].forEach(msg => {
    if(isAlpha(msg.charCodeAt(0))) {
      if(isRotFirstHalf(msg.charCodeAt(0))) {
        str += String.fromCharCode(msg.charCodeAt(0) + 13);
      } else {
        str += String.fromCharCode(msg.charCodeAt(0) - 13);
      }
    } else {
      str += msg;
    }
  });
  return str;
}