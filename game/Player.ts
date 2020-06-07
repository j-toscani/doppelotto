export default class Player {
  name: string;
  points: number;
  hand: Card[] | [];
  position: number;
  faction: "re" | "contra" | undefined;
  called: Call;
  constructor(name: string, position: number) {
    this.name = name;
    this.hand = [];
    this.points = 0;
    this.called = "none";
    this.position = position;
  }
  playCard() {
    this.hand.pop();
  }
  getHand(handOfCards: Card[]) {
    this.hand = handOfCards;
  }
  makeContract: void;
  getPoints: void;
  losePoints: void;
  callFaction: void;
  callNo90: void;
  callNo60: void;
  callNo30: void;
  callBlack: void;
  leaveGame: void;
  setFaction: void;
}
