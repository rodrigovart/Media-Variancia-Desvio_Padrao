var media = []
var quadrado = []

function countTr() {
    let count = $("tbody tr").length
    return count
}

$("#numero").on('keydown', function (e) {
    if (e.which == 13) {
        add()
        e.preventDefault();
    }
})

function add() {
    let numero = $("#numero").val()
    let n = countTr()
    $("#numero").val('')

    if (numero != '' || numero) {
        $("#tbody").append(
            `<tr id="trDados${n}">
                <th scope="row"><i class="bi bi-trash-fill" onclick="javascript:$('#trDados${n}').remove()"></i></th>
                <td id="td${n}">${numero}</td>
            </tr>`
        )

        media[n] = numero
    } else {
        console.log(media)
        return false
    }
}

function calcular() {
    let amostra = $("#amostra").val()
    limpar()
    progress()

    let valorMedia = mediaAritimetica()
    notaMedia(valorMedia)
    let valorVariancia = variancia(amostra)
    let resultdesvioPadrao = desvioPadrao(valorVariancia)
// console.log(valorVariancia)
    appendResult(valorMedia, valorVariancia, resultdesvioPadrao)
}

function mediaAritimetica() {
    let soma = 0
    for (key in media) {
        soma += parseFloat(media[key])
    }

    let valorMedia = parseFloat((soma / countTr())).toFixed(2)

    return valorMedia
}

function notaMedia(valorNotaMedia) {
    for (const key in media) {
        // console.log(key)
        let valor = parseFloat(media[key]) - valorNotaMedia
        $(`#trDados${key}`).append(`<td id="nota-media${key}">${valor.toFixed(2)}</td>`)
        Quadrado(key, valor)
    }
    console.log(quadrado)
}

function Quadrado(n, valor) {
    let result = Math.pow(valor, 2)
    quadrado[n] = result
    $(`#trDados${n}`).append(`<td id="quadrado${n}">${result.toFixed(2)}</td>`)
}

function variancia(amostra = 0) {
    let soma = 0

    for (key in quadrado) {
        soma += parseFloat(quadrado[key])
    }

    let valorMediaQuadrado = parseFloat((soma / (countTr() - amostra))).toFixed(2)
    // console.log(soma)
    // console.log(countTr())
    // console.log(amostra)

    return [valorMediaQuadrado, soma]
}

function desvioPadrao(valorVariancia) {
    // console.log(valorVariancia[0])
    let resultdesvioPadrao = Math.sqrt(valorVariancia[0]).toFixed(2)

    return resultdesvioPadrao
}

function appendResult(valorMedia, valorVariancia, resultdesvioPadrao) {
    $("#tbody").append(
        `<tr id="resultado">
            <th scope="row">MEDIA: </th>
            <td id="media" colspan="2">${valorMedia}</td>
            <td id="soma-quadrado"><b>SOMA QUADRADO:</b> ${valorVariancia[1].toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">VARIANCIA: </th>
            <td id="media">${valorVariancia[0]}</td>
        </tr>
        <tr>
            <th scope="row">DESVIO PADRAO: </th>
            <td id="media">${resultdesvioPadrao}</td>
        </tr>`
    )

    $("#alert").empty().append(`FEITO!`)
    
    delete media
    delete quadrado
}

function progress() {
    let value = 0
    for (let i = 0; i <= 100; i++) {
        value += (100 / 3)
        $("#progress-bar").css({
            "width": `${value}%`
        })
    }
}

function limpar() {
    $("#tbody").empty()
    $("#progress-bar").css({
        "width": `${0}%`
    })
    $("#alert").empty().append(`LIMPO`)

    delete media
    delete quadrado
}