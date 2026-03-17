import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/usersThunk";



export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loader: false
  },
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.fulfilled, (state,actions)=>{
        state.loader = false
        state.users = actions.payload
    })
    builder.addCase(fetchUsers.pending, (state)=>{
        state.loader = true

    })
  }
});

export const{} =  usersSlice.actions
export default usersSlice.reducer;