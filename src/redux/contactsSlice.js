import { nanoid, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
    addContact(state, action) {
      state.items.push(action.payload);
    },
    prepare: values => {
      const id = nanoid();
      return {
        payload: {
          ...values,
          id,
        },
      };
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const { removeContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContacsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
