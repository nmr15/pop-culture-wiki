import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const IronManFilm = () =>
{
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
              {id: "7.2", title: "Critical reception"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" 
            alt="Iron Man" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          <p>
            Iron Man is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character <Link>of the same name</Link>.
            Produced by <Link>Marvel Studios</Link> and distributed by <Link>Paramount Pictures</Link>, it is the first film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Directed by <Link>Jon Favreau</Link> from a screenplay by the writing team of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film
            stars <Link>Roberty Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link> alongside Terrence Howard, <Link>Jeff Bridges</Link>, <Link>Gwyneth Paltrow</Link>,
            <Link> Leslie Bibb</Link>, and <Link>Shaun Toub</Link>. In the film, following his escape from captivity by a terrorist group, world-famous industrialist
            and master engineer Tony Stark builds a mechanical suit of armor and becomes the superhero Iron Man.
          </p>
          <p>
            A film featuring Iron Man was in development at <Link>Universal Pictures</Link>, <Link>20th Century Fox</Link>, and <Link>New Line Cinema</Link> at various
            times since 1990 before Marvel Studios reacquired the rights in 2005. Marvel put the project in production as its first self-financed film, with Paramount
            Pictures distributing. Favreau signed on as director in April 2006 and faced opposition from Marvel when trying to cast Downey in the title role; the actor was
            signed in September. Filming took place from March to June 2007, primarily in California to differenetiaite the film from numerous other superhero stories that
            are set in New York. During filming, the actors were free to create their own dialogue because pre-production was focused on the story and action. Rubber and
            metal versions of the armor, created by Stan Winston's company, were mixed with computer-generated imagery to create the title character.
          </p>
          <p>
            Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in <Link>Phase One</Link> of the MCU. It
            grossed over $585 million, becoming the eigth-highest grossing film of 2008, and received praise from critics, especially for Downey's performance as well as
            Favreau's direction, the visual effects, action sequences, and writing. The American Film Insitute selcted it as one of the ten best films of 2008. It received
            two nominations at the 81st Academy Awards for Best Sound Editing and Best Visual Effects. In 2022, the Library of Congress selected the film for preservation
            in the United States National Film Registry for being "culturally, historically, or aesthetically significant". Two sequels have been released:
            <Link to="/mcu/iron_man_2"> Iron Man 2</Link> (2010), and <Link to="/mcu/iron_man_3">Iron Man 3</Link> (2013).
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <p>
              <Link to="/mcu/tony_stark">Tony Stark</Link>, who has inherited the defense contractor <Link>Stark Industries</Link> from his late father <Link>Howard Stark</Link>, tours in
              war-torn Afghanistan with his best friend and military liasion, <Link to="/mcu/james_rhodes">James "Rhodey" Rhodes</Link>, to demonstrate the new "Jericho" missile. After the
              demonstration, his convoy is ambushed by a terrorist group, the <Link>Ten Rings</Link>, and Stark is gravely wounded by a missile used by the attackers,
              one of his company's own. He is captured and imprisoned in a cave by the Ten Rings. <Link>Yinsen</Link>, a fellow captive and doctor, implants an
              electromagnet into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Ten Rings leader <Link>Raza</Link>,
              offers Stark freedom in exchange for building a Jericho missile for the group, but he and Yinsen believe that Raza will not keep his word.
            </p>
            <p>
              Stark and Yinsen secretly build a small, powerful electric generator called an <Link>arc reactor</Link> to power Stark's electromagnet and construct a
              prototype armored suit to aid in their escape. Although they keep the suit hidden, the Ten Rings discover their intentions and attack the workshop.
              Yinsen sacrifices himself to divert them while the suit powers up. The armored Stark battles his way out of the cave to find the dying Yinsen, then
              burns the Ten Rings' weapons and flies away, crashing in the desert and destroying the suit. After being rescued by Rhodes, Stark returns home and
              announces that his company will cease manufacturing weapons. <Link>Obadiah Stane</Link>, his father's old partner and the company's manager, advises
              Stark that this will bankrupt Stark Industries and ruin his father's legacy. In his home workshop, Stark builds a sleeker, more powerful version of
              his improvised armor suit as well as a more powerful arc reactor for it and his chest after testing a prototype. Personal assistant
              <Link> Pepper Potts</Link> places the original reactor inside a small glass showcase. Though Stane requests details, a suspicious Stark decides to keep
              his work to himself.
            </p>
            <p>
              At a charity event, reporter <Link>Christine Everhart</Link> informs Stark that his company's weapons were recently delivered to the Ten Rings and are
              being used to attack Yinsen's home village. Stark dons his new armor and flies to Afghanistan, where he fends off the terrorists and saves the villagers.
              While flying home, Stark is intercepted by the Air Force. He reveals his secret identity to Rhodes over the phone to end the attack. Meanwhile, the Ten
              Rings gather the pieces of Stark's prototype suit and meet with Stane, who has been trafficking arms to the Ten Rings and has staged a coup to replace
              Stark as Stark Industries' CEO by hiring the Ten Rings to kill him. He subdues Raza and has him and the rest of the group killed. Stane has a massive
              new armor suit reverse-engineered from the wreckage. Seeking to track his company's illegal shipments, Stark sends Potts to hack into its database. She
              discovers that Stane hired the Ten Rings to kill Stark, but the group altered their plans when they realized they had a direct route to Stark's weapons.
              Potts meets with Agent <Link to="/mcu/phil_coulson">Phil Coulson</Link> of <Link>S.H.I.E.L.D.</Link>, an intelligence agency, to inform him of Stane's activities.
            </p>
            <p>
              Stane's scientists are unable to replicate Stark's miniature arc reactor, so Stane enters Stark's home, stuns him, and steals the one from his chest.
              Stark manages to replace it with his original reactor. Potts and several S.H.I.E.L.D. agents attempt to arrest Stane, but he dons his suit and overpowers
              them. Stark fights Stane but is outmatched without his new reactor to run his suit at full capacity. The fight carries Stark and Stane to the top of the
              Stark Industries building, where Stark instructs Potts to overload the large arc reactor powering the building. This unleashes a massive electrical surge
              that causes Stane to fall into the reactor and he is killed in the explosion. The next day, at a press conference, Stark publicly admits to being the
              superhero the press has dubbed "Iron Man".
            </p>
            <p>
              In a post-credits scene, S.H.I.E.L.D. director <Link to="/mcu/nick_fury">Nick Fury</Link> visits Stark at his home, telling him he has become part of a
              "bigger universe", and that he wants to discuss the "<Link>Avengers Initiative</Link>".
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div>
            <ul className="article-list">
              <li>
                <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>:<br />
                An industrialist, genius inventor,
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Music</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Sequels</h2>
          <div></div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default IronManFilm;