
import { copy } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

export function computeFilterBy(store, type = 'all') {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  data.forEach((todo:Todo) => {
    if (type === 'active') {
      todo.isVisible = (todo.isCompleted === false) ? true : false;
    } else if (type === 'completed') {
      todo.isVisible = (todo.isCompleted === true) ? true : false;
    } else if (type === 'all') {
      todo.isVisible = true;
    }
  });
  return data;
}
