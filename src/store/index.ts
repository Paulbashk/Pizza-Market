import { wrapper } from './store';
// store

export {
  type AppState,
  type AppStore,
  type AppDispatch,
  type AppThunk,
} from './store';

export { default as rootReducer } from './reducers';

export default wrapper;
