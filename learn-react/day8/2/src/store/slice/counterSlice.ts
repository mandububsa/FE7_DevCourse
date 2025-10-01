import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice", // 중복되면 안됨! 고유한 이름
  initialState: {
    value: 0,
  },
  reducers: {
    // 상태변경 메서드 담는 곳
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
