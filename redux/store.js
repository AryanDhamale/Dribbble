import { configureStore } from '@reduxjs/toolkit'
import sideNavcontrolReducer from './sidenavcontrols/sideNavcontrolSlice'

export default configureStore({
  reducer: {
    sideNavcontrol : sideNavcontrolReducer
  }
})