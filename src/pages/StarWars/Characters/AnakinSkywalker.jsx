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
          <p>
            Following the death of Count Dooku during the Battle of Coruscant, Anakin's faith in the Jedi was further shaken when he was put on the Jedi
            Council without the rank of master. He also learned that Supreme Chancellor Sheev Palpatine was Darth Sidious, the elusive Dark Lord of the
            Sith who orchestrated the war in order to take over the galaxy. Manipulated into believing that the Jedi had failed him and coupled with his
            fear of losing Padmé in childbirth, Anakin betrayed and turned against the Jedi Order, believing Sidious had the knowledge to cheat death.
            Consumed by the persona of Darth Vader, the fallen Jedi Knight marched his legion on the <Link>Jedi Temple</Link> of <Link>Coruscant</Link>
            where they executed its inhabitants, including Jedi younglings, as part of <Link>Order 66</Link> and the Great Jedi Purge. Vader was then
            sent to <Link>Mustafar</Link> to exterminate the Separatist Council at the behest of his Sith Master, who became the self-proclaimed
            Galactic Emperor. Vader subsequently sustained severe injuries in his duel with Obi-Wan, and was rebuilt as an armored cyborg while his wife
            died of a broken heart, though not before giving birth to the twins <Link to="/starwars/luke_skywalker">Luke Skywalker</Link> and
            <Link to="/starwars/leia_organa"> Leia Organa</Link> who were hidden from their father and the Emperor as the <Link>Galactic Empire</Link>
            rose to power.
          </p>
          <p>
            Being the Emperor's Fist and later being elevated to the position of supreme commander of the Imperial fleet, Vader enforced the rule of the
            New Order as the Emperor's Sith apprentice throughout most of the Imperial Era and was thus seen as de facto Commander-in-Chiefe of the
            entire Imperial Military. In the aftermath of killing Obi-Wan in a duel aboard the <Link>Death Star</Link> and the subsequent Battle of Yavin,
            he discovered the existence of his son and was determined to turn Luke to the dark side. Luke sought to become a Jedi, like his father before
            him, and believed that Vader had the potential to turn back to the <Link>light side of the Force</Link>. Vader was defeated by Luke during
            the Battle of Endor in 4 ABY, but the young Jedi refused to stike down his father in anger, causing the Emperor to torture Luke with
            <Link>Force lightning</Link>. The pain inflicted on his son awakened the part of Vader that was still Anakin, resulting in a redeemed
            Anakin killing Sidious at cost of his own life. Having destroyed the Sith and fulfilled his destiny as the Chosen One. Anakain made peace
            with his son and became one with the Force.
          </p>
        </div>
      </main>
    </>
  )
}

export default AnakinSkywalker;