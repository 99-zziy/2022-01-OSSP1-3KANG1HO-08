import { configureStore } from "@reduxjs/toolkit";
import { user } from "../store/user";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
