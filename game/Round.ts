import Player from "./Player";

export default class Round {
  players: Player[];
  phases: ["start", "makeContract", "play", "end"];
  activePhase: number;
  contract: Contract | undefined;
  calls: [Call, Call, Call, Call];
  lastTrick: Trick | null;
  allTricks: Trick[] | [];
  cardPoints: [number, number];
  gamePoints: [number, number];
  deck: Card[] | [];
  withoutNine: boolean;

  constructor(players: Player[], withoutNine: boolean) {
    this.players = players;
    this.phases = ["start", "makeContract", "play", "end"];
    this.activePhase = 0;
    this.contract = undefined;
    this.calls = [
      this.players[0].call,
      this.players[1].call,
      this.players[2].call,
      this.players[3].call,
    ];
    this.lastTrick = null;
    this.allTricks = [];
    this.cardPoints = [0, 0];
    this.gamePoints = [0, 0];
    this.deck = [];
    this.withoutNine = withoutNine;
  }
  showCalls() {
    console.log(this.calls);
  }
  createDeck(): void {
    const colors: CardColor[] = ["heart", "diamonds", "spades", "clubs"];
    const names: CardName[] = ["ace", "10", "king", "queen", "jack", "9"];
    const points: CardPointValue[] = [11, 10, 4, 3, 2, 0];
    if (this.withoutNine) {
      names.pop();
    }
    const halfDeck: Card[][] = colors.map((color) =>
      names.map((name, index) => {
        return {
          color: color,
          name: name,
          roundPoints: points[index],
        };
      })
    );
    let deck: Card[] | [] = [];
    halfDeck.forEach((set) => (deck = [...deck, ...set, ...set]));
    this.deck = deck.slice(0);
  }
  logDeck() {
    console.log("Full Deck in Object", this.deck);
  }
  giveCards: void;
  createHand(): void {
    const cardsPerHand = this.deck.length / 4;
  }
  startRound: void;
  defineRules: void;
  endTrick: void;
}

const carl = new Player("Carl");

const hans = new Player("Hans");

const franz = new Player("Franz");

const walter = new Player("Walter");

const players = [hans, carl, franz, walter];

const round = new Round(players, false);

round.showCalls();
round.createDeck();
round.logDeck();
