import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PhilosophersStoneBook = () =>
{
  useEffect(() =>
  {
    document.title = "Harry Potter and the Philosopher's Stone (book) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Chapter 1: The Boy Who Lived"},
              {id: "1.2", title: "Chapter 2: The Vanishing Glass"},
              {id: "1.3", title: "Chapter 3: The Letters from No One"},
              {id: "1.4", title: "Chapter 4: The Keepers of the Keys"},
              {id: "1.5", title: "Chapter 5: Diagon Alley"},
              {id: "1.6", title: "Chapter 6: The Journey from Platform Nine and Three-Quarters"},
              {id: "1.7", title: "Chapter 7: The Sorting Hat"},
              {id: "1.8", title: "Chapter 8: The Potions Master"},
              {id: "1.9", title: "Chapter 9: The Midnight Duel"},
              {id: "1.10", title: "Chapter 10: Halloween"},
              {id: "1.11", title: "Chapter 11: Quidditch"},
              {id: "1.12", title: "Chapter 12: The Mirror of Erised"},
              {id: "1.13", title: "Chapter 13: Nicolas Flamel"},
              {id: "1.14", title: "Chapter 14: Norbert the Norwegian Ridgeback"},
              {id: "1.15", title: "Chapter 15: The Forbidden Forest"},
              {id: "1.16", title: "Chapter 16: Through the Trapdoor"},
              {id: "1.17", title: "Chapter 17: The Man with Two Faces"}
            ]}
          />
          <li className="sidebar-list-item"><a href="2">Characters</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hpbooks">Harry Potter</Link></li>
          <li>Harry Potter and the Philosopher's Stone (book)</li>
        </ul>
        <div>
          <h1 className="article-heading">Harry Potter and the Philosopher's Stone (book)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Harry Potter and the Philosopher's Stone</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/harrypotter/images/3/3e/Harry_Potter_and_the_Sorcerer%27s_Stone_cover.jpg" alt="Harry Potter and the Philosopher's Stone cover" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Author</th>
              <td className="infobox-data"><Link>J. K. Rowling</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next book in the series</th>
              <td className="infobox-data"><Link to="/harry_potter/harry_potter_and_the_chamber_of_secrets">Harry Potter and the Chamber of Secrets</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default PhilosophersStoneBook;