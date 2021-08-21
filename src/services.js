/* eslint-disable prettier/prettier */
export function calculateImc(weight, height) {
  const heightInMeters = height / 100;
  const imc = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let description = '';
  let status = '';

  if (imc < 18.5) {
    description = 'Você está abaixo do peso';
    status = 'bad';
  } else if (imc >= 18.5 && imc <= 24.9) {
    description = 'Você está com o peso normal';
    status = 'good';
  } else if (imc > 24.9 && imc <= 30) {
    description = 'Você está com sobrepeso';
    status = 'medium';
  } else if (imc > 30) {
    description = 'Você está com obesidade';
    status = 'bad';
  }

  return {imc, description, status};
}
