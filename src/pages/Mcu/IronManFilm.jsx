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
          <h1 className="article-heading">Iron Man</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" 
            alt="Iron Man" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          Iron Man is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character <Link>of the same name</Link>.
        </div>
      </main>
    </>
  )
}

export default IronManFilm;