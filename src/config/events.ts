import { store } from 'src/config/store';
import { Todo } from 'src/controllers/TodoController';
import { getProp } from 'src/config/functions';

import { Delegate } from 'dom-delegate';
export const events: any = new Delegate(document.body);

console.log('init');
Todo(store).init(document.location.hash);

events.on('keydown', 'input.new-todo', (e:KeyboardEvent, t:HTMLInputElement) => {
  if (e.keyCode === 13 || e.key === 'Enter') {
    if (t.value && (t.value).trim().length > 0) {
      Todo(store).add(t.value.trim());
      // clear value
      t.value = '';
    }
  }
});

events.on('keydown', 'input.edit', (e:KeyboardEvent, t:HTMLInputElement) => {
  const todoId = t.parentElement.dataset.id;
  if (e.key === 'Enter') {
    if (t.value && (t.value).length > 0) {
      Todo(store).edit(todoId, t.value);
    }
    t.blur();
  }
  // if esc discard change
  if (e.key === 'Escape') {
    // get old text
    const txt = (<any>document.querySelector(`li[data-id="${todoId}"] > input.edit`)).dataset.text;
    // replace text
    t.value = txt;
    t.blur();
  }
});

// toggle on editing
events.on('dblclick', 'li', (e:Event, t:HTMLLIElement) => {
  Todo(store).toggleEditing(t.dataset.id, 'on', '');
  const el = <HTMLInputElement>t.lastElementChild;
  // place cursor at end of text
  const tmp = el.value;
  setTimeout(() => {
    if (window.getSelection().toString().length > 0) {
      return false;
    }
    el.value = '';
    el.value = tmp;
    el.focus();
  }, 1);
});

// save and toggle off editing
events.on('blur', 'input.edit', (e:Event, t:HTMLInputElement) => {
  const todoId = t.parentElement.dataset.id;
  if (t.value && (t.value).length > 0) {
    Todo(store).toggleEditing(todoId, 'off', t.value);
  }
  // delete todo if field value is empty
  if (t.value === '') {
    Todo(store).remove(todoId);
  }
});

// toggle one
events.on('click', 'input.toggle', (e:Event, t:HTMLInputElement) => {
  const todoId = t.parentElement.parentElement.dataset.id;
  Todo(store).toggle(todoId);
});

// toggle all
events.on('click', 'input.toggle-all', (e:Event, t:HTMLInputElement) => {
  Todo(store).toggleAll();
});

// remove one
events.on('click', 'button.destroy', (e:Event, t:HTMLButtonElement) => {
  const todoId = t.parentElement.parentElement.dataset.id;
  Todo(store).remove(todoId);
});

// remove completed
events.on('click', 'button.clear-completed', (e:Event, t:HTMLButtonElement) => {
  Todo(store).removeCompleted();
});

// toggle todo
events.on('click', 'a', (e:Event, t:HTMLLinkElement) => {
  const href = t.getAttribute('href');
  const hash = getProp('hash', href);
  document.location.hash = hash;
  return false;
});

// watch on hash change and trigger controller
// handles both clicks and back-button
(<any>window).onhashchange = (e:Event, t:EventTarget) => {
  const type = getProp('type', window.location.hash);
  Todo(store).filterBy(type);
};
