import React, { useState, useEffect } from 'react';
import { arrayExample } from './array';




function App() {
  const [text, setText] = useState('');
  useEffect(() => {

    fetch('http://localhost:5005/api/data')
      .then(response => response.json())
      .then(data => setText(data.message))
      .then(data => console.log(data))
      
      .catch(error => console.error("error", error));
      

}, []);
 

  return (
    <div className="App">
      <h2>Importing an Array Example</h2>
      <p>{ text}</p>
   
    </div>
  );
}

export default App;
