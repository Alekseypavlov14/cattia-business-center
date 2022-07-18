import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { burgerReducer } from "../features/burger/burgerSlice"

export const store = configureStore({
  reducer: {
    burger: burgerReducer
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>