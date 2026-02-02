import { Link } from 'react-router-dom'

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
              <th>Original Trilogy</th>
              <td>
                <div className="table-list">
                  <Link to="/starwars/a_new_hope" className="table-list-link">A New Hope</Link>
                  <Link to="/starwars/the_empire_strikes_back" className="table-list-link">The Empire Strikes Back</Link>
                  <Link to="/starwars/return_of_the_jedi" className="table-list-link">Return of the Jedi</Link>
                </div>
              </td>
            </tr>
            <tr>
              <th>Prequel trilogy</th>
              <td>
                <div className="table-list">
                  <Link to="/starwars/the_phantom_menace" className="table-list-link">The Phantom Menace</Link>
                  <Link to="/starwars/attack_of_the_clones" className="table-list-link">Attack of the Clones</Link>
                  <Link to="/starwars/revenge_of_the_sith" className="table-list-link">Revenge of the Sith</Link>
                </div>
              </td>
            </tr>
            <tr>
              <th>Sequel trilogy</th>
              <td>
                <div className="table-list">
                  <Link to="/starwars/the_force_awakens" className="table-list-link">The Force Awakens</Link>
                  <Link to="/starwars/the_last_jedi" className="table-list-link">The Last Jedi</Link>
                  <Link to="/starwars/the_rise_of_skywalker" className="table-list-link">The Rise of Skywalker</Link>
                </div>
              </td>
            </tr>
            <tr>
              <th>Animated</th>
              <td>
                <div className="table-list">
                  <Link to="/starwars/the_clone_wars_film" className="table-list-link">The Clone Wars</Link>
                </div>
              </td>
            </tr>
            <tr>
              <th>Other</th>
              <td>
                <div className="table-list">
                  <Link to="/starwars/rogue_one" className="table-list-link">Rogue One</Link>
                  <Link to="/starwars/solo" className="table-list-link">Solo</Link>
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