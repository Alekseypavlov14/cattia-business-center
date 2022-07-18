import { AppState } from './../../store/store'
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  opened: boolean
}

const initialState: InitialState = {
  opened: false
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggle(state) {
      state.opened = !state.opened
    }
  }
})

export const burgerReducer = burgerSlice.reducer
export const { toggle } = burgerSlice.actions
export const openedSelector = (state: AppState) => state.burger.opened