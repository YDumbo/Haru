import { configureStore, getDefaultMiddleware, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

const DEVMODE = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: {},
  middleware: [...getDefaultMiddleware()],
  devTools: DEVMODE,
});

const setupStore = (context): EnhancedStore => store;
const makeStore: MakeStore = (context) => setupStore(context);

const wrapper = createWrapper(makeStore, {
  debug: DEVMODE,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
