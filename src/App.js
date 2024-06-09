import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice';

// import logo from './logo.svg';
// import './App.css';

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
