import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RiseOfSkywalker = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IX: Rise of Skywalker - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The hidden Emperor"},
              {id: "2.2", title: "A vital mission"},
              {id: "2.3", title: "A Jedi rises"},
              {id: "2.4", title: "Dark tidings"},
              {id: "2.5", title: "The Supreme Leader's court"},
              {id: "2.6", title: "Mission to Pasaana"},
              {id: "2.7", title: "Desert pursuit"},
              {id: "2.8", title: "Lair of the vexis"},
              {id: "2.9", title: "A narrow escape"},
              {id: "2.10", title: "Setback for Rey's team"},
              {id: "2.11", title: "A new mission"},
              {id: "2.12", title: "C-3PO's sacrifice"},
              {id: "2.13", title: "Saving Chewbacca"},
              {id: "2.14", title: "Glimpses of Rey's past"},
              {id: "2.15", title: "A new revelation"},
              {id: "2.16", title: "Mission to Kef Bir"},
              {id: "2.17", title: "Light vs. darkness"},
              {id: "2.18", title: "Ben returns"},
              {id: "2.19", title: "A show of force"},
              {id: "2.20", title: "Passing the torch"},
              {id: "2.21", title: "Preparing for war"},
              {id: "2.22", title: "Into the thick of battle"},
              {id: "2.23", title: "Sith machinations"},
              {id: "2.24", title: "A dyad in the Force"},
              {id: "2.25", title: "Friends to the rescue"},
              {id: "2.26", title: "Victory and sacrifice"},
              {id: "2.27", title: "Triumph of the Resistance"},
              {id: "2.28", title: "Heir to the Skywalkers"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Casting"},
              {id: "4.3", title: "Filming"},
              {id: "4.4", title: "Post-production"},
              {id: "4.5", title: "Music"}
            ]}
          />
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Tie-in literature and merchandise"},
              {id: "5.3", title: "Video games"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            xub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home meida"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Audience response"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode IX: Rise of Skywalker</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IX: Rise of Skywalker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IX: Rise of Skywalker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg" alt="Episode IX: Rise of Skywalker poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>J.J. Abrams</Link></td>
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
            <b>Star Wars: The Rise of Skywalker</b> (also known as <b>Star Wars: Episode IX - The Rise of Skywalker</b>) is a 2019 American epic space opera film
            produced, co-written, and directed by <Link>J. J. Abrams</Link>. Produced by <Link>Lucasfilm</Link> and Bad Robot, and distributed by Walt Disney
            Studios Motion Pictures, it is the third installment of the <Link to="/starwars">Star Wars</Link> <Link>sequel trilogy</Link>, following
            <Link to="/starwars/the_force_awakens"> The Force Awakens</Link> (2015) and <Link to="/starwars/the_last_jedi">The Last Jedi</Link> (2017), and the final
            episode of the nine part "<Link>Skywalker saga</Link>." Its cast includes <Link>Carrie Fisher</Link>, <Link>Mark Hamill</Link>,
            <Link> Adam Driver</Link>, <Link>Daisy Ridley</Link>, <Link>John Boyega</Link>, <Link>Oscar Isaac</Link>, <Link>Anthony Daniels</Link>, Naomi Ackie,
            Domhnall Gleeson, Richard E. Grant, <Link>Lupita Nyong'o</Link>, Keri Russell, Joonas Suotamo, Kelly Marie Tran, <Link>Ian McDiarmid</Link>,
            <Link> Billy Dee Williams</Link>, and <Link>Harrison Ford</Link>. The film follows <Link>Rey</Link>, <Link>Finn</Link>, and <Link>Poe Dameron</Link> as
            they lead the remnants of the <Link>Resistance</Link> in a final stand against Supreme Leader <Link>Kylo Ren</Link> and the <Link>First Order</Link>,
            who are now allied by the resurrected <Link>Sith</Link> Lord, <Link to="/starwars/sheev_palpatine">Emperor Palpatine</Link>, Rey's paternal grandfather.
          </p>
          <p>
            Following initial reports that The Last Jedi director <Link>Rian Johnson</Link> would write the script for Episode IX, in August 2015, Colin Trevorrow
            was hired to direct and to write a script with his collaborator Derek Connolly; both ultimately retain story credit with Abrams and Chris Terrio. In
            September 2017, Trevorrow left the project following creative differences with producer Kathleen Kennedy, and Abrams returned as director.
            <Link> John Williams</Link>, composer for the previous episodic films, returned to compose the score, making it his final score for the franchise.
            Principal photography began in August 2018 at Pinewood Studios in England and wrapped in February 2019, with post-production completed in November 2019.
            With a net budget of approximately $490.2 million, it is the second most expensive film ever made.
          </p>
          <p>
            The Rise of Skywalker premiered in Hollywood, Los Angeles, on December 16, 2019, and was released in the United States on December 20. The film received
            mixed reviews from critics and grossed $1.077 billion, making it the seventh highest grossing film of 2019, but also the lowest grossing of the sequel
            trilogy. It received three nominations at the 92nd Academy Awards (Best Original Score, Best Visual Effects, and Best Sound Editing) as well as three at
            the 73rd British Academy Film Awards (also Best Visual Effects, Best Original Music, and Best Sound). It won five awards at the 46th Saturn Awards,
            including Best Science Fiction Film.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Opening crawl"} />
          <div>
            <div className="article-quote">
              <p>
                The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.
              </p>
              <p>
                GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical
                FIRST ORDER.
              </p>
              <p>
                Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....
              </p>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="2.1">The hidden Emperor</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/a/a8/SidiousandKyloRen-TROS.jpg" alt="Palpatine" />
              <p>Kylo Ren confronts the Emperor.</p>
            </div>
            <p>
              One year after the events of The Last Jedi, a broadcast using the voice of the presumed deceased Emperor Palpatine is transmitted across the galaxy,
              which threatens revenge. Supreme Leader Kylo Ren leads a vicious assault against Alazmec colonists on a healing <Link>Mustafar</Link>, seeking a
              Sith wayfinder owned by Ren's grandfather, the Sith Lord <Link to="/starwars/anakin_skywalker">Darth Vader</Link>. Ren wants to use the device as a
              guide in his hunt for the source of the broadcast, which he perceives as a threat to his power. The Supreme Leader slaughters many Alazmec cultists
              alongside his <Link>stormtroopers</Link> before retrieving the device and slotting it into his TIE whisperer, allowing its dark powers to lead him
              through the crimson nebula that surrounds the fabled Sith world of <Link>Exegol</Link>.
            </p>
            <p>
              Landing at the base of an enormous citadel, Ren ignites his blade and enters. He descends down a floating platform into a vast chamber lined with worn
              statues of Sith legends. As he descends into its depths, he hears the voice of Palpatine telling him that <Link>Snoke</Link> trained him well. Ren
              responds that he had killed Snoke, but the voice replies that he "made" Snoke. 
            </p>
            <p>
              Lightning dances around the young dark side adept as he listens to the taunting words, spken in a voice transitioning from that of the Emperor to that
              of Snoke and, finally, to that of Vader: "I have been every voice... you have ever heard... inside your head."
            </p>
            <p>
              Ren, unshaken, proceeds further into the citadel, walking for some time among the towering effigies. His path lit by his blade, he eventually wanders
              into a maze of unfamiliar equipment tended to by robed acolyts. Tall cylinders filled with a sickly golden liquid hold motionless, incomplete bodies
              with the mutilated visage of the dead Snoke, confirming the Sith Lord's earlier words. Among these machines, bound by innumerable tubes and wires to
              machines of support and sustenance, is the emaciated and decaying figure of Darth Sidious, the true identity of the former Emperor Palpatine himself.
            </p>
            <p>
              Sidious speaks, explaining to Ren that he has died before, and that the dark side is a pathway to many abilities that some consider unnatural. Ren
              raises his lightsaber, but the threat seems to leave Sidious unfazed. Ren asks the Emperor what he could give him, and Sidious replies that he can give
              him everything: a new Empire.
            </p>
            <p>
              At the surface of Exegol, the icy ground cracks and yields as innumerable Xyston-class <Link>Star Destroyers</Link> emerge from the frozen sea into the
              tempestuous sky. As the fleet rises, Sidious offers to give Ren command of what he calls the Final Order in return for killing Rey, the last Jedi, and
              thus ending the Jedi Order and becoming what his grandfather, Vader, could not. He tells Ren that he will rule all the galaxy as the new Emperor, but
              he also issues a warning that Rey is not who he thinks she is. Ren asks Sidious who Ren is as thunder crackles.
            </p>

            <h3 className="article-heading-3" id="2.2">A vital mission</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Finn-Falcon-Gunner.jpg" alt="Finn in the Falcon" />
              <p>Finn manning one of the Millennium Falcon's cannons.</p>
            </div>
            <p>
              Meanwhile, on the <Link>Millennium Falcon</Link>, Finn and Poe Dameron engage <Link to="/starwars/chewbacca">Chewbacca</Link> in an intense game of
              dejarik. Chewbacca takes some time considering his 
            </p>

            <h3 className="article-heading-3" id="2.3">A Jedi rises</h3>
            <h3 className="article-heading-3" id="2.4">Dark tidings</h3>
            <h3 className="article-heading-3" id="2.5">The Supreme Leader's court</h3>
            <h3 className="article-heading-3" id="2.6">Mission to Pasaana</h3>
            <h3 className="article-heading-3" id="2.7">Desert pursuit</h3>
            <h3 className="article-heading-3" id="2.8">Lair of the vexis</h3>
            <h3 className="article-heading-3" id="2.9">A narrow escape</h3>
            <h3 className="article-heading-3" id="2.10">Setback for Rey's team</h3>
            <h3 className="article-heading-3" id="2.11">A new mission</h3>
            <h3 className="article-heading-3" id="2.12">C-3PO's sacrifice</h3>
            <h3 className="article-heading-3" id="2.13">Saving Chewbacca</h3>
            <h3 className="article-heading-3" id="2.14">Glimpses of Rey's past</h3>
            <h3 className="article-heading-3" id="2.15">A new revelation</h3>
            <h3 className="article-heading-3" id="2.16">Mission to Kef Bir</h3>
            <h3 className="article-heading-3" id="2.17">Light vs. darkness</h3>
            <h3 className="article-heading-3" id="2.18">Ben returns</h3>
            <h3 className="article-heading-3" id="2.19">A show of force</h3>
            <h3 className="article-heading-3" id="2.20">Passing the torch</h3>
            <h3 className="article-heading-3" id="2.21">Preparing for war</h3>
            <h3 className="article-heading-3" id="2.22">Into the thick of battle</h3>
            <h3 className="article-heading-3" id="2.23"Sith machinations></h3>
            <h3 className="article-heading-3" id="2.24">A dyad in the Force</h3>
            <h3 className="article-heading-3" id="2.25">Friends to the rescue</h3>
            <h3 className="article-heading-3" id="2.26">Victory and sacrifice</h3>
            <h3 className="article-heading-3" id="2.27">Triumph of the Resistance</h3>
            <h3 className="article-heading-3" id="2.28">Heir to the Skywalkers</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
            <p>
              In October 2012, Star Wars creator George Lucas sold his production company Lucasfilm to the Walt Disney Company. Disney subsequently announced the
              Star Wars sequel trilogy. The next month, Lawrence Kasdan and Simon Kinberg entered negotiations to write and produce either Episode VIII or Episode IX.
              Kinberg, Kasan, and Michael Amdt worked in a writers' room to discuss and map out the trilogy. However, these plans did not come to fruition and
              instead Kasdan co-wrote Episode VII - Star Wars: The Force Awakens, with Kinberg seving as a creative consultant. In June 2014, it was announced that
              Rian Johnson, writer and director of Star Wars: The Last Jedi, would write a story treatment for Episode IX. However, in April 2017, Johnson later
              denied involvement in writing the film, claiming the information was outdated.
            </p>
            <p>
              In August 2015, Colin Trevorrow was announced as the director of the film; he was to write the script with frequent collaborator Derek Connolly.
              Trevorrow and Connolly's script, titled Star Wars: Duel of the Fates after the theme of the same name from
              <Link to="/starwars/the_phantom_menace">Star Wars: Episode I - The Phantom Menace</Link>, included elements which were utilized to some extent in the
              final film, such as Kylo Ren finding a Sith holocron in Darth Vader's castle on <Link>Mustafar</Link>, the transference of Force energy, the
              concept of a superlaser-equipped Star Destroyer, Lando leading a galaxy-wide fleet of spaceships to save the day, and Chewbacca receiving a medal.
              An original idea of Trevorrow and his design team, the First Order TIE Echelon, survived in the Star Wars: Galaxy's Edge theme park, whose ship was
              supposed to appear in the original film.
            </p>
            <div className="img-right img-card">
              <img src="https://en.wikipedia.org/wiki/File:J._J._Abrams_by_Gage_Skidmore.jpg" alt="J.J. Abrams" />
              <p>J. J. Abrams returned to direct the final film.</p>
            </div>
            <p>
              In January 2016, Trevorrow revealed he was considering shooting on film and that he had wanted to shoot "on location" in outer space with IMAX
              cameras. Trevorrow and cinematographer John Schwartzman had planned to shoot the project entirely on 65mm film, using a new processing facility
              Kodak had developed in the UK. Trevorrow collaborated closely with Johnson while developing his script and even requested a scene featuring Rey and
              Poe be shor for Episode VIII - The Last Jedi. After the success of The Force Awakens, which became the highest grossing film of 201, Episode IX was
              put into production in February 2016, which Disney chief executive Bob Iger vaguely reported.
            </p>
            <p>
              In late April 2017, Disney announced that the film would be released on May 24, 2019. A month later, filming was expected to begin in January 2018. In
              August 2017, it was announced that Jack Thhorne, would rewrite the script. On September 5, 2017, Lucasfilm stated that Trevorrow had left the
              production following creative differences. Trevorrow's place as director was supposedly on ice since June 2017. The Hollywood Reporter reported that
              his working relationship with Kathleen Kennedy had become unmanageable after failing to deliver a satisfying script, despite writing several drafts,
              nor were either happy with Thorne's revisions. Johnson was rumored as the top choice to replace Trevorrow as director, but stated "it was never in the
              plan for me to direct Episode IX." David Fincher had discussions with the studio but would ultimately decline from directing the film.
            </p>
            <p>
              On September 12, it was announced that J.J. Abrams, the director of Star Wars: The Force Awakens, would return to direct the film, and that the film's
              release date would be moved to December 20, 2019. The story team met with George Lucas before writing the new script to help find a way to conclude the
              saga. Abrams co-wrote the script with Chris Terrio, though Trevorrow and Connolly retain story credits. The story was rewritten to some extenet before
              filming was completed. Terrio had written off working on large-scale films at the time and did not socially know Abrams prior to agreeing to co-write
              the film with him.
            </p>
            <p>
              The film was produced by Abrams' company Bad Robot, Kathleen Kennedy, and Michelle Rejwan. According to Terrio, the film's script had to include
              certain narrative beats provided by Kennedy and Rejwan, including the redemption of the character Kylo Ren. Abrams had also consulted with Johnson on
              making a film that both stood on its own but built upon previous established ideas and story elements.
            </p>
            <p>
              Before filming, Episode IX was initially given the working title Black Diamond, which was then changed to TriXie in 2018, so that the roman numeral
              "IX" would be included in the working title. The film's title, The Rise of Skywalker, was announced at April 2019's Star Wars Celebration in
              Chicago. Until its official reveal, only Abrams knew the title of the film.
            </p>

            <h3 className="article-heading-3" id="4.2">Casting</h3>
            <p>
              Carrie Fisher, who played General Leia Organa, died on December 27, 2016. Variety and Reuters reported that she had been planned for a key role in
              Episode IX. In January 2017, Lucasfilm stated that there were no plans to digitally generate Fisher's performance as they had for
              <Link to="/starwars/rogue_one"> Rogue One</Link>. The following April, Carrie Fisher's brother Todd Fisher revealed that Fisher's daughter, Billie
              Lourd, had granted Disney the rights to use recent footage of Fisher. However, a week later, Kathleen Kennedy stated that Fisher would not appear in
              the film. In July 2018, J. J. Abrams announced that unused footage of Fisher from The Force Awakens would be used to help complete the story. In
              flashback scenes, digital de-aging was used for the appearance of Luke and Leia through the use of facial shots of both characters from the
              Empire Strikes Back, and Return of the Jedi respectively. In November 2019, prior to the release of the film, Fisher's brother Todd, who planned
              before her death for her character to appear in the film, revealed that "she was going to be the big payoff in the final film" and "she was going to
              be the last Jedi, so to speak."
            </p>
            <p>
              In July 2018, Keri Russell was in talks to play a part with some "action-heavy fight scenes", and it was confirmed that Billy Dee Williams would
              return as Lando Calrissian, onscreen for the first time since 1983's Return of the Jedi, marking one of the longest intervals between portrayals of
              a character by the same actor in American film history. At the end of July, Russell was confirmed to have been cast, and there was an
              announcement of returning and additional new cast members. In late August, Deadline Hollywood announced that Dominic Monaghan and
              <Link> Matt Smith</Link> has been cast in unspecified roles; in 2019, Smith deined his involvement, but he later clarified that he had been in talks
              for an unrealized "transformation" part. Early rumors from Making Star Wars claimed Smith was set to portray a "dark side acolyte" who gets
              possessed by Palpatine. Shawn Levy eventually confirmed the veracity of Smith's casting, hence why he described it as "destiny fulfilled" when he cast
              Smith in another part for his film <Link>Star Wars: Starfighter</Link>. Greg Grunberg reprises his role as Temmin "Snap" Wexley.
            </p>

            <h3 className="article-heading-3" id="4.3">Filming</h3>


            <h3 className="article-heading-3" id="4.4">Post-production</h3>


            <h3 className="article-heading-3" id="4.5">Music</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Promotion</h3>


            <h3 className="article-heading-3" id="5.2">Tie-in literature and merchandise</h3>


            <h3 className="article-heading-3" id="5.3">Video game</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>


            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>


            <h3 className="article-heading-3" id="7.2">Critical response</h3>


            <h3 className="article-heading-3" id="7.3">Audience response</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Future"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default RiseOfSkywalker;