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
        </div>
      </main>
    </>
  )
}

export default TheHulk;