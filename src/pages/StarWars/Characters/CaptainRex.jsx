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
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "The Clone Wars", sub2: [
                {id: "1.2.1", title: "Early battles"},
                {id: "1.2.2", title: "Siege of Hisseen"},
                {id: "1.2.2", title: "Battle of Christophsis"},
                {id: "1.2.4", title: "Battle of Teth"},
                {id: "1.2.5", title: "Battle of Mimban"},
                {id: "1.2.6", title: "Skirmish on the Rishi Moon"},
                {id: "1.2.7", title: "Battle at Bothawul and Skytop Station"},
                {id: "1.2.8", title: "Battle above Quell and crashing on Maridun"},
                {id: "1.2.9", title: "Defense of Maridun"},
                {id: "1.2.10", title: "Battle of Orto Plutonia"},
                {id: "1.2.11", title: "Raid on Vindi's lab"},
                {id: "1.2.12", title: "Battle of Ryloth"},
              ]},
              {id: "1.3", title: "The conflict draws on", sub2: [
                {id: "1.3.1", title: "First Battle of Felucia"},
                {id: "1.3.2", title: "Battle of Devaron"},
                {id: "1.3.3", title: "Battle of Malastare"},
                {id: "1.3.4", title: "Second Battle of Geonosis"},
                {id: "1.3.5", title: "Battle of Saleucami"},
                {id: "1.3.6", title: "Skirmish on the Coronet"},
                {id: "1.3.7", title: "Skywalker's right-hand man"},
                {id: "1.3.8", title: "Battle of Kamino"},
                {id: "1.3.9", title: "Extraction on Lola Sayu"},
                {id: "1.3.10", title: "Return to Felucia"},
                {id: "1.3.11", title: "Role on Mon Cala"},
                {id: "1.3.12", title: "Battle of Horain"},
                {id: "1.3.13", title: "Battle of Umbara"},
                {id: "1.3.14", title: "Battle of Kiros and Kadavo"},
                {id: "1.3.15", title: "Training Onderonian rebels"},
              ]},
              {id: "1.4", title: "The end draws near"},
              {id: "1.5", title: "Striking against the Empire"},
              {id: "1.6", title: "Agent of the Rebellion"},
              {id: "1.7", title: "Alliance to Restore the Republic"},
              {id: "1.8", title: "Legacy"}
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