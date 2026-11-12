import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { starwars } from '../../../data/dataStarWars.js'
import { intro } from '../../../markdown/starwars/films/empirestrikesback.js'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import MarkdownRenderer from '../../../components/MarkdownRenderer.jsx'

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
          <MarkdownRenderer content={intro} />
        </section>
      </main>
    </>
  )
}

export default EmpireStrikesBack;