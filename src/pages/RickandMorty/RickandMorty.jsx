import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const RickandMorty = () =>
{
  useEffect(() =>
  {
    document.title = "Rick and Morty - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise and main characters</a></li>
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Animation and voice recording"},
              {id: "3.4", title: "Roiland's firing"}
            ]}
          />
          <Collapse 
            id="4"
            item="Themes and analysis"
            sub={[
              {id: "4.1", title: "Comedic style"},
              {id: "4.2", title: "Philosophy"}
            ]}
          />
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Broadcast"},
              {id: "5.2", title: "Streaming service and home media"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Industry impact"},
              {id: "6.4", title: "Awards and nominations"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media and products"
            sub={[
              {id: "7.1", title: "Possible feature film"},
              {id: "7.2", title: "Spin-off series"},
              {id: "7.3", title: "Cameos", sub2: [
                {id: "7.3.1", title: "Film"},
                {id: "7.3.2", title: "Television"}
              ]},
              {id: "7.4", title: "Comics"},
              {id: "7.5", title: "Product tie-ins"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Rick and Morty</li>
        </ul>
        <div>
          <h1 className="article-heading">Rick and Morty</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rick and Morty</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/500px-Rick_and_Morty.svg.png" alt="Rick and Morty logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                <Link>Justin Roiland</Link> <br />
                <Link>Dan Harmon</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of Rick and Morty episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Rick and Morty character</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Rick and Morty</b> is an American adult animated science fiction sitcom created by <Link>Justin Roiland</Link> and <Link>Dan Harmon</Link> for
            <Link> Cartoon Network</Link>'s nighttime programming block <Link>Adult Swim</Link>. The series follows the misadeventures of
            <Link to="/rick_and_morty/rick_sanchez"> Rick Sanchez</Link>, a cynical mad scientist, and his good-hearted but fretful grandson
            <Link to="/rick_and_morty/morty_smith"> Morty Smith</Link>, who split their time between domestic life and interdimensional adventures that take
            place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's <Link>flying saucer</Link>.
            The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his
            grandson into hijinks.
          </p>
          <p>
            Roiland initially voiced Morty and Rick with Chris Parnell as <Link to="/rick_and_morty/jerry_smith">Jerry</Link>, Spencer Grammer as
            <Link to="/rick_and_morty/summer_smith"> Summer</Link> and Sarah Chalke as <Link to="/rick_and_morty/beth_smith">Beth</Link> also star. The series
            originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short film festival Harmon co-founded. A seventh
            season was confirmed as part of a long-term deal with Cartoon Network that ordered 70 new episodes, and by 2024 renewed the series through a twelfth
            season. 
          </p>
          <p>
            Adult Swim cut ties with Roiland in 2023 amid allegations of domestic abuse and recast his roles with Ian Cardoni and Harry Belden taking over beginning
            with the seventh season premiering in October 2023. 
          </p>
          <p>
            Since its debut, the series has received critical acclaim for its writing, originality, creativity, and humor. It has been nominated for three Primetime
            Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. At times, the series has
            been the most viewed television comedy for adults between 18 and 24. The popularity of Rick and Morty has made it a hundred-million dollar merchandising
            and media franchise. 
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>
            <p>
              The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and
              Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. The family lives in a suburb outside of Seattle, Washington, with the
              characters traveling to other planets and dimensions through portals and Rick's flying saucer.
            </p>
            <p>
              Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes
              on adeventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naive but grounded moral compass plays
              counterpoint to Rick's Machiavellian ego. Morty's 17-year old sister, Summer, is a more conventional teenager who worries about improving her status
              among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive
              force in the household, though self-conscious about her professional role as a horse surgeon. She is dissastisfied with her marriage to Jerry, a
              simple-minded and insecure person, who disapproves of Rick's influence over his family.
            </p>
            <p>
              Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one
              reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe,
              but this does not apply to any other member of the Smith household. For instance, in the season one episode "<Link>Rick Potion #9</Link>", after
              turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving the original Summer, Beth, and Jerry behind.
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
            <p>
              Rick and Morty was created by Justin Roiland and Dan Harmon. The duo first met at Channel 101, a non-profit monthly short film festival in Los
              Angeles co-founded by Harmon. At Channel 101, participants submit a short film in the format of a pilot, and a live audience decides which pilots
              continue as a series. Roiland, then a producer on reality programming, began submitting content to the festival a year after its launch, in 2004.
              His pilots typically consist of shock value, "sick and twisted" elements that received a confused reaction from the audience. Nevertheless, Harmon
              took a liking to his humor and the two began collaborating. In 2006, Roiland was fired from working on a television series he regardes as creatively
              stifling, and funneled his creative energies into creating a webisode for Channel 101. The result was The Real Animated Adventures of Doc and Mharti,
              an animated short starring parodies of Doc Brown and Marty McFly, characters from the Back to the Future film trilogy. In the short, which Harmon
              would dub "a bastardization, a pornographic vandalization", Doc Smith urges Mharti to perform oral sex on him in order to get back in time. The
              audience reacted to it wildly, and Roiland began creating more shorts involving the characters, which soon evolved beyond his original intentions and
              their obvious origin within the film from which it was cullen. Harmon would later create and produce <Link to="/community">Community</Link>, an NBC
              sitcom, while Roiland would work primarily in voice acting for Disney's Fish Hooks and Cartoon Network's
              <Link to="/adventuretime"> Adventure Time</Link>.
            </p>
            <p>
              In 2012, Harmon was briefly fired from Community. Adult Swim, searching for a more primetime, "hit" show, shortly afterward approached Harmon, who
              initially viewed the channel as unfit for his style. He was also unfamiliar with animation and his process for creating television focused more
              heavily on dialogue, characters, and story. Instead, he phoned Roiland to inquire if he had any ideas for an animated series. Roiland immediately
              brought up the idea of using the Doc and Mharti characters, renamed Rick and Morty. At first, Roiland wanted the show's run to consist of one
              eleven-minute segment, but Adult Swim pushed for a half-hour program. Harmon felt the best way to etend the voices into a program would be to build a
              family around the characters, while Adult Swim development executive Nick Weidenfeld suggested that Rick be Morty's grandfather. Having pitched multiple
              television programs that did not get off the ground, Roiland was initially very unreceptive to others attempting to give notes on his pitch. Prior to
              developing Rick and Morty, he had created three failed animated pilots for Fox, and he had begun to feel "burned out" with developing television.
            </p>
            <p>
              The first draft was completed in six hours on the Paramount Pictures lot in Dan Harmon's unfurnished Community office. The duo had worked out the
              basics of the story that day, sold the pilot, and then sat down to write. Roiland, while acknowledging a tendency for procastination, encouraged
              Harmon to stay and write the entire first draft. "We were sitting on the floor, cross-legged with laptops and I was about to get up and go home and he
              said, 'Wait, if you go home, it might take us three months to thing. Stay here right now and we can write it in six hours.' He just had a premonition
              about that," recalled Harmon. In the beginning, Adult Swim was unsure of Roiland doing both voices, partially due to the undeveloped nature of the
              character of Morty. Harmon wrote four short premises in which Morty took a more assertive role and sent it to Mike Lazzo. For the first season, Adult
              Swim placed a tamer-than-usual TV-14 rating on the program, which was initially met with reluctance from the show's staff. The network's reason behind
              the rating was that it would soon begin broadcasting in primetime, competing with major programs. Many later episodes have received TV-MA ratings, with
              the first being the episode "Interdimensional Cable 2: Tempting Fate" in season 2.
            </p>
            <p>
              The theme song for Rick and Morty by Ryan Elder was originally used in a rejected Cartoon Network pilot Roiland made called "Dog World", which was
              referenced in the episode "Lawnmower Dog."
            </p>

            <h3 className="article-heading-3" id="3.2">Writing</h3>
            <div className="img-right img-card">
              <img src="https://en.wikipedia.org/wiki/File:Mike_McMahan_by_Gage_Skidmore.jpg" alt="Mike McMahan" />
              <p>Mike McMahan at 2019 San Diego Comic-Con</p>
            </div>
            <p>
              Harmon noted that the writers' room at the show's studio bears a striking resemblance to the one used for Community. In comparing the two, he noted that
              the writing staff of Rick and Morty was significantly smaller, and more "rough and tumble verbally." The first season writing staff consisted of Roiland,
              Harmon, Tom Kauffman, Ryan Ridley, Wade Randolph, and Eric Acosta, while writer's assistant Mike McMahan was also given writing credit. Described as a
              "very, very tiny little writers' room with a lot of heavy lifting from everybody," the show's writing staff, like many Adult Swim productions, is not
              unionized with the Writers Guild of America, though in 2022 production staff at Rick & Morty filed a petition for a union election with the National
              Labor Relations Board in a bid to join The Animation Guild. The writing staff first meets and discusses ideas, which evolve into a story. Discussions
              often include anecdotes from personal life as well as thoughts on the science fiction genre. After breaking the story, which consists of developing its
              consistency and logical beginning, middle, and conclusion, a writer is assigned to create an outline.
            </p>

            <h3 className="article-heading-3" id="3.3">Animation and voice recording</h3>
            <h3 className="article-heading-3" id="3.4">Roiland's firing</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Themes and analysis"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Comedic style</h3>
            <h3 className="article-heading-3" id="4.2">Philosophy</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Broadcast</h3>
            <h3 className="article-heading-3" id="5.2">Streaming service and home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Critical response</h3>
            <h3 className="article-heading-3" id="6.2">Ratings</h3>
            <h3 className="article-heading-3" id="6.3">Industry impact</h3>
            <h3 className="article-heading-3" id="6.4">Awards and nominations</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Other media and products"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Possible feature film</h3>
            <h3 className="article-heading-3" id="7.2">Spin-off series</h3>
            <h3 className="article-heading-3" id="7.3">Cameos</h3>
            <h4 className="article-heading-4" id="7.3.1">Film</h4>
            <h4 className="article-heading-4" id="7.3.2">Television</h4>

            <h3 className="article-heading-3" id="7.4">Comics</h3>
            <h3 className="article-heading-3" id="7.5">Product tie-in</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default RickandMorty;