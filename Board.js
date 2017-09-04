var board = [
		['01','00','00','00','00','00','00','00','00','00'],
		['00','01','00','01','00','00','00','00','00','00'],
		['01','00','00','00','01','00','00','00','00','00'],
		['00','00','00','00','00','00','00','00','01','00'],
		['00','00','00','00','00','01','00','01','00','00'],
		['01','00','01','00','00','00','00','00','00','00'],
		['00','01','00','00','01','00','00','00','01','00'],
		['00','00','01','00','00','01','00','00','00','01'],
		['00','00','00','00','01','00','00','00','00','00'],
		['00','00','00','01','00','00','00','00','01','00']
	];

function printBoard() {
	for(var i =0;i<10;i++){
		var line = "";
		for(var j=0;j<10;j++){
			line = line+''+board[i][j]+' ';
		}
		console.log(line);
	}
}
function gameOfLife(arrTwoD) {
	//rows and columns
	var r = board.length;
	var c = board[0].length;

	for(var i = 0;i<r;i++){
		for(var j = 0;j<c;j++) {
			var neighbors = getNeighbour(board, i, j);

			//if the cell is ialive and it has 2 or 3 neighbors that are alive then it will live again
	        if(board[i][j]==1){
	            if(neighbors==2 || neighbors==3)
	                board[i][j]=3;
	        }
	        //else the cell is dead and if it has 3 neighbors then it becomes alive
	        else{
	            if(neighbors==3)
	                board[i][j]=2;
	        }
		}
	}
	//all other cells die
	for(int i=0;i<r;++i){
        for(int j=0;j<c;++j){
    		board[i][j]>>=1;
        }
    }
}

//returns number of live neighbors
function liveNeigbhbours(arrTwoD, row, column) {
	var count = 0;
	for (int i = row-1;i<row+1;++i) {
		for(int j =col-1;j<=col+1;++j) {
			if(i>=0 && i<board.length && j>=0 && j<board[0].length) {
				count +=board[i][j]&1;
			}
		}
	}
	count -= board[row][col]&1;
	return count;
}



 private int getNeighbour(int[][] board, int row, int col){
    int cnt=0;
    for(int i=row-1;i<=row+1;++i){
        for(int j=col-1;j<=col+1;++j){
            if(i>=0 && i<board.length && j>=0 && j<board[0].length){
                cnt += board[i][j]&1;
            }
        }
    }
    cnt-=board[row][col]&1;
    return cnt;
}






