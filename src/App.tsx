import React from 'react';
import PageHeader from './components/PageHeader';
import Books from './components/Books';

function App() {
  return (
    <div className="container-fluid text-center mb-5 px-0">
      <PageHeader />
      <Books />
    </div>
  );
}

export default App;
