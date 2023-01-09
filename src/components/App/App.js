import React from 'react';
import '../App/App.css'
import WishList from "../WishList";


function App() {
  return (
    <div>
        <div className="todo-app">
          <h1>New Year Resolution for 2023</h1>
          <WishList/>
        </div>
    </div>
  );
}

export default App;
