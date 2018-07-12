var criaJogo = function () {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    // adiciona uma lacuna em branco para cada letra da palavraSecreta
    var criaLacunas = function () {
        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    // muda o estado da variável etapa para indicar a próxima e última etapa
    var proximaEtapa = function () {
        etapa++;
    };

    // guarda a palavra secreta, cria as lacunas e vai para a próxima etapa
    var setPalavraSecreta = function (palavra) {
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

    /*
    Tornou acessível apenas as funções que fazem sentido serem chamadas por quem utilizar nosso jogo.
        A função `proximaEtapa()` é de uso interno e só foi criada para melhorar a legibilidade e manutenção do código, a
        mesma coisa para a função `criaLacunas()`.
    */
    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }
};
