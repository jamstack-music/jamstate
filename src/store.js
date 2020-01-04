import {
  combineReducers,
  createStore as createReduxStore,
} from 'redux';

import MembersReducer from './state/Members/reducer';
import SongsReducer from './state/Songs/reducer';
import RoomReducer from './state/Room/reducer';

export const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const createStore = () => createReduxStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
