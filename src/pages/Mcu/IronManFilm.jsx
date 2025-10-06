import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const IronManFilm = () =>
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
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" 
            alt="Iron Man" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          <p>
            Iron Man is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character <Link>of the same name</Link>.
            Produced by <Link>Marvel Studios</Link> and distributed by <Link>Paramount Pictures</Link>, it is the first film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Directed by <Link>Jon Favreau</Link> from a screenplay by the writing team of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film
            stars <Link>Roberty Downey Jr.</Link> as <Link>Tony Stark / Iron Man</Link> alongside Terrence Howard, <Link>Jeff Bridges</Link>, <Link>Gwyneth Paltrow</Link>,
            <Link> Leslie Bibb</Link>, and <Link>Shaun Toub</Link>. In the film, following his escape from captivity by a terrorist group, world-famous industrialist
            and master engineer Tony Stark builds a mechanical suit of armor and becomes the superhero Iron Man.
          </p>
          <p>
            A film featuring Iron Man was in development at <Link>Universal Pictures</Link>, <Link>20th Century Fox</Link>, and <Link>New Line Cinema</Link> at various
            times since 1990 before Marvel Studios reacquired the rights in 2005. Marvel put the project in production as its first self-financed film, with Paramount
            Pictures distributing. Favreau signed on as director in April 2006 and faced opposition from Marvel when trying to cast Downey in the title role; the actor was
            signed in September. Filming took place from March to June 2007, primarily in California to differenetiaite the film from numerous other superhero stories that
            are set in New York. During filming, the actors were free to create their own dialogue because pre-production was focused on the story and action. Rubber and
            metal versions of the armor, created by Stan Winston's company, were mixed with computer-generated imagery to create the title character.
          </p>
          <p>
            Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in <Link>Phase One</Link> of the MCU. It
            grossed over $585 million, becoming the eigth-highest grossing film of 2008, and received praise from critics, especially for Downey's performance as well as
            Favreau's direction, the visual effects, action sequences, and writing. The American Film Insitute selcted it as one of the ten best films of 2008. It received
            two nominations at the 81st Academy Awards for Best Sound Editing and Best Visual Effects. In 2022, the Library of Congress selected the film for preservation
            in the United States National Film Registry for being "culturally, historically, or aesthetically significant". Two sequels have been released:
            <Link to="/mcu/iron_man_2"> Iron Man 2</Link> (2010), and <Link to="/mcu/iron_man_3">Iron Man 3</Link> (2013).
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
          <h2 className="article-heading-2" id="8">Sequels</h2>
          <div></div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default IronManFilm;