import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { ChildArea } from './Components/ChildArea';
import { UserContext, UserProvider } from './Providers/UserProvide';

function App() {
  // console.log('App');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const onClickCountUp = () => setCount(count + 1);
  const clickChangeShow = () => setShow(!show);

  const { userInfo: any, setUserInfo: increment } = useContext(UserContext);
  console.log(userInfo);
  console.log(setUserInfo);

  const clickAdmin = () => {
    setUserInfo({ isAdmin: true });
  };
  const clickGeneral = () => {
    setUserInfo({ isAdmin: false });
  };

  return (
    <UserProvider>
      <div className="App">
        <input type="text" />
        <br />
        <br />
        <button disabled={false} onClick={clickChangeShow}>表示</button>
        {show && <ChildArea />}

        <button onClick={clickAdmin}>管理者</button>
        <button onClick={clickGeneral}>管理者以外</button>
      </div>

    </UserProvider>
  );
}

export default App;
