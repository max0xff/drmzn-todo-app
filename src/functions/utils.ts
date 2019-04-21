import { Store } from 'redux';
import { Todo, Options } from 'src/interfaces';

export function copy(obj) {
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