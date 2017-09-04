
var board = [
        [0,1,0,0,0,0,0,0,0,1,],
        [1,1,1,1,0,1,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,1,0,0,0,0,0,],
        [0,0,1,0,0,0,0,1,0,0,],
        [1,0,1,0,0,0,0,0,0,0,],
        [0,1,0,0,0,0,0,1,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,1,0,0,0,0,]
    ];

//print function 
function printBoard(arrTwoD) {
    for(var i =0;i<10;i++){
        var line = "";
        for(var j=0;j<10;j++){
            line = line+''+board[i][j]+' ';
        }
        console.log(line);
    }
}

console.log('\n');
console.log('Original: ')
printBoard(board);
console.log('\n');
console.log('\n');


var m = board.length;
var n = board[0].length;

for(var i = 0;i<m;i++) {

    for (var j = 0; j< n; j++) {

        //count resets for each ij val
        var countLive = 0;
        //get neighbors
        for(var p = Math.max(i-1,0); p <Math.min(i+2,m); p++) {
            
            for (var q = Math.max(j-1, 0); q< Math.min(j+2, n); q++) {

                if(board[p][q] == 2 || board[p][q] == 1) {
                    countLive ++;
                }
            }
        }

        countLive -= board[i][j]; //Gets rid of its own cell value so only have neighbors

        //Cell becomes alive if exactly 3 neighbors are alive
        if(board[i][j] == 0 && countLive ==3) {
            board[i][j] = 3; //status 0 is dead,next status is live 
        }

        //Cell dies if it has less than 2 neighbors or if cell has more than 3 neighbors e
        if(board[i][j] == 1 && (countLive < 2 || countLive >3 )) {
            board[i][j] = 2; //status 0 is live,next status is dead beca    
        }
    }
}

for (var i = 0;i < m; i++) {
    for (var j = 0; j< n; j++) {
        board[i][j] %=2; //set back to 0 and 1
    }
}

console.log('New: ')
printBoard(board);
console.log('\n');



