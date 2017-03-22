var elementos = [-7, 4, 2, 5];

var operacoes = ['+', '*', '*', '+'];

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

    let primeiroElemento = {};
    let segundoElemento = {};

    while (aux < tamanho) {

        arrayAux = [];
        obj = {};
        primeiroElemento = {};
        segundoElemento = {};

        let principal = elementos[aux];

        if (aux == 0) {

            primeiroElemento.elemento = elementos[aux + 1];
            primeiroElemento.operacao = operacoes[aux];

            segundoElemento.elemento = elementos[tamanho - 1];
            segundoElemento.operacao = operacoes[tamanho - 1];

        } else  if (aux == tamanho - 1) {

            primeiroElemento.elemento = elementos[aux - 1];
            primeiroElemento.operacao = operacoes[aux - 1];

            segundoElemento.elemento = elementos[0];
            segundoElemento.operacao = operacoes[aux];

        } else {

            primeiroElemento.elemento = elementos[aux + 1];
            primeiroElemento.operacao = operacoes[aux];

            segundoElemento.elemento = elementos[aux - 1];
            segundoElemento.operacao = operacoes[aux - 1];
            
        }     

        arrayAux.push(primeiroElemento, segundoElemento);

        obj = factoryObj(principal, arrayAux);      

        matrizMapeada.push(obj);

        console.log(obj);
       
        aux++;
    }

     console.log(matrizMapeada);
}

mapeamento(elementos);