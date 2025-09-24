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
                            <td>Members</td>
                            <td>
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
                        <tr>
                            <td>Beatles for Sale</td>
                            <td>
                                <div className="table-list">
                                    {beatlesBfs.map((Bfs) => (
                                        <Link to={Bfs.route} className="table-list-link" key={Bfs.id}>{Bfs.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Help</td>
                            <td>
                                <div className="table-list">
                                    {beatlesHlp.map((Hlp) => (
                                        <Link to={Hlp.route} className="table-list-link" key={Hlp.id}>{Hlp.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Rubber Soul</td>
                            <td>
                                <div className="table-list">
                                    {beatlesRbs.map((Rbs) => (
                                        <Link to={Rbs.route} className="table-list-link" key={Rbs.id}>{Rbs.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Revolver</td>
                            <td>
                                <div className="table-list">
                                    {beatlesRvlr.map((Rvlr) => (
                                        <Link to={Rvlr.route} className="table-list-link" key={Rvlr.id}>{Rvlr.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Sgt. Pepper's Lonely Hearts Club Band</td>
                            <td>
                                <div className="table-list">
                                    {beatlesSgt.map((Sgt) => (
                                        <Link to={Sgt.route} className="table-list-link" key={Sgt.id}>{Sgt.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Magical Mystery Tour</td>
                            <td>
                                <div className="table-list">
                                    {beatlesMmt.map((Mmt) => (
                                        <Link to={Mmt.route} className="table-list-link" key={Mmt.id}>{Mmt.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>The Beatles (The White Album)</td>
                            <td>
                                <div className="table-list">
                                    {beatlesTwa.map((Twa) => (
                                        <Link to={Twa.route} className="table-list-link" key={Twa.id}>{Twa.title}</Link>
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