/* global window */
import {
  combineReducers,
  createStore as createReduxStore,
} from 'redux';

import MembersReducer from './Members/reducer';
import SongsReducer from './Songs/reducer';
import RoomReducer from './Room/reducer';

export const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const createStore = () => createReduxStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
