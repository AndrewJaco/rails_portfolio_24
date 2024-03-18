import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
        |
      <Link to='/runners'>Runners</Link>
       | 
      <Link to='/new'>New Runner</Link>
      |
      <Link to='/login'>Login</Link>
      |
      <Link to='/signup'>Sign up</Link>
    </nav>
  )
}

export default NavBar