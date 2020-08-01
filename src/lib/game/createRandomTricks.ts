import createDokoDeck from "./createDokoDeck";
import writeToFile from "./writeToFile";

const deck = createDokoDeck(true);

function shuffleDeck(value: Card[]): Card[] {
  const shuffledDeck = [...value];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }

  return shuffledDeck;
}

const shuffledDeck = shuffleDeck(deck);

const numberOfTricks = [...new Array(10).keys()];

const trickArray = numberOfTricks.map((entry) => {
  return shuffledDeck.slice(entry * 4, (entry + 1) * 4);
});

const testArray = trickArray.map((trick) => {
  return {
    trick: trick,
    type: "",
    winner: 0,
  };
});

async function createRandomTricks() {
  const currentDircetory = "./src/game/lib/";
  const filename = "randomTricks.ts";
  try {
    const createFile = await writeToFile(currentDircetory, filename, testArray);
    console.log("Created file: ", filename, "at ", currentDircetory);
  } catch (error) {
    console.log(error.message);
  }
}

createRandomTricks();
