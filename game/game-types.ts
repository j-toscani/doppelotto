type CardColor = "heart" | "diamonds" | "spades" | "clubs";
type CardName = "ace" | "king" | "queen" | "jack" | "10" | "9";
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
  roundPoints: CardPointValue;
  specName?: SpecName;
}

// https://www.dict.cc/deutsch-englisch/Stich+%5BKartenspiel%5D.html
type Trick = [Card, Card, Card, Card];