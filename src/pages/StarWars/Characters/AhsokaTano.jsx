import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AhsokaTano = () =>
{
  useEffect(() =>
  {
    document.title = "Ahsoka Tano - Pop Culture Wiki";
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
              {id: "1.2", title: "Writing"},
              {id: "1.3", title: "Voice acting"},
              {id: "1.4", title: "Appearance"}
            ]}
          />
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Childhood"},
              {id: "2", title: "In the midst of galactic war", sub2: [
                {id: "2.2.1", title: "Becoming Skywalker's Padawan"},
                {id: "2.2.2", title: "Liberation of Chirstophsis"},
                {id: "2.2.3", title: "Battle of Teth and rescuing Jabba's son"},
                {id: "2.2.4", title: "The Malevolence"},
                {id: "2.2.5", title: "Battle of Bothawui and search for R2-D2"},
                {id: "2.2.6", title: "Capture of Viceroy Gunray"},
                {id: "2.2.7", title: "Rescue of Vanqor"},
                {id: "2.2.8", title: "Stranded on Maridun"},
                {id: "2.2.9", title: "Containing the Blue Shadow Virus"},
                {id: "2.2.10", title: "Battle of Ryloth"},
                {id: "2.2.11", title: "First Battle of Felucia and protecting the archives"},
                {id: "2.2.12", title: "Confronting Cad Bane"},
                {id: "2.2.13", title: "An unlikely alliance"},
                {id: "2.2.14", title: "Second Battle of Geonosis"},
                {id: "2.2.15", title: "Incident aboard TB-73"}
              ]},
              {id: "2.3", title: "Further adventures and lessons", sub2: [
                {id: "2.3.1", title: "An important lesson"},
                {id: "2.3.2", title: "The hunt for Aurra Sing"},
                {id: "2.3.3", title: "Undercover on Mandalore"},
                {id: "2.3.4", title: "Return of Aurra Sing"},
                {id: "2.3.5", title: "Rescuing Papanoida's daughters"},
                {id: "2.3.6", title: "A lesson from Yoda"},
                {id: "2.3.7", title: "Working with Senator Amidala", sub3: [
                  {id: "2.3.7.1", title: "Mission to Alderaan"},
                  {id: "2.3.7.2", title: "Training session and assignment"},
                  {id: "2.3.7.3", title: "Defeating a changeling"},
                  {id: "2.3.7.4", title: "Training the senator"}
                ]},
                {id: "2.3.8", title: "Skirmish on Coruscant"},
                {id: "2.3.9", title: "Lessons in politics"}
              ]},
              {id: "2.4", title: "Continuation of the war", sub2: [
                {id: "2.4.1", title: "Journey to Mortis"},
                {id: "2.4.2", title: "Rejected"},
                {id: "2.4.3", title: "Rescuing Even Piell", sub3: [
                  {id: "2.4.3.1", title: "Scaling the cliff"},
                  {id: "2.4.3.2", title: "Freeing Master Piell"},
                  {id: "2.4.3.3", title: "Journey to the pipeline"},
                  {id: "2.4.3.4", title: "Plan B"},
                  {id: "2.4.3.5", title: "The rendezvous point"}
                ]},
                {id: "2.4.4", title: "The coordinates"},
                {id: "2.4.5", title: "Captured at Felucia"},
                {id: "2.4.6", title: "Campaign at Umbara"},
                {id: "2.4.7", title: "Combating the Zygerrian Slave Empire"},
                {id: "2.4.8", title: "Entanglement with Death Watch"},
                {id: "2.4.9", title: "Training Onderon's rebels"},
                {id: "2.4.10", title: "The Gathering"},
                {id: "2.4.11", title: "Bombing at the Jedi Temple"}
              ]},
              {id: "2.5", title: "A new path", sub2: [
                {id: "2.5.1", title: "Leaving her old life behind"},
                {id: "2.5.2", title: "Meeting the Martez sisters"},
                {id: "2.5.3", title: "Escape from Oba Diah", sub3: [
                  {id: "2.5.3.1", title: "A job gone awry"},
                  {id: "2.5.3.2", title: "Imprisoned on Oba Diah"},
                  {id: "2.5.3.3", title: "Captured once again"}
                ]},
                {id: "2.5.4", title: "Another new path"}
              ]},
              {id: "2.6", title: "Shattered", sub2: [
                {id: "2.6.1", title: "The last meeting"},
                {id: "2.6.2", title: "Sige of Mandalore"},
                {id: "2.6.3", title: "Aftermath"},
                {id: "2.6.4", title: "Order 66"},
                {id: "2.6.5", title: "Burying the dead"}
              ]},
              {id: "2.7", title: "Age of the Empire"},
              {id: "2.8", title: "Fighting for the rebellion"},
              {id: "2.9", title: "Lost and found"},
              {id: "2.10", title: "Thrawn campaign"},
              {id: "2.11", title: "Legacy"}
            ]}
          />
          <Collapse 
            id="3"
            item="Personality and traits"
            sub={[
              {id: "3.1", title: "The fearless Force-sensitive"},
              {id: "3.2", title: "Relationship with Anakin Skywalker", sub2: [
                {id: "3.2.1", title: "Anakin's student"},
                {id: "3.2.2", title: "Vader's nemesis"},
                {id: "3.2.3", title: "After Anakin's death"}
              ]}
            ]}
          />
          <Collapse 
            id="4"
            item="Powers and abilities"
            sub={[
              {id: "4.1", title: "Lightsaber abilities"},
              {id: "4.2", title: "Force powers"},
              {id: "4.3", title: "Other abilities"}
            ]}
          />
          <Collapse 
            id="5"
            item="Equipment"
            sub={[
              {id: "5.1", title: "Weapons"},
              {id: "5.2", title: "Attire"},
              {id: "5.3", title: "Outfits", sub2: [
                {id: "5.3.1", title: "Typical garb"},
                {id: "5.3.2", title: "Specialized clothing"}
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Ahsoka Tano</li>
        </ul>
        <div>
          <h1 className="article-heading">Ahsoka Tano</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ahsoka Tano</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/5/5c/Ahsoka-TCW.png" alt="Ahsoka Tano" />
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

export default AhsokaTano;