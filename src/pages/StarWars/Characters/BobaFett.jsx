import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const BobaFett = () =>
{
  useEffect(() =>
  {
    document.title = "Boba Fett - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Concept and development"
            sub={[
              {id: "1.1", title: "Film casting and production", sub2: [
                {id: "1.1.1", title: "Other portrayals"}
              ]}
            ]}
          />

          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Skywalker saga", sub2: [
                {id: "6.1.1", title: "Original trilogy"},
                {id: "6.1.2", title: "Prequel trilogy"}
              ]},
              {id: "6.2", title: "Television", sub2: [
                {id: "6.2.1", title: "The Story of the Faithful Wookiee"},
                {id: "6.2.2", title: "Droids"},
                {id: "6.2.3", title: "The Clone Wars"},
                {id: "6.2.4", title: "The Mandalorian"},
                {id: "6.2.5", title: "The Bad Batch"},
                {id: "6.2.6", title: "Visions"},
                {id: "6.2.7", title: "The Book of Boba Fett"}
              ]},
              {id: "6.3", title: "Other media"},
              {id: "6.4", title: "Legends", sub2: [
                {id: "6.4.1", title: "The Bounty Hunter Wars"},
                {id: "6.4.2", title: "Boba Fett: A Practical Man"}
              ]},
              {id: "6.5", title: "Unproduced works", sub3: [
                {id: "6.5.1", title: "Star Wars 1313"},
                {id: "6.5.2", title: "The Clone Wars"},
                {id: "6.5.3", title: "Standalone film"}
              ]}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "In The Clone Wars"},
              {id: "7.2", title: "In The Book of Boba Fett"},
              {id: "7.3", title: "Merchandising"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Boba Fett</li>
        </ul>
        <div>
          <h1 className="article-heading">Boba Fett</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Boba Fett</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/4/46/BobaFett-SWI206.png" alt="Boba Fett" />
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

export default BobaFett;