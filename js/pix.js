document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('texto');
    
    texto.select();
    texto.setSelectionRange(0, 99999);

    document.execCommand('copy');
    
    alert('Texto copiado para a área de transferência: ' + texto.value);
});