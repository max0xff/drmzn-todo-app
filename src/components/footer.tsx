import * as React from 'react';
import { Options } from 'src/config/interfaces';

const Footer = (props) => {
  const options:Options = props.state.Main.todo.options;
  if (!options.hasData) return null;
  const itemTxt = options.isOneCount ? 'item' : 'items';
  const clearCompleted = () => {
    if (options.hasCompleted) {
      return <button className="clear-completed">Clear completed</button>;
    }
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

export default Footer;
