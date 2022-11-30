import {Link} from 'react-router-dom'

export default function Navbar({user}) {
  return (
    <nav>
      <Link to='/'>Movies List</Link>
      &nbsp; | &nbsp;
      <Link to='/actors'>Actors List</Link>
      <p>Hello {user}!</p>
    </nav>
  );
}
