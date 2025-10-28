import { Link } from 'react-router-dom'

const AllArticles = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

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
      </main>
    </>
  )
}

export default AllArticles;