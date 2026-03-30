import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AsajjVentress = () =>
{
  useEffect(() =>
  {
    document.title = "Asajj Ventress - Pop Culture Wiki";
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
              {id: "1.1", title: "The Lost Sister"},
              {id: "1.2", title: "At the count's command", sub2: [
                {id: "1.2.1", title: "Found by darkness"},
                {id: "1.2.2", title: "Apprentice to the Sith Lord"},
                {id: "1.2.3", title: "Business on Cato Neimodia", sub3: [
                  {id: "1.2.3.1", title: "Meeting Kenobi"},
                  {id: "1.2.3.2", title: "On the inside"},
                  {id: "1.2.3.3", title: "Shot, chaser"},
                  {id: "1.2.3.4", title: "An acolyte's acolyte"},
                  {id: "1.2.3.5", title: "Versus Skywalker"}
                ]},
                {id: "1.2.4", title: "Enemy of the Republic"},
                {id: "1.2.5", title: "Christophsis"},
                {id: "1.2.6", title: "The Teth operation", sub3: [
                  {id: "1.2.6.1", title: "Framing the Jedi"},
                  {id: "1.2.6.2", title: "Attack on the monastery"},
                  {id: "1.2.6.3", title: "Final duel and failure"}
                ]},
                {id: "1.2.7", title: "Rugosa outreach mission"},
                {id: "1.2.8", title: "The Kamino operation"},
                {id: "1.2.9", title: "Proving herself again", sub3: [
                  {id: "1.2.9.1", title: "Gunning for Gunray"},
                  {id: "1.2.9.2", title: "Dueling Unduli"}
                ]},
                {id: "1.2.10", title: "Further battles"},
                {id: "1.2.11", title: "Battle of Kamino"},
                {id: "1.2.12", title: "Protecting the plans"},
              ]},
              {id: "1.3", title: "Betrayal and loss", sub2: [
                {id: "1.3.1", title: "Battle of Sullust"},
                {id: "1.3.2", title: "Return to Dathomir"},
                {id: "1.3.3", title: "The Nightbrother"},
                {id: "1.3.4", title: "Dooku's revenge"}
              ]},
              {id: "1.4", title: "The exile's life", sub2: [
                {id: "1.4.1", title: "The Quarzite mission"},
                {id: "1.4.2", title: "Unexpected alliances"},
                {id: "1.4.3", title: "Successful hunter"}
              ]},
              {id: "1.5", title: "A new purpose", sub2: [
                {id: "1.5.1", title: "Partnership with Quinlan Vos"},
                {id: "1.5.2", title: "Against Black Sun"},
                {id: "1.5.3", title: "Ventress' dark disciple"},
                {id: "1.5.4", title: "Duel with Dooku"},
                {id: "1.5.5", title: "Saving Vos", sub3: [
                  {id: "1.5.5.1", title: "Operation on Serenno"},
                  {id: "1.5.5.2", title: "Plan to save Vos"},
                  {id: "1.5.5.3", title: "Rescue of her lover"}
                ]},
                {id: "1.5.6", title: "Sacrifice"},
                {id: "1.5.7", title: "Her story is not yet over"}
              ]},
              {id: "1.6", title: "Return to bounty hunting", sub2: [
                {id: "1.6.1", title: "The clones"},
                {id: "1.6.2", title: "Before sunset"},
                {id: "1.6.3", title: "Waves"}
              ]},
              {id: "1.7", title: "A new life", sub2: [
                {id: "1.7.1", title: "Peace and quiet"},
                {id: "1.7.2", title: "Helping Strata"}
              ]},
              {id: "1.8", title: "Legacy"}
            ]}
          />
          <Collapse 
            id="2"
            item="Personality and traits"
            sub={[
              {id: "2.1", title: "Disciple of darkness"},
              {id: "2.2", title: "Attachment, loss, and letting go"}
            ]}
          />
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", title: "Lightsaber abilities"},
              {id: "3.2", title: "Force powers"},
              {id: "3.3", title: "Other skills"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Equipment</a></li>
          <Collapse 
            id="5"
            item="Characterization"
            sub={[
              {id: "5.1", title: "Creation"},
              {id: "5.2", title: "Portrayal"}
            ]}
          />
          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "The Clone Wars"},
              {id: "6.2", title: "Dark Disciple"},
              {id: "6.3", title: "The Bad Batch"},
              {id: "6.4", title: "Tales of the Underworld"},
              {id: "6.5", title: "Other works"},
              {id: "6.6", title: "Legends", sub2: [
                {i: "6.6.1", title: "Clone Wars"},
                {i: "6.6.2", title: "Novels"},
                {i: "6.6.3", title: "Comic books"}
              ]}
            ]}
          />
          <Collapse 
            id="7"
            item="Video game appearances"
            sub={[
              {id: "7.1", title: "The Lego Star Wars series"},
              {id: "7.2", title: "Star Wars Battlefront: Renegade Squadron"},
              {id: "7.3", title: "Star Wars: The Clone Wars video games"},
              {id: "7.4", title: "Star Wars: The Force Unleashed duology"},
              {id: "7.5", title: "Other Star Wars video games"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Asajj Ventress</li>
        </ul>
        <div>
          <h1 className="article-heading">Asajj Ventress</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Asajj Ventress</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/a/af/AsajjVentress-LD-SWCT.png" alt="Asajj Ventress" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                <Link>Grey DeLisle</Link> <br />
                <Link>Nika Futterman</Link> <br />
                Trish Patendon
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

export default AsajjVentress;