import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const C3PO = () =>
{
  useEffect(() =>
  {
    document.title = "C-3PO - Pop Culture Wiki";
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
          <li>C-3PO</li>
        </ul>
        <div>
          <h1 className="article-heading">C-3PO</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>C-3PO</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/a/a2/C-3PO-TROSTGG.png" alt="C-3PO" />
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
            <b>C-3P0</b> (<b>See-Threepio</b>) was a 3P0-series <Link>protocol droid</Link> designed to interact with organics, programmed primarily for etiquette and
            protocol. Sometimes referred to as <b>Threepio</b>, he was fluent in over six million forms of communication, and developed a fussy and worry-prone
            personality through his many decades of operation. Along with his counterpart, the <Link>astromech droid</Link> <Link to="/starwars/r2d2">R2-D2</Link>,
            C-3P0 constantly found himself directly involved in pivotal moments of galactic history, and aided in saving the galaxy on many occasions.
          </p>
          <p>
            C-3P0 was rebult from spare parts by <Link to="/starwars/anakin_skywalker">Anakin Skywalker</Link>, an enslaved human who lived in Mos Espa, a city on
            the <Link to="/starwars/outer_rim">Outer Rim</Link> world of <Link to="/starwars/tatooine">Tatooine</Link>. During the
            <Link to="/starwars/clone_wars"> Clone Wars</Link>, he would serve the <Link to="/starwars/naboo">Naboo</Link> Senator
            <Link to="/starwars/padmé_amidala"> Padmé Amidala</Link>. Shortly fater the Clone Wars, C-3P0's memory was erased, though R2-D2's memory was not. C-3P0
            and R2-D2 were assigned to the <Link to="/starwars/alderaan">Aldraan</Link> cruiser <Link to="/starwars/tantive_iv">Tantive IV</Link>, where they
            served senator <Link to="/starwars/bail_organa">Bail Organa</Link> for nineteen years, assisting in his fledging resistance movement against the
            <Link to="/starwars/galactic_empire"> Galactic Empire</Link>. At some point during this time, C-3P0's right leg was fitted with mismatched plating.
          </p>
          <p>
            C-3P0 remained constant companions with R2, and in 1 BBY, the pair became emroiled in the <Link to="/starwars/galactic_civil_war">Galactic Civil War</Link>
            when <Link to="/starwars/leia_organa">Leia Organa</Link> of the <Link to="/starwars/rebel_alliance">Rebel Alliance</Link> entrusted them to bring a copy
            of the <Link to="/starwars/death_star">Death Star</Link> plans to the <Link to="/starwars/jedi_master">Jedi Master</Link>
            <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link> on Tatooine. After meeting Anakin's son, <Link to="/starwars/luke_skywalker">Luke</Link> and
            the smuggler <Link to="/starwars/han_solo">Han Solo</Link>, the droids helped rescue Leia from the Empire's Death Star. They became directly attached to
            the three humans, helping them and their rebellion defeat the Empire and restore freedom to the galaxy, most notably when he convinced the
            <Link to="/starwars/ewok"> Ewoks</Link> to aid the Rebels at the Battle of Endor.
          </p>
          <p>
            Following the Battle of Endor, C-3P0 continued serving the Skywalkers and Solo during the time of the <Link to="/starwars/new_republic">New
            Republic</Link>. About thirty years after the events of <Link to="/starwars/endor">Endor</Link>, C-3P0 was still an aide to Leia, who had become a
            general in the <Link to="/starwars/resistance">Resistance</Link>, a private military group opposed to the <Link to="/starwars/first_order">First
            Order</Link>, a military juntathat emulated the Old Empire. By that time, C-3P0 was fitted with a new set of gold plating, which had a more symmetrical
            design than his previous coverings, with the exception of his head. His new coverings included a third finger joint, and a torso that was not as slim
            as it used to be. Because of his new plating, he no longer had a mismatched right lower leg. Although, he did end up wearing a red left arm for a
            very short time. By that time, C-3P0's language database had also been updated so that he could understand and communicate in over seven million
            different forms of communication, including ancient Sith dialect. He would assist <Link>Rey</Link> in translating Sith riting in order to locate
            <Link to="/starwars/sheev_palpatine"> Darth Sidious</Link> and the Sith Eternal's fleet, the Final Order, on Exegol, allowing his memory to be wiped in
            order to carry out the task. However, his friend R2 backed up a large portion of his memories, and after the Resistance defeated Sidious and the Sith
            Eternal in the Battle of Exegol, his memory was restored.
          /p>
        </div>
      </main>
    </>
  )
}

export default C3PO;