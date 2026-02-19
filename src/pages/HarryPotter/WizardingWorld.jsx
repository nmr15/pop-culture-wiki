import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const WizardingWorld = () =>
{
  useEffect(() =>
  {
    document.title = "Wizarding World - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Harry Potter films"
            sub={[
              {id: "1.1", title: "Harry Potter and the Philospher's Stone (2001)"},
              {id: "1.2", title: "Harry Potter and the Chamber of Secrets (2002)"},
              {id: "1.3", title: "Harry Potter and the Prisoner of Azkaban (2004)"},
              {id: "1.4", title: "Harry Potter and the Goblet of Fire (2005)"},
              {id: "1.5", title: "Harry Potter and the Order of the Phoenix (2007)"},
              {id: "1.6", title: "Harry Potter and the Half-Blood Prince (2009)"},
              {id: "1.7", title: "Harry Potter and the Deathly Hallows – Part 1 (2010)"},
              {id: "1.8", title: "Harry Potter and the Deathly Hallows – Part 2 (2011)"},
              {id: "1.9", title: "Future"}
            ]}
          />
          <Collapse 
            id="2"
            item="Fantastic Beasts films"
            sub={[
              {id: "2.1", title: "Fantastic Beasts and Where to Find Them (2016)"},
              {id: "2.2", title: "Fantastic Beasts: The Crimes of Grindelwald (2018)"},
              {id: "2.3", title: "Fantastic Beasts: The Secrets of Dumbledore (2022)"},
              {id: "2.4", title: "Future"}
            ]}
          />
          <Collapse 
            id="3"
            item="Television"
            sub={[
              {id: "3.1", title: "Future television series"},
              {id: "3.2", title: "Official television shows and specials"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Recurring cast and characters</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Box office performance"},
              {id: "5.2", title: "Critical and public response"},
              {id: "5.3", title: "Accolades", sub2: [
                {id: "5.3.1", title: "Academy Awards"},
                {id: "5.3.2", title: "British Academy Film Awards"},
                {id: "5.3.3", title: "Emmy Awards"},
                {id: "5.3.4", title: "Grammy Awards"},
                {id: "5.3.5", title: "Laurence Olivier Awards"},
                {id: "5.3.6", title: "Tony Awards"}
              ]}
            ]}
          />
          <Collapse 
            id="6"
            item="Other media"
            sub={[
              {id: "6.1", title: "Stage play"},
              {id: "6.2", title: "Digital publication"},
              {id: "6.3", title: "Theme parks"},
              {id: "6.4", title: "Exhibitions and Events", sub2: [
                {id: "6.4.1", title: "Warner Bros. Studio Tours – The Making of Harry Potter"},
                {id: "6.4.2", title: "Harry Potter Shops"},
                {id: "6.4.3", title: "Harry Potter: The Exhibition"},
                {id: "6.4.4", title: "Harry Potter Photographic Exhibition"},
                {id: "6.4.5", title: "History of Magic Exhibition"},
                {id: "6.4.6", title: "Fantastic Beasts: The Wonder of Nature Exhibition"},
                {id: "6.4.7", title: "Harry Potter Film Concert Series"},
                {id: "6.4.8", title: "Forbidden Forest Experience"},
                {id: "6.4.9", title: "Harry Potter Land, Warner Bros World Abu Dhabi"}
              ]},
              {id: "6.5", title: "Books"},
              {id: "6.6", title: "Video games"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Wizarding World</li>
        </ul>
        <div>
          <h1 className="article-heading">Wizarding World</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Wizarding World</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Wizarding_World_logo.svg/500px-Wizarding_World_logo.svg.png" alt="Wizarding World" />
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

export default WizardingWorld;