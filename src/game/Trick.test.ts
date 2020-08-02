import Trick from "./Trick";
import Player from "./Player";
import createDokoDeck from "../lib/game/createDokoDeck";
import randomTricks from "../lib/game/randomTricks";

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
test("Trick accepts adding cards and players", () => {
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

  trumpTrick.addCardFrom(trumpCard, hans);

  expect(trumpTrick.cards.length).toBe(1);
  expect(trumpTrick.cards[0][0]).toBe(trumpCard);
  expect(trumpTrick.cards[0][1]).toBe(hans);
});

describe("Adding cards to the trick automatically progresses the game", () => {
  const testTrick = new Trick(standard);
  const randomTrickObject = randomTricks[0];
  const { trick, type, winner } = randomTrickObject;
  testTrick.addCardFrom(trick[0], hans);

  test("Setting the trick type after playing the first card", () => {
    expect(testTrick.type).toBeTruthy();
  });
  test("Setting the right trick type", () => {
    expect(testTrick.type).toBe(type);
  });

  testTrick.addCardFrom(trick[1], walter);
  testTrick.addCardFrom(trick[2], marcus);
  testTrick.addCardFrom(trick[3], jens);

  test("Deciding on a winner after the last card was played", () => {
    expect(testTrick.wonBy).toBeTruthy();
  });
  test("Finding the right winner after the last card was played", () => {
    expect(testTrick.wonBy).toEqual(testTrick.cards[winner][1]);
  });
});

describe("All test Tricks generate the right winner", () => {
  const players = [hans, walter, marcus, jens];

  randomTricks.forEach((trickObject, index) => {
    test(`Checking for the following trick at: ${index}`, () => {
      const testTrick = new Trick(standard);
      const { trick, type, winner } = trickObject;
      trick.forEach((card, index) =>
        testTrick.addCardFrom(card, players[index])
      );
      expect(testTrick.wonBy).toEqual(testTrick.cards[winner][1]);
    });
  });
});
