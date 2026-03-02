import { Link } from 'react-router-dom'
import { battlefield } from '../data/dataBattlefield';

const TableBattlefield = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
                <th colSpan={2}>Battlefield</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Games</td>
                <td>
                    <div className="table-list">
                        {battlefield.map((bf) => (
                            <Link to={bf.route} className="table-list-link" key={bf.id}>{bf.title}</Link>
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

export default TableBattlefield;