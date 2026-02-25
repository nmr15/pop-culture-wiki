import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const HopeVanDyneMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Hope Van Dyne (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Hope Van Dyne (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Hope Van Dyne (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Hope Van Dyne</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Sam_Wilson_Infobox.jpg" alt="Hope Van Dyne" />
                </span>
              </td>
            </tr>
            <tr>
                          <th className="infobox-data">Portrayed by</th>
                          <td className="infobox-data"><Link>Evangeline Lilly</Link></td>
                        </tr>
                        <tr>
                          <th className="infobox-data">Appearances</th>
                          <td className="infobox-data">
                            <Link to="/mcu/antman_film">Ant-Man</Link> <br />
                            <Link to="/mcu/antman_and_the_wasp">Ant-Man and the Wasp</Link> <br />
                            <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                            <Link to="/mcu/antman_and_the_wasp_quantumania">Ant-Man and the Wasp: Quantumania</Link>
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

export default HopeVanDyneMCU;