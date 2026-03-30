import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const SawGerrera = () =>
{
  useEffect(() =>
  {
    document.title = "Saw Gerrera - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept and creation</a></li>
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Early life and career"},
              {id: "2.2", title: "Clone Wars combatant", sub2: [
                {id: "2.2.1", title: "Helping hand from the Jedi"},
                {id: "2.2.2", title: "Taking the fight to the Confederacy"},
                {id: "2.2.3", title: "The King's blessing"},
                {id: "2.2.4", title: "The true cost of conflict"},
                {id: "2.2.5", title: "Siege of Onderon"}
              ]},
              {id: "2.3", title: "Age of the Empire", sub2: [
                {id: "2.3.1", title: "Early insurgency", sub3: [
                  {id: "2.3.1.1", title: "Meeting with the Bad Bath"},
                  {id: "2.3.1.2", title: "Recovering Soujen Vak-Nhalis"},
                  {id: "2.3.1.3", title: "A death on Li'eta"},
                  {id: "2.3.1.4", title: "The cache and the senator"},
                  {id: "2.3.1.5", title: "Boxed in"},
                  {id: "2.3.1.6", title: "An act of terror and the conferenc"},
                  {id: "2.3.1.7", title: "Recruitment on Yiagla"},
                  {id: "2.3.1.8", title: "Raven's Peak"},
                  {id: "2.3.1.9", title: "Helping the Ersos"}
                ]},
                {id: "2.3.2", title: "Freeing Wookiees"},
                {id: "2.3.3", title: "Mentor for Jyn"},
                {id: "2.3.4", title: "Dealing with Axis", sub3: [
                  {id: "2.3.4.1", title: "Meeting with Luthen Rael"},
                  {id: "2.3.4.2", title: "Second meeting with Rael"}
                ]},
                {id: "2.3.5", title: "The perfect night", sub3: [
                  {id: "2.3.5.1", title: "Rhydonium reverie"},
                  {id: "2.3.5.2", title: "High on his own supply"}
                ]},
                {id: "2.3.6", title: "Assassination of Moff Panaka"}
              ]},
              {id: "2.4", title: "Galactic civil war", sub2: [
                {id: "2.4.1", title: "Mission to Geonosis"},
                {id: "2.4.2", title: "Jalindi and a personal quest"},
                {id: "2.4.3", title: "Mission to Dooma 4"},
                {id: "2.4.4", title: "Taking the fight to Jedha"},
                {id: "2.4.5", title: "Reuniting with Jyn and death"}
              ]},
              {id: "2.5", title: "Legacy", sub2: [
                {id: "2.5.1", title: "Partisan inspiration"},
                {id: "2.5.2", title: "Under a New Republic"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Personality and traits"
            sub={[
              {id: "3.1", title: "General information"},
              {id: "3.2", title: "Onderonian hero"},
              {id: "3.3", title: "An impassioned rebel"},
              {id: "3.4", title: "Relationships", sub2: [
                {id: "3.4.1", title: "Allies, friends, and family", sub3: [
                  {id: "3.4.1.1", title: "Steela Gerrera"},
                  {id: "3.4.1.2", title: "Jyn Erso"},
                  {id: "3.4.1.3", title: "Lux Bonteri"},
                  {id: "3.4.1.4", title: "Partisans"},
                  {id: "3.4.1.5", title: "Others"}
                ]},
                {id: "3.4.2", title: "Other relationships", sub3: [
                  {id: "3.4.2.1", title: "Bail Organa"},
                  {id: "3.4.2.2", title: "Mon Mothma"},
                  {id: "3.4.2.3", title: "Alliance to Restore the Republic"}
                ]}
              ]}
            ]}
          />
          <Collapse 
            id="4"
            item="Skills and abilities"
            sub={[
              {id: "4.1", title: "At all costs, even himself"},
              {id: "4.2", title: "Military commander"},
              {id: "4.3", title: "Combat abilities"},
              {id: "4.4", title: "Other skills"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Equipment</a></li>
          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Films and television", sub2: [
                {id: "6.1.1", title: "Star Wars: The Clone Wars"},
                {id: "6.1.2", title: "Star Wars Rebels"},
                {id: "6.1.3", title: "Rogue One: A Star Wars Story"},
                {id: "6.1.4", title: "Star Wars: The Bad Batch"},
                {id: "6.1.5", title: "Andor"}
              ]},
              {id: "6.2", title: "Novels", sub2: [
                {id: "6.2.1", title: "Catalyst: A Rogue One Novel"},
                {id: "6.2.2", title: "Rebel Rising"},
                {id: "6.2.3", title: "Reign of the Empire: The Mask of Fear"}
              ]},
              {id: "6.3", title: "Video games", sub2: [
                {id: "6.3.1", title: "Star Wars Jedi: Fallen Order"},
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Saw Gerrera</li>
        </ul>
        <div>
          <h1 className="article-heading">Saw Gerrera</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Saw Gerrera</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/0/06/SawGerrera-Platinum2025.png" alt="Saw Gerrera" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                <Link>Andrew Kishing</Link> (The Clone Wars, The Bad Batch) <br />
                <Link>Forest Whitaker</Link> (Rebels, Jedi: Fallen Order)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                Forest Whitaker (Rogue One, Andor)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Saw Gerrera</b> was a human male Onderonian resistance fighter who, as a leading member of the Onderon rebels, fought against the
            <Link> Confdederacy of Independent System</Link> on <Link>Onderon</Link> during the <Link>Clone Wars</Link>. He and his sister, Steela Gerrera, were
            instrumental in the rebel liberation of their homeworld during the Orendon Civil War. Following the rise of the <Link>Galactic Empire</Link> at the end
            of the war, Saw became a key member in the fith against the fascist government and the formation of the Alliance to Restore the Republic. His tactics
            during the early rebellion agains the Empire led him to be seen as an extremist, one whose notoriety was recognized by both the Empire, the Alliance, and,
            many years later, the New Republic.
          </p>
          <p>
            In the early resistance against the Separatist Alliance on Onderon, Gererra and his fellow soldiers were outnumbered and outgunned by the Separatist
            Droid Army. They requested help from the Jedi High Council, which led the Grand Army of the Republic in its fight against the Separatists, but the Jedi
            Order chose not to become actively involved in the fighting on Onderon. Instead, they sent a team of advisors,
            <Link to="/starwars/anakin_skywalker"> General Anakin Skywalker</Link> and <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link>,
            <Link to="/starwars/ahsoka_tano"> Commander Ahsoka Tano</Link>, and <Link to="/starwars/captain_rex">Clone Captain Rex</Link>, to train the Onderonian
            fighters. The Jedi and Captain Rex taught them proper techniques and strategies for taking on the <Link>battle droid</Link> army, and, through their
            efforts, the rebels began to turn the tide. Gerrera came to resent that the rebels chose Steela as their leader, and he was soon captured in an
            ill-concocted solo effort to rescue the deposed King Ramsis Dendup from the Separatists. They were both rescued by the rebels, who eventually
            mounted a final battle against the Separatists. Through their efforts, the rebels liberated their world and returned Dendup to the throne. The fight,
            however, came at a personal cost: Steela was killed during the final battle, and Gerrera was left to mourn his sister, feeling responsible for her death.
          </p>
          <p>
            At the end of the Clone Wars, the Republic was transformed into the Galactic Empire. Horrified, Gerrera and his fellow Onendorians resisted the Empire,
            and the Empire, despite the fact that Saw and his team had been instrumental in the liberation of Onderon, branded them as insurgents. Gerrera managed
            to evade Imperial capture, and he continued to fight against the Empire. During this time, Saw relocated Imperial scientist <Link>Galen Erso</Link>, his
            wife Lyra, and their daughter, <Link to="/starwars/jyn_erso">Jyn</Link>, to the uninhabited planet of Lah'mu. When
            <Link to="/starwars/orson_krennic"> Orson Krennic</Link>, an old friend of Galen's, discovered their location and took Galen away and killed Lyra, Saw
            traveled to Lah'mu, adopted Jyn, and raised her, all the while claiming that she was his own daughter.
          </p>
          <p>
            Gerrera fought against the Imperial Military and led a resistance group known as the Partisans, a military organization that some conssider an
            extremist, using terrorist tactics and operating under the codename, "Stoneface." His resistance cell, a continuation of his Onderonian resistance, was
            one of the first in the group of cells that formed the Rebel Alliance. He was later involved in the early campaigns of the Rebel Alliance, by which time
            his more, extreme tactics had come to stand in stark contrast with those of Alliance leaders <Link>Bail Organa</Link> and
            <Link to="/starwars/mon_mothma"> Mon Mothma</Link>. Gerrera eventually cut ties with Organa and Mothma, who viewed him as a militant and extremist.
          </p>
          <p>
            Having learned that the Empire's massive <Link>kyber crystal</Link> had come from <Link>Jedha</Link>, Saw and the Partisans based their operation there.
            After the capture of an Imperial ensign, <Link>Bodhi Rook</Link>, who claimed that the Empire was building a planet-killer, Saw was reunited with Jyn,
            whom the Alliance had sent to meet with him. Since Rook had sent him a message from Jyn's father. Gerrera showed it to her, which revealed that the Empire
            was constructing a planet-killing superweapon called the <Link>Death Star</Link>. As the message played, however, the Death Star struck Jedha City and
            destroyed it. As the ripple of the explosion reached them, Gerrera told Jyn he was done running and stayed at the base, and was killed by the aftermath
            of the blast.
          </p>
        </div>
      </main>
    </>
  )
}

export default SawGerrera;