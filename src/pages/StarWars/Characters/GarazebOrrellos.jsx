import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const GarazebOrrellos = () =>
{
  useEffect(() =>
  {
    document.title = "Garazeb Orrellos - Pop Culture Wiki";
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
              {id: "1.2", title: "Age of the Empire", sub2: [
                {id: "1.2.1", title: "The Spectres"},
                {id: "1.2.2", title: "Enter Ezra Bridger"},
                {id: "1.2.3", title: "Stealing the T-7 disruptors"},
                {id: "1.2.4", title: "The meiloorun hunt"},
                {id: "1.2.5", title: "Mission to Stygeon Prime"},
                {id: "1.2.6", title: "Assaulting the Lothal Imperial Academy"},
                {id: "1.2.7", title: "Exploits at Fort Anaxes"},
                {id: "1.2.8", title: "Empire Day"},
                {id: "1.2.9", title: "Saving Mindiz"},
                {id: "1.2.10", title: "Enter Lando Calrissian"},
                {id: "1.2.11", title: "The false rebel"},
                {id: "1.2.12", title: "Rescuing Kanan"}
              ]},
              {id: "1.3", title: "The rebellion", sub2: [
                {id: "1.3.1", title: "Mission to Arkanis"},
                {id: "1.3.2", title: "Escaping the Siege of Lothal"},
                {id: "1.3.3", title: "Meeting the lost Commanders"},
                {id: "1.3.4", title: "Commander Meiloorun"},
                {id: "1.3.5", title: "Mission to Shantipole"},
                {id: "1.3.6", title: "The Imperial Interdictor"},
                {id: "1.3.7", title: "Mission to Takobo"},
                {id: "1.3.8", title: "Escape from Garel"},
                {id: "1.3.9", title: "Rendezvousing with Leia"},
                {id: "1.3.10", title: "Trouble at Concord Dawn"},
                {id: "1.3.11", title: "Journey to Lira San"},
                {id: "1.3.12", title: "Raid on the Asteroid Gas Refinery"},
                {id: "1.3.13", title: "Mission to Ryloth"},
                {id: "1.3.14", title: "Mission to Geonosis"},
                {id: "1.3.15", title: "Parting with the Jedi"},
                {id: "1.3.16", title: "Heist at Horizon Base"}
              ]},
              {id: "1.4", title: "Chopper Base", sub2: [
                {id: "1.4.1", title: "Building Chopper Base"},
                {id: "1.4.2", title: "Staying behind on Atollon"},
                {id: "1.4.3", title: "Rescuing Hondo Ohnaka"},
                {id: "1.4.4", title: "Heist at Reklam Station"},
                {id: "1.4.5", title: "Captives of Maul"},
                {id: "1.4.6", title: "Mission to Terakov"},
                {id: "1.4.7", title: "Return to Ryloth"},
                {id: "1.4.8", title: "Mission to Agamar"},
                {id: "1.4.9", title: "Trouble on Concord Dawn"},
                {id: "1.4.10", title: "Evacuation of Mykapo"},
                {id: "1.4.11", title: "Mission to Wynkahthu"},
                {id: "1.4.12", title: "Mission to the Lothal Imperial Factory"},
                {id: "1.4.13", title: "The Spectre of Maul"},
                {id: "1.4.14", title: "Mission on Geonosis"},
                {id: "1.4.15", title: "Guarding Chopper Base"},
                {id: "1.4.16", title: "Sabine's trials"},
                {id: "1.4.17", title: "Ferrying Mon Mothma"}
              ]},
              {id: "1.5", title: "Alliance to restore the Republic", sub2: [
                {id: "1.5.1", title: "Saving Chopper from himself"},
                {id: "1.5.2", title: "Maul's last stand"},
                {id: "1.5.3", title: "Battle of Atollon"},
                {id: "1.5.4", title: "Yavin 4"},
                {id: "1.5.5", title: "Mission to Jalindi"},
                {id: "1.5.6", title: "Returning to Lothal"},
                {id: "1.5.7", title: "The TIE/D Defender Elite heist"},
                {id: "1.5.8", title: "Commandeering the ore crawler"},
                {id: "1.5.9", title: "Strike on Lothal"},
                {id: "1.5.10", title: "Avenging Kanan"},
                {id: "1.5.11", title: "Mission to Lothal's Jedi Temple"},
                {id: "1.5.12", title: "Trapping Governor Pryce"},
                {id: "1.5.13", title: "Liberating Lothal", sub3: [
                  {id: "1.5.13.1", title: "Storming the Dome"},
                  {id: "1.5.13.2", title: "Restoring the shields"}
                ]}
              ]},
              {id: "1.6", title: "After Lothal's liberation"},
              {id: "1.7", title: "New Republic Era", sub2: [
                {id: "1.7.1", title: "Taking Kallus to Lira San"},
                {id: "1.7.2", title: "Joining the New Republic"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality and traits</a></li>
          <li className="sidebar-list-item"><a href="#3">Skills and abilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Garazeb Orrellos</li>
        </ul>
        <div>
          <h1 className="article-heading">Garazeb Orrellos</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Garazeb Orrellos</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/5/5c/GarazebSeasonOnePromo.jpg" alt="Garazeb Orrellos" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Steve Blum</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/starwars/rebels_series">Star Wars Rebels</Link> <br />
                <Link to="/starwars/the_mandalorian">The Mandalorian</Link> (1 episode)
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

export default GarazebOrrellos;