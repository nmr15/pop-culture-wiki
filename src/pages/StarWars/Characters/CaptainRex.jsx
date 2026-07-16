import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CaptainRex = () =>
{
  useEffect(() =>
  {
    document.title = "Captain Rex - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Creation and development</a></li>
          <Collapse 
            id="2"
            item="Fictional biography"
            sub={[
              {id: "2.1", title: "Early life"},
              {id: "2.2", title: "The Clone Wars", sub2: [
                {id: "2.2.1", title: "Early battles"},
                {id: "2.2.2", title: "Siege of Hisseen"},
                {id: "2.2.2", title: "Battle of Christophsis"},
                {id: "2.2.4", title: "Battle of Teth"},
                {id: "2.2.5", title: "Battle of Mimban"},
                {id: "2.2.6", title: "Skirmish on the Rishi Moon"},
                {id: "2.2.7", title: "Battle at Bothawul and Skytop Station"},
                {id: "2.2.8", title: "Battle above Quell and crashing on Maridun"},
                {id: "2.2.9", title: "Defense of Maridun"},
                {id: "2.2.10", title: "Battle of Orto Plutonia"},
                {id: "2.2.11", title: "Raid on Vindi's lab"},
                {id: "2.2.12", title: "Battle of Ryloth"},
              ]},
              {id: "2.3", title: "The conflict draws on", sub2: [
                {id: "2.3.1", title: "First Battle of Felucia"},
                {id: "2.3.2", title: "Battle of Devaron"},
                {id: "2.3.3", title: "Battle of Malastare"},
                {id: "2.3.4", title: "Second Battle of Geonosis"},
                {id: "2.3.5", title: "Battle of Saleucami"},
                {id: "2.3.6", title: "Skirmish on the Coronet"},
                {id: "2.3.7", title: "Skywalker's right-hand man"},
                {id: "2.3.8", title: "Battle of Kamino"},
                {id: "2.3.9", title: "Extraction on Lola Sayu"},
                {id: "2.3.10", title: "Return to Felucia"},
                {id: "2.3.11", title: "Role on Mon Cala"},
                {id: "2.3.12", title: "Battle of Horain"},
                {id: "2.3.13", title: "Battle of Umbara"},
                {id: "2.3.14", title: "Battle of Kiros and Kadavo"},
                {id: "2.3.15", title: "Training Onderonian rebels"},
              ]},
              {id: "2.4", title: "The end draws near", sub2: [
                {id: "2.4.1", title: "Hunting Ahsoka"},
                {id: "2.4.2", title: "Battle for Ringo Vinda and the biochip conspiracy"},
                {id: "2.4.3", title: "Banking Clan crisis"},
                {id: "2.4.4", title: "Redemption of Quinlan Vos"},
                {id: "2.4.5", title: "Rescuing Echo"},
                {id: "2.4.6", title: "Battle of Yerbana"},
                {id: "2.4.7", title: "Siege of Mandalore"},
                {id: "2.4.8", title: "Order 66"}
              ]},
              {id: "2.5", title: "Striking against the Empire", sub2: [
                {id:"2.5.1", title: "A new life"},
                {id:"2.5.2", title: "Tracking down the Bad Batch"},
                {id:"2.5.3", title: "Rescue of Gregor"},
                {id:"2.5.4", title: "Returning to Coruscant"},
              ]},
              {id: "2.6", title: "Agent of the Rebellion", sub2: [
                {id: "2.6.1", title: "Joining the Rebellion"},
                {id: "2.6.2", title: "Wits versus discipline"},
                {id: "2.6.3", title: "Infiltrating the Imperial Interdictor"},
                {id: "2.6.4", title: "Escape from Garel"},
                {id: "2.6.5", title: "Trouble at Concord Dawn"},
                {id: "2.6.6", title: "Mission to Geonosis"},
                {id: "2.6.7", title: "Finding a new base"},
                {id: "2.6.8", title: "Defending Chopper Base"},
                {id: "2.6.9", title: "Losing Ahsoka"},
                {id: "2.6.10", title: "Heist at Reklam Station"},
                {id: "2.6.11", title: "Making peace with the past", sub3: [
                  {id: "2.6.11.1", title: "The last battle"},
                  {id: "2.6.11.2", title: "An unofficial end" }
                ]},
                {id: "2.6.12", title: "Evactuation of Mykapo"},
                {id: "2.6.13", title: "Rescue of Onyo"},
                {id: "2.6.14", title: "The specter of Maul"},
                {id: "2.6.15", title: "Mission to Geonosis"},
                {id: "2.6.16", title: "Rescuing Kallus"},
              ]},
              {id: "2.7", title: "Alliance to Restore the Republic", sub2: [
                {id: "2.7.1", title: "Mon Mothma's speech"},
                {id: "2.7.2", title: "Ezra's errant mission"},
                {id: "2.7.3", title: "Defending Chopper Base"},
                {id: "2.7.4", title: "The Massassi Group"},
                {id: "2.7.5", title: "Mustering allies"},
                {id: "2.7.6", title: "Liberating Lothal"},
                {id: "2.7.7", title: "Battle of Endor"},
              ]},
              {id: "2.8", title: "Legacy"}
            ]}
          />
          <Collapse 
            id="3"
            item="Personality and traits"
            sub={[
              {id: "3.1", title: "Captain in the clone army"},
              {id: "3.2", title: "Friend to the Jedi"},
              {id: "3.3", title: "Soldier without a Republic"},
              {id: "3.4", title: "Relationship with his fellow veterans"},
              {id: "3.5", title: "Member of the Rebellion"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Skills and abilities</a></li>
          <li className="sidebar-list-item"><a href="#5">Equipment</a></li>
          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Star Wars: The Clone Wars"},
              {id: "6.2", title: "Star Wars: Rebels"},
              {id: "6.3", title: "Star Wars: The Bad Batch"},
              {id: "6.4", title: "Tales of the Jedi"},
              {id: "6.5", title: "Ahsoka"},
              {id: "6.6", title: "In other media"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Merchandise</a></li>
          <li className="sidebar-list-item"><a href="#8">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Captain Rex</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain Rex</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain Rex</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/9/97/Rex-CGSWG.png" alt="Captain Rex" />
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

export default CaptainRex;