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
          <li className="sidebar-list-item">
            <a href="#top">Top</a>
          </li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
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
          Produced by <Link>Marvel Studios</Link> and distributed by <Link>Paramount Pictures</Link>, it is the first film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
          Directed by <Link>Jon Favreau</Link> from a screenplay by the writing team of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film
          stars <Link>Roberty Downey Jr.</Link> as <Link>Tony Stark / Iron Man</Link> alongside
        </div>
      </main>
    </>
  )
}

export default IronManFilm;