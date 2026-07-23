import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ScottLangMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Scott Lang (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept, creation, and casting</a></li>
          
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Other equipment"},
              {id: "4.2", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="5"
            item="Facilities"
            sub={[
              {id: "5.1", title: "Prisons"}
            ]}
          />
          <Collapse 
            id="6"
            item="Alternate versions"
            sub={[
              {id: "6.1", title: "Zombie outbreak"},
              {id: "6.2", title: "1602 Avengers"},
              {id: "6.3", title: "Void"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Reception</a></li>
          <Collapse 
            id="8"
            item="In other media"
            sub={[
              {id: "8.1", title: "Theme parks"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Scott Lang (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Scott Lang (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Scott Lang</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/46/Ant-Man_Infobox.png" alt="Scott Lang" />
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
            <b>Scott Edward Harris Lang</b> is a fictional character portrayed by <Link to="/people/paul_rudd">Paul Rudd</Link> in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link>, based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/ant-man_(scott_lang)"> of the same name</Link>. Depicted as a thief-turned-superhero, Scott is recruited by
            <Link to="/mcu/hank_pym"> Hank Pym</Link> to use an <Link to="/mcu/ant-man_suit">advanced suit</Link> that allows him to change sizes and
            communicate with ants, inheriting the superhero identity <b>Ant-Man</b>.
          </p>
          <p>
            Scott is recruited by <Link to="/mcu/sam_wilson">Sam Wilson</Link> to join the <Link to="/mcu/avengers_(team)">Avengers</Link>; works
            alongside Hank's daughter, <Link to="/mcu/hope_van_dyne">Hope van Dyne</Link>; and rekindles his relationship with his daughter,
            <Link to="/mcu/cassie_lang"> Cassie Lang</Link>. After <Link to="/mcu/the_blip">The Blip</Link>, Scott is trapped inside the
            <Link to="/mcu/quantum_realm"> Quantum Realm</Link> before being accidentally saved, then helps the Avengers to stop an alternate
            version of <Link to="/mcu/thanos">Thanos</Link>. Afterwards, Scott writes a memoir. He is later trapped in the Quantum Realm once again,
            where he encounters <Link to="/mcu/kang_the_conqueror">Kang the Conqueror</Link> and prevents him from escaping.
          </p>
          <p>
            Scott first appeared in the film <Link to="/mcu/antman_film">Ant-Man</Link>, then in
            <Link to="/mcu/captain_america_civil_war"> Captain America: Civil War</Link>, 
            <Link to="/mcu/antman_and_the_wasp"> Ant-Man and the Wasp</Link>, <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>, and
            <Link to="/mcu/antman_and_the_wasp_quantumania"> Ant-Man and the Wasp: Quantumania</Link> Alternate versions of the character appeared
            in the <Link to="/disney/disney+">Disney+</Link> animated series <Link to="/mcu/what_if">What If...?</Link>, with Rudd reprising his role.
          </p>
        </div>
      </main>
    </>
  )
}

export default ScottLangMCU;