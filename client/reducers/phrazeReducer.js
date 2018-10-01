import * as actionTypes from "../actions/actionTypes";

const initState = {
  phrazes: [
    {
      key: "1",
      library: "finnish",
      category: "meeting",
      phraze: "How are you doing?",
      translated: "Mitä kuuluu?",
      public: false,
      phrazed: true,
      favorite: false
    },
    {
      key: "2",
      library: "finnish",
      category: "meeting",
      phraze: "Where are you from?",
      translated: "Mistä olet kotoisin?",
      public: false,
      phrazed: true,
      favorite: false
    },
    {
      key: "3",
      library: "finnish",
      category: "meeting",
      phraze: "What is your name?",
      translated: "Mikä on sinun nimesi?",
      public: false,
      phrazed: true,
      favorite: false
    },
    {
      key: "4",
      library: "finnish",
      category: "meeting",
      phraze: "Do you seek english?\n",
      translated: "Puhutko englantia?",
      public: false,
      phrazed: true,
      favorite: false
    },
    {
      key: "5",
      library: "finnish",
      category: "meeting",
      phraze: "It was nice to meet you",
      translated: "Oli kiva tavata",
      public: false,
      phrazed: true,
      favorite: false
    },
    {
      key: "9",
      library: "finnish",
      category: "meeting",
      phraze: "You are welcome",
      translated: "Ole hyvä",
      public: false,
      phrazed: true,
      favorite: false
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PHRASE:
      const newPhrasesArr = [...state.phrazes];
      const editedPhraseIndex = -1;

      newPhrasesArr.forEach((item, index) => {
        if (action.payload.key == item.key) {
          editedPhraseIndex = index;
        }
      });

      newPhrasesArr[editedPhraseIndex] = action.payload;

      return {
        ...state,
        phrazes: newPhrasesArr
      };

    case actionTypes.ADD_PHRAZE:
      return {
        ...state,
        phrazes: state.phrazes.concat({
          ...action.payload,
          key: state.phrazes.length + "1"
        })
      };
    case actionTypes.CHECK_BOX_PHRAZE:
      const newPhrazes = state.phrazes.map(el => {
        if (el.key === action.key) {
          switch (action.opt) {
            case "public":
              el.public = !el.public;
              return el;
            case "phrazed":
              el.phrazed = !el.phrazed;
              return el;
            case "favorite":
              el.favorite = !el.favorite;
              return el;
          }
        }
        return el;
      });
      return {
        ...state,
        phrazes: newPhrazes
      };
    default:
      return state;
  }
};
