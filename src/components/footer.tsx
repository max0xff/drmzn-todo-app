import * as React from 'react';
import { Options } from 'src/interfaces';
import { useSelector, useDispatch } from 'react-redux';

const getOptions = (state: any) => state.Main.todo.options;

const Footer = () => {
  const options:Options = useSelector(getOptions);
  if (!options.hasData) return null;
  const itemTxt = options.isOneCount ? 'item' : 'items';
  const clearCompleted = () => {
    if (options.hasCompleted) {
      return <button type="button" className="clear-completed">Clear completed</button>;
    }
    return '';
  };
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{options.countNotComplete}</strong> {itemTxt} left</span>
      <ul className="filters">
        <li><a className={options.filter.all ? 'selected' : ''} href="#/">All</a></li>
        <li><a className={options.filter.active ? 'selected' : ''} href="#/active">Active</a></li>
        <li><a className={options.filter.completed ? 'selected' : ''} href="#/completed">Completed</a></li>
      </ul>
      {clearCompleted()}
    </footer>
  );
};

export default React.memo(Footer);
