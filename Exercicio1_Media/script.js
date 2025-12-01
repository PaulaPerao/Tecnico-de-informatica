function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const num3Input = document.getElementById('num3');
    const resultadoSpan = document.getElementById('resultado');

    window.calcularMedia = function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const num3 = parseFloat(num3Input.value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            resultadoSpan.textContent = "Por favor, insira três números válidos.";
            return;
        }

        const media = calcularMedia(num1, num2, num3);
        resultadoSpan.textContent = media.toFixed(2);
    }
});
