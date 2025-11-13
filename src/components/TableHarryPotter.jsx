import { Link } from 'react-router-dom'
import { hpbooks } from '../data/dataHarryPotter'

const TableGta = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
                <th colSpan={2}>Harry Potter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Games</td>
                <td>
                    <div className="table-list">
                        {hpbooks.map((hpbook) => (
                            <Link to={hpbook.route} className="table-list-link" key={hpbook.id}>{hpbook.title}</Link>
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