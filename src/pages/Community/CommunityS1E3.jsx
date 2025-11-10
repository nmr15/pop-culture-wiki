import { Link } from 'react-router-dom'

const CommunityS1E3 = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">End tag</a></li>
          <li className="sidebar-list-item"><a href="#3">Themes</a></li>
          <li className="sidebar-list-item"><a href="#4">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#5">Quotes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li>Introduction to Film</li>
        </ul>
        <div>
          <h1 className="article-heading">Introduction to Film</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://static.wikia.nocookie.net/community-sitcom/images/6/6c/ITF.png" 
            alt="Introduction to Film" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Introduction to Film is the third episode of the first season of the American comedy television series <Link to="/community">Community</Link>.
            It aired in the United States on NBC on October 1, 2009. The episode sees <Link to="/community/jeff_winger">Jeff</Link> attempt to "seize
            the day" to pass a class, while Britta pays for Abed to take a filmmaking class, to his dad's annoyance. It received generally positive
            reviews and garnered 5.86 million viewers upon its premiere.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <div className="img-right">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/f/fc/Seize_the_day%21.png" 
                alt="Seize the day" 
              />
            </div>
            <p>
              Jeff attends an accounting class taught by <Link>Professor Whitman</Link> which is less about learning and more about the philosophy
              of "seizing the day". Over in <Link>the study room</Link>, the <Link>group</Link> is irritated at
              <Link to="/community/pierce_hawthorne"> Pierce</Link> who cannot operate his cell phone. Jeff then arrives excited about the blow off
              class he just found and suggests the group sign up too. <Link to="/community/abed_nadir">Abed</Link> declines, explaining that his dad
              forbids him taking any class that won't help him run the family falafel business. <Link to="/community/britta_perry">Britta</Link>
              decides to give Abed the money to pay for a film class he actually wants to take. He suggests that they all get back to studying but is
              subsequently distracted by <Link to="/community/troy_barnes">Troy</Link>'s funny sneeze.
            </p>
            <div className="img-left">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/7/7f/ITF_Living_in_the_moment_by_standing_on_desks.png" 
                alt="Living_in_the_moment_by_standing_on_desks" 
              />
            </div>
            <p>
              The study group, minus Britta and Abed, join Jeff for Professor Whitman's accounting course the following day. After
              <Link to="/community/shirley_bennett"> Shirley</Link> introduces herself to the class, Whitman encourages her to have an emotional
              breakthrough regarding her husband. He then commands Annie along with the rest of the students to stand on their desks. After one of the
              students gets injured when her desk collapses, Whitman gives out their homework assignments and dismisses them. He asks that Jeff stay behind
              and hells him he believes his motivations for taking the class are insincere. If by the end of the week he doesn't try to genuinely "live in
              the moment" and "seize the day", Whitman will fail him. Later, Jeff is complaining to Britta about Whitman's ultimatum.
            </p>
            <div className="img-right">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/d/de/ITF_it_was_difficult_talking_to_him_before_now_wehave_this_between_us.png" 
                alt="it_was_difficult_talking_to_him_before_now_wehave_this_between_us" 
              />
            </div>
            <p>
              She asks him how his class is going, and he mentions that he is working on a documentary. It is then that <Link>Abed's father</Link> shows
              up and confronts Britta. He tells her that he is responsible for Abed and doesn't need her help raising him. The two begin to argue, and
              when it becomes physical, Jeff steps in to separate them. Jeff tells Mr. Nadir that Abed is an adult now and can make his own decisions.
              Fed up with the situation, Abed's father respons that Abed is their responsibility now and leaves the campus. The next day in the
              <Link> cafeteria</Link>, Britta runs into Jeff who is dressed in a ridicoulous outfit and waiting for Whitman to arrive for his morning
              coffee.
            </p>
            <div className="img-left">
              <img 
                src="https://static.wikia.nocookie.net/community-sitcom/images/a/a3/ITF_Shazbot.png" 
                alt="Shazbot" 
              />
            </div>
            <p>
              Britta has accepted the role of Abed's provider and is trying to calculate his expenses for the semester. Abed arrives with an expensive
              new camera bought with Britta's money. He continues to film his documentary, casting Jeff and Britta in the roles of his parents. Distracted
              by Abed's wasteful spending. Jeff fails to notice Whitman's arrival. The professor disapproves of Jeff's outfit before ordering a birthday
              cake from the <Link>Hot & Brown</Link> coffee shop. Meanwhile, in the <Link>student lounge</Link>, Pierce offers to teach Troy how to sneeze
              strongly and with intent. Elsewhere, Jeff concots a more elaborate scheme to impress Whitman.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">End tag</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Themes</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Trivia</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Quotes</h2>
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CommunityS1E3;