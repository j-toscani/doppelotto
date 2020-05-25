interface Round {
  players: Player[];
  ruleSet: {};
}

class Round {
  constructor(players: Player[]) {
    this.players = players;
  }
  sayHi() {
    console.log(this.players);
  }
}

const walter = new Round([new Player("Max"), new Player("Walter")]);
hans.sayHi();
