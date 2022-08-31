'use strict'

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

//MAP: Percorre o array e retorna um array do mesmo tamanho modificado ou não
//Sintaxe: array.map(callback)
//Parametros do callback: elemento, indice, array
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map(desconto2)

//filtrar os elementos menores que 20 (filter)
//Sintaxe: array.filter(callback)
const menor20 = (valor) => valor < 20
const valoresMenores20 = numbers.filter(menor20)

//Somar todos os valores (reduce)
//Sintaxe: array.reduce(callback, tipo de retorno)
//Retorna apenas um unico valor
//Parametros callback: acumulador, elemento, indice, array
const somar = (a, b) => a + b
const valorTotal = numbers.reduce(somar, 0)

//exercicio1: aumentar 100 em cada elemento
const somar100 = (valor) => valor + 100
const acrescimo = numbers.map(somar100)

//exercicio2: Somente numeros pares
const pares = (numeros) => numeros % 2 == 0
const numerosPares = numbers.filter(pares)

//exercicio3: total dos valores com desconto de 4
const valorTotal4 = (acumulador, valor) => acumulador + (valor - 4)
const TotalDesconto4 = numbers.reduce(valorTotal4, 0) 

//exercicio4: array com todos os elementos impares somando 21
const impares21 = (numero) => numero % 2 != 0
const somarImpares = (valor) => valor + 21
const arrayImpares = numbers.filter(impares21).map(somarImpares)

showArray(numbers, 'main', 'Preço original')
showArray(numbersDesconto, 'main', 'Desconto')
showArray(valoresMenores20, 'main')
showArray([valorTotal], 'main')
showArray(acrescimo, 'main', 'Somando 100')
showArray(numerosPares, 'main', 'Numeros pares')
showArray([TotalDesconto4], 'main', 'Valor total com desconto de 4')
showArray(arrayImpares, 'main', 'Numeros Impares + 21')