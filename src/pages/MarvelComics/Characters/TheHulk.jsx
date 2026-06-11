import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const TheHulk = () =>
{
  useEffect(() =>
  {
    document.title = "The Hulk (Bruce Banner) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept and creation</a></li>
          <Collapse 
            id="2"
            item="Publication history"
            sub={[
              {id: "2.1", title: "1960s"},
              {id: "2.2", title: "1970s"},
              {id: "2.3", title: "1980s"},
              {id: "2.4", title: "1990s and after"}
            ]}
          />

          <li className="sidebar-list-item"><a href="#4">Personality</a></li>
          <li className="sidebar-list-item"><a href="#5">Incarnations</a></li>
          <Collapse 
            id="6"
            item="Attributes"
            sub={[
              {id: "6.1", title: "Powers"},
              {id: "6.2", title: "Abilities"},
              {id: "6.3", title: "Weaknesses"}
            ]}
          />
          <Collapse 
            id="7"
            item="Paraphernalia"
            sub={[
              {id: "7.1", title: "Equipment"},
              {id: "7.2", title: "Weapons"},
              {id: "7.3", title: "Transportation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Supporting characters</a></li>
          <Collapse 
            id="9"
            item="Cultural impact"
            sub={[
              {id: "9.1", title: "Analysis"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#10">In other media</a></li>
          <li className="sidebar-list-item"><a href="#11">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>The Hulk (Bruce Banner)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Hulk (Bruce Banner)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Hulk</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png" alt="The Hulk" />
                </span>
              </td>
            </tr>
            <tr>
              <th colspan="2">Publication information</th>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link to="/marvelcomics">Marvel Comics</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                <Link>Stan Lee</Link> <br />
                <Link>Jack Kirby</Link>
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Robert Bruce Banner</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            The <b>Hulk</b> is a superhero appearing in American comic books published by <Link to="/marvelcomics">Marvel Comics</Link>. Created by writer
            <Link> Stan Lee</Link> and artist <Link>Jack Kirby</Link>, the character first appeared in the debut issue of
            <Link to="/marvelcomics/the_incredible_hulk_(comic_book)">The Incredible Hulk</Link> (May 1962). In his comic book appearances, the
            character, who has dissociative identity disorder (DID), is primarily represnted by the alter ego Hulk, an immense, green-skinned, hulking brute,
            possessing a limitless degree of physical strength, and the alter ego Dr. <b>Robert Bruce Banner</b>, a physically weak, socially withdrawn, and
            emotionally reserved physicist, both of whom typically resent each other. Lee stated that the Hulk's creation was inspired by a combination of
            Frankenstein and Dr. Jekyll and Mr. Hyde.
          </p>
          <p>
            Following his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Bruce is physically
            transformed into the Hulk when subjected to emotional stress, at or against his will. This transformation often leads to destructive rampages and
            conflicts that complicate Bruce's civilian life. The Hulk's level of strength is usually conveyed proportionate to his anger level. Commonly portrayed as
            a raging savage, the Hulk has been represented with other alter egos like a gangster (<b>Joe Fixit</b>), a merged personality (<b>Merged Hulk</b>), a
            mindless, destructive force (<b>War</b>), a brilliant warrior (<b>World-Breaker</b>), a self-hating protector (<b>Devil Hulk</b>), a genius scientist
            in his own right (<b>Doc Green</b>), and several minor alter egos.
          </p>
          <p>
            Despite Hulk and Bruce's desire for solitude, the character has a large supporting cast. This includes Bruce's love interest
            <Link to="/marvelcomics/betty_ross"> Betty Ross</Link>, his best friend, Rick Jones, his cousin <Link to="/marvelcomics/she_hulk">She-Hulk</Link>, and
            therapist and ally <Link to="/marvelcomics/doc_samson">Doc Samson</Link>. In addition, the Hulk alter ego has many key supporting characters, like his
            co-founders of the superhero team the <Link to="/marvelcomics/avengers">Avengers</Link>, his queen Caiera, fellow warriors Korg and Miek, and sons
            Skaar and Hiro-Kala. However, his uncontrollable power has brought him into conflict with his fellow heroes and others such as
            <Link to="/marvelcomics/thunderbolt_ross"> General Thunderbolt Ross</Link>, Betty's father. Despite this, he tries his best to do what's right while
            battling villains such as the <Link to="/marvelcomics/leader">Leader</Link>, the <Link to="/marvelcomics/abomination">Abomination</Link>, the
            <Link to="/marvelcomics/absorbing_man"> Absorbing Man</Link>, and many more.
          </p>
        </div>
      </main>
    </>
  )
}

export default TheHulk;