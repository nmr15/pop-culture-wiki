import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorTheDarkWorld = () =>
{
  useEffect(() =>
  {
    document.title = "Thor: The Dark World - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"}
            ]}
          />
          <Collapse 
            id="8"
            item="Sequels"
            sub={[
              {id: "8.1", title: "Thor: Ragnarok"},
              {id: "8.2", title: "Thor: Love and Thunder"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Thor: The Dark World</li>
        </ul>
        <div>
          <h1 className="article-heading">Thor: The Dark World</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Thor: The Dark World</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg" alt="Thor: The Dark World poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Kenneth Branagh</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/iron_man_3">Iron Man 3</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Thor: The Dark World</b> is a 2013 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/thor"> Thor</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures. It is the sequel to <Link to="/mcu/thor_film">Thor</Link> (2011) and the eigth film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). The film was directed by Alan Taylor from a screenplay by Christopher Yost and the
            writing team of Christopher Markus and Stephen McFeely. It stars <Link>Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link> alongside
            <Link>Natalie Portman</Link>, <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, <Link>Idris Elba</Link>, <Link>Christopher
            Eccleston</Link>, Adewale Akinnuoye-Agbaje, <Link>Kat Dennings</Link>, <Link>Ray Stevenson</Link>, <Link>Zachary Levi</Link>, Tadanobu Asano,
            <Link>Jaimie Alexander</Link>, Rene Russo, and <Link>Anthony Hopkins</Link>. In the film, Thor and <Link>Loki</Link> (Hiddleston) team up to
            save the Nine Realms from the <Link>Dark Elves</Link>.
          </p>
          <p>
            Development of a sequel to Thor began in April 2011 when producer <Link>Kevin Feige</Link> announced plans for it to follow the MCU crossover
            film <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012). In July, Thor director <Link>Kenneth Branagh</Link> withdrew from the
            sequel. Taylor was hired to replace him as director in January 2012. The supporting cast filled out that August with the hiring of
            Eccleston and Akinnuoye-Agbaje as the film's villains. Filming took place from September to December 2012, primarily in Surrey, England, as
            well as in Iceland and London. Taylor wanted the film to be more grounded than Thor, inspired by his work on Game of Thrones (2011 - 2019).
            He hired Carter Burwell to compose the score, but Marvel replaced Burwell with Brian Tyler.
          </p>
          <p>
            Thor: The Dark World premiered at the Odeon Leicester Square in London on October 22, 2013, and was released in the United States on November
            8, as part of <Link>Phase Two</Link> of the MCU. The film was a commercial success, grossing over $644 million worldwide and becoming the
            tenth highest-grossing film of 2013. It received praise for the performance of Hemsworth and Hiddleston, visual effects, and action
            sequences, but was criticized for its generic villain and lack of depth. Retrospectively, Taylor expressed dissatisfaction with the film and
            said Marvel substantially altered it from his original vision during post-production. Two sequels have been released:
            <Link to="/mcu/thor_ragnarok"> Thor: Ragnarok</Link> (2017) and <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> (2022).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/bf/Malekithaethertdw.jpg" alt="Malekith takes the Aether" />
                <p>Malekith takes the Aether from the Chamber.</p>
              </div>
              <p>
                Five thousand years ago, a cosmic event known as the Convergence occurs, opening a portal between the Nine Realms. A sinister race called the
                Dark Elves attempts to use the Convergence as a way of unleashing the <Link to="/mcu/reality_stone">Aeither</Link>, a force of destruction with the
                capability of destroying the entire galaxy. The exact origin of the Aether is unknown, but it is known that it is one of
                <Link to="/mcu/infinity_stones"> six powerful objects</Link> that predate the universe itself. The leader of the Dark Elves,
                <Link to="/mcu/malekith"> Malekith</Link>, nearly succeeds in using the Aether to cause the instantaneous destruction of the Nine Realms under the
                misguided belief that he can recreate them in his own image. He is opposed by Bor, the then-king of Asgard and the father of
                <Link to="/mcu/odin"> Odin</Link>, who uses the Bifrost to rip the Aether from Malekith's grasp just as he attempted to enact his plan, robbing the
                Dark Elves of their most potent weapon. Driven back to their homeworld, Svartalftheim, it becomes apparent that the Dark Elves cannot defeat the
                Asgardians and are all but wiped out in the battle. While the Asgardians, unable to destroy the Aether, seal it away in a place it can never be
                found. Malekith, his lieutenant Algrim, and various survivors managed to escape into a suspended animation, vowing to one day return and finish
                their plan.
              </p>
            </div>
            <div className="flex">
              <p>
                In 2012, after the Chitauri invasion, <Link to="/mcu/loki">Loki</Link> is brought befor Odin in shackles. Odin gives Loki a life-sentence in
                prison for his crimes against humanity, promising him that Thor will be made king one day after he's cleaned up the damage Loki has caused. One year
                later, in Vanaheim, home of the Vanir. Thor, alongside warriors <Link>Fandral</Link>, <Link>Volstagg</Link>, <Link>Hogun</Link>, and <Link>Sif</Link>,
                fight against the Marauders, a ragtag group of invaders that have been systematically terrorizing the Nine Realms for the past two years. The
                Asgardians win the battle, and while Hogun remains on Vanaheim to help his people rebuild, Thor and his friends return to Asgard via the Bifrost
                Bridge, which was repaired by the power of the <Link to="/mcu/space_stone">Tesseract</Link>. A party is held in celebration for Thor's victory, but
                he leaves quickly. He visits <Link to="/mcu/heimdall">Hemidall</Link> daily, asking each time how <Link to="/mcu/jane_foster">Jane Foster</Link> is
                faring. Odin clearly does not approve of Thor's affections for Jane as she will be dead long before him.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/df/Thor-2.jpg" alt="Thor" />
                <p>Thor battling the invading Marauders army.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f8/Jane_London_date.jpg" alt="Jane Foster on a date" />
                <p>Jane Foster on a date with Richard Madison.</p>
              </div>
              <p>
                Back on Earth, Jane Foster is in London, having been called there by <Link to="/mcu/erik_selvig">Erik Selvig</Link> to investigate readings of an
                unkonwn nature. After having not heard from Thor for some time, she goes on a date with a man named Richard Madison. Their date is quickly
                interrupted by <Link to="/mcu/darcy_lewis">Darcy Lewis</Link>, who explains that Foster's scientific equipment has been picking up strange
                signals, signals that have not been detected since the events that took place in New Mexico two years prior. They get in a car where Darcy's
                own intern, Ian Boothby, is waiting for them, and drive to where the signal is the highest and end up at an abandoned storage house. They find
                that a number of portals have opened, linking the Earth to several different worlds and altering the laws of physics, causing gravity to shift
                without warning.
              </p>
            </div>
            <div className="flex">
              <p>
                While Darcy and Ian continue to play around with the portals, Jane is swallowed up by one of them and transported to an unknown planet. She finds
                herself in a dark chasm, where a strange vault is located. Uon touching the vault, a red substance, the Aether, emerges from it and infests her
                body. Passing out, Jane is teleported back to Earth, waking up five hours later. She walks outside where Darcy and Ian have been waiting. The
                police had been called there by Darcy and consequently attempt to arrest the three for trespassing on private property; a policeman tries to touch
                Jane, but the Aether forces him away. Prior to that, Thor suddenly arrives, seeking to investigate Jane's well-being, as Heimdall lost sight of her
                after she disappeared. While overjoyed to see him, Jane slaps Thor in the face for taking two years to visit her even though he was on Earth
                during the battle of New York. Thor apologizes to her and she quickly forgives him, but then takes her to Asgard to investigate the nature of the
                Aether knowing that it was beyond mortal ability to handle.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/ce/Jane_Aether.jpg" alt="The Aether and Jane" />
                <p>The Aether is fused with Jane Foster's body.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3d/Thor-1.jpg" alt="Jane and Thor in Asgard" />
                <p>Thor and Jane walking through Asgard.</p>
              </div>
              <p>
                Once there, Heimdall greets them, but Jane is quickly taken to the healing chamber so that they can learn what's wrong with her. They find the
                Aether in her body but they don't know what it is. A physician named Eir tries to remove the Aether from Jane but fails. Odin, angered that a
                human has entered Asgard, orders for her to be taken back to Earth, but when a guard touches her wrist, the Aether reacts defensively just as it did
                with the police. Odin, recognzing the Aether, tells Jane of its many possible origins using the Book of Yggdrasil, and how the Dark Elves nearly
                used it to destroy the realms. While Odin works to find a way to remove the Aether without killing Jane, <Link to="/mcu/frigga">Frigga</Link>
                befriends and protects her. Frigga has secretly been attempting to convey her disappointment to Loki regarding his actions, but he has rebuffed her
                every time.
              </p>
            </div>
            <div className="flex">
              <p>
                Meanwhile, alerted by Jane's use of the Aether, Malekith, and his ilk awake from their long sleep. Consumed with vengeance and eager to procure the
                Aether to once again transform the universe into darkness, the Dark Elves plotted their next offensive against Asgard. Under Malekith's orders,
                Algrim allows himself to be captured by the Asgardians while in disguise as a Marauder and, using vile technology, turns himself into Kurse, a
                superpowered warrior that the Dark Elves used frequently in their war against the Asgardians. He frees all the prisoners except Loki and they start
                a prison riot, distracting the Asgardians so that Malekith can lead his squadron of ships into Asgard with little opposition. A battle takes place,
                during which the palace is breached and heavily damaged. Frigga, having suspected the diversion, lures Malekith into a duel by creating a hologram
                replica of Jane. Frigga nearly succeeds in besting Malekith, but Kurse intervenes and mortally wounds her when she refuses to give up Jane and the
                Aether's location. In retaliation, an enraged Thor disfigures Malekith's face with a bolt of lightning, forcing the Dark Elves to retreat. Frigga
                then dies from her injury.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Malekith_white_face.jpg" alt="Malekith" />
                <p>Malekith finally awakens from his hibernation.</p>
              </div>
            </div>
            <div>
              <div className="img-left img-card">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fe/Thor_Heimdall.jpg" alt="Thor and Heimdall" />
                <p>Thor and Heimdall discuss Malekith's attack.</p>
              </div>
              <p>
                A funeral is later held for the dead Asgardians and Frigga, and a grief-stricken Odin has Jane confined. Thor knows that Malekith will return for
                Jane, but Odin, blinded by hate and grief, refuses to release her and intends to destroy Malekith through whatever it takes. So, Thor comes up with
                a plan to move her, even though he would be committing treason. With Heimdall distracting Odin from them, Thor has Loki freed from his cell, as
                Loki knows of secret portals that could transport Jane to another world, drawing Malekith away from Asgard. With help from Sif, Fandral, and
                Volstagg, Thor, Jane, and Loki hijack a downed Dark Elf ship and make their way out of Asgard and to a hidden portal that teleports them to
                Svartalfheim. As they make their escape, however, Jane's body is slowly being infested by the Aether, draining her of life.
              </p>
            </div>
          </div>
          <div>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6e/JaneFoster-Aether.jpg" alt="Malekith extracts the Aether" />
              <p>Malekith exracting the Aether from Jane.</p>
            </div>
            <p>
              The three land in the wasteland of Svartalfheim and by then, Jane's body has completely channeled the Aether, enhancing her perception but
              weakening her physically. Malekith senses the Aether's transfer and confronts the three on Svartalfheim, and at that moment, Loki appears to betray
              Thor, cutting of his hand and giving Jane to Malekith willingly. Loki tells Malekith that in return for the Aether, he wants a frotn row seat to
              watch Asgard's destruction. Malekith then proceeds to drain the Aether from Jane's body and into himself, but Loki's betrayal is revealed to be a
              ruse, and Thor's injury is revealed to have been nothing more than a holographic projection meant to lull Malekith into a false sense of security.
            </p>
          </div>
          <div>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/01/ThorLoki-DeathScene-TTDW.jpg/" alt="Loki dies" />
              <p>Thor holds Loki as he dies in his arms.</p>
            </div>
            <p>
              Calling for Mjølnir, Thor tries to destroy the Aether, but fails as it is indestructible. Kurse then battle Thor while Malekith and his minions
              leave the planet, and Kurse quickly gains the upper hand against Thor. Loki comes to Thor's aid, stabbing Kurse through the chest with the sword,
              but this has no effect on Kurse, who seizes Loki and drives the sword into his own body. Loki manages to press one of Kurse's implosion bombs,
              however, and sets off, destroying Kurse. Loki then apologizes to Thor for his actions, and seems to die in his arms. After mourning Loki, Thor and
              Jane then enter a cave, believing that they have failed in stopping Malekith. Suddenly, Foster's cell phone gains reception and they venture
              deeper into the cave, finding a portal. The portal teleports them safely back to London. Meanwhile, an Einherjar Guard appears in the same area
              where Loki died, and returns to Asgard to inform Odin of what transpired.
            </p>
          </div>
          <div>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Selvig_convergence.jpg" alt="Erik, Darcy, and Ian" />
              <p>Erik, Darcy, and Ian watch as the Convergence unfolds.</p>
            </div>
            <p>
              While Jane has been in Asgard, Darcy has been fruitlessly trying to reach <Link to="/mcu/shield">S.H.I.E.L.D.</Link> when she and Ian see on the news
              that Erik Selvig has been running around nude at Stonehenge, and has now been put in a retirement home for psychiatric care. They go there to get
              him out, with Ian pretending he is Erik's son, and the latter tells the pair his sanity was shaken after being hypnotized by Loki during the
              Chitauri Invasion. For the past several months, Selvig has studied the effects of the Convergence and has developed devices which can teleport people
              to different worlds. They meet up with Thor and Jane, and Erik tells them that the people who lived in England after the previous Convergence had built
              certain objects to create a secret map to where the Convergence would reach its peak. The location is revealed to be Greenwich. After putting two and
              two together, Jane theorizes that Malekith plans to spread the Aether through the portals so that he may destroy all of the worlds at once. 
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Thor: Ragnarok</h3>
            <h3 className="article-heading-3" id="8.2">Thor: Love and Thunder</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default ThorTheDarkWorld;