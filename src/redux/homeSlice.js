import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1';

export const fetchPosts = createAsyncThunk('home/fetchPosts', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
});

export const homeSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    fetchedDate: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.posts = state.posts.concat(action.payload);
        state.posts = action.payload;
        state.fetchedDate = Date.now();
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {  } = homeSlice.actions;

export default homeSlice.reducer;
