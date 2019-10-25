import React from 'react';
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <div style={{width: '400px', border: '1px solid black', textAlign: 'center'}}>
        <h1>Layout works</h1>
      </div>
    </Layout>
  );
}

export default App;
