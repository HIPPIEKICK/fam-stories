import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
  name: 'user',
  initialState: {
    error: null,
    username: null,
    accessToken: null,
    userId: null,
  }, 
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  }
})

export default user;