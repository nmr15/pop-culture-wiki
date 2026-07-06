import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from "../../../components/TableMcu"

const AjakMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Ajax (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Creation", sub2: [
                {id: "1.1.1", title: "Aiding the Celestials for millenia"}
              ]},
              {id: "1.2", title: "Earth mission", sub2: [
                {id: "1.2.1", title: "Arriving on Earth"},
                {id: "1.2.2", title: "Battle of Babylon"}
              ]},
              {id: "1.3", title: "500 year war", sub2: [
                {id: "1.3.1", title: "Mission in Spain"},
                {id: "1.3.2", title: "Ending the war"}
              ]},
              {id: "1.4", title: "Distracting Phastos"},
              {id: "1.5", title: "Victory", sub2: [
                {id: "1.5.1", title: "Defeating the Deviants"},
                {id: "1.5.2", title: "Splitting up the Eternals"}
              ]},
              {id: "1.6", title: "Emergence", sub2: [
                {id: "1.6.1", title: "Changing her mind"},
                {id: "1.6.2", title: "Betrayed by Ikaris"}
              ]},
              {id: "1.7", title: "Legacy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", ttle: "Powers"},
              {id: "3.2", ttle: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Weapons"},
              {id: "4.2", title: "Other equipment"},
              {id: "4.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Facilities</a></li>
          <li className="sidebar-list-item"><a href="#6">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#76">Behind the scenes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Ajax (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ajax (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ajax</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3f/Ajak_Infobox.jpg" alt="Ajax" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Salma Hayek</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link to="/mcu/eternals">Eternals</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ajak</b> is the original Prime Eternal, as well as the wise and spiritual leader of the community of genetically engineeed
            <Link> Eternals</Link> who came to <Link>Earth</Link>. Created by the <Link>Celestials</Link> in the <Link>World Forge</Link>. Ajak was sent
            to Earth in 5000 BC to progress the planet's societal development, and protect it from the <Link>Deviants</Link>. Ajak was aware of her
            purpose in life to pave the way for Earth's <Link>Emergence</Link> with the birth of <Link>Tiamut the Communicator</Link>. However, she was
            inspired by the heroics of the <Link>Avengers</Link> during the the Battle of Earth, and instead opposed the ideals of her creators, believing
            humanity was worth saving. Although having confided her opposition to <Link>Ikaris</Link>, she was ultimately betrayed by him and lured to a
            pack of Deviants in Alaska for her to be murdered. As a result of Ajak's death, <Link>Sersi</Link> was named as her successor as the Prime
            Eternal.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <h4 className="article-heading-4" id="1.1.1">Aiding the Celestials for millenia</h4>
            <p>
              Ajak was genetically programmed by Arishem the Judge, the leader of the Celestials, and was sent to multiple planets to protect and help evolve
              sentient life forms from the Deviants, powering a Celestial seed inside the planet, which would absorb the energy made from the sentient lifeforms.
              Eventually, the Emergence would occur, destroying the planet in the process. Upon finishing their mission, the Eternals would be sent back to the
              World Forge to have their memories erased and reset. Ajak herself helped the Celestials in many planets, ensuring the Emergence to happen.
            </p>

            <h3 className="article-heading-3" id="1.2">Earth mission</h3>
            <h4 className="article-heading-4" id="1.2.1">Arriving on Earth</h4>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/ca/Ajak_glowing_eyes.png" alt="Ajak wakes up" />
                <p>Ajak being awoken by the Celestial Communication Sphere.</p>
              </div>
              <p>
                Eventually, Arishem instructed Ajak alongside a group of Eternals to travel to the planet called Earth to protect life forms from the
                Deviants. He privately informed her that they would also be secretly fostering the birth of a Celestial within the planet around 5000 BC.
                Before their arrival on Earth, Ajak and the other Eternals were assigned to the Domo, and she was awoken by the Celestial Communication
                Sphere to instruct the others to prepare for arrival. She and the other Eternals entered their own stations where they were given proper
                uniforms and then arrived at the planet.
              </p>
            </div>
            <div className="flex">
              <p>
                Once the Domo had gone through Earth's atmosphere, <Link to="/mcu/ikaris">Ikaris</Link>, <Link to="/mcu/thena">Thena</Link>,
                <Link to="/mcu/gilgamesh"> Gilgamesh</Link>, <Link to="/mcu/makkari">Makkari</Link>, and <Link to="/mcu/kingo">Kingo</Link> went to the
                ground to protect the humans from Deviants. Ajak and the others stayed in the Domo until all the present Deviants were killed. She and
                the others levitated down onto the ground where they were joined by the other Eternals, Ajak used her power to heal Ikaris, who had a
                contusion on his shoulder, and then presented themselves to the race they were assigned to protect.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Ajak_Heals_Ikaris.png" alt="Ajak healing Ikaris" />
                <p>Ajak healing Ikaris on Earth in 5000 BC.</p>
              </div>
            </div>

            <h4 className="article-heading-4" id="1.2.2">Battle of Babylon</h4>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/74/AjakCloseUp.png" alt="Ajak communicates with Arishem" />
                <p>Ajak communicates with Arishem the Judge.</p>
              </div>
              <p>
                In Babylon, within
              </p>
            </div>
            <div className="flex">
              <p>
                Ajak then went
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/31/Ajak_Eternals_Trailer.png" alt="Ajak observing Phastos's work" />
                <p>Ajak observing Phastos's work.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f7/AjakAtCelebration.png" alt="Ajak speaks with Ikaris" />
                <p>Ajak speaks with Ikaris.</p>
              </div>
              <p>
                Later that night
              </p>
            </div>
            <p>
              After the Eternals
            </p>

            <h3 className="article-heading-3" id="1.3">500 year war</h3>
            <h4 className="article-heading-4" id="1.3.1">Mission in Spain</h4>
            <div className="flex">
              <p>
                Ajak and Phastos
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6d/Ambush_in_Cordoba.png" alt="Ajak and Phastos fighting a Deviant" />
                <p>Ajak and Phastos fighting a Deviant in Cordoba.</p>
              </div>
            </div>

            <h4 className="article-heading-4" id="1.3.2">Ending the war</h4>
            <p>
              Ajak was contacted
            </p>

            <h3 className="article-heading-3" id="1.4">Distracting Phastos</h3>
            <p>
              Ajak became concerned
            </p>
            <p>
              Phastos backed away
            </p>

            <h3 className="article-heading-3" id="1.5">Victory</h3>
            <h4 className="article-heading-4" id="1.5.1">Defeating the Deviants</h4>
            <p>
              Ajak and the
            </p>
            <div className="flex">
              <p>
                During the fall
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f6/ThenaHurtsAjak.png" alt="Thena stabs Ajak" />
                <p>Thena stabs Ajak.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/06/AjakStopsThena.png" alt="Ajak assures Thena" />
                <p>Ajak assures Thena.</p>
              </div>
              <p>
                They all took
              </p>
            </div>
            <div className="flex">
              <p>
                This resulted in
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/ab/DruigScoldsAjak.png" alt="Druig argues with Ajak" />
                <p>Druig argues with Ajak.</p>
              </div>
            </div>
            <p>
              Gilgamesh then volunteers
            </p>
            
            <h4 className="article-heading-4" id="1.5.2">Splitting up the Eternals</h4>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0d/Ajak_splits_the_Team.png" alt="Ajak splits up the Eternals" />
                <p>Ajak splits up the Eternals in Tenochtitian.</p>
              </div>
              <p>
                In the same
              </p>
            </div>

            

            <h3 className="article-heading-3" id="1.6">Emergence</h3>
            <h4 className="article-heading-4" id="1.6.1">Changing her mind</h4>
            
            <h4 className="article-heading-4" id="1.6.2">Betrayed by Ikaris</h4>

            <h3 className="article-heading-3" id="1.7">Legacy</h3>
            
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Personality"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Powers and abilities"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Powers</h3>

            <h3 className="article-heading-3" id="3.2">Abilities</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Equipment"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Weapons</h3>

            <h3 className="article-heading-3" id="4.2">Other equipment</h3>

            <h3 className="article-heading-3" id="4.3">Vehicles</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Facilities"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Trivia"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Behind the scenes"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AjakMCU;