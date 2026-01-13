import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from "../../../components/TableMcu"

const AjakMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Ajax (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Creation", sub2: [
                {id: "1.1.1", title: "Aiding the Celestials for millenia"}
              ]},
              {id: "1.2", title: "Earth mission", sub2: [
                {id: "1.2.1", title: "Arriving on Earth"},
                {id: "1.2.2", title: "Battle of Babylon"}
              ]},
              {id: "1.3", title: "500 year war", sub2: [
                {id: "1.3.1", title: "Mission in Spain"},
                {id: "1.3.2", title: "Ending the war"}
              ]},
              {id: "1.4", title: "Distracting Phastos"},
              {id: "1.5", title: "Victory", sub2: [
                {id: "1.5.1", title: "Defeating the Deviants"},
                {id: "1.5.2", title: "Splitting up the Eternals"}
              ]},
              {id: "1.6", title: "Emergence", sub2: [
                {id: "1.6.1", title: "Changing her mind"},
                {id: "1.6.2", title: "Betrayed by Ikaris"}
              ]},
              {id: "1.7", title: "Legacy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", ttle: "Powers"},
              {id: "3.2", ttle: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Weapons"},
              {id: "4.2", title: "Other equipment"},
              {id: "4.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Facilities</a></li>
          <li className="sidebar-list-item"><a href="#6">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#76">Behind the scenes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Ajax (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ajax (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ajax</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3f/Ajak_Infobox.jpg" alt="Ajax" />
                </span>
              </td>
            </tr>
             <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Salma Hayek</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link to="/mcu/eternals">Eternals</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Personality"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Powers and abilities"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Equipment"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Facilities"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Trivia"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Behind the scenes"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default AjakMCU;