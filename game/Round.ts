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

  constructor(players: Player[]) {
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
  }
  showCalls() {
    console.log(this.calls);
  }
  giveCards: void;
  startRound: void;
  defineRules: void;
  endTrick: void;
}

const carl = new Player("Hans", [
  { name: "blaue" },
  { name: "rehdame" },
  { name: "fuchs" },
]);

const hans = new Player("Hans", [
  { name: "blaue" },
  { name: "rehdame" },
  { name: "fuchs" },
]);

const franz = new Player("Hans", [
  { name: "blaue" },
  { name: "rehdame" },
  { name: "fuchs" },
]);

const walter = new Player("Hans", [
  { name: "blaue" },
  { name: "rehdame" },
  { name: "fuchs" },
]);

const players = [hans, carl, franz, walter];

const round = new Round(players);

round.showCalls();
