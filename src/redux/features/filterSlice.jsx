import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: [],
  selectFilter: [],
  categoryFilteredData: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filter = payload;
    },
    updateFilter: (state, { payload }) => {
      state.filter[0].options.map((item, index) => {
        if (item.value === payload.value) {
          state.filter[0].options[index].checked = !item.checked;
        }
      });
    },
    addSelectFilter: (state, { payload }) => {
      state.selectFilter = payload;
    },
    UpdateSelectFilter: (state, { payload }) => {
      state.selectFilter.map((ele, index) => {
        if (ele.value === payload) {
          state.selectFilter[index].checked = true;
        } else {
          state.selectFilter[index].checked = false;
        }
      });
    },
    addCategoryFilteredData: (state, { payload }) => {
      state.categoryFilteredData = payload;
    },
  },
});

export const {
  addFilter,
  addSelectFilter,
  updateFilter,
  addCategoryFilteredData,
  UpdateSelectFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
