import Round from "./Round";

class Table {
  users: any[];
  activeRound: Round | null;
  roundHistory: Round[] | [];
  messageHistory: string[] | [];
  constructor(users: any) {
    this.users = [1, 2, 3];
    this.activeRound = null;
    this.roundHistory = [];
    this.messageHistory = [];
  }
  startNewRound: void;
  cleanUpRound: void;
  kickUser: void;
  inviteUser: void;
  closeTable: void;
}
