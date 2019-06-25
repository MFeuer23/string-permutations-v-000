function findAllPermutations(string) {
  if (string.length < 2) { // This is our break condition
    return string;
  }

  let permutations = []; 

  for (let i=0; i<string.length; i++) {
    let char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i) {// if char was used already
      continue;           // skip it this time
    }
    
    let remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

    for (let subPermutation of permut(remainingString)) {
      permutations.push(char + subPermutation)
    }
  }
    return permutations;
}