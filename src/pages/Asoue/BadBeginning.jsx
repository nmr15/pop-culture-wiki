import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAsoue from '../../components/TableAsoue'

const BadBeginning = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/a_series_of_unfortunate_events">A Series of Unfortunate Events</Link></li>
          <li>The Bad Beginning</li>
        </ul>
        <div>
          <h1 className="article-heading">The Bad Beginning</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/68/BadBeginning.jpg" 
            alt="The Bad Beginning cover" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default BadBeginning;