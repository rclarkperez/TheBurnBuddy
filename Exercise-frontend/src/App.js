// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Nav from './components/Nav';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>The Burn Buddy</h1>
            <p>The friend that pushes your limits (in the best kind of way)</p>
          </header>

          <Nav />

          <main>
            <Route exact path="/">
              <HomePage setExercise={setExercise} />
            </Route>

            <Route exact path="/add-exercise">
              <AddExercisePage />
            </Route>
            
            <Route exact path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>© 2022 Ryan Clark</p>
          </footer>

      </Router>
    </>
  );
}

export default App;