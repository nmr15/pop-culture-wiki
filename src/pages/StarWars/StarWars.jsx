import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const StarWars = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Star Wars (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" 
            alt="Star Wars logo"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>Star Wars</b> is an American epic space opera media franchise created by <a href="#">George Lucas</a>,
            which began with the <a href="#">eponymous 1977 film</a> and quickly became a worlwide pop
            culture phenomenon. The franchise has been expanded into <a href="#">various films</a> and <a href="#">other media</a>,
            including <a href="#">television series</a>, <a href="#">video games</a>, <a href="#">novels</a>, <a href="#">comic books</a>, <a href="#">theme park attractions</a>,
            and <a href="#">themed areas</a>, comprising an all-encompassing fictional universe.
            Star Wars is one of the highest-grossing media franchises of all time.
          </p>
        </div>
      </main>
    </>
  )
}

export default StarWars