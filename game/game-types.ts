type CardColor = "heart" | "diamonds" | "spades" | "clubs";
type CardName = "ace" | "10" | "king" | "queen" | "jack" | "9";
type CardPointValue = 11 | 10 | 4 | 3 | 2 | 0;
type Call = "none" | 120 | 90 | 60 | 30 | 0;
type SpecName =
  | "blaue"
  | "reDame"
  | "dulle"
  | "karlchen"
  | "fuchs"
  | "schweinchen";

interface Contract {
  isWedding: boolean;
  isSolo: boolean;
  type?: string;
}

interface Card {
  color: CardColor;
  name: CardName;
  points: CardPointValue;
  trump?: boolean;
  specName?: SpecName;
}

// https://www.dict.cc/deutsch-englisch/Stich+%5BKartenspiel%5D.html
type Trick = [Card, Card, Card, Card];
