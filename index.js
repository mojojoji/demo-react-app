const React = require('react');
const ReactDOM = require('react-dom');

export default function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Counter app</h1>
      <div>{counter}</div>
      <div>
        <button onClick={() => setCounter(c => c-1)}>Decrement</button>
        <button onClick={() => setCounter(c => c+1)}>Increment</button>
      </div>
    </div>
  );
}

const domContainer = document.getElementById('root');
ReactDOM.render(<App/>, domContainer);

