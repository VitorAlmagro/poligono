var elementos = [-7, 4, 2, 5];

var factoryObj = (principal, ligacoes) => {
    return {
        elemento: principal,
        seLigaCom: ligacoes
    }
}

var mapeamento = (elementos) => {

    let tamanho = elementos.length;
    let aux = 0;
    let obj = {};
    let matrizMapeada = [];
    let arrayAux = [];

    while (aux < tamanho) {

        arrayAux = [];
        obj = {};

        let principal = elementos[aux];

        if (aux == 0) {

            arrayAux.push(elementos[aux + 1]);
            arrayAux.push(elementos[tamanho - 1]);

        } else  if (aux == tamanho - 1) {

            arrayAux.push(elementos[aux - 1]);
            arrayAux.push(elementos[0]);

        } else {

            arrayAux.push(elementos[aux + 1]);
            arrayAux.push(elementos[aux - 1]);
        }     

        obj = factoryObj(principal, arrayAux);      

        matrizMapeada.push(obj);

        console.log(obj);
       
        aux++;
    }

     console.log(matrizMapeada);
}

mapeamento(elementos);