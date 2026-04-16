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
                {id: "2.6.2", title: "Sige of Mandalore", sub3: [
                  {id: "2.6.2.1", title: "Air assault"},
                  {id: "2.6.2.2", title: "The Undercity"},
                  {id: "2.6.2.3", title: "Conference with Kenobi"},
                  {id: "2.6.2.4", title: "Integrating Almec"},
                  {id: "2.6.2.5", title: "The final confrontation"}
                ]},
                {id: "2.6.3", title: "Aftermath"},
                {id: "2.6.4", title: "Order 66", sub3: [
                  {id: "2.6.4.1", title: "Saving Rex"},
                  {id: "2.6.4.2", title: "Escaing the Tribunal"},
                  {id: "2.6.4.3", title: "Fight in the hangar"}
                ]},
                {id: "2.6.5", title: "Burying the dead"}
              ]},
              {id: "2.7", title: "Age of the Empire", sub2: [
                {id: "2.7.1", title: "Life on Thabeska"},
                {id: "2.7.2", title: "Raada", sub3: [
                  {id: "2.7.2.1", title: "A pastoral refuge"},
                  {id: "2.7.2.2", title: "Stockpiling supplies"},
                  {id: "2.7.2.3", title: "Sowing seeds of rebellion"},
                  {id: "2.7.2.4", title: "Building a resistance"},
                  {id: "2.7.2.5", title: "Sabotage mission"},
                  {id: "2.7.2.6", title: "An abortive uprising"},
                  {id: "2.7.2.7", title: "A resistance in hiding"}
                ]},
                {id: "2.7.3", title: "Return to the Fardis", sub3: [
                  {id: "2.7.3.1", title: "Reestablishing work"},
                  {id: "2.7.3.2", title: "Duties"},
                  {id: "2.7.3.3", title: "Final departure"}
                ]},
                {id: "2.7.4", title: "Entanglements"},
                {id: "2.7.5", title: "A new ally"},
                {id: "2.7.6", title: "Planning her return to Raada"},
                {id: "2.7.7", title: "Return to Raada", sub3: [
                  {id: "2.7.7.1", title: "Voyage"},
                  {id: "2.7.7.2", title: "Reunion with Miara"},
                  {id: "2.7.7.3", title: "Duel with the Sixth Brother"},
                  {id: "2.7.7.4", title: "The evacuation"}
                ]},
                {id: "2.7.8", title: "Joining Organa's rebellion"},
                {id: "2.7.9", title: "Deciding to take an active role"},
                {id: "2.7.10", title: "Vader's vision"}
              ]},
              {id: "2.8", title: "Fighting for the rebellion", sub2: [
                {id: "2.8.1", title: "Capturing Admiral Gann"},
                {id: "2.8.2", title: "The Bardottan Sphere"},
                {id: "2.8.3", title: "Undercover messenger"},
                {id: "2.8.4", title: "A lesson for Bridger"},
                {id: "2.8.5", title: "Attempting to rescue Janard"},
                {id: "2.8.6", title: "The Siege of Lothal"},
                {id: "2.8.7", title: "Reuniting with Rex"},
                {id: "2.8.8", title: "Discovering more Inquisitors"},
                {id: "2.8.9", title: "Rescuing infants"},
                {id: "2.8.10", title: "Anguish on Lothal"},
                {id: "2.8.11", title: "Twilight of the apprentice", sub3: [
                  {id: "2.8.11.1", title: "Traveling to Malachor"},
                  {id: "2.8.11.2", title: "The fateful duel"}
                ]},
                {id: "2.8.12", title: "The World Between Worlds"}
              ]},
              {id: "2.9", title: "Lost and found"},
              {id: "2.10", title: "Thrawn campaign", sub2: [
                {id: "2.10.1", title: "Dealing with Morgan Elsbeth", sub3: [
                  {id: "2.10.1.1", title: "Fight on Corvus"},
                  {id: "2.10.1.2", title: "The Mandalorian and the foundling"},
                  {id: "2.10.1.3", title: "Liberating the city"}
                ]},
                {id: "2.10.2", title: "Visiting Ossus"},
                {id: "2.10.3", title: "Searching for Grand Admiral Thrawn", sub3: [
                  {id: "2.10.3.1", title: "The ancient temple"},
                  {id: "2.10.3.2", title: "Speaking with Syndulla"},
                  {id: "2.10.3.3", title: "A difficult reunion"},
                  {id: "2.10.3.4", title: "Pursuit of the Empire"},
                  {id: "2.10.3.5", title: "Corellia Invesigation"},
                  {id: "2.10.3.6", title: "Skirmish over Seatos"}
                ]}
              ]},
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
          <p>
            <b>Ahsoka Tano</b> was a female <Link>Rogruta</Link> who was a Force-sensitive outcast from the <Link>Jedi order</Link>. After the <Link>Clone Wars</Link>,
            she helped establish a network of various rebel cells against the <Link>Galactic Empire</Link>. Ahsoka was discovered on her homeworld of Shill by
            <Link>Jedi Master</Link> <Link>Plo Koon</Link>, who brought her to the <Link>Jedi Temple</Link> on <Link>Coruscant</Link> to receive Jedi training.
            Following the outbreak of the CloneWars, Jedi Grand Master <Link to="/starwars/yoda">Yoda</Link> assigned the young Ahsoka to be the <Link>Padawan</Link>
            learner of <Link>Jedi Knight</Link> <Link to="/starwars/anakin_skywalker">Anakin Skywalker</Link>, who nicknamed her "<b>Snips</b>" when she joined him
            at the Battle of Christophsis. Whereas Ahsoka was eager to prove herself, Anakin had a reputation for recklessness, and they had a rather
            difficult start as master and apprentice. Yet they worked together to rescue Rotta, the son of crime lord
            <Link to="/starwars/jabba_the_hutt">Jabba the Hutt</Link>, and returned Rotta to his father, thus facilitating a crucial alliance between the Hutt Clan and
            the <Link>Galactic Republic</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default AhsokaTano;