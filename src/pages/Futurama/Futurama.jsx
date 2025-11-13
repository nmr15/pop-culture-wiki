import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Futurama = () =>
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
          <li>Futurama</li>
        </ul>
        <div>
          <h1 className="article-heading">Futurama</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/440px-Futurama_1999_logo.svg.png" 
            alt="Futurama logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Futurama;