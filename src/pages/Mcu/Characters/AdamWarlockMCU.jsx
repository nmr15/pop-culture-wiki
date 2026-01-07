import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableMcu from "../../components/TableMcu"

const AdamWarlockMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Adam Warlock (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Ayesha's Revenge"}
              ]},
              {id: "1.2", title: "The Warlock", sub2: [
                {id: "1.2.1", title: "Battle with the Guardians"},
                {id: "1.2.2", title: "Recovering and torture"},
                {id: "1.2.3", title: "Arriving at the Orgoscope"},
                {id: "1.2.4", title: "Battle of Counter-Earth"},
                {id: "1.2.5", title: "Attack on Arête Laboratories"},
                {id: "1.2.6", title: "Second chance"}
              ]},
              {id: "1.3", title: "The Next Guardians", sub2: [
                {id: "1.3.1", title: "Battle of Krylor"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
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
              {id: "4.1", title: "Vehicles"},
              {id: "4.2", title: "Other equipment"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Facilities</a></li>
          <li className="sidebar-list-item"><a href="#6">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#7">Behind the scenes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Adam Warlock (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Adam Warlock (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Adam Warlock</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/08/Adam_Warlock_Infobox.png" alt="Adam Warlock" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Will Poulter</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link>Guardians of the Galaxy Vol. 3</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Adam Warlock</b> is a <Link>Sovereign</Link> created by his mother <Link>Ayesha</Link> as a living weapon designed to kill the
            <Link> Guardians of the Galaxy</Link>. He was prematurely awaked by <Link>High Evolutionary</Link>, who tasked him with capturing
            <Link to="/mcu/rocket"> Rocket</Link>, only for Adam's efforts to be thwarted by the Guardians. Adam joined his mother Ayesha on a trip to
            <Link>Counter-Earth</Link> to retrieve Rocket under threat of Sovereign extinction, although High Evolutionary <Link>destroyed</Link> the
            planet, killing Ayesha in the process. Adam eventually tried to attack High Evolutionary's <Link>ship</Link> but failed yet again and was
            rescued by <Link to="/mcu/groot">Groot</Link>. In redemption, Adam later saved <Link to="/mcu/peter_quill">Star-Lord</Link> from dying in
            space and joined the new Guardians roster under Rocket's leadership.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <h3 className="article-heading-3" id="1.2">The Warlock</h3>
            <h3 className="article-heading-3" id="1.3">The Next Guardians</h3>
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
            <h3 className="article-heading-3" id="4.1">Vehicles</h3>
            <h3 className="article-heading-3" id="4.2">Other equipment</h3>
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

export default AdamWarlockMCU;