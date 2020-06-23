import Player from "./Player";

export default class Tick {
  cards: Card[];
  wonBy: Player | undefined;

  constructor() {
    this.cards = [];
    this.wonBy = undefined;
  }
  addCard(card: Card): void {
    this.cards.push(card);
  }
  decideWinner(): void {
    return;
  }
}
