import Player from "./Player";
import Trick from "./Trick";
import createDokoDeck from "./lib/createDokoDeck";

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
    this.deck = createDokoDeck(withoutNine);
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
