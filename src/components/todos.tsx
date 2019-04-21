import * as React from 'react';
import { Todo, Options } from 'src/interfaces';
import TodoItem from 'src/components/todo';

const Todos = (props) => {
  const data:[Todo] = props.state.Main.todo.data;
  const options:Options = props.state.Main.todo.options;
  if (!options.hasData) return null;
  function handleChange() {}
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={options.isAllComplete} onChange={handleChange} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {data.filter(item => item.isVisible).map(item => <TodoItem data={item} key={item.id} />)}
      </ul>
    </section>
  );
};

export default React.memo(Todos);
