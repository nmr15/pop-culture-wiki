import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGravityFalls from '../../../components/TableGravityFalls'

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
              { id: "3.3", title: "Allusions" },
              { id: "3.4", title: "Trivia" },
              { id: "3.5", title: "Cryptograms" }
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
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/a/a9/S1e1_mabel_using_leaf_blower_on_gnome.png" alt="Mabel uses a leaf blower on Jeff" />
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
        <div>
          <Heading2 id={3} title={"Production notes"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Series continuity</h3>
            <ul className="article-list">
              <li>
                <Link to="/gravityfalls/blendin_blandin">Blendin Blandin</Link>, intoduced in the episode
                "<Link to="/gravityfalls/the_time_travelers_pig">The Time Traveler's Pig</Link>", appears in the bushes when the giant gnome monster crushes the
                shovel Dipper thorows at it.
              </li>
            </ul>

            <h3 className="article-heading-3" id="3.2">Character revelations</h3>
            <p>Many things are revealed about the main characters:</p>
            <ul className="article-list">
              <li>
                Dipper:
                <ul className="article-sublist">
                  <li>He is smart.</li>
                  <li>He is adventurous.</li>
                  <li>He has teraphobia, a fear of monsters.</li>
                </ul>
              </li>
              <li>
                Mabel:
                <ul className="article-sublist">
                  <li>She flirts with every boy she meets.</li>
                  <li>She is not aware that she often embarrasses herself.</li>
                  <li>She is often goofy and immature.</li>
                </ul>
              </li>
              <li>
                Stan:
                <ul className="article-sublist">
                  <li>He owns a gift shop called the Mystery Shack.</li>
                  <li>
                    He lies to Dipper to think there's nothing weird goung on, foreshadowing the events of 
                    "<Link to="/gravityfalls/scary-oke">Scary-oke</Link>."
                  </li>
                  <li>He always picks on Dipper to do stuff, foreshadowing the events of "<Link to="/gravityfalls/dreamscapers">Dreamscapers</Link>."</li>
                  <li>His demeanor is gruff.</li>
                </ul>
              </li>
              <li>
                Soos:
                <ul className="article-sublist">
                  <li>He is a handyman at the Mystery Shack.</li>
                  <li>He does everything to win Stan's trust foreshadowing the series finale.</li>
                  <li>He doesn't have evidence to prove Gravity Falls has secrets.</li>
                </ul>
              </li>
              <li>
                Wendy:
                <ul className="article-sublist">
                  <li>She is a cashier at the Mystery Shack.</li>
                  <li>She is irresponsible.</li>
                </ul>
              </li>
              <li>Dipper, Mabel, and Stan's last names is Pines.</li>
            </ul>

            <h3 className="article-heading-3" id="3.3">Allusions</h3>
            <ul className="article-list">
              <li>
                A poster resembling Justin Bieber is seen in the attic.
              </li>
              <li>
                Stan wears a Gill-man mask to scare Dipper. The Gill-man is from the 1954 film, Creature from the Black Lagoon.
              </li>
              <li>
                The gnomes tie down Mabel in a similar way to how the Liliputians tie down Gulliver in Gulliver's Travels by Jonathan Swift.
              </li>
              <li>
                The way Mabel takes the grappling hook out of the box and spins around is a reference to the Legend of Zelda video game series
              </li>
            </ul>

            <h3 className="article-heading-3" id="3.4">Trivia</h3>
            <ul className="article-list">
              <li>
                This episode was watched by 3.4 million viewers on its premieree night.
              </li>
              <li>
                "Tourist Trapped" is a play on words, because the Mystery Shack is a tourist trap and Dipper and Mabel are trapped there for the summer.
              </li>
              <div className="img-right img-card">
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/1/1e/Tourist_Trapped_Free_iTunes_Card.jpg" alt="iTunes card for Tourist Trapped" />
                <p>Free iTunes card for "Tourist Trapped."</p>
              </div>
              <li>
                This marks the debut of all the main characters.
              </li>
              <li>
                This episode was available as a free download on iTunes for a limited time: iTunes gift cards were codes to watch the episode for free were also
                sold for a limited time at Starbucks.
              </li>
              <li>
                "Tourist Trapped" received two nominations for the 40th Annie Awards, including Ian Worrel for Best Production Design in a Television/Broadcast
                Production, and Kristen Schaal for Best Voice Acting in an Animated Televison/Broadcast Production.
              </li>
              <li>
                For unspecified reasons, in the Philippines, this episode is played at a slightly faster speed. The runtime (not counting commercial breaks) is
                reduced from 22 minutes to only 20 minutes.
              </li>
              <li>
                Aside from flashbacks, this is the first of the only two episodes in the series to feature narration, the other being
                "<Link to="/gravityfalls/weirdmageddon_3_take_back_the_falls">Weirdmageddon 3: Take Back the Falls</Link>."
              </li>
              <li>
                The mosquitoes who spell "BEWARB" on Dipper's arm are revealed in <Link to="/gravityfalls/journal_3">Journal 3</Link> to be "Soothsquitos", whose
                bites spell out warnings, which are frequnetly misspelled.
              </li>
              <li>
                While this is canonically the first episode, six other episodes were produced before it.
              </li>
              <div className="img-right img-card">
                <img src="https://static.wikia.nocookie.net/gravityfalls/images/7/7f/S1e1_cut_scene.gif" alt="Cut scene" />
                <p>Brief cut scene from the gnome chase.</p>
              </div>
              <li>
                In the trailer for the series released by Disney Channel a month prior to the premiere, there is a 2 second scene in which we see the tree thrown
                by the gnomes fallen and coming up fast, as Dipper (who is realizing he lost his hat) and Mabel scream. The scene was not in the final cut of the
                episode, likely due to time.
              </li>
              <li>
                Episod 1 was developed out of the unaired pilot, which features some different plot points but keeps the core Norman investigation to Gnome reveal
                arc essentially the same. "Tourist Trapped" uses some dialogue from that earlier pilot.
              </li>
              <li>
                Alex Hirsch kept a series of notes for himself while working on Tourist Trapped. Excerpts include:
                <ul className="article-sublist">
                  <li>
                    Strenghen theme of Dipper not [indiscernible] Mabel.
                  </li>
                  <li>
                    Make sure Mabel is actively/understandably quirky, rather than just a slap happy baby/dope.
                  </li>
                  <li>
                    Rethink Popsicle bit @ start.
                  </li>
                  <li>
                    Make Norman less zombie-like?
                  </li>
                  <li>
                    Maintain Comic momentum. This above all else. Give it a bite. That beans bit proves its possible.
                  </li>
                  <li>
                    One solid laugh in.
                  </li>
                  <li>
                    More how-we-got-to-this-town @ top.
                  </li>
                </ul>
              </li>
              <li>
                In the original script, Mabel referred to the mark left on her cheek by the leaf blower as a hickey. Disney's Standards and Practices deemed the
                term inappropriate, and in the final episode she instead calls it a "smooch mark."
              </li>
              <li>
                When Mabel grabs the grappling hook from the box that contains some of the stuff in the shack, she makes a spin that is followed by raising her
                grappling hook upward as she says, "Grappling hook!". This is a nod to Nintendo's The Legend of Zelda franchise when Link grabs an item in a
                treasure chest, and raises an item and a dialog box appears at the bottom of the screen that will tell what it is. Unironically, the grappling hook
                is a recurring item in the Legend of Zelda series.
              </li>
              <li>
                In the behind the scenes special Between the Pines, Alex Hirsch reveals that the red substance on Jeff's face when he was pretending to be human
                <i>was</i> jam, as the previous Gnome Queen had died and the Gnomes ate bereavement jam as part of her funeral ceremony.
              </li>
              <li>
                Dipper's final narration from Weirdmageddon 3: Take Back the Falls can be seen when he is writing in the journal in the final scene.
              </li>
              <li>
                When Dipper is warning Mabel about Norman, he intended to show her the article on zombies, but accidentally opens to the entries on gnomes
                before correcting himself. This foreshadows that Norman is a bunch of gnomes in disguise.
              </li>
              <li>
                This episode shows the twins have a pet cat, but this is the only episode for the cat to appear and it isn't mentioned at all.
              </li>
            </ul>

            <h3 className="article-heading-3" id="3.5">Cryptogram</h3>
            <div className="img-right">
              <img src="https://static.wikia.nocookie.net/gravityfalls/images/0/0d/S1e1_barf_gnome_code.png" alt="Gnome puking" />
            </div>
            <p>
              During the end credits of the episode, there is a cryptogram that reads "<b>ZHOFRPH WR JUDYLWB IDOOV</b>." Once decode, it reads
              "<b>WELCOME TO GRAVITY FALLS</b>."
            </p>
          </div>
        </div>
        <div>
          <TableGravityFalls />
        </div>
      </main>
    </>
  )
}

export default GFS1E1;
