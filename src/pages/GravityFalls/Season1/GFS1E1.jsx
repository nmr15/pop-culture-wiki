import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const GFS1E1 = () =>
{
  useEffect(() =>
  {
    document.title = "Tourist Trapped - Pop Culture Wiki";
  }, []);

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
        <table className="infobox">
          <tbody>
            <tr>
              <th colSpan={2}>
                Tourist Trapped
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/a/a1/S1e1_Book_3_eyepiece_2.png" alt="Tourist Trapped" />
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episode no.</th>
              <td className="infobox-data">
                Season 1 <br />
                Episode 1
              </td>
            </tr>
             <tr>
              <th className="infobox-data">Next episode</th>
              <td className="infobox-data"><Link to="/gravityfalls/the_legend_of_the_gobberwonkle">The Legend of the Gobblewonker</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <b>Tourist Trapped</b> is the first episode of the <Link>Disney XD</Link> show <Link to="/gravityfalls">Gravity Falls</Link> and the
          first episode of the <Link>first season</Link> as well. It aired as the series preview of the show, after the premiere of the
          <Link> Disney Channel</Link> Original Movie, Let It Shine, on June 15, 2012. Gravity Falls officially premiered on June 29, 2012 on
          Disney Channel.
        </div>
        <div>
          <Heading2 id={1} title={"Official overview"} />
          <div>
            <p>
              When <Link>Dipper</Link> and <Link>Mabel</Link> Pines arrive to spend their summer break in the remote town of
              <Link> Gravity Falls, Oregon</Link>, Mabel's suspiciously weird <Link>new boyfriend</Link> causes the twins to come face to face
              with the town's strange and uncanny secrets.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Synopsis"} />
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
            <div>
              <div className="img-left img-card">
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/6/62/S1e1_gnome_monster_arms_up.png" alt="Gnome monster" />
                <p>The gnomes chase after the twins.</p>
              </div>
              <p>
                Once Jeff and the gnomes realize that Dipper and Mabel are getting away, they assemble together, becoming one big monster gnome. Mabel worries that
                they will catch up to them, but Dipper isn't because gnomes have tiny legs. They then realize that the gnomes formed a big monster (controlled by
                Jeff). The monster begins to chase after Dipper and Mabel. The army of gnomes begins launching gnomes at the Myster Cart. Dipper and Mabel fight them
                off one by one and Dipper bashes a gnome named <Link>Shmebulock</Link> on the Myster Cart's horn three times. One of the gnomes lands on Dipper's
                face, shredding him, and Mabel punches it several times to get it to let go, and the gnome soared backwards, taking Dipper's old hat with it. After
                Dipper thanks Mabel for saving him, the monster then picks up a tree and throws it in the middle of the road. Dipper and Mabel closely slide under
                it and crash the Mystery Cart on its side in front of the Mystery Shack. Dipper and Mabel crawl from the cart. Dipper warns the gnomes to stay back
                and throws a shovel at them, but they smash it to the ground. The twins both scream and Dipper wonders where Grunkle Stan is (inside showing tourists
                "The world's most distracting object," distracting himself in the process).
              </p>
            </div>
            <div>
              <div className="img-right img-card">
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/a/a9/S1e1_mabel_using_leaf_blower_on_gnome.png/revision/latest?cb=20120621203934" alt="Mabel uses a leaf blower on Jeff" />
                <p>Mabel sucks Jeff into the leaf blower.</p>
              </div>
              <p>
                Mabel then tells Dipper that she has to do it. Dipper doesn't trust her plan, but she tells him to trust her, just this once and then agrees to
                marry Jeff. Jeff gets excited, climbs down from the giant gnome monster and goes to put the ring on Mabel's finger. Once Jeff successfully places the
                ring on Mabel's finger, he wants to hurry and get Mabel back into the forest, but Mabel says that he must kiss her first. Jeff puckers up, but to his
                surprise, Mabel uses a leaf blower against him. Eventually, Mabel sucks and shoots Jeff out of the leaf blower for revenge because he lied to her,
                broker her heart, and messed with Dipper. As he flies through the air, he crashes into the gnome monster and says that he will have his revenge.
                Without their leader, the rest of the gnomes are consfused as to what they should do next. Mabel then begins blowing thmm with the leaf blower,
                forcing them back into the forest. One of the gnomes gets caught in the plastic from a 6-pack soda and is carried away by Gompers. Mabel feels sad
                that her first boyfriend turned out to be a bunch of gnomes, so Dipper tries to cheer her up by saying that her next boyfriend might be a
                vampire. They then proceed to do an "awkward sibling hug."
              </p>
            </div>
            <div>
              <div className="img-left img-card">
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/a/ad/S1e1_stans%27s_secret.png" alt="Stan and the hidden vending machine entrance" />
                <p>Stan disappears mysteriously behind the vending machine.</p>
              </div>
              <p>
                Dipper and Mabel walk into the Mystery Shack, and Grunkle Stan tells them they can each take anything they want from the gift shop because he
                "overstocked some inventory." Dipper chooses his now-signature blue pine tree hat, and, despite Stan suggesting her to take "a doll or something",
                Mabel acquires a grappling hook. She is later seen jumping on the bed, playing with the grappling hook while Dipper writes about the events that
                happened that day in the mysterious journal he found. At the end, Dipper tells Mabel to turn off the light, but instead, she shoots it out of the
                window with the grappling hook, and they laugh about it. Meanwhile, Stan opens a secret door downstairs by punching in a secret code on the
                vending machine, which leads to a secret room in the basement. He mysteriously closes the door, making sure no one is following him, which hints
                that he may have something to hide. During the end credits, the clip of a gnome barfing a rainbow loops.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default GFS1E1;
