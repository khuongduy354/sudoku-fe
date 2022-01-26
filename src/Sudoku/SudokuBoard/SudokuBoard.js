"use strict";
exports.__esModule = true;
exports.SudokuBoard = void 0;
var SudokuBoard = /** @class */ (function () {
    //initiate empty board
    function SudokuBoard() {
        var _this = this;
        this.gameState = ""; //game state in string form
        this.parsedGameState = []; //game state in array form
        //getter for current game state in string
        this.getGameState = function () {
            return _this.gameState;
        };
        //getter for current game state in array
        this.getParsedGameState = function () {
            return _this.parsedGameState;
        };
        //parse from string to 2D array
        this.parseGameState = function () {
            var tempArr = [[]];
            var currentState = _this.gameState;
            var stringIndex = 0;
            var row = 0;
            var col = 0;
            while (row < 9) {
                //if hit \n, move to next row, reset to col 0
                if (currentState[stringIndex] === "\n") {
                    row++;
                    col = 0;
                }
                console.log(tempArr[row][col]);
                //add string value to proper position in array
                tempArr[row][col] = parseInt(currentState[stringIndex]);
                col++;
                stringIndex++;
            }
            _this.parsedGameState = tempArr;
        };
        for (var i = 0; i < 9; i++) {
            this.gameState = this.gameState + "000000000\n";
        }
    }
    return SudokuBoard;
}());
exports.SudokuBoard = SudokuBoard;
var board = new SudokuBoard();
board.parseGameState();
console.log(board.getParsedGameState());
