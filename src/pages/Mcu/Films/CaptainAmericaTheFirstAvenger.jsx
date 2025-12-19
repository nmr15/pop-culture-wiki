import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CaptainAmericaTheFirstAvenger = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America: The First Avenger - Pop Culture Wiki";
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
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequels", sub2: [
                {id: "8.1.1", title: "Captain America: The Winter Soldier"},
                {id: "8.1.2", title: "Captain America: Civil War"}
              ]},
              {id: "8.2", title: "Marvel One-Shot"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Captain America: The First Avenger</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America: The First Avenger</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America: The First Avenger</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg" alt="Captain America: The First Avenger poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joe Johnston</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/thor_film">Thor</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="mcu/the_avengers_film">The Avengers</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Captain America: The First Avenger</b> is a 2011 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/captain_america"> Captain America</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Paramount Pictures, it is the fifth film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Joe Johnston</Link>, written by Christopher Markus and Stephen McFeely, and stars <Link>Chris Evans</Link>
            as Steve Rogers / Captain America alongside <Link>Tommy Lee Jones</Link>, <Link>Hugo Weaving</Link>, <Link>Hayley Atwell</Link>, <Link>Sebastian Stan</Link>, <Link>Dominic Cooper</Link>,
            <Link> Toby Jones</Link>, <Link>Neal McDonough</Link>, <Link>Derek Luke</Link>, and <Link>Stanley Tucci</Link>. During World War II, Rogers, a frail man, is transformed into the super-soldier
            Captain America and must stop the <Link>Red Skull</Link> from using the <Link>Tesseract</Link> as an energy source for world domination.
          </p>
          <p>
            The film began as a concept in 1997 and was scheduled for distribution by Artisan Entertainment. However, a lawsuit disrupted the project and was not settled until September 2003. In 2005,
            Marvel Studios received a loan from Merrill Lynch, and planned to finance and release the film through Paramount Pictures. Director Jon Favreau and Louis Leterrier were interested in
            directing the project before Johnston was approached in 2008. The principal characters were cast between March and June 2010. Production began in June, and filming took place in London,
            Manchester, Caerwent, Liverpool, and Los Angeles. Several different techniques were used by the visual effects company Lola to create the physical appearance of the character before he
            becomes Captain America.
          </p>
          <p>
            Captain America: The First Avenger premiered at the El Capitan Theatre in Los Angeles on July 19, 2011, and was released in the United States on July 22, as part of <Link>Phase One</Link>
            of the MCU. The film was commercially successful, grossing over $340 million. worldwide, and received positive reviews from critics, who praised Evans' performance, the film's depiction of
            the 1940s time period, and Johnston's direction. Two direct sequels have been released: <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> (2014)
            and <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> (2016).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
            In the present day, scientists in the Arctic uncover an old aircraft with someone frozen inside and a <Link>circular shield</Link>. In March 1942, during World War II, Nazi lieutenant
            general and <Link>Hydra</Link> leader Johann Schmidt steals a mysterious relic called the Tesseract in German-occupied Norway.
            </p>
            <p>
              In New York City, Steve Rogers is rejected for U.S. Army recruitment due to his small stature and poor health. While attending the Stark Expo, an event held by famous engineer
              <Link> Howard Stark</Link>, Rogers attempts to enlist again. Overhearing Rogers tell his best friend, <Link to="/mcu/bucky_barnes">James "Bucky" Barnes</Link>, that he wants to fight for
              his country, Dr. <Link>Abraham Erskine</Link> allows Roger to enlist. He is recruited into the <Link>Strategic Scientific Reserve</Link> as part of a "<Link>super-soldier</Link>"
              experiment under Erskine, Stark, Colonel <Link>Chester Philips</Link>, and British MI6 agent <Link>Peggy Carter</Link>. Philip is not convinced by Erskine's claims that Rogers is the
              right person for the procedure until Rogers selflessly jumps on a grenade as part of a test. Erskine reveals to Rogers that he was a scientist under Schmidt, until the latter took a
              prototype version of the super-soldier formula that gave him superhuman strength but painfully changed his appearance.
            </p>
            <p>
              Schmidt and Dr. <Link>Arnim Zola</Link> harness the energies of the Tesseract to fuel Zola's inventions and Hydra's planned worldwide offensive. Schmidt discovers Erskine's location and
              sends an assassin, <Link>Heinz Kruger</Link>, to kill him. Erskine and Stark put Rogers through the super-soldier treatment, injecting him with the formula and dosing him with
              "vita-rays". After Rogers emerges from the experiment taller and more muscular, Kruger kills Erskine and flees with the last vial of the formula. Rogers pursues and captures Kruger, but
              the assassin avoids interrogation by killing himself with a cyanide capsule. The vial is destroyed during the chase. With Erskine dead and his formula lost, U.S. Senator Brandt has
              Rogers tour the nation as the mascot "Captain America" to promote war bonds while scientists study his blood and attempt to reverse-engineer the formula. In 1943, while on tour in
              Italy performing for active servicemen, Rogers learns that Barnes's unit is MIA following a battle against Schmidt's forces. Rogers has Carter and Stark fly him behind enemy lines to
              mount a rescue. Rogers infiltrates Schmidt's fortress, frees Barnes and the other prisoners, and confronts Schmidt. The latter escapes, but first he removes a mask to reveal his red,
              skull-like visage that has earned him the sobriquet "Red Skull".
            </p>
            <p>
              Rogers recruits Barnes and other freed prisoners to form the <Link>Howling Commandos</Link>. Stark outfits Rogers with an upgraded uniform and a circular shield made of a rare, nearly
              indestructible metal called <Link>Vibranium</Link>. Rogers and his team sabotage various Hydra operations while he and Carter begin to fall in love. In 1945, the team assaults a train
              carrying Zola. They capture him, but Barnes falls from the train to his apparent death. Using information extracted from Zola, the final Hydra stronghold is located, and Rogers leads
              an attack to stop Schmidt from using weapons of mass destruction on major American cities. Rogers climbs aboard Schmidt's super-bomber as it takes off. During the subsequent fight,
              the Tesseract is freed from its container, and Schmidt picks it up, operning a portal into space through which he is pulled. The Tesseract burns through the plane and falls into the
              ocean. Seeing no way to land the plane without risking its weapons detonating. Rogers radios Carter to say goodbye before crashing in the Arctic. After the war ends, Stark recovers
              the Tesseract from the ocean floor but is unable to locate the aircraft, and Rogers is presumed dead.
            </p>
            <p>
              Rogers awakens in a 1940s-style hospital room. Hearing a radio broadcast of a baseball game that he attended in 1941, Rogers grows suspicious and escapes from the room. He finds
              himself in contemporary Times Square, where <Link>S.H.I.E.L.D.</Link> director <Link>Nick Fury</Link> informs him that he has been asleep for almost 70 years. In a post-credits scene,
              Fury approaches Rogers and proposes a mission with worldwide ramifications.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Captain_America-_The_First_Avenger_Comic-Con_Panel_2.jpg/500px-Captain_America-_The_First_Avenger_Comic-Con_Panel_2.jpg" 
                alt="Captain_America-_The_First_Avenger_Comic-Con_Panel"
              />
              <p>Kevin Feige, Joe Johnston, Chris Evans, and Hugo Weaving at the 2010 San Diego Comic-Con.</p>
            </div>
            <ul className="article-list">
              <li>
                <Link>Chris Evans</Link> as <Link to="/marvelcomics/captain_america">Steve Rogers / Captain America </Link>: <br />
                A frail young man who is enhanced to the peak of human ability by an experimental serum in order to aid the United States war effor. Evans, who previously worked with Marvel as the
                <Link> Human Torch</Link> in the <Link>Fantastic Four film series</Link> (2005-2007), said he declined the part three times before signing a six-picture deal with Marvel, explaining
                that, "At the time, I remember telling a buddy of mine, "If the movie bombs, I'm f---ed. If the movie hits, I'm f---ed, I was just scared. I realized my whole decision making
                process was fear-based, and you never want to make a decision out of fear. I can't believe I was almost too chicken to play Captain America." Evans ultimately agreed to the role,
                saying, "I think Marvel is doing a lot of good things right now, and it's a fun character. ... I think the story of Steve Rogers is great. He's a great guy. Even if it [were] just
                a script about anybody. I would probably want to do it. So it wasn't necessarily about the comic itself." Regarding the extent of the character's abilities Evans remarked, "He would
                crush the Olympics. Any Olympic sport he's gonna dominate. He can jump higher, run faster, lift stronger weight, but he can be injured. He could roll an ankle and be out for the
                season. He's not perfect, he's not untouchable. So a lot of the effects, if I'm going to punch someone they're not going to put them on a cable and fly them back 50 feet, but he's
                going to go down, probably not getting back up, which I think humanizes it. It makes it something that, again, I think everyone can relate to a little bit more, which I really like."
                Evans did daily high-weight training and stuck to a high-calorie diet to get in shape for the part. Theater actor Leander Deeny was Evans' body double in some shots for Steven Rogers'
                pre-transformation pyhsique, and also appears as a bartender.
              </li>
              <li>
                <Link>Tommy Lee Jones</Link> as <Link>Chester Philips</Link>: <br />
                A colonel in the United States Army and member of the Strategic Scientific Reserve who heads the project to create super soldiers. The character was updated from the comics, where
                Philips was the one to recruit Rogers to join Project Rebirth that made him Captain America. Jones described the character as "the one you've seen in a thousand movies: the gruff,
                skeptical officer overseeing a team of talented, slighlty sarcastic, speacially talented soldiers".
              </li>
              <li>
                <Link>Hugo Weaving</Link> as <Link>Johann Schmidt / Red Skull</Link>: <br />
                Adolf Hitler's head of advanced weaponry and commander of the terrorist organization Hydra whose own plan for world domination involves harnessing the power of the magical object known
                as the Tesseract. Weaving stated that he patterned Red Skull's accent on those of Werner Herzog and Klaus Maria Brandauer. About the character, Weaving remarked,"I think the major
                difference between Skull and Cap, they've both had the serum, and the serum seems to augment certain qualities that each of them have. Cap is much more in tune with other people I think.
                Schmidt is in tune with himself, and his own needs, and his own ego, so I suppose it augments that. From that point of view, they're quite opposite."
              </li>
              <li>
                <Link>Hayley Atwell</Link> as <Link>Margaret "Peggy" Carter</Link>: <br />
                An officer with the Strategic Scientific Reserve who works with Philips on the super soldier project. Regarding her preparation for the role, she said, "I'm training at the moment six days
                a week to make her a bit more military and make it convincing that I could kick butt." About the character, Atwell stated, "I likened her character to that famous Ginger Rogers quote. She
                can do everything Captain America can do, but backwards and in high heels. She's an English soldier through and through, although she always looks fabulous. She might stand there with a
                machine-gun shooting Nazis, but she's obviously gone to the loo beforehand and applied a bit of lipstick. She doesn't need to be rescued. That's exciting to me, her strength." She added,
                "I think she's quite stubborn, a slightly frustrated woman who struggles with being a woman in that time. But more importantly she's a modern woman and she sees something in Captain America
                that she relates to, and becomes kindred spirits. He treats her very differently to how she's been treated by lots of men, in this kind of dominated world she lives in. So she's very much a
                fighter."
              </li>
              <li>
                <Link to="/sebastian_stan">Sebastian Stan</Link> as <Link to="/mcu/bucky_barnes">James Buchanan "Bucky" Barnes</Link>: <br />
                A sergeant in the United States Army, Rogers' best friend, and member of his squad of commandos. Stan signed on for "five or six
                pixtures". He revealed that he did not know anything about the comic books, but watched a lot of documentaries and films aboout World
                War II in preparation for the role, calling Band of Brothers "very helpful". About the role, Stan stated, "Steve Rogers and Bucky are both
                orphans and kind of like brothers. They kind of grow up together and look after each other. It's a very human, relatable thing... I also
                wanted to look out for how their relationship changes once Steve Rogers becomes Captain America. There's always a competition and they're
                always one-upping each other. I paid attention to how Bucky is affected by Steve's change and suddenly Steve is this leader".
              </li>
            </ul>
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
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Future"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Sequels</h3>
            <h4 className="article-heading-4" id="8.1.1">Captain America: The Winter Soldier</h4>
            <h4 className="article-heading-4" id="8.1.2">Captain America: Civil War</h4>
            <h3 className="article-heading-3" id="8.1">Marvel One-Shot</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default CaptainAmericaTheFirstAvenger;