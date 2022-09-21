import { createSlice } from '@reduxjs/toolkit'
import { startTransition } from 'react'

const initialState = {
  selectedCategory:'',
  selectedNews:''
}

export const newsHighlightSlice = createSlice({
  name: 'newsHighlight',
  initialState,
  reducers: {
    selectedCategory: (state) => {
      state.value
    },
    selectedNews: (state) => {
      state.value
    },
    setSelectedCategory: (state, action) => {
      state.value = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = newsHighlightSlice.actions

export default newsHighlightSlice.reducer