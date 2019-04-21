import { getProp } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

import { computeOptions } from 'src/functions/computeOptions';

export function computeInit(store, hash:string) {
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
