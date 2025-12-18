import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Futurama = () =>
{
  useEffect(() =>
  {
    document.title = "Futurama - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Premise"
            sub={[
              {id:"1.1", title: "Characters"},
              {id:"1.2", title: "Setting"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Voice actors"},
              {id: "3.4", title: "Animation"}
            ]}
          />
          <Collapse 
            id="4"
            item="Hallmarks"
            sub={[
              {id: "4.1", title: "Opening sequence"},
              {id: "4.2", title: "Languages"},
              {id: "4.3", title: "30th Century Fox"},
              {id: "4.4", title: "Humor"}
            ]}
          />
          <Collapse 
            id="5"
            item="Cancellations, syndications, and revivals"
            sub={[
              {id: "5.1", title: "Fox cancellation"},
              {id: "5.2", title: "Adult Swim reruns"},
              {id: "5.3", title: "Comedy Central revival"},
              {id: "5.4", title: "Comedy Central cancellation"},
              {id: "5.5", title: "Simpsorama"},
              {id: "5.6", title: "Syndication"},
              {id: "5.7", title: "Hulu revival"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Accolades"},
              {id: "6.4", title: "Other honors"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media"
            sub={[
              {id: "7.1", title: "Comic books"},
              {id: "7.2", title: "Films"},
              {id: "7.3", title: "Video games"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Futurama</li>
        </ul>
        <div>
          <h1 className="article-heading">Futurama</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Futurama</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/440px-Futurama_1999_logo.svg.png" alt="Futurama logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Matt Groening</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of Futurama episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Futurama character</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Futurama is an American animated science fiction sitcom created by <Link to="/matt_groening">Matt Groening</Link> for the Fox Broadcasting
            Company and later revived by Comedy Central, and then Hulu. The series follows <Link to="/futurama/philip_j_fry">Philip J. Fry</Link>, a young
            man who is cryogenically preserved for 1,000 years and revived on December 31, 2999. Fry finds work at the interplanetary delivery company
            <Link to="/futurama/planet_express"> Planet Express</Link>, working alongside the one-eyed mutant
            <Link to="/futurama/turunga_leela"> Leela</Link> and the robot <Link to="/futurama/bender_rodriguez">Bender</Link>. The series was envisioned
            by Groening in the mid-1990s while working on <Link to="/simpsons/the_simpsons_series">The Simpsons</Link>; he brought David X. Cohen aboard
            to develop storylines and characters to pitch the show on Fox.
          </p>
          <p>
            Following its initial cancellation by Fox, Futurama began airing reruns on <Link to="/cartoon_network">Cartoon Network</Link>'s Adult Swim
            programming block, which lasted from 2003 to 2007. It was revived in 2007 as four direct-to-video films, the last of which was released in
            early 2009. Comedy Central entered into an agreement with 20th Century Fox Television to syndicate the existing episodes and air the films as
            16 new, half-hour episodes,constituting a fifth production season, or the sixth to be broadcast (in 2008 and 2009).
          </p>
          <p>
            In June 2009, Comedy Central picked up the series for 26 new half-hour episodes, which aired in 2010 and 2011, constituting the sixth
            production season, or the seventh (in 2010) and eighth (in 2011) to be broadcast. The show was renewed for a <Link>seventh
            (production) season</Link>, with the first half airing in 2012, (as the ninth broadcast season) and the second half airing in 2013, as the
            tenth broadcast season. An audio-only episode featuring the cast members was released in 2017 as an episode of The Nerdist Podcast. On
            February 9, 2022, Hulu revived the series with a 20-episode order, which premiered on July 24, 2023. In November 2023, the series was
            renewed by Hulu for two more broadcast seasons, which will air through 2026. The series returned to television on September 15, 2025, when
            the tenth season premiered on FXX.
          </p>
          <p>
            Futurama has received critical acclaim throughout its run and was nominated for 17 Annie Awards, winning nine of them, and 12 Emmy Awards,
            winning six. It was nominated four times for a Writers Guild of America Award, winning for the episodes 
            "<Link to="/futurama/godfellas">Godfellas</Link>" and "<Link to="/futurama/the_prisoner_of_benda">The Prisoner of Benda</Link>". It was
            nominated for a Nebula Award and received Environmental Medical Awards for the episode
            "<Link to="/futurama/the_problem_with_poppies">The Problem with Poppies</Link>" and
            "<Link to="/futurama/the_futurama_holiday_spectacular">The Futurama Holiday Spectacular</Link>". Merchandising includes a tie-in comic book
            series, video games, calendars, clothes, and action figures. In 2013, TV Guide ranked Futurama on its list of the "60 Greatest TV Cartoons of
            All Time".
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Characters</h3>
            <p>
              Futurama is essentially a workplace sitcom, the plot of which revolves around the Planet Express interplanetary delivery company and its
              employees, a small group that largely fails to conform to future society. Episodes usually feature the central trio of Fry, Leela, and
              Bender, though occasional storylines center on the other main characters.
            </p>
            <ul className="article-list">
              <li>
                <Link to="/futurama/philip_j_fry">Philip J. Fry</Link> (voiced by <Link to="/billy_west">Billy West</Link>): Fry is a slovenly, gullible, yet good-hearted
                and sensitive pizza delivery boy who falls into a cryogenic pod, causing it to activate and freeze him just after midnight on January 1,
                2000. He reawakens on New Year's Eve of 2999 and gets a job as a cargo delivery boy at Planet Express, a company owned by his only living
                relative, <Link>Professor Hubert J. Farnsworth</Link>. Fry's love for Leela is a recurring theme throughout the series.
              </li>
              <li>
                <Link to="/futurama/turunga_leela">Turunga Leela</Link> (voiced by <Link to="/katey_segal">Katey Segal</Link>): Leela is the competent,
                one-eyed captain of the Planet Express Ship. Abandoned as a baby, she grows up in the
                <Link to="/futurama/cookieville_minimum_security_orphanarium">C ookieville Minimum Security Orphanarium</Link> believing herself to be an
                alien from another planet, but learns that she is actually a mutant from the sewers in the episode
                "<Link to="/futurama/leela's_homeworld">Leela's Homeworld</Link>". Prior to becoming the ship's captain, Leela works as a career assignment
                officer at the cryogenics lab where she first meets Fry. She is Fry's primary love interest and eventually becomes his wife. Her name is
                a reference to the Turangalîla-Symphonie by Olivier Messiaen.
              </li>
              <li>
                <Link to="/futurama/bender_rodriguez">Bender Bending Rodriguez</Link> (voiced by <Link to="/john_dimaggio">John DiMaggio</Link>): Bender
                is a foul-mouthed, heavy drinking, cigar-smoking, kleptomaniacal, misanthropic, egocentric, ill-tempered robot manufactured by
                <Link to="/futurama/mom's_friendly_robot_company">Mom's Friendly Robot Company</Link>. He is originally programmed to bend girders, and is
                later designated as assisstant sales manager and cook at Planet Express, despire lacking a sense of taste. He is Fry's best friend and
                roommate. He must drink heavily to power his fuel cells and becomes the robot equivalent of drunk when low on alcohol.
              </li>
              <li>
                <Link to="/futurama/professor_farnsowrth">Professor Hubert J. Farnsworth</Link> (voiced by Billy West): Professor Farnsworth, also known
                simply as "the Professor", is Fry's distant nephew, and technically descendant. Farnsworth founds Planet Express Inc. to fund his work as
                a mad scientist. Although he is depicted as a brilliant scientist and inventor, at more than 160 years old (between 10-20 years off from
                death, according to "<Link to="/futurama/the_numberland_gap">The Numberland Gap</Link>") he is extremely prone to age-related forgetfulness
                and fits of temper. In the episode "<Link to="/futurama/a_clone_of_my_own">A Clone of My Own</Link>", the Professor clones himself to
                produce a successor, <Link to="/futurama/cubert_farnsowrth">Cubert Farnsworth</Link> (voicedby <Link to="/kath_soucie">Kath Soucie</Link>),
                whome he treats like a son.
              </li>
            </ul>
            <h3 className="article-heading-3" id="1.2">Setting</h3>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Episodes"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Writing</h3>
            <h3 className="article-heading-3" id="3.3">Voice actors</h3>
            <h3 className="article-heading-3" id="3.4">Animation</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Hallmarks"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Opening sequence</h3>
            <h3 className="article-heading-3" id="4.2">Languages</h3>
            <h3 className="article-heading-3" id="4.3">30th Century Fox</h3>
            <h3 className="article-heading-3" id="4.4">Humor</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Cancellations, syndications, and revivals"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Fox cancellation</h3>
            <h3 className="article-heading-3" id="5.2">Adult Swim reruns</h3>
            <h3 className="article-heading-3" id="5.3">Comedy Central revival</h3>
            <h3 className="article-heading-3" id="5.4">Comedy Central cancellation</h3>
            <h3 className="article-heading-3" id="5.5">Simpsorama</h3>
            <h3 className="article-heading-3" id="5.6">Syndication</h3>
            <h3 className="article-heading-3" id="5.7">Hulu revival</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Critical response</h3>
            <h3 className="article-heading-3" id="6.2">Ratings</h3>
            <h3 className="article-heading-3" id="6.3">Accolades</h3>
            <h3 className="article-heading-3" id="6.4">Other honors</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Other media"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Comic books</h3>
            <h3 className="article-heading-3" id="7.2">Films</h3>
            <h3 className="article-heading-3" id="7.3">Video games</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default Futurama;