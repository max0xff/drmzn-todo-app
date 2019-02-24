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
  };

  const add = (text:string) => {
    const { data, options } = computeAdd(store, text);
    actions.add.dispatch(store, data, options);
  };

  const edit = (todoId:string, text:string) => {
    const { data, options } = computeEdit(store, todoId, text);
    actions.edit.dispatch(store, data, options);
  };

  const remove = (todoId:string) => {
    const { data, options } = computeRemove(store, todoId);
    actions.remove.dispatch(store, data, options);
  };

  const toggle = (todoId:string) => {
    const { data, options } = computeToggle(store, todoId);
    actions.toggle.dispatch(store, data, options);
  };

  const toggleAll = () => {
    const { data, options } = computeToggleAll(store);
    actions.toggleAll.dispatch(store, data, options);
  };

  const filterBy = (type:string) => {
    const { data, options } = computeFilterBy(store, type);
    actions.filterBy.dispatch(store, data, options);
  };

  const removeCompleted = () => {
    const { data, options } = computeRemoveCompleted(store);
    actions.removeCompleted.dispatch(store, data, options);
  };

  const toggleEditing = (todoId:string, type:string, text:string) => {
    const { data, options } = computeToggleEdit(store, todoId, type, text);
    actions.toggleEditing.dispatch(store, data, options);
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
