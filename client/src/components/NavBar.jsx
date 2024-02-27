import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
        |
      <Link to='/runners'>Runners</Link>
       | 
      <Link to='/new'>New Runner</Link>
    </nav>
  )
}

export default NavBar