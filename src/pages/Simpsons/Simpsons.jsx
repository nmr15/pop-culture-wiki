import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Simpsons = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Background"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.1", title: "Themes"},
              {id: "1.1", title: "Main characters"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Simpsons (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Simpsons</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/220px-The_Simpsons_yellow_logo.svg.png" 
            alt="The Simpsons logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            The Simpsons is an American animated comedy franchise whose eponymous family consists of <Link>Homer</Link>, <Link>Marge</Link>,
            <Link> Bart</Link>, <Link>Lisa</Link>, and <Link>Maggie</Link>. The Simpsons were created by cartoonist <Link>Matt Groening</Link> for
            a series of <Link>animated shorts</Link> that debuted on The Tracey Ullman Show on <Link>Fox</Link> on April 19, 1987.
          </p>
        </div>
      </main>
    </>
  )
}

export default Simpsons;