
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <ul>
       <li><Link to='/'>Home</Link></li>
       <li> <Link to='app'>App</Link></li>
        <li><Link>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar