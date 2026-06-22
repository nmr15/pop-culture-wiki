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
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Black_Panther_%28T%27Challa%29.png" alt="Black Panther" />
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
                <Link>Stan Lee</Link> <br />
                <Link>Jack Kirby</Link>
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">T'Challa</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Black Panther</b> is a superhero appearing in American comic books published by <Link to="/marvelcomics">Marvel Comics</Link>. Created by
            writer-editor <Link>Stan Lee</Link> and artist <Link>Jack Kirby</Link>, the character first appeared in <Link>Fantastic Four</Link> #52
            (July 1966). Born <b>T'Challa</b>, son of the previous Black Panther <Link to="/marvelcomics/t'chaka">T'Chaka</Link>, he is the king and
            protector of the fictional nation of <Link to="/marvelcomics/wakanda">Wakanda</Link>, a technologically advanced society sustained by
            deposits of the fictional metal <Link to="/marvelcomics/vibranium">vibranium</Link>. Along with enhanced abilities achieved through the
            Wakandan ritual of drinking the essence of the heart-shaped herb, T'Challa relies on his proficiency in science, expertise in his nation's
            traditions, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his
            enemies. The character became a member of the <Link to="/marvelcomics/avengers">Avengers</Link> in 1968, and has continued that affiliation
            off and on in subsequent decades.
          </p>
          <p>
            The storylines of the 1970s written by Don McGregor were critically acclaimed and introduced T'Challa's nemesis
            <Link to="/marvelcomics/erik_killmonger"> Erik Killmonger</Link>. These atories also engage with significant social issues of the time, such
            as the resurgence of the Ku Klux Klan in the U.S. state of Georgia. A subsequent story addressed the issue of apartheid in South Africa. In
            the late 1990s, Christopher Priest re-invented the character and emphasized the importance of Wakanda as an independent and technologically
            advanced African nation. Priest also introduced the <Link to="/marvelcomics/dora_milaje">Dora Milaje</Link>, Black Panther's female
            bodyguards. In subsequent series written by Reginald Hudlin, T'Challa married <Link to="/marvelcomics/storm">Storm</Link> of the
            <Link to="/marvelcomics/x-men"> X-Men</Link>. Hudlin's stories emphasize Black culture pride and achieved greater commercial success. In
            Hudlin's era, the role of Black Panther and leadership of Wakanda was also temprarily given to T'Challa's sister
            <Link to="/marvelcomics/shuri"> Shuri</Link> while he was briefly in a coma. While T'Challa and Storm's marriage was annulled in a
            subsequent storyline, their relationship has continued in other narratives. The Black Panther comics became particularly commercially
            successful in 2016, partly as a result of the literary fame of their writer, the journalist and essayist Ta-Nehisi Coates. The first
            issue of his series was the best-selling comic book of that month. Coates's series call into question the legitimacy of monarchy in
            Wakanda and articulate a more democratic vision.
          </p>
          <p>
            Black Panther is the first Black superhero in American mainstream comics. The character is also an early example of the Afrofuturist
            aesthetic. He has made numerous appearances in various television shows, animated films, and video games.
            <Link> Chadwick Boseman</Link> portrayed <Link to="/mcu/t'challa">T'Challa</Link> in <Link to="/mcu/phase_three">Phase Three</Link>
            of the <Link to="/mcu">Marvel Cinematic Universe</Link>'s films: <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link>,
            <Link to="/mcu/black_panther"> Black Panther</Link>, <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link>,
            and <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>. He also voiced alternate versions of the character in the first season of the
            animated series <Link to="/mcu/what_if">What If...?</Link>, which was released after his death. The Black Panther film was a notable
            critical and popular success. <Link>Letitia Wright</Link>'s character <Link to="/mcu/shuri">Shuri</Link>, who had appeared in previous MCU
            films, took on the Black Panther mantle in <Link to="/mcu/black_panther_wakanda_forever">Black Panther: Wakanda Forever</Link>, following
            Boseman's death in 2020.
          </p>
        </div>
      </main>
    </>
  )
}

export default BlackPanther;