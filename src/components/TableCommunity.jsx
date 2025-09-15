import { communitychars, communitys1, communitys2, communitys3 } from "../data/dataCommunity";

const TableCommunity = () =>
{
    return(
        <>
            <div>
                TableCommunity
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
                                {communitychars.map((character) => (
                                    <div className="table-list" key={character.id}>
                                        <a href="#" className="table-list-link">{character.title}</a>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableCommunity;