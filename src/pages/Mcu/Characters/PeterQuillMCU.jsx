import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PeterQuillMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Peter Quill (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Fatherless childhood"}
              ]},
              {id: "1.2", title: "Leaving Earth", sub2: [
                {id: "1.2.1", title: "Losing his mother"},
                {id: "1.2.2", title: "Raised by Ravagers"},
              ]},
              {id: "1.3", title: "Quest for the Orb", sub2: [
                {id: "1.3.1", title: "Discovering the Orb"},
                {id: "1.3.2", title: "Bounty hunters attack"},
                {id: "1.3.3", title: "Held in the Kyln"},
                {id: "1.3.4", title: "Saving Gamora"},
                {id: "1.3.5", title: "Prison break"},
                {id: "1.3.6", title: "Keeping the peace"},
                {id: "1.3.7", title: "Trouble on Knowhere"},
                {id: "1.3.8", title: "Meeting the Collector"},
                {id: "1.3.9", title: "Skirmish on Knowhere"},
                {id: "1.3.10", title: "Deal with Yondu"}
              ]},
              {id: "1.4", title: "Uniting the team", sub2: [
                {id: "1.4.1", title: "Deal with the Ravagers"},
                {id: "1.4.2", title: "Battle of Xandar"},
                {id: "1.4.3", title: "Self-sacrifice"},
                {id: "1.4.4", title: "The Guardians of the Galaxy"},
                {id: "1.4.5", title: "Battle on Sovereign"},
                {id: "1.4.6", title: "Escape from the Sovereign Fleet"}
              ]},
              {id: "1.5", title: "Reunion with his father", sub2: [
                {id: "1.5.1", title: "Meeting Ego"},
                {id: "1.5.2", title: "Bonding with Ego"},
                {id: "1.5.3", title: "Ego's treachery"},
                {id: "1.5.4", title: "Battle on Ego's planet"},
                {id: "1.5.5", title: "Yondu Udonta's sacrifice"}
              ]},
              {id: "1.6", title: "Life on the Quadrant", sub2: [
                {id: "1.6.1", title: "Yondu Udontu's funeral"},
                {id: "1.6.2", title: "Traveling in the galaxy"}
              ]},
              {id: "1.7", title: "Infinity War", sub2: [
                {id: "1.7.1", title: "Asgardian distress call"},
                {id: "1.7.2", title: "Tracking down the Reality Stone"},
                {id: "1.7.3", title: "Meeting the Avengers"},
                {id: "1.7.4", title: "Battle of Titan"},
                {id: "1.7.5", title: "Thanos' victory"},
                {id: "1.7.6", title: "Return to Earth"}
              ]},
              {id: "1.8", title: "Guardians reassembled", sub2: [
                {id: "1.8.1", title: "Tony Stark's funeral"},
                {id: "1.8.2", title: "Search for Gamora"}
              ]},
              {id: "1.9", title: "Adventures with Thor", sub2: [
                {id: "1.9.1", title: "Traveling the galaxy"},
                {id: "1.9.2", title: "Battle of Indigarr"},
                {id: "1.9.3", title: "Leaving to answer distress calls"}
              ]},
              {id: "1.10", title: "Operating from Knowhere", sub2: [
                {id: "1.10.1", title: "Buying Knowhere"},
                {id: "1.10.2", title: "Christmas celebration"},
                {id: "1.10.3", title: "Family revelations"},
                {id: "1.10.4", title: "Adam Warlock's attack"},
              ]},
              {id: "1.11", title: "Conflict with the High Evolutionary", sub2: [
                {id: "1.11.1", title: "Saving Rocket"},
                {id: "1.11.2", title: "Reunited with Gamora"},
                {id: "1.11.3", title: "Infiltration into the Orgoscope"},
                {id: "1.11.4", title: "Visiting Counter-Earth"},
                {id: "1.11.5", title: "Battle of Counter-Earth"},
                {id: "1.11.6", title: "Fighting the High Evolutionary"}
              ]},
              {id: "1.12", title: "Moving back to Earth", sub2: [
                {id: "1.12.1", title: "Leaving the Guardians"},
                {id: "1.12.2", title: "Reunited with his grandfather"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Former powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Earth memorabilia"},
              {id: "3.4", title: "Vehicles"}
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
          <li>Peter Quill (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Peter Quill (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Peter Quill</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6c/Star-Lord_Infobox.jpg" alt="Peter Quill" />
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

export default PeterQuillMCU;