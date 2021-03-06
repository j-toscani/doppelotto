import setTrump from "./setTrump";

const colors: CardColor[] = ["heart", "diamonds", "spades", "clubs"];
const names: CardName[] = ["ace", "10", "king", "queen", "jack", "9"];
const points: CardPointValue[] = [11, 10, 4, 3, 2, 0];

function createCards(
  colors: CardColor[],
  names: CardName[],
  points: CardPointValue[]
) {
  const cards: Card[][] = colors.map((color) =>
    names.map((name, index) => {
      return {
        color: color,
        name: name,
        points: points[index],
      };
    })
  );
  return cards;
}

function createDokoDeck(withoutNine: boolean): Card[] {
  if (withoutNine) {
    names.pop();
    points.pop();
  }
  const cardDummys = createCards(colors, names, points);
  const cards = setTrump(cardDummys);

  let deck: Card[] | [] = [];
  cards.forEach(
    (colorNameCombination) =>
      (deck = [...deck, ...colorNameCombination, ...colorNameCombination])
  );
  return deck.slice(0);
}

export default createDokoDeck;
