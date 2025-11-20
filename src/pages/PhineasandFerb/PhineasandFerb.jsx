import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const PhineasandFerb = () =>
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
          <li>Phineas and Ferb</li>
        </ul>
        <div>
          <h1 className="article-heading">Phineas and Ferb</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Phineas_and_Ferb_logo.svg/500px-Phineas_and_Ferb_logo.svg.png" 
            alt="Phineas and Ferb logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default PhineasandFerb;