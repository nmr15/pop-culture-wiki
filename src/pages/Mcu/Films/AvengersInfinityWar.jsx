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
              {id: "3.4", title: "Filming", sub2: [
                {id: "3.4.1", title: "Principal photography"},
                {id: "3.4.2", title: "Cinematography"}
              ]},
              {id: "3.5", title: "Post-production", sub2: [
                {id: "3.5.1", title: "Editing"},
                {id: "3.5.2", title: "Additional photography"},
                {id: "3.5.3", title: "Visual effects"}
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
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Audience response"},
              {id: "7.4", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
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
          
        </div>
      </main>
    </>
  )
}

export default AvengersInfinityWar;