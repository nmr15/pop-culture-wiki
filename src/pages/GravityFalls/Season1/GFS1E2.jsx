import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGravityFalls from '../../../components/TableGravityFalls'

const Template = () =>
{
  useEffect(() =>
  {
    document.title = "The Legend of the Gobblewonker - Pop Culture Wiki";
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
              { id: "3.2", title: "Allusions" },
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
          <li>The Legend of the Gobblewonker</li>
        </ul>
        <div>
          <h1 className="article-heading">The Legend of the Gobblewonker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Legend of the Gobblewonker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/gravityfalls/images/d/da/S1e2_dipper_pines_taking_picture.png" alt="The Legend of the Gobblewonker" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episode no.</th>
              <td className="infobox-data">
                Season 1 <br />
                Episode 2
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Previous episode</th>
              <td className="infobox-data"><Link to="/gravityfalls/tourist_trapped">Tourist Trapped</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next episode</th>
              <td className="infobox-data"><Link to="/gravityfalls/headhunters">Headhunters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>The Legend of the Gobblewonker</b> is the second episode of the first season of <Link to="/gravityfalls">Gravity Falls</Link>. It premiered on June
            29, 2012 on Disney Channel, along with the series premiere <Link to="/gravityfalls/tourist_trapped">Tourist Trapped</Link>.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Official overview"} />
          <div>
            <p>
              When <Link to="/gravityfalls/dipper_pines">Dipper</Link> and <Link to="/gravityfalls/mabel_pines">Mabel</Link> hear rumors that a lake monster lives
              at the bottom of the local lake, they enlist <Link to="/gravityfalls/soos_ramirez">Soos</Link> to take them on a boating expedition to prove that it
              really does exist.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Synopsis"} />
          <div>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/gravityfalls/images/5/59/S1e2_dipper_and_mabel_syrup_exclamation.png" alt="Dipper and Mabel syrup race" />
              <p>Dipper and Mabel have a syru race.</p>
            </div>
            <p>
              The episode starts in the morning at the <Link to="/gravityfalls/mystery_shack">Mystery Shack</Link>, Dipper and Mabel are eating breakfast and
              decide to have a syrup race with "Mountain Man" and "Sir Syrup", their ornamental syrup bottles. Mabel tapos the bottom of her bottole, giving her
              an advantage, and she wins, but ends up coughing on the syrup. Dipper then reads a magazine called Wacky News and comes across an advertisement for
              a monster photo contest. An advirtisement for Human-sized hamster balls on the opposite page catches Mabel's eye, but Dipper tells her he was
              actually talking about the monster photo contest. He asks Mabel if they got any pictures of the gnomes from the previous epiosde, but they did not;
              however, Mabel did state that she kept a piece of gnome's beard. <Link to="/gravityfalls/stanley_pines">Stan</Link> walks in and says that it's
              family bonding day. Dipper asks if it's going to be like their last family bonding day where he had them make counterfeit money, and they were sent
              to the County Jail. Mabel recalls the "cold jail cell" and shivers. Stand admits he hasn't been the best summer caretaker, but he swears they will
              have real family fun today. He then exclaims joyfully that the kids have to put on blindfolds and get into his car. They both cheer and throw up
              their hands, but then Dipper processes whar Stan just said, and says "Wait, what?" in confusion.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/gravityfalls/images/b/bc/S1e2_grunkle_stan_fastening_hats.png" alt="Stan gives the twins hats" />
              <p>Stan gives the twins family fishing hats with their names on it.</p>
            </div>
            <p>
              Dippe and Mabel are blindfolded in the back of Stan's car. Dipper says blindfolds never lead to anything good. Mabel feels like all her senses
              are heightened and that she can see with her fingers, then stats rubbing Dipper's face. Stan is driving recklessly, and Dipper asks if he's wearing
              a blindfold too. He says he might as well be with his cataracts. Stan asks if the fence on the edge of the road is a woodpecker, and they barrel roll
              down a hill. They arrive at their location, and Stan tells them to take off their blindfols.
            </p>
            <p>
              It's fishing season at Lake Gravity Falls, and the whole town is out. Dipper is surprised and demands why Stan wants to bond with them all of a sudden.
              Stan says that he's never had fishing buddies because the guys from the lodge don't "like" or "trust" him. Suddenly,
              <Link to="/gravityfalls/fiddleford_mcgucket"> Old Man McGucket</Link> runs past telling everyone that he saw the Gravity Falls Gobblewonker again.
              He shows everyone a boat that has been broek in half and claims that the Gobblewonker did it, but he is ridiculed by the townspeople and his son for
              it. Dipper realizes that if they can get a picture of the Gobblewonker, they can split the $1,000 photo contest prize money 50/50. Mabel fantasizes
              about what she could do with $500 and has a fantasy of getting the giant hamster ball and gloating to a hamster. She then scurries around in the
              hamster ball, smashes through a wall and rolls away chortling happily. Mabel then stops at a crosswalk and talks to two 80s cartoon-style-boys in a
              sports car, exclaiming that "You can look, but you can't touch!" The boys sunglasses fall off as they say "Awesome!" Mabel then rolls away squeaking,
              while techno music plays in the background. Mabel comes back to her senses and she says she is "one-million percent" on board with Dipper's plan.
              Soos pulls up and says they can use his boat, The S.S. Cool Dude, for their monster hunt, and the twins ditch Stan and head off to Scuttlebutt
              Island.
            </p>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/gravityfalls/images/4/4c/S1e2_spotting_the_gobblewonker.png" alt="Dipper, Mabel, Soos spot the monster" />
              <p>Soos, Dipper, and Mabel believe they've spotted the Gobblewonker.</p>
            </div>
            <p>
              On their way to the island, Dipper gives Mabel and Soos a quick lecture. He says the number one problem with monster hunting is camera trouble, so he
              has bought 17 disposable cameras. They soon lose six out of their seventeen cameras. Afterwards, they decide that Dipper will be captain, Mabel will
              be co-captain, and Soos will be associate co-captain. Mabel uses a pelican as a ventriloquist's dummy, then attempts to so while drinking water
              (which she chokes on, scaring the pelican away). On the boat, Dipper says they'll lure the Gobblewonker with fish food in a barrel. Soos asks for
              permission to taste the fish food, Dipper says "permission granted", Mabel says "permission co-granted", and Soos says "permission associate
              co-granted" and licks the fish food. He makes a face and Mabel and Dipper start laughing. Soos say's "Dude, I don't know what I expecte that to taste
              like." Once they land on the island, they hear "monster noises" and rush to check it out, while Soos beatboxes to Mabel's improvisational rap song.
              They believe they've spotted the Gobblewonker, but it turns out to be a colony of beavers that in their language, say unusual, charming phrases. One
              of the beavers has a rusty chainsaw that when bitten, makes the "monster noises" that the twins and Soos heard. Dipper then realizes that the rock he
              is sitting on is actually the tail of the Gobblewonker, and gets ready to snap a picture, but the Gobblewonker then begins to chase them on dry land.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/gravityfalls/images/9/9b/S1e2_dipper_and_mabel_on_boat.png" alt="Dipper and Mabel on Stan's boat" />
              <p>Dipper and Mabel relax on the boat with Stan and Soos.</p>
            </div>
            <p>
              They make back to the boat, but they are still being chased in the water. Finally, they end up going through a waterfall and into a cave. The
              Gobblewonker gets stuck in the cave entrance and Dipper begins taking pictures. A piece of the cave lands on the Gobblewonker and Dipper notices
              that something is wrong when sparks fly out of the creatures' joints. He knocks on the Gobblewonker and realizes that it is made of metal. They
              open the trap door revealing Old Man McGucket. McGucket reveals he made it to get attention from his son beause when you get old, you have to go
              grhough a lot to spend quality time with your family. It is admitted that Old Man McGucket creates robots for revenge when he gets neglected.
              Dipper and Mabel then realize they shouldn't have ditched Stan. They later meet up with him and apologize. They take some family photos then relax
              and enjoy the boat ride. The camera angle than goes underwater and we see the actual Gobblewonker eating Dipper's last camera, proving that the
              creature is actually real. Once again, the end credits show Mabel imitating the pelican and telling a joke to Dipper, which annoys him.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Template;