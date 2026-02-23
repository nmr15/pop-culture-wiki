import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const TheAvengersFilm = () =>
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
                {id: "7.1.2", title: "Records"},
                {id: "7.1.3", title: "Other territories"},
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
            <p>
              Before any necessary precautions can be made. Selvig's Tesseract Accelerator activates, opening a portal from which Loki appears.
              Announcing his intention to conquer Earth, Loki steals the Tesseract. He uses the <Link>Scepter</Link>, given to him by the Other, to
              enslave the minds of Selvig, Barton, and several S.H.I.E.L.D. agents, aiding him in his getaway. Despite the efforts of Fury and Hill to
              stop him, Loki escapes. In response, Fury reactivates the Avengers Initiative.
            </p>
            <p>
              Despite orders from the <Link>World Security Council</Link> to proceed with "Phase 2," Fury sends Natasha Romanoff to locate Bruce Banner,
              who has been living in Kolkata, India as a doctor. Agent Coulson is sent to recruit Tony Stark. Both of them are hired to help locate the
              Tesseract. Fury himself meets with Steve Rogers, informing him of Loki's theft of the Tesseract, requesting his help in recovering it and
              subduing the invader. All three men accept the offer, though Rogers is reluctant to do anything involving the Tesseract after his
              experiences with it in World War II. Banner is also hesitant to assist, fearing that his alter-ego, the Hulk, may cause mayhem.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://en.wikipedia.org/wiki/File:The_Avengers_Cast_2010_Comic-Con_cropped.jpg" 
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
            <h3 className="article-heading-3" id="5.1">Trailers</h3>
            <h3 className="article-heading-3" id="5.2">Tie-in</h3>
            <h3 className="article-heading-3" id="5.3">Promotional partners</h3>
            <h3 className="article-heading-3" id="5.4">Video game</h3>
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
          <Heading2 id={8} title={"Sequels"} />
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

export default TheAvengersFilm;