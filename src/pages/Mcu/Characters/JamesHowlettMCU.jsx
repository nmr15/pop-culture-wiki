import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const JamesHowlettMCU = () =>
{
  useEffect(() =>
  {
    document.title = "James Howlett (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Wolverine origins"},
                {id: "1.1.2", title: "Death of the X-Men"}
              ]},
              {id: "1.2", title: "Perservation of Earth-10005", sub2: [
                {id: "1.2.1", title: "Taken from his world"},
                {id: "1.2.2", title: "Fight in the Void"},
                {id: "1.2.3", title: "Escape from Cassandra Nova"},
                {id: "1.2.4", title: "Meeting the resistance"},
                {id: "1.2.5", title: "Escaping the Void"},
                {id: "1.2.6", title: "Fighting the Deadpool Corps"},
                {id: "1.2.7", title: "Saving all timelines"}
              ]},
              {id: "1.3", title: "New world, new life", sub2: [
                {id: "1.3.1", title: "Celebrating victory"}
              ]}
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
          <li className="sidebar-list-item"><a href="#3">Equipment</a></li>
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>James Howlett (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">James Howlett (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>James Howlett</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Wolverine_Infobox.png" alt="James Howlett" />
                </span>
              </td>
            </tr>
           <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Hugh Jackman</Link></td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data"><Link to="/mcu/deadpool_&_wolverine">Deadpool & Wolverine</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>James Howlett</b>, more commonly referred to as <b>Logan</b>, is a formidable <Link>mutant</Link> with retractable <Link>adamantium</Link> claws and
            regenerative abilities operating under the alias <b>Wolverine</b>, who failed both his teammates, the <Link>X-Men</Link>, and his world, sending him into
            a depressive spiral. He was taken from his <Link>universe</Link> by <Link to="/mcu/wade_wilson">Deadpool</Link> in the latter's attempt to replace his
            own <Link>reality</Link>'s Wolverine, though the two were banished to the <Link>Void</Link> by Mr. Parasox's rogue faction of <Link>Time Variance
            Authority</Link> agents. Wolverine and Deadpool formed an initially very uneasy alliance to try and escape the Void, which they did with the aid of the
            Reisistance. Now together as friends, the pair was able to stop Paradox's plan to destroy Deadpool's timeline and eliminate
            <Link>Cassandra Nova</Link> to save the entire <Link>Multiverse</Link>, eventually allowing Logan to come to better terms with his past mistakes and live
            peacefully in Wade Wilson's universe.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early life</h3>
            <h4 className="article-heading-4" id="1.1.1">Wolverine origins</h4>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/38/Wolverine_Memory_%28X2_Archive_Footage%29.png" alt="Wolverine memory" />
              <p>
                Adamantium is fused to Logan's skeleton.
              </p>
            </div>
            <p>
              Logan was a Canadian-born mutant who developed a regenerative healing factor as well as retractable claws, and eventually, adamantium was fused onto his
              bones during an intensely painful and brutal experiment. Due to his healing factor, he had lived for over two hundred years, and over the years, he had
              many violent encounters and eventually became something of an alcoholic and a recluse.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6c/Wolverine_vs._HYDRA_%28X2_Archive_Footage%29.png" alt="Wolverine vs. HYDRA" />
              <p>Wolverine killing enemies in the X-Mansion</p>
            </div>
            <p>
              He often allied with the X-Men, Charles Xavier's team of mutant superheroes, and became known as Wolverine. All his teammates whom he befriended, including
              Cyclops, Jean Grey, Storm, and Best, offered Logan the <Link>Wolverine Suit</Link> and begged him to wear it to be part of the team, though he rejected it and
              called their own outfits ridiculous in an effort to have them not think he wanted to be there.
            </p>

            <h4 className="article-heading-4" id="1.1.2">Death of the X-Men</h4>
            <p>
              One day, a drunken Logan returned to the X-Mansion to find that, while he was gone, humans who had hated and feared mutant-kind orchestrated a surprise attack
              on the X-Mansion, resulting in all the other X-Men and numerous mutants being murdered. Due to Logan's absence during this attack, he took the blame for their
              deaths upon himself and went on a violent rampage, killing those who were and were not involved in the slaughtering of his teammates. By the time he calmed
              down and regained his senses, the X-Men name had been tarnished and Logan was shunned by society for his actions, resulting in him growing into a state of
              heavy depression. He began wearing the Wolverine suit at all times underneath his regular clothes, as it was the only memento of his teammates and actions.
            </p>
            
            <h3 className="article-heading-3" id="1.2">Perservation of Earth-10005</h3>
            <h4 className="article-heading-4" id="1.2.1">Taken from his world</h4>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/39/Deadpool_and_Logan_at_a_bar.jpg" alt="Deadpool and Logan at a bar" />
                <p>Logan contronts Deadpool</p>
              </div>
              <p>
                By a bar's counter, Logan was given another drink by a bartender who eagerly wanted him gone. Logan was approached by Wade Wilson, also known as
                Deadpool, a person who claimed to know him and to need him for his world. Questioned by the bartender if they are going to fuck or fight, Logan did
                not react to the insult, much to Deadpool's surprise. Remarking that any other Wolverine would have hurt him by now and that he had little time,
                Deadpool raised Logan up from his seat, to which Logan responded by popping his claws. His claws had grown miniscule, as Deadpool sarcastically
                noted before puting a gun to Logan's head. Logan simply laughed, drinking a whole bottle of whiskey while holding the gun for Deadpool to watch
                before collapsing to the floor.
              </p>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Deadpool_and_Wolverine_at_the_TVA.jpg" alt="Deadpool Wolverine at TVA" />
                <p>
                  Wolverine rises behind Deadpool.
                </p>
              </div>
              <p>
                An unconscious Logan was taken into the Time Variance Authority Office through a Timedoor only dressed in his suit, falling on the floor yet hearing
                Deadpool and Mr. Paradox's conversation about the impossibility of replacing what is known as an "Anchor Being," which was Deadpool's timeline's own
                Wolverine and Deadpool's actions to do so. Logan eventually rose up and was welcomed into the <Link to="/mcu">Marvel Cinematic Universe</Link> by
                Deadpool, albeit at a "low point." Deadpool went on to threaten Paradox by alerting his bosses, only to find out that they do not know. Logan was
                confused to see Deadpool pruned by a Time Stick, which he was as well in his attempt to harm Parasox.
              </p>
            </div>

            <h4 className="article-heading-4" id="1.2.2">Fight in the Void</h4>
            <h4 className="article-heading-4" id="1.2.3">Escape from Cassandra Nova</h4>
            <h4 className="article-heading-4" id="1.2.4">Meeting the resistance</h4>
            <h4 className="article-heading-4" id="1.2.5">Escaping the Void</h4>
            <h4 className="article-heading-4" id="1.2.6">Fighting the Deadpool Corps</h4>
            <h4 className="article-heading-4" id="1.2.7">Saving all timelines</h4>

            <h3 className="article-heading-3" id="1.3">New world, new life</h3>
            <h4 className="article-heading-4" id="1.3.1">Celebrating victory</h4>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Powers and abilities"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Powers</h3>
            <h3 className="article-heading-3" id="2.2">Abilities</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Equipment"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Facilities"} />
          <div>

          </div>
        </div>
      </main>
    </>
  )
}

export default JamesHowlettMCU;