import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const TheHulk = () =>
{
  useEffect(() =>
  {
    document.title = "The Hulk (Bruce Banner) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept and creation</a></li>
          <Collapse 
            id="2"
            item="Publication history"
            sub={[
              {id: "2.1", title: "1960s"},
              {id: "2.2", title: "1970s"},
              {id: "2.3", title: "1980s"},
              {id: "2.4", title: "1990s and after"}
            ]}
          />
          <Collapse 
            id="3"
            item="Fictional history"
            sub={[
              {id: "3.1", title: "Early years"},
              {id: "3.2", title: "Education"},
              {id: "3.3", title: "Desert Base"},
              {id: "3.4", title: "Becoming the Hulk"},
              {id: "3.5", title: "The early adventures"},
              {id: "3.6", title: "Ultron Forever"},
              {id: "3.7", title: "The Sentry"},
              {id: "3.8", title: "The Avengers"},
              {id: "3.9", ti8tle: "Back at Desert Base"},
              {id: "3.10", title: "Outed as the Hulk"},
              {id: "3.11", title: "A menace once more"},
              {id: "3.12", title: "Hunted by everyone"},
              {id: "3.13", title: "Many unhappy returns"},
              {id: "3.14", title: "No happiness for Bruce Banner"},
              {id: "3.15", title: "Have Hulk, Will Travel"},
              {id: "3.16", title: "Project Greenskin"},
              {id: "3.17", title: "The Defenders"},
              {id: "3.18", title: "Other adventures"},
              {id: "3.19", title: "The birth of the She-Hulk"},
              {id: "3.20", title: "One mind, two bodies"},
              {id: "3.21", title: "Secret Wars"},
              {id: "3.22", title: "Separated from the Hulk"},
              {id: "3.23", title: "Ground zero"},
              {id: "3.24", title: "Joe Fixit"},
              {id: "3.25", title: "Multiple personas"},
              {id: "3.26", title: "The Pantheon"},
              {id: "3.27", title: "The Maestro"},
              {id: "3.28", title: "Betty moves in"},
              {id: "3.29", title: "The trial of Agamemnon"},
              {id: "3.30", title: "The first death and resurrection of Betty Ross Banner"},
              {id: "3.31", title: "Living in Florida"},
              {id: "3.32", title: "Ghosts of the future"},
              {id: "3.33", title: "Onslaught/Heroes reborn"},
              {id: "3.34", title: "Back on Earth"},
              {id: "3.35", title: "A Horseman of Apocalypse"},
              {id: "3.36", title: "Mercy"},
              {id: "3.37", title: "Heroes Reborn: The Return"},
              {id: "3.38", title: "Self-destruction"},
              {id: "3.39", title: "The second death of Betty Ross Banner"},
              {id: "3.40", title: "A mental cure"},
              {id: "3.41", title: "The Order"},
              {id: "3.42", title: "Planet Hulk"},
              {id: "3.43", title: "World War Hulk"},
              {id: "3.44", title: "The Red Hulk incident"},
              {id: "3.45", title: "Skaar the son of the Hulk"},
              {id: "3.46", title: "The Defenders vs. the Offenders"},
              {id: "3.47", title: "The Hulk no more"},
              {id: "3.48", title: "Training Skaar"},
              {id: "3.49", title: "Scorched Earth"},
              {id: "3.50", title: "The Hulk family"},
              {id: "3.51", title: "Heart of the Monster"},
              {id: "3.52", title: "Fear Itself"},
              {id: "3.53", title: "Asunder"},
              {id: "3.54", title: "A weapon of S.H.I.E.L.D."},
              {id: "3.55", title: "The Incursions"},
              {id: "3.56", title: "Becoming Doc Green"},
              {id: "3.57", title: "Time Runs Out"},
              {id: "3.58", title: "The Immortal Hulk"},
              {id: "3.59", title: "Shadow Base"},
              {id: "3.60", title: "The ascension of the Leader"},
              {id: "3.61", title: "On the run"},
              {id: "3.62", title: "A Titanic problem"},
              {id: "3.63", title: "Imperial"},
              {id: "3.64", title: "Dealing with Eldest"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Personality</a></li>
          <li className="sidebar-list-item"><a href="#5">Incarnations</a></li>
          <Collapse 
            id="6"
            item="Attributes"
            sub={[
              {id: "6.1", title: "Powers"},
              {id: "6.2", title: "Abilities"},
              {id: "6.3", title: "Weaknesses"}
            ]}
          />
          <Collapse 
            id="7"
            item="Paraphernalia"
            sub={[
              {id: "7.1", title: "Equipment"},
              {id: "7.2", title: "Weapons"},
              {id: "7.3", title: "Transportation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Supporting characters</a></li>
          <Collapse 
            id="9"
            item="Cultural impact"
            sub={[
              {id: "9.1", title: "Analysis"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#10">In other media</a></li>
          <li className="sidebar-list-item"><a href="#11">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>The Hulk (Bruce Banner)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Hulk (Bruce Banner)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Hulk</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png" alt="The Hulk" />
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
              <td className="infobox-data">Robert Bruce Banner</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            The <b>Hulk</b> is a superhero appearing in American comic books published by <Link to="/marvelcomics">Marvel Comics</Link>. Created by writer
            <Link> Stan Lee</Link> and artist <Link>Jack Kirby</Link>, the character first appeared in the debut issue of
            <Link to="/marvelcomics/the_incredible_hulk_(comic_book)">The Incredible Hulk</Link> (May 1962). In his comic book appearances, the
            character, who has dissociative identity disorder (DID), is primarily represnted by the alter ego Hulk, an immense, green-skinned, hulking brute,
            possessing a limitless degree of physical strength, and the alter ego Dr. <b>Robert Bruce Banner</b>, a physically weak, socially withdrawn, and
            emotionally reserved physicist, both of whom typically resent each other. Lee stated that the Hulk's creation was inspired by a combination of
            Frankenstein and Dr. Jekyll and Mr. Hyde.
          </p>
          <p>
            Following his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Bruce is physically
            transformed into the Hulk when subjected to emotional stress, at or against his will. This transformation often leads to destructive rampages and
            conflicts that complicate Bruce's civilian life. The Hulk's level of strength is usually conveyed proportionate to his anger level. Commonly portrayed as
            a raging savage, the Hulk has been represented with other alter egos like a gangster (<b>Joe Fixit</b>), a merged personality (<b>Merged Hulk</b>), a
            mindless, destructive force (<b>War</b>), a brilliant warrior (<b>World-Breaker</b>), a self-hating protector (<b>Devil Hulk</b>), a genius scientist
            in his own right (<b>Doc Green</b>), and several minor alter egos.
          </p>
          <p>
            Despite Hulk and Bruce's desire for solitude, the character has a large supporting cast. This includes Bruce's love interest
            <Link to="/marvelcomics/betty_ross"> Betty Ross</Link>, his best friend, Rick Jones, his cousin <Link to="/marvelcomics/she_hulk">She-Hulk</Link>, and
            therapist and ally <Link to="/marvelcomics/doc_samson">Doc Samson</Link>. In addition, the Hulk alter ego has many key supporting characters, like his
            co-founders of the superhero team the <Link to="/marvelcomics/avengers">Avengers</Link>, his queen Caiera, fellow warriors Korg and Miek, and sons
            Skaar and Hiro-Kala. However, his uncontrollable power has brought him into conflict with his fellow heroes and others such as
            <Link to="/marvelcomics/thunderbolt_ross"> General Thunderbolt Ross</Link>, Betty's father. Despite this, he tries his best to do what's right while
            battling villains such as the <Link to="/marvelcomics/leader">Leader</Link>, the <Link to="/marvelcomics/abomination">Abomination</Link>, the
            <Link to="/marvelcomics/absorbing_man"> Absorbing Man</Link>, and many more.
          </p>
          <p>
            One of the most iconic characters in popular culture, the character has appeared on a variety of merchandise, such as clothing and
            collectable items that was inspired by real-world structures (such as theme park attractions), and been referenced in several media. Banner
            and the Hulk have been adapted into live-action, animated, and video game incarnations. The character was first played in live-action by
            Bill Bixby and Lou Ferrigno in the 1978 television series The Incredible Hulk and its subsequent television films The Incredible Hulk
            Returns, The Trial of the Incredible Hulk, and The Death of the Incredible Hulk. In the 2003 film <Link>Hulk</Link>, the character was
            played by <Link>Eric Bana</Link>. In the <Link to="/mcu">Marvel Cinematic Universe</Link>,
            <Link to="/mcu/bruce_banner"> the character</Link> was first portrayed by <Link>Edward Norton</Link> in the film
            <Link to="/mcu/the_incredible_hulk_film"> The Incredible Hulk</Link> and then by <Link>Mark Ruffalo</Link> in later appearances in the
            franhise.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Concept and creation"} />
          <div>
            <p>
              The Hulk was created by Stan Lee and Jack Kirby. Lee cited influence from Frankenstein and Dr. Jekyll and Mr. Hyde in the Hulk's creation:
            </p>
            <div className="article-quote">
              <p>
                It was patently apparent that [the monstrous character the] <Link to="/marvelcomics/thing">Thing</Link> was the most popular
                character in [Marvel's recently created superhero team the] <Link to="/marvelcomics/fantastic_four">Fantastic Four</Link>. ... For a
                long time, I'd been aware of the fact that people were more likely to favor someone who was less than perfect. ... It's a safe bet that
                you remember Quasimodo, but how easily can you name any of the heroic, handsome, more glamorous characters in The Hunchback of Notre
                Dame? And then there's Frankenstein ... I've always had a soft spot in my heart for the Frankenstein monster. No one could ever
                convince me that he was the bad guy. ... He never wanted to hurt anyone; he merely groped his torurous way through a second life
                trying to defend himself, trying to come to terms with those who sought to destroy him. ... I decided I might as well borrow from Dr.
                Jekyll and Mr. Hyde as well, our protagonist would constantly change from his normal identity to his superhuman alter ego and back
                again.
              </p>
            </div>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Hulk-logo.svg/960px-Hulk-logo.svg.png" alt="The Incredible Hulk logo" />
              <p>Hulk comic logo</p>
            </div>
            <p>
              Kirby also stated the Frankenstein inspiration stating, "I did a story called 'The Hulk', a small feature, and it was quite different
              from the Hulk that we know. But I felt that the Hulk had possiblities, and I took this little character from the small feature and I
              transformed it into the Hulk that we know today. Of course, I was experimenting with it. I thought the Hulk might be a good-looking
              Frankenstein. I felt there's a Frankenstein in all of us; I've seen it demonstrated. And I felt that the Hulk had the element of truth in
              it, and anything to me with the element of truth is valid and the reader relates to that. And if you dramatize it, the reader will enjoy
              it." Kirby also commented upon his influence in drawing the character, and recalled his inspiration of witnessing the hysterical strength
              of a mother lifting a car off her trapped child.
            </p>
            <p>
              Lee had also compared Hulk to the golem of Jewish mythology. In The Science of Superheroes, Gresh and Weinberg see the Hulk as a
              reaction to the Cold War and the threat of nuclear attack, an interpretation shared by Weinstein in Up, Up and Oy Vey. This interpretation
              corresponds with other popularized fictional media created during the time period, which took advantage of the prevailing sense among
              Americans that nuclear power could produce monsters and mutants.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default TheHulk;
