import { reactive, ref } from "vue";

const useTodos = () => {
  const todos = reactive([]);
  const todo = ref("");

  const addTodo = () => {
    todos.push(todo.value);
  };

  return { todos, addTodo, todo };
};

export default useTodos;
