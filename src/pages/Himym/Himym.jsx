import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Himym = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#3">Production</a></li>
          <li className="sidebar-list-item"><a href="#4">Syndication</a></li>
          <li className="sidebar-list-item"><a href="#5">Cast and characters</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <div>
          <h1 className="article-heading">How I Met Your Mother</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png" 
            alt="How I Met Your Mother" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>How I Met Your Mother</b> is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which aired from September 19, 2005,
            to March 31, 2014, follows main character <a href="#">Ted Mosby</a> and his group of friends in New York City's Manhattan. As a frame story, Ted (in 2030)
            recounts to his daughter Penny and son Luke the events from September 2005 to May 2013 that led to him meeting <a href="#">their mother</a>.
          </p>
        </div>
      </main>
    </>
  )
}

export default Himym
