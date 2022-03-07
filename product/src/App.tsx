import React from 'react';
import './App.css';

const Header = React.lazy(() => import('home/Header'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </React.Suspense>
      <div className='product'>Product</div>
    </div>
  );
}

export default App;
