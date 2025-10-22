import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaVCS = () =>
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
          <li>Grand Theft Auto: Vice City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Vice City Stories</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg/250px-GTA_Vice_City_Stories_PSP_boxart.jpg" 
            alt="Grand Theft Auto: Vice City Stories logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default GtaVCS;