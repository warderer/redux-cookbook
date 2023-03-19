import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    reducerTest: () => { return { test: 'test' } }
  }
})
