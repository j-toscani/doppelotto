function heartTrumps(cards: Card[]): Card[] {
  const copy = cards.slice(0);
  copy.forEach((card) => {
    if (card.name !== "10") {
      card.trump = false;
    } else {
      card.trump = true;
    }
  });
  return copy;
}

function diamondTrumps(cards: Card[]): Card[] {
  const copy = cards.slice(0);
  copy.forEach((card) => (card.trump = true));
  return copy;
}

function clubsAndSpadeTrumps(cards: Card[]): Card[] {
  const copy = cards.slice(0);
  copy.forEach((card) => {
    if (card.name !== "queen" && card.name !== "jack") {
      card.trump = false;
    } else {
      card.trump = true;
    }
  });
  return copy;
}

function setTrump(cardDummys: Card[][]): Card[][] {
  const cards = cardDummys.slice(0);
  cards.map((colorArray) => {
    if (colorArray[0].color === "heart") {
      return heartTrumps(colorArray);
    } else if (colorArray[0].color === "diamonds") {
      return diamondTrumps(colorArray);
    } else {
      return clubsAndSpadeTrumps(colorArray);
    }
  });
  return cards;
}

export default setTrump;
