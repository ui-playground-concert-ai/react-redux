import * as Redux from 'redux';
import * as Thunk from 'redux-thunk';

import reducer from 'reducer_root';

export default function configureStore(initialState) {
  return Redux.createStore(reducer, initialState, Redux.applyMiddleware(Thunk.default));
}
