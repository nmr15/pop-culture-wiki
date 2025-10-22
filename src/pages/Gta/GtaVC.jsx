import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaVC = () =>
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
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto: Vice City</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Vice City</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Vice-city-cover.jpg/250px-Vice-city-cover.jpg" 
            alt="Grand Theft Auto: Vice City logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default GtaVC;