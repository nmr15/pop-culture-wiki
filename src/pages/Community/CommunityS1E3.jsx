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
      </main>
    </>
  )
}

export default CommunityS1E3;