import {useSelector, useDispatch } from 'react-redux';

import {counterActions} from '../store/slice/counter';
import classes from './Counter.module.css';

const Counter = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter.counter);
  // const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())

  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandler());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- COUNTER VALUE: {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Incerement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decerement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
