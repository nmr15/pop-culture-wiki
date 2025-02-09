import { Link } from "react-router-dom"

const Navbar = () => 
{
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to='/'>
            <a href="#" className="navbar-brand">Pop Culture Wiki</a>
          </Link>
        </div>
        

      </nav>
    </>
  )
}

export default Navbar