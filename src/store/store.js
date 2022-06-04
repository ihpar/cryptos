import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  filterText: "",
  rate: 1.0,
  rateSymbol: "USD"
};

const slice = createSlice({
  name: "app-store",
  initialState: initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },
    setFilterTerm(state, action) {
      state.filterText = action.payload;
    },
    setRate(state, action) {
      state.rate = action.payload.rate;
      state.rateSymbol = action.payload.rateSymbol;
    }
  }
});

const store = configureStore({
  reducer: slice.reducer
});

export const sliceActions = slice.actions;
export default store;