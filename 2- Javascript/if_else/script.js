function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://i.pinimg.com/originals/d0/ee/cc/d0eeccd29fa317b40ca5d35d01610848.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://i.pinimg.com/originals/43/03/ae/4303aec6ecfc94e82dbb36bd641c30bf.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://i.pinimg.com/736x/53/00/ce/5300ce8a09693dacbf012768bee5db95.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'https://esquire.com.gr/Content/ImagesDatabase/fb/1200x630/crop/both/1f/1f5091f3edcf4705a9c72e75f76cb65d.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://i.pinimg.com/564x/1a/e9/42/1ae94259b684a3d9a355d7a2a4f5e039.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'https://i.pinimg.com/564x/e0/7f/0f/e07f0f3f38a1961a8334442721a05f5f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://i.pinimg.com/564x/aa/a3/f1/aaa3f1a31e0cf33f2412a11437c8d41f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'https://i.pinimg.com/564x/9a/2f/c3/9a2fc3c4a7a5315923b8405a5d3b08c7.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}