import { Link } from 'react-router-dom'
import { beatles } from '../data/dataBeatles';

const TableBeatles = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th colSpan={2}>The Beatles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="table-list">
                                    {beatles.map((beatle) => (
                                        <Link to={beatle.route} classNam key={beatle.id}>{beatle.title}</Link>
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

export default TableBeatles;