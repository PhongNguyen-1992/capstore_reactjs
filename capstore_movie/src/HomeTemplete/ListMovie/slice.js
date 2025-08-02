import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../Service/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchListMovie = createAsyncThunk(
  "listMovie/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const listMovieSlice = createSlice({
  name: "listMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovie.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(fetchListMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchListMovie.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  },
});

export default listMovieSlice.reducer;
