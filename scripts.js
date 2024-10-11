document.getElementById('draw-button').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Por favor, insira um intervalo válido!");
        return;
    }

    const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    document.getElementsByTagName('p')[0].innerHTML = drawnNumber

})


