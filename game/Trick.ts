import Player from "./Player";

export default class Trick {
  cards: [Card, Player][];
  wonBy: Player | undefined;
  contract: Contract;
  type: undefined | "trump" | "fel";
  color?: CardColor;

  constructor(contract: Contract) {
    this.cards = [];
    this.contract = contract;
    this.wonBy = undefined;
    this.type = undefined;
  }
  addFirstCard(card: Card, player: Player) {
    if (card.trump) {
      this.type = "trump";
    } else {
      this.type = "fel";
      this.color = card.color;
    }
  }
  addCardFrom(card: Card, player: Player): void {
    const length = this.cards.push([card, player]);
    if (length === 4) {
      this.decideWinner();
    }
  }
  decideFel(): Player {
    const cardNames = ["ace", "10", "king"];
    const indexes = cardNames.map((name) =>
      this.cards.findIndex(
        ([card]) => card.color === this.color && card.name === name
      )
    );
    const index = indexes.find((index) => index > -1);
    return this.cards[index || 0][1];
  }
  decideTrump(): Player {
    const index = 1;
    return this.cards[index || 0][1];
  }
  decideWinner(): Player | Error {
    if (this.type === "fel") {
      return this.decideFel();
    } else if (this.type === "trump") {
      return this.decideTrump();
    } else {
      throw new Error("Gametype was not chosen properly");
    }
  }
}
