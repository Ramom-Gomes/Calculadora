function ColocarValor(val) {
    document.querySelector('.input-texto').value += val;

    return val;
};

function LimparTela() {
    document.querySelector('.input-texto'). value = '';
};
function FinalValor() {
    let valor = document.querySelector('.input-texto').value;
    let contadovalor = eval(valor);
    document.querySelector('.input-texto'). value = contadovalor;
    return contadovalor;
};