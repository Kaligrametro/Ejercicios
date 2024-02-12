// Consigna
/*
Una computadora inicia su proceso imprimiendo las cifras 2023, 2024 y 2025. 
A continuación, no se detiene y prosigue imprimiendo la suma de los tres 
números más recientes que ha impreso: 6072, 10121, 18218, etc. 
¿Podrías decir cuáles son las últimas cuatro cifras del número impreso en el
puesto 2023202320232023? Para ilustrar, en la posición 50, el número impreso 
es 8188013234823360, que concluye en 3360.
*/

// -- Declaración de funciones --

/** 
 * Funcion para obtener los ultimos digitos de un numero
 * @param valor {number} Valor a analizar
 * @param cantidad {number} Cantidad de digitos a obtener
 * @returns {Number} Ultimos digitos del valor
 */
function ultimos_digitos(valor, cantidad)
{
    return Number(valor.toString().slice(-cantidad));
}

/**
 * @param valores {number[]} Valores iniciales
 * @param n {number} Puesto al que se quiere llegar
 * @param digitos {number} Cantidad de digitos a obtener
 * @returns {number} Valor en la posicion n
 */
function calcularValor(valores, n, digitos = 4) 
{       
    // Reusabilidad para listas de longitud variable
    const size = valores.length; 

    // Si el puesto ya esta en la lista, retornarlo
    if(n <= size) 
    {
        return valores[n - 1];
    }

    // Iterar hasta llegar al puesto deseado
    for (let i = size+1; i <= n; i++)
    {
        // sumar todos los valores de la lista
        const suma = valores.reduce((a, b) => a + b, 0);

        // actualizar valores
        valores.shift();
        valores.push(ultimos_digitos(suma, digitos));
    }

    // retornar ultimo elemento del array (suma de los demas elementos)
    return valores[size - 1];
}

// -- Declaración de variables descriptas en el enunciado -- 
const valores_iniciales = [2023, 2024, 2025];
const puesto = 2023202320232023;
const n_digitos = 4;

// -- Ejecución de funciones --
const valor = calcularValor(valores_iniciales, puesto, n_digitos);
console.log(`> Los últimos ${n_digitos} dígitos en el puesto ${puesto} son ${valor}`);




