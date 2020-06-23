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
  getPoints(points: number) {
    this.points + points;
  }
  losePoints(points: number) {
    this.points - points;
  }
  callFaction() {
    this.called = 120;
  }
  callResult(result: 90 | 60 | 30 | 0) {
    this.called = result;
  }
  leaveGame: void;
  setFaction(hand: Card[]) {
    const reDame: Card = { color: "clubs", name: "queen", points: 4 };
    if (hand.includes(reDame)) {
      this.faction = "re";
    } else {
      this.faction = "contra";
    }
  }
}
