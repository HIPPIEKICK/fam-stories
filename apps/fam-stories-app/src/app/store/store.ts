import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { familyMembersSlice } from "./familyMembersSlice";
import user from "./user";

const reducer = combineReducers({ 
  familyMembers: familyMembersSlice.reducer,
  user: user.reducer,
  })

export const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
