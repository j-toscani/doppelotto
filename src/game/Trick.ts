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
    const cardNames = ["ace", "10", "king"];
    let cardFoundAt = -1;
    for (
      let index = 0;
      index < cardNames.length || cardFoundAt !== -1;
      index++
    ) {
      cardFoundAt = this.cards.findIndex(
        ([card]) => card.color === this.color && card.name === cardNames[index]
      );
    }
    return this.cards[cardFoundAt || 0][1];
  }
  decideTrump(): Player {
    const index = 1;
    return this.cards[index || 0][1];
  }
  decideWinner(): Player | Error {
    if (this.type === "fel") {
      const winner = this.decideFel();
      console.log(winner);
      return winner;
    } else if (this.type === "trump") {
      return this.decideTrump();
    } else {
      throw new Error("Gametype was not chosen properly");
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

console.log(players, cards, "hello");

cards.forEach((_card, index) =>
  trick.addCardFrom(cards[index], players[index])
);
