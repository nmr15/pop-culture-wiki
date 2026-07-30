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
          <div>
            <div className="flex">
              <div className="img-card mr-1">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/30/ThorMalekith-WindowSlide.jpg" alt="Thor and Malekith slide down window" />
              <p>Thor and Malekith both fall down a building.</p>
            </div>
            <p>
              They travel to Greenwich the next morning, and when they arrive, they find that a number of portals have opened up above the city, a sign that the
              Convergence is nearing its peak. Malekith soon arrives, and Thor engages him in battle, with both evenly matched. The fight takes them through various
              portals throughout the city, transporting them to different worlds. While the two are fighting, the scientists use Erik's devices to deal with the
              Dark Elf soldiers, accidentally summoning a Frost Beast in the process. 
            </p>
            </div>
          </div>
          <div>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e2/Thor-darkworld_5113.jpg" alt="Malekith dies" />
              <p>Malekith is crushed under the Ark.</p>
            </div>
            <p>
              Thor and Malekith are soon separated by one of the portals, and Malekith, now unopposed, unleashes the Aether into the portal. Thor soon regroups with
              his friends and takes Erik's device, noting that while the Aether might be indestructible, Malekith himself is not. Using the devices, Thor impales
              Malekith with them, allowing Jane to teleport him back to Svartalfheim, stopping his attack. However, Malekith's damaged Ark starts to crash, and
              nearly crushes Thor and Jane, when Erik uses the last of his devices to teleport it away; it ends up on Svartalfheim and lands on Malekith, killing
              the Dark Elf leader. The portals then close, and the ordeal is finally over.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="img-card mr-1">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/00/Loki_the_king.jpg" alt="Loki on throne" />
              <p>Loki proudly reclaims the throne of Asgard.</p>
            </div>
            <p>
              Some time later, Thor returns to Asgard, where Odin congratulates him on his victory despite the crimes he committed to do so. Odin comments that
              Thor will make a great king, but Thor responds by saying he is not ready to bear the weight of the throne. Thor leaves Asgard to reunite with Jane on
              Earth, butt as he leaves, Odin is revealed to be Loki, having faked his death and usurped Odin's throne.
            </p>
            </div>
          </div>
          <div>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d8/Normal_thor-darkworld_5351.jpg" alt="The Collector" />
              <p>The Collector being given the Aether for safe-keeping.</p>
            </div>
            <p>
              Later, Sif and Volstagg hand over the captured Aether to Taneleer Tivan, The Collector. Taneleer appears eager to take it but is curious as to why
              Asgardians don't just keep it secured in their own vault. Volstagg explains that the <Link to="/mcu/space_stone">Tesseract</Link> is already on Asgard
              and that to keep two <Link to="/mcu/infinity_stones">Infinity Stones</Link> in the same place would be unwise. As they leave, the Collector remarks
              "One down, five to go." Thor returns to Earth, where he happily reunites with Jane, unaware that the Frost Beast that was teleported to Earth during
              the Convergence is still running rampant through London chasing a flock of birds.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <ul className="article-list">
              <li>
                <Link to="/people/chris_hemsworth">Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link>: <br />
                An Avenger and the crown prince of Asgard, based on the Norse mythological deity of the same name. Hemsworth stated that the film
                addresses unresolved issues regarding Thor's relationships from previous films, "For Thor and Jane, there are some unanswered
                questions now, since obviously he didn't stop in and catch up with her in The Avengers. Thor might have some explaining to do in
                this one. And with Loki, we get down to the major bones of our conflict with everything that's come from Thor to Avengers to now."
                Hemsworth added, "Thor's journey I think picks more so up from where we left the first one. About to take on the throne... and now
                coming to the realization of what responsibility comes with that. Also, Alan Taylor keeps talking about the dark side of that
                responsibility, and the secrets of being king or becoming sort of very political about what people need to know and what they want
                to know." Hemsworth especially enjoyed the role of Thor in this film as he was able to, "... break him down and find his human
                qualities and his vulnerable side."
              </li>
              <li>
                <Link to="/people/natalie_portman">Natalie Portman</Link> as <Link to="/mcu/jane_foster">Jane Foster</Link>: <br />
                An astrophysicist and Thor's love interest who is brought from Earth to Asgard by Thor after she is infected with a mysterious
                energy. Producer <Link to="/people/kevin_feige">Kevin Feige</Link> said, "While Thor was a fish out of water on Earth in the first
                two films (Thor and The Avengers), this time Jane is very much a fish out of water in Asgard." Portman added, "It was a whole
                different adventure this time. Because Jane is the fish out of water. I didn't want to make it like Bill & Ted, or like a valley girl
                dumped into Shakespeareland." Portman also said the film finds Jane at a different place in her life, "Jane has moved, so she's now in
                London, not in Santa Fe anymore. Obviously she has gone through missing Thor and also being upset at him because he didn't come
                knocking on her door when he was on her planet. She's definitely been getting over that and trying to move on." Hemsworth's wife Elsa
                Pataky stood in for Portman during the post-credits kissing scene due to a scheduling conflict.
              </li>
              <li>
                <Link to="/people/tom_hiddleston">Tom Hiddleston</Link> as <Link to="/mcu/loki">Loki</Link>: <br />
                Thor's adoptive brother and nemesis, based on the deity of the same name, who forms an uneasy alliance with Thor against the Dark Elves.
                On where he wished to take the character in the film, Hiddleston said, "I'd like to take Loki to his absolute rock bottom. I'd like to
                see him yield, essentially, to his darkest instincts. Then, having hit rock bottom, maybe come back up.I think the fascination for me
                about playing Loki is that, in the history of the mythology and the comic books and the Scandinavian myths, is he's constantly dancing
                on this fault line of the dark side and redemption." Hiddleston recalled, "When I met Alan Taylor, he asked me how I thought I could do
                Loki again without repeating myself and I remembered talking with Kevin Feige when we were on the Avengers promotional tour. I said, 'OK,
                you've seen Thor and Loki be antagonistic for two films now. It would be amazing to see them fight side by side. I've been the bad guy
                now twice, so I can't be again, or otherwise I shouldn't be in the film. So we have to find a new role for me to play."
              </li>
              <li>
                <Link to="/people/stellan_skarsgard">Stellan Skarsgard</Link> as <Link to="/mcu/erik_selvig">Erik Selvig</Link>: <br />
                Jane's mentor and colleague. Skarsgard said, the film finds Selvig in a "disrupted mode" explaining, "Having a god in your head for a
                while creates some psychological problems", referring to the character's ordeal following The Avengers.
              </li>
              <li>
                <Link to="/people/idris_elba">Idris Elba</Link> as <Link to="/mcu/heimdall">Hemidall</Link>: <br />
                The all-seeing, all-hearing Asgardian sentry of the Bifrost Bridge, based on the mythological deity of the same name. Elba said he has
                a larger role in the sequel, "In the new film we're going to get to know Heimdall the Asgardian a bit better, and we're going to get to
                know Asgard a bit better. I can't say too much, but the expansion of Thor in his world is going to be huge. My part was very small and
                functional in the first film."
              </li>
              <li>
                <Link to="/people/christopher_eccleston">Christopher Eccleston</Link> as <Link to="/mcu/malekith">Malekith</Link>: <br />
                The ruler of the Dark Elves of Svartalfheim. About Malekith's motivation, Eccleston said, "There is a kind of tragic quality to his quest.
                Because he's lost his wife, he's lost his children. He's lost everything. And he returns for revenge. And the agent for his revenge is
                the Aether. If he gets hold of that, he is omnipotent." Eccleston continued, "What I thought about a great deal was revenge, there's
                huge amounts of revenge. One quote is: 'When you seek revenge, be sure to dig two graves.' I did a film called Revengers Tragedy where I
                played a guy called Vindici, from the word 'vindictive', and he is the distillation of revenge. So, in a way, that was what I had to
                think of: how revenge can make you absolutely monomanaiacal, though you're still trying to make it recognizably motive-led. It's just the
                personificcation of movie evil."  However, Taylor stated that many scenes involving Malekith's backstory had to be cut from the film to
                make it more efficient. Eccleston revealed that he speaks an invented language for the film explaining, "The Elvish language is
                definitely based on European languages. I think there's probably some Finnish in there. It does have its logic and it rhythms. It also
                has many syllables and it's very difficult to do while remaining naturalistic. It's been a particular challenge for us byt
                hopefully it gives the film some complexity and variety." Eccleston also said the role required six hours of make-up and 45 minutes of
                wardrobe.
              </li>
              <li>
                Adewale Akinnuoye-Agbaje as Algrim / Kurse: <br />
                A Dark Elf and Malekith's trusted and loyal lieutenant who is transformed into a monstrous creature in order to destroy Thor.
                Akinnuoye-Agbaje described Kurse as "an amalgamation of a bull and a lava-like creature. He has very animalistic tendencies but
                with this insatiable and unstoppable power. As an actor, that's one of the hardest things to embody. You have to realize you are
                probably the most powerful thing you could imagine. And you have to be that. You can't pretend, so that when you face Thor, it's
                real." Akinnuoye-Agbaje stated that the role required three hours of make-up a day and had to put on heavy duty prosthetics
                explaining, "The outfit weighed about 40 pounds. I'm sure there will be a certain amount of CGI but a good 80% was me in that suit.
                About the character Akinnuoye-Agbaje said, "I suppose Algrim and Kurse woulbe be the quintessential baddies, but in reality they are
                what I perceive as the scorn and the victims of the story. They are the elves who have basically lost their planet and their race to
                another race, the Asgardians. Here is a man/alien who places a noble objective beyond his own life and I think there is something
                extremely inspiring about that because he looks at the bigger picture and sees himself as a means to that end." Akinnuoye-Agbaje added,
                "I worked with director Alan Taylor in trying to maintain Algrim's humanity all the way throughout Kurse's transformation, so that
                even when you see Kurse the beast, you can still relate to him as being Algrim inside. And symbolically we did that by keeping the
                same piercing blue eyes throughut."
              </li>
              <li>
                <Link to="/people/kat_dennings">Kat Dennings</Link> as <Link to="/mcu/darcy_lewis">Darcy Lewis</Link>: <br />
                A political sciene major who is interning for Foster. Her role in the film was expanded from the comic relief sidekick role she played
                in the first Thor film. Dennings said her character is "really bad at real science in the first movie. In the second movie, she's
                more interested, but she still doesn't know anything about it. She loves Jane, she really wants Jane and Thor to be together. It's
                almost like her own little soap opera that she watches."
              </li>
              <li>
                <Link to="/people/ray_stevenson">Ray Stevenson</Link> as <Link to="/mcu/volstagg">Volstagg</Link>: <br />
                A member of the Warriors Three, a group of three Asgardian adventurers who are among Thor's closest comrades, known for both his
                hearty appetite and wide girth. About the character, Stevenson said, "He's got a heart the size of a planet that he wears on his
                sleeve, so he's like a big kid." Regarding Volstagg's role in the film, Stevenson said, "Volstagg is struggling, he has a brood, the
                Warriors Three are fighting for hearth and home as much as for the idea of Asgard itself. That's where he has trouble." Explaining,
                "He's all too aware of how potentially threatning this new enemy is on both the home front and the battlefield."
              </li>
              <li>
                <Link to="/people/zachary_levi">Zachary Levi</Link> as <Link to="/mcu/fandral">Fandral</Link>: <br />
                A member of the Warriors Three, characterized as an irrepressible swashbuckler and romantic. Levi replaced Joshua Dallas in the role due
                to Dallas's commitment on Once Upon a Time. levi had been up for the role in the first film, but bowed out due to to his commitment on
                Chuck. Levi compared the character to Flynn Rider, the character he played in the animated feature, Tangled, "Fandrall is a little
                similar to Rider in some ways... He's liek this Lothario. He's like Errol Flynn. He loves ladies, as do I." Regarding the dynamic of the
                Warriors Three, levi said, "The Warriors Three are ehre to support Thor. We are his confidants, his bes friends. We've all grown up together
                in a lot of ways and fought many a battle together, escaped death. To me it's the way best friendsought to be, they're there when you
                need to talk and they're there if you don't want to talk, and they're there if you need to escape from your father's place in a flying
                skiff."
              </li>
              <li>
                Tadanobu Asano as <Link to="/mcu/hogun">Hogun</Link>: <br />
                A member of the Warriors Three, native of Vanaheim, primarily identified by his grim demeanor.
              </li>
              <li>
                <Link to="/people/jammie_alexander">Jaimie Alexander</Link> as <Link to="/mcu/sif">Sif</Link>: <br />
                An Asgardian warrior, Thor's childhood friend and Jane's romantic rival, based on the deity of the same name. Alexander said there is
                more character development for Sif and the film explores the Sif-Thor relationship. Alexander elaborated, "I really tried to bring a
                little bit more vulnerability in this film. Sif is very much in love with Thor and very much cares about his well being. So she kicks a
                lot of butt in this movie but she also opens her heart a lot."
              </li>
              <li>
                <Link to="/people/rene_russo">Rene Russo</Link> as <Link to="/mcu/frigga">Frigga</Link>: <br />
                <p>
                  The wife of Odin, queen of Asgard, mother of Thor, and adoptive mother of Loki, based on the mythological deity of the same name. Russo
                  said that her role was expanded and explores Frigga's relationship with Loki, "You know, they cut me down in the first film.
                  Kenneth Branagh sent me a nice note, because he understood, he's an actor. You move on, what are you going to do? But I think they're
                  going to need a good mom in the next film. Loki needs his mom. I have a lot of compassion for Loki. But we might have to have a
                  conversation about what he just did."
                </p>
              </li>
              <li>
                <Link to="/people/anthony_hopkins">Anthony Hopkins</Link> as <Link to="/mcu/odin">Odin</Link>: <br />
                The king of Asgard, father of Thor, and adoptive father of Loki, based on the deity of the same name, who disapproves of Jane Foster
                being in Asgard. Regarding Thor's relationship with his father, Hemsworth said, "The conflict between Thor and Odin was so great in the
                first one... so, certainly they disagree as I think they always will at times but there' a far greater respect from each other. So it
                becomes, I guess, a more mature conversation, but there's more at stake this time, too. It's not sort of just their individual egos, the
                whole universe is at stake." As to his approach Hopkins said, "I just play Odin like a human being, with maybe a little more dimension.
                I geow a beard, looke hopefully impressive and keep it as real as possible."
              </li>
            </ul>
            <p>
              Additionally, Alice Krige portrays Eir, an Asgardian physician, while Talulah Riley plays an Asgardian nurse. Chris O'Dowd plays Richard,
              a suitor of Jane. <Link to="/people/benicio_del_toro">Benicio del Toro</Link>, who plays
              <Link to="/mcu/taneleer_tivan"> Taneleer Tivan / The Collector</Link> in
              <Link to="/mcu/guardians_of_the_galaxy_film"> Guardians of the Galaxy</Link>, appears in a mid-credits scene with Ophelia Lovibond, who
              plays his aide <Link to="/mcu/carina">Carina</Link>. Jonathan Howard plays Ian Boothby, Darcy's intern. Tony Curran plays Bor, Odin's
              father, based on the deity of the same name. Clive Russell plays Tyr, based on the deity of the same name. Richard Brake portrays a
              captain in the Einherjar. <Link to="/people/chris_evans">Chris Evans</Link> makes an uncredited cameo appearance as Loki masquerading as
              <Link to="/mcu/steve_rogers"> Captain America</Link>, while Thor co-creator <Link to="/people/stan_lee">Stan Lee</Link> makes a cameo
              appearance as a patient in a mental ward.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              In April 2011, before the release of Thor, Marvel Studios president Kevin Feige slated that following The Avengers, "Thor will go off into
              a new adventure." Kenneth Branagh, director of Thor, responded to his comments, saying, "it is kind of news to me. Here's what I would
              say to that: It's that I'm thrilled they're that confident. I shall wait for the audience to tell us whether there should be a second
              one, and then if that's a nice conversation to be had among all of us, that'd be thrilling. But if Marvel says so, thenI guess it must be
              true." Feige later explained that Marvel Studios woruld gauge how well Thor did at the box office before announcing sequels, but stated,
              "Don Payne is working on story ideas for a part two. We've got various options with Kenneth Branagh to discuss coming back, but right now
              the focus is on the first one. Don is, slowly but surely, thinking about where to take the character next should we be so lucky."
            </p>
            <p>
              In June 2011, Walt Disney Studios set a July 26, 2013 release date for the Thor sequel with Chris Hemsworth reprising his role as the
              title hero. It was also reported that Branagh would not be returning as diretor but would likely be involved in a producing capacity. The
              Los Angeles Times cited the long commitment necessary for a special effects-heavy epic and the pressure to start the script process right
              away as reason for Branagh's departure, although hewas initially enthused by the chance to direct the sequel. Branagh noted, "It was a long
              time making the first film and they were way too quick for me to get straight back into another, but it was a pleasureable experience and a
              film I'm very proud of." Branagh had actually wanted to direct the sequel, but not right after the first film due to Marvel's shoots and
              post-productions being intense whereas Marvel wanted production to start immediately right then and there, so he told Feige that he didn't
              "have it" in himself and both Feige and the cast were very understanding that Branagh needed a break, letting him go from the project, who
              understood Marvel's need to start with the project as soon as possible. The following day, Marvel formally hired Payne, one of the credited
              writers of the first film, to script the sequel. An early version of the film planned to feature Hela as the film's antagonist. However,
              Marvel Studios producer Craig Kyle explained that the Creative Committee from Marvel Entertainment was driving most of the decisions for the
              film and did not want a female villain because they did not believe they could sell toys based on her to young boys. In August, Brian Kirk
              entered early negotiations to direct the Thor sequel. The film would have marked Kirk's first time directing a big-budget motion picture,
              after having directed television series for HBO, Showtime, and the BBC, including Game of Thrones.
            </p>
            <p>
              In September 2011, Tom Hiddleston confirmed he would return in the sequel, speculating that in the film, "Loki will have to take
              responsibility for what he's done." Patty Jenkins, the director of Monster, and the pilot episode of AMC's The Killing, entered early
              negotiations with Marvel Studios and Disney to direct the film, after Kirk had passed due to contractual sticking points that arose during
              negotiations. Later in the month, Feige stated the sequel would "take Thor literally to other worlds" and would "primarily be the journey
              of that character, of he and Jane Foster and how the new dynamic with his father is working out, as well as what are the broader stakes
              for The Nine Worlds." On October 13, 2011, Marvel confirmed that Jenkins would direct the sequel and Natalie Portman would return to star.
              Disney also moved the release date for the film to November 15, 2013.
            </p>

            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              In December 2011, Jenkins exited the project, citing "creative differences." She stated, "I have had a great time working at Marvel. We
              parted on very good terms, and I look forward to working with them again." Jenkins felt she could not have made a good film "out of Thor 2
              because I wasn't the right director... I could have made a great Thor if I could have done the story that I was wanting to do. But I don't
              think I was the right person to make a great Thor out of the story they wanted to do." Jenkins had intended to create a film based on the
              premise of Romeo and Juliet, where Jane was stuck on Earth with Thor forbidden to come save her. After Thor eventually does travel to Earth,
              he and Jane would have discovered that Malekith was "hiding the dark energy inside of Earth because he knows that Odin doesn't care about
              Earth, and so he's using Odin's disinterest in Earth to trick him."
            </p>
            <p>
              Three days, it was reported that Marvel was looking at Alan Taylor and Daniel Minahan as prospective directors to replace Jenkins, and
              were also in the midst of hiring a writer to rewrite Don Payne's script, with the shotlist of possible writers consisting of John Collee,
              Robert Rodat, and Roger Avary. At the end of the month, Alan Taylor, best knwon for directing episodes of the HBO fantasy series Game of
              Thrones, was chosen to direct the sequel. Feige mentioned Taylor's work on the series Mad Men, Boardwalk Empire, and Game of Thrones as
              reasons for his hiring, saying "With Alan's direction we got a few more layers of patina, of texture, of reality into out golden realm." As
              Feige looked at what worked for the first Thor film and thought what he could retool from that, Taylor decided to "bring some Game of
              Thrones to it" in order to make a darker and more grounded sequel in comparison to Branagh's work in the previous film. By January 10,
              Marvel Studios had commissioned screenwriter Rodat to rewrite the sequel and Hiddleston stated that filming was expected to begin in
              London in the summer of 2012. Hemsworth later confirmed that filming was scheduled to begin in August. Hemsworth also revealed that the
              film would have a more Viking-influenced feel, elaborating "I think the science fiction element to Thor ...the danger is it falls a little
              bit into the world of it's 'tough to throw a light to.' I think of big waterfalls and mountains and a Viking influence, where the Norse
              mythology kind of grew from. Having that in Asgard is going to make it all the more special and that's what Alan Taylor wants to bring to
              it." Feige said "while the relationship between Loki and Thor certainly has changed [after the events of the movie The Avengers] and has
              progressed, a lot of Thor 2 is picking up where it left off in terms of Jane, who you just saw for a moment on a computer monitor, and
              also what's been going on in the Nine Realms without the Asgardians being able to use the Bifrost." Feige also said that while Loki has a
              part, "there will be a different villain, another big villain."
            </p>
            <p>
              In May 2012, Mads Mikkelsen began talks to play one of the villains in the film and Anthony Hopkins, who played Odin in the first film,
              committed to returning in the sequel. Benedict Cumberbatch, who eventually joined the film series as
              <Link to="/mcu/stephen_strange"> Stephen Strange / Doctor Strange</Link>, was also in the running to play Malekith the Accursed. At the
              end of the month, Disney moved up the release date for the film a week ahead of the previous date to November 8, 2013. By June 2012, much
              of the first film's supporting cast was confirmed to return, including Idris Elba, Jaimie Alxander, Ray Stevenson, and Stellan Skarsgard.
              Also in June, Joshua Dallas announced that he would not be reprising the role of Fandrall. Dallas had initially intended to return, but had
              to bow out due to his commitment on the television show, Once Upon a Time, and Zachary Levi was cast in his place. Levi was originally
              up for the role in the first film but scheduling conflicts with Chuck forced him to drop out.
            </p>
            <p>
              In July 2012, Mikkelsen stated he would not be appearing in the sequel due to prior commitments, "That's not happening unfortunately. I had a
              meeting with the filmmakers, but it was a bit too late and then Hannibal came in...It's just not happening." At the 2012 San Diego
              Comic-Con, it was announced that the film would be titled Thor: The Dark World. At the end of the month, residents near Bourne Wood in
              Surrey, England were notified that a film going by the working title, Thursday Mourning would be filming in the area. In August of that
              year, Christopher Eccleston entered final negotiations to play Malekith, and the film was scheduled to shoot in Iceland, where Taylor shot
              parts of Game of Thrones. By August 22, Kat Dennings was hired to reprise her role as Darcy Lewis, and Adewale Akinnuoye-Agbaje was cast
              as Algrim. At the end of the month, film crews for Thursday Mourning began set construction at Stonehenge near Amesbury, England.
            </p>

            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bourne_Wood_Thor_2_film_set_crop.jpg/250px-Bourne_Wood_Thor_2_film_set_crop.jpg"
                alt="Film set at Bourne Wood, Surrey, England." 
              />
              <p>Film set for Thor: The Dark World at Bourne Wood, Surrey, England.</p>
            </div>
            <p>
              Principal photography began on September 10, 2012, in Bourne Wood, Surrey, England, under the working title Thursday Mourning. A few weeks
              later, Clive Russell was cast as Tyr, and Richard Brake was cast as an Einherjar captain. At the end of the month, Jaimie Alexander was
              injured on the London film set, after she slipped while walking in the rain. On October 12, 2012, production moved to Iceland with filming
              taking place in Domadalur, Skogafoss, Fjaorargljufur and Skeioarasanur. Iceland Review described the shoot as bening among the most
              extensive film projects to have ever taken place in Iceland. The film's official synopsis was released, which revealed that Christopher
              Yost and Christopher Markus and Stephen McFeely had also contributed to the screenplay. Markus and McFeely said Feige had approached
              them in between writing drafts for <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> to work
              on the Dark World script. Three days later, Disney announced that the film would be released in 3D. In later October, filming commenced at
              the Old Royal Naval College in Greenwich, London. Filming also took place at Shepperton Studios and Longcross Studios in Surrey between
              October and December 2012. Other filming locations included Wembley, Borough Market, Hayes, and Stonehenge. Alexander tweeted that
              principal photography wrapped on December 14, 2012. In a 2013 report on film production costs for films from FilmL.A. Inc., indicated a
              gross budget of $140 million, with a UK tax offset of $17.3 million for Thor: The Dark World. In 2016, Disney company accounts stated the
              budget spend wad $237.6 million on Thor: The Dark World but $37 million of this was offset by payments from the UK tax authority.
            </p>
            <p>
              Kramer morgenthau, who worked with Taylor on Game of Thrones, was brought in as the director of photography. Morganthau said, "We wanted
              a grittier, boots-on-the-ground feeling, inspired by what Alan and I had done on Game of Thrones. We wanted the realms to feel grounded,
              like a real place,  while at the same time respecting the magical 'planet of the Gods' feeling and theme." Thor: The Dark World was
              Morganthau's first time shooting a feature film digitally. For the film, Morganthau chose the Arri Alexa Plus, although he tested with the
              Sony F65 but found the Alexa to be more pleasing. In addition to the Alexa, Red Epic and Canon EOS 4D Mark II cameras were used for
              second unit filming. With the Alexa, Morganthauused Panavision anamorphic lenses. Morgenthau said, "The leneses brought some of the magic
              and mystery of photochemical back to digital, that big-movie look." Morgenthau also tated that Thor: The Dark World was easily the most
              technically complex project that he has worked on but said, "it's all the same concept and the same principles as in a smaller film. You
              just scale it up. You do a lot more prep. We had three months of prep and loads of time to pre-rig stages. Part of it is having a really
              good crew, it's definitely not a one-man show."
            </p>

            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <p>
              In April 2013, McFeely said that "a lot" of writers had contributed to the film's script, and he and Markus were uncertain if they would
              receive final screenwriting credit on the film. Markus and McFeely along with Yost received final screenwriting credit, with Payne and
              Rodat receiving story credit. In July 2013, Dennings told reporters that the film was about to head into reshoots. In August, Taylor said
              he shot extra scenes with Hiddleston and was about to shoot more with Hopkins. Taylor explained that it was all a part of the "Marvel
              process" saying, "We're doing full scenes, scenes that were not in the movie before. Ww're adding scenes, creating scenes, writing
              scenes for the first time. The on involving Loki was a fun connective scene... We realized how well Loki was working in the movie, and we
              wanted to do more with him. So it was that kind of thing, it was like, 'Oh, we could do this, we could jam this in here' because he's such
              a wonderful guy to watch him do his stuff." Also in August, IMAX Corporation and Marvel Entertainment announced that the film would be
              digitally re-mastered into the IMAX 3D format and released into IMAX 3D theaters internationally beginning October 30, 2013.
            </p>
            <p>
              Taylor said The Avengers writer/director <Link to="/people/joss_whedon">Joss Whedon</Link> rewrote several scenes in the film
              explaining, "Joss came in to save our lives a couple of times. We had a major scene that was not working on the page at all in London,
              and he basically got airlifted in, like a SWAT team or something. He came down, rewrote the scene, and before he got back to his plane I
              sort of grabbed him and said, 'And this scene and this scene?' And he rewrote two other scenes that I thought had problems." In
              October 2013, Tony Curran tweeted that he would be portraying Odin's father, Bor, in a flashback sequence. In November 2013, Feige stated
              that the film was intended to be the conclusion of the "Loki trilogy", which examined the relationship of Thor and Loki throughout Thor,
              The Avengers, and this film. Loki was originally intended to die in the film, however, after test audiences did not believe he was
              actually dead, Marvel Studios decided to alter the character's ending. The film's mid-credits scene was directed by
              <Link to="/people/james_gunn"> James Gunn</Link>, the director of Marvel Studios' Guardians of the Galaxy. The film underwent multiple
              changes during the reshoots and editing process, with Taylor believing his initial version "had more childish wonder", including
              starting the film with children, and an overall "more magical quality." He noted the reshoots "inverted" the original plot in certain
              ways, such as Loki no longer dying.
            </p>
            <div className="img-left img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Reine_fr%C3%A5_Reinebringen_crop.jpg/250px-Reine_fr%C3%A5_Reinebringen_crop.jpg"
                alt="Lofoten Island"
              />
              <p>Photo of the Lofoten islands off the coast of Norway, taken in July 2008.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Asgard_in_Thor_The_Dark_World.jpg/250px-Asgard_in_Thor_The_Dark_World.jpg"
                alt="Same island in the film with CGI."
              />
              <p>The same island used in the film with CG Asgardian structures added by Double Negative.</p>
            </div>
            <p>
              The film's viusal effects were completed by seven visual effects studios, including Double Negative and Luma Pictures. Blur Studio was the main
              visual effects studio behind the film's prologue sequence waking place 5,000 years before the start of the film, on the Dark Elves homeworld of
              Svaralfheim. The sequence consisted mostly of computer graphics with live-action shots interwoven throughout. The use of CGI allowed for greater
              freedom of movement by the characters as the live-action costumes were too constrictive.
            </p>
            <p>
              Taylor wanted Asgard in this film to have a more natural look than its predecessor. To achieve this, crews filmed the coast of Norway with an
              Arri Alexa camera for three days in a helicopter, capturing six hours of footage. Double Negative then embedded their CG rendering of Asgard
              on shots of the natural landscape. Double Negative visual effects supervisor Alex Wuttke said, "The benefit of that is that you have some
              real-world terrain to work with, so you have buildings that have to convey natural features. Then from there we went in there populating the
              terrain with different buildings." For scenes taking place on Svartalfheim, production filmed in Iceland with Double Negative adding ruins,
              mountains, Dark Elf ships, and skies.
            </p>
            <p>
              For the shot of the levitating truck, wich was used in the film to demonstrate the strange phenomena brought on by the coming of the alignment
              of the worlds, filmmakers attached a cement truck to a large hydraulic rig, which could be programmed to change speed and movement. In
              order to create Algrim's transformation into Kurse, Double Negative morphed live-action performances of Adewale Akinnuoye-Agbaje as both Algrim
              and Kurse. Double Negative then added in smoke and lava-like effects.
            </p>
            <p>
              The film's climactic battle sequence takes place through the nine worlds by the use of portals. Visual effects supervisor Jake Morrison said,
              "We ended up calling this 'time toffee', so as you punch through from one realm to another it's almost like cling film or a slightly
              gelatinous membrane you have to pass through. It bends a little bit then rips and spits the person out. The other thing we wanted to do was to
              make sure it was quite fast from an editorial point of view. In the fight scenes there are times when Thor and Malekith are portalingall over
              the place, quite frankly. We made sure we always kept up the momentum and never stopped the fight. It was a way of making sure the audience
              weren't conscious there was an effect going on."
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            In August 2012, Patrick Doyle said that he had discussions with the director about potentially returning to score the film. By April 2013,
            Carter Burwell had been hired to compose the score, but by the following month he left the film over creative differences. In June 2013,
            Marvel hired Brian Tyler, who scored <Link to="/mcu/iron_man_3">Iron Man 3</Link>, to replace Burwell. Tyler said the previous film had an
            "attitude and was grounded in limitations" whereas the Thor film allowed for "all-out-regal themes that could be as epic as I could make them."
            The composer described The Dark World as "science fiction meeting classic medieval war", leading to a score that drew from works of both
            genres such as <Link to="/starwars">Star Wars</Link> and The Lord of the Rings. Azam Ali is a featured vocalist on the score. The
            soundtrack was released gitially on October 28, 2013.
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tom_Hiddleston_by_Gage_Skidmore.jpg/250px-Tom_Hiddleston_by_Gage_Skidmore.jpg"
                alt="Tom Hiddleston SDCC 2013"
              />
              <p>Hiddleston as Loki at the 2013 San Diego Comic-Con to promote the film.</p>
            </div>
            <p>
              In March 2013, Marvel announced the release of a two-issue comic book prelude by writers Craig kyle and Christopher Yost and artist Scot
              Eaton in June 2013. In April 2013, Marvel released the first trailer for Thor: The Dark World. Forbes said, "This trailer fits nicely into
              that larger markeing push for Marvel's brand. It puts all of the recognizable characters from the first film front and center, presents
              the action as a team event reminiscent of the Avengers, and once again Loki, who was quite popular with audiences, makes an appearance."
              The Los Angeles Times said, "Evident throughout the trailer is director Alan Taylor's influence; the Game of Thrones director's hand can be
              seen in the battle sequences, and Asgard, a bright and shiny kingdom under Thor director Kenneth Branagh, seems grittier in the sequel." In
              July at the 2013 San Diego Comic-Con, Hiddleston introduced footage from the film to audiences in character as loki. Also in July,
              Gameloft announced that a mobile video game titled, Thor the Dark World: The Official Game, would be released in conjunction with the
              release of the film in November.
            </p>
            <p>
              The theatrical poster for the film was released in early August 2013. Kirsten Acuna of Business Insider criticized the poster for its
              lack of originality, noting its similarities to one of the posters of Iron Man 3, both of which included the female lead clinging to the
              male lead, with both looking in opposite directions, antagonists prominently displayed in the background and supporting characters
              featured "on the side." Additionally, Marvel released a second trailer for the film as part of YouTube's Geek Week. Forbes said, "this
              150-second trailer is basically just an extended version of last April's 105-second teaser" and that "this trailer fails to showcase what's
              new this time around... making audiences question if they really don't have much else to offer." The Los Angeles Times said, that the
              trailer suggests "an ominous, epic scale for the sequel" and that "the collaboration between Thor and Loki promises to be especially
              interesting." Later in the month, producer Kevin Feige and cast member Tom Hiddleston, Natalie Portman, and Anthony Hopkins presented
              additional footage at Disney's D23 Expo.
            </p>
            <p>
              Also in August, Disney announced plans to promote the film with an attraction at Disneyland. The attraction called Thor: Treasures of
              Asgard, located next to the Stark Industries exhibit insie Innoventions in Tomorrowland, opened on November 1, 2013, and featured
              displays of Asgardian relics and transports guests to Odin's throne room, where they are greeted by Thor. The eighth episode of
              <Link to="/mcu/agents_of_shield"> Marvel's Agents of S.H.I.E.L.D.</Link>, titled "The Well", takes place in the aftermath of the events of
              Thor: The Dark World. It first aired on November 19, 2013. Jaimie Alexander reprised her role as Sif in the Agents of S.H.I.E.L.D.
              episode "Yes Men", which aired on March 11, 2014.
            </p>
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