// файл створення стор Redux

// import { contactsReducer } from './contactsSlice';

// import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContacsReducer } from './contactsSlice';
import { persistedFilterReducer } from './filterSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: persistedContacsReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
