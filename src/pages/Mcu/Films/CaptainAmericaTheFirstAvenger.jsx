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
              {id: "7.2", title: "Critical response"}
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
              <li>
                <Link to="/dominic_cooper">Dominic Cooper</Link> as <Link to="/mcu/howard_stark">Howard Stark</Link>: <br />
                The father of <Link to="/mcu/tony_stark">Tony Starj</Link> who worked on various government projects dating back to the World War II era.
                About the role, Cooper stated, "It's an opportunity where you can see his future because I know the guy who becomes my son and I see
                myself as an older version in <Link to="/mcu/iron_man_2">Iron Man 2</Link> which is great for an actor to have those tools. All I know of
                him is that he's a fantastic engineer and inventor and a very slick Howard Hughes type that's into aviation and women!"
              </li>
              <li>
                <Link to="/toby_jones">Toby Jones</Link> as <Link to="/mcu/arnim_zola">Arnim Zola</Link>: A biochemist for the Nazi party.
              </li>
              <li>
                <Link to="/neal_mcdonough">Neal MDonough</Link> as <Link to="/mcu/timoth_dum_dum_dugan">Timothy "Dum Dum" Dugan</Link>: <br />
                A member of Rogers' squad of commandos. McDonough wore the characer's signature bowler hat and said he grew Dugan's trademark mustache.
                About his role in the film he remarked, "Oh, I'm going to see a lot of action. [I'm] the go-to guy, so I'm very happy with that."
                McDonough was signed on to appear in multiple projects for Marvel, not limited to films.
              </li>
              <li>
                Derek Luke as <Link to="/mcu/gabe_jnoes">Gabe Jones</Link>: <br />
                A member of Rogers' squad of commandos. Luke said he was cast without a script or much of a description of the character. As to why he
                took the part. "I just believed that Marvel was doing some really great work, great messages in films. The good versus evil and I was
                just like, 'How can I be down?'"
              </li>
              <li>
                <Link to="/stanley_tucci">Stanley Tucci</Link> as <Link to="/mcu/abraham_erskine">Abraham Erskine</Link>: <br />
                The scientist who created the Super Soldier Serum. Tucci said that what drew him to the role was the opportunity to do a German accent,
                which was something he always wanted to try.
              </li>
            </ul>
            <p>
              <Link to="/samuel_l_jackson">Samuel L. Jackson</Link> reprises his role as Nick Fury, the director of the super-spy agency,
              <Link>S.H.I.E.L.D.</Link>. Kenneth Choi appears as <Link>Jim Morita</Link>, a Japanese-American member of Rogers' squad of commandos. Choi
              said he was the last actor to audition for the part and that he read sides from Saving Private Ryan. About his preparation for the role,
              Choi said, "[I] did a lot of WWII research especially in regards to the 'Nisel' soldiers, or Japanese-American soldiers. I wanted to get
              as much true, real-life information for a guy like Jim Morita fighting in WWII. I felt that if I had built a factual basis for him, I
              could then let go and permit the character to exist in the Marvel Universe, which allows for a lot of imaginative circumstances." Bruno
              Ricci stars as <Link>Jacques Dernier</Link>, a French member of Rogers' squad of commandos. Ricci auditined for and got the part while
              filming the French series The Hawk. JJ Felid appears as <Link>James Montgomery Falsworth</Link>, a Brisih member of Rogers' squad of
              commandos. Felid called his part in the film "a very physical job. I play one of the Captain's sidekicks so I've been running around
              shooting things and blowing things up and trying to look cool for about a year." Additionally, Richard Armitage portrays
              <Link> Heinz Kruger</Link>, the Red Skull's top assassin, Lex Shrapnel portrays <Link>Gilmore Hodge</Link>, a candidate for the super
              soldier program, Michael Brandon portrays <Link>Brandt</Link>, a United States Senator who recognizes the PR potential of Captain
              America. <Link>Jeff Goldblum</Link> had originally been approached to play the part; he later played <Link>Grandmaster</Link> in
              <Link to="/mcu/thor_ragnarok"> Thor: Ragnarok</Link> (2017). <Link>David Bradley</Link> appears as the church keeper where the Tesseract
              is held. Natalie Dormer portrays Lorraine, a private who attempts to seduce Rogers, and <Link>Jenna Coleman</Link> appears as Connie,
              Bucky's date at the World Expo. Laura Haddock, who would go on to portray <Link>Meredith Quill</Link> in
              <Link to="/mcu/guardians_of_the_galaxy_film" >Guardians of the Galaxy</Link> (2014), hasa brief appearance as an autograph seeker.
              Guardians of the Galaxy writer/director <Link>James Gunn</Link> jokingly claimed that this was
              <Link to="/mcu/peter_quill"> Peter Quill</Link>'s grandmaster. <Link>Stan Lee</Link> has a cameo appearance as a general.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              In April 1997, Marvel Studios was in negotiations with Mark Gordon and Gary Levinson to produce Captain America, and Larry Wilson and
              Leslie Boham were set to write a script. In May 2000, Marvel teamed with Artisan Entertainment to help finance the film. However, a lawsuit
              arose between <Link to="/marvelcomics">Marvel Comics</Link> and <Link>Joe Simon</Link> over the ownership of Captain America copyrights,
              disrupting the development process of the film. The lawsuit was eventually settled in September 2003. Following the settlement, Marvel was
              preparing to license the film rights to <Link>Warner Bros.</Link> until producer David Maisel suggested that the company produce the film
              themselves. In 2005, Marvel received a $525 million investment from Merrill Lynch, allowing them to independently produce ten films,
              including Captain America. Paramount Pictures agrred to distribute the film. Originally, the film would stand alone; producer <Link>Kevin
              Feige</Link> said "about half" the movie would be set during World War II before moving into the modern day. Producer Avi Arad said, "The
              biggest opportunity with Captain America is as a man 'out of time', coming back today, looking at our world through the eyes of someone who
              thought the perfect world was small-town United States. Sixty years go by, and who are we today? Are we better?" He cited the Back to the
              Future trilogy as an influence, and claimed he had "someone in mind to be the star, and definitely someone in mind to be the director". In
              February 2006, Arad hoped to have a summer of 2008 theatrical release date. <Link>Jon Favreau</Link> approached Arad to direct the film as
              a comedy, but he chose to make <Link to="/mcu/iron_man_film">Iron Man</Link> (2008) instead. In April 2006, David Seif was hired to write
              the script. He explained that Captain America was his favorite superhero as a child because "my dad told me I could one day be Captain
              America". Joe Johnston met with Marvel to dicsuss directing the film.
            </p>
            <p>
              Captain America was put on hold during the 2007-2008 Wrtiers Guild of America strike. However, in January 2008, Marvel Entertainment
              reached an interim comprehensive agreement with the Writers Guild of America that would put writers immediately back to work on various
              projects that were under the company's development. On May 5, 2008 (after the success of Iron Man), Marvel announced the film The First
              Avenger: Captain America (the working title) for release on May 6, 2011 (before being pushed back to July 22). Louis Leterrier, director of
              <Link to="/mcu/the_incredible_hulk_film"> The Incredible Hulk</Link> (2008), viewed some of the concept art being created for the film and
              was impressed enough to offer his services, but Marvel turned him down. Johnston finally signed on in November 2008, and he hired
              <Link> Christopher Markus & Stephen McFely</Link> to rewrite. Feige cited Johnston's directorial work on October Sky (1999) and The
              Rocketeer (1992) and his special effects work on the <Link>original Star Wars trilohy</Link> (1977-1983) to explain why he was an
              appropriate choice. <Link>Raiders of the Lost Ark</Link> (1981), in which Johnston worked for the special effects, was an influence on the
              film, because they hoped the film would not feel like a period piece.
            </p>
            <p>
              When asked whether anti-US sentiments would affect the film's box office, Feige said, "Marvel is perceived pretty well around the world
              right now, and I think putting another uber-Marvel hero into the worldwide box office would be a good thing. ... We have to deal with much
              the same way that Captain America, when thawed from the Artctic Ice, entered a world that he didn't recognize," similar to the way Stan Lee
              and Jack Kirby reintroduced the character in the 1960s. Likewise, Arad noted, "Captain America stands for freedom for all democracies, for
              hope all around the world. He was created to stop tyranny and the idea of stopping tyranny is important today as it was then. So I think
              that we will have some interesting challenges but at the end of the day if the movie is terrific and the movie talks to the world, it's
              not about one place, it's about the world and I think [on] that basis it will be very successful". Later, after the election of US President
              Barack Obama, Feige commented, "The idea of change and hope has permeated the country, regardless of politics, and that includes Hollywood.
              Discussions in all out development meetings include the zeitgeist and how it's changed in the last two weeks. Things are being adjusted".
              The creative team opted to not push the title character to fight any members of the Nazi Party like in a usual World War II movie, as their
              goal was to depict the conflict through the Marvel Universe's "prism". Although they didn't have problems to feature Nazis in the film, with
              Feige loving an iconic Captaim America cover where the character punches Adolf Hitler out, the team felt that using <Link>Hydra</Link> as
              the main antagonists would make them be "true" to the comic book's many aspects. It was because of this that Markus and McFeely found
              sense in using the <Link>Cosmic Cube</Link>, already set up in <Link to="/mcu/thor_film">Thor</Link> (2011), as the film's MacGuffin, while
              using a younger Howard Stark as a key ally for the protagonist would bring, according to Markus, "that Tony Starkness".
            </p>

            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Joe_Johnston.jpg/500px-Joe_Johnston.jpg" 
                alt="Joe_Johnston" 
              />
              <p>Johnston at the 2010 San Diego Comic-Con</p>
            </div>
            <p>
              In December 2009, director Joe Johnston indicated that he planned to start filming in April 2010. In a separate interview that month, he
              described the film's pre-production: "Rick Heinrichs is production-designing and we're set up down in Manhattan Beach, California. ... We
              have eight or ten really talented artists, and we all just sit around all day and draw pictures and say, 'Hey, wouldn't it be cool if we
              could do this?' It's that phase of the production where money doesn't matter: 'Let's put all the greatest stuff up on the wall and [then
              later] see what we can afford.'" The film, he said, will begin "in 1942, 1943" during World War II. "The stuff in the '60s and '70s [comic
              books] we're sort of avoiding. We're going back to the '40s, and then forward to what they're doing with Captain America now". In February
              2010, Johnston stated that the <Link>Invaders</Link> will appear in "the entire second half" of the film, leading fans to speculate this
              was the World War II-era Marvel superhero team of that name, and in November, Johnston refuted speculation that the
              <Link> Sub-Mariner</Link>, an Invaders team member in the comics, would be included. Johnston later explained that "the Invaders" had been
              discussed simply as a possible name for the squad of commandos Captain America leads in the film. Christopher Markus, one of the
              screenwriters, said the unnamed group was "called the <Link>Howling Commandos</Link> in the script, but no one says that out loud".
            </p>
            <p>
              The design as a whole tried to create technology that could be built in the 1940s, though with the added Cube technology in Hydra's case.
              Abandoned Nazi projects or actual vehicles from the period were used as inspiration. Daniel Simon, who was previously responsible for many
              vehicle designs in Tron: Legacy (2010), was appointed Lead Vehicle Designer. Director Johnston cited Simon's book Cosmic Motors as a reason
              to trust his influence, saying "he's sort of the guy I wanted to be when I was designing stuff for Star Wars". The Red Skull's car, for
              instance, was based on two Mercedes-Benz vehicles from the 1930s, the 540K and the G4.
            </p>
            <p>
              In March 2010, it was reported that Chris Evans was cast as Captain America and Hugo Weaving as the Red Skull; Marvel Studios confirmed the
              latter in May. <Link>John Krasinski</Link>, <Link>Channing Tatum</Link>, Chance Crawford, Ryan Phillips, Garrett Hedlund, Michael Cassidy,
              Patrick Flueger, Scott Porter, Wilson Bethel, Mike Vogel, Dane Cook, Ryan McPartlin, Ethan Peck, <Link>Zachary Levi</Link>,
              <Link> Glen Powell</Link>, Jensen Ackles, <Link>Wyatt Russell</Link>, and <Link>Chris Pratt</Link> were considered for the role of
              Captain America. Casting director Sara Halley Finn said Evans was cast in part because of his relatable humility alongside a vulnerability
              and strength that could portray both "skinny" Steve Rogers and Captain America. In April 2010, Sebastian Stan, who also originally
              auditioned for the title role, was cast as Bucky Barnes. Stan was contracted for multiple films. When casting Stan, Feige believed he would
              be a good Barnes but a "great" Winter Soldier in future films. Also in April, Marvel announced that Hayley Atwell had been cast as Peggy
              Carter, and that the film's name had been changed from The First Avenger: Captain America to Captain America: The First Avenger.
              <Link> Keira Knightley</Link>, <Link>Alice Eve</Link>, and <Link>Emily Blunt</Link> were also considered for the role of Peggy Carter.
              The next day it was reported that <Link>Joss Whedon</Link> would be rewriting the script as part of his negotiation to write and direct
              <Link to="mcu/the_avengers_film"> The Aveners</Link> (2012). Whedon said in August, "I just got to make some character connections. The
              structure of the thing was really tight and I loved it, but there were a couple of opportunites to find his voice a little bit, and some of
              the other characters, and make the connection so that you understood exactly why he wanted to be who he wanted to be. And progressing
              through the script to flesh it out a little bit". Samuel L. Jackson revealed in an interview that he would reprise his role as Nick Fury
              in the film.
            </p>
            <p>
              In May, Toby Jones entered final negotiations to play Arnim Zola. Iron Man director Jon Favreau said a younger Howard Stark would appear in
              the film, played by Dominic Cooper. Atwell revealed that Tommy Lee Jones would have a role in the film. By June, Neal McDonough was in talks
              to play Dum Dum Dugan. Four days later, he confirmed he was taking the part. The same day, Stanley Tucci joined the cast as Dr. Abraham
              Erskine, the scientist who created the super-soldier serum.
            </p>

            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <div className="img-right img-card">
              <img 
                src="https://en.wikipedia.org/wiki/File:Captain_america_set.JPG" 
                alt="Captain America set" 
              />
              <p>Photo taken in Manhattan on the set of Captain America: The First Avenger</p>
            </div>
            <p>
              Principal photography began on June 28, 2010, with the working title FrostBite. On the same day, Marvel confirmed that Lee Jones had been
              cast to play US Army Colonel Chester Philips. The next day, Marvel confirmed that Cooper would portray the younger version of Howard
              Stark, the character played by John Slattery in Iron Man 2 (2010). It was announced that the film would shoot in London in late July and
              was expected to include scenes featuring key London landmarks. War scenes were filmed in September at the former Royal Navy Propellant
              Factory in the Welsh village of Caerwent. Filming was scheduled to take place that month in the Northern Quarter of Manchester, where
              parts of Alfie (2004) and Sherlock Holmes (2009) had been shot, followed by the Stanley Dock area of Liverpook, both doubling for the
              period's Lower East Side of Manhattan. Futher scenes were scheduled to be shot in Liverpool's Albert Dock. Johnston included a scene of a
              technology fair that includes in passing a display case containing the 1940s android superhero known as the original Human Torch, another
              character like Captain America, in comics published by Marvel Comics' predecessor, Timely Comics.
            </p>
            <p>
              Some filming also took place at Pinewood Studios, with Pinewood's A Stage, their South Dock, and their Underwater Stage all being used by
              the crew. Six months of filming also occurred at Shepperton Studios, with nine stages being used.
            </p>
            <p>
              In July 2010, Marvel Studios head Kevin Feige said that both this film and Thor would be released in 3-D, Johnston did a one-day test
              shooting with a 3-D rig, rather than shooting in 2-D and converting, and found it "a nightmare" due to bulky gear, calibration issues and
              restricted filmmaking options. Nevertheless, he said he believes 3-D is "a new challenge and it's exciting". Feige insisted that the
              conversion would not compromise the film's image quality, as the decision to release the film in 3-D was made early in development, and
              that "an unprecdented amount of time" would be devoted to the conversion process, to render all the film's visual effects in true 3-D.
              In November 2010, Stanley Tucci stated that he had completed filming his scenes and that the rest of the production would wrap in about
              three weeks.
            </p>

            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <p>
              In February 2011, it was announced that Alan Silvestri had been chosen to compose the film score. In March 2011, it was reported that
              Captain America: The First Avenger would be undergoing reshoots in the United Kingdom and in Los Angeles in April 2011. Writer Eric
              Pearson, who was part of Marvel Studios' writers program, did uncredited work creating lines of dialogue for Evans to say during
              automated dialogue replacement (ADR) to help make the film cohesive. A scene was also filmed in New York City's Time Square on April 23,
              2011.
            </p>
            <p>
              The film features nearly 1,600 visual effects shots, which were split between thirteen different companies. To achieve the appearance of
              the skinny, pre-serum Steve Rogers, director Joe Johnston stated that he used two major techniques:
            </p>
            <p>
              Most of the shots were done by an L.A. company called LOLA that specializes in digital "plastic surgery". The technique involved shrinking
              Chris in all dimensions. We shot each skinny Steve scene at least four times; once like a normal scene with Chris and his fellow actors in
              the scene, once with Chris alone in front of a green screen so his element could be reduced digitally, again with everyone in the scene but
              with Chris absent so that the shrunken Steve could be re-inserted into the scene, and finally with a body double mimicking Chris's actions
              in case the second technique were required. When Chris had to interact with other characters in the scene, we had to either lower Chris
              or raise the other actors on apple boxes or elevated walkways to make skinny Steve shorter in comparison. For close-ups, Chris' fellow
              actors had to look at marks on his chin that represented where his eyes would be after the shrinking process, and Chris had to look at
              marks on the tops of the actor's head to represent their eyes. ... The second technique involved grafting Chris's head onto the body double.
              This technique was used mostly when Chris was sitting or lying down, or when a minimum of physical acting was required...
            </p>

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