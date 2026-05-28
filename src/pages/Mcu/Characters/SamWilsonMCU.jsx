import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SamWilsonMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Sam Wilson (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Wilson Family Seafood"}
              ]},
              {id: "1.2", title: "Military career"},
              {id: "1.3", title: "Meeting Captain America"},
              {id: "1.4", title: "New Avengers"},
              {id: "1.5", title: "Avengers Civil War"},
              {id: "1.6", title: "On the run"},
              {id: "1.7", title: "Infinity War"},
              {id: "1.8", title: "Return to the military"},
              {id: "1.9", title: "Chasing super soldiers"},
              {id: "1.10", title: "Tough decisions"},
              {id: "1.11", title: "Becoming Captain America"},
              {id: "1.12", title: "Fighting SERPENT"},
              {id: "1.13", title: "Ruination of Thaddeus Ross' legacy"},
              {id: "1.14", title: "Reassembling the Avengers"}
            ]}
          />
          <Collapse 
            id="2"
            item="Poers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other Equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="4"
            item="Facilities"
            sub={[
              {id: "4.1", title: "Prisons"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Sam Wilson (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Sam Wilson (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Sam Wilson</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Sam_Wilson_Infobox.jpg" alt="Sam Wilson" />
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

export default SamWilsonMCU;