import { copy, getIndex } from 'src/functions/utils';

export function computeRemove(store, todoId:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  const foundIndex = getIndex(data, todoId);
  // remove item
  data.splice(foundIndex, 1);
  return data;
}
