import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AlexeiShostakov = () =>
{
  useEffect(() =>
  {
    document.title = "Alexei Shostakov (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Childhood in Soviet Russia"}
              ]},
              {id: "1.2", title: "Russian agent", sub2: [
                {id: "1.2.1", title: "Becoming a super soldier"},
                {id: "1.2.2", title: "Undercover in America"},
                {id: "1.2.3", title: "Family separation"},
                {id: "1.2.4", title: "Betrayal and imprisonment"}
              ]},
              {id: "1.3", title: "Family reunion", sub2: [
                {id: "1.3.1", title: "Escape from prison"},
                {id: "1.3.2", title: "Visiting Melina Vostokoff"},
                {id: "1.3.3", title: "Showdown at the Red Room"},
                {id: "1.3.4", title: "Family split apart"}
              ]},
              {id: "1.4", title: "Search for glory", sub2: [
                {id: "1.4.1", title: "Living in America"},
                {id: "1.4.2", title: "Yelena Bolova's visit"},
                {id: "1.4.3", title: "Helping the Thunderbolts"},
                {id: "1.4.4", title: "Fighting Sentry"},
                {id: "1.4.5", title: "Confronting his daughter"},
                {id: "1.4.6", title: "Stopping the Void"},
                {id: "1.4.7", title: "Member of the New Avengers"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", ttle: "Powers"},
              {id: "3.2", ttle: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Weapons"},
              {id: "4.2", title: "Other equipment"},
              {id: "4.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="5"
            item="Facilities"
            sub={[
              {id: "5.1", title: "Prisons"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#76">Behind the scenes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Alexei Shostakov (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Alexei Shostakov (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Alexei Shostakov</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a0/Red_Guardian_Infobox.jpg" alt="Alexei Shostakov" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>David Harbour</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/black_widow_film">Eternals</Link> <br />
                <Link to="/mcu/thunderbolts">Thunderbolts</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early life</h3>
            <h4 className="article-heading-4" id="1.1.1">Childhood in Soviet Russia</h4>

            <h3 className="article-heading-3" id="1.2">Russian agent</h3>
            <h4 className="article-heading-4" id="1.2.1">Becoming a super soldier</h4>

            <h4 className="article-heading-4" id="1.2.2">Undercover in America</h4>

            <h4 className="article-heading-4" id="1.2.3">Family separation</h4>

            <h4 className="article-heading-4" id="1.2.4">Betrayal and imprisonment</h4>

            <h3 className="article-heading-3" id="1.3">Family reunion</h3>
            <h4 className="article-heading-4" id="1.3.1">Escape from prison</h4>

            <h4 className="article-heading-4" id="1.3.2">Visiting Melina Vostokoff</h4>

            <h4 className="article-heading-4" id="1.3.3">Showdown at the Red Room</h4>

            <h4 className="article-heading-4" id="1.3.4">Family split apart</h4>

            <h3 className="article-heading-3" id="1.4">Search for glory</h3>
            <h4 className="article-heading-4" id="1.4.1">Living in America</h4>

            <h4 className="article-heading-4" id="1.4.2">Yelena Bolova's visit</h4>

            <h4 className="article-heading-4" id="1.4.3">Helping the Thunderbolts</h4>

            <h4 className="article-heading-4" id="1.4.4">Fighting Sentry</h4>

            <h4 className="article-heading-4" id="1.4.5">Confronting his daughter</h4>

            <h4 className="article-heading-4" id="1.4.6">Stopping the Void</h4>
            
            <h4 className="article-heading-4" id="1.4.7">Member of the New Avengers</h4>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Personality"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Powers and abilities"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Powers</h3>

            <h3 className="article-heading-3" id="3.2">Abilities</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Equipment"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Weapons</h3>

            <h3 className="article-heading-3" id="4.2">Other equipment</h3>

            <h3 className="article-heading-3" id="4.3">Vehicles</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Facilities"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Prisons</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Trivia"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Behind the scenes"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AlexeiShostakov;