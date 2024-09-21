import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/features/userSlice';  // Changed 'useReducer' to 'userReducer'
import profileReducer from '../redux/features/profileSlice'

export const store = configureStore({
  reducer: {
    user: userReducer, 
    profile: profileReducer,
  },
});
