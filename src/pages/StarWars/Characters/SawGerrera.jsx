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