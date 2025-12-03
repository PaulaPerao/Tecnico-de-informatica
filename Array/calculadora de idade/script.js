function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        img.style.display = 'block'

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = 'https://i.pinimg.com/564x/62/b9/03/62b903532d7c31f433509456d2600593.jpg'
            } else if (idade < 21) {
                //Jovem
                img.src = 'https://i.pinimg.com/564x/da/b2/d4/dab2d410de5f1433536f351b1c343edc.jpg'
            } else if (idade < 50) {
                //Adulto
                img.src = 'https://i.pinimg.com/564x/f1/31/14/f13114f0b14436bca3a436835bba3367.jpg'
            } else {
                //Idoso
                img.src = 'https://i.pinimg.com/564x/d4/4a/39/d44a39b38144d36b99b3431b4383a47b.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = 'https://i.pinimg.com/564x/4a/df/17/4adf17d1425338a2b27431203345a1ce.jpg'
            } else if (idade < 21) {
                //Jovem
                img.src = 'https://i.pinimg.com/564x/18/e6/5f/18e65f7528342a3c3275510d9d3f149c.jpg'
            } else if (idade < 50) {
                //Adulto
                img.src = 'https://i.pinimg.com/564x/a9/a3/39/a9a339408645d153494446135cc59103.jpg'
            } else {
                //Idoso
                img.src = 'https://i.pinimg.com/564x/6a/fe/f1/6afef13723d554a7c47a422a7b058533.jpg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}