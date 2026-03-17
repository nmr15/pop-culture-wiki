import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const TheSims = () =>
{
  useEffect(() =>
  {
    document.title = "The Sims (video game series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Development</a></li>

          <Collapse 
            id="3"
            item="Legacy"
            sub={[
              {id: "3.1", title: "Film"},
              {id: "3.2", title: "Reality television show"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Sims (video game series)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Sims (video game series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Sims</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Sims_series_logo.webp/500px-The_Sims_series_logo.webp.png" alt="The Sims logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Creator</th>
              <td className="infobox-data"><Link>Will Wright</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Developer</th>
              <td className="infobox-data"><Link>Maxis</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Electronic Arts</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>The Sims</b> is a series of life simulation video games developed by <Link>Maxis</Link> and published by <Link>Electronic Arts</Link> (EA). The
            franchise has sold nearly 200 million copies worldwide, and is one of the best selling video game series of all time. It is also part of the larger
            Sim series, started by SimCity in 1989.
          </p>
          <p>
            The games in the Sims series are largely sandbox games, in that they lack any defined goals (except for some later expansion packs and console versions
            which introduced this gameplay style). The player creates virtual people called "Sims", places them in houses, and helps direct their moods and satisfy
            their desires. Players can either place their Sims in pre-constructed homes or build theme themselves. Each successive expansion pack and game in the
            series augmented what the player could do with their Sims.
          </p>
        </div>
      </main>
    </>
  )
}

export default TheSims;