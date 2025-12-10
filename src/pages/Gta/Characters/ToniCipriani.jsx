import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const ToniCipriani = () =>
{
  useEffect(() =>
  {
    document.title = "Toni Cipriani - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Background"},
              {id: "1.2", title: "Events of Grand Theft Auto: Liberty City Stories"},
              {id: "1.3", title: "Events of Grand Theft Auto III"}
            ]}
          />
          <Collapse 
            id="2"
            item="Character"
            sub={[
              {id: "2.1", title: "Personality"},
              {id: "2.2", title: "Appearance"},
              {id: "2.3", title: "Influence"},
              {id: "2.4", title: "Murders commited by Toni Cipriani"}
            ]}
          />
          <Collapse 
            id="3"
            item="Prominent appearances in gameplay"
            sub={[
              {id: "3.1", title: "Grand Theft Auto III"},
              {id: "3.2", title: "Grand Theft Auto: Liberty City Stories"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Trivia</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Toni Cipriani</li>
        </ul>
        <div>
          <h1 className="article-heading">Toni Cipriani</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2" className="infobox-heading">
                <span>Toni Cipriani</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/gtawiki/images/7/7c/ToniCipriani-GTALCS.png" alt="Toni Cipriani GTA Liberty City Stories" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appears in</th>
              <td className="infobox-data">
                <Link to="/gta/grand_theft_auto_iii">Grand Theft Auto III</Link> <br />
                <Link to="/gta/grand_theft_auto_liberty_city_stories">Grand Theft Auto: Liberty City Stories</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                Michael Madsen (GTA III) <br />
                Danny Mastrogiorgo (GTA Liberty City Stories)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Antonio "Toni" Cipriani</b> is a main character in <Link to="/gta/grand_theft_auto_iii">Grand Theft Auto III</Link> and the protagonist of
            <Link to="/gta/grand_theft_auto_liberty_city_stories"> Grand Theft Auto: Liberty City Stories</Link>.
          </p>
          <p>
            He is voiced by the late Michael Madsen in GTA III and Danny Mastrogiorgo in GTA Liberty City Stories.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"History"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Background</h3>
            <p>
              Toni is a member of the <Link>Leone Crime Family</Link> in <Link>Liberty City</Link>, who was forced to live abroad for four years
              following his murder of a <Link>made man</Link> from a rival Mafia family under the orders of his boss, <Link>Salvatore Leone</Link>.
              Upon his return in 1998, he resumes work for the family, helping it increase its influence and eliminate its rivals, primarily the
              <Link> Sindacco</Link> and the <Link>Forelli Crime Families</Link>. As a result, the Leone Crime Family becomes the dominant Mafia
              organization in the city, and Toni earns Salvatore's trust and respect, becoming a Capo within the family.
            </p>
            <p>
              Two of Toni's defining attributes are his underlying loyalty to Salvatore and his complicated relationship with his mother,
              <Link> Mrs. Cipriani</Link>. The latter is often heard berating Toni due to her discontent with him and what she perceives as his failure
              to live up to his <Link>late father</Link>'s legacy, though at times she has also been shown to praise her son and be kind to him.
            </p>
            <p>
              Toni Cipriani was born to Mrs. Cipriani and an unnamed father, who was a member of one of the city's mafia families. He lived with his Ma
              in their <Link>restaurant</Link> in <Link>Saint Mark's</Link>. At some point, Toni's father died, and since that day (or possibly even
              earlier) his Ma has been putting a lot of pressure on Toni, berating him and arguing with him over the smallest things, because she
              believes he would never live up to his father's legacy. Tonu later became involved in Liberty City's criminal underworld, joining the
              Leone Crime Family to follow in his late father's footsteps and prove his Ma wrong.
            </p>
            <h3 className="article-heading-3" id="1.2">Events of Grand Theft Auto: Liberty City Stories</h3>
            <p>
              In Grand Theft Auto: Liberty City Stories, Toni Cipriani assumes the role of the playable character and main protagonist of the game. The
              game explores Toni's history and exploits three years prior to the events in Grand Theft Auto III.
            </p>
            <p>
              Toni left Liberty City and decided to lay low abroad after killing a rival made man (presumeably a member of the Forelli or Sindacco family)
              under orders from Salvatore Leone. He finally returns to the city years later, in 1998, ready to continue his life of organized crime. A
              grateful Salvatore Leone gives Toni jobs, but because he was out of town for so many years, other members of the Leone Crime Family have had
              the time to move up in the hierarchy. Salvatore was forced to strip Toni out of his ranks and give the position to
              <Link> Vincenzo Cilli</Link> during his leave of absence. Toni now finds himself a low-ranking goon that has to once again gain favor with
              the Don, in order to secure a leadership position in the family. Toni and Vincenzo immediately dislike each other, which ends up in Toni
              <Link> killing Vincenzo</Link> after his <Link>earlier betrayal</Link>.
            </p>
            <p>
              Later on, Toni finds himself looking after Salvatore's wife <Link>Maria Latore</Link>, who develops unrequited feelings for Toni and has
              him do her bidding. However, after learning Toni "has no money", she cuts ties with Toni, reminding him that she is
              <Link>Salvatore's girl and not to hit on her</Link>. Much of Toni's efforts in achieving his goal of reclaiming his place in the Leone
              hierarchy include battling two rival Mafia families, the Forellis and the Sindaccos via several means, allowing him to be "made" halfway
              through the storyline after <Link>killing the Liberty City mayor</Link>, <Link>Roger C. Hole</Link>, on Salvatore's orders. This is enough
              to impress his Ma, who calls off <Link>a hit she put on her son earlier</Link> and speaks kindly to him for the first time in the game,
              though she would eventually return to berating Toni by the time of Grand Theft Auto III.
            </p>
            <p>
              Following this, Toni works for media mogul and mayoral candidae <Link>Donald Love</Link> on Salvaore's behalf, protecting him from the
              Forellis' attempts to sabotage his campaign. Despire Toni's efforts, however. Love <Link>loses the race due to his connections to
              organized crime</Link>, and the Forellis' puppet <Link>Miles O'Donovan</Link>, is installed mayor. O'Donovan promptly has Salvatore
              arresed on several crime charges, but Toni remains loyal to his boss and continues to accept jobs from him in prison, where he poses as
              Salvatore's lawyer. One of these jobs involves <Link>killing</Link> the Don of the Sindacco Crime Family, <Link>Paulie Sindacco</Link>,
              ending the war with the Sindaccos, who are severly weakened and forced to leave Liberty City for good.
            </p>
            <p>
              Not long after, Donald Love, who went bankrupt after his ties to the Leone Crime Family were discovered, comes up with a plan to regain his
              fortune and hires Toni to help him act on it. The two <Link>murder</Link> real estate businessman and Love's former mentor,
              <Link>Avery Carrington</Link>, and steal his re-development plans for <Link>Fort Staunton</Link>, Toni <Link>subsequently destroys
              Fort Staunton</Link> with explosives supplied by <Link>8-Ball</Link>, allowing Love's company to receive city funding to rebuild it, and
              also dealing a major blow to the Forelli Crime Family in the process, as the neighborhood was controlled by them. Later, when Donald finds
              himself targeted by the <Link>Colombian Cartel</Link>, he <Link>enlists Toni's help</Link> to flee the city with the corpses of Avery
              Carrington and <Link>Ned Burner</Link>. During this time, Toni also finds himself taking jobs from <Link>Toshiko Kasen</Link>, the
              neglected wife of <Link>Yakuza</Link> leader <Link>Kazuki</Link>, who wants to sabotage the Yakuza's operations to punish her husband,
              culminating in Toni <Link>killing Kazuki in a duel</Link> and a guilt-ridden Toshiko committing suicide not long after.
            </p>
            <p>
              Salvatore is eventually released from jail, after being <Link>escorted to the courthouse by Toni</Link>, due to the <Link>Sicilian
              Mafia</Link> wanting Salvatore dead. Following his release, Salvatore realizes that the Sicilian Mafia is to blame for most of his recent
              problems, and enlists Toni's help to rescue Mayor O'Donovan, who was kidnapped by Sicilian underboss <Link>Massimo Torini</Link> to prevent
              him from dropping the charges against Salvatore. Toni and Salvatore <Link>kill Torini and rescue the Mayor</Link> from <Link>Portland
              Rock</Link>, whereupon Salvatore tells O'Donovan that he is now in the Leone Crime Family's debt and to ensure its protection. Afterwards,
              Salvatore reveals that Torini was working for <Link>his uncle</Link>, who wanted to weaken his nephew's control over Liberty City as revenge
              for not paying him tribute. After meeting with Uncle Leone to secure peace between the Leone Crime Family and the Sicilian Mafia, Toni has
              finally earned Salvatore's trust and respect.
            </p>
            <h3 className="article-heading-3" id="1.3">Events of Grand Theft Auto III</h3>
            <p>
              By 2001, Toni has become one of the highest-ranking members of the Leone Crime Family. The <Link>police</Link> has attempted to connect
              Toni and Salvatore throughout 2001; however, they fail to link them beyond his Ma's restaurant. Salvatore's son, <Link>Joey</Link>,
              <Link> introduces</Link> the game's protagonist, <Link to="/gta/claude">Claude</Link>, to Toni, whereupon the latter hires Claude to perform
              several attacks on the <Link>Triads</Link>, who the Leones are currently engaged in a war with. The jobs Claude perform for Toni include
              <Link> collecting protection money</Link> from <Link>Mr. Wong's Laundromatte</Link>, <Link>killing three Triad warlords</Link>, and
              <Link> destroying the Triad-owned fish factory</Link> in <Link>Callahan Point</Link>. Toni also <Link>introduces</Link> Claude to Salvatore
              Leone.
            </p>
            <p>
              In 2001, Toni is still living with his Ma and is frequently seen in his family-run restaurant, from where he provides Claude with jobs. The
              constant insulting from his Ma about him not being able to be like his father and failing to meet up to her expectations had forced him to
              call the local chat radio station, <Link>Chatterbox FM</Link>, and complain about his Ma's constant berating. His standing in the Leone
              Crime Family following Salvatore Leone's <Link>assassination</Link> is unkown.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Character"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Personality</h3>
            <h3 className="article-heading-3" id="2.2">Appearance</h3>
            <h3 className="article-heading-3" id="2.3">Influence</h3>
            <h3 className="article-heading-3" id="2.4">Murders commited by Toni Cipriani</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Prominent appearances in gameplay"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Grand Theft Auto III</h3>
            <h3 className="article-heading-3" id="3.2">Grand Theft Auto: Liberty City Stories</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Trivia"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default ToniCipriani;