import * as React from 'react';
import { classNames } from 'src/functions/utils';
import { Todo } from 'src/interfaces';

const TodoItem = (props) => {
  const { data } = props;
  const item:Todo = data;
  function handleChange() {}
  return (
    <li key={item.id} data-id={item.id} className={classNames(item)}>
      <div className="view">
        <input name={item.id} className="toggle" type="checkbox" checked={item.isCompleted} onChange={handleChange} />
        <label htmlFor={item.id}>{item.text}</label>
        <button type="button" className="destroy" />
      </div>
      <input type="text" className="edit" defaultValue={item.text} data-text={item.text} />
    </li>
  );
};

export default React.memo(TodoItem);
