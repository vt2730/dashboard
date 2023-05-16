/**
 * @description This slice is example of a component reducer function that will be created 
 * for each component in container.
 */

import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  items: [],
  category: [],
  loading: false,
  error: false,
};
const dashboardSlice = createSlice({
    /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
    If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
  name: 'dashboard',//
  initialState,
  reducers: {
    getLoading: (state, action) => {
        state.loading = true;
    },
    getItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = false;
    },
    getCategory : (state, action) => {
        state.category = action.payload;
        state.loading = false;
        state.error = false;
    }
  },
});
export const { getItems, getCategory,getLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;