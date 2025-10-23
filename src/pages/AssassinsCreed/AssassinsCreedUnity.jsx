import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedUnity = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed Unity</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Unity</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" 
            alt="Assassin's Creed Unity logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedUnity;