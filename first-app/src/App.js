import Ninjas from "./NInjas";
import React, { useState } from 'react';

function App() {

  const [ninjas, setNinjas] = useState([
    {name: 'Bori', age: 22, id: 1},
    {name: 'Tishe', age: 21, id: 2},
    {name: 'Enoch', age: 21, id: 3},
    {name: 'Najat', age: 21, id: 4},
    {name: 'Risso', age: 22, id: 5}
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          You need to shut up blud
        </p>
        <Ninjas ninjas={ ninjas }/>
      
      </header>
    </div>
  );
}

export default App;
