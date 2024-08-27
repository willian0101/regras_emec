// script.js

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const close = document.querySelector('.close');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');

    const rules = {
        basketball: {
            title: 'Regras do Basquete 3x3',
            description: `
                <div>
                    <p><strong>Cada partida terá duração de 10 minutos, ou terminará após uma equipe atingir 21 pontos.</strong></p>
                    <ul>
                        <li>Utilizaremos apenas metade da quadra (apenas uma cesta).</li>
                        <li>3 jogadores por equipe.</li>
                        <li>Os jogadores não poderão andar com a bola sem quicá-la.</li>
                        <li>A todo arremesso dentro do arco deverá ser concedido 1 ponto.</li>
                        <li>A todo arremesso atrás do arco deverá ser concedido 2 pontos.</li>
                        <li>A todo arremesso de lance livre convertido deverá ser concedido 1 ponto.</li>
                    </ul>
                    <p><strong>Se a falta é cometida sobre um(a) jogador(a) que está no ato de arremesso, será concedido a este(a) jogador(a) um número de lances livres da seguinte forma:</strong></p>
                    <ul>
                        <li>Se o arremesso efetuado for convertido, a cesta será marcada e terá 1 lance livre adicional.</li>
                        <li>Se o arremesso efetuado não for convertido, terá 2 lances livres.</li>
                    </ul>
                    <p><strong>Após cada cesta de campo convertida ou último lance livre (exceto aqueles seguidos por posse de bola):</strong></p>
                    <ul>
                        <li>Um(a) jogador(a) da equipe que não pontuou deve prosseguir o jogo driblando ou passando a bola de dentro da quadra diretamente embaixo da cesta (não atrás da linha de fundo) para um companheiro atrás do arco.</li>
                        <li>O(a) jogador(a) de defesa não poderá tocar ou tentar roubar a bola na área do “semicírculo” embaixo da cesta.</li>
                    </ul>
                    <p><strong>Após cada arremesso de cesta de campo não convertida ou último lance livre (exceto aqueles seguidos por posse de bola):</strong></p>
                    <ul>
                        <li>Se um(a) jogador(a) de ataque ganha o rebote da bola, pode continuar a tentativa de pontuar, sem ter que voltar a bola para trás do arco.</li>
                        <li>Se um(a) jogador(a) de defesa ganha o rebote, deve voltar a bola para trás do arco (passando ou driblando).</li>
                        <li>Se a equipe de defesa rouba ou dá um toco na bola, deve voltar a bola para trás do arco (passando ou driblando).</li>
                    </ul>
                </div>
            `
        },
       
        soccer: {
            title: 'Regras do Futebol',
            description: `
                <div>
                    <p><strong>Cada partida terá duração de 16 minutos, divididos em 2 tempos de 8 minutos.</strong></p>
                    <p><strong>Equipe de 5 jogadores.</strong></p>
                    <ul>
                        <li>No recuo de bola, o(a) goleiro(a) não poderá pegar a bola com as mãos.</li>
                        <li>O lateral e escanteio devem ser cobrados com os pés.</li>
                    </ul>
                </div>
            `
        },
        dodgeball: {
            title: 'Regras da Queimada',
            description: `
                <div>
                    <ul>
                        <p><strong>Cada partida terá duração de 10 minutos.</strong></p>  
                        <p>A partida pode ser encerrada em menos tempo, caso todos os jogadores de um dos times sejam queimados.</p>  
                        <p><strong>Ao final dos 10 minutos, vencerá o time com mais jogadores em campo (sem terem sido queimados).</strong></p>  
                        <p><strong>Utilizaremos as linhas da quadra de vôlei como campo. Após a linha final da quadra de vôlei, será considerado o espaço do “cemitério”.</strong></p>  
                        <p>Todas as bolas que caírem nas laterais (fora da quadra de vôlei) pertencerão ao cemitério.</p>
                        <p><strong>Um jogador é queimado se um adversário arremessar a bola e ela tocar qualquer parte do corpo do jogador e depois tocar o chão (exceto a cabeça e as mãos que são “frias”).</strong></p>
                        <li>Se o jogador pegar a bola no ar, ele não é queimado. Se a bola tocar o jogador e um companheiro agarrar no ar antes dela tocar o chão, o jogador também não é queimado.</li>  
                        <li>Se a bola tocar dois (ou mais) jogadores e depois tocar o chão, todos os jogadores em que a bola tocou estão queimados.</li>  
                        <li>Se a bola tocar o chão primeiro e depois o jogador, o jogador não é queimado.</li>  
                        <li>Em caso de empate no final dos 10 minutos (ou seja, mesmo número de jogadores em campo), haverá prorrogação, sem tempo determinado, até que um jogador de uma das equipes seja “queimado” e, imediatamente, encerra-se o jogo.</li>
                        <li>A partida é iniciada com um jogador no cemitério, porém este não pode queimar os adversários. Ele permanece nesta posição apenas devolvendo as bolas que caírem no cemitério para seu time; quando o primeiro jogador de seu time for queimado, ele retorna para seu campo.</li>
                        <p><strong>Quando o jogador é queimado, ele deve se dirigir até o cemitério carregando a bola, e de lá poderá lançar para queimar os adversários ou passar a bola para seu time.</strong></p>
                    </ul>
                </div>
            `
        },
        volleyball: {
            title: 'Regras do Vôlei',
            description: `
                <div>
                    <ul>
                        <p><strong>Jogo será disputado em 2 sets de 15 pontos. Em caso de empate no final do set (14 x 14), a partida continua até que a diferença de dois pontos seja atingida. Caso haja empate (1x1), teremos o terceiro set.</strong></p>
                        <p><strong>6 jogadores por equipe.</strong></p>
                        <li>Rodízio com o formato 6 x 0. (Quando a equipe ganha o direito de sacar, os jogadores devem avançar uma posição no sentido horário).</li>
                        <li>Após o saque, cada time só poderá tocar a bola três vezes, sendo proibido que um jogador toque a bola duas vezes seguidas.</li>
                    </ul>
                </div>
            `
        },
        pingpong: {
            title: 'Regras do Tênis de mesa',
            description: `
                <div>
                    <ul>
                        <p><strong>Cada equipe poderá inscrever 2 jogadores.</strong></p>
                        <p><strong>Jogo será disputado em 2 sets de 11 pontos. Caso haja empate, teremos o terceiro set.</strong></p>
                        <li>Os jogadores se alternam no saque a cada dois pontos. Em 10 a 10, o saque é alternado a cada ponto.</li>
                        <p><strong>O ponto é marcado quando o jogador errar o saque ou a resposta a ele, tocar na bola 2 vezes consecutivas, tocar na mesa com a mão livre ou bater com o lado de madeira da raquete na bola.</strong></p>
                    </ul>
                </div>
            `
        },
        chess: {
            title: 'Regras do Xadrez',
            description: `
                <div>
                    <ul>
                        <p><strong>Regras específicas do xadrez – Movimentos das peças.</strong></p>
                        <li>O tabuleiro é composto por 64 casas, dispostas em 8x8.</li>
                        <li>Cada jogador tem 16 peças: 1 rei, 1 rainha, 2 torres, 2 bispos, 2 cavalos e 8 peões.</li>
                        <li>O objetivo é dar xeque-mate no rei adversário, ou seja, colocar o rei adversário em uma posição de captura inevitável.</li>
                        <li>Peças movem-se de formas específicas: torres movem-se em linha reta, bispos em diagonais, cavalos em “L”, e a rainha combina os movimentos da torre e do bispo.</li>
                        <li>O peão move-se para frente uma casa, mas captura peças adversárias na diagonal. No seu primeiro movimento, pode avançar duas casas.</li>
                        <li>O jogo pode terminar por xeque-mate, empate, ou se um dos jogadores ficar sem movimentos válidos.</li>
                        <p><strong>Cada equipe poderá inscrever 2 jogadores.</strong></p>
                    </ul>
                </div>
            `
        }
    };

    document.querySelectorAll('.game-btn').forEach(button => {
        button.addEventListener('click', () => {
            const game = button.getAttribute('data-game');
            popupTitle.textContent = rules[game].title;
            popupDescription.innerHTML = rules[game].description; // Alterado para innerHTML
            popup.style.display = 'flex';
        });
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
