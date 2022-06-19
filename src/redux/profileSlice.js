import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUserProfile = createAsyncThunk('profile/getUserProfile', async (id) => {
  const response = await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`);
  const data = await response.json();
  return data;
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    fetchedDate: 90000000,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetProfile: (state) => {
      state.profile = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.profile = action.payload;
        state.fetchedDate = Date.now();
        console.log('Profile:', state.profile);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetProfile, setProfileId } = profileSlice.actions;

export default profileSlice.reducer;
