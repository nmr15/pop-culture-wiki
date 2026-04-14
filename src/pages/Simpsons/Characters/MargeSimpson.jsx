import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const MargeSimpson = () =>
{
  useEffect(() =>
  {
    document.title = "Marge Simpson - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Role in The Simpsons</a></li>
          <Collapse 
            id="2"
            item="Character"
            sub={[
              {id: "2.1", title: "Creation"},
              {id: "2.2", title: "Design"},
              {id: "2.3", title: "Voice"},
              {id: "2.4", title: "Personality"}
            ]}
          />
          <Collapse 
            id="3"
            item="Biography"
            sub={[
              {id:"3.1", title: "Early life"},
              {id:"3.2", title: "Titles and styles"},
              {id:"3.3", title: "Meeting Homer"},
              {id:"3.4", title: "Marriage"},
              {id:"3.5", title: "Married life"},
              {id:"3.6", title: "Wild escapades"},
              {id:"3.7", title: "Criminal record"},
              {id:"3.8", title: "Jobs"},
              {id:"3.9", title: "Personality"},
              {id:"3.10", title: "Physical appearance"}
            ]}
          />
          <Collapse 
            id="4"
            item="Skills and abilities"
            sub={[
              {id: "4.1", title: "Painting"},
              {id: "4.2", title: "Cooking"},
              {id: "4.3", title: "Strength"},
              {id: "4.4", title: "As mayor"},
              {id: "4.5", title: "Popsicle stick statues"}
            ]}
          />
          <Collapse 
            id="5"
            item="Relationships"
            sub={[
              {id: "5.1", title: "Homer Simpson"},
              {id: "5.2", title: "Bart Simpson"},
              {id: "5.3", title: "Lisa Simpson"},
              {id: "5.4", title: "Maggie Simpson"},
              {id: "5.5", title: "Moe Szylak"},
              {id: "5.6", title: "Nelson Muntz"},
              {id: "5.7", title: "Ned Flanders"},
              {id: "5.8", title: "Friends"}
            ]}
          />
          <Collapse 
            id="6"
            item="Non-canonical appearances"
            sub={[
              {id: "6.1", title: "Treehouse of Horror"},
              {id: "6.2", title: "Future"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Reception</a></li>
          <Collapse 
            id="8"
            item="Cultural influcne"
            sub={[
              {id: "8.1", title: "Merchandising"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/simpsons">The Simpsons</Link></li>
          <li>Marge Simpson</li>
        </ul>
        <div>
          <h1 className="article-heading">Marge Simpson</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Marge Simpson</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png" alt="Marge Simpson" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Julie Kavner</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default MargeSimpson;