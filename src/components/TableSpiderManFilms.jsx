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
                    <Link to={raimi.route} className="table-list-link" key={raimi.id}>{raimi.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <th>Webb films</th>
              <td>
                <div className="table-list">
                  {webbFilms.map((webb) => (
                    <Link to={webb.route} className="table-list-link" key={webb.id}>{webb.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <th>Spider-Verse films</th>
              <td>
                <div className="table-list">
                  {spiderverseFilms.map((verse) => (
                    <Link to={verse.route} className="table-list-link" key={verse.id}>{verse.title}</Link>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <th>Sony Spider-Man Universe films</th>
              <td>
                <div className="table-list">
                  {ssuFilms.map((ssu) => (
                    <Link to={ssu.route} className="table-list-link" key={ssu.id}>{ssu.title}</Link>
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