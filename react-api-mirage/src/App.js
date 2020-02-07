import React, { useState, useEffect } from 'react'

function App() {
  let [users, setUsers] = useState([])
  let [movies, setMovies] = useState([])

  const fetchUserData = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.users)
      })
  }

  const fetchMovieData = () => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => {
        setMovies(json.movies)
      })
  }


  useEffect(() => {
    fetchUserData()
    fetchMovieData()
  }, [])

  return (
    <div>
      <h3>USER</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      <h3>MOVIE</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} / {movie.releaseDate} / {movie.country}
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