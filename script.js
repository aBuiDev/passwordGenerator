// Arrays
let specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
let characterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let fourLetterWordArray = ["able", "acid", "aged", "also", "area", "army", "away", "baby", "back", "ball", "bank", "base", "bath", "bear", "beat", "been", "beer", "bell", "belt", "best", "bill", "bird", "blow", "blue", "boat", "body", "bomb", "bond", "bone", "book", "boom", "born", "boss", "both", "bowl", "bulk", "burn", "bush", "busy", "call",
"calm", "came", "camp", "card", "care", "case", "cash", "cast", "cell", "chip", "city", "club", "coal", "coat", "code", "cold", "come", "cook", "cool", "cope", "copy", "core", "cost", "crew", "crop", "dark", "data", "date", "dawn", "days", "dead", "deal", "dean", "dear", "debt", "deep", "deny", "desk", "dial", "dick",
"diet", "disc", "disk", "does", "done", "door", "dose", "down", "draw", "drew", "drop", "drug", "dual", "duke", "dust", "duty", "each", "earn", "ease", "east", "easy", "edge", "else", "ever", "evil", "exit", "face", "fact", "fail", "fair", "fall", "farm", "fast", "fate", "fear", "feed", "feel", "feet", "fell", "felt",
"file", "fill", "film", "find", "fire", "firm", "fish", "five", "flat", "flow", "food", "foot", "ford", "form", "fort", "four", "free", "from", "fuel", "full", "fund", "gain", "game", "gave", "gear", "gene", "gift", "girl", "give", "glad", "goes", "gold", "Golf", "gone", "good", "gray", "grew", "grey", "grow", "gulf",
"hair", "half", "hall", "hand", "hang", "hard", "harm", "hate", "have", "head", "hear", "heat", "held", "hell", "help", "here", "hero", "hill", "hire", "hold", "hole", "holy", "home", "hope", "host", "hour", "huge", "hung", "hunt", "hurt", "idea", "inch", "into", "iron", "item", "jack", "jane", "jean", "john", "join",
"jump", "jury", "just", "keen", "keep", "kent", "kept", "kick", "kill", "kind", "king", "knee", "knew", "know", "lack", "lady", "laid", "lake", "land", "lane", "last", "late", "lead", "left", "less", "life", "lift", "like", "line", "link", "list", "live", "load", "loan", "lock", "logo", "long", "look", "lord", "lose",
"loss", "lost", "love", "luck", "made", "mail", "main", "make", "male", "many", "Mark", "mass", "matt", "meal", "mean", "meat", "meet", "menu", "mere", "mike", "mile", "milk", "mill", "mind", "mine", "miss", "mode", "mood", "moon", "more", "most", "move", "much", "must", "name", "navy", "near", "need", "news", "next",
"nice", "nick", "nine", "none", "nose", "note", "okay", "once", "only", "onto", "open", "oral", "over", "pace", "pack", "page", "paid", "pain", "pair", "palm", "park", "part", "pass", "past", "path", "peak", "pick", "pink", "pipe", "plan", "play", "plot", "plug", "plus", "poll", "pool", "poor", "port", "post", "pull",
"pure", "push", "race", "rail", "rain", "rank", "rare", "rate", "read", "real", "rear", "rely", "rent", "rest", "rice", "rich", "ride", "ring", "rise", "risk", "road", "rock", "role", "roll", "roof", "root", "rose", "rule", "rush", "ruth", "safe", "said", "sake", "sale", "salt", "same", "sand", "save", "seat", "seed",
"seek", "seem", "seen", "self", "sell", "send", "sent", "sept", "ship", "shop", "shot", "show", "shut", "sick", "side", "sign", "site", "size", "skin", "slip", "slow", "snow", "soft", "soil", "sold", "sole", "some", "song", "soon", "sort", "soul", "spot", "star", "stay", "step", "stop", "such", "suit", "sure", "take",
"tale", "talk", "tall", "tank", "tape", "task", "team", "tech", "tell", "tend", "term", "test", "text", "than", "that", "them", "then", "they", "thin", "this", "thus", "till", "time", "tiny", "told", "toll", "tone", "tony", "took", "tool", "tour", "town", "tree", "trip", "tune", "turn", "twin", "type", "unit", "upon",
"used", "user", "vary", "vast", "very", "vice", "view", "vote", "wage", "wait", "wake", "walk", "wall", "want", "ward", "warm", "wash", "wave", "ways", "weak", "wear", "week", "well", "went", "were", "west", "what", "when", "whom", "wide", "wife", "wild", "will", "wind", "wine", "wing", "wire", "wise", "wish", "with",
"wood", "word", "wore", "work", "yard", "yeah", "year", "your", "zero", "zone"];

// =============================================================================
// Interface Elements
// =============================================================================

const informationOutput = document.querySelector('.informationOutput');
const passwordOutput = document.querySelector('.passwordOutput');
const passwordLengthForm = document.querySelector('#passwordLengthForm');



// =============================================================================
// Randomiser
// =============================================================================

// Randomly Assigns a Number Based on Inputted Array Length
const randomiser = (inputArray) => {
  const randomIndex = Math.floor(Math.random() * inputArray.length);
  return inputArray[randomIndex];
}



// =============================================================================
// Password Elements | Words
// =============================================================================

// Random Word Selector
const randomWordsSelection = (wordCount, numberCount) => {
  let randomisedWordArray = [];
  for (let i = 0; i < wordCount; i++) {
    randomisedWordArray.push(randomiser(fourLetterWordArray));
  }
  randomWordsArrayCapitaliser(randomisedWordArray, wordCount, numberCount);
}

// Random Word Capitaliser
const randomWordsArrayCapitaliser = (randomisedWordArray, wordCount, numberCount) => {
  let capitalisedRandomWordArray = [];
  randomisedWordArray.forEach((word) => {
    capitalisedRandomWordArray.push(word[0].toUpperCase() + word.substring(1));
  });
  randomNumberSelection(capitalisedRandomWordArray, numberCount)
}



// =============================================================================
// Password Elements | Numbers
// =============================================================================

// Random Character Selector
const randomNumberSelection = (capitalisedRandomWordArray, numberCount) => {
  let randomisedNumberArray = [];
  for (let i = 0; i < numberCount; i++) {
    randomisedNumberArray.push(randomiser(numberArray));
  }
  randomSpecialCharacterSelection(capitalisedRandomWordArray, randomisedNumberArray);
}



// =============================================================================
// Password Elements | Special Character
// =============================================================================

// Random Special Character Selector
const randomSpecialCharacterSelection = (capitalisedRandomWordArray, randomisedNumberArray) => {
  let specialCharacter = [];
  for (let i = 0; i < 1; i++) {
    specialCharacter.push(randomiser(specialCharacterArray));
  }
  passwordCompiler(capitalisedRandomWordArray, randomisedNumberArray, specialCharacter);
}



// =============================================================================
// Password Elements | Compiler
// =============================================================================

// Password Compiler
const passwordCompiler = (capitalisedRandomWordArray, randomisedNumberArray, specialCharacter) => {
  passwordOutput.innerText = capitalisedRandomWordArray.join('') + randomisedNumberArray.join('') + specialCharacter;
}

passwordLengthForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let userPasswordLength = parseInt(passwordLengthInput.value);

  if (userPasswordLength >= 8 && userPasswordLength <= 9) {
    let numberCount = userPasswordLength - 5;
    randomWordsSelection(1, numberCount);
  } else if (userPasswordLength >= 10 && userPasswordLength <= 13) {
    let numberCount = userPasswordLength - 9;
    randomWordsSelection(2, numberCount);
  } else if (userPasswordLength >= 14 && userPasswordLength <= 16) {
    let numberCount = userPasswordLength - 13;
    randomWordsSelection(3, numberCount);
  }

  // Error Handling
  if (userPasswordLength < 8 || userPasswordLength > 16) {
    passwordOutput.innerText = 'Incorrect Password Length Input';
    informationOutput.innerText = "Password length must be between 8 and 16 characters in length."
    setTimeout(() => {
      informationOutput.innerText = '';
    }, 5000)
  }
});

