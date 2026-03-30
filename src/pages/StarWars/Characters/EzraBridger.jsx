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
                {id: "2.1.1", title:""},
                {id: "2.1.2", title:""}
              ]},
              {id: "2.2", title: ""},
              {id: "2.3", title: ""},
              {id: "2.4", title: ""},
              {id: "2.5", title: ""},
              {id: "2.6", title: ""},
              {id: "2.7", title: ""},
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