import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BenGrimmMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Ben Grimm (MCU) - Pop Culture Wiki";
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
          <li>Ben Grimm (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ben Grimm (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ben Grimm</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2a/Thing_Infobox.png" alt="Ben Grimm" />
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
          <p>
            <b>Benjamin "Ben" Grimm</b> (portrayed by <Link to="/people/ebon_moss-bachrach">Ebon Moss-Bachrach</Link>), also known as <b>The Thing</b>, is
            a member of the <Link to="/mcu/fantastic_four">Fantastic Four</Link> and a former astronaut whose skin has been transformed into a layer of
            orange rock, granting him superhuman strength and durability.
          </p>
          <p>
            As of 2026, the character has appeared in three projects: the one-shot comic Fantastic Four: First Steps and Fantastic Four: First Foes; and the
            film <Link to="/mcu/the_fantastic_four_first_steps">The Fantastic Four: First Steps</Link>. He will return in the one-shot comic Fantastic Four:
            First Foes - Dragon Man, and the films <Link to="/mcu/avengers_doomsday">Avengers: Doomsday</Link> and
            <Link to="/mcu/avengers_secret_wars"> Avengers: Secret Wars</Link>. Ebon previously portrayed
            <Link to="/mcu/david_lieberman"> David Lieberman / Micro</Link> in the Marvel Television series
            <Link to="/mcu/the_punisher_series">The Punisher</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default BenGrimmMCU;