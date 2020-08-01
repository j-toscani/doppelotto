import Trick from "./Trick";
import Player from "./Player";
import createDokoDeck from "../lib/game/createDokoDeck";

const hans = new Player("Hans", 0);
const walter = new Player("Walter", 1);
const marcus = new Player("Marcus", 2);
const jens = new Player("Jens", 3);

const deck = createDokoDeck(true);

const standard: Contract = {
  isWedding: false,
  isSolo: false,
};

test("Contract gets accepted", () => {
  const contract: Contract = {
    isWedding: false,
    isSolo: false,
  };
  const trick = new Trick(standard);
  expect(standard).toBe(trick.contract);
});

test("Tricktype is set properly: fel", () => {
  const felCard: Card = {
    color: "spades",
    points: 11,
    name: "ace",
    trump: false,
  };

  const felTrick = new Trick(standard);

  felTrick.decideTrickType(felCard);

  expect(felTrick.type).toBe("fel");
  expect(felTrick.color).toBeTruthy();
  expect(felTrick.color).toBe(felCard.color);
});

test("Tricktype is set properly: trump", () => {
  const contract: Contract = {
    isWedding: false,
    isSolo: false,
  };

  const trumpCard: Card = {
    color: "diamonds",
    points: 2,
    name: "jack",
    trump: true,
  };

  const trumpTrick = new Trick(standard);

  trumpTrick.decideTrickType(trumpCard);

  expect(trumpTrick.type).toBe("trump");
  expect(trumpTrick.color).toBeFalsy();
});

describe("Adding cards to the trick automatically progresses the game", () => {
  test("Setting the trick type after playing the first card", () => {
    const trick = new Trick(standard);
    const randomCard = deck.splice(Math.floor(Math.random() * deck.length))[0];
    trick.addCardFrom(randomCard, hans);
    expect(trick.cards[0][0]).toBe(randomCard);
    expect(trick.cards[0]).toStrictEqual([randomCard, hans]);
    expect(trick.type).toBeTruthy();
  });
});
