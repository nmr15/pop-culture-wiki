import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const IronMan = () =>
{
  useEffect(() =>
  {
    document.title = "Iron Man (Tony Stark) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Publication history"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Early years"},
              {id: "1.3", title: "1970s"},
              {id: "1.4", title: "1980s and 1990s"},
              {id: "1.5", title: "2000s"},
              {id: "1.6", title: "2010s and 2020s"}
            ]}
          />

          <Collapse 
            id="3"
            item="Personality"
            sub={[
              {id: "3.1", title: "Alcoholism"},
              {id: "3.2", title: "Relationships"}
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
              {id: "5.1", title: "Equipment", sub2: [
                {id: "5.1.1", title: "Iron Man armor"}
              ]},
              {id: "5.2", title: "Weapons"},
              {id: "5.3", title: "Transportation"}
            ]}
          />
          <Collapse 
            id="6"
            item="Themes and motifs"
            sub={[
              {id: "6.1", title: "Politics and economics"},
              {id: "6.2", title: "Technology"},
              {id: "6.3", title: "Armor"}
            ]}
          />
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Allies"},
              {id: "7.2", title: "Romantic interests"},
              {id: "7.3", title: "Villains"},
              {id: "7.4", title: "Alternate versions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Reception and legacy</a></li>
          <li className="sidebar-list-item"><a href="#9">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Iron Man (Tony Stark)</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man (Tony Stark)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Iron Man</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png" alt="Iron Man" />
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
            <p>
              <b>Iron Man</b> (<b>Tony Stark</b>) is a superhero appearing in American comic books published by <Link to="/marvelcomics">Marvel Comics</Link>. Co-created by
              writer and editor <Link>Stan Lee</Link>, developed by scripter Larry Lieber, and designed by artists Don Heck and <Link>Jack Kirby</Link>, the character first
              appearance in Tales of Suspsense #39 in 1962 (cover dated March 1963) and received his own title with Iron Man #1 in 1968. Shortly after his creation, Iron Man
              became a founding member of the superhero team <Link to="/marvelcomics/avengers">Avengers</Link>, alongside <Link to="/marvelcomics/thor">Thor</Link>,
              <Link to="/marvelcomics/ant_man">Ant-Man</Link>, the <Link to="/marvelcomics/wasp">Wasp</Link>, and the <Link to="/marvelcomics/hulk">Hulk</Link>. Iron Man
              stories, individually and with the Avengers, have been published consistently since the character's creation.
            </p>
            <p>
              Iron Man is the superhero persona of <b>Anthony Edward "Tony" Stark</b>, a businessman and engineer who runs the weapons manufacturing company
              <Link> Stark Industries</Link>. When Stark was captured in a war zone and sustained a severe heart wound, he built his <Link>Iron Man armor</Link> and
              escaped his captors. Iron Man's suits of armor grant him superhuman strength, flight, energy projection, and other abilities. The character was created in
              response to the Vietnam War and Lee's attempt to create a likeable pro-war character. Since his creation, Iron Man has been used to explore political themes, with
              early Iron Man stories being set in the Cold War. The character's role as a weapons manufacturer proved controversial, and Marvel moved away from geopolitics by the
              1970s. Instead, the stories began exploring themes such as civil unrest, technological advancement, corporate espionage, alcoholism, and government authority.
            </p>
            <p>
              Major Iron Man stories include "Demon in a Bottle" (1979), "Armor Wars" (1987-1988), "Extremis" (2005), and "Iron Man 2020" (2020). He is also a leading character
              in the company-wide storie Civil War (2006-2007), Dark Reign (2008-2009), and Civil War II (2016). Additional superhero characters have emerged from Iron Man's
              supporting cast, including James Rhodes as <Link to="/marvelcomics/war_machine">War Machine</Link> and Riri Williams as
              <Link to="/marvelcomics/ironheart"> Ironheart</Link>, as well as reformed villains, Natasha Romanova as <Link to="/marvelcomics/black_widow">Black Widow</Link> and
              Clint Barton as <Link to="/marvelcomics/hawkeye">Hawkeye</Link>. Iron Man's list of enemies include his archenemy, the
              <Link to="/marvelcomics/mandarin">Mandarin</Link>, various supervillains of communist origin, and many of Stark's business rivals.
            </p>
            <p>
              <Link> Roberty Downey Jr.</Link> portrayed <Link to="/mcu/tony_stark">Tony Stark</Link> in <Link to="/mcu/iron_man_film">Iron Man</Link> (2008), the first film of the
              <Link to="/mcu"> Marvel Cinematic Universe</Link>, and continued to portray the character until his final live-action appearance in
              <Link to="/mcu/avengers_endgame"> Avengers: Endgame</Link> (2019). Downey's portrayal popularized the character, elevating Iron Man into one of Marvel's most
              recognizable superheroes. Other adaptations of the character appear in animated direct-to-video films, television series, and video games.
            </p>
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Publication history"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Errol_Flynn1.jpg" alt="Errol Flynn" />
              <p>Errol Flynn was used as a reference for Tony Stark's physical appearance.</p>
            </div>
            <p>
              Following the success of the <Link to="/marvelcomics/fantastic_four">Fantastic Four</Link> in 1961 and the subsequent revival of American comic books featuring
              superheroes, Marvel Comics created new superhero characters. Stan Lee developed the initial concept for Iron Man. He wanted to design a character who should be
              unpalatable to his generally anti-war readers but to make them like the character anyway. Iron Man was created in the years after a permanent army industry
              developed in the United States, and this was incororated into the character's backstory. The character was introduced as an active player in the Vietnam War. Lee
              described the national mood toward Vietnam during Iron Man's creation as "a time when most of us genuinely felt that the conflict in that tortured land really
              was a simple matter of good versus evil."
            </p>
            <p>
              Larry Lieber developed Iron Man's origin and wrote the first Iron Man story, while Jack Kirby and Don Heck were responsibl for the initial design. Lee modeled Iron
              Man after businessman Howard Hughes, invoking his physical appearance, his image as a businessman, and his reputation as an arrogant playboy. Kirby and Heck then
              incorporated elements of the actor Errol Flynn's physical appearance in the design. When first designing the character, Lee wanted to create a modernized Arthurian
              knight. Kirby initially drew the Iron Man armor as a "round and clunky gray heap", and Heck modified the design to incorporate gadgets such as jets, drills, and
              suction cups. The Iron Man character was created at a time when comic book characters were first depicted struggling with real-life problems, and his heart injury
              was an early example of a superhero with a physical disability.
            </p>

            <h3 className="article-heading-3" id="1.2">Early years</h3>

            <h3 className="article-heading-3" id="1.3">1970s</h3>

            <h3 className="article-heading-3" id="1.4">1980s and 1990s</h3>

            <h3 className="article-heading-3" id="1.5">2000s</h3>

            <h3 className="article-heading-3" id="1.6">2010s and 2020s</h3>

          </div>
        </div>
      </main>
    </>
  )
}

export default IronMan;