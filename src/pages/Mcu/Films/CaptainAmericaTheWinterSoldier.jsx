import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CaptainAmericaTheWinterSoldier = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America: The Winter Soldier - Pop Culture Wiki";
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
              {id: "3.1", title: "Development", sub2: [
                {id: "3.1.2", title: "Writing"}
              ]},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
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
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Captain America: The Winter Soldier</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America: The Winter Soldier</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America: The Winter Soldier</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg" alt="Captain America: The Winter Soldier poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data">
                <Link>Anthony Russo</Link> <br />
                <Link>Joe Russo</Link>
              </td>
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
              <td className="infobox-data"><Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Captain America: The Winter Soldier</b> is a 2014 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link>
            character <Link to="/marvelcomics/captain_america">Captain America</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt
            Disney Studios Motion Pictures. It is the sequel to <Link to="/mcu/captain_america_the_first_avenger">Captain America: The First
            Avenger</Link> (2011) and the ninth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by
            <Link> Anthony and Joe Russo</Link> from a screenplay by Christopher Markus and Stephen McFeely. It stars <Link>Chris Evans</Link> as
            <Link to="/mcu/steve_rogers"> Steve Rogers / Captain America</Link> alongside <Link>Scarlett Johansson</Link>, <Link>Sebastian Stan</Link>,
            <Link>Anthony Mackie</Link>, <Link>Cobie Smulders</Link>, <Link>Frank Grilo</Link>, <Link>Emily VanCamp</Link>, <Link>Hayley Atwell</Link>,
            <Link> Toby Jones</Link>, Jenny Agutter, <Link>Robert Redford</Link>, and <Link>Samuel L. Jackson</Link>. In the film, Rogers,
            <Link to="/mcu/natasha_romanoff">Natasha Romanoff</Link> (Johansson), and <Link to="/mcu/sam_wilson">Sam Wilson</Link> (Mackie) uncover a conspiracy
            within the spy agency <Link>S.H.I.E.L.D.</Link> while facing the <Link to="/mcu/bucky_barnes">Winter Soldier</Link> (Stan), a mysterious assassin.
          </p>
          <p>
            Markus and McFeely began writing the sequel around the release of The First Avenger in July 2011. The script draws from the Winter Soldier story arc in
            the comic book written by Ed Brubaker, as well as conspiracy fiction from the 1970s such as the film Three Days of the Condor (1975). The Winter
            Soldier explores S.H.I.E.L.D. in a similar way to how the first film explored the U.S. military, after Rogers was shown working for S.H.I.E.L.D. in
            the MCU crossover film <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012). The Russo brothers signed on to direct in June 2012, and casting
            began the following month. They wnted the film to be a political thriller that focused on topical ideas such as drone warfare, targeted killing, and
            global surveillance. Filming began in April 2013 in Los Angeles, California, before moving to Washington, D.C., and Cleveland, Ohio. Though the directors
            prioritized practical effects and intense stunt work to differentiate from previous Captain America portrayals, visual effects were created by six
            companies for 2,500 shots including the climactic <Link>Helicarrier</Link> sequence.
          </p>
          <p>
            Captain America: The Winter Soldier premired at the El Capitan Theatre in Hollywood, Los Angeles, on March 13, 2014, and was released in the United
            States on April 4, as part of <Link>Phase Two</Link> of the MCU. The film received positive reviews from critics, with praise for the performances,
            action sequences, storyline, and themes. It $714 million worldwide, making it the seventh highest grossing film of 2014, and received several accolades
            including a nomination for best visual effects at the 87th Academy Awards. A sequel titled
            <Link to="/mcu/captain_america_civil_war"> Captain America: Civil War</Link>, also directed by the Russos, was released in 2016.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Steve_Rogers_and_Sam_Wilson.jpg" alt="Steve and Sam" />
                <p>Steve introduces himself to Sam Wilson.</p>
              </div>
              <p>
                Two years after the Battle of New York, Steve Rogers continues working as an agent of S.H.I.E.L.D. While out on a morning jog in Washington, D.C.,
                Steve frequently passes a man who later introduces himself as <Link to="/mcu/sam_wilson">Sam Wilson</Link>, a veteran United States Air Force
                pararescue trooper who now works as a counselor at the U.S. Department of Veteran Affairs. After the jog, Sam and Steve share and bond over their
                common experiences in adapting to life after each sserving tours in the armed forces.
              </p>
            </div>
            <div className="flex">
              <p>
                <Link to="/mcu/natasha_romanoff">Natasha Romanoff</Link> arrives to take Steve with her on a mission to rescue the hostages of the S.H.I.E.L.D.
                vessel Lemurian Star, which had been taken over by a group of hired pirates led by Georges Batroc. Steve, Natasha, and
                <Link to="/mcu/brock_rumlow"> Brock Rumlow</Link>, along with other members of the STRIKE, eliminate the pirates and rescue the hostages. Hoever,
                mid-mission Steve disovers that Natasha had gotten her own secret mission from <Link to="/mcu/nick_fury">Nick Fury</Link> to extract the
                S.H.I.E.L.D. intelligence from the ship onto a USB drive. A suspicious Steve remarks that Natasha's disappearance nearly jeopardized the mission.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Captainamerica252ea9d2d006f4.jpg" alt="Steve and Natasha" />
                <p>Steve confronts Natasha</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/76/Cap_and_Nick_Fury.jpg" alt="Steve and Fury" />
                <p>Steve and Nick Fury with the Helicarriers.</p>
              </div>
              <p>
                Back at the Triskelion, Stev is angry with Fury for lying to him. Fury, as a sign of trust, takes Steve to the basement where he introduces him
                to Project Insight. Project Insight consists of three next generation S.H.I.E.L.D. Helicariers that will be launched into the air and connected to
                Project Insight satellites at 3000 feet in the air to neutralize enemy hostile targets. Fury tells Steve that "S.H.I.E.L.D. takes the world as it is,
                not as we like it to be", but Steve responds that, "This isn't freedom. This is fear."
              </p>
            </div>
            <div className="flex">
              <p>
                Later, Steve visits the Captain America exhibit at the Smithsonian Institution, and also visits an elderly
                <Link to="/mcu/peggy_carter"> Peggy Carter</Link> (who is suffering from a form of dementia) in a retirement home. He also meets Sam again after
                watching him speak during the end of a session for veterans with PTSD.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/82/Old_Peggy_Full.png" alt="Steve visits Peggy" />
                <p>Steve visits Peggy Carter.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/ad/Nick_Fury_%26_Alexander_Pierce.jpg" alt="Fury with Alexander Pierce" />
                <p>Fury speaks with Alexander Pierce.</p>
              </div>
              <p>
                Meanwhile, Fury discovers that the data on the flash drive is inaccessible. He informs <Link to="/mcu/alexander_pierce">Alexander Pierce</Link>, who
                had just concluded a meeting with the World Security Council about the hijacking of the Lemurian Star. Fury asks Pierce to make a formal request to
                the Council to delay Project Insight due to Fury's rising suspicions.
              </p>
            </div>
            <div className="flex">
              <p>
                Fury leaves the Triskelion and is in-route to meet with <Link to="/mcu/maria_hill">Maria Hill</Link> when he is attacked by assassins impersonating
                policemen. He gets away, suffering a broken forearm, but is then soon stopped by a masked man in the middle of the road who shoots a disc grenade
                under Fury's SUV, fliping it. However, before the masked man gets to Fury, he manages to use a hi-tech device to cut through the vehicle and street
                and escape into the sewers.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/7e/Winter_Soldier_%28CATWS%29.jpg" alt="The Winter Soldier" />
                <p>The Winter Soldier tracking down Nick Fury.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/Agent13scrubs.jpg" alt="Sharon Carter holding a gun" />
                <p>Sharon Carter reveals she is a S.H.I.E.L.D. agent.</p>
              </div>
              <p>
                Steve arrives at his apartment and, after talking to his <Link to="/mcu/sharon_carter">neighbor</Link>, he becomes suspicious when he hears that his
                stereo is still on. He sneaks in through the window and finds the injured Fury sitting in a chair in the dark. He tells Steve that his wife kicked
                him out, while communicating through written text on his phone that his story is a misdirection because they are being eavesdropped on. Fury tells
                Steve that S.H.I.E.L.D. has been compromised, before being shot several times by the assassin from earlier, standing on the adjacent building. Fury
                gives the USB drive to Steve and tells him not to trust anyone, before failling unconscious. Steve's neighbor smashes in the door, revealing
                herself to be Agent 13, who had been tasked by Fury to keep an eye on Steve.
              </p>
            </div>
            <div className="flex">
              <p>
                Steve then pursues the masked man, jumping through the window into the next-door office building. He throws his shielf at the masked man on the
                rooftop, but is surprised when the man is able to catch the shield with his cybernetic arm, and throws it back before jumping off of the building
                and disappearing.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/23/Winter_Soldier.png" alt="The Winter Soldier catches the shield" />
                <p>The Winter Soldier encounters Steve.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/60/Alexander_Pierce_and_Captain_America.jpg" alt="Pierce meets Steve" />
                <p>Pierce personally greeting Steve.</p>
              </div>
              <p>
                Fury is taken to a hospital in critical condition. His heart stops during surgery. After the doctors fail to revive him, his body is collected by
                Hill. Rumlow tells Steve he is wanted at the Triskelion for an urgent meeting. Feeling suspicious, Steve quickly hides the drive in a vending
                machine and leaves. At the Triskelion, he is questioned by Pierce, who says he is one of Fury's oldest friends and wants to know who killed him.
                Steve does not trust Pierce and says nothing about the drive or the circumstances of Fury's death, merely reiterating that Fury said not to trust
                anyone. He leaves Pierce to go to the hospital.
              </p>
            </div>
            <div className="flex">
              <p>
                While in the
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f6/Cap_owns.jpg" alt="Elevator fight" />
                <p>Steve defeats the STRIKE operatives.</p>
              </div>
            </div>
            <div>
              <div className="img-left img-card">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/24/Natasha_looks_at_Steve.jpg" alt="Natasha and Steve" />
                <p>Natasha tells the history of the Winter Soldier.</p>
              </div>
              <p>
                Steve arrives later
              </p>
            </div>
            <div>
              <div className="img-right img-card">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/67/Arnim_Zola.png" alt="Arnim Zola" />
                <p>Arnim Zola displayed on a computer screen.</p>
              </div>
              <p>
                They steal a
              </p>
            </div>
            <div>
              <div className="img-left img-card">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Samuel_Wilson_%282014%29.jpg" alt="Sam Wilson on the phone" />
                <p>Sam calmly threatening Jasper Sitwell.</p>
              </div>
              <p>
                Steve and Natasha
              </p>
            </div>
            <div>
              <div className="img-right img-card">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8a/Winter_Soldier_%28Captain_America%27s_Shield%29.jpg" alt="The Winter Soldier fights Steve" />
                <p>The Winter Soldier fighting against Steve.</p>
              </div>
              <p>
                The group heads
              </p>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8a/Catwssteve.jpg" alt="Steve in secret base" />
                <p>Steve talks to Fury in the secret base.</p>
              </div>
              <p>
                Hill takes them
              </p>
            </div>
            <div className="flex">
              <p>
                Later, Steve recalls
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e8/Captain_America%27s_Golden_Age_Uniform.png" alt="Captain America outside the Triskelion" />
                <p>Captain America arrives outside the Triskelion.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9d/Cap-TWS2512.jpg" alt="The Winter Soldier's mind being wiped" />
                <p>The Winter Soldier going through mind wiping.</p>
              </div>
              <p>
                Bucky is being
              </p>
            </div>
            <div className="flex">
              <p>
                The members of
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/60/Steve-Rogers-Speech-CATWS.jpg" alt="Steve tells the S.H.I.E.L.D. agents the truth" />
                <p>Steve tells the S.H.I.E.L.D. agents the truth.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Black_Widow%27s_Mask.png" alt="Natasha wearing disguise" />
                <p>Natasha wearing the Photostatic Veil.</p>
              </div>
              <p>
                Rumlow and his
              </p>
            </div>
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
            <h4 className="article-heading-4" id="3.1.1">Writing</h4>
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

          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequel"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CaptainAmericaTheWinterSoldier;