export default class Player {
  name: string;
  points: number;
  hand: Card[] | [];
  faction: "re" | "contra" | undefined;
  call: Call;
  constructor(name: string) {
    this.name = name;
    this.hand = [];
    this.points = 0;
    this.call = "none";
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
