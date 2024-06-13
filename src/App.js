import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>Прибавить
        </button>
        <span>{counter}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>Отнять
        </button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(12))}>Прибавить 12</button>
      </div>
    </div>
  );
}

export default App;
