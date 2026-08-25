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
        </div>
      </main>
    </>
  )
}

export default ToyStoryFilm;