import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Halo = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Halo (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Halo (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Halo_%28series%29_logo.svg/580px-Halo_%28series%29_logo.svg.png" 
            alt="Halo logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default Halo;