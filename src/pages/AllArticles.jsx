import { Link } from 'react-router-dom'
import { topics } from '../data';

const AllArticles = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          {topics.map((topic) => (
            <li className="sidebar-item" key={topic.id}>
              <a href={"#" + topic.file}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>All Articles</li>
        </ul>
        <div>
          <h1 className="article-heading">All Articles</h1>
        </div>
        <div>
          <h2 className="article-heading-2" id="Mcu">Marvel Cinematic Universe</h2>
          <div>
            <h3 className="article-heading-3">Marvel Studios films, series, and specials</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default AllArticles;