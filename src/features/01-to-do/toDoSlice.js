import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: uuidv4(),
        taskName: action.payload,
        completed: false,
        isEditing: false,
      };

      state.items = [...state.items, newTask];
    },

    deleteTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    toggleEdit(state, action) {
      const id = action.payload;
      state.items = state.items.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      );
    },

    editTask: {
      prepare(editedTask, id) {
        return {
          payload: { editedTask, id },
        };
      },
      reducer(state, action) {
        const editedTask = action.payload.editedTask;
        const id = action.payload.id;
        state.items = state.items.map((task) =>
          task.id === id
            ? { ...task, taskName: editedTask, isEditing: !task.isEditing }
            : task
        );
      },
    },

    closeEdit(state) {
      state.items = state.items.map((task) =>
        task.isEditing ? { ...task, isEditing: false } : task
      );
    },

    completeTask(state, action) {
      const id = action.payload;
      state.items = state.items.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    },

    deleteAllTasks(state) {
      state.items = [];
    },
  },
});

export const {
  addTask,
  deleteTask,
  completeTask,
  toggleEdit,
  editTask,
  deleteAllTasks,
  closeEdit,
} = toDoSlice.actions;

export default toDoSlice.reducer;
