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