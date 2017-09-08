const { Map } = require('immutable-js');

// - Funções que transformam valores de um dominio pra um co-dominio
//     Ex: f(x) = x^2
    const f = x => x * x;
    const result = f(2);
    result
//  Mapeia Int para Int usando uma operação de quadrado

// - Estilo de programação que utiliza funções puras como seus blocos de construção.
// - Paradigma de programação baseado em expressões.
// - Usa expressões ao invés de statements combinando expressões pra formar funções e combinando funções para formar comportamentos complexos.         

    // Statement
    const x = 50;
    let statement = '';

    if (x > 70) {
      statement = 'x é maior que 70';
    } else {
      statement = 'x não é maior que 70';
    }
    statement

    // Expression
    const expression = x > 70 ? 'x é maior que 70' : 'x não é maior que 70';
    expression

//

// No Side Effects
//   Imutabilidade -> Objetos não podem ter seu estado alterado depois que for criado.

    const mutableObject = {
      prop1: 2,
      prop2: 3
    }

    mutableObject.prop3 = 2;

    mutableObject

    const immutableObject = new Map({
      prop1: 2,
      prop2: 3
    });

    immutableObject.set('prop3', 2);

    immutableObject

//   Pure functions -> Funções puras não alteram nada que não esteja dentro do seu próprio escopo e possuem uma saida válida para toda entrada válida

    const impureFunction = object => {
      object.prop2 = 3;
      return object;
    }

    let variavelAlterada = { prop1: 2 };
    const resultadoImpuro = impureFunction(variavelAlterada);
    variavelAlterada
    resultadoImpuro

    const pureFunction = object => Object.assign({ prop2: 3 }, object);

    let variavelMantida = { prop1: 2 };
    const resultadoPuro = pureFunction(variavelMantida);
    variavelMantida
    resultadoPuro

//   Higher Order Functions -> FunçÕes que recebem outras funções como argumento

    const concatenate = (string1, string2) => `${string1} ${string2}`;
    const highExample = (operation) => {
      return operation('higher order', 'function');
    }
    const finalResult = highExample(concatenate);
    finalResult

//   Currying -> Currying é quando uma função que, ao invés de pegar todos os argumentos de uma vez, recebe o primeiro argumento e retorna uma nova
//     função que recebe o segundo argumento e retorna outra função que pega o terceiro argumento e repete até que todos os argumentos sejam recebidos.

    const curryingEx = string => string2 => `${string} ${string2}`;
    const resultOfCurrying = curryingEx('example of');
    resultOfCurrying
    const resultFinal = resultOfCurrying('currying');
    resultFinal

//   Closures -> A closure is the combination of a function and the lexical environment within which that function was declared.



//   Function composition -> Composição de funções é quando combinamos vários funções simples para criar um comportamento mais complexo.

    const fn1 = s => s.toLowerCase();
    const fn2 = s => s.split('').reverse().join('');
    const fn3 = s => s + '!'

    const compositionResult = fn1(fn2(fn3('Time')));
    compositionResult
//

//   Higher Order Functions
//     Filter -> Recebe uma função que define uma condição para filtrar valores de uma lista.

    const filtered = [12, 5, 8, 130, 44].filter(value => value >= 10);
    filtered

//     Map -> Recebe uma função que define uma transformação a ser aplicada em todos os valores de uma lista.

    const mapped = [12, 5, 8, 130, 44].map(value => 'aaa' + value);
    mapped

//     Reduce -> Capaz de expressar qualquer transformação em listas (Normalmente é utilizado pra fazer acumulações)

    // Simple sum
    const sum = [1, 2, 3, 4].reduce((acc, current) => acc + current, 0);
    sum

    // Building pipe to composition
    const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

    const newFunc = pipe(fn1, fn2, fn3);
    const compositionResult2 = newFunc('Time');
    compositionResult2

    // Creating a object from a list

    const objectFromList = [1, 2, 3, 4].reduce((acc, current, index) => {
      acc[index] = current
      return acc;
    }, {});
    objectFromList

//


// Advantages
//  - Easier reasoning while programming = More predictable
//  - Less cognitive overload - Less to keep in minde
//  - Smaller solution space
//  - Easier dubugging
//  - Claner/more readable code
//  - Sane parallelization/concurrency
//  - Better Modulatization/reuse
//  - Mapping, filtering, reducing >> cooler than looping