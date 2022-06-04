import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  filterText: ""
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
    }
  }
});

const store = configureStore({
  reducer: slice.reducer
});

export const sliceActions = slice.actions;
export default store;