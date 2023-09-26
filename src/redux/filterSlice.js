import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter/search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.filter = action.payload;
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const { setSearchQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterReducer
);
