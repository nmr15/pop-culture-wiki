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
          <Collapse 
            id="8"
            item="Supporting characters"
            sub={[
              {id: "8.1", title: "Family", sub2: [
                {id: "6.1.1", title: "Parents"},
                {id: "6.1.2", title: "Wife and children"},
                {id: "6.1.3", title: "Extended family"}
              ]},
              {id: "8.2", title: "Allies"},
              {id: "8.3", title: "Enemies"},
              {id: "8.4", title: "Group enemies"},
              {id: "8.5", title: "Neutral rivals"},
              {id: "8.6", title: "Other enemies"}
            ]}
          />
          <Collapse 
            id="9"
            item="Cultural impact"
            sub={[
              {id: "9.1", title: "Analysis"}
            ]}
          />
          <Collapse 
            id="10"
            item="In other media"
            sub={[
              {id: "10.1", title: "Animation", sub2: [
                {id: "10.1.1", title: "1960s"},
                {id: "10.1.2", title: "1980s"},
                {id: "10.1.3", title: "1990s"},
                {id: "10.1.4", title: "2000s"},
                {id: "10.1.5", title: "2010s"},
                {id: "10.1.6", title: "2020s"},
                {id: "10.1.7", title: "Films"}
              ]},
              {id: "10.2", title: "Live-action", sub2: [
                {id: "10.2.1", title: "1970s"},
                {id: "10.2.2", title: "Bill Bixby/Lou Ferrigno TV films"},
                {id: "10.2.3", title: "Hulk (2003 film)"},
                {id: "10.2.4", title: "Marvel Cinematic Universe"}
              ]},
              {id: "10.3", title: "Comic strips"},
              {id: "10.4", title: "Fine arts"},
              {id: "10.5", title: "Novels"},
              {id: "10.6", title: "Video games", sub2: [
                {id: "10.6.1", title: "Standalone games"},
                {id: "10.6.2", title: "Related games"},
                {id: "10.6.3", title: "Canceled games"}
              ]},
              {id: "10.7", title: "Podcasts"},
              {id: "10.8", title: "Live performances"},
              {id: "10.9", title: "Miscellaneous"},
              {id: "10.10", title: "Popular culture references"}
            ]}
          />
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
            <p>
              In the debut, Lee chose gray for the Hulk because he wanted a color that did not suggest any particular ethnic group. Colorist Stan
              Goldberg, however, had problems with the gray coloring, resulting in different shades of gray, and even green, in the issue. After
              seeing the first published issue, Lee chose to change the skin color to green. Green was used in retelling of the origin with even
              reprints of the original story being recolored for the next two decades, until The Incredible Hulk vol. 2, issue 302 reintroduced
              the gray Hulk in flashbacks set close to the origin story. An exception is the early trade paperback, Origins of Marvel Comics, from
              1974, which explains the difficulty in keeping the gray color consistent in a Stan Lee-written prologue, and reprints the origin story
              keeping the gray coloration. Since December 1984, reprints of the first issue have displayed the original gray coloring, with the
              fictional canon specifying that the Hulk's skin had initially been gray.
            </p>
            <p>
              Lee gave the Hulk's alter ego the alliterative name "Bruce Banner" because he found he had less difficulty remembering alliterative names.
              Despite this, in later stories he misremembered the character's name and referred to him as "<b>Bob Banner</b>", an error which readers
              quickly picked up on. The discrepancy was resolved by giving the character the offical full name "<b>Robert Bruce Banner</b>."
            </p>
            <p>
              The Hulk got his name from a comic book character named The Heap, who was a large green swamp monster.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Publication history"} />
          <div>
            <h3 className="article-heading-3" id="2.1">1960s</h3>
            <p>
              The character first appeared in The Incredible Hulk #1 (cover dated May 1962), written by writer-editor Stan Lee, penciled and coplotted
              by Jack Kirby, and inked by Paul Reinman. The series lasted six issues until March 1963. Lee had written each story, with Kirby
              penciling the first five issues and Steve Ditko penciling and inking the sixth. The character immediately guest-starred in The
              Fantasti Four #12 (March 1963). Months later, Hulk became a founding member of the superhero team the Avengers, appearing in the first two
              issues of the team's eponymous series (Sept. and Nov. 1963). Jose Alaniz argues that the most striking feature of these issues is "the
              Hulk's utter alienation." The character returned to Avengers as an antagonist in issue #3 and as an ally in #5 (Jan.-May 1964). He then
              guest-starred in Fantastic Four #25-26 (April-May 1964), which revealed Banner's full name as Robert Bruce Banner, and The Amazing
              Spider-Man #14 (July 1964).
            </p>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/9/93/The_Incredible_Hulk_1_%28May_1962%29.jpg" alt="The Incredible Hulk #1" />
              <p>The Incredible Hulk #1 (May 1962). Cover art by Jack Kirby and Paul Reinman.</p>
            </div>
            <p>
              Around this time, co-creator Jack Kirby received a letter from a college dormitory stating the Hulk had been chosen as its official mascot.
              Kirby and Lee realized their character had found an audience in college-age readers.
            </p>
            <p>
              A year and a half after The Incredible Hulk was canceled, the Hulk became one of the two features in Tales to Astonish, beginning in
              issue #60 (Oct. 1964).
            </p>
            <p>
              This new Hulk feature was initially scripted by Lee, with pencils by Steve Ditko and inks by George Roussos. Other artists later in this
              run included Jack Kirby, Gil Kane, Bill Everett, John Buscema, and marie Severin. The Tales to Astonish run inroduced the super-villains
              the Leader, who could become the Hulk's nemesis, and the Abomination, another gamma-irradiated being. Marie Severin finished out the
              Hulk's run in Tales to Astonish. Beginning with issue #102 (April 1968), the book was retitled The Incredible Hulk vol. 2, and ran
              until 1999, when Marvel canceled the series and launched Hulk #1. Marvel filed for a trademark for "The Incredible Hulk" in 1967, and
              the United States Patent and Trademark Office issued the registration in 1970.
            </p>

            <h3 className="article-heading-3" id="2.2">1970s</h3>
            <p>
              Len Wein wrote the series from 1974 through 1978, working first with Herb Trimpe, then, as of issue #194 (December 1975), with Sal Buscema,
              who was the regular artist for ten years. Issues #180–181 (Oct.–Nov. 1974) introduced Wolverine as an antagonist, who would go on to
              become one of Marvel Comics' most popular characters. In 1977, Marvel launched a second title, The Rampaging Hulk, a black-and-white comics
              magazine. This was originally conceived as a flashback series, set between the end of his original, short-lived solo title and the beginning
              of his feature in Tales to Astonish. After nine issues, the magazine was retitled The Hulk! and printed in color.
            </p>
            <p>
              In 1977, two Hulk television films were aired to strong ratings, leading to an Incredible Hulk TV series that aired from 1978 to 1982. A
              huge ratings success, the series introduced the popular Hulk catchphrase "Don't make me angry. You wouldn't like me when I'm angry", and
              broadened the character's popularity from a niche comic book readership into the mainstream consciousness.
            </p>

            <h3 className="article-heading-3" id="2.3">1980s</h3>
            <p>
              Bill Mantlo became the series' writer for five years beginning with issue #245 (March 1980). Mantlo's "Crossroads of Eternity" stories
              (#300–313 (Oct. 1984 – Nov. 1985)) explored the idea that Banner had suffered child abuse. Later Hulk writers Peter David and Greg Pak
              have called these stories an influence on their approaches to the character. Mantlo left the series for Alpha Flight and that series' writer
              John Byrne took over The Incredible Hulk. The final issue of Byrne's six issue run featured the wedding of Bruce Banner and Betty Ross.
              David began a 12-year run with issue #331 (May 1987). He returned to the Roger Stern and Mantlo abuse storylines, expanding the damage
              caused, and depicting Banner as suffering dissociative identity disorder (DID).
            </p>

            <h3 className="article-heading-3" id="2.4">1990s and after</h3>
            <p>
              In 1998, David killed off Banner's long-time love Betty Ross. Marvel executives used Ross' death as an opportunity to pursue the return of
              the Savage Hulk. David disagreed, leading to his parting ways with Marvel. Also in 1998, Marvel relaunched The Rampaging Hulk as a standard
              comic book rather than as a comics magazine. The Incredible Hulk was again cancelled with issue #474 of its second volume in March 1999
              and was replaced with a new series, Hulk the following month, with returning writer Byrne and art by Ron Garney. New series writer Paul
              Jenkins developed the Hulk's multiple dissociative identities, and his run was followed by Bruce Jones with his run featuring Banner being
              pursued by a secret conspiracy and aided by the mysterious Mr. Blue. Jones appended his 43-issue Incredible Hulk run with the limited
              series Hulk/Thing: Hard Knocks #1–4 (Nov. 2004 – Feb. 2005), which Marvel published after putting the ongoing series on hiatus. Peter David,
              who had initially signed a contract for the six-issue Tempest Fugit limited series, returned as writer when it was decided to make that
              story the first five parts of the revived (vol. 3). After a four-part tie-in to the "House of M" storyline and a one-issue epilogue, David
              left the series once more, citing the need to do non-Hulk work for the sake of his career.
            </p>
          </div>
        </div>

        <div>
          <Heading2 id={4} title={"Personality"} />
          <div>
            <div className="article-quote">
              <p>
                "
                <i>
                  When I was four, I saw my father kill my mother. And years later, I killed him. I didn't mean to. But I did it. I've got that kind of
                  anger inside. That kind of capacity. But you... you have your own problems. And your Hulk's gonna have his own problems as a result.
                  And you may not love everything you learn about yourself. But you're not a... you're not a monster. You're not me, Amadeus. You're not
                  me.
                </i>
                "
                <br />
                -<b>Robert Bruce Banner</b>
              </p>
            </div>
            <p>
              Robert Bruce Banner suffered severe trauma as a child that was inflicted by his father and repressed it in his subconsciousness. This
              physical abuse resulted in the young Banner developing both anger issues and dissociative identity disorder (DID), and the early emergence
              of several alternate personalities. Indeed, each aspect of his complex mind, concerning at least three primary Hulk identities, represents
              a peculiar manifestation of Banner's multifaceted Freudian psyche. This condition was compounded later in life by the traumatic explosion
              of the Gamma Bomb that triggered his initial transformation into the Incredible Hulk, and further stimulated the emergence of other aspects
              of his personality. Following his gamma accident, many of his alters now take Hulk forms, though some, like Joe Fixit, can remain in human
              form when they switch.
            </p>
            <p>
              It was revealed by Doc Samson that exposure to concentrated levels of gamma energy brings about the expression of the deepest parts of the
              collective unconscious. In this process, the darkest, most deeply buried sense of self dictates the subject's mutation. Particularly in the
              case of Banner, it stimulated the expression of a repressed fury that played an essential role in his transformation into the Hulk. Banner
              became an obsessive-compulsive person. He finally sublimated his grief and rage over his physically abusive childhood, diverting the drives
              that were spawned by his suffering into the relative safety of science.
            </p>
            <p>
              Because of that, Banner is often trying to hide his emotional damage, resulting predominantly in social isolation. Banner became a highly withdrawn intellectual who was unable to cope with his emotions. In the course of his life, Banner has also been pursued by the destruction that the Hulk causes, which culminates in more complications in his life. However, Banner is a self-sacrificing and heroic person; for example, he was willing to sacrifice himself along with Earth's heroes to suppress the menace of Onslaught. Endowed with a super-genius intellect, he is also one of the most brilliant and resourceful minds on Earth. Banner has constantly undertaken a career as a super-hero while also trying to find a cure for his condition.
            </p>
            <p>
              However, an obscure and a malevolent side of Banner's persona has also been explored; for example, when Banner was temporarily separated
              from the Hulk, he was demonstrated to be extremely sadistic and insane. When Banner and the Hulk were reunited, Banner's standard
              personality came into effect again, with no trace of this morally distorted side. More recently, Banner's psyche was fractured into
              several domains following a particular incident involving the Hulk. As a result, Banner's behavior was drastically altered, contrasting
              with his standard personality and leading to the unfolding of a potential large-scale event. It was later revealed that Banner's radical
              conduct was a result of the manifestation of a malefic Hulk personality.
            </p>
            <p>
              Banner and the Hulk are frequently portrayed as mutually hating each other, but at times Banner strategically acts in full synchrony and
              consonance with his Hulk persona, thus giving the Hulk a purpose. This underlying dichotomy was confirmed by Banner himself. During the
              Planet Hulk and World War Hulk story arcs, for example, both acted in full cooperation, and the Devil Hulk even admitted that he actually
              cherished and cared for the Banner persona after all. Banner has also stated that the Hulk's reasoning and intelligence tend to fluctuate
              depending upon a number of factors at the moment of transformation, resulting in the Hulk's standard persona varying from a raging monster
              to a more calculating fighter.
            </p>
          </div>
        </div>

        <div>
          <Heading2 id={5} title={"Incarnations"} />
          <div>
            <div className="article-quote">
              <p>
                "<i>You... can't... break... a... man... who's... already... been... broken..</i>" <br />
                -<b>Robert Bruce Banner</b>
              </p>
            </div>
            <div className="flex">
              <p>
                The Hulk initially is characterized as a separate entity from Banner, a distillation of his human anger that gradually develops its own
                personality and memories separate from Banner's. Banner suffers from dissociative identity disorder (DID), which stems from the physical 
                abuse that he suffered as a child. Banner also has developed anger issues from said physical abuse. The Hulk has many incarnations, each
                representing a different aspect of Banner's psyche; there are hundreds or possibly thousands of other personalities of the Hulk, but only a
                few major versions have been seen to date.
              </p>
               <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marveldatabase/images/5/50/Hulk_Incarnations_from_Immortal_Hulk_Vol_1_18_001.jpg" alt="List of Hulk incarnations" />
                <p>A simplified list of the Hulk's incarnations.</p>
              </div>
            </div>
            <ul className="article-list">
              <li>
                <b>Robert Bruce Banner</b> - Robert Bruce Banner is the emotionally repressed core personality, possessed of a genius-level intellect.
                Banner can transform into the different versions of the Hulk, whereas his alter egos seem to be able only to transform into Banner.
              </li>
              <div className="flex">
                <div className="img-card mr-1">
                  <img src="https://static.wikia.nocookie.net/marveldatabase/images/1/1e/Bruce_Banner_%28Earth-616%29_from_Secret_Empire_Vol_1_6_001.jpg/revision/latest?cb=20170721171007"
                    alt="Unnamed Hulk"
                  />
                  <p>An "Unnamed" Hulk</p>
                </div>
                <li>
                  <b>An Unnamed Hulk</b> - After being resurrected, a previously unseen Hulk persona emerged, full of mindless rage and bloodlust. He was
                  defeated by the Avengers and was suppressed by the Devil Hulk, who imprisoned him in the depths of Banner's subconscious. However, due to the Devil Hulk having been recently imprisoned himself, this unnamed Hulk persona may now be free.
                </li>
                <li>
                  <b>The Devil Hulk/The Immortal Hulk</b> - This variation of the Hulk persona originated as a response to Banner's need for a protective
                  father figure. Due to his physically abusive childhood, he was unable to imagine the idea of love without pain, so the Devil Hulk took
                  the form of a demonic reptilian monster within Banner's mind. The trauma of Banner's death during the Second Superhuman Civil War and
                  subsequent resurrection allowed the Devil Hulk to suppress the other Hulk personas and become the "dominant" Hulk; though the Savage
                  Hulk persona could still resurface if he was enraged enough. He is extremely articulate, smart, and cunning. For the most part, he acts
                  in response to people that cause harm to others, and dispenses judgment on them mercilessly. Unlike previous Hulks, he is content to
                  wait inside Banner, possessing a measure of power over Banner that previous Hulks did not have. When Banner is in control, the Devil
                  Hulk manifests as a gut feeling that guides him to his objectives. In addition to the Devil Hulk's transformation period being limited to
                  nighttime, Banner cannot transform into him whenever he wants to, or even at the first sign of trouble. The Devil Hulk always manifests
                  when Banner is fatally injured, but only once the Sun is down, though he eventually overcame this weakness with help from Banner. Like
                  every Hulk incarnation, the Devil Hulk possesses enormous strength, but is proportionately stronger than ever. Examples of his strength
                  include fracturing Thor's skull with only one punch following a severe concussion that left him out of the fight, sending a
                  Celestial-enhanced She-Hulk flying for at least two miles away with only one punch, tearing apart the latest Hulkbuster armor that was
                  devised by Iron Man, and overloading Black Panther's Vibranium-based Panther Habit, which was previously believed to be impossible. Thor
                  even stated that the Hulk was stronger than ever. He also was previously able to defeat another group of Avengers which included
                  incredibly powerful heroes such as Thor and Hercules. The Devil Hulk also has incredible regenerative power. He quickly healed a large
                  hole blown through his torso, as well as put his body back together after it was cut into its individual pieces. In order for a part of
                  his body to heal, though, it seemingly needed to be in close proximity to other parts, and despite being segmented, the Hulk was still
                  able to move the separate parts of his body in a manner similar to Deadpool. The Devil Hulk also has a desire to completely destroy
                  human civilization, arguing that it is just one misstep away from annihilation anyway. When Xemnu the Living Titan mentally attacked
                  Banner, the Green Scar persona took advantage of the chaos that was created to chain up the Devil Hulk, as he found the Devil Hulk to be
                  bossy like Banner's father, Brian. It was later revealed that the Green Scar was being controlled by the Leader at the time. Despite
                  expressing regret for letting the Devil Hulk take him over, Banner still wanted to free the Devil Hulk. The Devil Hulk eventually broke
                  free of his prison after being angered by the mistreatment that the Leader gave to Banner and the Savage Hulk, but was later devoured by
                  the Leader. However, some time later in the Below-Place, while Banner was within the mouth of the transformed Leader, who had been
                  possessed by the One Below All, Banner started talking to the Hulk and, as he was bonded with the seeming remains of the Devil Hulk, it
                  is implied that the Devil Hulk is not completely gone. Banner learned that the Devil Hulk "left some room" in Joe Fixit because he had a
                  hunch about Joe, which led to Joe being able to absorb and incorporate cosmic radiation into his body to become a new version of the
                  Red Hulk and smash through the Red Door that was previously barring them from returning to the living world. After Banner reunited with
                  his other alters, he mentioned one other persona that was still active beyond Joe or the Big Guy, potentially referring to the Devil Hulk.
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div>
          <Heading2 id={8} title={"Supporting characters"} />
          <div>
            <p>
              Over the long publication history of the Hulk's adventures, many recurring characters have featured prominently, including his best friend
              and sidekick Rick Jones, love interest and wife Betty Ross and her father, the often adversarial General "Thunderbolt" Ross. Both Banner and
              Hulk have families created in their respective personas. Banner is son to Brian, an abusive father who killed Banner's mother while she
              tried to protect her son from his father's delusional attacks, and cousin to Jennifer Walters, the She-Hulk, who serves as his frequent
              ally. Banner had a stillborn child with Betty, while the Hulk has two sons with his deceased second wife Caiera, Skaar and Hiro-Kala, and
              his DNA was used to create a daughter named Lyra with Thundra.
            </p>
            <p>
              The Fantastic Four #12 (March 1963), featured the Hulk's first battle with the Thing. Although many early Hulk stories involve Ross trying
              to capture or destroy the Hulk, the main villain is often a radiation-based character, like the Gargoyle or the Leader, along with other
              foes such as the Toad Men, or Asian warlord General Fang. Ross' daughter Betty loves Banner and criticizes her father for pursuing the
              Hulk. General Ross' right-hand man, Major Glenn Talbot, also loves Betty and is torn between pursuing Hulk and trying to gain Betty's love
              more honorably. Rick Jones serves as the Hulk's friend and sidekick in these early tales. The Hulk's archenemies are the Abomination and
              the Leader. The Abomination is more monstrous-looking, twice as strong as the Hulk at normal levels (however, the Abomination's strength
              levels do not increase when he gets angry) and wreaks havoc for fun and pleasure. The Leader is a gamma-irradiated super-genius who has
              tried plan after plan to take over the world.
            </p>
          </div>
        </div>

        <div>
          <Heading2 id={9} title={"Cultural impact"} />
          <div>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Museo_Madame_Tussauds_%2825%29.jpg/500px-Museo_Madame_Tussauds_%2825%29.jpg"
                alt="Hulk-figure Madame Tussauds" 
              />
              <p>Hulk-figure at Madame Tussaudes in Las Vegas.</p>
            </div>
            <p>
              The Hulk character and the concepts behind it have been raised to the level of iconic status by many within and outside the comic book
              industry. In 2003, Official U.S. PlayStation Magazine claimed the character had "stood the test of time as a genuine icon of American pop
              culture." In 2008, the Hulk was listed as the 19th greatest comic book character by Wizard magazine. Empire magazine named him as the
              14th-greatest comic-book character and the fifth-greatest Marvel character. In 2011, the Hulk placed No. 9 on IGN's list of "Top 100 Comic
              Book Heroes", and fourth on their list of "The Top 50 Avengers" in 2012.
            </p>

            <h3 className="article-heading-3" id="9.1">Analysis</h3>
            <p>
              The Hulk is often viewed as a reaction to war. As well as being a reaction to the Cold War, the character has been a cipher for the
              frustrations the Vietnam War raised, and Ang Lee said that the Iraq War influenced his direction. In the Michael Nyman edited edition of
              The Guardian, Stefanie Diekmann explored Marvel Comics' reaction to the September 11 attacks. Diekmann discussed The Hulk's appearance in the
              9/11 tribute comic Heroes, claiming that his greater prominence, alongside Captain America, aided in "stressing the connection between anger
              and justified violence without having to depict anything more than a well-known and well-respected protagonist." In Marvel: Five Fabulous
              Decades of the World's Greatest Comics, Les Daniels addresses the Hulk as an embodiment of cultural fears of radiation and nuclear science.
              He quotes Jack Kirby thus: "As long as we're experimenting with radioactivity, there's no telling what may happen, or how much our
              advancements in science may cost us." Daniels continues, "The Hulk became Marvel's most disturbing embodiment of the perils inherent in the
              atomic age."
            </p>
            <p>
              In Comic Book Nation, Bradford Wright alludes to Hulk's counterculture status, referring to a 1965 Esquire magazine poll amongst college students
              which "revealed that student radicals ranked Spider-Man and the Hulk alongside the likes of Bob Dylan and Che Guevara as their favorite revolutionary
              icons." Wright goes on to cite examples of his anti-authority symbol status. Two of these are "The Ballad of the Hulk" by Jerry Jeff Walker, and the
              Rolling Stone cover for September 30, 1971, a full color Herb Trimpe piece commissioned for the magazine. The Hulk has been caricatured in such
              animated television series as The Simpsons, Robot Chicken, and Family Guy, and such comedy TV series as The Young Ones. The character is also used as
              a cultural reference point for someone displaying anger or agitation. For example, in a 2008 Daily Mirror review of an EastEnders episode, a character
              is described as going "into Incredible Hulk mode, smashing up his flat." In September 2019, British Prime Minister Boris Johnson likened himself to
              The Hulk in an interview with the Mail On Sunday, as political pressure built on him to request an extension to the date of the UK's withdrawal from
              the European Union.
            </p>
            <p>
              The Hulk, especially his alter ego Bruce Banner, is also a common reference in hip-hop. The term was represented as an analogue to marijuana
              in Dr. Dre's 2001, while more conventional references are made in Ludacris and Jermaine Dupri's popular single "Welcome to Atlanta".
            </p>
            <p>
              The 2003 Ang Lee-directed Hulk film saw discussion of the character's appeal to Asian Americans. The Taiwanese-born Ang Lee commented on
              the "subcurrent of repression" that underscored the character of The Hulk, and how that mirrored his own experience: "Growing up, my
              artistic leanings were always repressed—there was always pressure to do something 'useful,' like being a doctor." Jeff Yang, writing for the
              San Francisco Chronicle, extended this self-identification to Asian American culture, arguing that "the passive-aggressive streak runs deep
              among Asian Americans—especially those who have entered creative careers, often against their parents' wishes."
            </p>
            <p>
              There have been explorations about the real-world possibility of Hulk's gamma-radiation-based origin. In The Science of Superheroes, Lois
              Grest and Robert Weinberg examined Hulk's powers, explaining the scientific flaws in them. Most notably, they point out that the level of
              gamma radiation Banner is exposed to at the initial blast would induce radiation sickness and kill him, or if not, create significant
              cancer risks for Banner, because hard radiation strips cells of their ability to function. They go on to offer up an alternate origin, in
              which a Hulk might be created by biological experimentation with adrenal glands and GFP. Charles Q. Choi from LiveScience.com further
              explains that, unlike the Hulk, gamma rays are not green; existing as they do beyond the visible spectrum, gamma rays have no color at all
              that we can describe. He also explains that gamma rays are so powerful (the most powerful form of electromagnetic radiation and 10,000
              times more powerful than visible light) that they can even convert energy into matter – a possible explanation for the increased mass that
              Bruce Banner takes on during transformations. "Just as the Incredible Hulk 'is the strongest one there is,' as he says himself, so too are
              gamma-ray bursts the most powerful explosions known."
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={10} title={"In other media"} />
          <div>
            <p>
              The character has been played in live-action and animation by a variety of actors. The character was first played in live-action by Bill
              Bixby and Lou Ferrigno in the 1978 television series The Incredible Hulk and its subsequent television films The Incredible Hulk Returns
              (1988), The Trial of the Incredible Hulk (1989), and The Death of the Incredible Hulk (1990), and Eric Bana in the film Hulk (2003). In the
              Marvel Cinematic Universe (MCU), the character was first portrayed by Edward Norton in the film The Incredible Hulk (2008) and by Mark 
              Ruffalo in later appearances, including the films <Link to="/mcu/the_avengers_film">The Avengers</Link>,
              <Link to="/mcu/iron_man_3">Iron Man 3</Link>, <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link>,
              <Link to="/mcu/thor_ragnarok"> Thor: Ragnarok</Link>, <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link>,
              <Link to="/mcu/captain_marvel_film"> Captain Marvel</Link>, <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>,
              <Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings"> Shang-Chi and the Legend of the Ten Rings</Link>, and
              <Link to="/mcu/spider_man:_brand_new_day"> Spider-Man: Brand New Day</Link>, and the television series
              <Link to="/mcu/shehulk_attorney_at_law"> She-Hulk: Attorney at Law</Link>, and <Link to="/mcu/what_if">What If... ?</Link>. Fred
              Tatasciore has voice Hulk in various televison series and video games, including <Link>The Avengers: Earth's Mightiest Heroes</Link>
              and <Link>Avengers Assemble</Link>.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={11} title={"Reception"} />
          <div>
            <p>
              The Hulk was ranked #1 on a listing of Marvel Comics' monster characters in 2015.
            </p>
            <p>
              In 2018, CBR.com ranked The Thing (Bruce Banner) 2nd in their "Age of Apocalyse: The 30 Strongest Characters in Marvel's Coolest Alternate
              World" list.
            </p>
            <p>
              In 2022, Screen Rant included Hulk in their "10 Most Powerful Hercules Villains in Marvel Comics" list.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default TheHulk;
