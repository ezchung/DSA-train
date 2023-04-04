/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let checkRowArr = [];
        let checkColArr = [];
        for(let j = 0; j < board.length; j++){
            if(checkRowArr.indexOf(board[i][j]) !== -1){
                return false;
            }else{
                let value = board[i][j];
                if(+value) checkRowArr.push(value)
            }

            if(checkColArr.indexOf(board[j][i]) !== -1){
                return false;
            }else{
                let value = board[j][i];
                if(+value) checkColArr.push(value)
            }
        }
    }

    let row = 0;
    let column = 0;
    
    while(row <= 8){
        let boxPerRow = 1; //purpose that column can increase
        let tempColm = 0;
        while(boxPerRow <= 3){
            let checkArr = [];
            for(let i = row; i < row+3; i++){
                for(let j = tempColm; j < tempColm+3; j++){
                    if(checkArr.indexOf(board[i][j]) !== -1){
                        return false;
                    }else{
                        let value = board[i][j];
                        if(+value) checkArr.push(value);
                    }
                }
            }
            tempColm += 3;
            boxPerRow++;
        }
        column += 3;
        row += 3;
    }
    return true;
    
};

/**
- row must contain digits 1-9 without repetition
- column same
- every 3x3 sub boxes must have the same. 9x9

Input is an array of arrays
Iterate through the arrays
    first check row that 1-9 digits exists and no repetition
        if row is not valid, return false
        iterate through the columns so with the current index, iterate through the array and check

Iterate through the array (Check by box) so increase by 3 every time
    create empty array to pass in numbers
    j = i
    while j < i+3 (to increase as we go through board)
        get value of board[i][j] and if number pass to empty array
    
first box is [0][0] (top right) [2][2] (bottom left)
second box is [0][3] and [2][5]
third is [0][6] and [2][8]
--think of how to iterate by box
create row, column = 0
while(row <= 8)
    let boxOnRow = 0;
    while(boxOnRow < 9){
        let checkArr = []
        let column = 0;
        for(let i = row; row+3; i++)
            for(let j=column; j<column+3; j++)
                add only numbers to checkArray
            column + 3;
        check to see that box is valid; so array should have no duplicates
        if valid, continue and boxOnRow = +3
        else return false;
    }
}
return true;
    
*/  