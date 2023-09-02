import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {authActions} from '../store/slice/auth';

const Header = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.auth.isAuthenticated)

  const loginHandler = () => {
    dispatch(authActions.login())
  }
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {islogin && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li> 
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}

      {!islogin && 
        <button onClick={loginHandler}>Login</button>
      }
    </header>
  );
};

export default Header;
