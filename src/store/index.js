import { combineReducers, createStore} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import action from'./reducer-action.js';
let reducers=combineReducers({action});
const store = () =>{
  return createStore (reducers,composeWithDevTools());

};
export default store();