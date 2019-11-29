function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN; //return to the parent level of the time which called it, instad of return out of the whole funcction.
  }
  return fromN + sum(fromN + 1, toN);
}

console.log(sum(3, 7));
