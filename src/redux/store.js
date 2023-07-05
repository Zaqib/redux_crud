// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import showUserDataSaga from "./middleware/middleware";
// import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagaMiddleware],
// });
// sagaMiddleware.run(showUserDataSaga);

const persistConfi = {
  key: "persit-store",
  storage,
};

const persitedReducer = persistReducer(persistConfi, rootReducer);
const store = configureStore(
  { reducer: persitedReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export default store;
