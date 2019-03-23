import * as React from 'react';

const Header = () => {
  return (
    <div id="header">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      </header>
    </div>
  );
};

export default React.memo(Header);
