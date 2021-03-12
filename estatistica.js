media = []
quadrado = []

function countTr() {
    let count = $("tbody tr").length
    return count
}

$("#numero").on('keydown', function(e) {
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
    progress()

    let valorMedia = mediaAritimetica()
    notaMedia(valorMedia)
    let valorVariancia = variancia()
    desvioPadrao(valorVariancia)
}

function mediaAritimetica() {
    let soma = 0
    for (key in media) {
        soma += Number(media[key])
    }

    let valorMedia = Number((soma / countTr())).toFixed(2)

    $("#tbody").append(
        `<tr>
            <th scope="row">MEDIA: </th>
            <td id="media">${valorMedia}</td>
        </tr>`
    )

    return valorMedia
}

function notaMedia(valorNotaMedia) {
    for (const key in media) {
        // console.log(key)
        let valor = Number(media[key]) - valorNotaMedia
        $(`#trDados${key}`).append(`<td id="nota-media${key}">${valor.toFixed(2)}</td>`)
        Quadrado(key, valor.toFixed(2))
    }
}

function Quadrado(n, valor) {
    let result = Math.pow(valor, 2).toFixed(2)
    quadrado[n] = result
    $(`#trDados${n}`).append(`<td id="quadrado${n}">${result}</td>`)
}

function variancia() {
    let soma = 0

    for (key in quadrado) {
        soma += Number(quadrado[key])
    }

    let valorMediaQuadrado = Number((soma / countTr())).toFixed(2)

    $("#tbody").append(
        `<tr>
            <th scope="row">VARIANCIA: </th>
            <td id="media">${valorMediaQuadrado}</td>
        </tr>`
    )

    return valorMediaQuadrado
}

function desvioPadrao(valorVariancia) {
    let result = Math.sqrt(valorVariancia).toFixed(2)

    $("#tbody").append(
        `<tr>
        <th scope="row">DESVIO PADRAO: </th>
        <td id="media">${result}</td>
    </tr>`
    )
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

    return false
}