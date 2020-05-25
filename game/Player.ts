interface Player {
  name: string;
  points: number;
  hand: {}[];
  playCard: Function;
  getHand: Function;
  getPoints: Function;
  losePoints: Function;
  callFaction: Function;
  callNo90: Function;
  callNo60: Function;
  callNo30: Function;
  callBlack: Function;
  leaveGame: Function;
}

class Player {
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

const hans = new Player("Hans");
hans.sayHi();
