import { getIndex, copy } from 'src/functions/utils';

export function computeEdit(store, todoId:string, text:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  const foundIndex = getIndex(data, todoId);
  // update text
  data[foundIndex].text = text.trim();
  return data;
}
