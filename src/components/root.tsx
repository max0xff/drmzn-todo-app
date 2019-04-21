import * as React from 'react';
import { connect } from 'react-redux';

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

// export default App;
export default React.memo(App);
