import { Link } from 'react-router-dom'
import { beatles, beatlesAlbums, beatlesWtb, beatlesAnh, beatlesBfs, beatlesHlp, beatlesRbs, beatlesRvlr, beatlesSgt, beatlesMmt, beatlesTwa } from '../data/dataBeatles';

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
                            <td colSpan={2}>
                                <div className="table-list">
                                    {beatles.map((beatle) => (
                                        <Link to={beatle.route} className="table-list-link" key={beatle.id}>{beatle.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Albums</td>
                            <td>
                                <div className="table-list">
                                    {beatlesAlbums.map((album) => (
                                        <Link to={album.route} className="table-list-link" key={album.id}>{album.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>With the Beatles</td>
                            <td>
                                <div className="table-list">
                                    {beatlesWtb.map((Wtb) => (
                                        <Link to={Wtb.route} className="table-list-link" key={Wtb.id}>{Wtb.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>A Hard Day's Night</td>
                            <td>
                                <div className="table-list">
                                    {beatlesAnh.map((Anh) => (
                                        <Link to={Anh.route} className="table-list-link" key={Anh.id}>{Anh.title}</Link>
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