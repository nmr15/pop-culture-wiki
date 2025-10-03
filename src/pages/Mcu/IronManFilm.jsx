import { Link } from 'react-router-dom'
import { mcu, marveltv } from '../../data/dataMcu'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const page = mcu.filter((mcu) => mcu.file == "IronManFilm");

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
          <h1 className="article-heading">{page.title}}</h1>
        </div>
        <div className="img-right img-top">
          <img src={page.img} alt={page.title} className="article-heading-img" />
        </div>
      </main>
    </>
  )
}

export default IronManFilm;