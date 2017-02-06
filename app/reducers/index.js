import { combineReducers } from "redux"

import image from "./imageReducer"
import login from "./loginReducer"

export default combineReducers({
  image,
  login
})
