import { Link } from 'react-router-dom'
import { gravityFallsS1, gravityFallsS2 } from '../data/dataGravityFalls'

const TableGravityFalls = () => 
{
  return (
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
              <th colspan="2">Gravity Falls</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Season 1</td>
              <td>
                <div className="table-list">
                  {gravityFallsS1.map((s1) => (
                    <Link to={s1.route} className="table-list-link" key={s1.id}>{s1.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 2</td>
              <td>
                <div className="table-list">
                  {gravityFallsS2.map((s2) => (
                    <Link to={s2.route} className="table-list-link" key={s2.id}>{s2.title}</Link>
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

export default TableGravityFalls