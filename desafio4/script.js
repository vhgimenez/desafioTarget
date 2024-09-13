const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
function calcularPercentual(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0); // Calcula o total
    const percentuais = {};
  
    for (let estado in faturamento) {
      percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }
  
    return { total, percentuais };
}
  
const resultado = calcularPercentual(faturamento);
  
console.log(`Faturamento total: R$ ${resultado.total.toFixed(2)}`);
for (let estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}
  