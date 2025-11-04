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
    </>
  )
}

export default Battlefield;