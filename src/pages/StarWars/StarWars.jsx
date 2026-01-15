import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const StarWars = () => 
{
  useEffect(() =>
  {
    document.title = "Star Wars (franchise) - Pop Culture Wiki";
  }, []);

  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Films"
            sub={[
              {id: "2.1", title: "The Skywalker Saga", sub2: [
                {id: "2.1.1", title: "Original trilogy"},
                {id: "2.1.2", title: "Prequel trilogy"},
                {id: "2.1.3", title: "Sequel trilogy"},
              ]},
              {id: "2.2", title: "Standalone films"},
              {id: "2.3", title: "Upcoming films", sub2: [
                {id: "2.3.1", title: "Other potential projects"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Television"
            sub={[
              {id: "3.1", title: "Animated series"},
              {id: "3.2", title: "Live-action series"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Fictional universe</a></li>
          <Collapse 
            id="5"
            item="Other media"
            sub={[
              {id: "5.1", title: "Print media", sub2: [
                {id: "5.1.1", title: "Novels"},
                {id: "5.1.2", title: "Comics"}
              ]},
              {id: "5.2", title: "Audio", sub2: [
                {id: "5.2.1", title: "Soundtracks and singles"},
                {id: "5.2.2", title: "Audio novels"},
                {id: "5.2.3", title: "Radio"},
              ]},
              {id: "5.3", title: "Video games", sub2: [
                {id: "5.3.1", title: "Early licensed games (1979-1993)"},
                {id: "5.3.2", title: "LucasArts and modern self-published games (1993-2014)"},
                {id: "5.3.3", title: "EA Star Wars (2014-present)"},
              ]},
              {id: "5.4", title: "Theme park attractions"},
              {id: "5.5", title: "Multimedia projects"},
              {id: "5.6", title: "Merchandising"},
            ]}
          />
          <Collapse 
            id="6"
            item="Themes"
            sub={[
              {id: "6.1", title: "Historical influences"}
            ]}
          />
          <Collapse 
            id="7"
            item="Cultural impact"
            sub={[
              {id: "7.1", title: "Indistry", sub2: [
                {id: "7.1.1", title: "Fan workds"}
              ]},
              {id: "7.2", title: "Academia"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Star Wars (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" alt="Star Wars logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>George Lucas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Owner</th>
              <td className="infobox-data">Lucasfilm</td>
            </tr>
            <tr>
              <th className="infobox-data">Films</th>
              <td className="infobox-data"><Link>List of Star Wars films</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Series</th>
              <td className="infobox-data"><Link>List of Star Wars series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Character</th>
              <td className="infobox-data"><Link>List of Star Wars character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Video games</th>
              <td className="infobox-data"><Link>List of Star Wars video games</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Star Wars</b> is an American epic space opera media franchise created by <a href="#">George Lucas</a>,
            which began with the <a href="#">eponymous 1977 film</a> and quickly became a worlwide pop
            culture phenomenon. The franchise has been expanded into <a href="#">various films</a> and <a href="#">other media</a>,
            including <a href="#">television series</a>, <a href="#">video games</a>, <a href="#">novels</a>, <a href="#">comic books</a>, <a href="#">theme park attractions</a>,
            and <a href="#">themed areas</a>, comprising an all-encompassing fictional universe.
            Star Wars is one of the highest-grossing media franchises of all time.
          </p>
          <p>
            The original 1977 film, retroactively subtitled <Link to="/starwars/a_new_hope">Episode IV: A New Hope</Link>, was followed by the sequels
            <Link to="/starwars/the_empire_strikes_back"> Episode V: The Empire Strikes Back</Link> (1980) and
            <Link to="/starwars/return_of_the_jedi"> Episode VI: Return of the Jedi</Link> (1983), forming the <Link>original Star Wars trilogy</Link>.
            Lucas later returned to the series to write and direct <Link>a prequel trilogy</Link>, consisting of
            <Link to="/starwars/the_phantom_menace"> Episode I: The Phantom Menace</Link> (1999), <Link to="/starwars/attack_of_the_clones">Episode
            II: Attack of the Clones</Link> (2002), and <Link to="/starwars/revenge_of_the_sith">Episode III: Revenge of the Sith</Link> (2005). In 2012,
            Lucas sold his production company to <Link>Disney</Link>, relinquishing his ownership of the franchise. This led to <Link>a sequel
            trilogy</Link>, consisting of <Link to="/starwars/the_force_awakens">Episode VII: The Force Awakens</Link> (2015),
            <Link to="/starwars/the_last_jedi">Episode VIII: The Last Jedi</Link> (2017), and <Link to="/starwars/the_rise_of_skywalker">Episode
            IX: The Rise of Skywalker</Link> (2019).
          </p>
          <p>
            All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with Oscars going to the first three
            releases. Together with the theatrical live action "anthology" films <Link to="/starwars/rogue_one">Rogue One</Link> (2016) and
            <Link to="/starwars/solo">Solo</Link> (2018), the combined box office revenue of the films equate to over US$10 billion, making Star Wars
            the third-highest-grossing film franchise in cinematic history.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>
            <p>
              The Star Wars franchise depicts the adventures of characters "a long time ago in a <Link>galaxy</Link> far, far away" across
              <Link> multiple fictional eras</Link>, in which humans and many species of <Link>aliens</Link> (often humanoid) co-exist with
              <Link> droids</Link>, which may be programmed for personal assistance or battle. Space travel between planets is common due to lightspeed
              hyperspace technology. The planets range from wealthy, planet-wide cities to deserts scracely populated by primitive tribes. Virtually any
              Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet which, in most cases, teem with sentient and
              non-sentient alien life. The franchise also makes use of other astrological objects such as asteroid fields and nebulae. Spacecraft range
              from small <Link>starfighters</Link> to large <Link>capital ships</Link>, such as <Link>Star Destroyers</Link>, as well as space stations
              such as the moon-sized <Link>Death Stars</Link>. Telecommunication includes two-way audio and audiovisual screens, holographic projections,
              and hyperspace transmission.
            </p>
            <p>
              The universe of Star Wars is generally similar to the real universe but its laws of physics are less strict allowing for more imaginative
              stories. One result of that is a mystical power known as <Link>the Force</Link> which is described in the original film as "an energy field
              created by all living things ... [that] bins the galaxy together". The field is depicted as a kind of pantheistic god. Through training and
              meditation, those whom "the Force is strong with" exhibit various superpowers (such as telekinesis, precognition, telepathy, and manipulation
              of physical energy); it is believed nothing is impossible for the Force. These superpowers are wielded by two major knightly orders at
              conflict with each other: the <Link>Jedi</Link>, peacekeepers of the <Link>Galactic Republic</Link> who act on the light side of the Force
              through non-attachment and arbitration, and the <Link>Sith</Link>, who use the dark side by manipulating anger, fear, and aggression. While
              Jedi Knights can be numerous, the Dark Lords of the Sith (or 'Sith Lords') are intended to be limited to two: a master and their apprentice.
            </p>
            <p>
              The franchise is set against a backdrop of galactic conflict involving republics and empires, such as the evil <Link>Galactic Empire</Link>.
              The Jedi and Sith prefer the use of a weapon called the <Link>lightsaber</Link>, a retractable blade of plasma that can cut through
              virtually any surface and deflect bolts. The rest of the population, as well as renegades and soldiers, use plasma-powered
              <Link> blaster firearms</Link>. In the outer reaches of the galaxy, crime syndicates such as the <Link>Hutt</Link> cartel are dominant.
              <Link> Bounty hunters</Link> are often by both gangsters and governments, while illicit activities include smuggling and slavery.
            </p>
            <p>
              While the franchise is best-known as an archetypal space opera, the combination of science fiction and fantasy elements makes Star Wars
              very universal, capable of telling stories of various genres.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Films"} />
          <div>
            <h3 className="article-heading-3" id="2.1">The Skywalker Saga</h3>
            <p>
              The Star Wars film series centers on three sets of trilogies, the nine films of which are collectively referred to as the "Skywalker Saga".
              The saga was produced non-chronologically, beginning with the original trilogy between 1977 and 1983. This was followed by the prequel
              trilogy, released between 1999 and 2005, and the sequel trilogy, released between 2015 and 2019.
            </p>
            <p>
              Each trilogy focuses on a generation of the Force-sensitive Skywalker family and their struggles against the <Link>Sith</Link> lord
              <Link to="/starwars/sheev_palpatine"> Palpatine</Link> (also known as Darth Sidious). The original trilogy depicts the development of 
              <Link to="/starwars/luke_skywalker"> Luke Skywalker</Link> as a Jedi and his fight against Palpatine's <Link>Galactic Empire</Link>
              alongside his sister, <Link to="/starwars/leia_organa">Leia</Link>. The prequels tell the backstory of their father,
              <Link to="/starwars/anakin_skywalker">Anakin</Link>, who is seduced to the dark side by Palpatine and bcomes Darth Vader. The sequels
              follow the conflict between Leia's son, <Link>Ben Solo</Link>, and Luke and Leia's protegé, <Link>Rey</Link>, and their eventual alliance
              against Palpatine after the fall of the Empire.
            </p>

            <h4 className="article-heading-4" id="2.1.1">Original trilogy</h4>
            <div className="img-right img-card">
              <div className="img-flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mark_Hamill_by_Gage_Skidmore_2.jpg/250px-Mark_Hamill_by_Gage_Skidmore_2.jpg" alt="Mark Hamill" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/250px-Harrison_Ford_by_Gage_Skidmore_3.jpg" alt="Harrison Ford" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Carrie_Fisher_2013_cropped_retouched.jpg/250px-Carrie_Fisher_2013_cropped_retouched.jpg" alt="Carrie Fisher" />
              </div>
              <p>
                The cast of the original trilogy includes, from left to right, <Link>Mark Hamill</Link>, <Link>Harrison Ford</Link>, and
                <Link> Carrie Fisher</Link>
              </p>
            </div>
            <p>
              In 1971, George Lucas wanted to film an adaptation of the Flash Gordon serial, but could not obtain the rights, so he began developing his
              own space opera. After directing American Graffiti (1973), he wrote a two-part synopsis, which 20th Century Fox decided to finance. By 1974,
              he had expanded the story into the first draft of a screenplay. Fox expected the film would be of limited financial success, and so it was
              given a relatively low budget, with production moved to Elstree Studios in England to lower costs.
            </p>
            <p>
              Star Wars was released on May 25, 1977, and was firsts subtitled Episode IV: A New Hope in the 1979 book The Art of Star Wars. The film's
              success led Lucas to make it the basis of an elaborate film serial. With the backstory he created for the sequel, Lucas decided that the
              series would be a trilogy of trilogies. Episode V: The Empire Strikes Back was released on May 21, 1980, along achieving wide financial
              and critical success. The final film in the trilogy, Episode VI: Return of the Jedi, was released on May 25, 1983.
            </p>

            <h4 className="article-heading-4" id="2.1.2">Prequel trilogy</h4>
            <div className="img-right img-card">
              <div className="img-flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ewan_McGregor_2012.jpg/250px-Ewan_McGregor_2012.jpg" alt="Ewan McGregor" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/NataliePortman09TIFF.jpg/250px-NataliePortman09TIFF.jpg" alt="Natalie Portman" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hayden-cfda2010-0004%281%29_%28cropped%29.jpg/250px-Hayden-cfda2010-0004%281%29_%28cropped%29.jpg" alt="Hayden Christensen" />
              </div>
              <p>
                The cast of the prequel trilogy includes, from left to right, <Link>Ewan McGregor</Link>, <Link>Natalie Portman</Link>, and
                <Link> Hayden Christensen</Link>
              </p>
            </div>
            <p>
              According to producer Gary Kurtz, loose plans for a prequel trilogy were developed during the outlining of the original two films. In 1980,
              Lucas confirmed that he had the nine-film series plotted, but due to the stress of producing the original trilogy, he had decided to cancel
              further sequels by 1981. In 1983, Lucas explained that "There was never a script completed that had the entire story as it exists now ...
              As the stories unfolded, I would take certain ideas and save them .... I kept taking out all the good parts, and I just kep telling myself
              I would make other movies someday."
            </p>
            <p>
              Technical advances in the late 1980s and early 1990s, including the ability to create computer-generted imagery (CGI), inspired Lucas to
              consider that it might be possible to revisit his saga. In 1989, Lucas stated that the prequels would be "unbelievably expansive". In 1992,
              he acknowledged that he had plans to create the prequel trilogy. A theatrical rerelease of the original trilogy in 1997 "updated" the
              20-year-old films with the style of CGI envisioned for the new trilogy.
            </p>
            <p>
              Episode I: The Phantom Menace was released on May 19, 1999, Episode II: Attack of the Clones on May 16, 2002, and Episode III: Revenge of
              the Sith on May 19, 2005. The first two films were met with mixed reviews, with the third being received more positively. Together with
              the original trilogy, Lucas has reffered to the first six episodic films of the franchise as "the tragdy of Darth Vader".
            </p>

            <h4 className="article-heading-4" id="2.1.3">Sequel trilogy</h4>
            <div className="img-right img-card">
              <div className="img-flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg/250px-Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg" alt="Adam Driver" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Daisy_Ridley_by_Gage_Skidmore.jpg/250px-Daisy_Ridley_by_Gage_Skidmore.jpg" alt="Daisy Ridley" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/John_Boyega_by_Gage_Skidmore.jpg/250px-John_Boyega_by_Gage_Skidmore.jpg" alt="John Boyega" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Oscar_Isaac_by_Gage_Skidmore.jpg/250px-Oscar_Isaac_by_Gage_Skidmore.jpg" alt="Oscar Isaac" />
              </div>
              <p>
                The cast of the sequel trilogy includes, from left to right, <Link>Adam Driver</Link>, <Link>Daisy Ridley</Link>,
                <Link> John Boyega</Link>, and <Link>Oscar Isaac</Link>
              </p>
            </div>
            <p>
              Prior to releasing the original 1977 film, and made possible by its success, Lucas planned "three trilogies of nine films". However, he
              announced to Time in 1978 that he planned "10 sequels". He confirmed that he had outlined the prequels and sequels in 1981. At various
              stages of development, the sequel trilogy was to focus on the rebuilding of the <Link>Republic</Link>, the return of Luke as a Jedi Master
              (a role similar to that of Obi-Wan Kenobi in the original trilogy), Luke's sister (not yet determined to be Leia), Han, Leia,
              <Link to="/starwars/r2d2"> R2-D2</Link>, and <Link to="/starwars/c3po">C-3PO</Link>. However, after beginning work on the prequel trilogy,
              Lucas insisted that Star Wars was meant to be a six-part series and that there would be no sequel trilogy.
            </p>
            <p>
              Lucas decided  to leave the franchise in the hands of other filmmakers, announcing in January 2012 that he would make no more Star Wars
              films. That October, the Walt Disney Company agreed to buy Lucasfilm and announced that Episode VII would be released in 2015. The
              co-chairman of Lucasfilm, Kathleen Kennedy, became president and servd as executive producer of new Star Wars feature films. Lucas provided
              Kennedy his story treatments for the sequels during the 2012 sale, but in 2015 it was revealed Lucas's sequel outline had been discarded.
              The sequel trilogy also meant the end of the <Link>Star Wars Expanded Universe</Link> stories, which were discarded from canon to give
              "maxiumum creative freedom to the filmmakers and also preserve an element of surprise and discovery for the audience."
            </p>
            <p>
              Episode VII: The Force Awakens was released on December 16, 2015, Episode VIII: The Last Jedi on December 13, 2017, and Episode IX: The
              Rise of Skywalker on December 18, 2019, in many countries. The Force Awakens and Last Jedi were both critical and box office successes.
              Episode IX received a mixed reception from critics and audiences.
            </p>

            <h3 className="article-heading-3" id="2.2">Standalone films</h3>
            <p>
              Several Star Wars films have been produced separately from the Skywalker Saga. In 2008, Lucasfilm released the animated film
              <Link to="/starwars/the_clone_wars_film">The Clone Wars</Link>, which is set during the prequel trilogy and serves as the theatrical
              pilot of the television series <Link to="/starwars/the_clone_wars_series">The Clone Wars</Link>. Following Disney's acquisition of
              Lucasfilm in 2012, an "anthology" film series set between the main episodes of the Skywalker Saga entered development in parallel with the
              production of the sequel trilogy, described by Disney chief financial officer Jay Rasulo as origin stories.
            </p>
            <p>
              The first film released was 2016's <Link to="/starwars/rogue_one">Rogue One</Link>, which tells the story of the <Link>rebels</Link> who
              steal the plans for the Death Star, the Galactic Empire's superweapon, just before the events of the original Star Wars film. A second film,
              2018's <Link to="/starwars/solo">Solo</Link>, tells Han Solo's backstory, set 10 years prior to A New Hope. The series
              <Link to="/starwars/obiwan_kenobi_series"> Obi-Wan Kenobi</Link> was originally planned as a film, but changed to a miniseries due to Solo
              underperforming at the box office.
            </p>

            <h3 className="article-heading-3" id="2.3">Upcoming films</h3>
            <p>
              In April 2023, three new untitled Star Wars films were announced, each taking place in different eras of the franchise's fictional universe.
              James Mangold will write an direct a film set during the early years of the Jedi, while Dave Filoni will direct a film set between the
              original and sequel trilogies during the <Link>New Republic</Link> era, which will serve as the climax of the various live-action
              television series that began with <Link to="/starwars/the_mandalorian">The Mandalorian</Link> in 2019. Sharmeen Obaid-Chinoy will direct
              a third film about a new Jedi Order, set fifteen years after the sequel trilogy. In January 2025, George Nolfi was hired to write the
              script for the Obaldi-Chinoy film.
            </p>
            <p>
              In January 2024, it was announced that <Link>Jon Favreau</Link> would direct a new Star Wars film, titled The Mandalorian & Grogu. In
              February of the same year, Bob Iger announced that the film would be the first release of the new slate of Star Wars movies. The
              Mandalorian & Grogu is scheduled for release on May 22, 2026.
            </p>
            <p>
              In November 2022, Shawn Levy entered talks to direct a Star Wars film, following his work on
              <Link to="/mcu/deadpool_&_wolverine">Deadpool & Wolverine</Link> (2024) and the fifth and final season of Stranger Things. In September
              2023, Levy said that development on his Star Wars film began, but would not continue until after the conclusion of the 2023 Writers Guild
              of America strike. In April 2025, <Link>Ryan Gosling</Link> was cast in the film, the title was offically revealed as Star Wars:
              Starfighter, and the film received the release date of May 26, 2027. In June 2025, Mia Goth joined the cast.
            </p>

            <h4 className="article-heading-4" id="2.3.1">Other potential projects</h4>
            <p>
              Lucasfilm has a number of Star Wars films in various stages of development, including:
            </p>
            <ul className="article-list">
              <li>
                <b>Untitled Rian Johnson trilogy</b>: In November 2017, a trilogy of movies written by The Last Jedi writer/director Rian Johnson was
                announced to be in development. In April 2023, Kennedy stated that the trilogy of films is still in open development at the studio, with
                the writer/director working on the story, although it is not currently a priority.
              </li>
              <li>
                <b>Untitled David Benioff and D. B. Weiss trilogy</b>: In February 2018, it was announced that David Benioff and D. B. Weiss would serve
                as writers and producers on a trilogy of new Star Wars movies. The plot would take place chronologically before the prequel trilogy, and
                center around the origin of the Jedi. By May 2019, the duo were also slated to serve as co-directors of the first installment in their
                three films. In October of the same year however, the filmmaking duo exited development of the projects due to scheduling conflicts with
                projects they are developing for Netflix. Kennedy stated that the studio is open to working with the duo, and developing their films once
                their schedule allows it. In January 2024, the filmmaking duo announced that the working title was The First Jedi and would have
                followed the titular ancient protagonist. The pair cast doubt on returning to their planned trilogy, commenting on its apparent influence
                on James Mangold's similarly premised Dawn of the Jedi movie.
              </li>
              <li>
                <b>Unitled Taika Waititi film</b>: In May 2020, <Link>Taika Waititi</Link> signed onto the project which was stated to be the first
                priority for the studio, with the filmmaker Waititi serving as director from a script he is co-writing with Krysty Wilson-Cairns. In May
                2022, the movie was named as the next Star Wars film to begin production ahead of Rogue Squadron, with Kennedy stating that the studio
                was tentatively looking towards late 2023 for a debut, but had not yet officially set a release date. By April 2023, she stated that the
                project is still in development, with Waititi continuing to work on the script. In April 2025, it was announced that Tony McNamara was
                hired to contribute to the script.
              </li>
              <li>
                <b>Rogue Squadron</b>: A standalone film following the events of Rogue One will be directed by Patty Jenkins with a script written by
                Matthew Robinson. In April 2023, Kennedy stated that the script is still in development, with the studio considering changing the project
                into a television series. In March 2024, Jenkins announced that she had once again commenced working on the script; confirming that
                development for the project are ongoing.
              </li>
              <li>
                <b>Untitled J.D. Dillard film</b>: In February 2020, a film was announced to be in development from director J. D. Dillard and writer
                Matt Owens; although, Dillard announced he was no longer to direct that film in November 2022.
              </li>
              <li>
                <b>Star Wars: A Droid Story</b>: In December 2020, an animated film centered around the adventures of R2-D2 and C-3PO was announced as
                being in development; the story will introduce a new heroic character to the franchise, alongside the two returning droids. The project
                will be a joint-venture production between Lucasfilm Animation, and Industrial Light & Magic. The film is being developed to debut via
                streaming, exclusively through Disney+.
              </li>
              <li>
                <b>Lando</b>: In December 2020, a spin-off series to Solo: A Star Wars Story was announced as being in development. The miniseries
                which was being developed exclusively for Disney+ was revealed to be centered around
                <Link to="/starwars/lando_calrissian"> Landonis "Lando" Calrissian III</Link>, titled Lando. <Link>Donald Glover</Link> was confirmed at
                that time to be reprising the lead role, while Justin Simien was named as the series creator and showrunner. By July 2020 however,
                Donald and Stephen Glover were hired to replace Simien, write and redevelo the show. In September 2023, the show was repurposed to be
                released as a theatrical film instead.
              </li>
              <li>
                <b>Untitled Simon Kinberg trilogy</b>: In November 2024, Simon Kinberg was hired to write and produce the new trilogy of Star Wars movies.
                The series of movies was reported to be Episode X-XII, though this was also disputed by other sources.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Television"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Animated series</h3>
            <p>
              The first two animated series, Droids and Ewoks, were produced in the 198s. They were followed by the Clone Wars animated micro-series in
              2003 and the 2008 The Clone Wars. Following Disney's acquisition of Lucasfilm, all animated series released prior to 2014, apart from the
              2008 series, were discarded from the franchise's canon. Subsequent animated series included
              <Link to="/starwars/rebels_series"> Revels</Link>, released in 2014; Resistance, released in 2018; and
              <Link to="/starwars/the_bad_batch">The Bad Batch</Link>, released in 2021.
            </p>
            <p>
              Several micro-series and shorts have also been released by Lucasfilm since Disney's acquisition, with the earlier animated series falling
              under Disney's "Vintage" collection of Star Wars content.
            </p>
            <p>
              At Star Wars Celebration Japan in April 2025, a new animated series titled Star Wars: Maul - Shadow Lord was announced with a premiere
              expected in 2026. The series will cover the period following the Clone Wars where Maul tries to rebuild his defunct Shadow Collective
              criminal syndicate into what will eventually become Crimson Dawn on a planet unknown to the Empire. Sam Witwer will return to voice Maul.
            </p>

            <h3 className="article-heading-3" id="3.2">Live-action series</h3>
            <p>
              The Star Wars franchise includes several live-action series. The first series, The Mandalorian, was released in 2019 for the streaming
              service Disney+ and is set between the original and sequel trilogies of the Skywalker Saga. Due to its success, the series spawned multiple
              live-action spin-offs set during the same fictional era, including <Link to="/starwars/the_book_of_boba_fett">The Book of Boba Fett</Link>,
              released in 2021; <Link to="/starwars/ahsoka_series">Ahsoka</Link>, released in 2023; and Skeleton Crew, released in 2024. These series
              follow the plight of the New Republic and its allies against the remnants of the fallen Galactic Empire.
            </p>
            <p>
              A story focused on <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link> was planned as a film before becoming a live-action series
              after the box office failure of Solo in 2018. The series was released on Disney+ in 2022 and is set between the prequel and original trilogy
              films. It was followd the live-action series <Link to="/starwars/andor_series">Andor</Link> in the same year; both series follow their
              titular characters during the reighn of the Empire.
            </p>
            <p>
              The Acolyte is a series created by Leslye Headland set at the end of the High Republic era before the events of the Skywalker Saga, and
              follows an investigation into a series of murders of Jedi Masters.
            </p>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Fictional universe"} />
          <div>
            <p>
              The Star Wars canon fictional universe spans multiple eras, of which three are focused around each of the film trilogies. The following
              eras were defined in January 2021, and further refined and expanded in April 2023:
            </p>
            <ul className="artlcle-list">
              <li>
                Dawn of the Jedi: The first Jedi wields the Force, which will be depicted in an upcoming untitled film.
              </li>
              <li>
                The Old Republic: The Galactic Republic is founded and the Jedi Order emerges to protect it. A schism within the Jedi leads to the
                creation of the Sith.
              </li>
              <li>
                The High Republic: Under the protection of the Jedi, the Republic grows into a golden age. This era includes the live-action series
                The Acolyte, the animated series Young Jedi Adventures, and The High Republic literary works.
              </li>
              <li>
                Fall of the Jedi: The Republic's Supreme Chancellor, Palpatine (secretly the Sith lord Darth Sidious), orchestrates the
                <Link> Clone Wars</Link>, overthrows the Republic, exterminates the Jedi Order and corrupts Anakin Skywalker. This era includes the
                prequel trlogy films, the beginning of the episodic Skywalker Saga, the animated series The Clone Wars and Tales of the Jedi, and the
                upcoming video game Zero Company.
              </li>
              <li>
                Reign of the Empire: Palpatine's Galactic Empire rules the galaxy and the remaining Jedi are hunted down. This era includes the
                standalone films Folo and Rogue One, the live-action series Obi-Wan kenobi and Andor, the anmated series The Bad Batch and Rebels, the
                upcoming anmated series Maul - Shadow Lord, and the video games <Link>Jedi: Fallen Order</Link>, <Link>Jedi: Survivor</Link>, and
                Vader Immortal.
              </li>
              <li>
                Age of Rebellion: The Rebellion against the Empire spreads across the galaxy, while the Jedi return with the emergence of Luke Skywalker.
                This era includes the original trilogy films and the video games <Link>Battlefront II</Link>, Squadrons, and Outlaws.
              </li>
              <li>
                The New Republic: Following the Empire's defeat, the emergent New Republic attempts to reunite the galaxy, while threatened by the
                remnants of the Empire. This era includes the live-action series The Mandalorian (and its film sequel The Mandalorian and Grogu), The
                Book of Boba Fett, Ahsoka, and Skeleton Crew.
              </li>
              <li>
                Rise of the First Order: The remanants of the Empire transform into the <Link>First Order</Link> but are fought by the Resistance,
                climaxing with the defeat of Palpatine and the Sith by the Jedi Rey. This era includes the sequel trilogy films, the animated series
                Resistance and the video game Tales from The Galaxy's Edge.
              </li>
              <li>
                New Jedi Order: Rey builds a new Jedi Order, which will be depicted in an upcoming untitled film, along with the unrelated upcoming film
                Starfighter.
              </li>
            </ul>
            <p>
              The Expanded Universe of spin-off media depicts different levels of continuity, which were deemed non-canonical and rebranded as Legends
              on April 25, 2014, to make most subsequent works align to the episodic films, The Clone Wars film, and television series.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Other media"} />
          <div>
            <p>
              From 1976 to 2014, the term Expanded Universe (EU) was an umbrella term for all officially licensed Star Wars storytelling material set
              outside the events depicted within the theatrical films, including novels, comics, and video games. Lucasfilm maintained internal continuity
              between the films and television content and the EU material until April 25, 2014, when the company announcd all of the EU works would
              cease production. Existing works would no longer be considered canon to the franchise and subsequent reprints would be rebranded under the
              Star Wars Legends label, with downloadable content for the massively multiplayer online game The Old Republic the only Legends material to
              still be produced. The Star Wars canon was subsequently restructured to only include the existing six feature films, the animated film The
              Clone Wars (2008), and its companion animated series. All future projects and creative developments across all types of media would be
              overseen and coordinated by the story group, announced as a division of Lucasfilm created to maintain continuity and a cohesive vision on
              the storytelling of the franchise. Multiple comics series from <Link>Marvel</Link> and novels published by Del Rey were produced after the
              announcement. Since the new canon has been introduced, there has been a multitude of pieces of Expanded Universe continuity that have
              become a part of the canon.
            </p>

            <h3 className="article-heading-3" id="5.1">Print media</h3>
            <p>
              Star Wars in print predates the release of the first film, with the November 1976 novelization of Star Wars, initially subtitled "From the
              Adventures of Luke Skywalker". Credited to Lucas, it was ghostwritten by Alan Dean Foster. The first "Expanded Universe" story appeared in
              <Link to="/marvelcomics">Marvel Comics</Link>' Star Wars #7 in January 1978 (the first six issues being an adatation of the film), followed
              by Foster's sequel novel Splinter of the Mind's Eye the following month.
            </p>

            <h4 className="article-heading-4" id="5.1.1">Novels</h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/10.12.12TimothyZahnByLuigiNovi3.jpg/500px-10.12.12TimothyZahnByLuigiNovi3.jpg" 
                alt="Timothy Zahn" 
              />
              <p>
                Timothy Zahn authored the Thrawn trilogy, which was widely credited with revitalizing the dormant Star Wars franchise in the early 1990s.
              </p>
            </div>
            <p>
              After penning the novelization of the original film, Foster followed it with the sequel Splinter of the Mind's Eye (1978). The novelization
              of the Empire Strikes Back (1980) by Donald F. Glut and Return of the Jedi (1983) by James Kahn followed, as well as The Han Solo Adventures
              trilogy (1979-1980) by Brian Daley, and The Adventures of Lando Calrissian trilogy (1983) by L. Neil Smith.
            </p>
            <p>
              Timothy Zahn's bestselling Thrawn trilogy (1991-1993) reignited interest in the franchise and introduced the popular character
              <Link to="/starwars/grand_admiral_thrawn">Grand Admiral Thrawn</Link>, Mara Jade, Talon Karrde, and Gilad Pellaeon. The first novel, Heir to
              the Empire, reached #1 on the New York Times Best Sellers list, and the series finds Luke, Leia, and Han facing off against tactical genius
              Thrawn, who is plotting to retake the galaxy for the Empire. In The Courtship of Princess Leia (1994) by Dave Wolverton, set immediately
              before the Thrawn trilogy, Leia considers an advantageous political marriage to Prince Isolder of the planet Hapes, but she and Han
              ultimately marry. Steven Perry's Shadow of the Empire (1996), set between The Empire Strikes Back and Return of the Jedi, was part of a
              multimedia campaign that included a comic book series and video games. The novel introduced the crime lord Prince Xizor, anothe popular
              character who would appear in multiple other works. Other notable series from Bantam include the Jedi Academy trilogy (1994) by Kelvin J.
              Anderson, the 14-book Young Jedi Knights series (1995-1998) by Anderson and Rebecca Moesta, and the X-wing series (1996-2012) by Michael A.
              Stackpole and Aaron Allston.
            </p>
            <p>
              Del Rey took over Star Wars book publishing in 1999, releasing what would become a 19-installment novel series called The New Jedi Order
              (1999-2003). Written by multiple authors, the series was set 25 to 30 years after the original films and introduced the Yuuzhan Vong, a
              powerful alien race attempting to invade and conquer the entire galaxy. The bestselling multi-author series Legacy of the Force (2006-2008)
              chronicles the crossover of Han and Leia's son Jacen Solo to the dark side of the Force; among his evil deeds, he kills Luke's wife Mara Jade
              as a sacrifice to join the Sith. Although no longer canon, the story is paralleled in The Force Awakens with Han and Leia's son Ben Solo,
              who becomes the evil Kylo Ren.
            </p>
            <p>
              Three series set in the prequel era were published by Scholastic for younger audiences; the 18-book Jedi Apprentice (1999-2002) chronicls
              the adventures of Obi-Wan Kenobi and his master Qui-Gon Jinn in the years before The Phantom Menace; the 11-book Jedi Quest (2001-2004)
              follows Obi-Wan and his own apprentice, Anakin Skywalker in between The Phantom Menace and Attack of the Clones; and the 10-book The Last of
              the Jedi (2005-2008), set almost immediately after Revenge of the Sith, features Obi-Wan and the last few surviving Jedi. In 2019, a new
              prequel era novel, starring Qui-Gon and the young Obi-Wan, was published by Del Rey under the title Star Wars: Master and Apprentice.
            </p>
            <p>
              Although Thrawn had been designated a Legends character in 2014, he was reintroduced into the canon in 2016 for the third season of the
              Rebels animated series, with Zahn returning to wite more novels based on the character and set in the new canon.
            </p>

            <h4 className="article-heading-4" id="5.1.2">Comics</h4>
            <p>
              Marvel Comics published a Star Wars comic book series from 1977 to 1986. Original Star Wars comics were serialized in the Marvel magazine
              Pizzazz between 1977 and 1979. The 1977 installments were the first original Star Wars stories not directly adapted from the films to
              appear in print form, as they preceded those of the Star Wars comic series. From 1985 to 1987, the animated children's series Ewoks and
              Droids inspired comic series from Marvel's Star Comics line. According to Marvel Comics former Editor-In-Chief Jim Shooter, the strong
              sales of Star Wars comics saved Marvel financially in 1977 and 1978. Marvel's Star Wars series was one of the industry's top selling titles
              in 1979 and 1980. The only downside for Marvel was that the 100,000 copy sales quota was surpassed quickly, allowing Lippincott to
              renegotiate the royalty arrangements from a position of strength.
            </p>
            <p>
              In the later 1980s, Marvel dropped a new Star Wars comic it had in development, which was picked up by Dark Horse Comics and published as
              the popular Dark Empire series (1991-1995). Dark Horse subsequently launched dozens of series set after the original film trilogy,
              including Tales of the Jedi (1993-1998), X-Wing Rogue Squadron (1995-1996), Star Wars: Republic (1998-2006), Star Wars Tales (1999-2005),
              Star Wars: Empire (2002-2006), and Knights of the Old Republic (2006-2010).
            </p>
            <p>
              After Disney's acquisition of Lucasfilm, it was announced in January 2014 that in 2015 the Star Wars comics license would return to Marvel
              Comics, whose parent company, Marvel Entertainment, Disney had purchased in 2009. Launched in 2015, the first three publications were
              titled Star Wars, Darth Vader, and the miniseries Princess Leia.
            </p>
            <p>
              First announced as Project Luminous at Star Wars Celebration in April 2019, the Star Wars: The High Republic publishing initially was
              revealed in a press conference in February 2020. Involving the majority of the then current officially licensed publishers, a new era set
              200 years before the Skywalker Saga was explored in various books and comics. Including ongoing titles by Marvel and IDW Publishing,
              written by Cavan Scott and Daniel José Older respectively.
            </p>
            <p>
              Marvel Comics will publish a one-shot comic book on September 4, 2024, that bridges the gap between the High Republic publishing initiative
              and the events of The Acolyte. Titled Star Wars: The Acolyte - Kelnacca, the one-shot was written by High Republic writer Cavan Scott with
              art by Marika Cresta. It focuses on Kelnacca, the Wookiee Jedi introduced in The Acolyte.
            </p>

            <h3 className="article-heading-3" id="5.2">Audio</h3>
            <h4 className="article-heading-4" id="5.2.1">Soundtracks and singles</h4>
            <p>
              <Link>John Williams</Link> composed the soundtracks for the nine episodic films. He stated he would retire from the franchise with The Rise
              of Skywalker, but he composed a theme for Obi-Wan Kenobi for the miniseries and Han Solo's theme for Solo: A Star Wars Story. Williams also
              created the main theme for Galaxy's Edge.
            </p>
            <p>
              Several other composers worked on other soundtracks, including John Powell (Obi-Wan Kenobi), <Link>Michael Giacchino</Link> (Rogue One),
              and Ludwig Göransson (The Mandalorian).
            </p>

            <h4 className="article-heading-4" id="5.2.2">Audio novels</h4>
            <p>
              The first Star Wars audio work is The Story of Star Wars, an LP using audio samples from the original film and a new narrative to retell
              the story, released in 1977. Most later printed novels were adapted into audio novels, usually released on cassette tape and re-released on
              CD. As of 2019, audio-only novels have been released not directly based on printed media.
            </p>

            <h4 className="article-heading-4" id="5.2.3">Radio</h4>

            <h3 className="article-heading-3" id="5.3">Video games</h3>

            <h4 className="article-heading-4" id="5.3.1">Early licensed games (1979-1993)</h4>

            <h4 className="article-heading-4" id="5.3.2">LucasArts and modern self-published games (1993-2014)</h4>

            <h4 className="article-heading-4" id="5.3.3">EA Star Wars (2014-present)</h4>

            <h3 className="article-heading-3" id="5.4">Theme park attractions</h3>

            <h3 className="article-heading-3" id="5.5">Multimedia projects</h3>

            <h3 className="article-heading-3" id="5.6">Merchandising</h3>

          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Themes"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Historical influences</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Cultural impact"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Indistry</h3>
            <h4 className="article-heading-4" id="7.1.1">Fan workds</h4>
            <h3 className="article-heading-3" id="7.2">Academia</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default StarWars