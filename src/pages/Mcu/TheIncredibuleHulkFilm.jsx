import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const TheIncredibuleHulkFilm = () =>
{
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
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Editing"},
                {id: "3.4.2", title: "Visual effects"}
              ]}
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
              {id: "7.2", title: "Critical reception"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Future MCU appearances"},
              {id: "8.2", title: "Potential sequel"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>The Incredible Hulk (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Incredible Hulk (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg" 
            alt="The Incredible Hulk" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
           <p>
            The Incredible Hulk is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character the
            <Link to="/marvelcomics/hulk">Hulk</Link>. Produced by <Link>Marvel Studios</Link> and Valhalla Motion Pictures, and distributed by
            Universal Pictures, it is the second film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). It was directed by Louis
            Leterrier from a screenplay by Zak Penn, and stars <Link>Edward Norton</Link> as <Link to="/mcu/bruce_banner">Bruce Banner</Link>
            alongside <Link>Liv Tyler</Link>, <Link>Tim Roth</Link>, <Link>William Hurt</Link>, <Link>Tim Blake Nelson</Link>, <Link>Ty Burrell</Link>,
            and Christine Cabot. In the film, Banner becomes the monstrous Hulk as an unwitting pawn in a military scheme to reinvigorate the "super
            soldier" program through <Link>gamma radiation</Link>. He goes on the run from the military while attempting to cure himself of the Hulk.
          </p>
          <p>
            After the mixed reception to Universal's 2003 film <Link>Hulk</Link>, Marvel Studios reacquired the rights to the character, though
            Universal retained distribution rights. Leterrier, who expressed interest in directing <Link to="/mcu/iron_man_film">Iron Man</Link> (2008)
            for Marvel, was brought onboard and Penn wrote a script that was closer to the comics and the 1978-1982 television series. In April 2007,
            Norton was hired to portray Banner and to rewrite Penn's screenplay. His script positioned the film as a reboot of the series, distancing it
            from the 2003 film to give the new version its own identity. Norton was ultimately not credited for his writing. Filming took place from
            July to November 2007, primarily in Toronto, with additional filming in New York City and Rio de Janeiro. Over 700 visual effects shots were
            created in post-production using a combination of motion capture and computer-generated imagery.
          </p>
          <p>
            The Incredible Hulk premiered at the Gibson Amphitheatre in Universal City, California, on June 8, 2008, and was released in the United
            States on June 13, as part of <Link>Phase One</Link> of the MCU. It received praise for its action sequences and was considred an improvement
            over the 2003 film, but it was criticized as lacking in depth. The film grossed $265.6 million worldwide. Nortion and Marvel Studios had
            various production disagreements while working on the film, including over the final edit, which Marvel Studios deemed uncollaborative.
            Norton was replaced in the role of Banner by <Link>Mark Ruffalo</Link> for subsequent MCU appearances starting with
            <Link to="mcu/the_avengers_film">The Avengers</Link> in 2012.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <p>
              At Culver University in Virginia, U.S. military general <Link>Thaddeus Ross</Link> meets with Dr. Bruce Banner, the colleague and boyfriend
              of his daughter <Link>Betty</Link>, regarding an experiment that Ross claims is meant to make humans immune to gamma radiation. This is
              part of Ross's attempts to recreate a World War II-era "super soldier" program. The experiment fails and Banner is exposed to high levels of
              gamma radiation, causing him to transform into the Hulk if enraged or if his heart rate rises above 200 beats per minute. The Hulk destroys
              the lab and injures the general, Betty, and others outside. Banner becomes a fugitive from Ross, who wants to weaponize the Hulk.
            </p>
            <p>
              Five years later, Banner works at a bottling factory in Rio de Janeiro, Brazil, and has not transformed in five months. He trains in yoga
              and breathing techniques while collaborating anonymously with an internet user called "Mr. Blue" in his search to cure his condition. After
              Banner accidentally cuts his finger, a drop of his blood falls into a bottle of soda which is eventually ingested by an elderly consumer in
              Milwaukee, Wisconsin, giving him gamma sickness. Using the bottle to track Banner, Ross sends a special forces team led by <Link>Emil
              Blonsky</Link> to capture him. Banner transforms into the Hulk and defeats Blonsky's team, though Blonsky survives. After Ross explains
              how Banner became the Hulk, Blonsky agrees to be injected with a similar serum, gaining enhanced speed, strength, and agility.
            </p>
            <p>
              Banner returns to Culver University and reunites with Betty. Her new boyfriend, Dr. Leonard Samson, contacts Ross who soon arrives with his
              forces and Blonsky. They attack Banner at the university and he transforms into the Hulk again. Blonsky, whose judgement is impaired by the
              serum, attacks and mocks the Hulk. The Hulk severely injures Blonsky, but the serum allows him to heal quickly. Betty is almost killed by
              military fire and is saved by the Hulk, who flees with Betty and eventually reverts to Banner. The pair go on the run, and Banner contacts
              Mr. Blue who urges them to meet him in New York City. Mr. Blue is a cellular biologist Dr. <Link>Samuel Sterns</Link>, who has developed
              a possible antidote to Banner's condition. After a seemingly successful test, he warns Banner that the antidote may only reverse an initial
              transformation. Sterns reveals that he has synthesized Banner's blood samples, which Banner sent from Brazil, into a large supply, and
              wants to apply its "limitless potential" to medicine. Fearful of the Hulk's power falling into the wrong hands, Banner wants to destroy the
              supply.
            </p>
            <p>
              Blonsky and Ross's forces take Banner into custody. As Banner and Betty are taken away in a helicopter, Blonsky stays behind and orders
              Sterns to inject him with Banner's blood, as he covets the Hulk's powers. The experiment mutates Blonsky into <Link>the Abomination</Link>,
              a monstrous creature with size and strength surpassing that of the Hulk. He attacks Sterns, who gets some of Banner's blood in a cut on his
              forehead and begins mutating as well. The Abomination rampages through Harlem. Realzing that Hulk is the only one who can stop the
              Abomination, Banner convinces Ross to release him. He jumps from Ross's helicopter and transforms after hitting the ground. The Hulk defeats
              the Abomination by nearly strangling him to death with a chain, but spares his life upon hearing Betty's plea. The Hulk leaves the
              Abomination for Ross and his forces to arrest and flees New York.
            </p>
            <p>
              A month later, Banner is in Bella Coola, British Columbia, where he practices transforming in a controlled manner. Sometime later,
              <Link to="/mcu/tony_stark"> Tony Stark</Link> approaches Ross at a bar and informs him that a team is being put together.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div>
            <ul className="article-list">
              <li>
                <Link>Edward Norton</Link> as <Link to="/mcu/bruce_banner">Bruce Banner</Link>:<br/>
                A nuclear physicist and biochemist at Culver University who, because of exposure to gamma radiation, transforms into an enormous green
                humanoid monster when enraged or agitated. David Duchovny was a front-runner for the film before Norton's casting, while director Louis
                Leterrier's original choice was Mark Ruffalo who would later play Banner in future Marvel Cinematic Universe (MCU) films. Producer Gale
                Anne Hurd recalled the duality of Norton's performance in the films Primal Fear (1996) and Fight Club (1999), while Norton reminded
                producer <Link>Kevin Feige</Link> of Bill Bixby, who played Banner in the 1978-1982 television series. Lou Ferrigno, who played the Hulk
                in that series, said Norton "has a smiliar physique [and a] similar personality" to Bixby. Norton was a Hulk fan, citing the early comic
                books, the Bixby series, and Bruce Jone's run on the comics as his favorite depictions of the character. He had expressed interest in the
                role for the previous film, <Link>Hulk</Link> (2003), and was initially reluctant to take on the part after the film had strayed from the
                fugitive story that he associated with the character. He was won over by the vision of Leterrier and Marvel Studios and believed they
                were looking to him to guide the project. Norton subsequently rewrote the script. Leterrier praised Norton for bringing gravitas to the
                script, and said they were both approaching superheroes as "the new greek gods". Norton was particularly drawn to the Greek myth of
                Prometheus for the character.
              </li>
              <li>
                <Link>Lou Ferrigno</Link> voices the Hulk. During the 2008 New York Comic Con, Leterrier publicly offered Ferrigno the role. This marks
                the third time Ferrigno portrayed the Hulk, having also voice the character in the 1996-97 animated series. Originally, the Hulk's only
                line was "Betty" at the film's ending, which would have been his first word. Leterrier was aware that fans wanted him to speak
                normally and added "Leave me alone!" and "Hulk smash!". The latter line received cheers during a screening Leterrier attended. Ferrigno
                also had a cameo appearance in the film as a security guard who is bribed by Banner with a pizza.
              </li>
              <li>
                <Link>Liv Tyler</Link> as <Link>Betty Ross</Link>:<br />
                A cellular biologist and Bruce's former girlfriend, from whom he is separated as a result of his condition. Tyler was attracted to the
                love story in the script and was a fan of the Bixby series because of the "humanity and what [Banner] is going through". She was called
                about the role while driving home and accepted the part after a day, without reading the script. Tyler and Norton spent hours discussing
                Bruce and Betty's life before he became the Hulk. She said filming the part was physical and fun, and compared her performance to "a
                deer caught in the headlights" because of Betty's shock at Bruve's unexpected return into her life.
              </li>
              <li>
                <Link>Tim Roth</Link> as <Link>Emil Blonsky / Abomination</Link>:<br />
                A Russian-born officer in the United Kingdom's Royal Marines Commandos who is loaned to General Ross. Lusting for the Hulk's power,
                Blonsky is injected with various serums that transform him into a near-skeletal humanoid monster as strong as the Hulk himself. Roth said
                he took the part to please his sons, who are comic book superhero fans, and because he found Leterrier's ideas "very dark and very
                interesting". Roth was a fan of the Bixby series as a teenager. He started watching the 2003 film to prepare for the part, but stopped as
                he did not want to compare himself to it. It was Roth who suggested Blonsky be a soldier rather than a KGB agent as in the comics.
                Leterrier was a fan of Roth's work and felt it was "great watching a normal Cockney boy become a superhero", but Marvel and Norton were
                initially reluctant to cast him. Before he was cast in the film Punisher: War Zone (2008), Ray Stevenson was in discussion for the role.
                Roth trained with gun and military experts in preparation for the role, but did not work out due to Blonsky's aging. This made it
                difficult to film some stunts, including being pulled bu a harness to show Blonsky's enhanced 30-40 mile per hour running speed. Cyril
                Raffaelli performed some of his stunts. Roth enjoyed the motion capture for Abomination, which reminded him of fringe theatre. He worked
                with Terry Notary, his trainer from the film Planet of the Apes (2001), on the monster's movement. Roth was signed on for three more
                films.
              </li>
              <li>
                <Link>William Hurt</Link> as <Link>Thaddeus Ross</Link>:<br />
                Betty's father and a U.S. Army general who has dedicated his life to capturing the Hulk. Leterrier cast Hurt because "Ross is more
                physical, more explosive in this movie, and no actor goes from zero to 100 as well as Villiam". He compared Ross to  Captain Ahab. The
                Hulk was Hurt's favorite superhero, and his son is also a big fan of the character. Hurt found production very different from the typical
                "pure anxiety" of a studio film, finding it more akin to an independent film. He described Ross as "humiliated by Hulk's conscience: he
                actually sees and recognizes that it's more developed than his own, even though he's a patriot and a warrior for his country. He's
                sacrificed [much] for that purpose, but at the expense at times of his humanity, which he occasionally recovers." In June 2015, when
                reflecting on how his reprisal in the MCU film <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> (2016) was
                different from this film, Hurt said, "What I created [for The Incredible Hulk] was a Ross who was right out of the graphic novel type of
                thing, when he was as much of a cartoon, in a way, as the monsters were. His ego was just as big and his problems were just as big. I
                really did do that consciously. I created a General Ross before which created a verisimillitude for the monsters, by making him a
                human monster. I worked really hard on the makeup and the exaggerated behavior and things like that and a controlled psychosis." Sam
                Elliott had expressed interest in reprising the role from the 2003 film before Hurt was cast.
              </li>
              <li>
                <Link>Tim Blake Nelson</Link> as <Link>Samuel Sterns</Link>:<br />
                A cellular biologist who develops a possible antidote to Banner's condition. Towards the end of the film, Sterns is exposed to a
                substance that begins his transformation into the comic book villain "<Link>The Leader</Link>".
              </li>
              <li>
                <Link>Ty Burrell</Link> as <Link>Leonard Samson</Link>:<br />
                A psychiatrist who is in a relationship with Betty during Bruce's absence. Burrell had performed with Norton in the off Broadway play
                Burn This in 2003, and when Leterrier met him, he recognized Burrell as the "jerk" from the 2004 <Link>Dawn of the Dead</Link> remake,
                which was how Samson was characterized in the script before Norton rewrote it.
              </li>
              <li>
                Christina Cabot as Kathleen Sparr: A U.S. Army major who is General Ross's personal aide.
              </li>
            </ul>
            <p>
              <Link>Robert Downey Jr.</Link> makes an uncredited cameo appearance as <Link to="/mcu/tony_stark">Tony Stark</Link> at the end of the film,
              reprising his role from the MCU film <Link to="/mcu/iron_man_film">Iron Man</Link> (2008). Downey appeared as a favor to Marvel Studios
              and was frustrated that he was constantly being asked about his short appearance in the film while promoting Iron Man. He acknowledged that
              this was a smart move on Marvel's part, bringing more attention to The Incredible Hulk. Hulk co-creator <Link>Stan Lee</Link> cameos as a
              man who becomes ill when drinking soda that is poisoned with Banner's blood. Paul Soles, who voiced Banner in the 1966 The Marvel Super
              Heroes animated series, appears as kindly pizzeria owner Stanley Lieber who was friends with Banner and Betty in the past. His name is a
              reference to Stan Lee's full name. <Link>Jim Wilson</Link> and <Link>Jack McGee</Link>, supporting characters from the Hulk comics, appear
              as Culver University students played by P.J. Kerr and Nicholas Rose, respectively. Other small roles include: Brazilian Jiu-Jitsu artist
              Rickson Gracie as Bruce Banner's martial arts instructor, credited as an Aikido instructor due to Norton's background with that style;
              Brazilian actress Débora Nascimento as Martina, Banner's colleague at a beverage factory; Michael K. Williams as a Harlem bystander, a role
              that was written for him by Norton and a fan of William's series The Wire (2002-2008); and Peter Mensah as General Joe Greller, one of
              Ross's military friends. Additionally, Martin Starr played a college student who is credited as "Computer Nerd". In May 2019, Feige said
              this character had been retroactively named <Link>Roger Harrington</Link>, which is Starr's role in the MCU films
              <Link to="/mcu/spiderman_homecoming"> Spider-Man: Homecoming</Link> (2017), <Link to="/mcu/spiderman_far_from_home">Spider-Man:
              Far From Home</Link> (2019), and <Link to="/mcu/spiderman_no_way_home">Spider-Man: No Way Home</Link> (2021).
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <h4 className="article-heading-4" id="3.4.1">Editing</h4>
            <h4 className="article-heading-4" id="3.4.2">Visual effects</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Music</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Future</h2>
          <div>
            <h3 className="article-heading-3" id="8.1">Future MCU appearances</h3>
            <h3 className="article-heading-3" id="8.2">Potential sequel</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default TheIncredibuleHulkFilm;
