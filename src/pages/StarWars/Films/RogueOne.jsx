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
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/7/7d/GalenErsoMessage-R1.png/revision/latest?cb=20171111050726" alt="Galen Erso hologram" />
              <p>Galen's message revealing the Death Star's flaw.</p>
            </div>
            <p>
              While Cassian, Chirrut, and Baze are locked in cells, Jyn is brought before Saw. The calm captive Chirrut "prays" to the Force with his mantra "I am one with the
              Force and the Force is with me" while Baze mocks his partner's mysterious ways. Cassian becomes impatient with Chirrut and begins to try and pick the cell lock
              himself. Gerrera is surprised to see Jyn, having parted ways with her years before. He is still wary that the pilot's message and Jyn's return is simply a trap but
              when Jyn explains her intentions of finding Galen he becomes more comfortable. He questions what Jyn wants to obtain from this to which Jyn answers that she wants
              no part of it and that her role is finished. Refusing to believe that Jyn no longer cares about the Rebel cause. Gerrera offers to show her something that he feels
              will change her mind. Meanwhile, on the Death Star, Tarkin and Krennic prepare to test the weapon on Jedha City, having evacuated all Imperial forces from the
              moon via Protocol 13. Krennic goes to order the complete destruction of the moon, but Tarkin overrules him and orders that the test-firing be conducted at minimum
              power. With imminent danger approaching, unbeknownst to those on the moon, Cassian, Chirrut, and Baze linger in their cells. They notice that in the cell next to
              them is an Imperial pilot, Bodhi Rook, and Cassian begins to question him, curious if he is the cargo pilot that brought the message. Bor Gullet's effects on Bodhi
              are clear and he does not seem to understand what Cassian is talking about until he mentions Galen's name and Rook's memory is jogged. As the Death Star's
              superweapon commences primary ignition above the moon, Gerrera begins to show Jyn the message that Bodhi brought. The message is a hologram, in which Jyn's father
              expresses his love for her and discloses his coerced help on the Death Star project. Galen also reveals that he covertly compromised the Death Star's design by
              including a subtle vulnerability in its reactor that can be used to destroy it. He tells her that the structural plans are at an Imperial high-security data bank
              on the planet Scariff. However, before the hologram can finish, the Death Star fires on the moon and chaos ensues.
            </p>

            <h3 className="article-heading-3" id="1.9">Destruction of Jeddha City</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/d/d1/SawGerreraAcceptsFate-R1.png" alt="Saw accepts his fate" />
              <p>Saw Gerrera's fate is sealed.</p>
            </div>
            <p>
              As the imminent destruction of Jedha City begins, the Partisans in the Catacombs begin to flee. Cassian quickly hot-wires the cell door and he, Chirrut, and Baze
              escape captivity. Cassian hurries to the convoy's possessions that were seized when the Partisans kidnapped them and frantically uses his comlink to call K-2SO who
              describes the destruction ensuing outside. Cassian informs him to locate their position so they can escape. Before they can flee, Cassian goes to find Jyn, telling
              Chirrut and Baze to free the pilot, which Baze does by blasting the cell door with his MWC-35c "Staccato Lightning" repeating cannon. Cassian locates Jyn and informs her
              that Bodhi has told him where her father is. Gerrera urges her to go with Cassian, but when Jyn suggests he comes with them he refuses, electing to remain there and
              die with the city. The mass exodus of the catacombs begins, and those who exit look on in horror as they see Jedha's surface beginning to peel back, destroying
              everything in its path. As the Catacombs begin to collapse along with everything else, K-2SO pilots the U-wing through the destruction to pick up the convoy. Cassian,
              Jyn, Chirrut, Baze, and Bodhi hurriedly board the U-wing and the ship begins its escape through the destruction. Gerrera watches from the collapsing Catacombs as the
              U-wing takes off and the blast wave overtakes the area. Shortly before his impending death, Gerrera tears off his breath mask and accepts his fate. Jyn watches from
              the U-wing as the wave consumes the Catacombs and kills Gerrera. The convoy looks on in horror at the destruction outside as K-2SO and Cassian pilot the U-wing,
              fleeing the destruction that threatens to overtake them. Barely escaping the blast wave, Cassian hurriedly punches in the calculations and the U-wing blasts into
              hyperspace, narrowly escaping Jedha.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/6/67/Destruction_of_Jedha_City_Aftermath.png" alt="Destruction of Jedha city" />
              <p>Krennic and Tarkin look on as Jedha City is destroyed.</p>
            </div>
            <p>
              As the Death Star's demonstration is carried out, Krennic, Tarkin, and many other Imperials look on. Krennic expresses the "beauty" of the destruction. With the
              demonstration complete. Tarkin congratulates Krennic but promptly uses Rook's defection from Galen Erso's Imperial facility on Eadu and the security leak on Jedha
              under Krennic's command as a pretext to take control over the project. Enraged, Krennic openly challenges Tarkin's decision and decides to deal with the defector
              and the potential Rebel sympathizer on Eadu personally. In the aftermath of the incident on Jedha, Cassian sends a coded message back to the Alliance base to
              inform them that Jedha has been destroyed and that he has learned that Galen is on Eadu. Receiving the message, General Draven is dumbfounded by the destruction of
              Jedha City but advises Andor to keep to the plan of killing Galen. Already in hyperspace, Cassian receives Draven's instructions and informs K-2SO to set their
              course for Eadu. The entire convoy is in shock concerning Jedha's destruction, and a troubled Chirrut begs Baze to describe the extent of the destruction. Baze
              reluctantly consents. Knowing now that her father is on Eadu, Jyn explains to Bodhi, who mistakenly believed that his message was too late, that Galen has laid a
              trap in the Death Star. However, with the message having been destroyed in the chaos on Jedha, she has no way of backing up her claims and the group is wary to
              believe her. With Cassian refusing to send word of Jyn's claim to the Alliance, she resolves to get her father on Eadu and bring him back to the Alliance so that
              he can tell them himself.
            </p>

            <h3 className="article-heading-3" id="1.10">Mission to Eadu</h3>
            <p>
              With Tarkin having seized control of the Death Star project, Krennic departs the Death Star in his ST 149 shuttle en route for Eadu, where he plans to expose the
              Rebel sympathizer in Galen Erso's team. Meanwhile, the Rebel convoy, also seeking out Galen Erso on Eadu, approaches the planet in the U-wing. The planet's stormy
              conditions hinder their approach, and as Bodhi guides them towards the Imperial installation, they crash whilst attempting to avoid Imperial detection.
            </p>
            <p>
              Jyn tracks her father to an Imperial research facility, where Cassian chooses not to kill Galen. When Krennic arries and threatens to have Galen's main team
              killed for causing the security leak, Galen confesses he is responsible. Krennic executes the team nevertheless, and Jyn makes her presence known just as a Rebel
              bombing raid begins, leaving Galen fatally wounded. Jyn's father dies in her arms before she and her group escape in a stolen Imperial cargo shuttle.
            </p>

            <h3 className="article-heading-3" id="1.11">Krennic's groveling on Mustafar</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/5/51/VaderAndKrennicOnMustafar.png" alt="Vader and Krennic" />
              <p>Vader confronts Krennic at Mustafar following the news of Galen Erso's betrayal.</p>
            </div>
            <p>
              With Galen Erso silenced, Krennic travels to <Link>Mustafar</Link> to speak with the mysterious Dark Lord, <Link to="/starwars/anakin_skywalker">Darth Vader</Link>
              at his castle. Upon Krennic's arrival, the Dark Lord's servant, Vaneé alerts Vader, who is meditating in a rejuvenation chamber, that the Director has arrived.
              Vader exits his mediation to confront Krennic on a platform overlooking the volcanic landscape of the planet. Vader expresses his concern that the Death Star has
              become more of a problem than the solution it was intended to be, citing Krennic's inability to keep the project a secret as the main catalyst for the change in
              approach. Krennic defends himself and his creation, claiming that he has delivered a remarkable weapon to the Emperor. Because of his self proclaimed success, he
              petitions that Vader grant him an opportunity to personally meet with the Emperor and advise him of the Death Star's unprecedented potential. Vader, however, is
              far more concerned about the rumors that had reached the higher levels of the Empire of the destruction of Jedha City and the attack on the Eadu facility by the
              Rebellion and what these revelations mean as far as the secrecy surrounding the Death Star project. Krennic attempts to shift blame onto Tarkin for having ordered
              the demonstration on Jedha, but Vader is not impressed by this futile effort and criticizes Krennic's groveling, reminding the Director that the secrecy behind the
              Death Star project was instituted in order to prevent open defiance from the Senate. Vader suggests that the Jedha incident be disguised as a mining disaster, but
              seems to imply that Galen Erso's betrayal might have been a bitter blow to the Empire's secrecy. Vader instructs Krennic to ensure that no other leaks occur so that
              the Emperor would be satisfied that the project had not been compromised. As Vader swiftly departs, Krennic makes a last plea for his continued control over the
              last project, hoping to remain in command of the battle station rather than Tarkin. However, Vader's patience has run thin, and when Krennic requests that Vader
              speak to the Emperor on his behalf, Vader <Link>chokes</Link> the Director using <Link>the Force</Link>. As Krennic falls to his knees, Vader warns him to temper
              his aspirations, lest they cause his downfall. He releases Krennic and the conversation is ended.
            </p>

            <h3 className="article-heading-3" id="1.12">Rebel council meeting</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/e/e4/JynBeforetheAllianceHighCommand.png" alt="Jyn stands before the Alliance" />
              <p>Jyn pleads to the Alliance High Command to take action on Scariff.</p>
            </div>
            <p>
              Having returned to the Rebel base on <Link>Yavin 4</Link>, Jyn and Bodhi are both present at an Alliance Council meeting where Jyn proposes for the rebels to
              travel to Scariff and steal the Death Star schematics so they will know where to target the flawed reactor module. The Rebel leadership, including Mon Mothma,
              Jan Dodonna, Bail Organa, Tynnra Pamlo, Nower Jebel, Vasp Vaspar, Davits Draver, Admiral Raddus, and Antoc Merrick, cannot come to the consensus; many of the
              Senators propose to scatter their fleet because they have no choice but to surrender. Mothma, Organa, and Raddus attempt to defend Jyn's plan. Unfortunately for
              them, with Galen Erso and Saw Gerrera dead, and their hologfram destroyed, the Rebel leadership has no way of verifying Jyn's claims. The fearful opposition of
              Pamlo, Vaspar, and Jebel outweighs the support, despite an impassioned plea from Jyn, calling for hope. Without the full support of the council, Mothma is forced to
              play the devil's advocate, declaring the odds too great to commit so much of their forces.
            </p>

            <h3 className="article-heading-3" id="1.13">Rogue One departs for Scarif</h3>
            <p>
              Frustrated at their inaction, Jyn, Cassian, K-2SO, and a number of Rebels volunteer to take matter into their own hands. The party takes the shuttle to raid the
              databank themselves. Before they take off, however, they are confronted by Rebel command, who asks them to identify themselves. Rook improvises a call sign of
              "Rogue One" before heading off to Scarif without Alliance permission.
            </p>

            <h3 className="article-heading-3" id="1.14">The Battle of Scarif</h3>
            <p>
              Once Rogue One arrives at Scarif, they begin to transmit a clearance code, praying tha it has not been listed as overdue. Fortunately, the code is valid. The team
              enters the shield gate and head to the planet below. Briefly, before starting the mission, Jyn speaks to the squad in an effort to inspire them, emphasizing that
              despite being clearly outnumbered, anything is possible with the element of surprise on their side. Cassian debriefs the men and orders them to attack the troops as
              a distraction so they can gain entry to the Citadel and find the plans. As Jyn, Cassian, and K-2SO search the databank for the design plans, the rest of their team
              set off explosives and commence firing in the nearby landing area in an attempt to distract the resident stormtroopers.
            </p>
            <p>
              Inside the Citadel, K-2SO hacks into another Imperial droid of he same model to gain intelligence to locate and access the vault. Krennic orders the garrison
              deployed after the squad sets off the diversionary explosives. Tarkin is alerted that the Scarif installation has been compromised by rebels and is concerned the
              rebels may be after the Death Star plans. Tarkin had Vader informed of the developments before ordering the Death Star into hyperspace to investigate.
            </p>
            <p>
              Back at the Rebel base on Yavin 4, the Rebellion learn of the battle from intercepted Imperial transmissions, but before the council is notified, Admiral Raddus has
              already sent his fleet in support of Rogue One's efforts.
            </p>
            <p>
              While Rogue One is battling the stormtroopers, Bodhi contacts Scarif Imperial headquarters and feeds them false information and creates confusion in order to give
              the squad a better tactical advantage. The garrison deploys AT-ACT walkers to battle the squad.
            </p>
            <p>
              Once Raddus's fleet arrives, Red and Gold squadrons are ordered to protect the fleet, while Blue squadron is ordered to get to the surface to reinforce and provide
              air support to Rogue One battling on the beaches. Several X-wings, including Blue Leader Antoc Merrick, and a single U-wing gunship make it through the opening
              before he gate control closes the gate, killing several pilots. Cassian contacts Bodhi and asks him to contact the fleet to attempt to open the gate so they can
              transmit the plans. Bodhi asks the ground troops to find a master switch so he can communicate with the fleet by interfacing with the communications tower.
            </p>

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