import { Switch, Route } from 'react-router-dom';
import axios from 'axios'


  const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/search' component={search}></Route>
        <Route exact path='/MusicLibrary' component={MusicLibrary}></Route>
      </Switch>
      );

const Home = () => (
    <div className='home'>
      <h1>Welcome to the awesome music library!</h1>
      <p> The best music you can listen to right here within a search!</p>
    </div>
  );

  const search = () => (
    <div className='search'>
      <h1>Search</h1>
      <p>Search for the best music here!</p>
    </div>
  );

  const MusicLibrary = () => (
    <div className='MusicLibrary'>
      <h1>MusicLibrary</h1>
      <p></p>
    </div>
    );
  
export default Main;