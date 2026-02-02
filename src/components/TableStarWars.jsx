import { Link } from 'react-router-dom'
import { starwarsSeriesAnimated, starwarsSeriesLive, starwarsChars } from '../data/dataStarWars'

const TableStarWars = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
              <th colSpan={4}>Star Wars</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={5}>Films</th>
              <th rowSpan={3}>Skywalker Saga</th>
              <td>Original Trilogy</td>
              <td>
                <div className="table-list">
                  <Link to="/starwars/a_new_hope" className="table-list-link">A New Hope</Link>
                  <Link to="/starwars/the_empire_strikes_back" className="table-list-link">The Empire Strikes Back</Link>
                  <Link to="/starwars/return_of_the_jedi" className="table-list-link">Return of the Jedi</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>Prequel trilogy</td>
              <td>
                <div className="table-list">
                  <Link to="/starwars/the_phantom_menace" className="table-list-link">The Phantom Menace</Link>
                  <Link to="/starwars/attack_of_the_clones" className="table-list-link">Attack of the Clones</Link>
                  <Link to="/starwars/revenge_of_the_sith" className="table-list-link">Revenge of the Sith</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>Sequel trilogy</td>
              <td>
                <div className="table-list">
                  <Link to="/starwars/the_force_awakens" className="table-list-link">The Force Awakens</Link>
                  <Link to="/starwars/the_last_jedi" className="table-list-link">The Last Jedi</Link>
                  <Link to="/starwars/the_rise_of_skywalker" className="table-list-link">The Rise of Skywalker</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>Animated</td>
              <td colSpan={2}>
                <div className="table-list">
                  <Link to="/starwars/the_clone_wars_film" className="table-list-link">The Clone Wars</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>Other</td>
              <td colSpan={2}>
                <div className="table-list">
                  <Link to="/starwars/rogue_one" className="table-list-link">Rogue One</Link>
                  <Link to="/starwars/solo" className="table-list-link">Solo</Link>
                </div>
              </td>
            </tr>
            <tr>
              <th rowSpan={2}>Television series</th>
              <td>Animated</td>
              <td colSpan={2}>
                <div className="table-list">
                  {starwarsSeriesAnimated.map((seriesA) => (
                    <Link to={seriesA.route} className="table-list-link" key={seriesA.id}>{seriesA.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Live-Action</td>
              <td colSpan={2}>
                <div className="table-list">
                  {starwarsSeriesLive.map((seriesL) => (
                    <Link to={seriesL.route} className="table-list-link" key={seriesL.id}>{seriesL.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Characters</td>
              <td colSpan={2}>
                <div className="table-list">
                  {starwarsChars.map((swChar) => (
                    <Link to={swChar.route} className="table-list-link" key={swChar.id}>{swChar.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableStarWars;