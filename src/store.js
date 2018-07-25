import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./components/CategoryPage/reducers";
import mySaga from "./components/CategoryPage/sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);