import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const GravityFalls = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
            <li className="sidebar-list-item"><a href="#top">Top</a></li>
            <li className="sidebar-list-item"><a href="#1">Premise</a></li>
            <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
            <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
            <Collapse 
              id="4"
              item="Production"
              sub={[
                {id: "4.1", title: "Conception"},
                {id: "4.2", title: "Writing"},
                {id: "4.3", title: "Animation"}
              ]}
            />
            <Collapse 
              id="5"
              item="Broadcast"
              sub={[
                {id: "5.1", title: "Initial broadcast"},
                {id: "5.2", title: "International broadcast"},
                {id: "5.3", title: "Broadcast edits"}
              ]}
            />
            <Collapse 
              id="6"
              item="Merchandise"
              sub={[
                {id: "6.1", title: "Home media"},
                {id: "6.2", title: "Books"},
                {id: "6.3", title: "Video game"}
              ]}
            />
            <Collapse 
              id="7"
              item="Reception"
              sub={[
                {id: "7.1", title: "Critical reception"},
                {id: "7.2", title: "Ratings"},
                {id: "7.3", title: "Influence, legacy, and industry impact"},
                {id: "7.4", title: "Awards and nominations"},
              ]}
            />
            <li className="sidebar-list-item"><a href="#8">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Gravity Falls</li>
        </ul>
        <div>
          <h1 className="article-heading">Gravity Falls</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2021/12/Gravity-Falls-Logo-1536x864.png" 
            alt="Gravity Falls logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Gravity Falls is an American animated mystery comedy television series created by <Link>Alex Hirsch</Link> for <Link>Disney Channel</Link>
            and <Link> Disney XD</Link>. The series follows the adventures of <Link>Dipper Pines</Link> (<Link>Jason Ritter</Link>) and his twin sister
            <Link> Mabel</Link> (<Link>Kristen Schaal</Link>), who are sent to spend the summer with their great-uncle (or "Grunkle") <Link>Stan</Link>
            (Hirsch) in <Link>Gravity Falls</Link>, Oregon, a mysterious town rife with paranormal incidents and supernatural creatures. The kids help
            Stan run the "<Link>Myster Shack</Link>", the tourist trap that he owns, while also investigating the local mysteries.
          </p>
          <p>
            The series premiered on June 15, 2012, and run until February 15, 2016. On November 20, 2015, Hirsch announed that the series would conclude
            with its second season, stating that this was "100% [his] choice" and that "the show isn't being cancelled, it's being finished" and was
            reaching its intended conclusion. The series ended on February 15, 2016, with a one-hour finale,
            "<Link to="/gravity_falls/weirdmageddon_3_take_back_the_falls">Weirdmageddon 3: Take Back the Falls</Link>". Hirsch later stated that he
            remains open to continuing the series with additional episodes or specials, with the story continued in written form with the 2016 replica of
            <Link>Journal 3</Link>, a 2018 graphic novel <Link>Gravity Falls: Lost Legends</Link> and the 2024 teen-oriented novel <Link>The Book
            of Bill</Link>.
          </p>
          <p>
            Gravity Falls received critical acclaim for its writing, characters, voice acting, animation, and humor. Additionally, the series won two
            Emmy Awards, three Annie Awards, and a BAFTA Children's Award, among various other wins and nominations. Gravity Falls garnered high
            viewership amongst children, teenagers, and young adults during its run and was Disney XD's highest-rated show in 2015 and early 2016, while
            also setting several ratings records for the network. The series has attracted a broad and passionate fandom, is considered to be an
            influence for many animated shows that followed it, and spawned a variety of official merchandise.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <div>
            <p>
              For their summer vacation, 12-year-old twin siblings Dipper and Mabel Pines are dropped off from their home in Piedmont, California to the
              fictional town of Gravity Falls, Oregon, to spend the summer with their great uncle ("Grunkle") Stan Pines, who runs a tourist trap called
              the "Mystery Shack". Soon after they arrive in Gravity Falls, Dipper accidentally uncovers a mysterious journal that details many
              different paranormal or mythical creatures that live in the town. With Wendy Corduroy, Mystery Shack;s cashier; Soos Ramirez, a friend of
              Dipper and Mabel and handyman to Grunkle Stan; plus an assortment of other characters, Dipper and Mabel always have an intriguing day to
              look forward to.
            </p>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="2">Episodes</h2>
          <div></div>
        </div>
         <div>
          <h2 className="article-heading-2" id="3">Voice cast</h2>
          <div>
            <div className="img-right">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jason_Ritter_y_Kristen_Schaal.jpg/500px-Jason_Ritter_y_Kristen_Schaal.jpg" 
                alt="Jason Ritter and Kristen Schaal" 
              />
            </div>
            <ul className="article-list">
              <li>
                <Link>Jason Ritter</Link> as <Link to="/gravityfalls/dipper_pines">Dipper Pines</Link>, the 12-year-old twin brother of Mabel Pines and
                the straight man to his sister's antics.
              </li>
              <li>
                <Link>Kristen Schaal</Link> as <Link>Mabel Pines</Link>, the 12-year-old hyperactive and fun-loving twin sister of Dipper Pines
              </li>
              <li>
                <Link>Alex Hirsch</Link> as:
                <ul className="article-sublist">
                  <li>
                    <Link>Stanley Pines</Link> (also known as "Grunkle Stan"), the greedy, grumpy, yet loving great-uncle of Dipper and Mabel Pines and
                    owner and manager of the Mystery Shack.
                  </li>
                  <li>
                    <Link>Jesus "Soos" Ramirez</Link>, the 22-year-old handyman at the Mystery Shack.
                  </li>
                  <li>
                    <Link>Bill Cipher</Link>, an interdimensional demon that can be summoned and released into a person's mind. He resembles a one-eyed
                    yellow triangle superficially similar to the Eye of Providence and wears a top hat and a bow tie. He serves as the main antagonist
                    of the series.
                  </li>
                </ul>
              </li>
              <li>
                <Link>Linda Cardellini</Link> as <Link>Wendy Corduroy</Link>, a tomboyish 15-year-old part-time cashier at the Myster Shack and Dipper's
                unrequited crush.
              </li>
              <li>
                <Link>J. K. Simmons</Link> (season 2) as Stanford Pines, Stanley's six-fingered long-lost older identical twin brother and the author of
                the journals.
              </li>
            </ul>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="4">Production</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Conception</h3>
            <h3 className="article-heading-3" id="4.2">Writing</h3>
            <h3 className="article-heading-3" id="4.3">Animation</h3>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="5">Broadcast</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Initial broadcast</h3>
            <h3 className="article-heading-3" id="5.2">International broadcast</h3>
            <h3 className="article-heading-3" id="5.3">Broadcast edits</h3>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="6">Merchandise</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Home media</h3>
            <h3 className="article-heading-3" id="6.2">Books</h3>
            <h3 className="article-heading-3" id="6.3">Video game</h3>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Critical reception</h3>
            <h3 className="article-heading-3" id="7.2">Ratings</h3>
            <h3 className="article-heading-3" id="7.3">Influence, legacy, and industry impact</h3>
            <h3 className="article-heading-3" id="7.4">Awards and nominations</h3>
          </div>
        </div>
         <div>
          <h2 className="article-heading-2" id="8">Future</h2>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default GravityFalls;