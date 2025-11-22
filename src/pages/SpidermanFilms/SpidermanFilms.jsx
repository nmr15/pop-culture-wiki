import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import { spidermanFilms } from '../../data/dataSpidermanFilms'

const SpidermanFilms = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Spider-Man films</li>
        </ul>
        <div>
          <h1 className="article-heading">Spider-Man films</h1>
        </div>
        <div className="div-top">
                    <div className="row">
                        {spidermanFilms.map((spfilm) => (
                            <div className="col-3" key={spfilm.id}>
                                <Card 
                                    route={spfilm.route}
                                    img={spfilm.img}
                                    alt={spfilm.title}
                                    imgStyle="card-img-vertical"
                                    title={spfilm.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
      </main>
    </>
  )
}

export default SpidermanFilms;