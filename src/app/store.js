import { configureStore } from '@reduxjs/toolkit'
import teamNameReducer from '../features/teamName/teamNameSlice.js'

export default configureStore({
  reducer: {
      teamName: teamNameReducer,
  },
})