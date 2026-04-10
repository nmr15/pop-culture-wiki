import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ValkyrieMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Valkyrie (MCU) - Pop Culture Wiki";
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
              {id:"1.1", title: "Leading the Valkyrie", sub2: [
                {id: "1.1.1", title: "Defeated by Hela"}
              ]},
              {id:"1.2", title: "Life on Sakaar", sub2: [
                {id: "1.2.1", title: "Becoming Scrapper 142"},
                {id: "1.2.2", title: "Meeting Thor"},
                {id: "1.2.3", title: "Paid by Grandmaster"},
                {id: "1.2.4", title: "Hulk vs. Thor"},
                {id: "1.2.5", title: "Tricked by the God of Thunder"},
                {id: "1.2.6", title: "Remembering her past"},
                {id: "1.2.7", title: "Helping the fugitives"},
                {id: "1.2.8", title: "Sakaaran revolution"}
              ]},
              {id:"1.3", title: "Ragnarok", sub2: [
                {id: "1.3.1", title: "Battle for Asgard"},
                {id: "1.3.2", title: "Destruction of Asgard"}
              ]},
              {id:"1.4", title: "Infinity War", sub2: [
                {id: "1.4.1", title: "Attack on the Statesman"},
                {id: "1.4.2", title: "The Snap"}
              ]},
              {id:"1.5", title: "Living on Earth", sub2: [
                {id: "1.5.1", title: "Settling in New Asgard"},
                {id: "1.5.2", title: "Visited by the Avengers"},
                {id: "1.5.3", title: "Battle of Earth"}
              ]},
              {id:"1.6", title: "King of New Asgard", sub2: [
                {id: "1.6.1", title: "Mantle passed down"},
                {id: "1.6.2", title: "Taking charge"},
                {id: "1.6.3", title: "Attack on New Asgard"},
                {id: "1.6.4", title: "Getting back in the fight"},
                {id: "1.6.5", title: "Escape from Omnipotence City"},
                {id: "1.6.6", title: "Heading to the Shadow Realm"},
                {id: "1.6.7", title: "Facing off with Gorr"},
                {id: "1.6.8", title: "Recovery"},
                {id: "1.6.9", title: "Training new warriors"},
                {id: "1.6.10", title: "Meeting Ms. Marvel"},
                {id: "1.6.11", title: "Helping the Skrulls"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Valkyrie (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Valkyrie (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Valkyrie</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d8/Valkyrie_in_LoveAndThunder_Poster.png" alt="Valkyrie" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Tessa Thompson</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
                <Link to="/mcu/the_marvels">The Marvels</Link>
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

export default ValkyrieMCU;