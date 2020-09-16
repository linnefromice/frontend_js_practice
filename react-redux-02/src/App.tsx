import React from 'react';
import './App.scss';

import { TaskBoard } from "./layouts/TaskBoard"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__title">TASK MANAGEMENT</div>
      </div>
      <div className="main">
        <div className="main__content">
          <TaskBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
