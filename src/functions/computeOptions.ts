import { Todo, Options } from 'src/interfaces';

// retrn computed options
export function computeOptions(store, data:[Todo]) {
  const state = store.getState();
  let filterState = {
    all: true
  };
  if (state && state.Main && state.Main.todo && state.Main.todo.options && state.Main.todo.options.filter) {
    filterState = Object.assign({}, state.Main.todo.options.filter);
  }
  const options:Options = {
    countTotal: 0,
    countComplete: 0,
    countNotComplete: 0,
    hasCompleted: false,
    isAllComplete: false,
    isEditing: false,
    hasData: false,
    isOneCount: false,
    filter: filterState
  };
  // total
  options.countTotal = data.length;
  // countComplete, countNotComplete
  data.forEach((todo:Todo) => {
    if (todo.isCompleted) {
      options.countComplete = options.countComplete + 1;
    } else {
      options.countNotComplete = options.countNotComplete + 1;
    }
    if (todo.isEditing) {
      options.isEditing = true;
    }
  });
  // hasCompleted
  if (options.countComplete > 0) {
    options.hasCompleted = true;
  }
  // isAllComplete
  if (data.length === options.countComplete) {
    options.isAllComplete = true;
  }
  // hasData
  if (data.length > 0) {
    options.hasData = true;
  }
  // isOneCount
  if (options.countNotComplete === 1) {
    options.isOneCount = true;
  }
  // save data
  try {
    localStorage.setItem('todos-drmzn', JSON.stringify(data));
  } catch (error) {
  }
  return options;
}
