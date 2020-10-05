import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = 'http://localhost:9000/api/placeholder'
  const [text, setText] = useState('');
  

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.outputText);
      setText(data.outputText);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;
