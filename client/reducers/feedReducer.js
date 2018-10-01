import * as actionTypes from "../actions/actionTypes";

const feedInit = [
  {
    author: { fullName: "Martynas Gudaitis" },
    native: "How much it costs?",
    foreign: "Paljonko se maksaa?",
    key: "6"
  },
  {
    author: { fullName: "Lena Schwarz" },
    native: "Where can I found farmers market?",
    foreign: null,
    key: "7"
  },
  {
    author: { fullName: "Krystof Woldrich" },
    native: "One liter of blueberries, please.",
    foreign: "Litra mustikoita, kiitos",
    key: "8"
  },
  {
    author: { fullName: "Paulius Karlonas" },
    native: "Where can I find plates?",
    foreign: "Missä lautaset ovat?",
    key: "10"
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
