import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import TableCommunity from '../../../components/TableCommunity'

const CommunityS1E4 = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">End tag</a></li>
          <Collapse 
            id="3"
            item="Recurring themes"
            sub={[
              {id: "3.1", title: "Continuity", sub2: [
                {id: "3.1.1", title: "Narrative"},
                {id: "3.1.2", title: "People"},
                {id: "3.1.3", title: "Places"},
                {id: "3.1.4", title: "Things"}
              ]},
              {id: "3.2", title: "Running gags"},
              {id: "3.3", title: "Pop culture references"},
            ]}
          />
          <Collapse 
            id="4"
            item="Trivia"
            sub={[
              {id: "4.1", title: "DVD differences", sub2: [
                {id: "4.1.1", title: "Intro with Chang"},
                {id: "4.1.2", title: "First Duncan scene"},
                {id: "4.1.3", title: "Second Duncan scene"},
              ]},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Quotes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li>Social Psychology</li>
        </ul>
        <div>
          <h1 className="article-heading">Social Psychology</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://static.wikia.nocookie.net/community-sitcom/images/1/1a/Troy_dragging_legs.gif" 
            alt="Social Psychology" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Social Psychology is the fourth episode of the first season of the American comedy television series <Link to="/community">Community</Link>. It
            aired in the United States on NBC on October 8, 2009. The episode shows <Link to="/community/jeff_winger">Jeff</Link> bonding with
            <Link to="/community/shirley_bennett"> Shirley</Link> through mockery of <Link to="/community/britta_perry">Britta</Link>'s new romantic
            interest, <Link>Vaughn</Link>. <Link to="/community/annie_edison">Annie</Link> gets <Link to="/community/abed_nadir">Abed</Link> to participate
            in a psychology experiment organized by <Link>Duncan</Link>. It received 4.87 million viewers in the United States and mixed critical reviews.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <div className="img-right">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/8/84/SP_There%27s_the_awkward_pause.png" 
                alt="the_awkward_pause" 
              />
            </div>
            <p>
              Jeff avoids walking to his next class with Shirley and accompanies Britta instead. He explains he can only stand Shirley's overly cheerful
              personality in small doses. Along the way they pass a student named Vaughn who cordially greets Britta. In the <Link>cafeteria</Link>,
              Annie joins Professor Duncan's psychology lab on the condition she brings him volunteers to participate. Meanwhile, Jeff is annoyed when he
              sees Vaughn chatting to Britta at the <Link>coffee shop</Link>. He joins the rest of the study group at a table where
              <Link to="/community/pierce_hawthorne"> Pierce</Link> is showing off his hearing enhancing "<Link>Ear-Noculars</Link>".
            </p>
            <div className="img-left">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/2/24/SP_The_triangle.png" 
                alt="The_triangle" 
              />
              <p>
                Annie asks if any of them are interested in test subjects for Duncan's lab experiment. <Link to="/community/troy_barnes">Troy</Link> agrees but
                Abed says he's going to attend a local screening of the Indiana Jones movies. Annie convinces him to reconsider in the name of friendship. A
                jealous Jeff then goes to interrupt Britta and Vaughn's conversation. Later at Duncan's lab study, he explains to his students "The Duncan
                Principle". When a subject has no control in a situation they eventually have an emotional eruption. Duncan plans to intentionally cause this by
                having the volunters wait for the experiment to start.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CommunityS1E4;