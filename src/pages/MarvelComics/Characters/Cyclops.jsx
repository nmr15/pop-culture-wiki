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
        </div>
      </main>
    </>
  )
}

export default Cyclops;