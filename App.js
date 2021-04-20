import React, { useEffect } from 'react';
import './App.css';
import { NavLink,Switch,Route } from 'react-router-dom';
import axios from 'axios'
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <h1>DevCode Music library</h1>
      <Navigation/>
      <Main/>
    </div>
  );
}
const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
    </ul>
  </nav>
);
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
  </Switch>
  );
const Home = () => (
  <div className='home'>
    <MusicChart/>
  </div>
);

class MusicChart extends React.Component{
  state = {
    musics: []
  }



  componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(res => {
      const musics = res.data;
      this.setState({musics});
    })
  }


  render(){
    return(
      <div className="music1">
        <ul>{
          this.state.musics.map(
            music => <p>
              <p className="title">Title: {music.title}</p>
              <p className="artist">Artist: {music.artist}</p>
              <p className="genre">Genre: {music.genre}</p>
              <p className="releaseDate">ReleaseDate: {music.releaseDate}</p>
              <br></br>
              </p>)
          }</ul>
      </div>
    )
  }
}             
      



    
      
    
  



export default App;


