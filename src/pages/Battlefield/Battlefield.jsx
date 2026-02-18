import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Battlefield = () =>
{
  useEffect(() =>
  {
    document.title = "Battlefield (franchise) - Pop Culture Wiki";
  }, []);

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
      <main className="main" id="to">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Battlefield (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Battlefield</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BattlefieldLogo.svg/500px-BattlefieldLogo.svg.png" alt="Battlefield logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data">
                Battlefield Studios: <br />
                <Link>DICE</Link> <br />
                <Link>Criterion Games</Link> (2025-) <br />
                Ripple Effect Studios (2025-) <br />
                Motive Studio (2025-)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Electronic Arts</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Battlefield</b> is a military first-person shooter video game franchise developed by Battlefield Studios, primarily led by Swedish company
            <Link> DICE</Link>, and published by American company <Link>Electronic Arts</Link>. The series mainly focuses on online multiplayer, with
            gameplay taking place across large maps, and emphasizes teamwork and combined arms warfare.
          </p>
          <p>
            The first installment of the franchise, <Link to="/battlefield/battlefield_1942">Battlefield 1942</Link>, was released for Microsoft Windows
            and OS X computers in 2002. Since then, the series' installments have sold 88.7 million copies worldwide as of November 2022.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Games"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development History"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"TV series"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Battlefield;