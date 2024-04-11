import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./features/01-to-do/toDoSlice";
import adviceReducer from "./features/04-messages-api/adviceSlice"; // Import the new advice reducer

const rootReducer = combineReducers({
  toDo: toDoReducer,
  advice: adviceReducer, // Add the advice reducer to the root reducer
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState || {},
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
