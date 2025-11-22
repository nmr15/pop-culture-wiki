import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'

const DipperPines = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "Arrival in Gravity Falls"},
              {id: "1.3", title: "Adventures", sub2: [
                {id: "1.3.1", title: "Season 1"},
                {id: "1.3.2", title: "Season 2"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <li className="sidebar-list-item"><a href="#3">Appearance</a></li>
          <Collapse 
            id="4"
            item="Relationships"
            sub={[
              {id: "4.1", title: "Mabel Pines"},
              {id: "4.2", title: "Stan Pines"},
              {id: "4.3", title: "Soos Ramirez"},
              {id: "4.4", title: "Wendy Corduroy"},
              {id: "4.5", title: "Robbie Valentino"},
              {id: "4.6", title: "Gideon Gleeful"},
              {id: "4.7", title: "Parents"},
              {id: "4.8", title: "Candy Chiu and Grenda Grendinator"},
              {id: "4.9", title: "Pacifica Northwest"},
              {id: "4.10", title: "Ford Pines"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Abilities</a></li>
          <li className="sidebar-list-item"><a href="#6">Quotes</a></li>
          <li className="sidebar-list-item"><a href="#7">Trivia</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gravityfalls">Gravity Falls</Link></li>
          <li>Dipper Pines</li>
        </ul>
        <div>
          <h1 className="article-heading">Dipper Pines</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://static.wikia.nocookie.net/gravityfalls/images/0/08/S1e3_dipper%27s_keen_powers_of_observation.png" 
            alt="Dipper Pines" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Mason "Dipper" Pines (born August 31, 1999) is a smart, curious, and adventurous 13-year-old boy (12 prior to the events of
            <Link to="/gravityfalls/weirdmageddon_3_take_back_the_falls"> the finale</Link>), and is one of the two main protagonists of the
            <Link to="/gravityfalls"> series</Link>. Alongside his twin sister <Link to="/gravityfalls/mabel_pines">Mabel</Link>, he spends the summer of
            2012 with his <Link to="/gravityfalls/stan_pines"> Great Uncle "Grunkle" Stan</Link> in <Link to="/gravityfalls/gravity_falls">Gravity Falls,
            Oregon</Link>, where he and his sister constantly encounter the town's paranormal tendencies. Armed with
            <Link to="/gravityfalls/journal_3"> Journal 3</Link> that he found in a hidden buried compartment in the
            <Link to="/gravityfalls/gravity_falls_forest">Gravity Falls Forest</Link>, he and Mabel work to seek out and uncover the town's mysterious
            secrets.
          </p>
          <p>
            Dipper represents the pine tree symbol associated with the <Link to="/gravityfalls/bill_cipher_zodiac">Bill Cipher Zodiac</Link>, as it is
            present on his hat.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">History</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Early life</h3>
            <div className="img-left">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/b/b1/S1e5_picture_of_dipper_in_lamb_costume.png" 
                alt="picture_of_dipper_in_lamb_costume" 
              />
              <p>
                Dipper was born on August 31, 1999. His family lives in <Link>Piedmont, California</Link>. At a young age, Dipper's <Link>mother</Link>
                would dress him up in a lamb costume and have him perform his signature song and dance, the "<Link>Lamby Lamby Dance</Link>". He and Mabel
                were raised secular, but celebrated all holidays at his sister's insistence. Since he was young, his favorite holiday has been Halloween,
                of which his favorite part is trick-or-treating with Mabel. He is also known to have been teased about his birthmark by other children
                until he started hiding it, which may be how he earned his nickname when he was no older than five. He also attended <Link>Eggbert
                Elementary</Link> with his sister.
              </p>
            </div>
            <h3 className="article-heading-3" id="1.2">Arrival in Gravity Falls</h3>
            <p>
              Sometime during the month of June. Dipper and his twin sister Mabel were sent north up the coast to the small town of Gravity Falls, Oregon,
              to stay with their Great Uncle Stan (whom the twins call 'Grunkle Stan'). Stan runs a tourist trap named the <Link>Mystery Shack</Link> which
              doubles as and was originally his house. While Mabel adjusts with ease, Dipper initially finds it difficult to get used to his new
              surroundings.
            </p>
            <div className="img-left">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/e/ec/Opening_twins_arriving.png" 
                alt="Opening_twins_arriving" 
              />
            </div>
            <p>
              One fateful day, Stan tasks Dipper to put up signs advertising the Mystery Shack in the "spooky part" of the Gravity Falls Forest, where he
              discovers a jorunal written by an unknown and enigmatic author detailing the town's secrets and dangers. Dipper discloses his findings with
              Mabel and consecutively meets her new boyfriend, <Link>Norman</Link>, who he begins to suspect is a zombie, based on the information in
              Journal 3. Despite failing to find any incriminating evidence, Dipper confronts his sister on the theory, resulting in an argument. During
              Mabel's date, however, he notices Norman's right hand falling off on camera, which Norman suspiciously attaches back on, making him fearful
              that Mabel could unknowingly be in danger.
            </p>
            <div className="img-right">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/8/82/S1e1_dipper_opening_secret_compartment.png" 
                alt="dipper_opening_secret_compartment" 
              />
            </div>
            <p>
              Using the <Link>Mystery Cart</Link> with the keys he obtained from the Mystery Shack's clerk, <Link>Wendy</Link>, Dipper quickly heads to
              rescue Mabel, and, upon finding her, he realizes that Norman is actually made up of <Link>gnomes</Link> stacked on top of each other which
              are residing in the forest, who planned to kidnap Mabel and force her to become their "queen". Dipper manages to subdue the creatures and
              escape with Mabel, but they are pursued by a large monster made of hundreds of gnomes. The two end up crashing the Mystery Cart upon
              arriving at the Shack and are concerned by the monster. The head gnome, <Link>Jeff</Link>, informs them that they will do "something crazy"
              unless Mabel becomes their queen, and in response, Mabel agrees, much to Dipper's dismay. Shortly after accepting the gnomes' ring, she uses
              the Mystery Shack leaf-blower to defeat the gnomes, impressing Dipper. With all the gnomes finally gone, the two make up and enter the Shack,
              and in an act of newfound appreciation of the twins (disguised as having overstocked the Mystery Shack gift shop). Stan allows them each one
              free gift, with Dipper choosing a new hat with a pine tree symbol on it to replace his old one, which was taken by a gnome, and Mabel
              choosing a grappling hook. Before going to bed, he writes two new entries in the journal, one being that a gnome's weakness is a leaf blower,
              and the other is a new page of the journal stating that while Journal 3 has told him to refuse trust from anyone in the town, he knows Mabel
              will always have his back.
            </p>
            <h3 className="article-heading-3" id="1.3">Adventures</h3>
            <h4 className="article-heading-4" id="1.3.1">Season 1</h4>
            <div className="img-right">
              <img 
                src="https://static.wikia.nocookie.net/gravityfalls/images/0/01/S1e2_mabel_soos_and_dipper_running.png" 
                alt="mabel_soos_and_dipper_running" 
              />
            </div>
            <p>
              In the episode "<Link to="/gravityfalls/the_legend_of_the_gobblewonker">The Legend of the Gobblewonker</Link>," Dipper goes fishing with
              Stan and Mabel as a family bonding day. When they hear that there is a lake monster in the vicinity known as the <Link>Gobblewonker</Link>,
              Dipper and Mabel want to find it and get proof of its existence, and avoid having to spend 10 hours on a <Link>boat</Link> with Stan while
              they're at it. Dipper wants to be the first to discover the beast so he can win prize money and appear on TV. They ditch Stan and go with
              <Link>Soos</Link> to find it. Dipper brings 17 disposable cameras just in case they lose or break a camera. In the end, the Gobblewonker
              turns out to just be a mechanical creature driven by <Link>Old Man McGucket</Link>, who is looking for attention. Because they felt bad
              about leaving him, Dipper and Mabel spend the rest of their day with Stan to have their family bonding day. At the very end of the episode,
              the camera pans into the water, revealing a real Gobblewonker swimming in the depths.
            </p>
            <h4 className="article-heading-4" id="1.3.2">Season 2</h4>
          </div>
        </div>
      </main>
    </>
  )
}

export default DipperPines;