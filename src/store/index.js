
// import redux
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter'
import authReducer from './slice/auth'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;