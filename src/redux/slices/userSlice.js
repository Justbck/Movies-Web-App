import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null }

//accepts a single configuration object parameter
export const userSlice = createSlice({
  //prefix  
  name: "user",
  initialState,
  //intended to handle a specific action type
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    }
  },
})

//getting action
export const { login, logout } = userSlice.actions;

//getting piece of information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;