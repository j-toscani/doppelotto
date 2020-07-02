import Player from "./Player";

const cardNames = ["ace", "10", "king"];

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
  decideTrickType(card: Card) {
    if (card.trump) {
      this.type = "trump";
    } else {
      this.type = "fel";
      this.color = card.color;
    }
  }
  addCardFrom(card: Card, player: Player): void {
    const length = this.cards.push([card, player]);
    if (length === 1) {
      this.decideTrickType(card);
    }
    if (length === 4) {
      this.decideWinner();
    }
  }
  decideFel(): Player {
    let cardFoundAt = -1;
    for (let index = 0; cardFoundAt === -1; index++) {
      cardFoundAt = this.cards.findIndex(
        ([card]) => card.color === this.color && card.name === cardNames[index]
      );
      if (index === cardNames.length) {
        return new Player("MissingNo", 4);
      }
    }
    return this.cards[cardFoundAt][1];
  }
  decideTrump(cards: [Card, Player][]): Player {
    const index = 1;
    return cards[index || 0][1];
  }
  decideWinner(): Player | Error {
    const trumpCards = this.cards.filter((card) => card[0].trump);
    if (this.type === "fel" && trumpCards.length === 0) {
      return this.decideFel();
    } else {
      return this.decideTrump(trumpCards);
    }
  }
}

const trick = new Trick({
  isWedding: false,
  isSolo: false,
});

const cards: Card[] = [
  {
    color: "heart",
    name: "ace",
    points: 11,
    trump: false,
  },
  {
    color: "heart",
    name: "ace",
    points: 11,
    trump: false,
  },
  {
    color: "heart",
    name: "king",
    points: 11,
    trump: false,
  },
  {
    color: "heart",
    name: "king",
    points: 11,
    trump: false,
  },
];

const hans = new Player("Hans", 0);
const walter = new Player("Walter", 1);
const marcus = new Player("Marcus", 2);
const jens = new Player("Jens", 3);

const players = [hans, walter, marcus, jens];

cards.forEach((_card, index) =>
  trick.addCardFrom(cards[index], players[index])
);
