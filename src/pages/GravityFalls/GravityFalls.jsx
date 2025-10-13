import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const GravityFalls = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
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
                Gravity Falls is an American animated mystery comedy television series created by <Link>Alex Hirsch</Link> for <Link>Disney Channel</Link> and
                <Link> Disney XD</Link>.
            </p>
        </div>
      </main>
    </>
  )
}

export default GravityFalls;