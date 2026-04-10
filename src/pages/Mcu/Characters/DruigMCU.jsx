import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const DruigMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Druig (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Protecting humanity", sub2: [
                {id: "1.2.1", title: "Arriving on Earth"},
                {id: "1.2.2", title: "Battle of Helen-Kyo"},
                {id: "1.2.3", title: "Hide and seek"},
                {id: "1.2.4", title: "Defeating Kapa"},
                {id: "1.2.5", title: "Retelling Helen-Kyo"},
                {id: "1.2.6", title: "Fall of Tenochtitian"},
                {id: "1.2.7", title: "Starting a community"}
              ]},
              {id: "1.3", title: "The Emergence", sub2: [
                {id: "1.3.1", title: "Reuniting with the Eternals"},
                {id: "1.3.2", title: "Ambush at the compound"},
                {id: "1.3.3", title: "Returning to the Domo"},
                {id: "1.3.4", title: "Stopping the Emergence"}
              ]},
              {id: "1.4", title: "Finding other Eternals", sub2: [
                {id: "1.4.1", title: "Meeting Starfox"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Former powers"},
              {id: "2.3", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Vehicles"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Druig (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Druig (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Druig</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6d/Druig_Character_Poster.jpg" alt="Druig" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Barry Keoghan</Link></td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data"><Link to="/mcu/eternals">Eternals</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Druig</b> is a member of the genetically engineered <Link>Eternals</Link>, which came to Earth around 5000 BC. He possesses the ability to control
            minds. Despite developing a close relationship with fellow Eternal <Link to="/mcu/makkari">Makkari</Link>, he grew disillusioned with their mission and
            chose to leave the Eternals, forming a society of mind-controlled humans. Living in a self imposed exile for centuries, Druig led his secret society,
            keeping them safe from what he saw as the horrors of the outside world.
          </p>
          <p>
            When the Eternals reformed in 2024 to stop the Emergence, they traveled to Druig's compound to convince him to join them once again. While he was
            initially unwilling, the Deviants attack on his people forced him to reconsider, and he reconciled with his old friends. Following their victory, Druig
            and the remaining Eternals went their separate ways, with Druig joining Makkari and <Link to="/mcu/thena">Thena</Link> in leaving Earth aboard the Domo
            in order to search for other Eternals across the galaxy. In space, the trio encountered <Link>Thanos</Link>' adoptive brother, Starfox.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Bioraphy"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <p>
              Druig was built and programmed by Arishem the Judge, and was presumably sent to multiple planets to protect and help evolve sentient life forms from
              the Deviants, powering a Celestial seed inside the planet, which would absorb the energy from the sentient lifeforms. Eventually, the Emergence would
              occur, destroying the planet in the process. Upon finishing their mission, the Eternals would be sent back to the World Forge to have their memories
              erased and reset.
            </p>

            <h3 className="article-heading-3" id="1.2">Protecting humanity</h3>
            <h4 className="article-heading-4" id="1.2.1">Arriving on Earth</h4>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b4/DruigControls.png" alt="Druig 5000 BC" />
              <p>Druig arrives on Earth 5000 BC.</p>
            </div>
            <p>
              Druig, alongside the rest of the Eternals, was sent to Earth on the Domo. Once awoken, the Eternals were provided with suits to wear before arriving
              at the planet. Not being one of the Eternal's main fighters, Druig waited as the others fought the Deviants. When the Deviants attacking the humans
              were defeated, Druig came down, using his powers to calm the humans, and the Eternals presented themselves to the race they were assigned to protect.
              Over the course of history, Druig continued to assist the Eternals in the extermination of the Deviants.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/83/DruigControlsBabylonians.png" alt="Druig tries to control Babylon" />
              <p>Druig tries to control Babylon.</p>
            </div>
            <p>
              Like the other Eternals, Druig resided in Babylon in 575 BC. He witnessed <Link to="/mcu/phastos">Phastos</Link> designing the steam engine to be used
              by the Babylonians, joking that humans only knew the wheel for a thousand years and that such a sophisticated invnetion was too soon to be given to
              humanity. Later, Druig was present at a party held to celebrate the victory of the Eternals against other Deviants such as Enkidu. During the party, he
              conversed with two Babylonians who claimed to be able to help Makkari find the Emerald Tablet, before using his powers to stop a brawl, although
              Makkari reminded him that he was not supposed to. Druig then agreed to not tell anyone about Makkari stealing items if she kept silent to
              <Link to="/mcu/ajak"> Ajak</Link> regarding what he had done.
            </p>
            <p>
              In 400 BC, in the Gupta Empire, Druig attended the wedding of <Link to="/mcu/ikaris">Ikaris</Link> and <Link to="/mcu/sersi">Sersi</Link>.
            </p>

            <h4 className="article-heading-4" id="1.2.2">Battle of Helen-Kyo</h4>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e7/MakkariVsKappa.png" alt="Makkari vs. Kappa" />
              <p>Druig watches Makkari fight.</p>
            </div>
            <p>
              In 1084, Druig and Makkari arrived in Helen-Kyo to help the city with violent Deviants. Upon arrival, Makkari engaged in a battle with a Deviant named
              Kappa while Druig watched from the sidelines. A finishing punch was delivered after a man named Yoshiie Minamoto shot the deviant with an arrow.
            </p>
            <p>
              After, the three of them devised a plan to eradicate the deviants. However, Kappa returned and leapt towards Minamoto. Druig jumped in front of him and
              got badly bitten by the deviant. Seeing no other way, Druig apologized to Minamoto before controlling him to use his katana to severe Kappa's arms.
              Druig assumed that Kappa died from his wounds. To show his gratitude, Minamoto giften Druig the katana, called the Onikirimaru.
            </p>

            <h4 className="article-heading-4" id="1.2.3">Hide and seek</h4>
            <p>
              Druig and Makkari decided to play a global game of hide and seek, so Druig hid in a village in the Mediterranean region. Druig saw Makkari asking if
              the villagers had seen him, so he used his mind control abilities to make them say they had not, but only after they had already said they did. Druig
              snickered as he saw Makkari express confusion at the situtation. Makkari evacuated the village and began running around it, using her super speed to
              create multiple sonic booms. Overcome by the sound, Druig came out of hiding and declared that Makkari won. While Makkari returned everyone to their
              home village, Druig left and went to hide in Africa, beginning a new round.
            </p>

            <h4 className="article-heading-4" id="1.2.4">Defeating Kapa</h4>
            <p>
              Nearly 500 years later, in 1520 while dicovering a Deviants Nest, Druig realized that Kappa was still alive and took his controlling powers. He then
              used his powers to control many deviants to attack the Eternals. This was going on for 500 years. The Eternals then defeated Kappa and the others once
              and for all.
            </p>

            <h4 className="article-heading-4" id="1.2.5">Retelling Helen-Kyo</h4>
            <p>
              Later, Druig saw Makkari and Sersi ask <Link to="/mcu/sprite">Sprite</Link> where the Onikirimaru came from. Sprite created an illusion to retell the
              story about how Druig obtained it while Makkari and Druig narrated.
            </p>

            <h4 className="article-heading-4" id="1.2.6">Fall of Tenochtitian</h4>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1c/City_on_flames.png" alt="Tenochtitian burning" />
              <p>Druig facing Tenochtitian on flames</p>
            </div>
            <p>
              Druig was present in the Aztec capital of Tenochtitian as it was attacked by the Spanish conquistadors. Since a group of Deviants was also there at
              the time, he waited with other Eternals in a nearby forest while the fighting Eternals disposed of the creatures. Upon witnessing the fights between
              the Spanish and the Aztecs, Druig attempted to mind control them to end the war, only to be stopped by Ajak who reminded him that the Eternals were
              not supposed to interfere in human wars, Druig replied that what they were watching was not a true war but rather a genocide. Druig then blamed
              Phastos for having hekped humans to develop firearms which were now used to fuel their wars.
            </p>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/84/Druig_%28Eternals%29.png" alt="Druig" />
              <p>Druig yells at Ajak</p>
            </div>
            <p>
              However, before the argument could escalate further, Thena suffered from a Mahd Wy'ry episode, which caused her to attack the other Eternals. Druig
              knelt beside Phastos after he was wounded, and was nearly struck by Thena's spear before Makkari drove her away, even though she was severely hurt
              in the process. Later, once Thena had been knocked unconscious, Druig and the other Eternals stood beside her, waiting for her to regain
              consciousness. As Ajak explained that she had to erase her memories, Druig criticized this decision, stating that this would wipe out Thena's identity.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/92/DruigLeaves.png" alt="Druig leaves" />
              <p>Druig leaves the Eternals</p>
            </div>
            <p>
              A devastated Druig then proceeds to let go of all his frustration, as he was upset at the loss of his home and the humans he grew to love and he
              wanted to be able to save the place from devastation. Nevertheless, he was instructed by Ajak to abstain from human affairs, but he ignored her
              command and used his powers to stop the fights between the Spanish and the Aztecs, defying Ikaris who ordered him to stop. Refusing to obey Ajak any
              longer, Druig deserted from the Eternals and ended the Spanish conflict himself, taking a group of humans with him and successfully leading them into
              a life of isolation.
            </p>

            <h4 className="article-heading-4" id="1.2.7">Starting a community</h4>
            <p>
              Over the next five hundred years, Druig founded and managed to run a community controlled by his powers within the Peruvian Amazonia. He started a
              settlement and managed a peacful lifestyle off the shores of Lake Junin, running a camp composed of farmers, woodworkers, and fishermen, among
              others. 
            </p>

            <h3 className="article-heading-3" id="1.3">The Emergence</h3>
            <h4 className="article-heading-4" id="1.3.1">Reuniting with the Eternals</h4>


            <h4 className="article-heading-4" id="1.3.2">Ambush at the compound</h4>


            <h4 className="article-heading-4" id="1.3.3">Returning to the Domo</h4>


            <h4 className="article-heading-4" id="1.3.4">Stopping the Emergence</h4>


            <h3 className="article-heading-3" id="1.4">Finding other Eternals</h3>
            <h4 className="article-heading-4" id="1.4.1">Meeting Starfox</h4>
          </div>
        </div>
      </main>
    </>
  )
}

export default DruigMCU;