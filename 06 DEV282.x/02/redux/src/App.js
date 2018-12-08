import React from "react";
import { createStore, combineReducers } from "redux";

//action creator
const addItem = item => {
  return {
    type: "ADD_ITEM",
    item: item
  };
};

const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

const filterItem = string => {
  return {
    type: "SET_FILTER",
    filter: string
  }
}

const discountItem = percentage => {
  return {
    type: "SET_DISCOUNT",
    discount: percentage
  }
}

//item reducer
const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
};

//filter reducer
const filter = (state = [], action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
}

//discount reducer
const discount = (state = [], action) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discount;
    default:
      return state;
  }
}

const reducer = combineReducers({
  items,
  filter,
  discount,
})

var store = createStore(reducer);

const unsub = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addItem("a"));
store.dispatch(addItem("b"));
store.dispatch(addItem("c"));
store.dispatch(deleteItem(0));
store.dispatch(filterItem("c"));
store.dispatch(discountItem(20));

unsub();

function App() {
  return (
    <div>
      <h1>Redux Example</h1>
    </div>
  );
}

export default App;