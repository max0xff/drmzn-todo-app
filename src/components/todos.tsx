import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Todo, Options } from 'src/interfaces';
import TodoItem from 'src/components/todo';

const getData = (state: any) => state.Main.todo.data;
const getOptions = (state: any) => state.Main.todo.options;

const Todos = () => {
  const data:[Todo] = useSelector(getData);
  const options:Options = useSelector(getOptions);
  if (!options.hasData) return null;
  function handleChange() {}
  return (
    <section className="main">
      <input id="toggle-all" name="toggle-all" className="toggle-all" type="checkbox" checked={options.isAllComplete} onChange={handleChange} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {data.filter((item) => item.isVisible).map((item) => <TodoItem data={item} key={item.id} />)}
      </ul>
    </section>
  );
};

export default React.memo(Todos);
