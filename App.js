import React from 'react';
import './App.css';
import Navigation from'./navigation';
import Main from './Main';
/*import List from './list';
import withListLoading from './withlistloading';
import React, { useEffect, useState } from 'react';
import axios from 'axios'*/

function App() {
  return (
    <div className="App">
      <h1>DevCode Music library</h1>
      <Navigation/>
      <Main/>
    </div>
  );
}
export default App;



/*import React, { useEffect, useState } from 'react';
import './App.css';
import List from './list';
import withListLoading from './withlistloading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;*/
