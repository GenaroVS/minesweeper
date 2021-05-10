import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type board = boolean[][];

export interface BoardState {
  board: board;
}

const initialState: BoardState = {
  board: []
};

export const counterSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    build: (state, action: PayloadAction<board>) => {
      state.board = action.payload;
    },
  }
});

export const { build } = counterSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export default counterSlice.reducer;
