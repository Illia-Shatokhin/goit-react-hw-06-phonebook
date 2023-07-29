const { createSlice } = require('@reduxjs/toolkit');

// const filterInitialState = {
//   filter: '',
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
