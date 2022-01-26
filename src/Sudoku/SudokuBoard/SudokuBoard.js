"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SudokuBoard = void 0;
var SudokuBoard = /** @class */ (function () {
    //initiate empty board
    function SudokuBoard() {
        var _this = this;
        this.stringGameState = ""; //game state in string form
        this.arrayGameState = []; //game state in array form
        //getter for current game state in string
        this.getGameState = function () {
            return _this.stringGameState;
        };
        //getter for current game state in array
        this.getParsedGameState = function () {
            return _this.arrayGameState;
        };
        //parse from string to 2D array
        this.parseGameState = function () {
            //split into array of sudoku rows
            var splittedRows = _this.stringGameState.split("\n");
            splittedRows.pop(); //remove last "" in the array
            //for each string, format it into a nested array of numbers
            // result is a 2 dimensional array, with rows and columns
            var arrayGameState = splittedRows.map(function (row) {
                var tempArray = [];
                for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
                    var char = row_1[_i];
                    tempArray.push(parseInt(char));
                }
                return tempArray;
            });
            //update array game state
            _this.arrayGameState = arrayGameState;
        };
        //generate a random board game based on difficulty
        this.generateBoard = function (difficulty) { };
        //show full solution of current game
        this.getSolution = function () { };
        for (var i = 0; i < 9; i++) {
            this.stringGameState = this.stringGameState + "000000000\n";
        }
    }
    return SudokuBoard;
}());
exports.SudokuBoard = SudokuBoard;
var board = new SudokuBoard();
board.parseGameState();
console.log(board.getParsedGameState());
