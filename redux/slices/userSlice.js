import { createSlice } from '@reduxjs/toolkit'
import { startTransition } from 'react'

const initialState = {
  readingList: []
}

export const user = createSlice({
  name: 'newsHighlight',
  initialState,
  reducers: {
    getReadingList: (state) => {
      state.readingList
    },
    setReadingList: (state, action = []) => {
      state.readingList = [
        ...state.readingList,
        action.payload
      ]    
    }
  },
})

// Action creators are generated for each case reducer function
export const { getReadingList, setReadingList } = user.actions

export default user.reducer