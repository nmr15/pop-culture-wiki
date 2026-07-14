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
            <b>James Buchanan "Bucky" Barnes</b> is a World War II veteran, former sergeant of the 107th Infantry Regiment, the best friend of
            <Link to="/mcu/steve_rogers"> Steve Rogers</Link> since childhood, and a founding member of the <Link>New Avengers</Link>. Bucky had
            enlisted into the Army following the attack on Pearl Harbor and was assigned to the 107th in 1943. His unit was captured by
            <Link> Hydra</Link>, where Bucky was injected with the <Link>Super Soldier Serum</Link> by <Link>Arnim Zola</Link>. Bucky was rescued by
            Rogers, who had become Captain America. Bucky and Rogers then formed the <Link>Howling Commandos</Link> to battle <Link>Red Skull</Link>'s
            forces. However, during the attempt to finally capture Zola in the Austrian Alps, Bucky was caught up in the ambush and plummeted hundreds
            of feet. As no body was recovered, Bucky was presumed deceased and honored as a hero who died in service to his country.
          </p>
          <p>
            Unbeknownst to his team, Barne's enhanced abilities allowed him to survive the fall, albeit with the loss of his left arm. Once he was found
            by the Soviet Armed Forces and Hydra, Bucky was brainwashed and armed with a new cybernetic arm in order to become their operative, known as
            <b>Winter Soldier</b>. Over the next seventy years, he killed anyone who posed any kind of threat to Hydra or the Soviet Union, including
            John F. Kennedy, as well as <Link>Howard Stark</Link> and his wife <Link>Maria</Link>. Between missions, the Winter Soldier would be put back
            into a cryogenic stasis to ensure his longevity. In 2014, the Winter Soldier was ordered by <Link>Alexander Pierce</Link> to kill
            <Link> Nick Fury</Link>, in order to ensure that all of Pierce's schemes with Project Insight could go ahead. However, the Winter Soldier was
            challeneged by Steve Rogers, leading to him to begin remembering his prior life.
          </p>
          <p>
            In the wake of the Battle at the Triskelion, Bucky, now free, deserted Hydra in order to remember his past and end his long, violent history.
            Two years later, Bucky was framed for the bombing of the Vienna International Centre, which claimed the life of
            <Link to="/mcu/t'chaka"> T'Chaka</Link>. As <Link to="/mcu/t'challa">T'Challa</Link> then sought his revenge for his father's death, Bucky was
            repeatedly saved by Steve, which sparked the Avengers Civil War as a team of Avengers led by <Link to="/mcu/tony_stark">Tony Stark</Link> was
            sent to capture him. However, they learned that <Link to="/mcu/baron_zemo">Helmut Zemo</Link> framed Bucky and reactivated his brainwashing so
            that Zemo could reveal that Bucky had murdered Tony's parents years ago. Having just survived Tony's revenge, Bucky was given amnesty in
            <Link to="/mcu/wakanda"> Wakanda</Link> by T'Challa and was placed in cryostasis until all of Hydra's control could be removed.
          </p>
          <p>
            With the help of <Link to="/mcu/shuri">Shuri</Link>, Bucky was finally cured of his brainwashing, earning the nickname White Wolf. However, as
            <Link to="/mcu/thanos">Thanos</Link> attempted to kill <Link to="/mcu/vision">Vision</Link> for the 
            <Link to="/mcu/mind_stone"> Mind Stone</Link>, Bucky received a new vibranium arm and joined the defense of Wakanda. Bucky defeated many of the
            Outriders alongside <Link to="/mcu/rocket">Rocket</Link>, only for Thanos to defeat them and assemble all of the
            <Link to="/mcu/infinity_stones"> Infinity Stones</Link>. Bucky was killed when Thanos eliminated half of all life in the universe. Five years
            later, Bucky was resurrected by <Link to="/mcu/bruce_banner">Bruce Banner</Link> and participated in the final battle against Thanos. In the
            aftermath of the battle, he attended the funeral of Tony Stark with all the other heroes. Later on, Bucky bid Steve farewell, knowing of his
            intention to time travel back to the 1940s. Bucky then saw Steve, as a much older man, return home in order to pass the shield onto Sam. 
          </p>
          <p>
            With his name pardoned, Bucky sought atonement for all his actions as the Winter Soldier. His attempts were interrupted when
            <Link to="/mcu/john_walker"> John Walker</Link> was made the next Captain America, and the <Link to="/mcu/flag_smashers">Flag Smashers</Link>
            emerged to act against the GRC's efforts to handle the aftermath of the <Link to="/mcu/the_blip">Blip</Link>. He and Sam would go on a
            mission to stop the Flag Smashers, working with Zemo and <Link to="/mcu/sharon_carter">Sharon Carter</Link>. However, their mission was
            complicated by Walker's attacks, until Walker murdered a Flag Smasher over Battlestar's death. Bucky and Sam were forced to defeat Walker to
            stop him from continuing to be Captain America. Bucky would then join Sam and Walker in the final battle with the Flag Smashers, helping in
            their defeat and making amends with his past. The next year, he was attacked by <Link to="/mcu/nebula">Nebula</Link>, who stole his arm so that
            she could give it to Rocket as a Christmas gift. By 2027, Bucky entered into politics and began a campaign to get elected into the United
            States Congress.
          </p>
        </div>
      </main>
    </>
  )
}

export default HopeVanDyneMCU;