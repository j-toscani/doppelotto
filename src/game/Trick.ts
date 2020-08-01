import Player from "./Player";

const felNames = ["ace", "10", "king", "9"];
const trumpNames = ["queen", "jack", "ace", "10", "king", "9"];

// Optimise check for winner in a manner that only the contract has to be defined properly
// and based on that, define the appropriate felnames and trump names.

export default class Trick {
  cards: [Card, Player][];
  wonBy: Player | undefined;
  contract: Contract;
  type: undefined | "trump" | "fel";
  color?: CardColor;
  cardColors: CardColor[];

  constructor(contract: Contract) {
    this.cards = [];
    this.contract = contract;
    this.wonBy = undefined;
    this.type = undefined;
    this.cardColors = ["clubs", "spades", "diamonds", "heart"];
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
      this.wonBy = this.decideWinner();
    }
  }
  decideFel(): Player {
    let indexOfWinner = -1;
    for (
      let index = 0;
      indexOfWinner === -1 && index < felNames.length;
      index++
    ) {
      indexOfWinner = this.cards.findIndex(
        ([card]) => card.color === this.color && card.name === felNames[index]
      );
    }
    if (indexOfWinner === -1) return new Player("TrumpFailed", 4);
    return this.cards[indexOfWinner][1];
  }
  decideTrump(cards: [Card, Player][]): Player {
    const indexOfDulle = cards.findIndex(
      ([card]) => card.color === "heart" && card.name === "10"
    );
    if (indexOfDulle !== -1) return this.cards[indexOfDulle][1];

    let highestValueCards: [Card, Player][] = [];
    for (
      let index = 0;
      highestValueCards.length === 0 && index < trumpNames.length;
      index++
    ) {
      highestValueCards = cards.filter(
        (card) => card[0].name === trumpNames[index]
      );
    }

    let indexOfWinner = -1;
    for (
      let index = 0;
      indexOfWinner === -1 && index < this.cardColors.length;
      index++
    ) {
      indexOfWinner = highestValueCards.findIndex(
        (card) => card[0].color === this.cardColors[index]
      );
    }

    if (indexOfWinner === -1) return new Player("TrumpFailed", 4);
    return cards[indexOfWinner || 0][1];
  }
  decideWinner(): Player {
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
    color: "spades",
    name: "queen",
    points: 3,
    trump: true,
  },
  {
    color: "heart",
    name: "king",
    points: 11,
    trump: false,
  },
];
