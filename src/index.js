function checkIt(arr, item, isCloseBrack) {
  const Pos = Number(isCloseBrack);
  for (var i = 0; i < arr.length; i++)
      if (arr[i][Pos] === item) {
          return arr[i];
      }
  return false;
}

module.exports = function check(str, bracketsConfig) {
  var mas = [];
  for (var i = 0; i < str.length; i++) {
      var element = checkIt(bracketsConfig, str[i], false);
      if (element) {
          if (element[0] === element[1]) {
              if (mas.length) {
                  if (mas[mas.length - 1] === str[i])
                      mas.pop();
                      else mas.push(element[0]);
              } else mas.push(element[0]);
          } else mas.push(element[1]);
      } else {
          element = checkIt(bracketsConfig, str[i], true);
          if (element) {
              if (!mas.length) return false;
              if (str[i] !== mas.pop()) return false;
          } else return false;
      }
  }

  if (mas.length) return false;
  else return true;
};