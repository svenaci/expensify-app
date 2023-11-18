import { createStore } from "redux";

//Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count }) => ({
  type: "SET",
  count: count,
});

//Reducers

const countReducers = (state = { count: 0 }, action) => {
  console.log(action.type);

  switch (action.type) {
    case "INCREMENT":
      //   const incrementBy =
      //     typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      //   const decrementby =
      //     typeof action.decrementby === "number" ? action.decrementby : 1;
      console.log("here", state);
      return {
        count: state.count - action.decrementby,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

//store
const store = createStore(countReducers);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

//Actions

store.dispatch(
  incrementCount({
    incrementBy: 5,
  })
);

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));
