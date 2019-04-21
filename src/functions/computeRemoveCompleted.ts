import { copy } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

export function computeRemoveCompleted(store) {
  const state = store.getState();
  const dataTemp = copy(state.Main.todo.data);
  // remove completed
  const data = <[Todo]>dataTemp.filter((todo:Todo) => todo.isCompleted === false);
  return data;
}