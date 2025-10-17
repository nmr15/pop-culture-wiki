import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const Gta = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Series history"
            sub={[
              {id: "1.1", title: "Main series"},
              {id: "1.2", title: "Other games"},
              {id: "1.3", title: "Compilations"},
              {id: "1.4", title: "Titles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Related media</a></li>
          <Collapse 
            id="3"
            item="Common elements"
            sub={[
              {id: "3.1", title: "Gameplay"},
              {id: "3.2", title: "Settings", sub2: [
                {id: "3.2.1", title: "Liberty City"},
                {id: "3.2.2", title: "San Andreas"},
                {id: "3.2.3", title: "Vice City"},
                {id: "3.2.4", title: "Other settings"}
              ]},
              {id: "3.3", title: "Voice acting"}
            ]}
          />
          <Collapse 
            id="4"
            item="Controversies"
            sub={[
              {id: "4.1", title: "Grand Theft Auto"},
              {id: "4.2", title: "Grand Theft Auto III"},
              {id: "4.3", title: "Vice City"},
              {id: "4.4", title: "San Andreas"},
              {id: "4.5", title: "Grand Theft Auto IV"},
              {id: "4.6", title: "The Lost and Damned"},
              {id: "4.7", title: "Chinatown Wars"},
              {id: "4.8", title: "Grand Theft Auto V"},
              {id: "4.9", title: "Lawsuits", sub2: [
                {id: "4.9.1", title: "Lawsuits invloving Jack Thompson"}
              ]},
              {id: "4.10", title: "Modding and fan recreation"},
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Similar games</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Grand Theft Auto (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2018/03/GTA-Logo.png" 
            alt="Grand Theft Auto logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>Grand Theft Auto</b> is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight
            of brothers Dan and Sam Houser, Leslie Benzies, and Aaron Garbut. It is primarily developed by British development house <a href="#">Rockstar North</a>
            (formerly DMA Design), and published by its American parent company, <a href="#">Rockstar Games</a>. The name of the series is a term for motor vehicle
            theft in the United States.
          </p>
          <p>
            Gameplay focuses on an open world where the player can complete missions to progress an overall story, as well as engage in various side
            activities. Most of the gameplay revolves around driving and shooting, with occasional role-playing and stealth elements. The series also
            has elements of the earlier beat 'em up games from the 16-bit era. The games in the Grand Theft Auto series are set in fictional locales
            modelled after real-life cities, at various points in time from the early 1960s to the 2010s. The original game's map encompassed three
            cities, Liberty City (based on New York City), San Andreas (based on San Francisco), and Vice City (based on Miami), but later titles
            tend to focus on a single setting and expand upon the original three locales. Each game in the series centers on different respective
            protagonist who attempts to rise through the criminal underworld due to various motives, often accompanying themes of betrayal. Several
            film and music veterans have voiced characters in the game, including <Link>Ray Liotta</Link>, Dennis Hopper, <Link>Sameul L.
            Jackson</Link>, William Fichtner, <Link>James Woods</Link>, Debbie Harry, <Link>Axl Rose</Link>, and Peter Fonda, while few others have
            appeared as themselves, including <Link>Lazlow</Link>, <Link>Phil Collins</Link>, Dr. Dre, and Anderson Paak.
          </p>
          <p>
            DMA Design began the series with 1997's Grand Theft Auto. As of 2020, the series consists of seven standalone titles and four expansion
            packs. The third main title, <Link>Grand Theft Auto III</Link>, released in 2001, is considered a landmark game, and brough the series
            into a three-dimensional environment for the first time. Subsequent titles have followed and built upon the format established by Grand
            Theft Auto III, receiving significant acclaim. The games influenced other open-world games, and led to the label <Link>Grand Theft
            Auto clone</Link> on similar titles.
          </p>
          <p>
            The series has been critically acclaimed, with all the main 3D entries in the franchise frequently ranked among the greatest and
            best-selling video games; it has shipped almost 450 million units, making it one of the best-selling video game franchises. In 2006,
            Grand Theft Auto was featured in a list of British design icon ins in the Great British Design Quest organised by the BBC and the
            Design Museum. In 2013, The Telegraph ranked Grand Theft Auto among Britain's most successful exports. The series has also been
            controversial for its adult nature and violent themes, as well as for cut content.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Series history</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Main series</h3>
            <p>
              The Grand Theft Auto series is split into separate fictional universes, named after the primary level of graphics capability used
              in each era. The original Grand Theft Auto, its expansions and its sequel are considered the "2D universe". Grand Theft Auto III
              and its sequels are considered the "3D universe". <Link>Grand Theft Auto IV</Link>, its expansions and <Link>Grand Theft Auto V</Link>
              are considered the "HD universe". Each universe is considered separate with only brands, place names, and background characters
              shared between them.
            </p>
            <p>
              Grand Theft Auto, the first game in the series, was released for <Link>MS-DOS</Link> and <Link>Windows</Link> in November 1997, ported
              to the <Link>PlayStation</Link> in 1998 and the <Link>Game Boy Color</Link> in 1999. Grand Theft Auto 2 was released in 1999 for
              Windows, later received ports on the PlayStation, Dreamcast, and Game Boy Color.
            </p>
            <p>
              The <Link>PlayStation 2</Link> also featured three installments of the main series, all of which have been re-released on several
              platforms; a deal between <Link>Take-Two Interactive</Link> and <Link>Sony Computer Entertainment</Link> resulted in their timed
              exclusivity on the PlayStation 2, before receiving ports to Windows and the <Link>Xbox</Link>. The 2001 title Grand Theft Auto III
              moved away from the two-dimension (2D) graphics used in the first two games to three-dimensional (3D) computer graphics.
              <Link> Grand Theft Auto: Vice City</Link> was published in 2002, and was the first to feature a speaking protagonst, voice by Ray
              Liotta. <Link>Grand Theft Auto: San Andreas</Link>, released in 2004, introduced various new elements, including character
              customization and a large map encompassing three cities and surrounding rural area.
            </p>
            <p>
              Two main installments were published for the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link>. The 2008 title <Link>Grand
              Theft Auto IV</Link> focused on realism and detail, removing various customization features, while adding an online multiplayer mode.
              <Link> Grand Theft Auto V</Link>, published in 2013, featured three playable protagonists. It was released to massive financial
              success, breaking multiple records. It was later re-released with various enhancements, in 2014 for the <Link>PlayStation 4</Link> and
              <Link> Xbox One</Link>, and in 2015 for Windows; versions for <Link>PlayStation 5</Link> and <Link>Xbox Series X and S</Link> were
              released in 2022.
            </p>
            <p>
              On February 4, 2022, Rockstar confirmed that development of a new entry in the series was "well underway". In-development footage of
              the game leaked in September 2022; Rockstar noted that was "extremely dissapointed" by the manner in which the game was first 
              demonstrated, but that it did not anticipate long-term effects on development. In December 2023, the game was officially announed as
              <Link>Grand Theft Auto VI</Link>, with a projected relase date of 2025 for the PlayStation 5 and Xbox Series X/S. It was later delayed
              to May 26, 2026.
            </p>
            <h3 className="article-heading-3" id="1.2">Other games</h3>
            <h3 className="article-heading-3" id="1.3">Compilations</h3>
            <h3 className="article-heading-3" id="1.4">Titles</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Related media</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Common elements</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Gameplay</h3>
            <h3 className="article-heading-3" id="3.2">Settings</h3>
            <h4 className="article-heading-4" id="3.2.1">Liberty City</h4>
            <h4 className="article-heading-4" id="3.2.2">San Andreas</h4>
            <h4 className="article-heading-4" id="3.2.3">Vice City</h4>
            <h4 className="article-heading-4" id="3.2.4">Other settings</h4>
            <h3 className="article-heading-3" id="3.3">Voice acting</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Grand Theft Auto</h3>
            <h3 className="article-heading-3" id="4.2">Grand Theft Auto III</h3>
            <h3 className="article-heading-3" id="4.3">Vice City</h3>
            <h3 className="article-heading-3" id="4.4">San Andreas</h3>
            <h3 className="article-heading-3" id="4.5">Grand Theft Auto IV</h3>
            <h3 className="article-heading-3" id="4.6">The Lost and Damned</h3>
            <h3 className="article-heading-3" id="4.7">Chinatown Wars</h3>
            <h3 className="article-heading-3" id="4.8">Grand Theft Auto V</h3>
            <h3 className="article-heading-3" id="4.9">Lawsuits</h3>
            <h4 className="article-heading-4" id="4.9.1">Lawsuits invloving Jack Thompson</h4>
            <h3 className="article-heading-3" id="4.10">Modding and fan recreation</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Sales</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Similar games</h2>
          <div></div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default Gta
