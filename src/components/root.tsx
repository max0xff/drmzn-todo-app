import * as React from 'react';

import Header from 'src/components/header';
import Footer from 'src/components/footer';
import Todos from 'src/components/todos';

const App = () => {
  return (
    <section className="todoapp">
      <Header />
      <Todos />
      <Footer />
    </section>
  );
};

export default App;
