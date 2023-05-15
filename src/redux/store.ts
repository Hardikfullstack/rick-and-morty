import {  applyMiddleware, createStore } from "redux";
import {combineReducers} from "redux"
import reducers from "./reducer";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    data: reducers
});
const middleware = [reduxThunk];
// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger);
// }
const store = createStore(rootReducer,applyMiddleware(...middleware));

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         posts: postsReducer,
//         users: usersReducer,
//         notifications: notificationsReducer,
//     },
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
