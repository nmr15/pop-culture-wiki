import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Battlefield = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <li className="sidebar-list-item"><a href="#2">Games</a></li>
          <li className="sidebar-list-item"><a href="#3">Development History</a></li>
          <li className="sidebar-list-item"><a href="#4">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="to">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Battlefield (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BattlefieldLogo.svg/500px-BattlefieldLogo.svg.png" 
            alt="Battlefield logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default Battlefield;