import * as actionTypes from '../actions/actionTypes';

const initState = {
  phrazes: [
    {
      key: '1',
      library: 'finnish',
      category: 'Greeting',
      phraze: 'How are you doing?',
      translated: 'Mitä kuuluu?',
      public: false,
      phrazed: false,
      favorite: true
    },
    {
      key: '2',
      library: 'finnish',
      category: 'Greeting',
      phraze: 'Where are you from?',
      translated: 'Mistä olet kotoisin?',
      public: false,
      phrazed: true,
      favorite: true
    },
    {
      key: '3',
      library: 'finnish',
      category: 'Greeting',
      phraze: 'What is your name?',
      translated: 'Mikä on sinun nimesi?',
      public: true,
      phrazed: false,
      favorite: false
    },
    {
      key: '4',
      library: 'finnish',
      category: 'Hangout',
      phraze: 'Do you speak english?',
      translated: 'Puhutko englantia?',
      public: false,
      phrazed: false,
      favorite: false
    },
    {
      key: '5',
      library: 'finnish',
      category: 'Meeting',
      phraze: 'It was nice to meet you',
      translated: 'Oli kiva tavata',
      public: true,
      phrazed: true,
      favorite: true
    },
    {
      key: '9',
      library: 'finnish',
      category: 'Hangout',
      phraze: 'You are welcome',
      translated: 'Ole hyvä',
      public: false,
      phrazed: true,
      favorite: false
    }
  ],
  phrazesByCategory: [],
  selectedCategory: '',
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
          key: state.phrazes.length + '1'
        })
      };
    case actionTypes.CHECK_BOX_PHRAZE:
      const newPhrazes = state.phrazes.map(el => {
        if (el.key === action.key) {
          switch (action.opt) {
            case 'public':
              el.public = !el.public;
              return el;
            case 'phrazed':
              el.phrazed = !el.phrazed;
              return el;
            case 'favorite':
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
    case actionTypes.GET_PHRAZES_BY_CATEGORY:
      const phrazesByCategory = state.phrazes.filter(
        phraze => phraze.category === action.payload
      );
      return {
        ...state,
        phrazesByCategory,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};
