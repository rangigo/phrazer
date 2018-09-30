import * as actionTypes from "../actions/actionTypes";

const initState = {
  phrazes: [
    {
      phraze: "Ban may tuoi va dang lam gi",
      translated: "What's your age and your job?",
      key: "6",
      public: true,
      phrazed: false,
      favorite: true
    },
    {
      phraze: "Ban thich MERN Stack hay khong?",
      translated: "Do you have any experiences in MERN Stack?",
      key: "7",
      public: false,
      phrazed: true,
      favorite: true
    },
    {
      phraze: "Toi dang xem anime Attack on Titan",
      translated: "I am watching Attack on Titan anime.",
      key: "8",
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
