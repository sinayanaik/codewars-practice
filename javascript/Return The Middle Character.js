function getMiddle(s) {
  let strLen = s.length;
  if (strLen % 2 == 0) {
    return s.substring(strLen / 2 - 1, strLen / 2 + 1);
  } else {
    return s.substring(strLen / 2, strLen / 2 + 1);
  }
}
