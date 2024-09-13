function pertenceFibonacci(num) {
    let a = 0, b = 1, temp;
  
    if (num === a || num === b) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    while (b < num) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
  }
  
let numero = 21;
console.log(pertenceFibonacci(numero));