import create from "zustand";

const useTodoStore =
  // TODO: answer here
  create((set) => ({
    todos: [],
    addTodo: (input) =>
      set((state) => {
        state.todos.push(input);
      }),
    removeTodo: (id) =>
      set((state) => {
        const removedTodo = state.todos.filter((todo) => todo.id !== id);
        state.todos = removedTodo;
      }),
    toggleTodo: (id) =>
      set((state) => {
        const findToggleIndex = state.todos.findIndex((todo) => todo.id == id); // 0
        state.todos[findToggleIndex] = {
          ...state.todos[findToggleIndex],
          isDone: !state.todos[findToggleIndex].isDone,
        };
      }),
  }));

export default useTodoStore;