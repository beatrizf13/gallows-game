var criaJogo = function (sprite) {

    var etapa = 1;
    var palavraSecreta = '';
    var lacuna = [];

    // adiciona uma lacuna em branco para cada letra da palavraSecreta
    var criaLacunas = function () {
        lacunas = Array(palavraSecreta.length).fill('');
    };

    // muda o estado da variável etapa para indicar a próxima e última etapa
    var proximaEtapa = function () {
        etapa = 2;
    };

    // guarda a palavra secreta, cria as lacunas e vai para a próxima etapa
    var setPalavraSecreta = function (palavra) {
        if(!palavra.trim()) throw Error('Palavra em branco! :/');

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    // única maneira de termos acesso às lacunas fora da função `criaJogo()`
    var getLacunas = function () {
        return lacunas;
    };

    // permite consultar em qual etapa o jogo se encontra
    var getEtapa = function () {
        return etapa;
    };

    var processaChute = function (chute) {
        if(!chute.trim()) throw Error('Chute em branco! :/');

        var exp = new RegExp(chute, 'gi')
        , resultado
        , acertou = false;

        while (resultado = exp.exec(palavraSecreta)){
            lacunas[resultado.index] = chute;
            acertou = true;
        }

        if (!acertou) sprite.nextFrame();
    };


    var ganhou = function () {
        // var ganhou = false;
        // for(var i=0; i< palavraSecreta.length; i++){
        //     if(lacunas[i] != palavraSecreta[i]) return ganhou;
        // }
        // ganhou = true;
        // return ganhou;

        return lacunas.length
            ? !lacunas.some(function(lacuna) {
                return lacuna == '';
            })
            : false;
    };

    var perdeu = function () {
        return sprite.isFinished();

    };

    var ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    };

    var reinicia = function () {
        sprite.reset();
        palavraSecreta = '0';
        lacunas = [];
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    }
};
