import { Store } from 'redux';
import { Todo, Options } from 'src/config/interfaces';

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// get classes
export function classNames(item) {
  let classList = '';
  if (item.isCompleted) {
    classList = `${classList} completed`;
  }
  if (item.isEditing) {
    classList = `${classList} editing`;
  }
  return classList.trim();
}

// get type for filter
export function getProp(prop: string, hash:string) {
  let type:string = 'all';
  let url:string = '/';
  if (hash === '#/') { type = 'all'; url = '/'; }
  if (hash === '#/active') { type = 'active'; url = '/active'; }
  if (hash === '#/completed') { type = 'completed'; url = '/completed'; }
  if (prop === 'type') {
    return type;
  }
  return url;
}

// generate random id
export function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// get array index by item id prop
export function getIndex(all:[Todo], todoId:string) {
  let foundIndex = -1;
  for (let index = 0; index < all.length; index++) {
    const todo = all[index];
    if (todo.id === todoId) {
      foundIndex = index;
    }
  }
  return foundIndex;
}

// retrn computed options
export function computeOptions(store:Store, data:[Todo]) {
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

export function computeInit(store:Store, hash:string) {
  let data:[Todo];
  try {
    data = <[Todo]>JSON.parse(<any>localStorage.getItem('todos-drmzn'));
    // remove editing when loading from local storage
    data.forEach((todo:Todo) => {
      todo.isEditing = false;
    });
  } catch (error) {
  }

  if (!data) {
    data = <any>[];
  }
  // calc options
  const options = computeOptions(store, data);
  const type = getProp('type', hash);
  options.filter = <any>{};
  options.filter[type] = true;
  return {
    data,
    options
  };
}

/**
 * Adds new todo to list of todos
 * @param store initialized redux store
 * @param text text of the new todo item
 */
export function computeAdd(store:Store, text:string) {
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

export function computeEdit(store:Store, todoId:string, text:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  const foundIndex = getIndex(data, todoId);
  // update text
  data[foundIndex].text = text.trim();
  return data;
}

export function computeRemove(store:Store, todoId:string) {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  const foundIndex = getIndex(data, todoId);
  // remove item
  data.splice(foundIndex, 1);
  return data;
}

export function computeToggle(store:Store, todoId:string) {
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
    data[foundIndex].isVisible = data[foundIndex].isCompleted ? false : true ;
  }
  return data;
}

export function computeToggleAll(store:Store) {
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

export function computeFilterBy(store:Store, type = 'all') {
  const state = store.getState();
  const data = copy(state.Main.todo.data);
  if (type === 'active') {
    data.forEach((todo:Todo) => {
      if (todo.isCompleted === false) {
        todo.isVisible = true;
      } else {
        todo.isVisible = false;
      }
    });
  }
  if (type === 'completed') {
    data.forEach((todo:Todo) => {
      if (todo.isCompleted === true) {
        todo.isVisible = true;
      } else {
        todo.isVisible = false;
      }
    });
  }
  if (type === 'all') {
    data.forEach((todo:Todo) => {
      todo.isVisible = true;
    });
  }
  return data;
}

export function computeRemoveCompleted(store:Store) {
  const state = store.getState();
  const dataTemp = copy(state.Main.todo.data);
  // remove completed
  const data = <[Todo]>dataTemp.filter((todo:Todo) => todo.isCompleted === false);
  return data;
}

export function computeToggleEdit(store:Store, todoId:string, type:string, text:string) {
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
