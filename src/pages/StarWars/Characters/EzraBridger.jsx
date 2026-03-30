import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const EzraBridger = () =>
{
  useEffect(() =>
  {
    document.title = "Ezra Bridger - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Creation and development"
            sub={[
              {id: "1.1", title: "Concept"},
              {id: "1.2", title: "Voice acting"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Ezra Bridger</li>
        </ul>
        <div>
          <h1 className="article-heading">Ezra Bridger</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ezra Bridger</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/3/30/Ezra_HS.png" alt="Ezra Bridger" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Taylor Gray</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Eman Esfandi</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default EzraBridger;