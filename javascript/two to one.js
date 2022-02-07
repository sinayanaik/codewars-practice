function longest(s1, s2) {
  var s1 = s1.toLowerCase();
  var s2 = s2.toLowerCase();
  var s3 = s1 + s2;
    var s3 = s3.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    }).join('');
  var s4 = s3.split("").sort().join("");
  return s4;
}
