import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AnakinSkywalker = () =>
{
  useEffect(() =>
  {
    document.title = "Anakin Skywalker - Pop Culture Wiki";
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
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Anakin Skywalker</li>
        </ul>
        <div>
          <h1 className="article-heading">Anakin Skywalker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Anakin Skywalker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png" alt="Anakin Skywalker" />
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
            <b>Anakin Skywalker</b> was a legendary <Link>Force-sensitive</Link> <Link>human</Link> male who was a <Link>Jedi Knight</Link> of the
            <Link> Galactic Republic</Link> and the prophesied <Link>Chosen One</Link> of the <Link>Jedi Order</Link>, destined to bring balance to
            <Link> the Force</Link>. Also known as "<b>Ani</b>" during his childhood, Anakin earned the moniker "Hero With No Fear" from his accomplishments
            in the <Link>Clone Wars</Link>. His alter ego, <b>Darth Vader</b>, the Dark Lord of the Sith, was created when Anakin turned to the
            <Link> dark side of the Force</Link>, pledging his allegiance to the <Link>Sith Lord</Link>
            <Link to="/starwars/sheev_palpatine"> arth Sidious</Link> at the end of the Republic Era.
          </p>
          <p>
            A vengeance in the Force, Anakin was born on the desert planet of <Link>Tatooine</Link> in the <Link>Outer Rim Territories</Link> in 41 BBY.
            He was the son of <Link>Shmi Skywalker</Link>, a slave who conceived a child without a father. His blood contained over twenty-thousand
            <Link> midi-chlorians</Link>, surpassing <Link>Grand Master Yoda</Link> and all other <Link>Jedi</Link> in <Link>the galaxy</Link>.
            <Link to="/starwars/qui_gon_jinn"> Qui-Gon Jinn</Link>, the <Link>Jedi Master</Link> who discovered Anakin during the Invasion of Naboo in 32
            BBY, theorized that Anakin was conceived by the midi-chlorians. Following the Battle of Naboo, the <Link>Jedi High Council</Link> admitted
            Anakin into the Order as the <Link>Padawan</Link> of Jedi Knight <Link to="/starwars/obiwan_kenobi_series">Obi-Wan Kenobi</Link> despite
            feeling that he was too old and emotional to adhere to the Jedi Code. Anakin remained a Padawan through the beginning of the Clone Wars,
            instigated by events set in motion by <Link to="/starwars/count_dooku">Count Dooku</Link>. Although Jedi doctrine prohibits romantic
            relationships. Anakin had a secret wife, Senator <Link to="/starwars/padmé_amidala">Padmé Amidala</Link> of <Link>Naboo</Link>. During the
            early days of the Clone Wars, Anakin served as a Jedi General in the Grand Army of the Republic, commanding the <Link>clone troopers</Link>
            of the elite <Link>501st Legion</Link> against the <Link>Confederacy of Independent Systems</Link>. After receiving his knighthood, Anakin
            oversaw the Jedi training of his own apprentice, <Link to="/starwars/ahsoka_tano">Ahsoka Tano</Link>. By 19 BBY, when Ahsoka walked away
            from the Jedi Order, Anakin began to struggle with feelings of failure towards his apprentice and the Order itself.
          </p>
        </div>
      </main>
    </>
  )
}

export default AnakinSkywalker;