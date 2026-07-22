import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const RocketMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Rocket (MCU) - Pop Culture Wiki";
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
          <li>Rocket (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Rocket (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rocket</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/30/Rocket_Vol._3.jpg" alt="Rocket" />
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
            <b>Rocket Raccoon</b>, commonly referred to simply as <b>Rocket</b>, is a fictional character in the 
            <Link to="/mcu"> Marvel Cinematic Universe</Link>, voiced by <Link to="/people/bradley_cooper">Bradley Cooper</Link> and based on the
            <Link to="/marvelcomics"> Marvel Comics</Link> character <Link to="/marvelcomics/rocket_raccoon">of the same name</Link>. Rocket was based on
            movements from <Link to="/people/sean_gunn">Sean Gunn</Link> and an actual raccoon named Oreo. Rocket is a hot-tempered mercenary bio-mechanical
            raccoon and weapons expert who, along with his companion <Link to="/mcu/groot">Groot</Link>, joins the
            <Link to="/mcu/guardians_of_the_galaxy_(team)"> Guardians of the Galaxy</Link>. Theythen come into conflict with
            <Link to="/mcu/ronan"> Ronan the Accuser</Link> and <Link to="/mcu/ego">Ego</Link>. Following <Link to="/mcu/the_blip">the Blip</Link>,
            Rocket remains on Earth as a member of the <Link to="/mcu/avengers_(team)">Avengers</Link>. Five years later, Rocket and the Avengers quantum
            time travel to alternate universes to find the <Link to="/mcu/infinity_stones">Infinity Stones</Link>. Following their success, Rocket joins
            the battle against an alternate <Link to="/mcu/thanos">Thanos</Link>, and rejoins the Guardians after their victory; departing for space.
            Later, he and the Guardians make their base on <Link to="/mcu/knowhere">Knowhere</Link> before coming into contact with Rocket's creator,
            the <Link to="/mcu/high_evolutionary">High Evolutionary</Link>. Rocket then assumes leadership of the Guardians.
          </p>
          <p>
            Rocket made his first appearance in <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link>, and has become a central
            MCU character, appearing in six films as of 2024, in two episodes of the <Link to="/mcu/i_am_groot">I Am Groot</Link> series of animated
            shorts on <Link to="/disney/disney+">Disney+</Link>, and in the TV special
            <Link to="/mcu/the_guardians_of_the_galaxy_holiday_special"> The Guardians of the Galaxy Holiday Special</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default RocketMCU;