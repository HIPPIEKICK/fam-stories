import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    username: null,
    accessToken: null,
    userId: null,
  }, 
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    }
  }
});

export default userSlice;