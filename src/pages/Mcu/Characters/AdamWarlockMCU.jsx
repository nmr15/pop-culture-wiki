import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from "../../../components/TableMcu"

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

            <h4 className="article-heading-4" id="1.1.1">Ayesha's Revenge</h4>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/GotGV2_Adam_3.jpg" 
                alt="GotGV2_Adam" 
              />
              <p>Adam gestating in a pod</p>
            </div>
            <p className="p-bottom-margin">
              Following the Battle on Ego's Planet, Ayesha feared the Sovereign council would seek to punish her for her humiliating defeat at the hands
              of the Guardians of the Galaxy, which resulted in the destruction of an entire fleet of <Link>Omnicrafts</Link>.
            </p>
            <p className="p-bottom-margin">
              However, Ayesha remained confident in still being able to exact vengeance against the Guardians. Using an advanced <Link>birth pod</Link>,
              Ayesha began creating a being capable of defeating the Guardians. While showing the Birth Pod to her chambermaid, Ayesha decided to name
              her creation Adam.
            </p>

            <h3 className="article-heading-3" id="1.2">The Warlock</h3>
            <h4 className="article-heading-4" id="1.2.1">Battle with the Guardians</h4>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a1/Adam_flying_in_space.png" 
                alt="Adam_flying_in_space" 
              />
              <p>Adam flies through space to <Link>Knowhere</Link></p>
            </div>
            <p className="p-bottom-margin">
              Adam was soon awoken from his cocoon slightly early by High Evolutionary, who wanted him to find subject 89P13. Adam, taking on the title
              of the Warlock, flew across space toward <Link>Knowhere</Link>, where Rocket and the Guardians of the Galaxy were supposed to be located.
              He spotted Rocket by the window and then proceeded to crash into him. Adam tackled Rocket and crashed him through several rooms until he
              and Rocket crashed outside of Star-Lord's window.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/97/Nebula_meets_Adam_Warlock.png" 
                alt="Nebula_meets_Adam_Warlock" 
              />
              <p>Adam is ordered to surrender by <Link to="/mcu/nebula">Nebula</Link>.</p>
            </div>
            <p className="p-bottom-margin">
              Outside, Adam held Rocket in his hands, but Rocket managed to escape after scrambling out of his grasp. Adam called out to him before
              being confronted by <Link to="/mcu/nebula">Nebula</Link>, now wearing a jetpack and heavily upgraded cybernetic arm cannon. She demands
              him to stand down, but Adam attacks her before she blasted him to an apartment. However, Adam was unfazed by the blast and clashed with
              Nebula, forcing her to crash in the middle of <Link>Eitar</Link>. He pinned Nebula down on the ground and mercilessly punched her
              repeatedly, heavily damaging and tossing her away into a shop nearby.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/16/Groot_vs._Adam.png" 
                alt="Groot vs. Adam" 
              />
              <p>Adam being strangled by Groot.</p>
            </div>
            <p className="p-bottom-margin">
              Next, Groot jumped down and toppled Adam. He tried to fight back, but Groot had his roots wrapped around him tightly, forcing Adam to boost
              himself and Groot up in the air around the Knowhere buildings. He blasted some of the roots off him and then proceeded to rip Groot to
              shreds by dragging him across the buildings before he came down with only Groot's head remaining. As Groot fled, Adam walked around to find
              Rocket, only to be ambushed by a <Link>Yaka Arrow</Link>. However, the arrow weakly deflects off of Adam's cheek, annoying him. Adam spoke
              out for whoever threw the arrow at him. When there was no answer, he merely uttered that the attacker was a baby.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/The_Warlock_cometh.png" 
                alt="Adam fatally blasts Rocket" 
              />
              <p>Adam fatally blasts Rocket.</p>
            </div>
            <p className="p-bottom-margin">
              He finally managed to locat Rocket at the armory, and before Rocket could attack. Adam blasted him with his rays, severely wounding the
              Halfworlder. Mantis found Adam and attacked, but he grabbed her arm and easily broke it in half before thorwing her aside. Next came
              Star-Lord, who blasted Adam with his <Link>Quad Blaster</Link>, but this was no use once again.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b5/Adam_punching_Drax.png" 
                alt="Adam punching Drax" 
              />
              <p>Adam repeatedly hits Drax.</p>
            </div>
            <p className="p-bottom-margin">
              Despire doing no harm, Star-Lord distracts Adam long enough for Drax to sneak up behind him and pick him up. Drax punched Adam across the
              shops and then threw him over to another shop. Despite that, Adam remained unfazed and then attacked Drax with a headbutt and multiple
              punches before using his rays to blast him. However, Drax survived as Adam approached him and beat the latter senselessly.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b9/Exitar_Knowhere.png" 
                alt="Exitar Knowhere" 
              />
              <p>Adam escapes after being wounded.</p>
            </div>
            <p className="p-bottom-margin">
              Adam focused on Drax, allowing a healed Nebula to come up behind him and stab Adam through the chest. A shocked Adam remarked at how that
              hurt before collapsing to the ground. Adam soon mustered the strength to get up as everyone checked on the injured Rocket. He used this
              commotion to make his getaway, struggling to fly off back to <Link>Arête Laboratories</Link> on Counter-Earth.
            </p>

            <h4 className="article-heading-4" id="1.2.2">Recovering and torture</h4>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/ed/Adam_Warlock_with_his_mommy.png" 
                alt="Adam and Ayesha" 
              />
              <p>An inured Adam is held by Ayesha.</p>
            </div>
            <p className="p-bottom-margin">
              Adam returned to the Arête Laboratories, the main headquarters of High Evolutionary on Counter-Earth. Ayesha, devastated over Adam's sorry
              state, used one of the <Link>Med-Paks</Link> to heal the stab injury. She cradles him in her arms, and he commented that it still hurts
              before the High Evolutionary and his close advisors came in to the hangar to confront them. He admonished Ayesha for his failure, while
              Ayesha rebuked him for failing to underestimate the powers of the Guardians of the Galaxy. Nonetheless, he mocked Adam for being a
              so-called false higher being of the Sovereign people, to which Ayesha defended by telling him he opened his pod too early. The High
              Evolutionary did not care, to which Adam became vigialnt over. The High Evolutionary told her that there was still something wrong with
              him, despite being let out early. Adam spoke up, saying that there was, in fact, something wrong with him as there was a hole in his chest.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/Adam_in_Pain.png" 
                alt="Adam in pain" 
              />
              <p>Adam being pinned by High Evolutionary.</p>
            </div>
            <p className="p-bottom-margin">
              Adam continued yelling at High Evolutionary; however, the High Evolutionary started to hurdle him against the wall, using his gravity
              powers. The High Evolutionary reprimanded Ayesha for not only failing to retrieve 89P13, but also failing to notify him of his existence
              without conforming his status. Ayesha pleaded with the High Evolutionary for a second chance to make it up to him. The High Evolutionary
              agreed and dropped Adam, freeing him from his torture before he warned her if she would fail again, he would destroy the entire Sovereign
              civilization because it was his right as their creator.
            </p>

            <h4 className="article-heading-4" id="1.2.3">Arriving at the Orgoscope</h4>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/be/Curious_Adam.png" 
                alt="Adam looking around the Orgoscope" 
              />
              <p>Adam looking around the Orgoscope.</p>
            </div>
            <p className="p-bottom-margin">
              The Sovereign had a chance to make it up the High Evolutionary when the Guardians were reported to inflitrate the Orgonscope. Adam and
              Ayesha arrive at the Orgonscope, but find a <Link>ravager</Link> outside of the premises. They bring him in for interrogation. As a curious
              Adam admires and examines the room, while Ayesha does her work on <Link>Fitz-Gibbonok</Link> and his pet <Link>Blurp</Link>. When
              Fitz-Gibbonok refuses to answer, Ayesha tells Adam to show him they mean business. An immature Adam takes this as a sign to kill him, so he
              obliterates Fitz-Gibbonok.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/ff/Adam_Kills_Fitz-Gibbonok.png" 
                alt="Adam obliterates Fitz-Gibbonok" 
              />
              <p>Adam obliterates <Link>Fitz-Gibbonok</Link>.</p>
            </div>
            <p className="p-bottom-margin">
              Adam looks at his mother, proud of himself for following orders. However, Ayesha only snaps at Adam for being a clumsy fool. Adam tries to
              defend his actions, but his mother scolds him even further now that Fitz-Gibbonok is dead, and they could no longer get any information
              from the Guardians. Adam suggests they interrogate his little companion friend, Blurp, but Ayesha responds that Blurp is an animal, and
              that he could not even speak up. Adam looks at the sad Blurp and starts to have doubts about their actions, saying that he does not like
              how it makes him feel.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/33/Regretful_Warlock.png" 
                alt="Adam speaks of his regret about killing" 
              />
              <p>Adam speaks of his regret about killing.</p>
            </div>
            <p className="p-bottom-margin">
              Master <Link>Karja</Link> makes fun of Adam, telling Ayesha that he has a moron just like Adam. Just then, Famora contacts Fitz-Gibbonok
              through his communicator, to which Ayesha responds by interpreting her as a <Lin>United Ravagers</Lin> crew member. Gamora tells her to
              send a crew to come pick her up as she would send her the coordinates to find the Guardians' ship, the Bowie. Before they leave, Adam
              notices Blurp and, feeling sorry for killing his owner, decides to take him with them to Counter-Earth and promises to train him, much to
              Ayesha's annoyance.
            </p>

            <h4 className="article-heading-4" id="1.2.4">Battle of Counter-Earth</h4>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Adam_Warlock_and_Blurp.png" 
                alt="Adam arrives with Blurp to tackle War Pig" 
              />
              <p>Adam arrives with <Link>Blurp</Link> to tackle <Link>War Pig</Link>.</p>
            </div>
            <p className="p-bottom-margin">
              They follow the Guardians to Counter-Earth, where Adam and Blurp fly out to find them. He intercepts War Pig on the Bowie and stops her
              from killing Gamora. War Pig reminds him they are working for the same boss, the High Evolutionary, and Adam agrees, but he needs to be
              credited with Rocket's capture so he could save his civilization, soe tells her to stand down and let him handle it. War Pig refuses and
              tries to retaliate back, but Adam simply grabs her head and snaps it, decapitating the <Link>Hell Spawn</Link>.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/15/War_Pig_Death.png" 
                alt="Adam kills War Pig to capture Rocket" 
              />
              <p>Adam kills War Pig to capture Rocket.</p>
            </div>
            <p className="p-bottom-margin">
              Adam then notices that Gamora is gone, along with Roccket. He comes out to the opening of the ship, only to notice that the
              <Link> Humanimals</Link> are looking over at Arête Laboratories. He looks over there and realizes that the lab is starting to lift upwards.
              He senses something is wrong and looks down at the inhabitants. He is shocked when the High Evolutionary begins to blow up Counter-Earth
              in an attempt to start over upon realizing it failed at being the perfect society.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e8/Adam_Warlock_in_flight.png" 
                alt="Adam flies toward Ayesha to save her" 
              />
              <p>Adam flies toward Ayesha to save her.</p>
            </div>
            <p>
              He was apalled
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Adam_Tired_Counter-Earth.png" 
                alt="Adam passes out from exhaustion" 
              />
              <p>Adam passes out from exhaustion.</p>
            </div>
            <p>
              Adam manged to survive
            </p>

            <h4 className="article-heading-4" id="1.2.5">Attack on Arête Laboratories</h4>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/eb/Adam_Awakes.png" 
                alt="Adam wakes up aboard the Bowie" 
              />
              <p>Adam wakes up aboard the <Link>Bowie</Link>.</p>
            </div>
            <p>
              Adam regained
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/18/Adam_Blurp_Attack.png" 
                alt="Adam flies toward Star-Lord and Gamora" 
              />
              <p>Adam flies toward Star-Lord and Gamora.</p>
            </div>
            <p>
              Taking Blurp with him.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4a/Adam_in_Burning_Ship.png" 
                alt="Adam inside the burning ship" 
              />
              <p>Adam inside the burning ship.</p>
            </div>
            <p>
              Meanwhile, Star-Lord
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5e/Adam_Final_Battle.png/revision/latest?cb=20230815173025" 
                alt="A tired Adam attempts to use his powers" 
              />
              <p>A tired Adam attempts to use his powers.</p>
            </div>
            <p>
              While the Guardians
            </p>

            <h4 className="article-heading-4" id="1.2.6">Second chance</h4>

            <h3 className="article-heading-3" id="1.3">The Next Guardians</h3>

            <h4 className="article-heading-4" id="1.3.1">Battle of Krylor</h4>
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