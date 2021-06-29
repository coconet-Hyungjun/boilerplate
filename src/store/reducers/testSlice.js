import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 1,
  msg: '',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    test(state, action) {
      console.log('conso', action.payload);
      state.test = 10;
      state.msg = action.payload;
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;
