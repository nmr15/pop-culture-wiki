import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaIV = () =>
{
  return(
    <>
      <aside className="sidebar">

      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto IV</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto IV</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Grand_Theft_Auto_IV_cover.jpg/250px-Grand_Theft_Auto_IV_cover.jpg" 
            alt="Grand Theft Auto IV logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default GtaIV;