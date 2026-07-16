import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CaptainRex = () =>
{
  useEffect(() =>
  {
    document.title = "Captain Rex - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Creation and development</a></li>

          <Collapse 
            id="3"
            item="Personality and traits"
            sub={[
              {id: "3.1", title: "Captain in the clone army"},
              {id: "3.2", title: "Friend to the Jedi"},
              {id: "3.3", title: "Soldier without a Republic"},
              {id: "3.4", title: "Relationship with his fellow veterans"},
              {id: "3.5", title: "Member of the Rebellion"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Skills and abilities</a></li>
          <li className="sidebar-list-item"><a href="#5">Equipment</a></li>
          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Star Wars: The Clone Wars"},
              {id: "6.2", title: "Star Wars: Rebels"},
              {id: "6.3", title: "Star Wars: The Bad Batch"},
              {id: "6.4", title: "Tales of the Jedi"},
              {id: "6.5", title: "Ahsoka"},
              {id: "6.6", title: "In other media"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Merchandise</a></li>
          <li className="sidebar-list-item"><a href="#8">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Captain Rex</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain Rex</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain Rex</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/9/97/Rex-CGSWG.png" alt="Captain Rex" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CaptainRex;