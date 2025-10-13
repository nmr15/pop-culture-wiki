import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const AdventureTime = () =>
{
  return(
    <>
      <aside className="sidebar"></aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Adventure Time (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Adventure Time (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2020/09/Adventure-Time-Logo-1280x800.png" 
            alt="Adventure Time logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Adventure Time is an American animated fantasy franchise created by <Link>Pendleton Ward</Link>, set in the post-apocalyptic Land
            of Ooo.
          </p>
        </div>
      </main>
    </>
  )
}

export default AdventureTime;