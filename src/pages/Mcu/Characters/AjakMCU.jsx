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

            <h3 className="article-heading-3" id="1.2">Earth mission</h3>
            <h4 className="article-heading-4" id="1.2.1">Arriving on Earth</h4>

            <h4 className="article-heading-4" id="1.2.2">Battle of Babylon</h4>

            <h3 className="article-heading-3" id="1.3">500 year war</h3>
            <h4 className="article-heading-4" id="1.3.1">Mission in Spain</h4>

            <h4 className="article-heading-4" id="1.3.2">Ending the war</h4>

            <h3 className="article-heading-3" id="1.4">Distracting Phastos</h3>

            <h3 className="article-heading-3" id="1.5">Victory</h3>
            <h4 className="article-heading-4" id="1.5.1">Defeating the Deviants</h4>
            
            <h4 className="article-heading-4" id="1.5.2">Splitting up the Eternals</h4>

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