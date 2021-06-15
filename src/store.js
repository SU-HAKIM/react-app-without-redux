import { applyMiddleware, createStore } from "redux";
import reducer from "./components/actionReducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk, logger)))

export default store