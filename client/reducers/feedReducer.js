import * as actionTypes from "../actions/actionTypes";

const newFeed = [
  {
    key: "6",
    library: "finnish",
    category: "shopping",
    phraze: "How much it costs?",
    translated: "Paljonko se maksaa?",
    public: false,
    phrazed: true,
    favorite: false
  },
  {
    key: "7",
    library: "finnish",
    category: "shopping",
    phraze: "Where can I found farmer market?",
    translated: "Missä päin tori on?",
    public: false,
    phrazed: true,
    favorite: false
  },
  {
    key: "8",
    library: "finnish",
    category: "shopping",
    phraze: "One liter of blueberries, please",
    translated: "Litra mustikoita, kiitos",
    public: false,
    phrazed: true,
    favorite: false
  },
  {
    key: "10",
    library: "finnish",
    category: "shopping",
    phraze: "Where can I find plates?",
    translated: "Missä lautaset ovat?",
    public: false,
    phrazed: true,
    favorite: false
  }
];

const feedInit = [
  {
    author: { fullName: "Martynas Gala" },
    native: "How are you?",
    foreign: "Jak se máš?",
    key: "1"
  },
  {
    author: { fullName: "Lena Schwarz" },
    native: "What's your name?",
    foreign: null,
    key: "2"
  },
  {
    author: { fullName: "Krystof Woldrich" },
    native: "Where do you come from?",
    foreign: null,
    key: "3"
  }
];

export default (state = feedInit, action) => {
  switch (action.type) {
    case "actionTy":
      break;

    default:
      return state;
  }
};
