import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    items: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const id = (
        Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
      ).toUpperCase();
      state.items = [
        ...state.items,
        { id, text: action.payload.text, completed: false },
      ];
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.map((item) => {
        return item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      state.items = state.items.map((item) => {
        return item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

// id, text, completed
// [_, set_]=useState({});

// setObj({name:"", age:10})
