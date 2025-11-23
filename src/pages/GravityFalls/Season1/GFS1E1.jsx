import { Link } from "react-router-dom";
import Collapse from '../../../components/Collapse'

const GFS1E1 = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Official overview</a></li>
          <li className="sidebar-list-item"><a href="#2">Synopsis</a></li>
          <Collapse 
            id="3"
            item="Production notes"
            sub={[
              { id: "3.1", title: "Series continuity" },
              { id: "3.2", title: "Character Revelations" },
              { id: "3.3", title: "Trivia" },
              { id: "3.4", title: "Cryptograms" }
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gravityfalls">Gravity Falls</Link></li>
          <li>Tourist Trapped</li>
        </ul>
        <div>
          <h1 className="article-heading">Tourist Trapped</h1>
        </div>
        <div className="img-flex">
          <div className="div-top">
            <b>Tourist Trapped</b> is the first episode of the <Link>Disney XD</Link> show <Link to="/gravityfalls">Gravity Falls</Link> and the
            first episode of the <Link>first season</Link> as well. It aired as the series preview of the show, after the premiere of the
            <Link> Disney Channel</Link> Original Movie, Let It Shine, on June 15, 2012. Gravity Falls officially premiered on June 29, 2012 on
            Disney Channel.
          </div>
          {/* <div className="img-top">
            <p>Tourist Trapped</p>
            <img
              src="https://static.wikia.nocookie.net/gravityfalls/images/a/a1/S1e1_Book_3_eyepiece_2.png"
              alt="Tourist Trapped"
            />
          </div> */}
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Official overview</h2>
          <div>
            <p>
              When <Link>Dipper</Link> and <Link>Mabel</Link> Pines arrive to spend their summer break in the remote town of
              <Link> Gravity Falls, Oregon</Link>, Mabel's suspiciously weird <Link>new boyfriend</Link> causes the twins to come face to face
              with the town's strange and uncanny secrets.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Synopsis</h2>
          <div>
            <div className="img-left img-card">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/8/82/S1e1_dipper_opening_secret_compartment.png" 
                alt="dipper_opening_secret_compartment" 
              />
              <p>Dipper finds the hiding place of Journal 3.</p>
            </div>
            <p>
              Twelve year-old twins Dipper and Mabel Pines arrive to spend their summer break with their Great Uncle <Link>Stan Pines</Link>,
              known to the twins as Grunkle Stan, in the remote town of Gravity Falls, Oregon. Dipper describes Gravity Falls as a "sleepy"
              town. Once there, they have to work at Stan's tourist trap called the <Link>Mystery Shack</Link>. While hanging signs advertising
              the shack in the "spooky part" of the <Link>woods</Link>. Dipper finds a metal, hollow tree. Inside, he finds an electronic
              device that looks very old and has one of it two wires severed. After Dipper fiddles with some switches, a trapdoor opens up in
              the ground, startling <Link>Gompers</Link>, who was standing close to the hidden opening. Inside, Dipper finds
              <Link> a mysterious journal</Link> with facts and notes about Gravity Falls' creatures that hint to an even greater cover-up
              hidden within the town's wondrous past and present.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/1/16/S1e1_sup.png" 
                alt="" 
              />
              <p>Mable introduces her new boyfriend "Norman".</p>
            </div>
            <p>
              Dipper then believes that Mabel's new boyfriend, Norman, is a zombie when he starts acting strangely and resolves to gain some
              evidence after having a conversation with <Link>Soos</Link>. When Mabel is with Norman, Norman eventually reveals to her that he as actually a
              gonme named Jeff standing on top of a few other gnomes. Dipper asks <Link>Wendy</Link> if he can use the <Link>Mystery Cart</Link> to save Mabel,
              convinced that she will be eaten by Norman (still presumed to be a zombie). Wendy gives him the keys and tells him to try not to hit any pedestrians.
              As Dipper drives the Mystery Cart to save Mabel, Soos gives Dipper a shovel for the zombie and a baseball bat in case he sees any piñatas. Dipper
              drives the Mystery Cart into the forest to rescue Mabel from the gnomes.
            </p>
            <div className="img-left img-card">
              <img
                src="https://static.wikia.nocookie.net/gravityfalls/images/c/c2/S1e1_gnomes_tying_mabel_down.png"
                alt="gnomes_tying_mabel_down"
              />
              <p>The gnomes having kidnapped Mabel.</p>
            </div>
            <p>
              Dipper takes the Mystery Cart and finds them in the forest. After a gnome vomits rainbows, Dipper questions what the heck is going on. He gets
              hissed at by a gnome, and Mabel explains that Norman turned out to be a bunch of gnome jerks. Dipper realizes that he was way off and checks the
              journal, only to see that there is no known weakness for the gnomes. The gnomes tie Mabel to the ground. Jeff begins to explain that this is a big
              misunderstanding, telling him that "She's not in danger, she's just going to marry all one thousand of us and become our gnome queen for all eternity."
              Dipper commands them to release Mabel. Jeff begins to explain that Dipper won't be able to stop them because they are a powerful race, but Dipper
              interrupts him in mid-sentence, chucking him to the side with his shovel. He then uses the shovel to free Mabel from the ground and they begin to
              drive back to the Mystery Shack. 
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default GFS1E1;
