import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedMirage = () =>
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
          <li>Assassin's Creed Mirage</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Mirage</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg" 
            alt="Assassin's Creed Mirage logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedMirage;