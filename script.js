function snapCrackle(maxValue) {
    let output = '';

    for (let i = 1; i <= maxValue; i++) {
        
        if ( i % 2 === 1) {
            output += 'Snap';
        }

        if ( i % 5 === 0) {
            output += 'Crackle';
        }

        if (!(i % 2 === 1 || i % 5 === 0)) {
            output += i;
        }

        output += ', ';
    }

    return output;
}
let saida = snapCrackle(50);
console.log(saida);




// function alerta(mensagem){
//     alert(mensagem);
// }
// function metade(num, por){
//     return num / por;
// }
// alerta('O resultado da divisão é: ' + metade(15, 3));

// var largura = prompt('digite a largura');
// largura = parseFloat(largura);

// var altura = prompt('digite a altura');
// altura = parseFloat(altura);

// function mostrarArea(l, a){
//     alert('Área total: ' + (l * a));
// }

// let n = 1;

// while (n < 5) {
//     console.log(n)
//     n++
// }

// console.log('O ciclo acabou. ');   

// let str = '';

// for (let i = 1; i <= 10; i++) {
//     str = str + i;

// }

// console.log(str);

// for ( let i = 9; i >= -30; i -= 3) {
//     console.log (i);
// }


// let arr = [1, -2, 3, 4, 5];
// let soma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         soma = soma + arr[i];
//     console.log(soma);
// }



    // // function minhaTabela (n) {
    // //     let x = [];

    //     for (let i = 0; i <= n; i++) {
    //         x[i] = [];

    //         for (let j = 0; j <= n; j++) {
    //             x[i][j] = i * j;
    //         }
    //     }
    //     console.table(x);
    // }





