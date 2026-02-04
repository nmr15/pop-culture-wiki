import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const IronMan = () =>
{
  useEffect(() =>
  {
    document.title = "Iron Man (Tony Stark) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Publication history"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Early years"},
              {id: "1.3", title: "1970s"},
              {id: "1.4", title: "1980s and 1990s"},
              {id: "1.5", title: "2000s"},
              {id: "1.6", title: "2010s and 2020s"}
            ]}
          />

          <Collapse 
            id="3"
            item="Personality"
            sub={[
              {id: "3.1", title: "Alcoholism"},
              {id: "3.2", title: "Relationships"}
            ]}
          />
          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"},
              {id: "4.3", title: "Weaknesses"}
            ]}
          />
          <Collapse 
            id="5"
            item="Paraphernalia"
            sub={[
              {id: "5.1", title: "Equipment", sub2: [
                {id: "5.1.1", title: "Iron Man armor"}
              ]},
              {id: "5.2", title: "Weapons"},
              {id: "5.3", title: "Transportation"}
            ]}
          />
          <Collapse 
            id="6"
            item="Themes and motifs"
            sub={[
              {id: "6.1", title: "Politics and economics"},
              {id: "6.2", title: "Technology"},
              {id: "6.3", title: "Armor"}
            ]}
          />
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Allies"},
              {id: "7.2", title: "Romantic interests"},
              {id: "7.3", title: "Villains"},
              {id: "7.4", title: "Alternate versions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Reception and legacy</a></li>
          <li className="sidebar-list-item"><a href="#9">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Iron Man (Tony Stark)</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man (Tony Stark)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Iron Man</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png" alt="Iron Man" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default IronMan;