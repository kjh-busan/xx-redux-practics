import { useSelector } from 'react-redux'

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
const isLogin = useSelector((state) => state.auth.isAuthenticated)
// const counter = useSelector(state => state.counter.counter);

  return ( 
    <>
      <Header />
      {!isLogin && <Auth />}
      {isLogin && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
