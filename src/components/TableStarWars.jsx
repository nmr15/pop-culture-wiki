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
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableStarWars;