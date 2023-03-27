import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
