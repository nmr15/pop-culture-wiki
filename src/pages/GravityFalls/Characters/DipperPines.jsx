import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'

const DipperPines = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "Arrival in Gravity Falls"},
              {id: "1.3", title: "Adventures", sub2: [
                {id: "1.3.1", title: "Season 1"},
                {id: "1.3.2", title: "Season 2"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <li className="sidebar-list-item"><a href="#3">Appearance</a></li>
          <Collapse 
            id="4"
            item="Relationships"
            sub={[
              {id: "4.1", title: "Mabel Pines"},
              {id: "4.2", title: "Stan Pines"},
              {id: "4.3", title: "Soos Ramirez"},
              {id: "4.4", title: "Wendy Corduroy"},
              {id: "4.5", title: "Robbie Valentino"},
              {id: "4.6", title: "Gideon Gleeful"},
              {id: "4.7", title: "Parents"},
              {id: "4.8", title: "Candy Chiu and Grenda Grendinator"},
              {id: "4.9", title: "Pacifica Northwest"},
              {id: "4.10", title: "Ford Pines"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Abilities</a></li>
          <li className="sidebar-list-item"><a href="#6">Quotes</a></li>
          <li className="sidebar-list-item"><a href="#7">Trivia</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gravityfalls">Gravity Falls</Link></li>
          <li>Dipper Pines</li>
        </ul>
        <div>
          <h1 className="article-heading">Dipper Pines</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://static.wikia.nocookie.net/gravityfalls/images/0/08/S1e3_dipper%27s_keen_powers_of_observation.png" 
            alt="Dipper Pines" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Mason "Dipper" Pines (born August 31, 1999) is a smart, curious, and adventurous 13-year-old boy (12 prior to the events of
            <Link to="/gravityfalls/weirdmageddon_3_take_back_the_falls"> the finale</Link>), and is one of the two main protagonists of the
            <Link to="/gravityfalls"> series</Link>. Alongside his twin sister <Link to="/gravityfalls/mabel_pines">Mabel</Link>, he spends the summer of
            2012 with his <Link to="/gravityfalls/stan_pines"> Great Uncle "Grunkle" Stan</Link> in <Link to="/gravityfalls/gravity_falls">Gravity Falls,
            Oregon</Link>, where he and his sister constantly encounter the town's paranormal tendencies. Armed with
            <Link to="/gravityfalls/journal_3"> Journal 3</Link> that he found in a hidden buried compartment in the
            <Link to="/gravityfalls/gravity_falls_forest">Gravity Falls Forest</Link>, he and Mabel work to seek out and uncover the town's mysterious
            secrets.
          </p>
        </div>
      </main>
    </>
  )
}

export default DipperPines;