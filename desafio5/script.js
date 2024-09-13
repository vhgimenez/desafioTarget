function inverterString(str) {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    
    return stringInvertida;
}
  
let stringOriginal = "exemplo de string";
let stringInvertida = inverterString(stringOriginal);
  
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);