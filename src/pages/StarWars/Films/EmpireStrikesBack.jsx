import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { starwars } from '../../../data/dataStarWars.js'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const EmpireStrikesBack = () =>
{
  const page = starwars.find((film) => film.file == "EmpireStrikesBack");

  useEffect(() =>
  {
    document.title = `${page.title} - Pop Culture Wiki`;
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          {page.sidebar.map((sidebar) => (
            sidebar.sub ?
              <Collapse
                key={sidebar.id}
                id={sidebar.id}
                item={sidebar.title}
                sub={sidebar.sub}
              />
            :
              <li className="sidebar-list-item" key={sidebar.id}><a href={sidebar.id}>{sidebar.title}</a></li>
          ))}
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>{page.title}</li>
        </ul>
        <div>
          <h1 className="article-heading">{page.title}</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode V: The Empire Strikes Back</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src={page.img} alt={page.alt} />
                </span>
              </td>
            </tr>
            {page.infobox.map((info) => (
              info.route ?
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data"><Link to={info.route}>{info.data}</Link></td>
              </tr>
              :
              info.list ?
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data">
                  {info.list.map((list) => (
                    <>
                      <Link to={list.route}>{list.data}</Link> <br />
                    </>
                  ))}
                </td>
              </tr>
              :
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data">{info.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="div-top">
          <p>
            <b>The Empire Strikes Back</b> (also known as <b>Star Wars: Episode V - The Empire Strikes Back</b>) is a 1980 American epic space opera film
            firected by Irvin Kershner from a screenplay by Leigh Brackett and Lawerence Kasdan, based on a story by <Link>George Lucas</Link>. The
            sequel to <Link to="/starwars/a_new_hope">Star Wars</Link> (1977), it is the second film in the <Link to="/starwars">Star Wars</Link> film
            series and the fifth chronological chapter of the "<Link>Skywalker Saga</Link>". Set three years after the events of Star Wars, the film
            recounts the battle between the malevolent <Link>Galactic Empire</Link>, led by the <Link to="/starwars/sheev_palpatine">Emperor</Link>, and
            the <Link>Rebel Alliance</Link>, led by <Link to="/starwars/luke_skywalker">Luke Skywalker</Link> and
            <Link to="/starwars/leia_organa">Princess Leia</Link>. As the Empire goes on the offensive, Luke trains to master <Link>the Force</Link> so
            he can confront the Emperor's powerful disciple, <Link to="/starwars/anakin_skywalker">Darth Vader</Link>. The ensemble cast includes
            <Link> Mark Hamill</Link>, <Link>Harrison Ford</Link>, <Link>Carrie Fisher</Link>, <Link>Billy Dee Williams</Link>, <Link>Anthony
            Daniels</Link>, <Link>David Prowse</Link>, <Link>Kenny Baker</Link>, <Link>Peter Mayhew</Link>, and <Link>Frank Oz</Link>.
          </p>
        </section>
      </main>
    </>
  )
}

export default EmpireStrikesBack;