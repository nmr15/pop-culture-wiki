import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AvengersAgeOfUltron = () =>
{
  useEffect(() =>
  {
    document.title = "Avengers: Age of Ultron - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Merchandise"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical reception"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Avengers: Age of Ultron</li>
        </ul>
        <div>
          <h1 className="article-heading">Avengers: Age of Ultron</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Avengers: Age of Ultron</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Avengers_Age_of_Ultron_poster.jpg/120px-Avengers_Age_of_Ultron_poster.jpg" alt="Avengers: Age of Ultron" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joss Whedon</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/antman_film">Ant-Man</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Avengers: Age of Ultron</b> is a 2015 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> superhero team
            the <Link>Avengers</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion Pictures. It is the sequel
            to <Link to="mcu/the_avengers_film">The Avengers</Link> (2012) and the 11th film in the <Link to="/mcu">Marvel Cinematic Universe</Link>
            (MCU). Written and directed by <Link>Joss Whedon</Link>, the film features an ensemble cast including <Link>Robert Downey Jr.</Link>,
            <Link> Chris Hemsworth</Link>, <Link>Mark Ruffalo</Link>, <Link>Chris Evans</Link>, <Link>Scarlett Johansson</Link>, <Link>Jeremy
            Renner</Link>, <Link>Don Cheadle</Link>, <Link>Aaron Taylor-Johnson</Link>, <Link>Elizabeth Olsen</Link>, <Link>Paul Bettany</Link>,
            <Link> Cobie Smulders</Link>, <Link>Anthony Mackie</Link>, <Link>Hayley Atwell</Link>, <Link>Idris Elba</Link>, <Link>Linda Cardellini</Link>,
            <Link>Stellan Skarsgård</Link>, <Link>James Spader</Link>, and <Link>Samuel L. Jackson</Link>. In the film, the <Link>Avengers</Link>
            fight <Link>Ultron</Link> (Spader), an artifical intelligence created by <Link to="/mcu/tony_stark">Tony Stark</Link> (Downey) and
            <Link to="/mcu/bruce_banner"> Bruce Banner</Link> (Ruffalo), who plans to bring about world peace by causing human extinction.
          </p>
          <p>
            A sequel was announced in May 2012 after the successful release of The Avengers, with Whedon set to return as writer and director in August.
            He updated Ultron's origin for the film to invlove the MCU's Avengers team and introduced the characters
            <Link to="/mcu/piertro_maximoff">Pietro</Link> (Taylor-Johnson) and <Link to="/mcu/wanda_maximoff">Wanda Maximoff</Link> (Olsen), to whom
            Marvel shared the rights with 20th Century Fox. Casting began in June 2013 with Downey re-signing. Second unit filming began in February 2014
            in South Africa, with principal photography taking place between March and August, primarily at Shepperton Studios in Surrey, England.
            Additional footage was filmed in Italy, South Korea, Bangladesh, the state of New York, and around England. With an estimated net production
            budget of $365 million, the film is one of the most expensive ever made.
          </p>
          <p>
            Avengers: Age of Ulton premiered in Hollywood, Los Angeles, on April 13, 2015, and was released in the United States on May 1, as part of
            <Link> Phase Two</Link> of the MCU. The film received generally positive reviews from critics and grossed over $1.4 billion worldwide,
            becoming the fourth-highest grossing film of 2015 and the fifth-highest grossing film of all time during its run. Two sequels have been
            released: <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> (2018) and <Link to="/mcu/avengers_endgame">Avengers:
            Endgame</Link> (2019).
          </p>
        </div>
         <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              In the Eastern European country of <Link to="/mcu/sokovia">Sokovia</Link>, the <Link to="/mcu/avengers_(team)">Avengers</Link> storm a
              Hydra fortress with the mission to retrieve <Link to="/mcu/loki">Loki</Link>'s <Link to="/mcu/loki's_scepter">scepter</Link> from
              <Link to="/mcu/baron_strucker"> Baron Strucker</Link>. Meanwhile, the drones of the Iron Legion are on crowd control duty. Strucker
              decides to surrender, seeing there was no chance of victory. Doctor List protests the decision, suggesting they release the enhanced
              twins, <Link to="/mcu/wanda_maximoff">Wanda Maximoff</Link>, who possesses telekinetic and telepathic abilities, and
              <Link to="/mcu/piertro_maximoff"> Pietro Maximoff</Link>, who possesses superhuman speed. Struckr refuses to risk them, unaware that the
              twins have already mobilized. Pietro confronts the Avengers outside the base, distracting
              <Link to="/mcu/clint_barton"> Haekeye</Link> ashe comes under fire from one of Hydra's bunkers, while Wanda remains inside the
              fortress, which Iron Man and <Link to="/mcu/steve_rogers">Captain America</Link> were able to penetrate. Captain America then confronts
              Strucker and subdues him.
            </p>
            <p>
              In the outer base, <Link to="/mcu/thor">Thor</Link> takes the injured Hawkeye back to the Quinjet, while
              <Link to="/mcu/natasha_romanoff"> Black Widow</Link> calms down the Hulk. Inside the base, Iron Man finds the scepter inside a secret
              chamber containing Strucker's experiments as he downloads the Hydra scientist's records. As he explores the chamber, Wanda sneaks behind
              him and uses her powers to make him envision his greatest fear: the bodies of the Avengersstrewn about somewhere in deep space as the
              Earth again comes under attack from the Chitauri: with Captain America's dying breath spent scolding Tony for not saving them, and for
              not doing his best. Tony eventually snaps out of the vision, and retrieves the scepter.
            </p>
            <p>
              The Avengers return to the <Link to="/mcu/avengers_tower">Avengers Tower</Link> in New York. Doctor
              <Link to="/mcu/helen_cho"> Helen Cho</Link>, an expert in cellular regeneration, takes a look at Clint's injuries. Tony asks Thor if he
              could study the scepter before it's taken to <Link to="/mcu/asgard">Asgard</Link>, and agrees, giving Tony three days before he
              departs. Tony starts to study the gem inside the scepter, and discovers it possesses some kind of artificial intelligence far more
              advanced than his own A.I., <Link to="/mcu/J.A.R.V.I.S.">J.A.R.V.I.S.</Link> Tony convinces Bruce to resume thier work on Project Ultron,
              a peacekeeping program meant to control the drones of the Iron Legion, which could help create peace on the planet in ways the Avengers
              could not. During the party in celebration of the Avengers' latest victory. Tony leaves the rest of Ultron's syncing process to
              J.A.R.V.I.S.
            </p>
            <p>
              As the party begins, the Avengers are joined by their allies, including <Link to="/mcu/sam_wilson">Sam Wilson</Link>,
              <Link to="/mcu/maria_hill"> Maria Hill</Link>, and <Link to="/mcu/james_rhodes">James Rhodes</Link>. During the celebration, Natasha
              flirts with Bruce, and Tony and Thor argue over who has the better girlfriend. Meanwhile, the syncing process finishes, and
              <Link to="/mcu/ultron"> Ultron</Link> awakens, confused by its state of existence. Even though J.A.R.V.I.S. tries to assist Ultron
              during its first moments of consciousness, the assimilation of all the information on the present world and humanity's history causes it
              to go haywire. Ultron attacks and seemingly destroys J.A.R.V.I.S. before building itself a body using damaged parts of the Iron Legion.
            </p>
            <p>
              The party has since wound down, and only the Avengers, Maria Hill, Rhodey, and Helen Cho remain. They entertain themselves by taking turns
              trying to lift Thor's hammer <Link to="/mcu/mjolnir">Mjolnir</Link>. Though everyone falls, Steve manages to make it budge. Ultron
              suddenly interrupts the friendly competition, and accuses the Avengers of preventing the world from achieving peace by not allowing it to
              evolve. Ultron believes that the Avengers must be destroyed in order to establish world peace. Ultron then sets numerous Iron Legion
              drones to attack the Avengers, one of which escapes with Loki's scepter. Even though Thor destroyed Ultron's body, it used the internet
              to escape, taking on all of Strucker's data with it.
            </p>
            <p>
              Ultron travels to Sokovia and takes over the inner workings of Strucker's now-abandoned base, and builds itself a new body. Using
              Strucker's data, Ultron learns about the Maximoff twins, and lures them to the church in the center of the country. Wanda tries to read
              Ultron's mind, but the twins soon discover Ultron is not human. Ultron then convinces the wins to join his cause to destroy the Avengers.
            </p>
            <p>
              Back in New York, the team confronts Tony for creating Ultron without their knowledge. Thor scolds Tony for meddling with the scepter, but
              Tony claims that they needed Ultron, because no matter how good they do to the world, something like the Chitauri invasion can happen
              again, and the world needs something as powerful as Ultron was intended to be. All the while, Ultron and the twins have been on the move,
              building their army, and even killing Strucker, writing the word "PEACE" in his blood on his cell wall. The Avengers deduce that Ultron
              killed Strucker because he would know what Ultron would do next. The Avengers start investigating the physical copies of Strucker's files,
              and infer Ultron will want to use <Link to="/mcu/vibranium">vibranium</Link> to build itself a stronger body. They soon find out that
              vibranium can be found in <Link to="/mcu/wakanda">Wakanda</Link>, and that one of its biggest black market dealers,
              <Link to="/mcu/ulysses_klaue"> Ulysses Klaue</Link>, operates out of South Africa.
            </p>
            <p>
              In a salvage yard close to South Africa, the Maximoff twins approach Klaue in his office inside one of the scrapped ships. They try to
              intimidate him, but as soon as Klaue mentions he would only talk to whomever was in charge of them. Ultron flies up to the office and
              throws Klaue out of the window, and demands vibranium. When Klaue claims that the vibranium was worth billions, Ultron uses his control
              over the internet to transfer large amounts of money to Klaue's different accounts. Ultron is enraged when Klaue compares him to Tony,
              and cuts off Klaue's arm while venting frustration. The Avengers arrive, and a battle breaks out.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>

            <h3 className="article-heading-3" id="3.2">Pre-production</h3>

            <h3 className="article-heading-3" id="3.3">Filming</h3>

            <h3 className="article-heading-3" id="3.4">Post-production</h3>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Promotion</h3>

            <h3 className="article-heading-3" id="5.2">Merchandise</h3>
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
            <h4 className="article-heading-4" id="7.1.1">United States and Canada</h4>

            <h4 className="article-heading-4" id="7.1.2">Other territories</h4>

            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AvengersAgeOfUltron;