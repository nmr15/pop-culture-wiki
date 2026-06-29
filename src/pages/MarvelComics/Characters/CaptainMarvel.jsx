import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const CaptainMarvel = () =>
{
  useEffect(() =>
  {
    document.title = "Captain Marvel (Carol Danvers) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Development</a></li>
          <Collapse 
            id="2"
            item="Publication history"
            sub={[
              {id: "2.1", title: "1960s"},
              {id: "2.2", title: "1970s"},
              {id: "2.3", title: "2980s"},
              {id: "2.4", title: "2990s"},
              {id: "2.5", title: "2000s"},
              {id: "2.6", title: "2020s"},
              {id: "2.7", title: "2020s"}
            ]}
          />
          <Collapse 
            id="3"
            item="Fictional history"
            sub={[
              {id: "3.1", title: "Brave and mighty"},
              {id: "3.2", title: "Air Force"},
              {id: "3.3", title: "Cape Canaveral"},
              {id: "3.4", title: "Ms. Marvel, the Female Fury"},
              {id: "3.5", title: "This woman, this warrior"},
              {id: "3.6", title: "All-New Ms. Marvel"},
              {id: "3.7", title: "Rogue"},
              {id: "3.8", title: "Binary"},
              {id: "3.9", title: "Starjammer"},
              {id: "3.10", title: "Carol Danvers redux"},
              {id: "3.11", title: "Kree/Shi'ar War"},
              {id: "3.12", title: "Warbird"},
              {id: "3.13", title: "Second chances"},
              {id: "3.14", title: "Disassembled"},
              {id: "3.15", title: "Earth's mightiest heroine"},
              {id: "3.16", title: "The Initiative"},
              {id: "3.17", title: "Skrull invasion"},
              {id: "3.18", title: "Outlaw"},
              {id: "3.19", title: "The Legacy of Captain Marvel"},
              {id: "3.20", title: "The enemy within"},
              {id: "3.21", title: "Higher, futher, faster"},
              {id: "3.22", title: "Alpha Flight Space Program"},
              {id: "3.23", title: "Civil War II"},
              {id: "3.24", title: "Alien nation"},
              {id: "3.25", title: "Infinity wars"},
              {id: "3.26", title: "Falling star"},
              {id: "3.27", title: "Accuser"},
              {id: "3.28", title: "Trials"},
              {id: "3.29", title: "Marvelous"}
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
              {id: "5.1", title: "Equipment"},
              {id: "5.2", title: "Weapons"},
              {id: "5.3", title: "Transportation"}
            ]}
          />
          <Collapse 
            id="6"
            item="Cultural impact and legacy"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Fandom"},
              {id: "6.3", title: "Impact"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Other versions</a></li>
          <Collapse 
            id="8"
            item="In other media"
            sub={[
              {id: "8.1", title: "Television"},
              {id: "8.2", title: "Film"},
              {id: "8.3", title: "Marvel Cinematic Universe"},
              {id: "8.4", title: "Video games"},
              {id: "8.5", title: "Motion comics"},
              {id: "8.6", title: "Merchandise"},
              {id: "8.7", title: "Theme parks"},
              {id: "8.8", title: "Miscellaneous"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Captain Marvel (Carol Danvers)</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain Marvel (Carol Danvers)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain Marvel</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Carol_Danvers_-_%28evolution%29.jpg/220px-Carol_Danvers_-_%28evolution%29.jpg" alt="Captain Marvel" />
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
                Roy Thomas (writer) <br />
                Gene Colan (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Carol Susan Jane Danvers</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CaptainMarvel;