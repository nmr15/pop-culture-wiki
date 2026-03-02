import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AvengersInfinityWar = () =>
{
  useEffect(() =>
  {
    document.title = "Avengers: Infinity War - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development", sub2: [
                {id: "3.1.1", title: "Background"},
                {id: "3.1.2", title: "Announcement"},
                {id: "3.1.3", title: "Titles"}
              ]},
              {id: "3.2", title: "Writing", sub2: [
                {id: "3.2.1", title: "Process"},
                {id: "3.2.2", title: "Story"},
                {id: "3.2.3", title: "Character selection"},
                {id: "3.2.4", title: "Character arcs"}
              ]},
              {id: "3.3", title: "Pre-production", sub2: [
                {id: "3.3.1", title: "Casting"},
                {id: "3.3.2", title: "Design"},
                {id: "3.3.3", title: "Filming"}
              ]},
              {id: "3.4", title: "Filming"},
              {id: "3.5", title: "Post-production"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Avengers: Infinity War</li>
        </ul>
        <div>
          <h1 className="article-heading">Avengers: Infinity War</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Avengers: Infinity War</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" alt="Avengers: Infinity War poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data">
                <Link>Anthony Russo</Link> <br />
                <Link>Joe Russo</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_marvel_film">Captain Marvel</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/spiderman_far_from_home">Spider-Man: Far From Home</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Drax</b> is an intergalactic criminal and a former member of the <Link>Guardians of the Galaxy</Link>. He sought revenge on
            <Link> Ronan the Accuser</Link> for killing his wife and daughter, and went on a rampage across the galaxy, ending with him becoming known
            as <b>Drax the Destroyer</b>, and being imprisoned by the <Link>Nova Corps</Link> in the <Link>Kyln</Link>. There, Drax became uneasy allies
            with <Link to="/mcu/peter_quill">Star-Lord</Link>, <Link to="/mcu/gamora">Gamora</Link>, <Link to="/mcu/rocket">Rocket</Link>, and
            <Link to="/mcu/groot">Groot</Link>. Together, they broke out of the Kyln and became ambroiled in the quest for the orb. After the Battle of
            Xandar, in which he finally exacted his vengeance on Ronan, Drax left <Link>Xandar</Link> with the other Guardians but not before declaring
            <Link> Thanos</Link> as his next target.
          </p>
          <p>
            Following the Guardians, Drax assisted in killing the Abilisk for the Sovereign people, only for Rocket to betray them. Drax followed the
            Guardians as they encountered <Lin>Ego</Lin>, the long-lost father of Star-Lord. Along the way, he developed a close bond with
            <Link to="/mcu/mantis"> Mantis</Link>, who soon revealed that Ego's true plan was to destroy and rebuild the entire universe. Drax and his
            fellow Guardians defeated Ego, saving the galaxy once more but at the cost of <Link>Yondu Udonta</Link>'s self-sacrifice.
          </p>
          <p>
            Four years, the Guardians of the Galaxy joined up with <Link to="/mcu/thor">Thor</Link> and the <Link>Avengers</Link> in trying to stop
            Thanos from obtaining the <Link>Infinity Stones</Link>. When Thanos gathered all of the stones, he used them to eradicate half the universe's
            population, including Drax and the Guardians, except Rocket and <Link to="/mcu/nebula">Nebula</Link>. Five years after the <Link>Snap</Link>,
            the remaining Avengers successfully gathered the Infinity Stones from different points in the past and
            <Link to="/mcu/bruce_banner">Hulk</Link> resurrected the victims of the Snap, restoring Drax bak to life. He then participated and survived
            the Battle of Earth, attended <Link to="/mcu/tony_stark">Tony Stark</Link>'s funeral, and rejoined the Guardians of the Galaxy.
          </p>
          <p>
            Drax continued to defend the galaxy with his team, on missions including the Battle of Indigarr. After Thor left the group, Drax and the
            other Guardians aided planets who had their gods killed by <Link>Gorr the God Butcher</Link>. Eventually, Drax joined the group in
            rebuilding <Link>Knowhere</Link> and establishing it as their new headquarters. To make Star-Lord happy, Drax and Mantis went to Earth to
            abdut Kevin Bacon as a Christmas present, much to Star-Lord's disdain. Their spirits changed once Bacon agreed to celebrate Christmas at
            Knowhere, bringing joy to Star-Lord all the same.
          </p>
          <p>
            Drax joined the Guardians in thwarting an attempt made by <Link to="/mcu/adam_warlock">Adam Warlock</Link> on the orders of the
            <Link> High Evolutionary</Link> to abduct Rocket. The Guardians discovered a kill switch embedded in Rocket preventing them from treating
            his wounds, leading them on a mission to retrieve the override code, venturing first to the Orgoscope and then Counter-Earth. After saving
            Rocket, the team mounted a mission to liberate the High Evolutionary's imprisoned test subjects from Arête Laboratories, overwhelming waves
            of Hell Spawn and defeating the High Evolutionary, before Drax personally saved his life and took him custody. Drax opted to leave the
            Guardians in order to help raise the rescued Star Children on Knowhere, having reignited his passion for parenting upon encountering them.
          </p>
        </div>
      </main>
    </>
  )
}

export default AvengersInfinityWar;