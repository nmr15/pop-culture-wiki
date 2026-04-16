import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AdmiralAckbar = () =>
{
  useEffect(() =>
  {
    document.title = "Admiral Ackbar - Pop Culture Wiki";
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
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "The Clone Wars", sub2: [
                {id: "1.2.1", title: "Captain of the Mon Calamari Guard"},
                {id: "1.2.2", title: "Civil war on Mon Cala"},
                {id: "1.2.3", title: "Counter-attack"}
              ]},
              {id: "1.3", title: "Imperial era", sub2: [
                {id: "1.3.1", title: "Defending Mon Cala", sub3: [
                  {id: "1.2.1.1", title: "Prelude to battle"},
                  {id: "1.2.1.2", title: "Conflict"}
                ]}
              ]},
              {id: "1.4", title: "Galactic civil war", sub2: [
                {id: "1.4.1", title: "Battle of Fostar Haven"},
                {id: "1.4.2", title: "Evacuating Yavin 4"},
                {id: "1.4.3", title: "Mission to Rodia"},
                {id: "1.4.4", title: "Mission to Fex"},
                {id: "1.4.5", title: "Mission to Denon"},
                {id: "1.4.6", title: "Hijacking the Harbinger"},
                {id: "1.4.7", title: "Mutiny on Mon Cala"},
                {id: "1.4.8", title: "Assault on the Mako-Ta space docks"},
                {id: "1.4.9", title: "Prior to Shu-Torun"},
                {id: "1.4.10", title: "Working with Rogue Squadron"}
              ]},
              {id: "1.5", title: "Road to Endor", sub2: [
                {id: "1.5.1", title: "Hoth"},
                {id: "1.5.2", title: "Battle at Ab Dalis"},
                {id: "1.5.3", title: "Unity Day attack"},
                {id: "1.5.4", title: "Second Death Star revealed"},
                {id: "1.5.5", title: "Chaos on the Home One"},
                {id: "1.5.6", title: "Siege of Inyusu Tor"},
                {id: "1.5.7", title: "Trial of Lando Calrissian"},
                {id: "1.5.8", title: "Preparing to strike"},
                {id: "1.5.9", title: "Assassination attempt on Mothma"},
                {id: "1.5.10", title: "Battle of Endor"}
              ]},
              {id: "1.6", title: "New Republic", sub2: [
                {id: "1.6.1", title: "Rebellion on Akiva"},
                {id: "1.6.2", title: "Commanding the starfleet"},
                {id: "1.6.3", title: "Prelude to Jakku"},
                {id: "1.6.4", title: "Defeating the Empire"},
                {id: "1.6.5", title: "Proposing a new X-wing"}
              ]},
              {id: "1.7", title: "The Resistance", sub2: [
                {id: "1.7.1", title: "Early Resistance days"},
                {id: "1.7.2", title: "Imprisonment and escape"},
                {id: "1.7.3", title: "The Rebel files"},
                {id: "1.7.4", title: "Sending J-Squadron on a mission"},
                {id: "1.7.5", title: "Starkiller base"},
                {id: "1.7.6", title: "Death"}
              ]},
              {id: "1.8", title: "Legacy"}
            ]}
          />
          <Collapse 
            id="2"
            item="Personality and traits"
            sub={[
              {id: "2.1", title: "Overview"},
              {id: "2.2", title: "Relationships", sub2: [
                {id: "2.2.1", title:"Aftab Ackbar"},
                {id: "2.2.2", title:"Leia Organa"},
                {id: "2.2.3", title:"Lee-Char"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Skills and abilities</a></li>
          <li className="sidebar-list-item"><a href="#4">Equipment</a></li>
          <Collapse 
            id="5"
            item="Concept and creation"
            sub={[
              {id: "5.1", title: "Conception"},
              {id: "5.2", title: "Costume and puppet"},
              {id: "5.3", title: "Filming"}
            ]}
          />
          <Collapse 
            id="6"
            item="Portrayals"
            sub={[
              {id: "6.1", title: "Timothy Rose"},
              {id: "6.2", title: "Erik Bauersfeld"},
              {id: "6.3", title: "Other performances"}
            ]}
          />
          <Collapse 
            id="7"
            item="Cultural impact"
            sub={[
              {id: "7.1", title: "Critical reception"},
              {id: "7.2", title: "It's a trap!"},
              {id: "7.3", title: "Response to Ackbar's death"},
              {id: "7.4", title: "Cultural references"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Admiral Ackbar</li>
        </ul>
        <div>
          <h1 className="article-heading">Admiral Ackbar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Admiral Ackbar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/f/fb/Ackbar_HS.jpg" alt="Admiral Ackbar" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                Timothy Rose (Episode VI-VII) <br />
                Elden Bennett (Ahsoka)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                Erik Baursfeld (Episode VI-VII) <br />
                Tom Kane (Episode VIII, Star Wars: Battlefront (2004 video game), Star Wars: Battlefront 2: (20117 video game)) <br />
                Artt Butler (Star Wars: The Clone Wars)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Gial Ackbar</b> was a male <Link>Mon Calamari</Link> veteran soldier and prominent revolutionary leader during the <Link>Clone Wars</Link>, the
            <Link> Galactic Civil War</Link>, the Cold War, and the war between the <Link>Resistance</Link> and the <Link>First Order</Link>. Throughout his
            sixty years of service, Ackbar was regarded as a brilliant tactician.
          </p>
          <p>
            Ackbar hailed from the planet <Link>Mon Cala</Link> and served as the captain of the Mon Calamari Guard. During the Clone Wars, Ackbar fought in the
            Battle of Mon Cala, in which he helped to secure Prince Lee-Char's ascent as King of Mon Cala and repel the
            <Link> Confederacy of Independent Systems</Link>. After the rise of the <Link>Galactic Empire</Link>, Ackbar became the foremost military commander in
            the Alliance to Restore the Republic, emerging as a symbol of defiance against the Empire's subjugation of non-humans. His presence attracted Mon
            Calamari support for the Alliance, thus supplying the Mon Calamari star cruiser that made up a bulk of the Alliance Fleet.
          </p>
          <p>
            From his command ship of Home One, supreme commander Ackbar acted as the fleet commander during the Battle of Endor, in which the Alliance successfully
            mounted an attack that led to the destruction of the Empire's <Link>second Death Star</Link> and the death of
            <Link to="/starwars/sheev_palpatine">Emperor Palpatine</Link>. After the Battle of <Link>Endor</Link>, the Alliance formed the <Link>New Republic</Link>.
            Ackbar became a fleet admiral of the New Republic Defense Fleet and led the New Republic to its victory over the Empire during the Battle of Jakku.
            After the battle on <Link>Jakku</Link> ended, the Empire retreated into the Unknown Region and Ackbar retired on Mon Cala.
          </p>
          <p>
            By 34 ABY, the emerging threat of the First Order, which arose from the ashes of the Empire, led Princess <Link to="/starwars/leia_organa">Leia
            Organa</Link> to form the Resistance without the support of the New Republic that had turned a blind eye to the First Order. Leia, the general of the
            Resistance, coaxed Ackbar out of his retirement to serve in the Resistance. After reclaiming his commission as an Admiral, Ackbar served in the
            Resistance base on D'Qar, where he helped oversee the battle to destroy the First Order superweapon known as <Link>Starkiller Base</Link>.
          </p>
          <p>
            Ackbar was later present on the bridge of the Resistance's flagship the Raddus when the Resistance evacuated from D'Qar, but he was killed when two
            First Order TIE/sf space superiority fighters, as well as <Link>Kylo Ren</Link>'s TIE silencer attacked the ship after it exited <Link>hyperspace</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default AdmiralAckbar;