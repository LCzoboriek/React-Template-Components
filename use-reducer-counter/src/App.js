import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
  //This is the function that is called in the useReducer hook
  //It is called with the current state and the action
  //It returns the new state
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //So in this use reducer, the state is linked to the object in the useReducer hook
  //and the dispatch part is the reducer function being called from up above
  //The return value of useReducer is an array with two elements\
  //The first element is the state
  //The second element is the dispatch function
  //This reducer function takes a function to get a new state and then the intial state which often is an object

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
