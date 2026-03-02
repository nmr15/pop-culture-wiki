import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BlackPantherFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Black Panther (film) - Pop Culture Wiki";
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
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production", sub2: [
                {id: "3.2.1", title: "Writing"},
                {id: "3.2.2", title: "Design", sub3: [
                  {id: "3.2.2.1", title: "Sets"},
                  {id: "3.2.2.2", title: "Costumes"}
                ]}
              ]},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Editing"},
                {id: "3.4.2", title: "Visual effects"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "Pre-sale tickets"},
                {id: "7.1.2", title: "United States and Canada"},
                {id: "7.1.3", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Analysis", sub2: [
                {id: "7.3.1", title: "Cultural importance"},
                {id: "7.3.2", title: "African and African American representation"}
              ]},
              {id: "7.4", title: "Accolades", sub2: [
                {id: "7.4.1", title: "Oscars campaign"}
              ]}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequels"},
              {id: "8.2", title: "Television series", sub2: [
                {id: "8.2.1", title: "Eyes of Wakanda"},
                {id: "8.2.2", title: "Unproduced spin-off series"}
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Black Panther (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Black Panther (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Black Panther</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg" alt="Black Panther poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Ryan Coogler</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default BlackPantherFilm;