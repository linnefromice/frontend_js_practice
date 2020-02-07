import React, { useState, useEffect } from 'react'

function App() {
  let [users, setUsers] = useState([])

  const fetchData = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.users)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/