import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // initial value is 3 means no player insert their value
  public gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  public winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  public gameOver = false;
  public currentChance = 0;
  public draw = false;
  public winner = 3;

  constructor() {}

  // button click
  changeGameState(position: number) {
    // check for game over
    if (this.gameOver) {
      alert('Game is already over!!');
      return;
    }
    // check for is already occupied
    if (this.gameState[position] !== 3) {
      alert('Position is already occupied!!');
      return;
    }

    // if position is blank(i.e, postion=3)
    this.gameState[position] = this.currentChance;

    // check for winner
    if (this.checkWinner()) {
      // game over
      this.gameOver = true;
      // current player win the game
      this.winner = this.currentChance;
      return;
    }

    // if no winner
    // check for draw
    if (this.checkDraw()) {
      // game over
      this.gameOver = true;
      // game draw
      this.draw = true;
      return;
    }

    // no winner no draw
    this.currentChance = this.currentChance == 1 ? 0 : 1;
  }

  // check for winner
  checkWinner() {
    for (let i = 0; i < this.winningPositions.length; i++) {
      const winningSubArray = this.winningPositions[i];
      if (
        this.gameState[winningSubArray[0]] ===
          this.gameState[winningSubArray[1]] &&
        this.gameState[winningSubArray[1]] ===
          this.gameState[winningSubArray[2]] &&
        this.gameState[this.winningPositions[i][0]] !== 3
      ) {
        return true;
      }
    }
    return false;
  }

  // check for draw
  checkDraw() {
    for (let i = 0; i < this.gameState.length; i++) {
      if (this.gameState[i] === 3) {
        return false;
      }
    }
    return true;
  }

  // restart the game
  restartGame() {
    this.gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    this.gameOver = false;
    this.currentChance = 0;
    this.draw = false;
    this.winner = 3;
  }
}
