var board = document.getElementsByClassName('board')[0], // Игровое
    player = document.getElementsByClassName('gamer')[0], // Строка
    element, innerElement, 
    gamer1 = true, // Показывает, какой игрок сейчас ходит
    gameTable = [[null, null, null], [null, null, null], [null, null, null]],
    nullCount = 9, // Кол-во оставшихся ходов winner = null;
    winner = null;

player.innerText = 'Сейчас ходит X';

// Генерация игрового поля
for (var i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableClick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString());//y это номер
    element.appendChild(innerElement);
    board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;

function tableClick() {
    if (this.innerText == '') {
        this.innerText = gamer1 ? 'X' : '0';
        var y = this.getAttribute('y'), x = this.getAttribute('x');
        gameTable[y][x] = gamer1;
        nullCount--;
    if ((gameTable[y][0] === gamer1 && gameTable[y][1] === gamer1 && gameTable[y][2] === gamer1) ||
        (gameTable[0][x] === gamer1 && gameTable[1][x] === gamer1 && gameTable[2][x] == gamer1)      ||
        (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1)     ||
        (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
        winner = gamer1;    
    } 
    gamer1 = !gamer1; 
    player.innerText = gamer1 ? 'Сейчас ходит X' : 'Сейчас ходит 0';
    if (nullCount == 0 || winner !== null) { 
        if (winner !== null) { 
            if (confirm('Победили ' + (winner ? 'X' : '0') + '\nЖелаете сыграть ещё?')) {
                reset();
            }
            else if (confirm('Игра закончилась в ничью.\nЖелаете сыграть ещё?')) { 
                reset();  
            }
        }
    }
    }
    
function reset() { 
    gamer1 = true; // Показывает, какой игрок сейчас ходит 
    gameTable = [[null, null, null], [null, null, null], [null, null, null]]; // 
    nullCount = 9; // Кол-во оставшихся ходов 
    winner = null; var table = document.getElementsByClassName('inner-cell'); 
    for (var i = 0; i < table.length; i++) { 
        table[i].innerText = '';
    }
    player.innerText = 'Сейчас ходит X';
}
}