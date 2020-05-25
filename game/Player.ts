
class Player {
  name: string;
  points: number;
  hand: {}[];
  constructor(name: string, hand: {}[] ) {
    this.name = name
    this.hand = hand
    this.points = 0
  }
  sayHi() {
    console.log(this.name);
  }
  playCard() {
    this.hand.pop();
  };
  getHand: void;
  getPoints: void;
  losePoints: void;
  callFaction: void;
  callNo90: void;
  callNo60: void;
  callNo30: void;
  callBlack: void;
  leaveGame: void;
}

const hans = new Player("Hans", [
  {name:'blaue'},
  {name:'rehdame'},
  {name:'fuchs'},
]);
hans.sayHi();
hans.playCard();
