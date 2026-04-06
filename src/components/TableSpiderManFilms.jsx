import { Link } from 'react-router-dom'
import { raimiFilms, webbFilms, spiderverseFilms, ssuFilms } from '../data/dataSpidermanFilms'

const TableSpiderManFilms = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
              <th colSpan={2}>Spider-Man films</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Raimi films</th>
              <td>
                <div className="table-list">
                  {raimiFilms.map((raimi) => (
                    <Link to={raimi.route} className="table-list-link" key={raimi.id}{raimi.title}></Link>
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

export default TableSpiderManFilms;