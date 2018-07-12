var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>').addClass('lacuna').text(lacuna).appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {
        $entrada.attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {
        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    var inicia = function () {
        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        break;
                }
            }
        });
    }

    return { inicia: inicia,
        exibeLacunas: exibeLacunas
     };
};
