import { Link } from 'react-router-dom'
import Card from '../../components/Card';
import { mcuChar } from '../../data/dataMcu';

const McuCharacters = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <a href="#top">Top</a>
            </li>
        </ul>
      </aside>
      <main className="main" id="top">
        <div>
            <h1 className="article-heading">List of Marvel Cinematic Universe Characters</h1>
        </div>
        <div className="div-top">
            <div className="row">
                {mcuChar.map((char) => (
                    <div className="col-3" key={char.id}>
                        <Card 
                            route={char.route}
                            img={char.img}
                            alt={char.title}
                            title={char.title}
                        />
                    </div>
                ))}
            </div>
        </div>
      </main>
    </>
  )
}

export default McuCharacters;