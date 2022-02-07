function XO(str) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" || str[i] == "X") {
      x++;
    }
    if (str[i] == "o" || str[i] == "O") {
      y++;
    }
  }
  if (x == y) {
    return true;
  } else {
    return false;
  }
}
