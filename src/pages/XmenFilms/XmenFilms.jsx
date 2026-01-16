import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const XmenFilms = () =>
{
  useEffect(() =>
  {
    document.title = "X-Men (film series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Films"
            sub={[
              {id: "1.1", title: "X-Men original trilogy", sub2: [
                {id: "1.1.1", title: "X-Men (2000)"},
                {id: "1.1.2", title: "X2 (2003)"},
                {id: "1.1.3", title: "X-Men: The Last Stand (2006)"}
              ]},
              {id: "1.2", title: "Wolverine trilogy", sub2: [
                {id: "1.2.1", title: "X-Men Origins: Wolverine (2009)"},
                {id: "1.2.2", title: "The Wolverine (2013)"},
                {id: "1.2.3", title: "Logan (2017)"}
              ]},
              {id: "1.3", title: "X-Men prequel films", sub2: [
                {id: "1.3.1", title: "X-Men: First Class (2011)"},
                {id: "1.3.2", title: "X-Men: Days of Future Past (2014)"},
                {id: "1.3.3", title: "X-Men: Apocalypse (2016)"},
                {id: "1.3.4", title: "Dark Phoneix (2019)"}
              ]},
              {id: "1.4", title: "Deadpool films", sub2: [
                {id: "1.4.1", title: "Deadpool (2016)"},
                {id: "1.4.2", title: "Deadpool (2018)"},
                {id: "1.4.3", title: "Deadpool & Wolverine (2024)"}
              ]},
              {id: "1.5", title: "Spin-off", sub2: [
                {id: "1.5.1", title: "The New Mutants (2020)"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Timeline</a></li>
          <li className="sidebar-list-item"><a href="#3">Recurring characters</a></li>
          <Collapse 
            id="4"
            item="Reception"
            sub={[
              {id: "4.1", title: "Box office performance"},
              {id: "4.2", title: "Critical response"},
              {id: "4.3", title: "Legacy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Canceled or reworked projects</a></li>
          <Collapse 
            id="6"
            item="Marvel Cinematic Universe"
            sub={[
              {id: "6.1", title: "WandaVision (2021)"},
              {id: "6.2", title: "Doctor Strange in the Multiverse of Madness (2022)"},
              {id: "6.3", title: "The Marvels (2023)"},
              {id: "6.4", title: "Deadpool & Wolverine (2024)"},
              {id: "6.5", title: "Avengers: Doomsday (2026)"},
              {id: "6.6", title: "Reboot"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>X-Men (film series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Template</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>X-Men</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_X-Men_films.svg/500px-Logo_X-Men_films.svg.png" alt="X-Men film series logo" />
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

export default XmenFilms;