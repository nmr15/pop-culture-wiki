import { Link } from "react-router-dom";
import TableCommunity from '../../components/TableCommunity'

const CommunityS1E2 = () =>
{
    return(
        <>
            <nav className="sidebar bg-dark">

            </nav>
            <main className="main px-5 py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to="/"><li className="breadcrumb-item">Home</li></Link>
                        <Link to="/community"><li className="breadcrumb-item">Community</li></Link>
                        <li className="breadcrumb-item active">Spanish 101</li>
                    </ol>
                </nav>
                <TableCommunity />
            </main>
        </>
    )
}

export default CommunityS1E2;