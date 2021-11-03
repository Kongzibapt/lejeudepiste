import { configureStore } from '@reduxjs/toolkit'
import teamNameReducer from '../features/teamName/teamNameSlice.js'
import timeReducer from '../features/time/timeSlice.js'
import inventoryReducer from '../features/inventory/inventorySlice.js'

export default configureStore({
  reducer: {
      teamName: teamNameReducer,
      time: timeReducer,
      inventory: inventoryReducer,
  },
})