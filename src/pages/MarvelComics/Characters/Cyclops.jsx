import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Cyclops = () =>
{
  useEffect(() =>
  {
    document.title = "Cyclops (Scott Summers) - Pop Culture Wiki";
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
              {id: "1.1", title: "1960s"},
              {id: "1.2", title: "1970s"},
              {id: "1.3", title: "1980s"},
              {id: "1.4", title: "1990s"},
              {id: "1.5", title: "2000s"},
              {id: "1.6", title: "2010s and 2020s"}
            ]}
          />

          <Collapse 
            id="3"
            item="Personality"
            sub={[
              {id: "3.1", title: "Reomantic relationships"}
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
          <li className="sidebar-list-item"><a href="#6">Themes and motifs</a></li>
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Allies"},
              {id: "7.2", title: "Romantic interests"},
              {id: "7.3", title: "Family"},
              {id: "7.4", title: "Alternate versions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Reception</a></li>
          <li className="sidebar-list-item"><a href="#9">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Cyclops (Scott Summers)</li>
        </ul>
        <div>
          <h1 className="article-heading">Cyclops (Scott Summers)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Cyclops</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/Cyclops_%28Scott_Summers_circa_2019%29.png" alt="Cyclops" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link to="/marvelcomics">Marvel Comics</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                <Link to="/people/stan_lee">Stan Lee</Link> (writer) <br />
                <Link to="/people/jack_kirby">Jack Kirby</Link> (artist/co-plotter)
              </td>
            </tr>
             <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Scott Summers</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Cyclops</b> is a superhero appearing in American comic books published by <Link to="/marvelcomics">Marvel Comics</Link>. Created by
            writer <Link to="/people/stan_lee">Stan Lee</Link> and artist/co-plotter <Link to="/people/jack_kirby">Jack Kirby</Link>, the character
            first appeared in <Link to="/marvelcomics/uncanny_x-men_(comic_book_series)">The X-Men</Link> #1 as a founding member of the
            <Link to="/marvelcomics/x-men_(team)"> X-Men</Link>. Cyclops is a member of a subspecies of humans known as
            <Link to="/marvelcomics/mutants"> mutants</Link>, born with superhuman abilities. Cyclops emits powerful beams of energy from his eyes
            and can control the beams with the aid of special eyewear, which he must always wear. He was the first member of the X-Men, a team of
            mutant heroes who fight for peace and equality between mutants and humans, and one of the team's primary leaders.
          </p>
          <p>
            The first-born son of Corsair, <b>Scott Summers</b> is the older brother of <Link to="/marvelcomics/havok">Havok</Link>. His first and most
            enduring love interest is his wife, <Link to="/marvelcomics/jean_grey">Jean Grey</Link>, with the two having a daughter, Rachel Summers, from
            an alternate future. Other significant love interests include his ex-wife <Link to="/marvelcomics/madelyne_pryor">Madelyne Pryor</Link>, a
            clone of Jean and mother of his son <Link to="/marvelcomics/cable">Cable</Link>, and fellow X-Men member
            <Link to="/marvelcomics/emma_frost"> Emma Frost</Link>. Cyclops' archnemesis is 
            <Link to="/marvelcomics/mister_sinister"> Mister Sinister</Link>, who is obsessed with the Summers and Grey bloodlines and has often
            manipulated events in Cyclops' life, resulting in various clashes with the X-Men.
          </p>
          <p>
            Cyclops was initially portrayed as a traditional heroic figure and counterposed to antiheroes who challenge authority. In later
            decades, he becomes increasingly morally ambiguous. Major Cyclops storylines include 
            <Link to="/marvelcomics/the_dark_phoneix_saga"> The Dark Phoneix Saga</Link>,
            <Link to="/marvelcomics/mutant_massacre"> Mutant Massacre</Link>
            <Link to="/marvelcomics/x-cutioner's_song"> X-Cutioner's Song</Link>, and
            <Link to="/marvelcomics/avengers_vs._x-men"> Avengers vs. X-Men</Link>. He is also a central character in the company-wide stories
            <Link to="/marvelcomics/messiah_complex"> Messiah Complex</Link>, <Link to="/marvelcomics/utopia">Utopia</Link>, and the
            <Link to="/marvelcomics/krakoan_age"> Krakoan Age</Link>.
          </p>
          <p>
            The character was portrayed by <Link to="/people/james_marsden">James Marsden</Link>, Tim Pocock, and Tye Sheridan in
            <Link to="/20th_century_fox"> 20th Century Fox</Link>'s <Link to="/x-men_films">X-Men films</Link>. Marsden will reprise the role in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> film <Link to="/mcu/avengers:_doomsday">Avengers: Doomsday</Link>, and Kit Connor will
            portray the main MCU Cyclops in the <Link>untitled MCU X-Men film</Link>.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Publication history"} />
          <div>
            <h3 className="article-heading-3" id="1.1">1960s</h3>
            <p>
              Cyclops first appeared in The X-Men #1. He was created by Stan Lee and Jack Kirby, and has been a mainstay character of the X-Men series.
              In the initial issue, Cyclops is introduced along with <Link to="/marvelcomics/beast">Beast</Link>,
              <Link to="/marvelcomics/iceman"> Iceman</Link>, <Link to="/marvelcomics/angel">Angel</Link>, and Jean Grey as the students of
              <Link to="/marvelcomics/professor_x"> Professor X</Link>, who battle <Link to="/marvelcomics/magneto">Magneto</Link>. Lee said that
              Cyclops and Beast were his two favorite X-Men, elaborating that "I love tortured heroes, and he was tortured because he couldn't
              control his powers." Originally identified as "Slim Summers", The X-Men #3 provides his first name as "Scott."
            </p>
            <p>
              Scott Summers is the first of the X-Men recruited by Professor X; Xavier hand-picks Scott to lead his X-Men, and to carry on the legacy of his
              mutant-human-harmony ideals. In X-Men #7, Xavier briefly leaves the X-Men and leaves Scott in command. Ben Saunders observes that "the direction of the
              X-Men will often pivot on the question of Xavier's absence or presence, and the emotional impact of his comings and goings on the team, particularly on
              Scott." Xavier views Scott as one of his most prized puplis; their relationship exhibits father/son qualities. Douglas Wolk describes Scott as the
              "closest thing early X-Men has to a central protagonist," characterizing him as a "subdued, repressed young man." Later issues of X-Men of the mid-1960s
              written by Roy Thomas emphasize the subplot of the "melodramatic unrequited romance" between Scott Summers and Jean Grey. Scott appears in his first
              solo story in X-Men #45.
            </p>

            <h3 className="article-heading-3" id="1.2">1970s</h3>
            <p>
              In the early 1970s, X-Men only reprinted earlier issues. It was revived in 1975 by Len Wein and Dave Cockrum, creating a new international group. Scott
              was the only character who remained from the original team. Chris Claremont became the primary writer of the series with issue #94 and continued for
              the next sixteen years.
            </p>
            <p>
              Scott and Jean have a complex relationship, with Scott sometimes competing with Scott sometimes competing with
              <Link to="/marvelcomics/wolverine"> Wolverine</Link> for her attention. In X-Men #98, Scott and Jean solidify their relationship when she initiates
              their first kiss. In this period, Claremont introduces a tension between the leadership responsibility of Cyclops and the personal desires of Scott
              Summers. When Jean becomes the Phoneix, Scott expresses fear and insecurity regarding her extraordinary power level.
            </p>
            <p>
              Cockrum created the Starjammers, including Corsair, and collaborated with Claremont to develop the characters; they decided to make
              Corsair the father of Scott to tie them to the group. The Starjammers first appeared in X-Men #107.
            </p>

            <h3 className="article-heading-3" id="1.2">1980s</h3>
            <p>
              During The Dark Phoenix Saga, Scott engages in competition with Mastermind for the affection and destiny of Jean, with Mastermind
              attempting to corrupt her. Jean appears to die at the conclusion of the story. Scott leaves the central team in The Uncanny X-Men #138,
              mourning Jean; he remains a recurring character in the series. The Uncanny X-Men #141 introduces Rachel Summers, the daughter of
              Scott and Jean from the alternate timeline of the <Link to="/marvelcomics/days_of_future_past">Days of Future Past</Link>. She joins
              the X-Men in a storyline concluding in issue #199. Scott meets Madelyne Pryor, a woman who is mysteriously identical to jean; she
              first appears in Uncanny X-Men #168. He eventually marries and fathers a child with her.
            </p>
            <p>
              In the mid-1980s, <Link to="/marvelcomics/storm">Storm</Link> becomes increasingly powerful and respected among the X-Men,
              challenging Scott's leadership role. In Uncanny X-Men #201, Scott cedes his leadership to her. Claremont intended Scott to retire from
              the superhero life and to settle into marriage and fatherhood. However, Marvel's editors decided that he should appear in a new series.
              This new series, <Link to="/marvelcomics/x-factor_(comic_book)">X-Factor</Link>, launched in 1986 and starred the original X-Men team.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cyclops;
