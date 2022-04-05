import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../services/countries";
// ...

const store = configureStore({
  reducer: {
      contries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
