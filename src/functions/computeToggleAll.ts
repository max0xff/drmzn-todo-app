import { copy } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

export function computeToggleAll(store) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  let allCompleted = true;
  data.forEach((todo:Todo) => {
    if (todo.isCompleted === false) {
      allCompleted = false;
    }
  });
  // if at least one is not complete - make all completed
  // if all are completed - make all not completed
  data.forEach((todo:Todo) => {
    if (allCompleted) {
      todo.isCompleted = false;
      if (state.Main.todo.options.filter.completed) {
        todo.isVisible = false;
      }
      if (state.Main.todo.options.filter.active) {
        todo.isVisible = true;
      }
    } else {
      todo.isCompleted = true;
      if (state.Main.todo.options.filter.completed) {
        todo.isVisible = true;
      }
      if (state.Main.todo.options.filter.active) {
        todo.isVisible = false;
      }
    }
  });
  return data;
}
