import userReducer from "./userReducer";
const { configureStore } = require("@reduxjs/toolkit");
const { setupListeners } = require("@reduxjs/toolkit/dist/query");
const { dataApi } = require("./apiReducer");

export const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
        user: userReducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

setupListeners(store.dispatch)