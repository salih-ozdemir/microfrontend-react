import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
// home/src/App.jsx
import React from 'react';
import Home from './Home';
export default function App() {
  return (
    <div>
      <h2>Home Remote Container</h2>
      <Home />
    </div>
  );
}