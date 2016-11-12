import { combineReducers } from 'redux';
import ReducerTerm from './reducer_term';
import ReducerVideo from './reducer_video';

const rootReducer = combineReducers({
  term: ReducerTerm,
  video: ReducerVideo
});

export default rootReducer;