import { NavLink } from 'react-router-dom';


const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/search'>Search</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/musicLibrary'>Music Library</NavLink></li>
      </ul>
    </nav>
  );



export default Navigation;