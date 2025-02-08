import React from 'react'

const mainLinks = [
  {
    "id": 1,
    "title": "Marvel Cinematic Universe",
    "img": "data:image/jpeg;base64,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",
  },
  {
    "id": 2,
    "title": "Marvel Comics",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Marvel_Comics_2024_logo.svg/220px-Marvel_Comics_2024_logo.svg.png"
  },
  {
    "id": 3,
    "title": "Star Wars",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png"
  },
  {
    "id": 4,
    "title": "DC Comics",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DC_Comics_2024.svg/120px-DC_Comics_2024.svg.png"
  },
  {
    "id": 5,
    "title": "Community",
    "img": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/community-tv/a/a3/Community-logo.jpg"
  },
  {
    "id": 6,
    "title": "The Beatles",
    "img": "https://1000logos.net/wp-content/uploads/2017/06/Beatles-Logo-768x370.png"
  },
]

const Home = () => 
{
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav class="sidebar col-md-3 col-lg-2 d-md-block bg-dark">
            <div class="position-sticky">
              <ul class="nav flex-column ">
                <li class="nav-item">
                  <a href="#" class="nav-link sidebar-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Franchises</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Movies</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Books</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Video Games</a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <div className="row">
              {mainLinks.map((mainLink) => (
                <div className="col-3" key={mainLink.id}>
                  <div className="card">
                    <img src={mainLink.img} alt={mainLink.title} className="card-img-top" />
                    <div className="card-body">
                      <a href="#" className="card-title">{mainLink.title}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home