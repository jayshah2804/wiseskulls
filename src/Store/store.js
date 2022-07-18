import { createStore } from "redux";

const reducerFn = (state = { isLoggedIn: false }, action) => {
  if (action.type === "Login") {
    if (state.isLoggedIn) {
      return {
        isLoggedIn: state.isLoggedIn,
      };
    }else{
        return {
            isLoggedIn: !state.isLoggedIn,
        }
    }
  }
  if (action.type === "Logout") {
    if (state.isLoggedIn) {
        return {
          isLoggedIn: !state.isLoggedIn,
        };
      }else{
          return {
              isLoggedIn: state.isLoggedIn,
          }
      }
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
