// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

passwordPhaseOne();

// Password Phase One Generate
function passwordPhaseOne() {

  // Arrays
  let specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let characterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let fourLetterWordArray = ["able", "acid", "aged", "also", "area", "army", "away", "baby", "back", "ball", "bank", "base", "bath", "bear", "beat", "been", "beer", "bell", "belt", "best", "bill", "bird", "blow", "blue", "boat", "body", "bomb", "bond", "bone", "book", "boom", "born", "boss", "both", "bowl", "bulk", "burn", "bush", "busy", "call",
    "calm", "came", "camp", "card", "care", "case", "cash", "cast", "cell", "chip", "city", "club", "coal", "coat", "code", "cold", "come", "cook", "cool", "cope", "copy", "CORE", "cost", "crew", "crop", "dark", "data", "date", "dawn", "days", "dead", "deal", "dean", "dear", "debt", "deep", "deny", "desk", "dial", "dick",
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

  // Prompt Variables
  let userPasswordLengthValue = 0;
  let userNumberConfirm;
  let userUpperCaseCharacterConfirm;
  let userSpecialCharacterConfirm;
  userPasswordLengthValue = prompt("Input required password length - must be between 8 and 128 characters:");
  passwordLengthControl();

  userNumberConfirm = confirm("Does your password need to contain numeric values?");
  userUpperCaseCharacterConfirm = confirm("Does your password require upper case characters?");
  userSpecialCharacterConfirm = confirm("Would you like your password to contain special characters?");

  // Code Variables
  let yourPassword = "";
  let randomiser = "";
  let randomStringOutputPart = "";
  let randomNumberGenerator = 0;
  let randomCharacter = "";
  let randomUpperCaseCharacter = "";
  let specialCharacter = "";
  let randomAssign = 0;

  // Input Control
  function passwordLengthControl() {
    if (userPasswordLengthValue < 8 || userPasswordLengthValue > 128) {
      alert("Your password length must be between 8 and 128 characters.");
      userPasswordLengthValue = prompt("Input required password length - must be between 8 and 128 characters:");
      passwordLengthControl();
    }
  }

  // Random Word Concatenator
  function randomStringConcatentated() {
    for (i = 0; i < 2; i++) {
      let randomStringGen = fourLetterWordArray[Math.floor(Math.random() * 499)];
      randomStringOutputPart = randomStringOutputPart + randomStringGen;
    }
    randomStringOutputPart;
  }

  randomStringConcatentated();

  // For Loop
  for (i = 0; i < (userPasswordLengthValue - randomStringOutputPart.length); i++) {
    function randomNumberGen() {
      // Random Number Generator
      randomNumberGenerator = Math.floor(Math.random() * 9);
    }

    // Random Lower Case Character Generator
    function randomChar() {
      randomCharacter = characterArray[Math.floor(Math.random() * characterArray.length)];
    }

    // Random Upper Case Character Generator
    function randomCharUpperCase() {
      randomUpperCaseCharacter = characterArray[Math.floor(Math.random() * characterArray.length)].toUpperCase();
    }

    // Random Special Character Generator
    function randomCharSpecial() {
      specialCharacter = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
    }

    // Password Input Randomiser
    function passwordInputRandomiser() {
      randomAssign = Math.floor(Math.random() * 3);
    }

    passwordInputRandomiser();

    // Randomiser Concatenator
    if (userNumberConfirm === true && randomAssign === 0) {
      randomNumberGen();
      randomiser = randomiser + randomNumberGenerator;
    } else if (userUpperCaseCharacterConfirm === false && randomAssign === 0) {
      randomChar();
      randomiser = randomiser + randomCharacter;
    }

    if (userUpperCaseCharacterConfirm === true && randomAssign === 1) {
      randomCharUpperCase();
      randomiser = randomiser + randomUpperCaseCharacter;
    } else if (userUpperCaseCharacterConfirm === false && randomAssign === 1) {
      randomChar();
      randomiser = randomiser + randomCharacter;
    }

    if (userSpecialCharacterConfirm === true && randomAssign === 2) {
      randomCharSpecial();
      randomiser = randomiser + specialCharacter;
    } else if (userUpperCaseCharacterConfirm === false && randomAssign === 2) {
      randomChar();
      randomiser = randomiser + randomCharacter;
    }
  }
  // Generated Password
  alert(yourPassword = randomStringOutputPart + randomiser);
}



