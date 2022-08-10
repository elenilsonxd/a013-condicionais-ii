// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    const num = +prompt('digite um numero: ')

// 1. Utilizando ifs aninhados

if(num){
    console.log(num%2 === 0? 'O número é divisivel por 2' : '')
    if(num % 3 === 0) {
      console.log('O número é divisivel por 3')
    }
  }
// 2. Utilizando um operador lógico para unir duas operações relacionais


if(num % 2 === 0 || num % 3 === 0) {
    console.log(num%2===0? 'Esse número é divisível por 2.':'Esse número é divisível por 3.')
    console.log(num%3===0? 'Esse número é divisível por 3.':'')
  }