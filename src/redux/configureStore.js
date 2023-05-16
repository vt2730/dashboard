import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from "../hooks/reducers/Index"

export default configureStore({
  reducer: {
    dashboard: dashboardSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});