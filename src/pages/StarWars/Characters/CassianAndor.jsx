import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CassianAndor = () =>
{
  useEffect(() =>
  {
    document.title = "Cassian Andor - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Cassian Andor</li>
        </ul>
        <div>
          <h1 className="article-heading">Cassian Andor</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Cassian Andor</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/3/31/CassianAndor-Fathead.png" alt="Cassian Andor" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link to="/diego_luna">Diego Luna</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobo-data">
                <Link to="/starwars/rogue_one">Rogue One</Link> <br />
                <Link to="/starwars/andor_series">Andor</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Cassian Jeron Andor</b> is a fictional character in the <Link to="/starwars">Star Wars</Link> franchise, primarily portrayed by actor
            <Link to="/diego_luna"> Diego Luna</Link>. Introduced in the feature film <Link to="/starwars/rogue_one">Rogue One</Link> as a co-lead, he
            is the titular protagonist of the prequel television series <Link to="/starwars/andor_series">Andor</Link>.
          </p>
          <p>
            He begins his life as an orphan on the abandoned mining planet <Link to="/starwars/kenari">Kenari</Link>. After being adopted and taken from his
            home by scavengers, he grows up on the industrial planet <Link to="/starwars/ferrix">Ferrix</Link>. As a young man, he smuggles stolen
            Imperial ship components before joining the <Link to="/starwars/rebel_alliance">Rebel Alliance</Link>. Rogue One depicts Andor as a pilot and
            intelligence officer for the Rebel Alliance who leads a rebel unit called Rogue One in stealing plans for the
            <Link to="/starwars/death_star"> Death Star</Link>, setting the events of the original <Link to="/starwars/a_new_hope">Star Wars film</Link>
            in motion.
          </p>
          <p>
            The character has received mixed responses from critics, with praise for Luna's performance but some criticism for the quality of the
            narrative guiding the character. As the first Mexican lead actor and one of the first Latino leads in a Star Wars film, his introduction in
            Rogue One was considered to be a milestone for Latino representation.
          </p>
        </div>
      </main>
    </>
  )
}

export default CassianAndor;