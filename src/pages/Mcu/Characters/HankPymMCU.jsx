import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const HankPymMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Hank Pym (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Military career"}
              ]},
              {id: "1.2", title: "Ant-Man", sub2: [
                {id: "1.2.1", title: "Creating the suit"},
                {id: "1.2.2", title: "Mission in Buenos Aires"},
                {id: "1.2.3", title: "Mission in East Berlin"},
                {id: "1.2.4", title: "Losing his wife"},
                {id: "1.2.5", title: "Quitting S.H.I.E.L.D."},
                {id: "1.2.6", title: "Pym Technologies"}
              ]},
              {id: "1.3", title: "Next Ant-Man", sub2: [
                {id: "1.3.1", title: "Reunion with Darren Cross"},
                {id: "1.3.2", title: "Testing the thief"},
                {id: "1.3.3", title: "Breaking Scott Lang free"},
                {id: "1.3.4", title: "Training Scott Lang"},
                {id: "1.3.5", title: "Explaining the truth"}
              ]},
              {id: "1.4", title: "Stealing the Yellowjacket", sub2: [
                {id: "1.4.1", title: "Duel at the Avengers Compund"},
                {id: "1.4.2", title: "Confronted by Darren Cross"},
                {id: "1.4.3", title: "Building the heist team"},
                {id: "1.4.4", title: "Infilitration into Pym Technologies"},
                {id: "1.4.5", title: "Learning of the Quantum Realm"},
                {id: "1.4.6", title: "Handing over the Wasp suit"}
              ]},
              {id: "1.5", title: "Searching for Janet van Dune", sub2: [
                {id: "1.5.1", title: "First encounter with Ghost"},
                {id: "1.5.2", title: "Meeting Bill Foster"},
                {id: "1.5.3", title: "Collecting the suit"},
                {id: "1.5.4", title: "Captured by Ghost"},
                {id: "1.5.5", title: "Arrested by the FBI"},
                {id: "1.5.6", title: "Rescue of Janet van Dyne"}
              ]},
              {id: "1.6", title: "Snap and Blip", sub2: [
                {id: "1.6.1", title: "Returning to work"},
                {id: "1.6.2", title: "Restored to life"}
              ]},
              {id: "1.7", title: "Interviewed for a memoir"},
              {id: "1.8", title: "Adventures in the Quantum Realm", sub2: [
                {id: "1.8.1", title: "Helping Cassie Lang"},
                {id: "1.8.2", title: "Exploring in the Quantum Realm"},
                {id: "1.8.3", title: "Ambush in Axia"},
                {id: "1.8.4", title: "Learning about Kang"},
                {id: "1.8.5", title: "Theft of the multiverse engine core"},
                {id: "1.8.6", title: "Uprising in Axia"},
                {id: "1.8.7", title: "Back to normal"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Former powers"},
              {id: "2.3", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Other equipment"},
              {id: "3.2", title: "Vehicles"}
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
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Hank Pym (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Hank Pym (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Hank Pym</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0e/Hank_Pym_Quantumania.jpg" alt="Hank Pym" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Michael Douglas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/antman_film">Ant-Man</Link> <br />
                <Link to="/mcu/antman_and_the_wasp">Ant-Man and the Wasp</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/antman_and_the_wasp_quantumania">Ant-Man and the Wasp: Quantumania</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default HankPymMCU;