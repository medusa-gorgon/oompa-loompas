import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=';

export const fetchPosts = createAsyncThunk('home/fetchPosts', async (page) => {
  const response = await fetch(url + page);
  const data = await response.json();
  return data;
});

export const homeSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
    nextPage: 1,
    totalPages: 2,
    fetchedDate: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    //
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (state.totalPages === 2) {
          state.totalPages = action.payload.total;
        }
        if (state.posts === null) {
          state.posts = action.payload.results;
        } else {
          state.posts = state.posts.concat(action.payload.results);
        }

        state.nextPage += 1;
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
