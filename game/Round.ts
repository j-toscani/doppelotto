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
      this.players[0].called,
      this.players[1].called,
      this.players[2].called,
      this.players[3].called,
    ];
    this.lastTrick = null;
    this.allTricks = [];
    this.cardPoints = [0, 0];
    this.gamePoints = [0, 0];
    this.deck = this.createDokoDeck();
    this.withoutNine = withoutNine;
  }
  // Onetime methods
  createCards(
    colors: CardColor[],
    names: CardName[],
    points: CardPointValue[]
  ) {
    const cards: Card[][] = colors.map((color) =>
      names.map((name, index) => {
        return {
          color: color,
          name: name,
          roundPoints: points[index],
        };
      })
    );
    return cards;
  }
  createDokoDeck(): Card[] {
    const colors: CardColor[] = ["heart", "diamonds", "spades", "clubs"];
    const names: CardName[] = ["ace", "10", "king", "queen", "jack", "9"];
    const points: CardPointValue[] = [11, 10, 4, 3, 2, 0];
    if (this.withoutNine) {
      names.pop();
      points.pop();
    }
    const cards = this.createCards(colors, names, points);
    let deck: Card[] | [] = [];
    cards.forEach(
      (colorNameCombination) =>
        (deck = [...deck, ...colorNameCombination, ...colorNameCombination])
    );
    return deck.slice(0);
  }
  handoutCards(): void {
    this.players.forEach((player, index) => {
      const hand = this.createHand(index);
      player.getHand(hand);
    });
  }
  createHand(index: number): Card[] {
    const cardsPerHand = this.deck.length / 4;
    const from: number = index * cardsPerHand;
    const to: number = (index + 1) * cardsPerHand;
    return this.deck.slice(from, to);
  }
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleDeck() {
    const deck = this.deck;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  }
  logState() {
    console.log("Deck:", this.deck);
    console.log("Players:", this.players[0]);
  }
  startRound() {
    this.shuffleDeck();
    this.handoutCards();
    this.activePhase++;
  }
  defineRules: void;
  endTrick: void;
}

const users = ["Carl", "Hans", "Franz", "Walter"];
const players = users.map((name, index) => new Player(name, index));
const round = new Round(players, false);

round.startRound();
round.logState();
