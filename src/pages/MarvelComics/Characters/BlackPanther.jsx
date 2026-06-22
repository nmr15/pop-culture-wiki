import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const BlackPanther = () =>
{
  useEffect(() =>
  {
    document.title = "Black Panther (T'Challa) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Artistic conception"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Predecessors"}
            ]}
          />
          <Collapse 
            id="2"
            item="Publication history"
            sub={[
              {id: "2.1", title: "Early years: 1960s and early 1970s"},
              {id: "2.2", title: "1970s and 1980s"},
              {id: "2.3", title: "1990s"},
              {id: "2.4", title: "2000s"},
              {id: "2.5", title: "2010s"},
              {id: "2.6", title: "2020s"},
            ]}
          />
          <Collapse 
            id="3"
            item="Fictional history"
            sub={[
              {id: "3.1", title: "Early life"},
              {id: "3.2", title: "Return to Wakanda"},
              {id: "3.3", title: "Meeting the Fantastic Four"},
              {id: "3.4", title: "Joining the Avengers"},
              {id: "3.5", title: "Confronting the Man-Ape"},
              {id: "3.6", title: "The Sons of the Serpent"},
              {id: "3.7", title: "The Thunderbolts Gang"},
              {id: "3.8", title: "Doctor Doom"},
              {id: "3.9", title: "The Lion God"},
              {id: "3.10", title: "Threats to Wakanda"},
              {id: "3.11", title: "The Island of No Return"},
              {id: "3.12", title: "The THROB and Kristoff Vernard"},
              {id: "3.13", title: "Captain America's vibranium shield"},
              {id: "3.14", title: "Rescuing Ramonda and joining the Pendragons"},
              {id: "3.15", title: "The threats of Achebe and Nakia"},
              {id: "3.16", title: "Losing the Black Panther title"},
              {id: "3.17", title: "The future Black Panther"},
              {id: "3.18", title: "The Black Dragon"},
              {id: "3.19", title: "The downfall of XCon"},
              {id: "3.20", title: "The death of the future Black Panther"},
              {id: "3.21", title: "Renewed strength"},
              {id: "3.22", title: "Avengers Disassembled"},
              {id: "3.23", title: "The Invasion of Wakanda"},
              {id: "3.24", title: "Marriage"},
              {id: "3.25", title: "World Tour/Civil War"},
              {id: "3.26", title: "Joining the Fantastic Four"},
              {id: "3.27", title: "Back to Wakanda and the Skrull invasion"},
              {id: "3.28", title: "Shuri, the new Black Panther"},
              {id: "3.29", title: "Doomwar"},
              {id: "3.30", title: "The Man Without Fear"},
              {id: "3.31", title: "The King of the Dead"},
              {id: "3.32", title: "Avengers vs. X-Men"},
              {id: "3.33", title: "Joining the Illuminati"},
              {id: "3.34", title: "Infinity"},
              {id: "3.35", title: "The Incursion of Earth-4290001"},
              {id: "3.36", title: "Time Runs Out"},
              {id: "3.37", title: "Secret Wars"},
              {id: "3.38", title: "A Nation Under our Feet"},
              {id: "3.39", title: "The Intergalactic Empire of Wakanda"},
              {id: "3.40", title: "A King No More"},
              {id: "3.41", title: "Vigilante"},
              {id: "3.42", title: "Imperial"}
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
            item="Themes and motifs"
            sub={[
              {id: "6.1", title: "Racism and Black pride"},
              {id: "6.2", title: "Colonialism and decolonization"},
              {id: "6.3", title: "Challenges and transformation of the human body"}
            ]}
          />
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Allies"},
              {id: "7.2", title: "Other Black Panthers"},
              {id: "7.3", title: "Romantic interests"},
              {id: "7.4", title: "Villains"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Cultural impact and legacy</a></li>
          <li className="sidebar-list-item"><a href="#9">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Black Panther (T'Challa)</li>
        </ul>
        <div>
          <h1 className="article-heading">Black Panther (T'Challa)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Black Panther</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Black_Panther_OS_Vol_1_2.png/220px-Black_Panther_OS_Vol_1_2.png" alt="Black Panther" />
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

export default BlackPanther;