import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaLCS = () =>
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
          <li>Grand Theft Auto: Liberty City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Liberty City Stories</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Grand_Theft_Auto_Liberty_City_Stories_box.jpg/250px-Grand_Theft_Auto_Liberty_City_Stories_box.jpg" 
            alt="Grand Theft Auto: Liberty City Stories logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default GtaLCS;