const form = document.getElementById('form-activity')
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgFailed = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const activities = [];
const grades = [];
const spanApproved = '<span class="resultado approved">Approved</span>';
const spanFailed = '<span class="resultado failed">Failed</span>';
let linhas = '';
const notaMinima = parseFloat(prompt("Enter the minimum grade:"));



form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeActivity = document.getElementById('nome-activity');
    const inputNotaActivity = document.getElementById('nota-activity')

    if (activities.includes(inputNomeActivity.value)) {
        alert(`The Activity: ${inputNomeActivity.value} already been inserted`)
    } else {

    activities.push(inputNomeActivity.value);
    grades.push(parseFloat(inputNotaActivity.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeActivity.value}</td>`;
    linha += `<td>${inputNotaActivity.value}</td>`;
    linha += `<td>${inputNotaActivity.value >= notaMinima ? imgApproved : imgFailed}</td>`;
    linha += '<tr>';

    linhas += linha;
    }

    inputNomeActivity.value = '';
    inputNotaActivity.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 6 ? spanApproved : spanFailed;

    const media = somaDasNotas / grades.length;

    console.log(media);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < grades.length; i++) {
        somaDasNotas += grades[i];
    }

    return somaDasNotas / grades.length
}