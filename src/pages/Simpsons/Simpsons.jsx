import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Simpsons = () =>
{
  return(
    <>
      <aside className="sidebar"></aside>
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
            <Link> Bart</Link>, <Link>Lisa</Link>, and <Link>Maggie</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default Simpsons;