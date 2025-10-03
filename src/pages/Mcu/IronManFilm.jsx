import { Link } from 'react-router-dom'
import { mcu, marveltv } from '../../data/dataMcu'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const IronManFilm = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-ite">
            <a href="#top">Top</a>
          </li>
        </ul>
      </aside>
      <main className="main" id="top">
        <div>
          <h1 className="article-heading">{mcu[0].title}</h1>
        </div>
      </main>
    </>
  )
}

export default IronManFilm;