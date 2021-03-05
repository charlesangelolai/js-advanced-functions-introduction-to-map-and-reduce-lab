// Your code here
function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= -1;
  }

  return sourceArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= 2;
  }

  return sourceArray;
}

function mapToSquare(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = Math.pow(sourceArray[i], 2);
  }

  return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;

  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i];
  }

  return total;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false;
  }

  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true;
  }

  return false;
}
