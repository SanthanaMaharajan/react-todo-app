import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../Slice/TaskSlice';

export default configureStore({
  reducer: {
    lists:listReducer
  },
})