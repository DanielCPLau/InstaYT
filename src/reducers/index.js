import { combineReducers } from 'redux';
import ReducerTerm from './reducer_term';
import ReducerVideo from './reducer_video';
import ReducerRoom from './reducer_room';

const rootReducer = combineReducers({
  term: ReducerTerm,
  video: ReducerVideo,
  room: ReducerRoom
});

export default rootReducer;