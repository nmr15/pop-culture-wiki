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
            </ul>
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
