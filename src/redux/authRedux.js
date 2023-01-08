import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 // Login User /** the createAsyncThunk allows intergration with the backend  */
 export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
      const {data} = await publicRequest.post("/auth/login", user);;
      // console.log(data)
      if (data) {
        localStorage.setItem("currentUser", JSON.stringify(data));
      }
    } catch (error) {
          const message =
          (error && error.data && error.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
    }
  });
  
const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: currentUser ? currentUser : null,
    isLoading: false,
    success:false,
    error: false,
    message:""
  },
  
 
  reducers: {
    // RESET
    reset:(state)=>{
      state.isLoading = false;
      state.success = false;
      state.error = false;
      state.message = false;
    },
    // 
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(login.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.user = action.payload;

        // state.avatarFile=action.payload;
      });
      builder.addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.error = true;
        state.user = null;
        state.isLoading = false;
        state.success = true;
      });

  }
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
