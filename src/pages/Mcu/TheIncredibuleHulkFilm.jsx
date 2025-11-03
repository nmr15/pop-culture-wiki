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
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div></div>
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
