import {createStore} from 'redux';
import todoApp from '../reducer/reducer';
let store = createStore(todoApp);
export default store;