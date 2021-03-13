import { createStore } from 'redux';
import reducer from './rootReducer';

export default function configureStore() {
  const store = createStore(reducer);
  return { store };
}
