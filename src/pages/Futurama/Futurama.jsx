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
              <li>
                <Link to="/futurama/hermes_conrad">Hermes Conrad</Link> (voiced by <Link to="/phil_lamarr">Phil LaMarr</Link>): Hermes is the Jamaican
                accountant of Planet Express. A 36th-level bureaucrat (demoted to level 37 during the series) and proud of it, he is a stickler for
                regulation and enamored of the tedium of paperwork and bureaucracy. Hermes is also a former champion in Olympic Limbo, a sport derived
                from the popular party activity. He gave up limbo after the 2980 Olympics when a young fan, imitating him, broke his back and died.
                Hermes has a wife, <Link to="/futurama/labarbara_conrad">LaBarbara</Link>, and a 12-year-old son,
                <Link to="/futurama/dwight_conrad"> Dwight</Link>.
              </li>
              <li>
                <Link to="/futurama/zoidberg">Dr. John A. Zoidberg</Link> (voiced by Billy West): Zoidberg is a <Link to="/futurama/decapodian">Decapodian</Link>,
                a squid/lobster-hybrid alien from his home planet <Link to="/futurama/decapod_10">Decapod 10</Link>, and the neurotic staff physician of
                Planet Express. Although he claims to be an expert on humans, his knowledge of human anatomy and physiciology is woefully inaccurate (at
                one point, he states that his doctorate degree is actually in art history). Zoidberg's expertise seems to be with extra-terrestrial
                creatures. Homeless and penniless, he lives in the dumpster behind Planet Express. Although Zoidberg is depicted as being Professor
                Farnsworth's long-time friend, he is held in contempt by everyone on the crew.
              </li>
              <li>
                <Link to="/futurama/amy_wong">Amy Wong</Link> (voiced by <Link to="/lauren_tom">Lauren Tom</Link>): Amy is an increidbly rich, blunt,
                ditzy, and accident-prone yet sweet-hearted long-term intern at Planet Express. She is an astrophysics student at
                <Link to="/futurama/mars_university">Mars University</Link> and heiress to the western hemisphere of <Link to="/futurama/mars">Mars</Link>.
                In the second episode of season one, the Professor states that he likes having Amy around because she has the same bloodtype as him. Born
                on Mars, she is ethnically Chinese and is prone to cursing in Cantonese and using 31st-century slang. Her parents are the wealthy ranchers
                <Link to="/futurama/leo_wong">Leo</Link> and <Link to="/futurama/inez_wong">Inez</Link> Wong. She is promiscuous in the beginning of the
                series, but eventually enters a monogamous relationship with <Link to="/futurama/kif_kroker">Kif Kroker</Link>. In the show's sixth season,
                she acquires her doctorate, and in the eighth season, she and Kif become parents.
              </li>
            </ul>
            <h3 className="article-heading-3" id="1.2">Setting</h3>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Futurama_flag_of_Earth.svg/500px-Futurama_flag_of_Earth.svg.png" 
                alt="Futurama flag of Earth" 
              />
              <p>The flag of the government of Earth</p>
            </div>
            <p>
              Futurama is set in <Link to="/futurama/new_new_york">New New York</Link> at the turn of the 31st century, in a time filled with
              technological wonders. The city of New New York has been built over the ruins of present-day New York City, which has become a catacomb-like
              space that acts as New New York's sewer, referred to as "Old New York". Parts of the sewers are inhabited by
              <Link to="/futurama/mutants"> mutants</Link>. Various devices and architecture are similar to the Populuxe style. Global warming,
              capitalism, inflexible bureaucreacy, and substance abuse are a few of the subjects given a 31st-century exaggeration in a world where the
              problems have become both more extreme and more common. Just as New York has become a more extreme version of itself in the future, other
              Earth locations are given the same treatment; Los Angeles, for example, is depicted as a smog-filled apocalyptic wasteland.
            </p>
            <p>
              Numerous technological advances have been made between the present day and the 31st century. The
              <Link to="/futurama/head_museum">Head Musuem</Link>, which keeps a collection of heads alive in jars thanks to technology invented by Ron
              Popeil (who has a guest cameo in "<Link to="/futurama/a_big_piece_of_garbage">A Big Piece of Garbage</Link>"), has resulted in many
              historical figures and current celebrities being present, including Groening himself; this became the writers; device to feature and poke
              fun at contemporary celebrities in the show. Several of the preserved heads shown are those of people who were already dead well before the
              advent of this technology; one of the most prominent examples of this anomaly is former U.S. president
              <Link to="/futurama/richard_nixon">Richard Nixon</Link>, who died in 1994 and appears in numberous episodes. The Internet, while being
              fully immersive and encompassing all senses, even featuring its own digital world (similar to Tron or The Matrix), is slow and largely
              consists of pornography, pop-up ads, and "filthy" (or Filthy Filthy) chat rooms. Some of it is edited to include educational material
              ostensibly for youth. Television is still a primary of entertainment. Self-aware robots are a common sight, and are the main cause of global
              warming due to the exhaust from their alcohol-powered systems. The wheel is obsolete (no one but Fry even seems to recognize the design),
              having been forgotten and replaced by hover cars and a network of large, clear pneumatic transportation tubes.
            </p>
            <p>
              Environmentally, common animals still remain, alongside mutated, cross-bred (sometimes with humans) and extraterrestrial animals.
              Ironically, spotted owls are often shown to have replaced rats as common household pests. Although rats still exist, sometimes rats act
              like pigeons, though pigeons still exist, as well. Anchovies have been extinct for 800 years because of the Decapodian. Earth still suffers
              the effects of greenhouse gases, although in <Link to="/futurama/xmas_story">one episode</Link> Leela states that its effects have been
              counteracted by nuclear winter. In another episode, the effects of global warming have been somewhat mitigated by the dropping of a giant
              ice cube into the ocean, and later by pushing Earth farther away from the Sun, which also extends the year by one week.
            </p>
            <p>
              Religion is a prominent part of society, although the dominant relgions have evolved. A merging of the major religious groups of the 20th
              century has resulted in the First Amalgamated Church, while Voodoo is now mainstream. New religions include Oprahism, Robotology, and the
              banned religion of Star Trek fandom. Religious figures include Father Changstein-El-Gamal, the
              <Link to="/futurama/robot_devil">Robot Devil</Link>, <Link to="/futurama/lionel_preaherbot">Reverend Lionel Preacherbot</Link>, and passing
              references to the Space Pope, who appears to be a large crocodile-like creature. Several major holidays have robots associated with them,
              inluding the murderous Robot Santa, Kwanzaa-bot and (in a couple of appearances) Hanukah Zombie. While very few episodes focus exclusively
              on religion within the Futurama universe, they do cover a wide variety of subjects including predestination, prayer, the nature of salvation,
              and relgious conversion.
            </p>
            <p>
              Futuram's seting is a backdrop, and the writers are not above committing continuity errors if they serve to further the gags. For example,
              while the <Link to="/futurama/space_pilot_3000">the pilot episode</Link> implies that the previous Planet Express crew was killed by a
              space wasp, the later episode "<Link to="/futurama/the_sting">The Sting</Link> is based on the crew having been killed by space bees
              instead. The "world of tomorrow" setting is used to highlight and lampoon issues of today and to parody the science-fiction genre.
            </p>
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
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/David_X._Cohen_%26_Matt_Groening_by_Gage_Skidmore.jpg/500px-David_X._Cohen_%26_Matt_Groening_by_Gage_Skidmore.jpg" 
                alt="David X. Cohen & Matt Groening Comic-Con 2009" 
              />
              <p>David X. Cohen and Matt Groening at the Futurama panel at Comic-Con 2009</p>
            </div>
            <p>
              The television network Fox expressed a strong desire in the mid-1990s for Matt Groening to create a new series after the success of his
              previous series, The Simpsons; Groening began conceiving Futurama during this period. In 1995, he enlisted David X. Cohen, then a writer
              and producer for The Simpsons, to assist in developing the show. The two spent time researching science fiction books, television shows,
              and films. When they pitched the series to Fox in April 1998, Groenig and Cohen had composed many characters and storylines; Groening
              claimed they had gone "overboard" in their discussions. Groening described trying to get the show on the air as "by far the worst
              experience of my grown-up life".
            </p>
            <p>
              Fox ordered thirteen episodes. Immediately after, however, Fox feared the themes of the show were not suitable for the network and Groening
              and Fox executives argued over whether the network would have any creative input into the show. With The Simpsons, the network has no input.
              Fox was particularly disturbed by the concept of <Link to="/futurama/suicide_booth">suicide booths</Link>, Doctor Zoidberg, and Bender's
              anti-social behavior. Groening explains, "When they tried to give me notes on Futurama, I just said: 'No, we're going to do this just the
              way we did Simpsons.' And they said, 'Well, we don't do business that way anymore.' And I said, 'Oh, well, that's the only way I do
              business.'" The episode "<Link to="/futurama/i_roomate">I, Roomate</Link>" was produced to address Fox's concerns, with the script written
              to their specifications. Fox strongly disliked the episode, but after negotiations, Groening received the same independence with Futurama.
            </p>
            <p>
              The name Futurama comes from a pavilion at the 1939 New York World's Fair (as later mentioned as an opening caption of the episode
              "<Link to="/futurama/the_inhuman_torch">The Inhuman Torch</Link>"). Designed by Norman Bel Gedes, the Futurama pavilion depicted how he
              imagined the world would look in 1959. Many other tiles were considered for the series, including Aloha, Mars! and Doomsville, which
              Groening notes were "resoundly rejected, by everyone concerned with it". It takes approximately six to nine months to produce an episode
              of Futurama. The long production time results in several episodes being worked on simultaneously.
            </p>
            <h3 className="article-heading-3" id="3.2">Writing</h3>
            <p>
              The planning for each episode began with a table meeting of writers, who discussed the plot ideas as a group. The writers are given index
              cards with plot points that they are required to use as the center of activity in each episode. A single staff writer wrote an outline and
              then produced a script. Once the first draft of a script was finished, the writers and executive producers called in the actors for a table
              read. After this script reading, the writers collaborate to rewrite the script as a group before sending it to the animation team. At this
              point the voice recording was also started and the script was out of the writers' hands.
            </p>
            <p>
              The Futurama writing staff held three Ph.D.s, seven master's degrees, and cumulatively had more than 50 years at Harvard University. Series
              writer Patric M. Verrone stated, "we were easily the most overeducated cartoon writers in history".
            </p>
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