function calcular() {

    let idade = window.document.getElementById('idade');
    let resp = window.document.getElementById('resp');
    let valor = Number(idade.value);

    if (valor <= 15) {
        resp.innerText = 'Você não pode votar!';
    }
    else if (valor >= 16 && valor < 18) {
        resp.innerHTML = 'Você pode votar, mas o seu voto é <strong>FACULTATIVO!<strong>';
    } else if (valor > 16 && valor < 71) {
        resp.innerHTML = 'Você pode votar, mas o seu voto é <strong>OBRIGATÓRIO!<strong>';
    }
    else {
        resp.innerHTML = 'Você pode votar, mas o seu voto é <strong>FACULTATIVO!<strong>'
    }
}
