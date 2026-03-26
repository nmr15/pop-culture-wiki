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
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "The Clone Wars"},
              {id: "1.3", title: ""},
              {id: "1.4", title: ""},
              {id: "1.5", title: ""},
              {id: "1.6", title: ""},
              {id: "1.7", title: ""},
              {id: "1.8", title: ""}
            ]}
          />
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
          <Collapse 
            id="5"
            item="Concept and creation"
            sub={[
              {id: "5.1", title: "Conception"},
              {id: "5.2", title: "Costume and puppet"},
              {id: "5.3", title: "Filming"}
            ]}
          />
          <Collapse 
            id="6"
            item="Portrayals"
            sub={[
              {id: "6.1", title: "Timothy Rose"},
              {id: "6.2", title: "Erik Bauersfeld"},
              {id: "6.3", title: "Other performances"}
            ]}
          />
          <Collapse 
            id="7"
            item="Cultural impact"
            sub={[
              {id: "7.1", title: "Critical reception"},
              {id: "7.2", title: "It's a trap!"},
              {id: "7.3", title: "Response to Ackbar's death"},
              {id: "7.4", title: "Cultural references"}
            ]}
          />
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