const colors: CardColor[] = ["heart", "diamonds", "spades", "clubs"];
const names: CardName[] = ["ace", "10", "king", "queen", "jack", "9"];

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
        roundPoints: points[index],
      };
    })
  );
  return cards;
}

function createDokoDeck(withoutNine: boolean): Card[] {
  const points: CardPointValue[] = [11, 10, 4, 3, 2, 0];
  if (withoutNine) {
    names.pop();
    points.pop();
  }
  const cards = createCards(colors, names, points);
  let deck: Card[] | [] = [];
  cards.forEach(
    (colorNameCombination) =>
      (deck = [...deck, ...colorNameCombination, ...colorNameCombination])
  );
  return deck.slice(0);
}

export default createDokoDeck;
