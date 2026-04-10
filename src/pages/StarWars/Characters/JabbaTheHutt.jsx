import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const JabbaTheHutt = () =>
{
  useEffect(() =>
  {
    document.title = "Jabba the Hutt - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Creation and portrayal"
            sub={[
              {id: "1.1", title: "Star Wars"},
              {id: "1.2", title: "Return of the Jedi"},
              {id: "1.3", title: "A New Hope - 1997 Special Edition"}
            ]}
          />
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Tatooine crime lord"},
              {id: "2.2", title: "The High Republic", sub2: [
                {id: "2.2.1", title: "The Hynestian Treaty"}
              ]},
              {id: "2.3", title: "Later years of the Republic"},
              {id: "2.4", title: "Age of the Empire"},
              {id: "2.5", title: "Legacy"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Jabba the Hutt</li>
        </ul>
        <div>
          <h1 className="article-heading">Jabba the Hutt</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Jabba the Hutt</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/f/fe/Jabba_MMSWCA.png" alt="Jabba the Hutt" />
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
          <p>
            <b>Jabba Desilijic Tiure</b>, more commonly referred to as <b>Jabba the Hutt</b> or simply <b>Jabba</b>, and formally styled as <b>His Excellency
            Jabba Desilijic Tiure of Nal Hutta, Eminence of Tatoonie</b>, was a <Link>Hutt</Link> male gangster and crime lord, as well as a leading member of the
            Grand Hutt Council and influential leader of the Hutt Clan, who operated and led a criminal empire from his palace on the <Link>Outer Rim</Link> world of
            <Link> Tatooine</Link>. Jabba was a major figure on Tatooine, where he controlled the bulk of the piracy, slavery, and trafficking in illegal goods that
            generated most of the planet's wealth. He was also highly influential in the entire Outer Rim as one of the most powerful crime lords.
          </p>
          <p>
            During the <Link>Clone Wars</Link>, Jabba's influence and power over the Outer Rim, specifically its hyperlanes, was sought by both the
            <Link> Galactic Republic</Link> and the <Link>Confederacy of Independent Systems</Link>, who both courted Jabba's approval. When Rotta, Jabba's son, was
            kidnapped, the crime lord promised his support to whoever returned his son. When the Separatists were revealed to have orchestrated Rotta's kidnapping,
            Jabba pledged his support to the Republic.
          </p>
          <p>
            Jabba continued to operate in the Outer Rim after the end of the Clone Wars and the rise of the <Link>Galactic Empire</Link>, preserving his power base,
            despite the interference of <Link to="/starwars/sheev_palpatine">Darth Sidious</Link>, the Galactic Empire. After the destruction of the <Link>Death
            Star</Link> by the <Link>Rebel Alliance</Link>, the Emperor sent <Link to="/starwars/anakin_skywalker">Darth Vader</Link> to negotiate a deal with Jabba
            to secure raw materials for Imperial military production. Jabba's alliance with the Empire allowed him and the Hutts to resist the Imperial crackdown
            against criminal elements in the Outer Rim, as well as rid the Hutt of his competitors.
          </p>
          <p>
            After the smuggler <Link to="/starwars/han_solo">Han Solo</Link> failed to repay him for lost cargo, Jabba placed a high price on his head. Solo was
            eventually delivered to him by one of his bounty hunters, <Link to="/starwars/boba_fett">Boba Fett</Link>, as a gift from Darth Vader. However, this
            capture brought him to the attention of <Link>Jedi Knight</Link> <Link to="/starwars/luke_skywalker">Luke Skywalker</Link>, who sought to rescue his
            friend from Jabba's imprisonment. As he attempted to execute the Jedi and his allies in the Great Pit of Carkoon, Jabba was choked to death by
            <Link to="/starwars/leia_organa">Leia Organa</Link>. With the Hutts unable to decidewho wuld inherit Jabba's criminal ventures, many of his slaves,
            including Niktos, were free, and his palace was occupied by his former Majordomo Bib Fortuna, who took his palace as Daimyo of Tatooine until Fett
            killed and usurped him. Fett sought to rebuild Jabba's criminal empire in his own image, intending to rule with respect rather than the fear that the
            Hutt instilled in his followers.
          </p>
        </div>
      </main>
    </>
  )
}

export default JabbaTheHutt;