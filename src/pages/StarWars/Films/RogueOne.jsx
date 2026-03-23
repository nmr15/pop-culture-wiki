import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RogueOne = () =>
{
  useEffect(() =>
  {
    document.title = "Rogue One: A Star Wars Story - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Capture of Galen Erso"},
              {id: "1.2", title: "Jyn's imprisonment"},
              {id: "1.3", title: "Mission to the Ring of Kafrene"},
              {id: "1.4", title: "An urgent message"},
              {id: "1.5", title: "Freeing Jyn Erso"},
              {id: "1.6", title: "When has become now"},
              {id: "1.7", title: "Battle on Jeddha"},
              {id: "1.8", title: "Galen's message"},
              {id: "1.9", title: "Destruction of Jeddha City"},
              {id: "1.10", title: "Mission to Eadu"},
              {id: "1.11", title: "Krennic's groveling on Mustafar"},
              {id: "1.12", title: "Rebel council meeting"},
              {id: "1.13", title: "Rogue One departs for Scarif"},
              {id: "1.14", title: "The Battle of Scarif"},
              {id: "1.15", title: "Secret mission to Tatooine"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Casting"},
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
              {id: "5.2", title: "Tie-in novels"},
              {id: "5.3", title: "Comics"},
              {id: "5.4", title: "Video games"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Release</a></li>
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.", title: "Box office"},
              {id: "7.", title: "Critical response"},
              {id: "7.", title: "Digital recreation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Rogue One: A Star Wars Story</li>
        </ul>
        <div>
          <h1 className="article-heading">Rogue One: A Star Wars Story</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rogue One: A Star Wars Story</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png" alt="Rogue One: A Star Wars Story poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Gareth Edwards</Link></td>
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
            <b>Rogue One: A Star Wars Story</b> is a 2016 American epic space opera film directed by <Link>Gareth Edwards</Link> and written by Chris Weitz and <Link>Tony
            Gilroy</Link>. Produced by <Link>Lucasfilm</Link> and distributed by Walt Disney Studios Motion Pictures, it is the first Star Wars anthology film and a prequel to
            <Link to="/starwars/a_new_hope"> Star Wars</Link> (1977). It stars <Link>Felicity Jones</Link>, <Link>Diego Luna</Link>, <Link>Ben Mendelsohn</Link>,
            <Link> Donnie Yen</Link>, <Link>Mads Mikkelsen</Link>, <Link>Alan Tudyk</Link>, Riz Ahmed, Jiang Wen, and <Link>Forest Whitaker</Link>. Set a week before the events of
            Star Wars, the film follows rebels who steal the schematics for the <Link>Galactic Empire</Link>'s ultimate weapon, the <Link>Death Star</Link>. It details the
            <Link> Revel Alliance</Link>'s first effective victory against the Empire, as referenced in the Star Wars opening crawl.
          </p>
          <p>
            John Knoll, who served as the visual effects supervisor of the <Link>Star Wars prequel trilogy</Link>, pitched Rogue One's story as an episode of the unproduced
            television series Star Wars: Underworld in 2003. He pitched it again as a film following Disney's acquisition of Lucasfilm in 2012; Edwards was hired to direct in 2014.
            Edwards sought to differentiate Rogue One from previous <Link to="/starwars">Star Wars</Link> films and approach it as a war film, omitting the opening crawl and
            transitional screen wipes used in the main "<Link>Skywalker Saga</Link>" installments. Principal photography began at Pinewood Studios, Buckinghamshire, in early
            August 2015 and wrapped in February 2016. The film went through extensive reshoots in mid-2016. The score was composed by <Link>Michael Giacchino</Link>, rather than
            the Skywalker Saga composer <Link>John Williams</Link>. With an estimated production budget of $200-280.2 million, Rogue One is one of the most expensive films ever
            made. 
          </p>
          <p>
            Rogue One: A Star Wars Story premiered in Los Angeles on December 10, 2016, and was theatrically released in the United States on December 16. It received positive
            reviews, with praise for its acting, story, visuals, musical score, cinematography, and darker tone than previous Star Wars films, but criticism for its pacing and
            digital recreations of <Link>Carrie Fisher</Link> and <Link>Peter Cushing</Link>. Rogue One grossed $1 billion worldwide, becoming the second highest grossing film of
            2016, and received two Academy Award nominations for Best Sound Mixing and Best Visual Effects. <Link to="/starwars/andor_series">Andor</Link>, a prequel television
            series, aired on the streaming service <Link>Disney+</Link> for two seasons from 2022 to 2025.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Capture of Galen Erso</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/a/a6/Erso_Krennic_Reunion_RO.png" alt="Galen Erso & Krennic reunion" />
              <p>Krennic and his death troopers arrive on Lah'mu to capture Galen Erso.</p>
            </div>
            <p>
              Approximately six years after the formation of the Galactic Empire, Imperial Director <Link>Orson Krennic</Link> and a squad of death troopers land on the planet
              Lah'mu and forcibly recruit scientist <Link>Galen Erso</Link> to complete his work on the Death Star, a battle station the Empire hopes to be capable of destroying
              entire planets. Galen's wife, Lyra Erso, is killed when she shoots and injures Krennic in an attempt to stop him from taking her husband. Their daughter,
              <Link to="/starwars/jyn_erso"> Jyn Erso</Link>, goes into hiding until <Link to="/starwars/saw_gerrera">Saw Gerrera</Link>, leader of the Partisans, rescues her
              and takes her in.
            </p>

            <h3 className="article-heading-3" id="1.2">Jyn's imprisonment</h3>
            <p>
              Thirteen years later, an adult Jyn Erso, under the alias of Llana Halik, has been imprisoned in a Detention center on Wobani, sharing a cell with Oolin Mustars.
            </p>

            <h3 className="article-heading-3" id="1.3">Mission to the Ring of Kafrene</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/1/19/MissiontoKafrene.jpg" alt="Cassian and Tivik" />
              <p>Cassian and Tivik discuss the "planet killer".</p>
            </div>
            <p>
              On the Ring of Kafrene trading outpost in section nine, the Revel Intelligence officer, Captain <Link to="/starwars/cassian_andor">Cassian Andor</Link>, meets with
              a contact, a man named Tivik, who reveals that an imperial cargo pilot defected from the Galactic Empire the day before and is telling people that they are making
              a weapon with the <Link>Kyber crystals</Link> from <Link>Jeddha</Link>. After persuasion from Andor, Tivik reveals that the weapon is a "planet killer" and that
              Rook is telling people that Galen Erso, an old friend of Saw Gerrera's, sent him. Andor escapes before he can be caught by Impertial <Link>stormtroopers</Link>.
            </p>

            <h3 className="article-heading-3" id="1.4">An urgent message</h3>
            <p>
              Having defected, Imperial pilot <Link>Bodhi Rook</Link> seeks out Saw, carrying an important message from Galen concerning the Empire's construction of an ultimate
              weapon. He finds Gerrera's hideout on Jeddha but Gerrera's Partisan soldiers, including Benthic, are distrustful of Rook's intentions and capture him. They bring
              him before Gerrera and though Bodhi pleads his case to the Partisan leader, Gerrera does not trust him either, fearing that he is being lured into a trap. To
              discoover if Rook is being truthful or not, Gerrera subjects him to the torurous creature Bor Gullet, an experience which leads to a temporary loss of Bodhi's
              sanity.
            </p>

            <h3 className="article-heading-3" id="1.5">Freeing Jyn Erso</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/6/69/JynAlliance.png" alt="Jyn Erso" />
              <p>Jyn before the Alliance High Command</p>
            </div>
            <p>
              Jyn is freed from Imperial captivity by Extraction Team Bravo and brought before Rebel leaders including <Link to="/starwars/mon_mothma">Mon Mothma</Link>, Jan
              Dodonna, <Link>Bail Organa</Link>, Davits Draven, and Andor. They convince her to help get them an audience with Saw, whom Jyn has not seen since he abandoned her
              years prior. Though the mission is presented to Jyn as one of extraction. Draven covertly orders Cassian to kill Galen so as to prevent the weapon from being
              completed. Jyn, along with Cassian and his reprogrammed Imperial droid <Link>K-2SO</Link>, set off for the moon Jeddha in a Rebel U-wing.
            </p>

            <h3 className="article-heading-3" id="1.6">When has become now</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/f/ff/TarkinAndKrennic.png/revision/latest?cb=20200512011722" alt="Tarkin and Krennic" />
              <p>Tarkin warns Krennic that failure will not be tolerated.</p>
            </div>
            <p>
              On the bridge of the Imperial I-class <Link>Star Destroyer</Link> Executrix, <Link to="/starwars/grand_moff_tarkin">Governor Wilhuff Tarkin</Link> monitors
              construction of the Death Star. As he looks on, the superlaser is being installed. Krennic comes aboard the Star Destroyer and approaches Tarkin on the bridge.
              Tarkin expresses his concern over the defected cargo pilot, who is spreading rumors on Jedha about the Death Star's existence. He tells Krennic that his time is up
              as far as completing the battle station goes and that <Link to="/starwars/sheev_palpatine">the Emperor</Link> would not tolerate any more delays on the project.
              Suggesting that both problems should be solved together with a test of the weapon, Tarkin makes it clear to Krennic that failure will not be tolerated.
            </p>

            <h3 className="article-heading-3" id="1.7">Battle on Jedha</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/6/68/ChirrutImweStormtroopersJedha-R1.png/revision/latest?cb=20160813201653" alt="Chirrut against stormtroopers" />
              <p>Chirrut engages stormtroopers during the Battle on Jedha.</p>
            </div>
            <p>
              Cassian, Jyn, and K-2SO arrive on Jedha where Cassian expects to meet up with a Partisan contact. K-2SO stays on the ship while Jyn and Cassian set out to find his
              contact, but the duo is caught in the middle of an armed uprising against the Empire led by Gerrera's partisans. Jyn and Cassian find safety only after K-2SO disobeys
              orders to stay on the U-Wing and comes to their aid. After fighting off the Imperial troopers, the convoy returns to Tythoni Square where the uprising had taken place.
              Imperial reinforcements arrive and K-2SO is mistaken for an actual Imperial droid transporting prisoners. The droid tries to play along, but the disguise is foiled. They
              are saved by the intervention of blind warrior <Link>Chirrut Imwe</Link> and mercenary <Link>Baze Malbus</Link>, guardians of the Kyber Temple on Jedha, which the Empire is
              stripping of its treasures. After the Imperial reinforcements are fought off, the group thinks they are in the clear until a group of Partisans, including Benthic, arrives
              and takes over the square, kidnapping Andor, Werso, and the two guardians with K2 having gone back to the ship. Benthic feels that Andor was hostile towards the Partisans
              during the uprising because he shot one of their own who was preparing to throw a grenade at a tank next to which Jyn was hiding. Jyn reveals to the Partisans that she is
              the daughter of Galen Erso and the partisans take them to their headquarters in the Catacombs of Cadera and imprison them.
            </p>

            <h3 className="article-heading-3" id="1.8">Galen's message</h3>
            <h3 className="article-heading-3" id="1.9">Destruction of Jeddha City</h3>
            <h3 className="article-heading-3" id="1.10">Mission to Eadu</h3>
            <h3 className="article-heading-3" id="1.11">Krennic's groveling on Mustafar</h3>
            <h3 className="article-heading-3" id="1.12">Rebel council meeting</h3>
            <h3 className="article-heading-3" id="1.13">Rogue One departs for Scarif</h3>
            <h3 className="article-heading-3" id="1.14">The Battle of Scarif</h3>
            <h3 className="article-heading-3" id="1.15"Secret mission to Tatooine></h3>
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
            <h3 className="article-heading-3" id="3.2">Casting</h3>
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
            <h3 className="article-heading-3" id="5.2">Tie-in novels</h3>
            <h3 className="article-heading-3" id="5.3">Comics</h3>
            <h3 className="article-heading-3" id="5.4">Video games</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
            <h3 className="article-heading-3" id="7.3">Digital recreation</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"TV series"} />
          <div>

          </div>
        </div>
        <div>
          <TableStarWars />
        </div>
      </main>
    </>
  )
}

export default RogueOne;