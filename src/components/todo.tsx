import * as React from 'react';
import { classNames } from 'src/config/functions';
import { Todo } from 'src/config/interfaces';

const TodoItem = (props) => {
  const item:Todo = props.data;
  function handleChange() {}
  return (
    <li key={item.id} data-id={item.id} className={classNames(item)}>
      <div className="view">
      <input className="toggle" type="checkbox" checked={item.isCompleted} onChange={handleChange} />
        <label>{item.text}</label>
        <button className="destroy"/>
      </div>
      <input type="text" className="edit" defaultValue={item.text} data-text={item.text} />
    </li>
  );
};

export default React.memo(TodoItem);
