const initialState = {
  count: 0,
  sayi: 25,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count:
          action.payload !== undefined
            ? state.count + action.payload
            : state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count:
          action.payload !== undefined
            ? state.count - action.payload
            : state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
