import { Link } from 'react-router-dom'
import { gta } from '../data/dataGta';

const TableGta = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
                <th colSpan={2}>Grand Theft Auto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Games</td>
                <td>
                    <div className="table-list">
                        {gta.map((gta) => (
                            <Link to={gta.route} className="table-list-link" key={gta.id}>{gta.title}</Link>
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

export default TableGta;