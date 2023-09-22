import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ChildArea } from './Components/ChildArea';

function App() {
  console.log('App');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const onClickCountUp = () => setCount(count + 1);
  const clickChangeShow = () => setShow(!show);

  return (
    <div className="App">
      <input type="text" />
      <br />
      <br />
      <button disabled={false} onClick={clickChangeShow}>表示</button>
      {show && <ChildArea />}
    </div>
  );
}

export default App;
