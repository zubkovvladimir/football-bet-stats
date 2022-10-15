import { createReducer } from '@reduxjs/toolkit';
import { FootballBase } from 'interfaces/api/Football.interface';

import { fetchFootball } from './actions';

interface FootballState {
  isLoading: boolean;
  items: any[];
  error: string | null;
}

const initialState: FootballState = {
  isLoading: false,
  items: [],
  error: null,
};

export const footballReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFootball.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchFootball.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    })
    .addCase(fetchFootball.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    });
});
