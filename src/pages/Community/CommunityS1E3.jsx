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
            <p>
              Jeff attends an accounting class taught by <Link>Professor Whitman</Link> which is less about learning and more about the philosophy
              of "seizing the day". Over in <Link>the study room</Link>, the <Link>group</Link> is irritated at
              <Link to="/community/pierce_hawthorne"> Pierce</Link> who cannot operate his cell phone. Jeff then arrives excited about the blow off
              class he just found and suggests the group sign up too. <Link to="/community/abed_nadir">Abed</Link> declines, explaining that his dad
              forbids him taking any class that won't help him run the family falafel business. <Link to="/community/britta_perry">Britta</Link>
              decides to give Abed the money to pay for a film class he actually wants to take. He suggests that they all get back to studying but is
              subsequently distracted by <Link to="/community/troy_barnes">Troy</Link>'s funny sneeze.
            </p>
            <div className="img-right">
              <img src="https://static.wikia.nocookie.net/community-sitcom/images/f/fc/Seize_the_day%21.png/revision/latest/scale-to-width-down/300?cb=20120523174602" 
              alt="Seize the day" />
            </div>
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