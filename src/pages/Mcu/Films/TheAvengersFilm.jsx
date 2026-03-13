import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const TheAvengersFilm = () =>
{
  useEffect(() =>
  {
    document.title = "The Avengers (film) - Pop Culture Wiki";
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
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Trailers"},
              {id: "4.2", title: "Tie-in comic"},
              {id: "4.3", title: "Promotional partners"},
              {id: "4.4", title: "Video game"}
            ]}
          />
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
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>The Avengers (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Avengers</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Avengers (film)</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" alt="The Avengers poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joss Whedon</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/iron_man_3">Iron Man 3</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>The Avengers</b> (titled <b>Avengers Assemble</b> in the United Kingdom and Ireland) is a 2012 American superhero film based on the
            <Link to="/marvelcomics"> Marvel Comics</Link> superhero team <Link>of the same name</Link>. Produced by <Link>Marvel Studios</Link> and
            distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Written and directed by <Link>Joss Whedon</Link>, the film features and ensemble cast including <Link>Robert Downey Jr.</Link>,
            <Link> Chris Evans</Link>, <Link>Mark Ruffalo</Link>, <Link>Chris Hemsworth</Link>, <Link>Scarlett Johansson</Link>, and
            <Link> Jeremy Renner</Link> as the <Link>Avengers</Link>, alongside <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, and
            <Link> Samuel L. Jackson</Link>. In the film, <Link t0="/mcu/nick_fury">Nick Fury</Link> and the spy agency <Link>S.H.I.E.L.D.</Link> recruit
            <Link to="/mcu/tony_stark">Tony Stark</Link>, <Link to="/mcu/steve_rogers">Steve Rogers</Link>, <Link to="/mcu/bruce_banner">Bruce
            Banner</Link>, <Link to="/mcu/thor">Thor</Link>, <Link to="/mcu/natasha_romanoff">Natasha Romanoff</Link>, and
            <Link to="/mcu/clint_barton"> Clint Barton</Link> to form a team capable of stopping Thor's brother <Link>Loki</Link> from subjugating Earth.
          </p>
          <p>
            The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film
            <Link to="/mcu/iron_man_film"> Iron Man</Link> in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring
            together Stark (Downey), Rogers (Evans), Thor (Hemsworth), and Banner (portrayed by <Link>Edward Norton</Link> in the 2008 film
            <Link to="/mcu/the_incredible_hulk_film"> The Incredible Hulk</Link>) from Marvel's previous films. After the signing of Johansson as
            Romanoff in March 2009, Renner as Barton in June 2010, and Ruffalo to replace Norton as Banner in July 2010, the film was pushed back for a
            2012 release. Whedon was hired in April 2010 and rewrote the original screenplay by Zak Penn. Production begain in April 2011 in Albuquerque,
            New Mexico, before moving to Cleveland, Ohio, in August and New York City in September. The film has more than 2,200 visual effects shots.
          </p>
          <p>
            The Avengers premiered at the El Capitan Theatre in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the
            final film in <Link>Phase One</Link> of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action
            sequences, acting, and musical score. It grossed over $1.5 billion worldwide, setting numerous box office records and becoming the
            third-highest-grossing film of all time at the taime of its release and the highest-grossing film of 2012. It was the first Marvel production
            to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire
            magazine poll. It received a nomination for Best Visual Effects at the 85th Academy Awards, among numerous other accolades. Three sequels
            have been released: <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> (2015),
            <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> (2018), and <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>
            (2019).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/67/Coulson_Hill_Fury.jpg" alt="Coulson_Hill_Fury"/>
                <p>S.H.I.E.L.D. at Joint Dark Energy Mission Facility</p>
              </div>
              <p>
                After being exiled from the Nine Realms following his actions in <Link>Asgard</Link>, Loki wanders the periphery of outer space before coming
                into contact with the <Link>Other</Link>, the servant of a mysterious <Link>warlord</Link>. The Other makes a deal with Loki: in exchange
                for recovering the <Link>Tesseract</Link>, a powerful energy source being stuied by S.H.I.E.L.D. on Earth, his master promises to give Loki
                command over the <Link>Chitauri</Link>, a warmongering race of cyborgs so that he may conquer humanity. Seeing this as a chance for
                greatness, Loki accepts. On Earth, Nick Fury, <Link to="/mcu/maria_hill">Maria Hill</Link>, 
                <Link to="/mcu/phil_coulson"> Phil Coulson</Link>, <Link>Erik Selvig</Link>, and Clint Barton are called to the Joint Dark Energy Mission
                Facility in the Mojave Desert, where Dr. Selvig is researching the Tesseract. The Tesseract has recently begun emitting strange quantities
                of energy on its own accord, prompting the facility to be evacuated.
              </p>
            </div>
            <div className="flex">
              <p>
                Before any necessary precautions can be made. Selvig's Tesseract Accelerator activates, opening a portal from which Loki appears.
                Announcing his intention to conquer Earth, Loki steals the Tesseract. He uses the <Link>Scepter</Link>, given to him by the Other, to
                enslave the minds of Selvig, Barton, and several S.H.I.E.L.D. agents, aiding him in his getaway. Despite the efforts of Fury and Hill to
                stop him, Loki escapes. In response, Fury reactivates the Avengers Initiative.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/72/Avengers_41.jpg" alt="Loki"/>
                <p>Loki arrives</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/93/BlackWidow01Interrogation1-Avengers.png" alt="Black Widow"/>
                <p>Black Widow on a mission</p>
              </div>
              <p>
                Despite orders from the <Link>World Security Council</Link> to proceed with "Phase 2," Fury sends Natasha Romanoff to locate Bruce Banner,
                who has been living in Kolkata, India as a doctor. Agent Coulson is sent to recruit Tony Stark. Both of them are hired to help locate the
                Tesseract. Fury himself meets with Steve Rogers, informing him of Loki's theft of the Tesseract, requesting his help in recovering it and
                subduing the invader. All three men accept the offer, though Rogers is reluctant to do anything involving the Tesseract after his
                experiences with it in World War II. Banner is also hesitant to assist, fearing that his alter-ego, the Hulk, may cause mayhem.
              </p>
            </div>
            <div className="flex">
              <p>
                The group gathers on the <Link>Helicarrier</Link>, where Banner starts tracking the gamma radiation emitted by the Tesseract, while
                S.H.I.E.L.D. tries to find Loki. Meanwhile, Loki uses the scepter to communicate with the Other, who warns him that the consequences will be
                unspeakable if he should fail. Shortly after cutting off contact, Loki is discovered in Stuttgard, Germany. He attacks a man named Heinrick
                Schäfer before terrorizing a crowd of people attending a gala, providing a distraction so tat the brainwashed Barton may retrieve Iridium to
                stablize the Tesseract. Romanoff and Rogers arrive to apprehend Loki, with Rogers and Loki engaging in an even fight until the timely
                intervention of Stark, who forces Loki to surrender. After capturing him, they board a <Link>Quinjet</Link> and start their return trip to the
                Helicarrier. A lightning storm suddenly forms, and Thor appears, transported to Earth by <Link>Odin</Link> and <Link>Heimdall</Link>'s dark
                magic.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b2/Loki_in_Germany.jpg" alt="Loki in Germany" />
                <p>Loki in Germany</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/30/Thor%2C_Iron_Man_and_Captain_America.png" alt="Thor, Iron Man, Captain America" />
                <p>A fight in the woods</p>
              </div>
              <p>
                Thor takes Loki from the team's custody and carries him to a nearby forest. Thor attempts to persuade Loki into abandoning his campaign and
                returning to Asgard, but Loki, blinded by his jealousy of Thor and contempt towards Odin, refuses. Stark flies in and attacks Thor, engaging
                him in a battle that levels part of the forest. Before any further damage can be done, Rogers intervenes and attempts to get Thor to stand
                down. Thor responds by lunging at Rogers with <Link>Mjølnir</Link>, only for Cap's <Link>shield</Link> to absorb the blow. Thor finally
                agrees to work with the humans and joins them in bringing Loki to the Helicarrier.
              </p>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0d/Stark_Spangled_Banner.jpg" alt="Steve arguse with Tony and Bruce" />
                <p>Steve arguse with Tony and Bruce</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2a/62074349804c4d29a3e7o.jpg" alt="Steve and Tony" />
                <p>The Helicarrier is attacked</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/ef/Hill_%26_Fury.png" alt="Nick Fury and Maria Hill defend the Helicarrier" />
                <p>Nick Fury and Maria Hill defend the Helicarrier</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/28/HulkBlackWidow.png" alt="Hulk chases Black Widow" />
                <p>Hulk chases Black Widow</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/95/CoulsonOnlyMostlyDead-Avengers.png" alt="Phil Coulson dies" />
                <p>Phil Coulson dies</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Hawkeye%2C_Captain_America_%26_Black_Widow.jpg" alt="Hawkeye, Captain America, Black Widow" />
                <p>The team suit up</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/26/Loki_%26_Iron_Man.png" alt="Loki and Iron Man" />
                <p>Loki and Iron Man</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b5/Avengers.png" alt="The Avengers" />
                <p>The Avengers</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d0/One_way_trip.PNG" alt="Iron Man nuke portal" />
                <p>Iron Man makes a sacrifice</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/12/The_Avengers_Assembled.jpg" alt="Loki is defeated" />
                <p>Loki is defeated</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/26/Shawarma_Palace.png" alt="Avengers eat shawarma" />
                <p>The Avengers go for shawrma</p>
              </div>
            </div>
          </div>
        </div>
         <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Avengers_Cast_2010_Comic-Con_cropped.jpg/1920px-The_Avengers_Cast_2010_Comic-Con_cropped.jpg" 
                alt="he_Avengers_Cast_2010_Comic-Con"
              />
              <p>The cast of The Avengers alongside Joss Whedon and Kevin Feige at the 2010 San Diego Comic-Con</p>
            </div>
            <ul className="article-list">
              <li>
                <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>: <br />
              </li>
              <li>
                <Link>Chris Evans</Link> as <Link to="/mcu/steve_rogers">Steve Rogers / Captain America</Link>: <br />
              </li>
              <li>
                <Link>Mark Ruffalo</Link> as <Link to="/mcu/bruce_banner">Bruce Banner / Hulk</Link>: <br />
              </li>
              <li>
                <Link>Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link>: <br />
              </li>
              <li>
                <Link>Scarlett Johansson</Link> as  <Link to="/mcu/natasha_romanoff">Natasha Romanoff / Black Widow</Link>: <br />
              </li>
              <li>
                <Link>Jeremy Renner</Link> as <Link to="/mcu/clint_barton">Clint Barton / Hawkeye</Link>: <br />
              </li>
              <li>
                <Link>Tom Hiddleston</Link> as <Link>Loki</Link>: <br />
              </li>
              <li>
                <Link>Stellan Skarsgård</Link> as <Link>Erik Selvig</Link>: <br />
              </li>
              <li>
                <Link>Samuel L. Jackson</Link> as <Link t0="/mcu/nick_fury">Nick Fury</Link>: <br />
              </li>
            </ul>
          </div>
        </div>
         <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              Ideas for the film based on the Avengers begain in 2003, with Avi Arad, the CEO of Marvel Studios, first announced plans to develop the
              film in April 2005, after Marvel Enterprises declared independence by allying with Merrill Lynch to produce a slate of films that would be
              distributed by Paramount Pictures. Marvel discussed their plans in a brief presentation to Wall Street analysts; the studio's intention was
              to release individual films for the main characters to establish their identities and familiarize audiences with them before merging the
              characters together in a crossover film. Screenwriter Zak Penn, who wrote The Incredible Hulk, became attached to the film in 2006, and was
              hired by Marvel Studios to write the film in June 2007. In the wake of the 2007-2008 Writers Guild of America strike, Marvel negotiated
              with the Writers Guild of America to ensure that it could create films based on its comic book counterparts, including Captain America,
              <Link to="/marvelcomics/ant_man"> Ant-Man</Link>, and The Avengers. After the successful release of Iron Man (2008) in May, the company set
              a July 2011 release date for The Avengers. In September 2008, Marvel Studios reached an agreement with Paramount, an extension of a previous
              partnership, which gave the company distribution rights for five future Marvel films.
            </p>
            <div className="article-quote">
              <p>
                "It goes back to the very first incarnation of The Avengers. It goes to <Link>The Ultimates</Link>, it goes to everything about it. It
                makes no sense, it's ridiculous. There's a thunder god, there's a green 'id' giant rage monster, there's Captain America from the 40s,
                there's Tony Stark who definitely doesn't get along with anybody. Ultimately these people don't belong together and the whole movies is
                about finding yourself from community. And finding that you not only belong together but you need each other, very much. Obviously this
                will be expressed through punching but it will be the heart of the film."
              </p>
              <p>
                - Joss Whedon, director of The Avengers, about the film.
              </p>
            </div>
            <p>
              Casting began in October 2008 with Downey's signing. Although <Link>Don Cheadle</Link> was reported to reprise his
              <Link to="/mcu/iron_man_2"> Iron Man 2</Link> role of <Link to="/mcu/james_rhodes">War Machine</Link> for The Avengers, he later stated that
              he did not think the character would appear in the film. Simultaneously, two major developments occurred for Marvel; <Link>Jon Favreau</Link>
              was brought in as an executive producer for the film, and the company signed a long-term lease with Raleigh Studios to produce three other
              big-budget films, Iron Man 2, <Link to="/mcu/thor_film">Thor</Link>, and <Link to="/mcu/captain_america_the_first_avenger">Captain
              America: The First Avenger</Link> (2011), at their Manhattan Beach, California complex. In February 2009, Samuel L. Jackson signed a
              nine-picture deal with Marvel Entertainment to play Nick Fury in Iron Man 2 and other films. In September 2009, Edward Norton, who played
              Bruce Banner in The Incredible Hulk, stated he was open to returning in the film. The next month, executive producer Jon Favreau stated he
              would not direct the film but would "definitely have input and a say". Favreau also expressed concerns, stating, "It's going to be hard,
              because I was so involved in creating the world of Iron Man, and Iron Man is very much a tech-based hero, and then with the Avengers, you're
              going to be introducing some supernatural aspects because of Thor [...] [Mixing] the two of those works very well in the comic books, but
              I'm going to take a lot of thoughtfulness to make that all work and not blow the reality that we've created". In March 2009, Scarlett
              Johansson replaced Emily Blunt in portraying Natasha Romanoff in Iron Man 2, a deal that subsequently attached her to The Avengers. The
              following day, Marvel announced that the film's release date had been pushed back to May 4, 2012, almost a full year later. Chris Hemsworth
              and Tom Hiddleston joined the film's cast in June, returning as Thor and Loki, respectively.
            </p>
            <p>
              In July 2009, Penn discussed the crossover process, stating, "My job is to kind of shuffle between the different movies and make sure that
              finally we're mimicking that comic book structure where all of these movies are connected... There's just a board that tracks 'Here's where
              everything that happens in this movie overlaps with that movie'... I'm pushing them to do as many animatics as possible to animate the
              movie, to draw boards so that we're all working off the same visual ideas. But the exigencies of production take first priority". Initially,
              Penn attempted to reduce Thor's role in the script due to doubts about the character's ability to succeed on film. However, he changed his
              mind once Hemsworth was cast as Thor. Although the film always intended to use Loki as its villain, Penn noted that early discussion had
              considered using <Link>Red Skull</Link>.
            </p>
            <p>
              In January 2010, Marvel Studios chief Kevin Feige was asked if it would be challenging to belnd the fantasy of Thor with the high-tech
              science fiction in Iron Man and The Avengers. "No," he said, "because we're doing the Jack Kirby/Stan Lee/Walt Simonson/J. Michael
              Straczynski Thor. We're not doing the blow-the-dust-off-of-the-old-Norse-book-in-your-library Thor. And in the Thor of the Marvel
              Universe, there's a race called the Asgardians. And we're linked through the Tree of Life that we're unaware of. It's real science, but we
              don't know about it yet. The 'Thor' movie is about teaching people that". In March, it was reported that Penn had completed the first
              draft of the script, and that Marvel editor-in-chief Joe Quesada and Avengers comic book writer <Link>Brian Michael Bendis</Link> had
              received copies. Also in March, Chris Evans accepted an offer to play Captain America in three films including The Avengers.
            </p>

            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              By April 2010, Joss Whedon was nearing the completion of a deal to direct the film and to revise Penn's script, and was officially
              announced in July 2010. Regarding the hiring, Arad stated: "My personal opinion is that Joss will do a fantastic job. He loves these
              characters and is a fantastic writer [...] It's part of his life so you know he is going to protect it [...] I expect someone like him is
              going to make the script even better". Feige added, "I've known Joss for many years. We were looking for the right thing and he came in
              and met on it [...] we want[ed] to find a director that's on the verge of doing something great, as we think Joss is ." Whedon stated at
              the 2010 San Diego Comic-Con that what drew him to the film is that he loves how "these people shouldn't be in the same room let alone on
              the same team, and that is the definition of family".
            </p>
            <div className="article-quote">
              <p>
                "People forget that we started filming Avengers before either Thor or Captain America were released. What if people hated Thor? What if
                people thought Loki was ridiculous? What if people didn't buy this super soldier frozen in ice? We were in the first quarter of production
                on a giant movie at that time, and we weren't going to stop. It was sort of all in at that point."
              </p>
              <p>
                - Kevin Feige, President of Production for Marvel Studios, on the challenges of producing the first Avengers film.
              </p>
            </div>
            <p>
              When Ehedon received Penn's draft, he told Feige he felt the studio did not "have anything" and they should "pretend this draft never
              happened". Part of Whedon's issue was the lack of character connections in Penn's draft, which necessitated Whedon to begin "at square one".
              Whedon went on to write a five-page treatment of his plan for the film and created the tagline "Avengers: Some Assembly Required", riffing
              on the "Avengers Assemble" slogan from the comic books. Marvel quickly began working to sign Whedon to write and direct, only stipulatiing
              that he include the Avengers against Loki, a battle among the heroes in the middle, a battle against the villain at the end, and that he
              get the film done for its May 2012 release. The script went through "a lot of insane iterations of what might be", according to Whedon.
              There was a point when it was not certain Johansson would star in the film, so he "wrote a huge bunch of pages starring
              <Link to="/marvelcomics/wasp"> The Wasp</Link>", and wanted <Link>Zooey Deschanel</Link> to play the character. He also was "worried that
              one British actor [(Hiddleston)] was not enough to take on Earth's mightiest heroes, and that we'd feel like we were rooting for the
              overdog. So I wrote a huge draft with <Link>Ezekiel Stane</Link>, <Link>Obadiah Stane</Link>'s son, in it." Once all of the actors were
              "locked in place the movie stayed on mission." Whedon noted that the characters used do not have the same issue, unlike the
              <Link> X-Men</Link>. He felt "these guys just don't belong together" before realizing their interactions could be like The Dirty Dozen
              (1967). Whedon also referenced Dr. Strangelove (1964), The Abyss (1989), His Girl Friday (1940), and <Link>Black Hawk Down</Link> (2001).
              Whedon would ultimately share final screenplay credit with Penn, though Whedon noted he "fought" for solo credit and was "very upset about
              it." Penn felt the two "could have collaborated more, but that was not his choice. He wanted to do it his way, and I respect that."
            </p>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Joss_Whedon_looking_right.jpg" 
                alt="Joss Whedon" 
              />
              <p>
                Joss Whedon at the 2010 San Diego Comic-Con.
              </p>
            </div>
            <p>
              The casting process continued throughout much of 2010, with the addition of Jeremy Renner, Mark Ruffalo, and Clark Gregg. Ruffalo replaced
              Edward Norton, whom Marvel declined to bring back. "We have made the decision to not bring Ed Norton back to portray the title role of
              Bruce Banner in The Avengers," stated Feige. "Our decision is definitely not one based on monetary factors, but instead rooted in the need
              for an actor who embodies the creativity and collaborative spirit of our other talented cast members. The Avengers demands players who
              thrive working as part of an ensemble, as evidenced by Robert, Chris H, Chris E, Samuel, Scarlett, and all of our talented casts. We are
              looking to announce a name actor who fulfills these requirements, and is passionate about the iconic role in the coming weeks." In
              response, Norton's agent Brian Swardstrom decried Feige's statement, calling it "purposefully misleading" and an "inappropriate attempt to
              paint our client in a negative light". In October 2014, Norton claimed it was his own decision never to play Hulk again because he
              "wanted more diversity" with his career and did not want to be associated with only one character.
            </p>
            <p>
              In August 2010, it was reported that Paramount Pictures and Marvel Studios were planning to start shooting in February. In October 2010,
              Grumman Studios in Bethpage, New York and the Steiner Studios in Brooklyn, New York City, were announced as filming locations, with set
              construction slated to begin in November, but as Whedon later explained, "Originally we were supposed to be in Los Angeles, then for a
              short period we were supposed to be in New York, and then somehow we ended up in Alburquerque." Also that October, Walt Disney Studios
              agreed to pay Paramount at least $115 million for the worldwide distribution rights to <Link to="/mcu/iron_man_3">Iron Man 3</Link> (2013)
              and The Avengers. The deal also allowed Paramount to continue to collect the 8 percent box office fee it would have earned for distributing
              the film and a marquee credit, placement of the company's production logo on marketing materials and the film's opening titles. As a result,
              the onscreen production credit reads "Marvel Studios presents in association with Paramount Pictures", though the film is solely owned,
              distributed, financed, and marketed by Disney. Paramount's Epix retained pay TV rights.
            </p>
            <p>
              In December 2010, Governor of New Mexico Bill Richardson and Marvel Studios co-president Louis D'Esposito announced that The Avengers would
              primarily film in Albuquerque, New Mexico, with principal photography scheduled for April through September 2011. Parts of the film were
              also slated to be shot in Michigan, but plans to film in Detroit were scrapped after Governor Rick Snyder proposed a budget that would
              eliminate a film tax incentive. Three months later, in March, Governor of Ohio John Kasich announced during Mayor Frank G. Jackson's
              State of the City address that The Avengers would also film in Cleveland.
            </p>
            <p>
              Concept illustrator and designer of Iron Man's Mark VII armor, Phil Saunders, stated that "Joss Whedo was looking for something that had
              the 'cool' factor of the suitcase suit [from Iron Man 2], while still being a fully armored, heavy-duty suit that could take on an army in
              the final battle." To achieve this, Saunders combined ideas proposed in Iron Man 2 with some concepts abandoned in the first Iron Man film,
              creating a modular suit featuring large ammo packets on the arms and a backpack. Additionally, the Science & Entertainment Exchange
              provided science consultation for the film.
            </p>
            <p>
              Casting reached its final stages the following year. In February 2011, Cobie Smulders was cast in the role of Maria Hill, after
              participating in screen tests conducted by Marvel for the role of a key S.H.I.E.L.D. member, whom Samuel L. Jackson described as Nick Fury's
              sidekick. Morena Baccarin, Jessica Lucas, and Mary Elizabeth Winstead were also considered for the role. Over the successive months, the
              film's cast expanded to include Stellan Skarsgård, Paul Bettany, and Gwyneth Paltrow. Paltrow was cast at Downey's insistence; prior to
              this, Whedon had not intended the film to include supporting characters from the heroes individual films, commenting, "You need to
              separate the characters from their support systems in order to create the isolation you need for a team."
            </p>

            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <p>
              Principal photography began on April 25, 2011, at Albuquerque Studios in Albuquerque, New Mexico, with the working title Group Hug. In
              June 2011, stuntman Jeremy Fitzgerald sustained a head injury while attempting a stunt involving a 30-foot fall from a building after
              being struck by an arrow. Despite the injury, Fitgerald recovered and resumed work on set, as confirmed by a Marvel spokesperson to TMZ.
              Second unit filming occurred in the Butler area, about an hour outside Pittsburgh, Pennsylvania, the following month. Additionally, a
              chase sequence was shot in Worthington, Pennsylvania, at Creekside Mushroom Farms, which provided 150 miles of abandoned limestone
              tunnels 300 feet below the ground for filming.
            </p>
            <p>
              Production shiften to Cleveland, Ohio in August 2011, where filming spanned four weeks. The city's East 9th Street was selected as a
              stand-in for New York's 42nd Street, serving as the backdrop for climactic battle scenes. Army Reserve soldiers from the 391st Military
              Police Battalion, based in Columbus, Ohio, participated in the backgroun action during the battle scenes in Cleveland. Staff Sergeant
              Michael T. Landis noted that the involvement of real soldiers enhanced the realism of the scenes and portrayed the military positively,
              citing their ability to provide on-the-spot corrections in tactics and uniforms. The NASA Plum Brook Station near Sandusky, Ohio,
              specifically its Space Power Facility, doubled as a S.H.I.E.L.D. research facility. Filming also occurred at the Chevrolet powertrain
              plant in Parma, Ohio, where a series of explosions were captured for the battle sequence originating in Cleveland. Additional scenes were
              shot at Public Square and the Detroit-Superior Bridge, with Public Square's southwest quadrant transformed into Stuttgart, Germany for
              filming. Principal photography concluded in New York City, where filming took place over a span of two days. Filming locations included
              Park Avenue and Central Park. To capture scenes set in Manhattan, visual effects supervisor Jake Morrison spent over three days shooting
              aerial footage to use as background plates. Morrison emphasized the importance of incorporating real imagery into the effects work to
              enhance realism, stating, "There is no substitute for starting with a real image and adding what you need."
            </p>
            <p>
              Cinematographer Seamus McGarvey explained that he hose a 1.85:1 aspect ratio to accommodate the varying heights of the main characters. He
              said, "Shooting 1.85:1 is kind of unusual for an epic film like this, but we needed the height in the screen to be able to frame in all the
              characters like Hulk, Captain America, and Black Widow, who is much smaller. We had to give them all precedence and width within the frame.
              Also, Joss [Whedon] knew the final battle sequence was going to be this extravaganza in Manhattan, so the height and vertical scale of the
              buildings was going to be really important." This film marked McGarvey's first experience using a digital camera, specifically the Arri
              Alexa. Additionally, the Canon EOS 5D Mark II and Canon EOS 7D digital SLR cameras were employed for certain shots, while high-speed shots
              were captured on 35 mm film using the Arriflex 435. McGarvey emphasized a visual approach focused on immersion and naturalism, stating,
              "Joss and I were keen on having a very visceral and naturalistic quality to the image. We wanted this to feel immersive and did not want
              a 'comic book look' that might distance an audience with the engagement of the film. We moved the camera a lot on Steadicam, cranes and
              on dollies to create kinetic images: and we chose angles that were dramatic, like low angles for heroic imagery."
            </p>

            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <p>
              In December 2011, Disney announced the film would undergo a conversion to 3D. According to Whedon, "I'm not a big fan of extremely long
              lens, talky movies, I like to see the space I'm in and relate to it, so 3D kinda fits my aesthetic anyway. And the technology has
              advanced so far in the past couple years." Whedon also noted, "there definitely are movies that shouldn't be in 3D", but stated, "The
              Avengers isn't obnoxiously 3D. There's no 'Oh look, we're going to spend 20 minutes going through this tunnel because it's in 3D!'' And
              no one is pointing at the screen the entire time. But it's an action movie. Things tend to hurtle toward the screen anyway." In January
              2012, it was reported that the film would undergo digital remastering for IMAX 3D and would open in IMAX theaters on May 4, 2012, the same
              day as its regular theater release. This IMAX release followed Marvel's earlier IMAX releases of Iron Man 2 and Thor. When The Avengers
              was initially submitted to the Motion Pictures Association of America's rating board, the film received an R rating due to Phil Coulson's
              death scene. The scene was subsequently edited to secure a PG-13 rating.
            </p>
            <p>
              In a May 2012 interview, Whedon revealed that it was his decision to include Thanos in a post-credits scene, even though the character is
              not identified in the film. "He for me is the most powerful and fascinating Marvel villain. He's the great grand daddy of the badasses and
              he's in love with <Link>Death</Link> and I just think that's so cute. For me, the greatest Avengers [comic book] was Avengers Annual #7
              (1977) that Jim Starlin did followed by Marvel Two-in-One Annual #2 (1977) that contained the death of <Link>Adam Warlock</Link>. Those
              were some of the most important text and I think underrated milestones in Marvel history and Thanos is all over that, so somebody had to
              be in control and had to be behind Loki's work and I was like 'it's got to be Thanos.' And they said 'Okay' and I'm like 'Oh my God!'"
              Additionally, an extra scene featuring the Avengers enjoying shawarma was filmed in April 12, 2012, a day after the world premiere.
              Evans wore a prosthetic jaw during the scene to conceal the beard he had grown. Following the film's release, shawarma sales in Los
              Angeles, St. Louis, and Boston reportedly saw a significant surge. Whedon explained that the inspiration for the shawarma scene came from
              the aftermath of filming a scene in the Angel episode "A Hole in the World" where Fred dies in Wesley's arms. After filming, Whedon, along
              with actors Amy Acker and Denisof, who played Fred and Wesley respectively, "went out for drinks and ended up just sitting around quitely,
              exhausted from the day's events", an experience that Whedon recreated in the film's scene.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/7/7f/The_Avengers_Hulk_motion_capture.jpg?20120607144757" 
                alt="The Avengers Hulk motion capture" 
              />
              <p>
                Mark Ruffalo as the Hulk (bottom) wearing a motion capture suit and prosthetics on his upper half to emulate the Hulk's size.
              </p>
            </div>
            <p>
              The film features over 2,200 visual effects shots completed by 14 companies: <Link>Industrial Light & Magic</Link> (ILM), Weta Digital,
              Scanline VFX, Hydraulix, Fuel VFX, Evil Eye Pictures, Luma Pictures, Cantina Creative, Trixter, Modus FX, Whiskytree, Digital Domain, The
              Third Floor, and Method Design. ILM was the lead vendor and shared responsibility for creating many of the film's key effects, including
              the Helicarrier, the New York cityscape, digital body doubles, Iron Man, and the Hulk. To bring the Hulk to life on screen, Ruffalo
              performed in a motion capture suit on set alongside the other actors, while four motion-capture HD cameras (two capturing his full body
              and two focused on his face) recorded his facial and body movements. Jeff White, ILM's visual effects supervisor, aimed for a more
              realistic dpeiction of the Hulk compared to the one seen in Ang Lee's <Link>2003 film</Link>, stating, "We really wanted to utilize
              everything we've developed the last 10 years and make it a pretty spectacular Hulk. One of the great design decisions was to incorporate
              Mark Ruffal into the look of him. So, much of Hulk is based on Ruffalo and his performance, not only in motion capture and on set, but
              down to his eyes, his teeth, and his tongue."
            </p>
            <p>
              ILM digitally recreated the majority of the New York citysacae featured in the film, covering approxiamtely ten city blocks by four city
              blocks. To accomplish this, ILM dispatched a team of four photographers for an eight-week shoot to capture images of the area. Tyson
              Bidner, the New York location manager for the film, played a crucial role in securing the rights to nearly every building's likeness
              needed by ILM. Initially, there were plans to include <Link>OsCorp</Link> Tower from
              <Link to="/spiderman_films/the_amazing_spider_man">The Amazing Spider-Man</Link> (2012) in the film, as Disney and Sony Pictures had agreed
              to it. However, the idea was abandoned because much of the skyline had already been finalized. Weta Digital assumed responsibility for
              animating Iron Man during the forest duel, taking over from ILM. Guy Williams, Weta's visual effects supervisor, explained, "We shared
              assets back and forth with ILM, but our pipelines are unique and it's hard for other assets to plug into it. But in this case, we got their
              models and we had to redo the texture spaces because the way we texture maps is different." Williams highlighted that the most challenging
              asect was reproducing Iron Man's reflective metal surfaces.
            </p>
            <p>
              Scanlines VFX handled the reveal shots of the Helicarrier, from Black Widow and Captain America's arrival on the carrier deck to its
              lift-off. Evil Eye Pictures integrated digital backgrounds into greenscreen footage for scenes set inside the Helicarrier. Colin Strauss
              from Hydraulix mentioned their contribution, stating, "We did the opening ten minutes of the movie, other than the opening set-up in space",
              covering Loki's arrival on Earth and his subsequent escape from the S.H.I.E.L.D. base. Luma Pictures focused on the Helicarrier's bridge
              shots and integrated the graphic monitor displays developed by Cantina Creative. Fuel VFX handled shots in and around Tony Stark's penthouse
              at Stark Tower. Digital Domain crafted the asteroid environment where Loki encounters The Other. Mehod Design, based in Los Angeles, was
              responsible for the film's closing credits. Steve Viola, creative director at Method Design, described it as "a two-minute, self-contained
              main on end sequence created entirely in CG". He explained that they designed, modeled, textured, and lit all environments and many
              foreground objects for each shot. Assets from Marvel were modeled extensively to create a post-battle macro sequence. Method Design also
              crafted a custom typeface for the main title of The Avengers as well as 30 in-scene credits.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            <p>
              In November 2011, Marvel announced that <Link>Alan Silvestri</Link>, who scored Captain America: The First Avenger, would compose the score
              for The Avengers. Silvestri commented on the challenge of the project, stating, "I've worked on films where there have been a number of
              stars and certainly worked on films where there have been characters of equal weight in terms of their level of importance and profile in
              the film, but this one is somewhat extreme in that regard because each of these characters has their own world and it's a very different
              situation. It's very challenging to look for a way to give everyone the weight and consideration they need, but at the same time the film
              is really about the coming together of these characters, which implies that there is this entity called the Avengers which really has to be
              representative of all of them together." Silvestri collaborated with the London Symphony Orchestra at <Link>Abbey Road Studios</Link> in
              London, England to develop the score. Whedon praised Silvestri's approach, stating, "The score is very old-fashioned, which is why
              [Silvestri] was letter-perfect for this movie because he can give you the heightened emotion, the [<Link>Hans Zimmer</Link>] school of
              'I'm just feeling a lot of right now!' but he can also be extraordinarily cue and character specific, which I love."
            </p>
            <p>
              In March 2012, the Indian rock band Agnee released a music video for their single "Hello Andheron", serving as the theme song for the
              Indian release of the film. Hollywood Records released the soundtrack concept album inspired by the film, titled Avengers Assemble, on
              May 1, 2012, coinciding the release of the score.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Trailers</h3>
            <p>
              The film was promoted at the 2010 San Diego Comic-Con, featuring a teaser trailer narrated by Samuel L. Jackson followed by an introduction
              of the cast. In June 2011, Marvel Studios announced that it would not hold a panel at the 2011 San Diego Comic-Con, as stuido executives
              felt unprepared to meet their own past achievements and fan expectations with filming still in production. Subsequently, in July 2011, a
              teaser trailer intended as the post-credits scene of Captain America: The First Avenger briefly leaked online. Entertainment Weekly
              speculated that it originated from a preview screening, describing the footage as "shaky, fuzzy, flickering, and obviously filmed on a
              cell phone".
            </p>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/20111015_NYCC-6.jpg/500px-20111015_NYCC-6.jpg" 
                alt="2011 New York Comic Con" 
              />
              <p>
                Chris Evans, Tom Hiddleston, Cobie Smulders, and Clark Gregg promoting the film at the 2011 New York Comic Con
              </p>
            </div>
            <p>
              In August 2011, Walt Disney Pictures, <Link to="/pixar">Pixar Animation Studios</Link>, and Marvel Studios presented a look at Walt Disney
              Studios' upcoming film slate, which included The Avengers, at the D23 Expo in Anaheim, California. The presentation featured footage from
              the film and appearances by the cast members. Later in August, Disney dismissed Marvel's executive vice president of worldwide marketing,
              and manager of worldwide marketing to bring their function in-house.
            </p>
            <p>
              In October 2011, Marvel Studios held a presentation at the New York Comic Con featuring new footage and a panel discussion including
              producer Kevin Feige and several cast members. The first full-length trailer was also released in October. Comic Book Resources nored,
              "The two-minute teaser handily establishes the movie's premise" and is "heavy on the assembling, but fans are also treated to plenty of
              action, as well as glimpses [sic] of Iron Man's new armor, best of all, the new take on the Incredible Hulk. Naturally, Robert Downey
              Jr.'s Tony Star gets the best lines". However, The Hollywood Reporter called it, "Awesome. Or it would be if we hadn't seen all of this
              before and expected every single thing that we saw in the trailer". The trailer, which debuted exclusively on iTunes Movie Trailers, was
              downloaded over 10 million times in the 24 hours, breaking the website's record for the most-viewed trailer. This record was surpassed by
              the trailer for <Link>The Dark Knight Rises</Link> (2012), which was downloaded more than 12.5 million times in its first 24 hours. A
              second full-length trailer was released on iTunes in February 2012, reaching a record 13.7 million downloads in 24 hours. The
              theatrical trailers of The Avengers appeared with many films, including Mission Impossible - Ghost Protocol (2011), 21 Jump Street
              (2012), and The Hunger Games (2012).
            </p>
            <p>
              In January 2012, Marvel Studios hosted a global Twitter chat. The 30-minute live tweeting event featured writer/director Joss Whedon
              and cast members Samuel L. Jackson, Tom Hiddleston, and Clark Gregg, along with a 10-second tease of the 30-second commercial that
              would air during Super Bowl XLVI in February. According to the Los Angeles Times, Disney paid an estimated $4 million for the
              30-second spot. On May 1, 2012, executives from Marvel Studios, along with actors Tom Hiddleston and Clark Gregg, rang the opening
              bell of the New York Stock Exchange in honor of the film's theatrical release.
            </p>

            <h3 className="article-heading-3" id="5.2">Tie-in</h3>
            <p>
              In December 2011, Marvel announcd the release of an eight-issue comic book prelude to the film, penned by Christopher Yost and Eric Pearson with art
              by Luke Ross and Daniel HDR, for release in March 2012. In February 2012, Marvel revealed plans for a second limited series comic book tie-in titled
              Black Widow Striks, written by Fred Van Lente, who wrote Captain America: First Vengeance, the comic book prequel to Captain America: The First
              Avenger. Set between Iron Man 2 and The Avengers, it follows Black Widow as she ties up loose ends ffrom the former film. Additionally, the title
              Avengers Assemble debuted in March 2012, written by Brian Michael Bendis with art by Mark Bagley, featuring the same Avengers lineup as the film in
              a battle against a new incarnation of the supervillain team Zodiac.
            </p>

            <h3 className="article-heading-3" id="5.3">Promotional partners</h3>
            <p>
              Paul gitter, president of consumer production at Marvel Entertainment, noted that the anticipation leading up to the film bolstered retail
              partnerships: "Retailers have been less tolerant with [intellectual property] films, so we decided that if we started on this coordinated strategy
              several years ago, retailers would give us shelf space throughout the years and we would have a more sustainable position in the marketplace."
            </p>
            <p>
              In September 2011, photos emerged online showing Robert Downey Jr. driving a new model Acura. An Acura spokesperson later confirmed the company's
              involvement with the film, stating, "As you may know, Acura has been in the Marvel Comics Universe films as the official car of their fictional law
              enforcement agency called S.H.I.E.L.D. That relationship continues for The Avengers. The open-top sports car that was photographed yesterday is a
              one-off, fictional car that was made just for the movie and will not be produced. That said, as you may also know, our CEO has said publicly that we are
              studying the development of a new sportscar, but we can't say any more about it at this time." In December 2011, Acura announced that a new NSX,
              styled along the lines of the concept built for The Avengers, would be unveiled at the 2012 North American International Auto Show. Additionally, a
              series of 10 S.H.I.E.L.D. SUVs, based on the Acura MDX with modifications by Cinema Vehicle Services, were also created for the film.
            </p>
            <p>
              In February 2012, Marvel announced a partnership with fragrance company JADS to promote The Avengers with character-based fragrances. The announcement
              preceded the Toy Industry Association's annual February exhibition, where representatives showcased the products at a sampling booth. Other promotional
              partners included bracelet-maker Colantotte, Dr Pepper, Farmers Insurance, Harley-Davidson, Hershey, Land O'Frost lunchmeats, Oracle, Red Baron pizza,
              Symantec, Visa, and Wyndham Hotels & Resorts. Marvel and its parent company Disney secured an estimated $100 million in worldwide marketing support for
              the film. Notably absent from the promotional lineup were Baskin-Robbins, Burger King, and Dunkin' Donuts, which had partnered with Marvel in the past
              when their films were distributed by Paramount; Disney generally avoids promotions through fast food outlets.
            </p>

            <h3 className="article-heading-3" id="5.4">Video game</h3>
            <p>
              A video game based on the film was initially planned forr simultaneous release. It was intended to be a combination of a first-person shooter and a
              brawler for the <Link>Xbox 360</Link>, <Link>PlayStation 3</Link>, Wii U, and Microsoft Windows platforms, with <Link>THQ</Link> as the publisher.
              The console versions were to be developed by THQ Studio Australia, while Blue Tongue Entertainment was tasked with creating the PC version. However,
              after THQ shut down both studios, the game was ultimately canceled. Consequently, the intellectual property rights for an Avengers video game revered
              to Marvel, which stated that it was exploring potential publishing and licensing opportunities. A mobile game published by <Link>Gameloft</Link> was
              released in May 2012.
            </p>
            <p>
              In May 2012, a collaboration between <Link>Ubisoft</Link> and Marvel Entertainment was revealed, unveiling their joint project: a motion controlled game
              titled Marvel Avengers: Battle for Earth, designed for the Wii U and Xbox 360 Kinect. Inspired by the "<Link>Secret Invasion</Link>" storyline, the
              game showcases 20 different character. Additionally, Marvel announced the development of a four-chapter mobile game titled Avengers Initiative, with
              each chapter dedicated to exploring the adventures of Hulk, Captain America, Thor, and Iron Man.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fans_at_Avengers_premiere.jpg/500px-Fans_at_Avengers_premiere.jpg" alt="Fans at Avengers premiere" />
              <p>Fans gather outside Hollywood El Capitan Theatre for the world premiere of the film.</p>
            </div>
            <p>
              In February 2012, Disney announced a title change for the film in the United Kingdom to avoid confusion with the British TV series of the same name and
              its 1998 film adaptation. This caused uncertainty over the film's actual title. Empire magazine reported that the film would be titled Marvel Avengers
              Assemble, while The Hollywood Reporter said that it would be called simply Avengers Assemble. Marvel's UK website referred to it as Marvel'sAvengers
              Assemble, though David Cox of The Guardian, in arguing that it was one of the worst film titles ever, considered this a production notes error. The
              British Board of Film Classification and the Irish Film Classification Office listed it as Marvel Avengers Assemble. Frank Lovece in
              FilmFestivalTraveler.com noted the discrepancy, observing that the film is formally titled "Marvel's The Avengers" on screen, despite the absence of an
              apostrophe on posters. Feige explained the UK title's additional word, emphasizing the thorough decision-making process involved.
            </p>
            <p>
              The film's world premiere took place on April 11, 2012, at Hollywood's El Capitan Theatre. It closed the 11th Annual Tribeca Film Festival with a
              screening on April 28. For the 2012 U.S. Labor Day weekend, the film received an expanded one-week theatrical push, increasing the number of theaters
              from 123 to 1,700. The Avengers was the last film released in Phase One of the MCU.
            </p>

            <h3 className="article-heading-3" id="6.2">Home media</h3>
            <p>
              The film was released by Walt Disney Studios Home Entertainment on Blu-ray Disc, Blu-ray 3D, DVD, and digital download on September 25 in the United
              States and as early as August 29 in various international markets. Feige mentioned that the Blu-ray version features a new Marvel One-Shot titled
              Item 47 (2012), along with "a number of deleted scenes and a few storylines that fell by the wayside during the editing process". These include
              "a few more scenes with the S.H.I.E.L.D. agent Maria Hill, played by Cobie Smulders", and "some slightly different versions of Maria Hill and Nick
              Fury's interaction with the World Security Council".
            </p>
            <p>
              The film was also collected in a 10-disc box set titled "Marvel Cinematic Universe: Phase One – Avengers Assembled", which includes all of the Phase
              One films in the Marvel Cinematic Universe. This box set was released on April 2, 2013. Walt Disney Studios Home Entertainment subsequently released
              the film on Ultra HD Blu-ray on August 14, 2018.
            </p>
            <p>
              Some fans have criticized the UK DVD and Blu-ray release for omitting Joss Whedon's audio commentary and altering the scene involving Phil Coulson's
              death from the film's theatrical version. Disney's UK division stated that the "less graphic depiction of Agent Coulson's confrontation with Loki"
              occurred because "[e]ach country has its own compliance issues relative to depictions of violence. Unfortunately, another region's elements were
              inadvertently used to create the UK in-home release".
            </p>
            <p>
              Upon its first week of release on home media in the U.S., the film topped the Nielsen VideoScan First Alert chart, which tracks overall disc sales, as
              well as the dedicated Blu-ray Disc sales chart. It garnered 72% of unit sales from Blu-ray, setting a record for a new release in which both the DVD
              and Blu-ray formats were released simultaneously.
            </p>
            <p>
              In July 2024, a Lakota language dub of the film became available on Disney+. Downey, Evans, Hemsworth, Ruffalo, Johansson, and Renner reprised their
              roles to re-record their lines, with the project spear-headed by Ruffalo. Ruffalo had a previous relationship with the Lakota people and was looking to
              help further the Lakota's efforts to help revitalize their language.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <p>
              The Avengers grossed $623.4 million in the United States and Canada, and $895.5 million in other territories, for a worldwide total of $1.519 billion,
              making it the third-highest-grossing film of all time, the highest-grossing film of 2012, the highest-grossing comic book adaptation, the highest-grossing
              superhero film, and the highest-grossing film ever released by Walt Disney Studios, at the time of its release. The film's worldwide opening of $392.5
              million ranked as the fourth-largest. The Avengers also became the fifth film distributed by Disney and the twelfth film overall to earn more than $1
              billion. It reached this milestone in 19 days, matching the record previously set by Avatar (2009) and Harry Potter and the Deathly Hallows – Part 2
              (2011). Its grosses exceeded its estimated $220 million production cost 12 days after its release. It was the first Marvel production to generate $1
              billion in ticket sales.
            </p>

            <h4 className="article-heading-4" id="7.1.1">United States and Canada</h4>
            <p>
              The film became the third-highest-grossing film of all time, the highest-grossing film of 2012, the highest-grossing film distributed by Disney, the
              highest-grossing superhero film, and the highest-grossing film based on comics. It opened Friday, May 4, 2012, on around 11,800 screens across 4,349
              theaters, earning $80.8 million, marking the second-biggest opening and second-biggest single-day gross. The film's Friday gross included an $18.7
              million midnight run, a record for a superhero film. Without midnight grosses, the film earned the largest opening-day gross ($62.1 million). It also
              set records for Saturday and Sunday grosses ($69.6 million and $57.1 million, respectively). In total, it earned $207,438,708 for its debut weekend,
              setting an opening-weekend record, including an IMAX opening-weekend record of $15.3 million and a record for opening-weekend grosses originating
              from 3D showings ($108 million). The opening-weekend audience was evenly split between those under and over the age of 25, with 60% male, 55% couples,
              24% families, and 21% teenagers. Earning $103.1 million on its second weekend, the film set a record for the largest second-weekend gross. Other records
              set by the film include the biggest weekend per-theater average for a wide release ($47,698 per theater), the fastest film to reach $100 million and
              each additional $50 million through $550 million, and the largest cumulative gross through every day of release until, and including, its forty-third
              day (with the exception of its first day). It remained in first place at the box office for three consecutive weekends. The film set a record for the
              highest monthly share, with its $532.5 million total (through May 31, 2012) accounting for 52% of the total earnings at the box office during May.
            </p>

            <h4 className="article-heading-4" id="7.1.2">Other territories</h4>
            <p>
              The film became the third-highest-grossing film of all time, the highest-grossing Disney-distributed film, the highest-grossing film of 2012, and the
              highest-grossing superhero film. It opened on Wednesday, April 25, 2012, in 10 countries, earning $17.1 million. It expanded to 29 more countries on
              April 26 and 27, grossing $73.1 million in three days. By Sunday, April 29, it had amassed an opening-weekend total of $185.1 million from 39
              countries. It maintained its first-place position at the box office for four consecutive weekends. The film set opening-day records in New Zealand,
              Malaysia, and Iceland, as well as single-day records in the Philippines. It also achieved both single- and opening-day records in Singapore and Thailand.
              Additionally, it earned the second-highest-grossing opening day in Australia ($6.2 million), Mexico, the Philippines, and Vietnam. Furthermore, it
              established opening-weekend records in numerous territories, including Mexico, Brazil, Ecuador, Bolivia, Taiwan, the Philippines, Hong Kong, the United
              Arab Emirates, Argentina, Peru, and Central America. It also secured the second-largest five-day opening in Australia ($20.2 million).
            </p>
            <p>
              In the United Kingdom, the film earned £2.5 million ($4.1 million) on its opening day and £15.8 million ($25.7 million) over the weekend, setting a new
              opening-weekend record for a superhero film. It emerged as the market's highest-grossing superhero film. In Latin America, it set records as the
              highest-grossing film ($207 million) and the first film to surpass $200 million. It also claimed the top spot as the highest-grossing film in the
              Philippines, Singapore, and Indonesia. As of February 2021, the film's leading international markets were China ($83 million), United Kingdom
              ($80.5 million), Brazil ($63.9 million), Mexico ($61.7 million), and Australia ($54.5 million).
            </p>

            <h3 className="article-heading-3" id="7.2">Critical response</h3>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers.jpg/330px-Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers.jpg"
                alt="Mark Rufall Toronto premiere"
              />
              <p>Mark Ruffalo at the film's Toronto premiere. His performance garnered critical acclaim.</p>
            </div>
            <p>
              The review aggregator Rotten Tomatoes reported an approval rating of 91%, with an average score of 8.1/10, based on 368 reviews. The website's critical
              consensus reads, "Thanks to a script that emphasizes its heroes' humanity and a wealth of superpowered set pieces, The Avengers lives up to its hype and
              raises the bar for Marvel at the movies." Metacritic, which uses a weighted average, assigned the film a score of 69 out of 100 based on 43 reviews, indicating
              "generally favorable" reviews. Audiences polled by CinemaScore gave the film a rare "A+" grade on an "A+ to F" sacale.
            </p>
            <p>
              Todd McCarthy of The Hoolywood Reporter gave a positive review of the film, remarking, "It's clamorous, the save-the-world story is onve everyone's seen time
              and again, and the characters have been around for more than half a century in 500 comic book issues. But Whedon and his cohorts have managed to stir all the
              personalities and ingredients together so that the resulting dish, however familiar, is irresistibly tasty again." To Rolling Stone journalist Peter Travers,
              the film epitomized an excetional blockbuster. "It's also the blockbuster," Travers said, "I saw in my head when I imagined a movie that brought together the
              idols of the Marvel world in one shiny stupendously exciting package. It's Transformers with a brain, a heart, and a working sense of humor." Justin Chang of
              Variety wrote, "Like a superior, state-of-the-art model built from reconstituted parts, Joss Whedon's buoyant, witty, and robustly entertaining superhero
              smash-up is escapism of a sophisticated order, boasting a tonal assurance and rich reserves of humor that offset the potentially lumbering and unavoidably
              formulaic aspects of the 143-minute team-origin story." Kenneth Turan of the Los Angeles Times complimented the film's frenetic pace, while Roger Ebert of the
              Chicago Sun-Times commented that it "provides is fans with exactly what they desire. Whether it is exactly what they deserve is arguable." Conversely, A. O.
              Scott of The New York Times believed that "while The Avengers is hardly worth raging about, its failures are significant and dispiriting. The light, amusing
              bits cannot overcome the gridning, hectic emptiness, the bloated cynicism that is less a shortcoming of this particular film than a feature of the genre."
            </p>
            <p>
              The performances of several cast members were a frequent topic in the critiques. In particular, Mark Ruffalo's portrayal of Dr. Bruce Banner/the Hulk was
              well received by commentators. Joe Neumaier opined that his performance was superior to the rest of the cast; stating, "Ruffalo is the revelation, turning
              Banner into a wry reservoir of calm ready to become a volcano." Similarly, The New Yorker's Anthony Lane proclaimed Ruffalo's acting to be one of the
              film's highlights—alongside Downey. The Village Voice's Karina Longworth concluded: "Ruffalo successfully refreshes the Hulk myth, playing Banner as an
              adorably bashful nerd-genius who, in contrast to the preening hunks on the team, knows better than to draw attention to himself." Travers asserted that
              the actor resonated a "scruffy warmth and humor" vibe, while Turan felt that he surpassed predecessors Edward Norton and Eric Bana in playing the
              character. Owen Gleiberman of Entertainment Weekly wrote that "the smartest thing the filmmakers did was to get Mark Ruffalo to play Bruce Banner as a
              man so sensitive that he's at war, every moment, with himself. (The film finally solves the Hulk problem: He's a lot more fun in small doses.)"
            </p>
            <p>
              Referring to Downey, Joe Morgenstein of The Wall Street Journal—despite complimenting Downey's performance—favored his work in Iron Man over his acting
              in The Avengers: "His Iron Man is certainly a team player, but Mr. Downey comes to the party with two insuperable superpowers: a character of established
              sophistication—the industrialist/inventor Tony Stark, a sharp-tongued man of the world—and his own quicksilver presence that finds its finest expression
              in self-irony." Neumaier praised Evans, stating that he accurately conveyed his character's internal conflicts.
            </p>
            <p>
              Commentators appreciated the character development and dialogue. Associated Press reviewer Christy Lemire wrote that the script "sparkles as brightly as
              the special effects; these people may be wearing ridiculous costumes but they're well fleshed-out underneath." Scott suggested that certain parts of the
              film exuded a charm reminiscent of the western film Rio Bravo (1959). Longworth felt that while Whedon's script delved into the backstory of the
              characters, the film did not explore it "in a substantive way".
            </p>

            <h3 className="article-heading-3" id="7.3">Accolades</h3>
            <p>
              At the 85th Academy Awards, The Avengers received a nomination for Best Visual Effects. The film's other nominations include two Annie Awards
              (winning one), a British Academy Film Award, and three Critics' Choice Movie Awards. In 2017, it was featured as one of the 100 greatest films of all
              time in Empire magazine's poll of The 100 Greatest Movies.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            <p>
              Avengers: Age of Ultron was written and directed by Whedon, and released on May 1, 2015. The film features much of the original cast, alongside new
              additions including <Link>Elizabeth Olsen</Link> as <Link to="/mcu/wanda_maximoff">Scarlet Witch</Link>, <Link>Aaron Taylor-Johnson</Link> as
              <Link to="/mcu/piertro_maximoff"> Quicksilver</Link>, Paul Bettany as <Link to="/mcu/vision">Vision</Link>, and <Link>James Spader</Link> as
              <Link> Ultron</Link>. Avengers: Infinity War and Avengers: Endgame were directed by <Link>Anthony and Joe Russo</Link>, with a script by
              Christopher Mrkus and Stephen McFeely. Infinity War was released on April 27, 2018, followed by Endgame on April 26, 2019. The ensemble cast for both
              films includes returning actors from previous MCU entries, as well as new characters from other films in the franchise.
            </p>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default TheAvengersFilm;