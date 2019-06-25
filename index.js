function findAllPermutations(str) {
  if (string.length < 2) { // This is our break condition
    return string;
  }

  var permutations = []; 

  for (var i=0; i<string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i) // if char was used already
      continue;           // skip it this time

    var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)

    }
    return permutations;
}