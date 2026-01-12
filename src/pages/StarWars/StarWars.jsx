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
              {id: "3.3", title: "Films and specials"},
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

            <h4 className="article-heading-4" id="2.3.1">Other potential projects</h4>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Television"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Animated series</h3>
            <h3 className="article-heading-3" id="3.2">Live-action series</h3>
            <h3 className="article-heading-3" id="3.3">Films and specials</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Fictional universe"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Other media"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Print media</h3>
            <h4 className="article-heading-4" id="5.1.1">Novels</h4>
            <h4 className="article-heading-4" id="5.1.2">Comics</h4>
            <h3 className="article-heading-3" id="5.2">Audio</h3>
            <h4 className="article-heading-4" id="5.2.1">Soundtracks and singles</h4>
            <h4 className="article-heading-4" id="5.2.2">Audio novels</h4>
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