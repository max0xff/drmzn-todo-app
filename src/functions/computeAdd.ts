import { copy, randomId } from 'src/functions/utils';

/**
 * Adds new todo to list of todos
 * @param store initialized redux store
 * @param text text of the new todo item
 */
export function computeAdd(store, text:string) {
  // get current state
  const state = store.getState();
  // copy todos data from state
  const data = copy(state.Main.todo.data);
  // set initial state variable
  let isVisibleState = true;
  // check if filter completed is true
  if (state.Main.todo.options.filter.completed) {
    isVisibleState = false;
  }
  // generate id
  const id = randomId();
  // prepare todo object
  const todo = {
    id,
    text: text.trim(),
    isCompleted: false,
    isVisible: isVisibleState
  };
  // add todo object to copied data list with todos
  data.push(todo);
  return data;
}
