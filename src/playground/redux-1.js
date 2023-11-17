import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementby =
        typeof action.decrementby === "number" ? action.decrementby : 1;
      return {
        count: state.count - decrementby,
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
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

// unsubscribe();

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
  decrementby: 10,
});

store.dispatch({
  type: "SET",
  count: 101,
});
