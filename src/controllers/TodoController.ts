import { Store } from 'redux';
import * as actions from 'src/config/actions';
import {
  computeInit,
  computeAdd,
  computeEdit,
  computeRemove,
  computeToggle,
  computeToggleAll,
  computeFilterBy,
  computeRemoveCompleted,
  computeToggleEdit
 } from 'src/config/functions';

export const Todo = (store:Store) => {
  const init = (hash:string) => {
    const { data, options } = computeInit(store, hash);
    actions.init.dispatch(store, data, options);
    return Promise.resolve();
  };

  const add = (text:string) => {
    const data = computeAdd(store, text);
    actions.add.dispatch(store, data);
  };

  const edit = (todoId:string, text:string) => {
    const data = computeEdit(store, todoId, text);
    actions.edit.dispatch(store, data);
  };

  const remove = (todoId:string) => {
    const data = computeRemove(store, todoId);
    actions.remove.dispatch(store, data);
  };

  const toggle = (todoId:string) => {
    const data = computeToggle(store, todoId);
    actions.toggle.dispatch(store, data);
  };

  const toggleAll = () => {
    const data = computeToggleAll(store);
    actions.toggleAll.dispatch(store, data);
  };

  const filterBy = (type:string) => {
    const data = computeFilterBy(store, type);
    actions.filterBy.dispatch(store, data, type);
  };

  const removeCompleted = () => {
    const data = computeRemoveCompleted(store);
    actions.removeCompleted.dispatch(store, data);
  };

  const toggleEditing = (todoId:string, type:string, text:string) => {
    const data = computeToggleEdit(store, todoId, type, text);
    actions.toggleEditing.dispatch(store, data);
  };

  return {
    init,
    add,
    edit,
    remove,
    toggle,
    toggleAll,
    filterBy,
    removeCompleted,
    toggleEditing
  };
};
