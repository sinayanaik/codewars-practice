function DNAStrand(dna) {
  var dnaStrand = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      dnaStrand += "T";
    } else if (dna[i] === "T") {
      dnaStrand += "A";
    } else if (dna[i] === "C") {
      dnaStrand += "G";
    } else if (dna[i] === "G") {
      dnaStrand += "C";
    }
  }
  return dnaStrand;
}
