import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const MelinaVostokoff = () =>
{
  useEffect(() =>
  {
    document.title = "Melina Vostokoff (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Red Room assassin", sub2: [
                {id: "1.1.1", title: "Black Widow training"},
                {id: "1.1.2", title: "Undercover mission"},
                {id: "1.1.3", title: "Dreykov's architect"}
              ]},
              {id: "1.2", title: "Betraying Dreykov", sub2: [
                {id: "1.2.1", title: "Family reunion"},
                {id: "1.2.2", title: "Making a plan"},
                {id: "1.2.3", title: "Destruction of the Red Room"},
                {id: "1.2.4", title: "Family split apart"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Abilities</a></li>
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Melina Vostokoff (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Melina Vostokoff (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Melina Vostokoff</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="ttps://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/MelinaVostokoffProfilePic.jpeg" alt="Melina Vostokoff" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Rachel Weisz</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link to="/mcu/black_widow_film">Black Widow</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default MelinaVostokoff;