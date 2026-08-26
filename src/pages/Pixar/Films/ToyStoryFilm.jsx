import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ToyStoryFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Toy Story (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Voice cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Production shutdown"},
              {id: "3.5", title: "Animation"},
              {id: "3.6", title: "Music"},
              {id: "3.7", title: "Editing and pre-release"},
            ]}
          />
          <Collapse 
            id="4"
            item="Release"
            sub={[
              {id: "4.1", title: "Marketing"},
              {id: "4.2", title: "Re-releases", sub2:[
                {id: "4.2.1", title: "3-D conversion"},
                {id: "4.2.2", title: "Disney100"},
                {id: "4.2.3", title: "30th anniversary"}
              ]},
              {id: "4.3", title: "Home media"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Box office"},
              {id: "5.2", title: "Critical response"},
              {id: "5.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="6"
            item="Influence and legacy"
            sub={[
              {id: "6.1", title: `"To infinity... and Beyond"`},
              {id: "6.2", title: "Other influences"}
            ]}
          />
          <Collapse 
            id="7"
            item="Sequels and spin-off"
            sub={[
              {id: "7.1", title: "Toy Story 2"},
              {id: "7.2", title: "Toy Story 3"},
              {id: "7.3", title: "Toy Story 4"},
              {id: "7.4", title: "Lightyear"},
              {id: "7.5", title: "Toy Story 5"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pixar">Pixar</Link></li>
          <li><Link to="/toy_story">Toy Story (franchise)</Link></li>
          <li>Toy Story (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Toy Story (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Toy Story</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg" alt="Toy Story poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link to="/people/john_lasseter">John Lasseter</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of Pixar projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Pixar character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Pixar film</th>
              <td className="infobox-data"><Link to="/pixar/a_bugs_life">A Bug's Life</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Toy Story film</th>
              <td className="infobox-data"><Link to="/toy_story/toy_story_2">Toy Story 2</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Toy Story</b> is a 1995 American animated adventure comedy film directed by <Link to="/people/john_lasseter">John Lasseter</Link>,
            and written by <Link to="/people/joss_whedon">Joss Whedon</Link>, <Link to="/people/andrew_stanton">Andrew Stanton</Link>, Joel Cohen,
            and Alec Sokolow. The first entirely computer-animated feature film, as well as the first feature film produced by
            <Link to="/pixar"> Pixar Animation Studios</Link>, it stars the voices of <Link to="/people/tom_hanks">Tom Hanks</Link>,
            <Link to="/people/tim_allen"> Tim Allen</Link>, Annie Potts, <Link to="/people/john_ratzenberger">John Ratzenberger</Link>,
            <Link to="/people/don_rickles">Don Rickles</Link>, <Link to="/people/wallace_shawn">Wallace Shawn</Link>, and
            <Link to="/people/jim_varney"> Jim Varney</Link>. Set in a world where toys come to life, Toy Story follows an old-fashioned cowboy doll
            named <Link to="/toy_story/woody">Woody</Link>, who becomes jealous that a space cadet action figure,
            <Link to="/toy_story/buzz_lightyear"> Buzz Lightyear</Link>, is replacing him as the favorite toy of their owner
            <Link to="/toy_story/andy_davis"> Andy</Link>.
          </p>
          <p>
            Following the success of the 1988 short film Tin Toy, Pixar was approached by <Link to="/disney">Disney</Link> to produce a
            computer-animated feature film that was told from a small toy's perspective. Lasseter, Stanton, and
            <Link to="/people/pete_docter"> Pete Docter</Link> wrote early story treatments, which were rejected by Disney, who wanted the film's tone
            to be edgier. After several disastrous story reels, production was halted, and the script was rewritten to better reflect the tone and
            theme Pixar desired: "toys deeply want children to play with them, and ...this desire drives their hopes, fears, and actions." The studio,
            then consisting of a relatively small number of employees, produced Toy Story under financial constraints.
          </p>
          <p>
            Toy Story premiered at the El Capitan Theatre in Los Angeles on November 19, 1995, and was released theatrically in the United States on
            November 22. It set a record for the highest-grossing opening weekend and eventually grossed over $363 million worldwide, making it the
            second highest-grossing film of 1995. The film received critical acclaim, with praise directed towards the animation, screenplay, Randy
            Newman's score, appeal to all age groups, and voice performances, particularly of Hanks and Allen. It holds a 100% approval rating on film
            aggregation website Rotten Tomatoes.
          </p>
          <p>
            The film is frequently lauded as one of the greatest animated films ever made, and, due to its status as the first computer-animated film,
            one of the most important films in the medium's history and in film at large. The film received three Academy Award nominations,
            Best Original Screenplay (the first animated film to be nominated for the award), Best Original Song for "You've Got a Friend in Me",
            and Best Original Score, in addition to being honored with a non-competitive Special Achievement Academy Awards.
          </p>
          <p>
            In 2005, Toy Story was selected for preservation in the United States National Film Registry by the Library of Congress as being
            "culturally, historically, or aesthetically significant." The success of Toy Story launched a multimedia franchise, with four sequels
            beginning with <Link to="/toy_story/toy_story_2">Toy Story 2</Link>; a spin-off film, <Link to="/toy_story/lightyear">Lightyear</Link>;
            and numerous short films. Toy Story has had several theatrical re-releases, including a 3D re-release in 2009 as part of a double
            feature with Toy Story 2, and a 30th anniversary re-release in 2025.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              The film begins with a boy named Andy playing with his toys, <Link to="/toy_story/mr._potato_head">Mr. Potato Head</Link>,
              <Link to="/toy_story/slinky_dog"> Slinky Dog</Link>, <Link to="/toy_story/rex">Rex</Link>, <Link to="/toy_story/hamm">Hamm</Link>,
              and his favorite toy Woody. He takes Woody into the living room and plays with him some more, and is interrupted by his
              <Link to="/toy_story/andy'smom"> mom</Link>. She talks about Andy's birthday party later that day and the upcoming move to a new house.
              Andy starts helping his mom by carrying his baby sister <Link to="/toy_story/molly_davis">Molly</Link> to her. While he's away, all of
              the toys come to life.
            </p>
            <p>
              Woody wakes up finding out that Andy's birthday party is later that day and calls all the other toys to a staff meeting. He begins the
              meeting asking if each of the toys has picked a moving buddy for the move the following week. He downplays the news that Andy's birthday
              party has been moved to later that day, but the other toys start panicking about whether they are going to be replaced. Woody claims
              that what matters is that he and the other toys are there for Andy. Hamm interrupts the meeting and informs everybody that Andy's
              birthday guests have arrived. Out of the window, they see the guests carrying birthday presents, still worried about getting replaced.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/JohnLasseterOct2011.jpg/250px-JohnLasseterOct2011.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="John Lasseter in 2011."
              />
              <p>John Lasseter (pictured in 2011) co-wrote and directed Toy Story.</p>
            </div>
            <p>
              John Lasseter's first experience with computer animation was during his work as an animator at Walt Disney Feature Animation, when two
              of his friends showed him the light-cycle scene from Tron. It was an eye-opening experience that awakened Lasseter to the possibilities
              offered by the new medium of computer-generated animation. Lasseter tried to pitch The Brave Little Toaster as a fully computer-animated
              film to Disney, but the idea was rejected and Lasseter was fired. He then went on to work at Lucasfilm and in 1986, he became a founding
              member of Pixar. In 1986, Pixar was purchased by entrepreneur and Apple Inc. co-founder Steve Jobs. At Pixar, Lasseter created short,
              computer-animated films to show off the Pixar Image Computer's capabilities. In 1988, Lasseter produced the short film Tin Toy, which was
              told from the perspective of a toy, referencing Lasseter's love of classic toys. Tin Toy won the 1989 Academy Award for Best Animated Short
              Film, the first computer-generated film to do so.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ToyStoryFilm;