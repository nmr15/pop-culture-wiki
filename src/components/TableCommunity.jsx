import { Link } from 'react-router-dom'
import { communitychars, communityS1, communitys2, communitys3, communitys4, communitys5, communitys6 } from "../data/dataCommunity";

const TableCommunity = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th colspan="2">Community</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Characters</td>
                            <td>
                                <div className="table-list">
                                    {communitychars.map((character) => (
                                        <Link to={character.route} className="table-list-link" key={character.id}>{character.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 1</td>
                            <td>
                                <div className="table-list">
                                    {communityS1.map((s1) => (
                                        <Link to={s1.route} className="table-list-link" key={s1.id}>{s1.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 2</td>
                            <td>
                                <div className="table-list">
                                    {communitys2.map((s2) => (
                                        <Link to={s2.route} className="table-list-link" key={s2.id}>{s2.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 3</td>
                            <td>
                                <div className="table-list">
                                    {communitys3.map((s3) => (
                                        <Link to={s3.route} className="table-list-link" key={s3.id}>{s3.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 4</td>
                            <td>
                                <div className="table-list">
                                    {communitys4.map((s4) => (
                                        <Link to={s4.route} className="table-list-link" key={s4.id}>{s4.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 5</td>
                            <td>
                                <div className="table-list">
                                    {communitys5.map((s5) => (
                                        <Link to={s5.route} className="table-list-link" key={s5.id}>{s5.title}</Link>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 6</td>
                            <td>
                                <div className="table-list">
                                    {communitys6.map((s6) => (
                                        <Link to={s6.route} className="table-list-link" key={s6.id}>{s6.title}</Link>
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

export default TableCommunity;