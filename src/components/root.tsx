import * as React from 'react';

import Header from 'src/components/header';
import Footer from 'src/components/footer';
import Todos from 'src/components/todos';

const App = (props) => {
  return (
    <section className="todoapp">
      <Header />
      <Todos state={props.state} />
      <Footer state={props.state} />
    </section>
  );
};

export default App;
