import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CloneWarsFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Star Wars: The Clone Wars (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening narration</a></li>
          <li className="sidebar-list-item"><a href="#2">Plot</a></li>
          <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Animation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Marketing"
            sub={[
              {id: "6.1", title: "Merchandise"},
              {id: "6.2", title: "Food partnership"},
              {id: "6.3", title: "Print media"},
              {id: "6.4", title: "Video games"},
              {id: "6.5", title: "Portable media players"},
              {id: "6.6", title: "Racing sponsorship"},
              {id: "6.7", title: "Novelization"}
            ]}
          />
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "Theatrical"},
              {id: "7.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Box office"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Accolades</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Star Wars: The Clone Wars (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Star Wars: The Clone Wars (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars: The Clone Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg" alt="Star Wars: The Clone Wars poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Dave Filoni</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Star Wars: The Clone Wars</b> is a 2008 American animated space opera film directed by <Link>Dave Filoni</Link> and produced by
            Lucasfilm Animation. The voice cast includes <Link>Matt Lanter</Link>, <Link>Ashley Eckstein</Link>, <Link>James Arnold Taylor</Link>,
            <Link> Dee Bradley Baker</Link>, <Link>Tom Kane</Link>, Catherine Taber, Nika Futterman, Ian Abercrombie, Corey Burton, Matthew Woods,
            <Link> Kevin Michael Richardson</Link>, David Acord, <Link>Samuel L. Jackson</Link>, <Link>Anthony Daniels</Link>, and
            <Link>Christopher Lee</Link>. It is the first animated film in the <Link to="/starwars">Star Wars</Link> franchise and takes place shortly
            after <Link to="/starwars/attack_of_the_clones">Attack of the Clones</Link> (2002), at the start of the <Link>Clone Wars</Link>. In the film,
            <Link to="/starwars/count_dooku"> Count Dooku</Link> and <Link to="/starwars/jabba_the_hutt">Jabba the Hutt</Link>'s uncle Ziro orchestrate a
            plan to turn Jabba against the <Link>Galactic Republic</Link> by framing the <Link>Jedi</Link> for the kidnapping of his son. While
            <Link to="/starwars/anakin_skywalker"> Anakin Skywalker</Link> and his newly assigned apprentice
            <Link to="/starwars/ahsoka_tano"> Ahsoka Tano</Link> attempt to deliver the child back to his father,
            <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link> and <Link to="/starwars/padmé_amidala">Padmé Amidala</Link> lead separate
            investigations to uncover Dooku and Ziro's plot.
          </p>
          <p>
            The Clone Wars premiered on August 10, 2008, at Grauman's Egyptian Theatre, and was released in the United States on August 15, by Warner
            Bros. Pictures. It received generally negative reviews from critics, and grossed $68 million on a budget of $8 million. The film serves as a
            pilot to <Link to="/starwars/the_clone_wars_series">the 2008 television series</Link>, which premiered two months after the film's release.
            It was the final film in the franchise with the involvement of <Link>George Lucas</Link>, who sold <Link>Lucasfilm</Link> to The Walt Disney
            Company four years later.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Opening narration"} />
          <div>
            <div className="article-quote">
              <p>
                A galaxy divided! Striking swiftly after the Battle of Geonosis, Count Dooku's droid army has seized control of the major hyperspace
                lanes, separating the Republic from the majority of its clone army. With few clones available, the Jedi generals cannot gain a foothold
                on the Outer Rim as more and more planets choose to join Dooku's Separatists. While the Jedi are occupied fighting a war, no one is left
                to keep the peace. Chaos and crime spread, and the innocent become victims in a lawless galaxy. Crime lord Jabba the Hutt's son has been
                kidnapped by a rival band of pirates. Desparate to save his son, Jabba puts out a call for help-a call the Jedi are cautious to answer...
              </p>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Voice cast"} />
          <div>
            <div className="article-list">
              <ul>
                <li>
                  <Link>Matt Lanter</Link> as <Link to="/starwars/anakin_skywalker">Anakin Skywalker</Link>, a former Jedi Padawan who has recently been
                  promoted to the rank of Jedi Knight, and a general in the Republic's army, who leads the 501st Legion. <Link>Hayden Christensen</Link>
                  was considered to reprise his role as Anakin from the prequel trilogy before Lanter was selected. Lanter replaces Mat Lucas, who voiced
                  the character in the 2003 micro-series, Star Wars: Clone Wars.
                </li>
                <li>
                  <Link>Ashley Eckstein</Link> as <Link to="/starwars/ahsoka_tano">Ahsoka Tano</Link>, Anakin's new Padawan apprentice and commander of
                  the 501st Legion.
                </li>
                <li>
                  <Link>James Arnold Taylor</Link> as <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link>, a Jedi Master, Anakin's mentor, and
                  general of the Republic, who leads the 212th Attack Battalion. <Link>Ewan McGregor</Link> was considered to reprise his role as
                  Obi-Wan from the prequel trilogy before Taylor was selected. Taylor reprises his role from the Clone Wars micro-series.
                  <ul>
                    <li>Taylor also voices 4A-7, a droid spy.</li>
                  </ul>
                </li>
                <li>
                  <Link>Dee Bradley Baker</Link> as the <Link>clone troopers</Link>, <Link to="/starwars/captain_rex">Captain Rex</Link>, and
                  <Link> Commander Cody</Link>, Baker replaces André Sogliuzzo, who voice the characters in the Clone Wars micro-series.
                </li>
                <li>
                  <Link>Tom Kane</Link> as:
                  <ul>
                    <li>
                      <Link to="/starwars/yoda">Yoda</Link>, the Jedi Grandmaster and leader of the Jedi Council. <Link>Frank Oz</Link> was considered to
                      reprise his role as Yoda from the prequel and original trilogies before Kane was selected. Kane reprises his role from the Clone Wars
                      micro-series.
                    </li>
                    <li>
                      The Narrator, who explains the film's events and plot.
                    </li>
                    <li>
                      <Link>Admiral Yularan</Link>, an admiral of the Republic Navy assigned to Anakin.
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Nika Futterman</Link> as:
                  <ul>
                    <li>
                      <Link to="/starwars/asajj_ventress">Asajj Ventress</Link>, a Sith assassin, a former Jedi and Count Dooku's disciple. Futterman
                      replaces <Link>Grey DeLisle</Link>, who voiced the character in the Clone Wars micro-series.
                    </li>
                    <li>
                      TC-70, Jabba's protocol droid.
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Ian Abercrombie</Link> as <Link to="/starwars/sheev_palpatine">Chancellor Palpatine / Darth Sidious</Link>, the Supreme Chancellor
                  of the Galactic Republic who is secretly a powerful Sith Lord in disguise, Count Dooku's master, and the mastermind behind the Clone
                  Wars. <Link>Ian McDiarmid</Link> was considered to reprise his role as Palpatine from the prequel and original trilogies before
                  Abercrombie was selected. Abercrombie replaces Nick Jameson, who voiced the character in the Clone Wars micro-series.
                </li>
                <li>
                  Corey Burton as:
                  <ul>
                    <li>
                      Ziro the Hutt, Jabba's uncle and a member of the <Link>Hutt Clan</Link> who is secretly in cahoots with Count Dooku and the
                      Separatists.
                    </li>
                    <li>
                      Whorm Loathsom, the commander of the Separatist Droid Army occupying Christophsis.
                    </li>
                    <li>
                      KRONOS-327, an assassin droid working for Ziro.
                    </li>
                  </ul>
                </li>
                <li>
                  Catherine Taber as <Link to="/starwars/padmé_amidala">Padmé Amidala</Link>, the queen and senator of <Link>Naboo</Link> and Anakin's
                  wife. <Link>Natlie Portman</Link> was considered to reprise her role as Padmé from the prequel trilogy before Taber was selected. Taber
                  replaces Grey DeLisle, who voiced the character in the Clone Wars micro-series
                </li>
                <li>
                  Matthew Wood as the <Link>battle droids</Link>.
                </li>
                <li>
                  <Link>Kevin Michael Richardson</Link> as <Link to="/starwars/jabba_the_hutt">Jabba the Hutt</Link>, a powerful and notorious crime lord,
                  the leader of the powerful Hutt Clan, and Rotta's father.
                </li>
                <li>
                  David Acord as Rotta the Huttlet, Jabba's son.
                </li>
                <li>
                  <Link>Samuel L. Jackson</Link> as <Link to="/starwars/mace_windu">Mace Windu</Link>, a Jedi Master, senior member of the Jedi
                  Council, and general of the Republic. Jackson reprises his role from the prequel trilogy. The character is voiced by Terrence C.
                  Carson in the subsequent television series, reprising his role from the Clone Wars micro-series.
                </li>
                <li>
                  <Link>Anthony Daniels</Link> as <Link to="/starwars/c3po">C-3PO</Link>, Anakin's protocol droid. Daniels reprises his role from the
                  live-action films and also voices C-3PO in other media.
                </li>
                <li>
                  <Link>Christopher Lee</Link> as <Link to="/starwars/count_dooku">Count Dooku / Darth Tyrannus</Link>, a Sith Lord and the puppet
                  leader of the Separatist Alliance. Lee reprises his role from the prequel trilogy and for the last time before his death in 2015. The
                  character is voiced by Corey Burton in the subsequent television series, reprising his role from the Clone Wars micro-series.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dave_Filoni.jpg/500px-Dave_Filoni.jpg" alt="Dave Filoni" />
              <p>Director Dave Filoni</p>
            </div>
            <p>
              Star Wars: The Clone Wars was made to serve as both a stand-alone story and a lead-in to the weekly animated TV series of the same name.
              George Lucas had the idea for a film after viewing some of the completed footage of the early episodes on the big screen. Those first few
              episodes, originally planned for release on television, were then woven together to form the theatrical release. Warner Bros.
              Entertainment had tracked the series' development from the beginning, and Lucas decided on a theatrical launch after viewing early footage
              declaring "This is so beautiful, why don't we just go and use the crew and make a feature?" This decision help convince WB parent company
              Time Warner to distribute the movie, and to encourage its subsidiary <Link>Cartoon Network</Link> to air the series. Lucas described the
              film as "almost an afterthought." Howard Roffman, president of Lucas Licensing, said of the decision, "Somtimes George works in strange
              ways." Producer Catherine Winder said the sudden decision added to an already large challenge of establishing a show "of this
              sophistication and complexity," but she felt it was a good way to start the series, and thought budgetary constraints forced the
              production team to think outside the box in a positive way.
            </p>
            <p>
              The story of the kidnapped Hutt was inspired by the Sonny Chiba samurai film Shogun's Shadow.
            </p>
            <p>
              Actors Sameul L. Jackson, Christopher Lee, Anthony Daniels, and Matthew Wood vocally reprised their respective roles as Mace Windu, Count
              Dooku, C-3PO, and the B1 Battle Droid. However, Jackson and Lee did not reprise their roles in the television series.
            </p>

            <h3 className="article-heading-3" id="4.2">Animation</h3>
          </div>
        </div><div>
          <Heading2 id={5} title={"Nusic"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Merchandise</h3>
            <h3 className="article-heading-3" id="6.2">Food partnership</h3>
            <h3 className="article-heading-3" id="6.3">Print media</h3>
            <h3 className="article-heading-3" id="6.4">Video games</h3>
            <h3 className="article-heading-3" id="6.5">Portable media players</h3>
            <h3 className="article-heading-3" id="6.6">Racing sponsorship</h3>
            <h3 className="article-heading-3" id="6.7">Novelization</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Theatrical</h3>
            <h3 className="article-heading-3" id="7.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>
            <h3 className="article-heading-3" id="8.2">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Accolades"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CloneWarsFilm;