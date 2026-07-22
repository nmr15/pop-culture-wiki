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
          <Collapse 
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Daughter of heroes"},
                {id: "1.1.2", title: "Losing her mother"}
              ]},
              {id: "1.2", title: "Working at Pym Tech", sub2: [
                {id: "1.2.1", title: ""},
                {id: "1.2.2", title: ""},
                {id: "1.2.3", title: ""},
                {id: "1.2.4", title: ""}
              ]},
              {id: "1.3", title: ""},
              {id: "1.4", title: ""},
              {id: "1.5", title: ""},
              {id: "1.6", title: ""},
              {id: "1.7", title: ""},
              {id: "1.8", title: ""}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other Equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="4"
            item="Facilities"
            sub={[
              {id: "4.1", title: "Prisons"}
            ]}
          />
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
          <p>
            <b>Hope van Dyne</b> is a fictional character portrayed primarily by <Link to="/evangeline_lilly">Evangeline Lilly</Link> in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link>, loosely based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/hope_pym"> Hope Pym</Link>. Portrayed as the daughter of <Link to="/mcu/hank_pym">Hank Pym</Link> and
            <Link to="/mcu/janey_van_dyne"> Janet van Dyne</Link>, she was a senior board member of her father's company,
            <Link to="/mcu/pym_technologies"> Pym Technologies</Link>, and later inherits the <b>Wasp</b> alias from her mother, using a suit
            containing <Link to="/mcu/pym_particles">her father's technology</Link> to shrink and fly with insect-themed wings. Her appearances have
            been praised for their authentic and relatable portrayal of the superheroine.
          </p>
          <p>
            After rekindling her relationship with her father, Hope works with him to rescue her mother who was previously lost to the
            <Link to="/mcu/quantum_realm"> Quantum Realm</Link>, and defeat various supervillains including
            <Link to="/mcu/darren_cross"> Yellowjacket</Link>, and <Link to="/mcu/ava_starr">Ghost</Link>. Hope later falls victim to
            <Link to="/mcu/the_blip"> The Blip</Link>, but is later restored to life and joins the <Link to="/mcu/avengers">Avengers</Link> in a battle
            against <Link to="/mcu/thanos">Thanos</Link>. Afterwards, she buys back her father's company, renaming it the Pym van Dyne Foundation and
            continues her relationship with <Link to="/mcu/scott_lang">Scott Lang</Link>, becoming a mothe figure to his daughter,
            <Link to="/mcu/cassie_lang"> Cassie Lang</Link>. She is later trapped in the Quantum Realm alongisde her family and assists them in
            defeating <Link to="/mcu/kang_the_conqueror">Kang the Conqueror</Link>.
          </p>
          <p>
            Lilly first appeared as Hope in the 2015 film <Link to="/mcu/antman_film">Ant-Man</Link> and later in
            <Link to="/mcu/antman_and_the_wasp"> Ant-Man and the Wasp, <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>, and
            <Link to="/mcu/antman_and_the_wasp_quantumania"> Ant-Man and the Wasp: Quantumania. Madeleine McGraw portrayed a younger version of
            Hope. Alternate versions of Hope appear in the <Link to="/disney/disney+">Disney+</Link> animated series
            <Link to="/mcu/what_if"> What If...?</Link>, also voiced by Lilly and McGraw. Hope is noted for being the first titular superheroine in an
            MCU film, preceding <Link to="/mcu/carol_danvers">Captain Marvel</Link>, <Link to="/mcu/natasha_romanoff">Black Widow</Link>, and
            <Link to="/mcu/shuri"> Black Panther</Link>, and for inspiring the creation of comic superheroine Nadia van Dyne.
          </p>
        </div>
      </main>
    </>
  )
}

export default HopeVanDyneMCU;