// Train
let userSeat = prompt("Input your seat in train, please (1-54)");
let trainCar = Math.floor((userSeat - 1) / 4 + 1); 
let seatUpDown = "upper seat";
let seatSideAside = "not a side seat";
if (userSeat % 2) {
    seatUpDown = "down seat";
}
if (userSeat > 36) {
    trainCar = Math.floor((54 - userSeat) / 2 + 1); 
    seatSideAside = "a side seat";
}

alert(`You have ${seatUpDown} and ${seatSideAside} in coupe ${trainCar}`);

// Calc

let operator; 
function calc() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2) {
                result = num1 / num2;
            } else {
                result = 'Infinity';
            }
            break;
        default:
            result = 'chose operation';
    }
document.getElementById("result").innerHTML = result;
}

// Tic-Tac-Toe Checker

function isSolved(board) {

    function checkHor() {
        let result;
        board.forEach(item => {
            if (item[0] != 0 &&
                item[0] == item[1] &&
                item[0] == item[2])

                result = item[0];
        });
        return result;
    }

    function checkVer() {
        for (i = 0; i < 3; i++) {
            if (board[0][i] != 0 &&
                board[0][i] == board[1][i] &&
                board[1][i] == board[2][i] 
                )

                return board[0][i];
        }
    }

    function checkDiagonal() {
        if (board[1][1] != 0 &&
            (board[0][0] == board[1][1] &&
             board[1][1] == board[2][2]) ||
            (board[0][2] == board[1][1] &&
             board[1][1] == board[2][0])
        )
            return board[1][1];
    }
    
    function gameOver() {
        for (x = 0; x < 3; x++)
            for (y = 0; y < 3; y++)
                if (board[x][y] = 0)
                    return -1;
        return 0;
    }
    return checkHor() || checkVer() || checkDiagonal() || gameOver();
}
