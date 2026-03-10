import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CloneWarsFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Star Wars: The Clone Wars (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening narration</a></li>
          <li className="sidebar-list-item"><a href="#2">Plot</a></li>
          <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Animation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Marketing"
            sub={[
              {id: "6.1", title: "Merchandise"},
              {id: "6.2", title: "Food partnership"},
              {id: "6.3", title: "Print media"},
              {id: "6.4", title: "Video games"},
              {id: "6.5", title: "Portable media players"},
              {id: "6.6", title: "Racing sponsorship"},
              {id: "6.7", title: "Novelization"}
            ]}
          />
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "Theatrical"},
              {id: "7.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Box office"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Accolades</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Star Wars: The Clone Wars (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Star Wars: The Clone Wars (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars: The Clone Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg" alt="Star Wars: The Clone Wars poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Dave Filoni</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Star Wars: The Clone Wars</b> is a 2008 American animated space opera film directed by <Link>Dave Filoni</Link> and produced by
            Lucasfilm Animation. The voice cast includes <Link>Matt Lanter</Link>, <Link>Ashley Eckstein</Link>, <Link>James Arnold Taylor</Link>,
            <Link> Dee Bradley Baker</Link>, <Link>Tom Kane</Link>, Catherine Taber, Nika Futterman, Ian Abercrombie, Corey Burton, Matthew Woods,
            <Link> Kevin Michael Richardson</Link>, David Acord, <Link>Samuel L. Jackson</Link>, <Link>Anthony Daniels</Link>, and
            <Link>Christopher Lee</Link>. It is the first animated film in the <Link to="/starwars">Star Wars</Link> franchise and takes place shortly
            after <Link to="/starwars/attack_of_the_clones">Attack of the Clones</Link> (2002), at the start of the <Link>Clone Wars</Link>. In the film,
            <Link to="/starwars/count_dooku"> Count Dooku</Link> and <Link to="/starwars/jabba_the_hutt">Jabba the Hutt</Link>'s uncle Ziro orchestrate a
            plan to turn Jabba against the <Link>Galactic Republic</Link> by framing the <Link>Jedi</Link> for the kidnapping of his son. While
            <Link to="/starwars/anakin_skywalker"> Anakin Skywalker</Link> and his newly assigned apprentice
            <Link to="/starwars/ahsoka_tano"> Ahsoka Tano</Link> attempt to deliver the child back to his father,
            <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link> and <Link to="/starwars/padmé_amidala">Padmé Amidala</Link> lead separate
            investigations to uncover Dooku and Ziro's plot.
          </p>
          <p>
            The Clone Wars premiered on August 10, 2008, at Grauman's Egyptian Theatre, and was released in the United States on August 15, by Warner
            Bros. Pictures. It received generally negative reviews from critics, and grossed $68 million on a budget of $8 million. The film serves as a
            pilot to <Link to="/starwars/the_clone_wars_series">the 2008 television series</Link>, which premiered two months after the film's release.
            It was the final film in the franchise with the involvement of <Link>George Lucas</Link>, who sold <Link>Lucasfilm</Link> to The Walt Disney
            Company four years later.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Opening narration"} />
          <div>
            <div className="article-quote">
              <p>
                A galaxy divided! Striking swiftly after the Battle of Geonosis, Count Dooku's droid army has seized control of the major hyperspace
                lanes, separating the Republic from the majority of its clone army. With few clones available, the Jedi generals cannot gain a foothold
                on the Outer Rim as more and more planets choose to join Dooku's Separatists. While the Jedi are occupied fighting a war, no one is left
                to keep the peace. Chaos and crime spread, and the innocent become victims in a lawless galaxy. Crime lord Jabba the Hutt's son has been
                kidnapped by a rival band of pirates. Desparate to save his son, Jabba puts out a call for help-a call the Jedi are cautious to answer...
              </p>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Voice cast"} />
          <div>
            <div className="article-list">
              <ul>
                <li>
                  <Link>Matt Lanter</Link> as <Link to="/starwars/anakin_skywalker">Anakin Skywalker</Link>, a former Jedi Padawan who has recently been
                  promoted to the rank of Jedi Knight, and a general in the Republic's army, who leads the 501st Legion. <Link>Hayden Christensen</Link>
                  was considered to reprise his role as Anakin from the prequel trilogy before Lanter was selected. Lanter replaces Mat Lucas, who voiced
                  the character in the 2003 micro-series, Star Wars: Clone Wars.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
            <h3 className="article-heading-3" id="4.2">Animation</h3>
          </div>
        </div><div>
          <Heading2 id={5} title={"Nusic"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Merchandise</h3>
            <h3 className="article-heading-3" id="6.2">Food partnership</h3>
            <h3 className="article-heading-3" id="6.3">Print media</h3>
            <h3 className="article-heading-3" id="6.4">Video games</h3>
            <h3 className="article-heading-3" id="6.5">Portable media players</h3>
            <h3 className="article-heading-3" id="6.6">Racing sponsorship</h3>
            <h3 className="article-heading-3" id="6.7">Novelization</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Theatrical</h3>
            <h3 className="article-heading-3" id="7.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>
            <h3 className="article-heading-3" id="8.2">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Accolades"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CloneWarsFilm;