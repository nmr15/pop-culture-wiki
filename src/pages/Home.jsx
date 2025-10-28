import { Link } from "react-router-dom"
import { topics } from "../data"

const Home = () => 
{
  return (
    <>
      {/* <div className="container-fluid"> */}
        {/* <div className="row"> */}
          <nav class="sidebar bg-dark">
              <ul class="nav flex-column ">
                <li class="nav-item">
                  <a href="#" class="nav-link sidebar-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Franchises</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Movies</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Books</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Video Games</a>
                </li>
                <li className="sidebar-list-item"><Link to='/a_series_of_unfortunate_events/the_bad_beginning'>Current</Link></li>
              </ul>
          </nav>
          <main className="main  py-4">
            <div className="row">
              {topics.map((topic) => (
                <div className="col-4" key={topic.id}>
                  <Link to={topic.route}>
                  <div className="card">
                    <div className="card-top">
                      <img src={topic.img} alt={topic.title} className="card-img" />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{topic.title}</p>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Home