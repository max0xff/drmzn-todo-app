
import { copy, getIndex } from 'src/functions/utils';

export function computeToggle(store, todoId:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  const foundIndex = getIndex(data, todoId);
  // toggle item
  data[foundIndex].isCompleted = data[foundIndex].isCompleted ? false : true;
  // hide if filtered
  if (state.Main.todo.options.filter.completed) {
    data[foundIndex].isVisible = data[foundIndex].isCompleted ? true : false;
  }
  // hide if filtered
  if (state.Main.todo.options.filter.active) {
    data[foundIndex].isVisible = data[foundIndex].isCompleted ? false : true;
  }
  return data;
}
