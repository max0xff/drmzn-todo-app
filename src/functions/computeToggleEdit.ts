import { copy, getIndex } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

export function computeToggleEdit(store, todoId:string, type:string, text:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  // toggle edit
  data.forEach((todo:Todo) => {
    todo.isEditing = false;
  });
  if (todoId && type === 'on') {
    const foundIndex = getIndex(data, todoId);
    if (foundIndex > -1) {
      data[foundIndex].isEditing = true;
    }
  }
  // save text on off
  if (todoId && text && type === 'off') {
    const foundIndex = getIndex(data, todoId);
    data[foundIndex].text = text;
  }
  return data;
}
