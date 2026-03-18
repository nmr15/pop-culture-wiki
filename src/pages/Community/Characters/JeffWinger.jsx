import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const JeffWinger = () =>
{
  useEffect(() =>
  {
    document.title = "Jeff Winger - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Character"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Portrayal"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Biography</a></li>
          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="History"
            sub={[
              {id: "4.1", title: "Season 1"},
              {id: "4.2", title: "Season 2"},
              {id: "4.3", title: "Season 3"},
              {id: "4.4", title: "Season 4"},
              {id: "4.5", title: "Season 5"},
              {id: "4.6", title: "Season 6"}
            ]}
          />
          <Collapse 
            id="5"
            item="Relationships"
            sub={[
              {id: "5.1", title: "In the study group", sub2: [
                {id: "5.1.1", title: "Britta Perry"},
                {id: "5.1.2", title: "Annie Edison"},
                {id: "5.1.3", title: "Abed Nadir"},
                {id: "5.1.4", title: "Shirley Bennett"},
                {id: "5.1.5", title: "Pierce Hawthorne"},
                {id: "5.1.6", title: "Troy Barnes"}
              ]},
              {id: "5.2", title: "Other notable relationships", sub2: [
                {id: "5.2.1", title: "Ian Duncan"},
                {id: "5.2.2", title: "Michelle Slater"},
                {id: "5.2.3", title: "Dean Craig Pelton"},
                {id: "5.2.4", title: "William Winger"},
                {id: "5.2.5", title: "Willy Jr."},
                {id: "5.2.6", title: "Sabrina Shmuckle"},
                {id: "5.2.7", title: "Amber"},
                {id: "5.2.8", title: "Quendra"}
              ]}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Commendations"},
              {id: "6.2", title: "Analysis"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Jeff Winger</li>
        </ul>
        <div>
          <h1 className="article-heading">Jeff Winger</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Jeff Winger</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Jeff_Winger_2010.jpg" alt="Jeff Winger" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Joel McHale</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default JeffWinger;