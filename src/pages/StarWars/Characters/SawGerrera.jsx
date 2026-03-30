import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const SawGerrera = () =>
{
  useEffect(() =>
  {
    document.title = "Saw Gerrera - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept and creation</a></li>
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Early life and career"},
              {id: "2.2", title: "Clone Wars combatant", sub2: [
                {id: "2.2.1", title: "Helping hand from the Jedi"},
                {id: "2.2.2", title: "Taking the fight to the Confederacy"},
                {id: "2.2.3", title: "The King's blessing"},
                {id: "2.2.4", title: "The true cost of conflict"},
                {id: "2.2.5", title: "Siege of Onderon"}
              ]},
              {id: "2.3", title: "Age of the Empire", sub2: [
                {id: "2.3.1", title: "Early insurgency", sub3: [
                  {id: "2.3.1.1", title: "Meeting with the Bad Bath"},
                  {id: "2.3.1.2", title: "Recovering Soujen Vak-Nhalis"},
                  {id: "2.3.1.3", title: "A death on Li'eta"},
                  {id: "2.3.1.4", title: "The cache and the senator"},
                  {id: "2.3.1.5", title: "Boxed in"},
                  {id: "2.3.1.6", title: "An act of terror and the conferenc"},
                  {id: "2.3.1.7", title: "Recruitment on Yiagla"},
                  {id: "2.3.1.8", title: "Raven's Peak"},
                  {id: "2.3.1.9", title: "Helping the Ersos"}
                ]},
                {id: "2.3.2", title: "Freeing Wookiees"},
                {id: "2.3.3", title: "Mentor for Jyn"},
                {id: "2.3.4", title: "Dealing with Axis", sub3: [
                  {id: "2.3.4.1", title: "Meeting with Luthen Rael"},
                  {id: "2.3.4.2", title: "Second meeting with Rael"}
                ]},
                {id: "2.3.5", title: "The perfect night", sub3: [
                  {id: "2.3.5.1", title: "Rhydonium reverie"},
                  {id: "2.3.5.2", title: "High on his own supply"}
                ]},
                {id: "2.3.6", title: "Assassination of Moff Panaka"}
              ]},
              {id: "2.4", title: "Galactic civil war", sub2: [
                {id: "2.4.1", title: "Mission to Geonosis"},
                {id: "2.4.2", title: "Jalindi and a personal quest"},
                {id: "2.4.3", title: "Mission to Dooma 4"},
                {id: "2.4.4", title: "Taking the fight to Jedha"},
                {id: "2.4.5", title: "Reuniting with Jyn and death"}
              ]},
              {id: "2.5", title: "Legacy", sub2: [
                {id: "2.5.1", title: "Partisan inspiration"},
                {id: "2.5.2", title: "Under a New Republic"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Personality and traits"
            sub={[
              {id: "3.1", title: "General information"},
              {id: "3.2", title: "Onderonian hero"},
              {id: "3.3", title: "An impassioned rebel"},
              {id: "3.4", title: "Relationships", sub2: [
                {id: "3.4.1", title: "Allies, friends, and family", sub3: [
                  {id: "3.4.1.1", title: "Steela Gerrera"},
                  {id: "3.4.1.2", title: "Jyn Erso"},
                  {id: "3.4.1.3", title: "Lux Bonteri"},
                  {id: "3.4.1.4", title: "Partisans"},
                  {id: "3.4.1.5", title: "Others"}
                ]},
                {id: "3.4.2", title: "Other relationships", sub3: [
                  {id: "3.4.2.1", title: "Bail Organa"},
                  {id: "3.4.2.2", title: "Mon Mothma"},
                  {id: "3.4.2.3", title: "Alliance to Restore the Republic"}
                ]}
              ]}
            ]}
          />
          <Collapse 
            id="4"
            item="Skills and abilities"
            sub={[
              {id: "4.1", title: "At all costs, even himself"},
              {id: "4.2", title: "Military commander"},
              {id: "4.3", title: "Combat abilities"},
              {id: "4.4", title: "Other skills"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Equipment</a></li>
          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Films and television", sub2: [
                {id: "6.1.1", title: "Star Wars: The Clone Wars"},
                {id: "6.1.2", title: "Star Wars Rebels"},
                {id: "6.1.3", title: "Rogue One: A Star Wars Story"},
                {id: "6.1.4", title: "Star Wars: The Bad Batch"},
                {id: "6.1.5", title: "Andor"}
              ]},
              {id: "6.2", title: "Novels", sub2: [
                {id: "6.2.1", title: "Catalyst: A Rogue One Novel"},
                {id: "6.2.2", title: "Rebel Rising"},
                {id: "6.2.3", title: "Reign of the Empire: The Mask of Fear"}
              ]},
              {id: "6.3", title: "Video games", sub2: [
                {id: "6.3.1", title: "Star Wars Jedi: Fallen Order"},
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Saw Gerrera</li>
        </ul>
        <div>
          <h1 className="article-heading">Saw Gerrera</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Saw Gerrera</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/0/06/SawGerrera-Platinum2025.png" alt="Saw Gerrera" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                <Link>Andrew Kishing</Link> (The Clone Wars, The Bad Batch) <br />
                <Link>Forest Whitaker</Link> (Rebels, Jedi: Fallen Order)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                Forest Whitaker (Rogue One, Andor)
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

export default SawGerrera;