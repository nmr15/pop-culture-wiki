import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AdmiralAckbar = () =>
{
  useEffect(() =>
  {
    document.title = "Admiral Ackbar - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>

          <Collapse 
            id="2"
            item="Personality and traits"
            sub={[
              {id: "2.1", title: "Overview"},
              {id: "2.2", title: "Relationships", sub2: [
                {id: "2.2.1", title:"Aftab Ackbar"},
                {id: "2.2.2", title:"Leia Organa"},
                {id: "2.2.3", title:"Lee-Char"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Skills and abilities</a></li>
          <li className="sidebar-list-item"><a href="#4">Equipment</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Admiral Ackbar</li>
        </ul>
        <div>
          <h1 className="article-heading">Admiral Ackbar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Admiral Ackbar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/f/fb/Ackbar_HS.jpg" alt="Admiral Ackbar" />
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

export default AdmiralAckbar;