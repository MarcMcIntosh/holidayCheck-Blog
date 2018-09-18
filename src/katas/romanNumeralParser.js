
function digitValue(str) {
  switch (str) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}

function sigedOrUnsiged(d, i, arr) {
  const idx = i + 1;
  return (idx === arr.length || d >= arr[idx]) ? d : -d;
}

function sumUp(a, b) { return a + b; }

function main(str) {
  return str.split().map(digitValue).map(sigedOrUnsiged).reduce(sumUp);
}
