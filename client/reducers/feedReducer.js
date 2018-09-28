import * as actionTypes from "../actions/actionTypes";

const feedInit = [
  {
    native: "How are you?",
    foreign: "Jak se máš?",
    key: "1"
  },
  {
    native: "What's your name?",
    foreign: null,
    key: "2"
  },
  {
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
