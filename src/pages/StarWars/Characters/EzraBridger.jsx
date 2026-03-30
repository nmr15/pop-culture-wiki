import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const EzraBridger = () =>
{
  useEffect(() =>
  {
    document.title = "Ezra Bridger - Pop Culture Wiki";
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
              {id: "1.2", title: "Voice acting"}
            ]}
          />
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Childhood", sub2: [
                {id: "2.1.1", title: "Child under the Empire"},
                {id: "2.1.2", title: "Gladiator night"}
              ]},
              {id: "2.2", title: "Joining the Spectres", sub2: [
                {id: "2.2.1", title: "Early encounters with the Spectres"},
                {id: "2.2.2", title: "Mission to steal Imperial weapons"},
                {id: "2.2.3", title: "The mailoorun hunt"},
                {id: "2.2.4", title: "Mission to Osisis Station"},
                {id: "2.2.5", title: "Stygeon Prime"},
                {id: "2.2.6", title: "The Imperial Academy"},
                {id: "2.2.7", title: "Disaster at Fort Anaxes"},
                {id: "2.2.8", title: "Supply run to Keller"},
                {id: "2.2.9", title: "Empire Day"},
                {id: "2.2.10", title: "Jedi trials"},
                {id: "2.2.11", title: "Dealing with Lando"},
                {id: "2.2.12", title: "The false rebel"},
                {id: "2.2.13", title: "Confronting Tarkin"},
              ]},
              {id: "2.3", title: "The rebellion", sub2: [
                {id: "2.3.1", title: "Raid on Area Null"},
                {id: "2.3.2", title: "Rescuing a defector"},
                {id: "2.3.3", title: "Escaping Darth Vader"},
                {id: "2.3.4", title: "Meeting the lost commanders"},
                {id: "2.3.5", title: "Encountering a double trouble"},
                {id: "2.3.6", title: "Working with a pirate"},
                {id: "2.3.7", title: "Lightsaber training with Ahsoka"},
                {id: "2.3.8", title: "Mission to Ibaar"},
                {id: "2.3.9", title: "Mishap at Garel City"},
                {id: "2.3.10", title: "Escaping the Imperial Interdictor"},
                {id: "2.3.11", title: "Rescuing infants"},
                {id: "2.3.12", title: "Return to Lothal"},
                {id: "2.3.13", title: "Trouble at Concord Dawn"},
                {id: "2.3.14", title: "Rediscovery of Lira San"},
                {id: "2.3.15", title: "Joining forces with the purrgil"},
                {id: "2.3.16", title: "Mission to Ryloth"},
                {id: "2.3.17", title: "Mission to Geonosis"},
                {id: "2.3.18", title: "Return to the Lothal temple"},
                {id: "2.3.19", title: "Heist at Horizon Base"},
                {id: "2.3.20", title: "Establishing a new base"},
                {id: "2.3.21", title: "Mission to Malachor", sub3: [
                  {id: "2.3.21.1", title: "The Old Master"},
                  {id: "2.3.21.2", title: "A brush with the dark side"}
                ]},
                {id: "2.3.22", title: "Rescuing Hondo"},
                {id: "2.3.23", title: "Heist at Reklam Station", sub3: [
                  {id: "2.3.23.1", title: "Stealing starfighters"},
                  {id: "2.3.23.2", title: "Escaping Reklam Station"}
                ]},
                {id: "2.3.24", title: "The two holocrons"},
                {id: "2.3.25", title: "Waiting for Sabine"},
                {id: "2.3.26", title: "Return to Ryloth"},
                {id: "2.3.27", title: "Peacemaker of Agamar"},
                {id: "2.3.28", title: "Mission to Concord Dawn"},
                {id: "2.3.29", title: "Evacuation of Mykap"},
                {id: "2.3.30", title: "Mission to Wynkahthu"},
                {id: "2.3.31", title: "Undercover on Lothal", sub3: [
                  {id: "2.3.31.1", title: "Reuniting with old friends"},
                  {id: "2.3.31.2", title: "From foe to friend"}
                ]},
                {id: "2.3.32", title: "The Specter of Maul"},
                {id: "2.3.33", title: "Mission on Geonosis"},
                {id: "2.3.34", title: "Training exercise"},
                {id: "2.3.35", title: "Sabine's trials"},
                {id: "2.3.36", title: "Mission to Krownest"},
                {id: "2.3.37", title: "Rescuing Agent Kallus"},
                {id: "2.3.38", title: "Ferrying Mon Mothma"}
              ]},
              {id: "2.4", title: "Alliance to restore the Republic", sub3: [
                {id: "2.4.1", title: "Saving Chopper from himself"},
                {id: "2.4.2", title: "Mission to Tatooine"},
                {id: "2.4.3", title: "Siege of Atollon"},
                {id: "2.4.4", title: "War on Mandalore", sub2: [
                  {id: "2.4.4.1", title: "Rescuing Alrich"},
                  {id: "2.4.4.2", title: "Destroying the Duchess"}
                ]},
                {id: "2.4.5", title: "The Jalindi Relay"},
                {id: "2.4.6", title: "Soldiering with Saw Gerrera"},
                {id: "2.4.7", title: "Return to Lothal"},
                {id: "2.4.8", title: "Stealing the TIE Defender Elite", sub3: [
                  {id: "2.4.8.1", title: "An unexpected dogfight"},
                  {id: "2.4.8.2", title: "Recovering the hyperdrive"}
                ]},
                {id: "2.4.9", title: "Liberating prisoners"},
                {id: "2.4.10", title: "Strike on Lothal"},
                {id: "2.4.11", title: "Rescuing Hera"},
                {id: "2.4.12", title: "Morning Kanan's passing"},
                {id: "2.4.13", title: "Return to the Lothal Jedi Temple", sub3: [
                  {id: "2.4.13.1", title: "Behind enemy lines"},
                  {id: "2.4.13.2", title: "The World Between Worlds"}
                ]},
                {id: "2.4.14", title: "Trapping Governor Pryce"},
                {id: "2.4.15", title: "Liberation of Lothal", sub3: [
                  {id: "2.4.15.1", title: "Capturing the Dome"},
                  {id: "2.4.15.2", title: "Facing Thrawn and the Emperor"}
                ]},
                {id: "2.4.16", title: "Into the unkown"}
              ]},
              {id: "2.5", title: "Exile from the galaxy", sub2: [
                {id: "2.5.1", title: "Time on Peridea"}
              ]},
              {id: "2.6", title: "The conflict with Thrawn", sub2: [
                {id: "2.6.1", title: "The search for Bridger"},
                {id: "2.6.2", title: "Return to action", sub3: [
                  {id: "2.6.2.1", title: "Discovery by Wren"},
                  {id: "2.6.2.2", title: "Skirmish with Thrawn's forces"},
                  {id: "2.6.2.3", title: "Pursuing the Grand Admiral"},
                  {id: "2.6.2.4", title: "Return to the galaxy"}
                ]}
              ]},
              {id: "2.7", title: "Legacy"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Personality and traits</a></li>
          <Collapse 
            id="4"
            item="Powers and abilities"
            sub={[
              {id: "4.1", title: "Force abilities"},
              {id: "4.2", title: "Lightsaber skills"},
              {id: "4.3", title: "Other abilities"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Equipment</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Ezra Bridger</li>
        </ul>
        <div>
          <h1 className="article-heading">Ezra Bridger</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ezra Bridger</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/3/30/Ezra_HS.png" alt="Ezra Bridger" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Taylor Gray</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Eman Esfandi</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ezra Bridger</b> was a human male <Link>Jedi</Link> <Link>Padawan</Link>, a freedom fighter, and a revolutionary leader in the early rebellion against the
            <Link> Galactic Empire</Link>. He was born on Empire Day in 19 BBY to Ephraim and Mira Bridger. His parents' public criticism of the Empire led to their imprisonment,
            leaving Bridger an orphan on the planet <Link>Lothal</Link> as a child. He joined the rebel crew of the <Link>Ghost</Link> in 5 BBY and was trained in the ways of
            <Link> the Forc</Link> by <Link to="/starwars/kanan_jarrus">Kanan Jarrus</Link>. With a particular connection to nature and other living beings, Bridger's abilities grew
            quickly, and a message of hope he broadcast in the Lothal sector inspired a number of rebel cells to begin working together to fight the Empire.
          </p>
          <p>
            In 4 BBY, Bridger learned that his parents were killed while attempting to escape from prison. The young Jedi, already having to struggle with the
            <Link> the dark side</Link>, became more conflicted, coming to a head on the ancient <Link>Sith</Link> world of <Link>Malachor</Link> where her recovered a Sith
            <Link> holocron</Link> in the hoped of destroying the Sith. He also encountered the former Sith Lord <Link to="/starwars/darth_maul">Maul</Link>, who hoped to make
            Bridger his apprentice, particularly once Bridger used the dark side to open the holocron. This briefly strained his apprenticeship with Jarrus, who was blinded by
            Maul on Malachor, but the two repaired their relationship and continued to progress as Jedi.
          </p>
          <p>
            With his powers growing stronger, especially his natural skill at communcating with other living beings. Bridger took on more leadership roles in the rebellion,
            including helping <Link to="/starwars/captain_rex">Captain CT-7567</Link> "Rex" and a surviving battalion of <Link>Separatist Alliance</Link> <Link>battle froids</Link>
            make peace and bring a sense of closure to the unresolved <Link>Clone Wars</Link>. Bridger also came into conflict with
            <Link to="/starwars/grand_admiral_thrawn"> Grand Admiral Thrawn</Link>, helped fellow crewmate <Link to="/starwars/sabine_wren">Sabine Wren</Link> in her quest to
            reunite the <Link>Mandalorian</Link> people. and sought to find <Link>Jedi Master</Link> <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link>, whom Bridger
            believed was key to destroying the Sith.
          </p>
          <p>
            In 1 BBY, Bridger managed to free his people from the Empire's control during the liberation of Lothal with the help of the Purgil. Towards the end of the battle, he
            and Thrawn were taken into <Link>hyperspace</Link> by the purgil. This opening allowed the Lothal resistance group on the ground to free the planet by destroying the
            Imperial dome. After the fall of the Empire, Wren and <Link to="/starwars/ahsoka_tano">Ahsoka Tano</Link> set off on a journey to find Bridger and bring him home.
          </p>
          <p>
            After almost a decade of being stranded on the planet Peridea in another galaxy. Ezra reunited with Sabine and Ahsoka as they came to Peridea alongside a force that
            were looking for Thrawn. After Thrawn successfully escaped Peridea on his <Link>Star Destroyer</Link> the Chimaera, Ezra escaped too by hitching a ride on it, albeit
            at the cost of leaving Sabine and Ahsoka behind.
          </p>
        </div>
      </main>
    </>
  )
}

export default EzraBridger;